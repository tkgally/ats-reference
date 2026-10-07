#!/usr/bin/env python3
"""ATSガイド（GitHub Pagesのサイト）を組み立てるスクリプト。

使い方：
    pip install -r site/requirements.txt
    python site/build.py            # _site/ にサイトを出力する
    python site/build.py --check    # 出力に加えて、リンク切れがあれば失敗にする

入力：
    site/content/   解説ページ（Markdown、先頭にfront matter）
    site/figures/   解説ページに埋め込むSVGの図（{{svg:名前.svg}}で参照）
    site/static/    CSS、JavaScript、画像など（そのままコピー）
    site/templates/ HTMLのひな形
    wiki/           Wikiのページ（すべてHTMLにする）
    AGENTS.md、llm-wiki-j.md、raw/*.md  参照文書（HTMLにする）

詳しい約束事は site/README.md にある。
"""

from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import os
import posixpath
import re
import shutil
import sys
from dataclasses import dataclass, field
from pathlib import Path

import markdown
from markdown.extensions.toc import slugify_unicode

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
OUT = ROOT / "_site"
REPO_URL = "https://github.com/tkgally/ats-reference"
SITE_NAME = "ATSガイド"
SITE_SUBTITLE = "AIとの探検ゼミナール 学習ガイド"

# Wikiのディレクトリ名と日本語の表示名（表示順）
WIKI_CATEGORIES = [
    ("", "全体"),
    ("course", "授業"),
    ("course/sessions", "各回の記録"),
    ("people", "人物"),
    ("tools", "ツール"),
    ("campus", "学内の環境"),
    ("concepts", "概念"),
    ("answers", "質問への回答"),
    ("sources", "資料"),
]
WIKI_CATEGORY_NAMES = dict(WIKI_CATEGORIES)

# 解説ページの分類（front matterのcategoryに書く値と表示順）
GUIDE_CATEGORIES = [
    ("start", "はじめに"),
    ("github", "GitHubを使う"),
    ("copilot", "Copilotを使う"),
    ("ai", "AIを理解する"),
    ("project", "プロジェクトを進める"),
    ("reference", "調べる"),
]
GUIDE_CATEGORY_NAMES = dict(GUIDE_CATEGORIES)


@dataclass
class Page:
    src: str  # リポジトリ内のパス（posix形式）
    out: str  # _site内のパス
    kind: str  # "guide"、"wiki"、"doc"、"home"、"special"
    title: str = ""
    summary: str = ""
    meta: dict = field(default_factory=dict)
    body_md: str = ""
    body_html: str = ""
    toc_html: str = ""
    links_to: set = field(default_factory=set)  # リンク先のsrc


warnings: list[str] = []


def warn(msg: str) -> None:
    warnings.append(msg)


# ---------------------------------------------------------------- 読み込み


def parse_front_matter(text: str) -> tuple[dict, str]:
    """先頭の --- で囲まれた「key: value」の行を読む（YAMLの一部だけを扱う）。"""
    if not text.startswith("---\n"):
        return {}, text
    end = text.find("\n---\n", 4)
    if end == -1:
        return {}, text
    meta = {}
    for line in text[4:end].splitlines():
        if ":" in line and not line.lstrip().startswith("#"):
            key, value = line.split(":", 1)
            meta[key.strip()] = value.strip()
    return meta, text[end + 5 :]


def split_title(text: str) -> tuple[str, str, str]:
    """Markdownの冒頭の「# 見出し」と直後の一行の要約を取り出す。"""
    lines = text.lstrip("﻿").splitlines()
    title, summary = "", ""
    i = 0
    while i < len(lines) and not lines[i].strip():
        i += 1
    if i < len(lines) and lines[i].startswith("# "):
        title = lines[i][2:].strip()
        i += 1
        while i < len(lines) and not lines[i].strip():
            i += 1
        if i < len(lines) and not lines[i].startswith(("#", "-", "|", "<", "!", ">", "`")):
            summary = lines[i].strip()
            i += 1
    return title, summary, "\n".join(lines[i:])


def wiki_out_path(src: str) -> str:
    return src[:-3] + ".html"


def collect_pages() -> dict[str, Page]:
    pages: dict[str, Page] = {}

    # 解説ページ
    content = SITE / "content"
    for path in sorted(content.rglob("*.md")):
        rel = path.relative_to(content).as_posix()
        src = "site/content/" + rel
        meta, body = parse_front_matter(path.read_text(encoding="utf-8"))
        title, summary, body = split_title(body)
        kind = {"index.md": "home", "guide/index.md": "special"}.get(rel, "guide")
        page = Page(src=src, out=rel[:-3] + ".html", kind=kind, meta=meta, body_md=body)
        page.title = meta.get("title") or title or rel
        page.summary = meta.get("description") or summary
        pages[src] = page

    # Wiki
    for path in sorted((ROOT / "wiki").rglob("*.md")):
        src = path.relative_to(ROOT).as_posix()
        title, summary, body = split_title(path.read_text(encoding="utf-8"))
        pages[src] = Page(src=src, out=wiki_out_path(src), kind="wiki", title=title or src, summary=summary, body_md=body)

    # 参照文書
    docs = [("AGENTS.md", "docs/agents.html"), ("llm-wiki-j.md", "docs/llm-wiki-j.html")]
    for path in sorted((ROOT / "raw").glob("*.md")):
        rel = path.relative_to(ROOT).as_posix()
        docs.append((rel, "docs/" + rel[:-3] + ".html"))
    for src, out in docs:
        path = ROOT / src
        if not path.exists():
            continue
        title, summary, body = split_title(path.read_text(encoding="utf-8"))
        pages[src] = Page(src=src, out=out, kind="doc", title=title or src, summary=summary, body_md=body)
    return pages


# ---------------------------------------------------------------- 変換

HREF_RE = re.compile(r'(<a\s[^>]*?href=")([^"]*)(")')
SRC_RE = re.compile(r'(\s(?:src|poster)=")([^"]*)(")')
SVG_RE = re.compile(r"\{\{svg:([a-z0-9\-]+\.svg)\}\}")


def relurl(from_out: str, to_out: str) -> str:
    base = posixpath.dirname(from_out) or "."
    return posixpath.relpath(to_out, base)


def resolve_repo_path(page: Page, target: str) -> str:
    base = posixpath.dirname(page.src)
    return posixpath.normpath(posixpath.join(base, target))


def is_external(url: str) -> bool:
    return bool(re.match(r"^[a-zA-Z][a-zA-Z0-9+.\-]*:", url)) or url.startswith("//")


def rewrite_links(page: Page, pages: dict[str, Page], by_out: dict[str, Page], copies: dict[str, str]) -> None:
    def fix_href(m: re.Match) -> str:
        url = html.unescape(m.group(2))
        if not url or url.startswith("#") or is_external(url):
            return m.group(0)
        path, _, frag = url.partition("#")
        frag = ("#" + frag) if frag else ""
        if page.kind in ("guide", "home", "special") and path.startswith("/"):
            # 解説ページでは「/wiki/...」「/guide/...」のようにサイト内の絶対パスも書ける
            target_out = path.lstrip("/")
            if target_out in by_out or (OUT / target_out).exists() or target_out in ("search.html",):
                page.links_to.add(by_out[target_out].src if target_out in by_out else target_out)
                return m.group(1) + html.escape(relurl(page.out, target_out) + frag) + m.group(3)
            warn(f"{page.src}: リンク先が見つからない：{url}")
            return m.group(0)
        if page.kind in ("guide", "home", "special") and path.endswith(".html"):
            # HTMLのブロックの中では、出力先どうしの相対パス（例：../wiki/index.html）で書ける
            target_out = posixpath.normpath(posixpath.join(posixpath.dirname(page.out), path))
            if target_out in by_out:
                page.links_to.add(by_out[target_out].src)
                return m.group(0)
            if target_out == "search.html":
                return m.group(0)
            warn(f"{page.src}: リンク先が見つからない：{url}")
            return m.group(0)
        target = resolve_repo_path(page, path)
        if target in pages:
            page.links_to.add(target)
            new = relurl(page.out, pages[target].out) + frag
            return m.group(1) + html.escape(new) + m.group(3)
        full = ROOT / target
        if target.startswith("..") or not full.exists():
            warn(f"{page.src}: リンク先が見つからない：{url}")
            return m.group(0)
        kind = "tree" if full.is_dir() else "blob"
        return m.group(1) + html.escape(f"{REPO_URL}/{kind}/main/{target}{frag}") + m.group(3)

    def fix_src(m: re.Match) -> str:
        url = html.unescape(m.group(2))
        if not url or is_external(url) or url.startswith("data:"):
            return m.group(0)
        if url.startswith("/"):
            return m.group(1) + html.escape(relurl(page.out, url.lstrip("/"))) + m.group(3)
        target = resolve_repo_path(page, url)
        full = ROOT / target
        if not full.is_file():
            warn(f"{page.src}: 画像が見つからない：{url}")
            return m.group(0)
        out = "files/" + target
        copies[target] = out
        return m.group(1) + html.escape(relurl(page.out, out)) + m.group(3)

    page.body_html = HREF_RE.sub(fix_href, page.body_html)
    page.body_html = SRC_RE.sub(fix_src, page.body_html)


def inline_svgs(page: Page) -> None:
    def repl(m: re.Match) -> str:
        path = SITE / "figures" / m.group(1)
        if not path.exists():
            warn(f"{page.src}: 図が見つからない：{m.group(1)}")
            return ""
        svg = path.read_text(encoding="utf-8")
        svg = re.sub(r"<\?xml[^>]*\?>\s*", "", svg)
        return svg.strip()

    page.body_html = SVG_RE.sub(repl, page.body_html)


def mark_external(page: Page) -> None:
    def repl(m: re.Match) -> str:
        tag = m.group(0)
        url = m.group(2)
        if url.startswith(("http://", "https://")) and not url.startswith(REPO_URL) and "class=" not in tag:
            return tag.replace("<a ", '<a class="ext" target="_blank" rel="noopener" ', 1)
        return tag

    page.body_html = HREF_RE.sub(repl, page.body_html)


def render_markdown(page: Page) -> None:
    md = markdown.Markdown(
        extensions=["tables", "fenced_code", "sane_lists", "md_in_html", "toc", "attr_list", "def_list"],
        extension_configs={"toc": {"slugify": slugify_unicode, "toc_depth": "2-3"}},
    )
    page.body_html = md.convert(page.body_md)
    toc_tokens = getattr(md, "toc_tokens", [])
    if toc_tokens:
        items = []
        for tok in toc_tokens:
            items.append(f'<li><a href="#{tok["id"]}">{tok["name"]}</a></li>')
        page.toc_html = "<ol>" + "".join(items) + "</ol>"


# ---------------------------------------------------------------- レイアウト


def nav_guides(pages: list[Page], current: Page) -> str:
    parts = []
    for key, name in GUIDE_CATEGORIES:
        items = [p for p in pages if p.meta.get("category") == key]
        if not items:
            continue
        parts.append(f"<h3>{html.escape(name)}</h3><ul>")
        for p in items:
            cls = ' class="current" aria-current="page"' if p is current else ""
            parts.append(f'<li><a href="{relurl(current.out, p.out)}"{cls}>{html.escape(p.meta.get("short") or p.title)}</a></li>')
        parts.append("</ul>")
    return "".join(parts)


def wiki_category(src: str) -> str:
    d = posixpath.dirname(src)[len("wiki") :].lstrip("/")
    return d


def nav_wiki(pages: list[Page], current: Page) -> str:
    parts = []
    for key, name in WIKI_CATEGORIES:
        items = [p for p in pages if wiki_category(p.src) == key]
        if not items:
            continue
        parts.append(f"<h3>{html.escape(name)}</h3><ul>")
        for p in sorted(items, key=lambda p: (p.src != "wiki/index.md", p.src != "wiki/overview.md", p.src)):
            cls = ' class="current" aria-current="page"' if p is current else ""
            parts.append(f'<li><a href="{relurl(current.out, p.out)}"{cls}>{html.escape(p.title)}</a></li>')
        parts.append("</ul>")
    return "".join(parts)


def guide_sort_key(p: Page):
    cats = [k for k, _ in GUIDE_CATEGORIES]
    cat = p.meta.get("category", "reference")
    try:
        order = int(p.meta.get("order", "99"))
    except ValueError:
        order = 99
    return (cats.index(cat) if cat in cats else 99, order, p.src)


def breadcrumb(page: Page) -> str:
    home = relurl(page.out, "index.html")
    crumbs = [f'<a href="{home}">ホーム</a>']
    if page.kind == "guide":
        crumbs.append(f'<a href="{relurl(page.out, "guide/index.html")}">解説</a>')
        cat = GUIDE_CATEGORY_NAMES.get(page.meta.get("category", ""))
        if cat:
            crumbs.append(html.escape(cat))
    elif page.kind == "wiki":
        crumbs.append(f'<a href="{relurl(page.out, "wiki/index.html")}">Wiki</a>')
        cat = wiki_category(page.src)
        if cat:
            crumbs.append(html.escape(WIKI_CATEGORY_NAMES.get(cat, cat)))
    elif page.kind == "doc":
        crumbs.append("参照文書")
    return '<nav class="breadcrumb" aria-label="現在の位置">' + " <span>›</span> ".join(crumbs) + "</nav>"


def backlinks_html(page: Page, pages: dict[str, Page]) -> str:
    sources = [p for p in pages.values() if page.src in p.links_to and p is not page]
    guides = sorted([p for p in sources if p.kind == "guide"], key=guide_sort_key)
    wikis = sorted([p for p in sources if p.kind == "wiki"], key=lambda p: p.src)
    out = []
    if page.kind == "wiki" and guides:
        out.append('<aside class="related-guides"><h2>このテーマの解説ページ</h2><ul>')
        for p in guides:
            out.append(f'<li><a href="{relurl(page.out, p.out)}">{html.escape(p.title)}</a><span>{html.escape(p.summary)}</span></li>')
        out.append("</ul></aside>")
    if wikis or (page.kind != "wiki" and guides):
        out.append('<aside class="backlinks"><h2>このページにリンクしているページ</h2><ul>')
        for p in (guides if page.kind != "wiki" else []) + wikis:
            label = "解説" if p.kind == "guide" else "Wiki"
            out.append(f'<li><span class="tag">{label}</span><a href="{relurl(page.out, p.out)}">{html.escape(p.title)}</a></li>')
        out.append("</ul></aside>")
    return "".join(out)


def guide_cards(current: Page, guides: list[Page]) -> str:
    out = []
    for key, name in GUIDE_CATEGORIES:
        items = [p for p in guides if p.meta.get("category") == key]
        if not items:
            continue
        out.append(f'<section class="card-group cat-{key}"><h2>{html.escape(name)}</h2><div class="cards">')
        for p in items:
            level = p.meta.get("level", "")
            badge = f'<span class="level">{html.escape(level)}</span>' if level else ""
            out.append(
                f'<a class="card" href="{relurl(current.out, p.out)}"><span class="card-title">{html.escape(p.title)}</span>'
                f'<span class="card-desc">{html.escape(p.summary)}</span>{badge}</a>'
            )
        out.append("</div></section>")
    return "".join(out)


def recent_log(current: Page, limit: int = 6) -> str:
    log = ROOT / "wiki" / "log.md"
    if not log.exists():
        return ""
    heads = re.findall(r"^## \[(\d{4}-\d{2}-\d{2})\] (.+)$", log.read_text(encoding="utf-8"), re.M)
    items = [f"<li><time>{d}</time>{html.escape(t)}</li>" for d, t in reversed(heads[-limit:])]
    link = relurl(current.out, "wiki/log.html")
    return f'<ul class="recent">{"".join(items)}</ul><p><a href="{link}">作業記録をすべて見る</a></p>'


def render_page(page: Page, template: str, all_pages: dict[str, Page], guides: list[Page], wikis: list[Page], build_date: str) -> str:
    root = relurl(page.out, "index.html")[: -len("index.html")] or "./"
    body = page.body_html
    blocks = {"guide-cards": lambda: guide_cards(page, guides), "recent-log": lambda: recent_log(page)}
    for name, make in blocks.items():
        if "{{" + name + "}}" in body:
            body = re.sub(r"(?:<p>)?\{\{" + name + r"\}\}(?:</p>)?", lambda m: make(), body)
    body = body.replace("{{wiki-count}}", str(len(wikis)))
    body = body.replace("{{guide-count}}", str(len(guides)))

    if page.kind == "wiki":
        nav = '<p class="nav-title">Wiki</p>' + nav_wiki(wikis, page)
        source = f"{REPO_URL}/blob/main/{page.src}"
        note = f'<p class="page-source">このページは知識ベース（Wiki）の<a href="{source}" class="ext" target="_blank" rel="noopener">{page.src}</a>をHTMLにしたものです。</p>'
    elif page.kind == "doc":
        nav = '<p class="nav-title">Wiki</p>' + nav_wiki(wikis, page)
        source = f"{REPO_URL}/blob/main/{page.src}"
        note = f'<p class="page-source">リポジトリの<a href="{source}" class="ext" target="_blank" rel="noopener">{page.src}</a>をHTMLにしたものです。</p>'
    else:
        nav = '<p class="nav-title">解説</p>' + nav_guides(guides, page)
        source = f"{REPO_URL}/blob/main/{page.src}"
        note = ""

    header = ""
    if page.kind != "home":
        summary = f'<p class="lead">{html.escape(page.summary)}</p>' if page.summary else ""
        updated = page.meta.get("updated")
        meta_line = f'<p class="page-meta">最終更新：{html.escape(updated)}</p>' if updated else ""
        header = f'{breadcrumb(page)}<header class="page-header"><h1>{html.escape(page.title)}</h1>{summary}{meta_line}</header>'
    toc = ""
    if page.kind == "guide" and page.toc_html and page.meta.get("toc", "yes") != "no":
        toc = f'<details class="toc" open><summary>このページの内容</summary>{page.toc_html}</details>'

    content = header + toc + f'<div class="prose">{body}</div>' + backlinks_html(page, all_pages) + note
    title = SITE_NAME if page.kind == "home" else f"{page.title}｜{SITE_NAME}"
    desc = page.summary or SITE_SUBTITLE
    out = template
    for key, value in {
        "title": html.escape(title),
        "description": html.escape(desc),
        "root": root,
        "nav": nav,
        "content": content,
        "kind": page.kind,
        "site_name": SITE_NAME,
        "site_subtitle": SITE_SUBTITLE,
        "repo_url": REPO_URL,
        "source_url": source,
        "build_date": build_date,
    }.items():
        out = out.replace("{{" + key + "}}", value)
    return out


def plain_text(html_text: str) -> str:
    text = re.sub(r"<svg.*?</svg>", " ", html_text, flags=re.S)
    text = re.sub(r"<(script|style).*?</\1>", " ", text, flags=re.S)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


# ---------------------------------------------------------------- 本体


def build(check: bool) -> int:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    shutil.copytree(SITE / "static", OUT / "static")
    (OUT / ".nojekyll").write_text("")

    pages = collect_pages()
    by_out = {p.out: p for p in pages.values()}
    copies: dict[str, str] = {}
    for page in pages.values():
        render_markdown(page)
        inline_svgs(page)
        rewrite_links(page, pages, by_out, copies)
        mark_external(page)

    guides = sorted([p for p in pages.values() if p.kind == "guide"], key=guide_sort_key)
    wikis = [p for p in pages.values() if p.kind == "wiki"]
    template = (SITE / "templates" / "page.html").read_text(encoding="utf-8")
    build_date = dt.datetime.now(dt.timezone(dt.timedelta(hours=9))).strftime("%Y年%-m月%-d日")

    for page in pages.values():
        dest = OUT / page.out
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(render_page(page, template, pages, guides, wikis, build_date), encoding="utf-8")

    for src, out in copies.items():
        dest = OUT / out
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(ROOT / src, dest)

    # 検索用の索引
    index = []
    for p in pages.values():
        if p.kind == "home":
            continue
        label = {"guide": "解説", "wiki": "Wiki", "doc": "参照文書"}.get(p.kind, "")
        index.append({"t": p.title, "u": p.out, "k": label, "s": p.summary, "x": plain_text(p.body_html)})
    (OUT / "search-index.json").write_text(json.dumps(index, ensure_ascii=False), encoding="utf-8")

    # 検索ページ
    search = Page(src="site/build.py", out="search.html", kind="special", title="サイト内検索", summary="解説ページとWikiの全文から、言葉を探します。")
    search.body_html = (
        '<form class="search-form" role="search" onsubmit="return false">'
        '<input id="search-input" type="search" placeholder="例：コミット、Copilot、Wi-Fi" aria-label="検索語" autofocus>'
        '</form><p id="search-status" class="muted"></p><ol id="search-results" class="search-results"></ol>'
    )
    (OUT / "search.html").write_text(render_page(search, template, pages, guides, wikis, build_date), encoding="utf-8")

    for w in warnings:
        print("警告：" + w, file=sys.stderr)
    print(f"{len(pages) + 1}ページを{OUT}に出力しました（解説{len(guides)}、Wiki{len(wikis)}）。警告{len(warnings)}件。")
    return 1 if (check and warnings) else 0


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--check", action="store_true", help="警告（リンク切れなど）があれば終了コード1を返す")
    parser.add_argument("--out", help="出力先のディレクトリ（省略すると_site）")
    args = parser.parse_args()
    if args.out:
        OUT = Path(args.out).resolve()
    sys.exit(build(args.check))
