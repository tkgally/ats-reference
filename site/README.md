# ATSガイド（ウェブサイト）の作り方

このディレクトリには、GitHub Pagesで公開する解説サイト「ATSガイド」の材料と、それを組み立てるスクリプトがあります。サイトは、受講生がプロジェクトを進めながら引ける解説ページと、知識ベース（`wiki/`）のHTML版からできています。このファイルは、サイトを書き足すエージェントと人間のための約束事です。

## 構成

```
site/
├── README.md        # この文書
├── build.py         # サイトを組み立てるスクリプト
├── requirements.txt # build.pyが使うPythonのパッケージ（markdown）
├── content/         # 解説ページ（Markdown）
│   ├── index.md     # ホーム（サイトのトップページ）
│   └── guide/       # 解説ページ。guide/index.mdは一覧ページ
├── figures/         # 解説ページに埋め込むSVGの図
├── static/          # CSS、JavaScript、画像、動画など（そのまま公開される）
└── templates/       # HTMLのひな形（page.html）
```

出力先は`_site/`です（Gitでは管理しない）。`main`ブランチに変更がマージされると、`.github/workflows/pages.yml`のGitHub Actionsが`build.py`を実行し、GitHub Pagesに公開します。公開先は https://tkgally.github.io/ats-reference/ です。

## 組み立てと確認

```
pip install -r site/requirements.txt
python site/build.py --check
python -m http.server 8765 -d _site   # ブラウザで http://localhost:8765/ を開く
```

`--check`を付けると、リンク切れや見つからない図があったときに失敗します。コミットする前に、警告が0件であることを確かめてください。プルリクエストでも同じ確認がGitHub Actionsで走ります。

## 公開されるページとURL

| 元のファイル | 公開されるURL |
| :---- | :---- |
| `site/content/index.md` | `index.html`（ホーム） |
| `site/content/guide/名前.md` | `guide/名前.html` |
| `wiki/…/名前.md` | `wiki/…/名前.html` |
| `AGENTS.md`、`llm-wiki-j.md` | `docs/agents.html`、`docs/llm-wiki-j.html` |
| `raw/名前.md` | `docs/raw/名前.html` |

`build.py`は、Markdownのリンク（`[表示名](相対パス.md)`）を公開後のURLに書き換えます。リンクはGitHubの画面でもそのまま使えるよう、リポジトリ内の相対パスで書きます。解説ページからWikiへは`../../../wiki/tools/github.md`のように書きます。上の表にないファイル（`raw/`のMarkdown以外のファイル、`README.md`など）へのリンクは、GitHubの該当ファイルへのリンクになります。

Wikiのページには、そのページにリンクしている解説ページが「このテーマの解説ページ」として自動で表示されます。解説ページからWikiの関連ページへリンクしておけば、Wikiの側から解説ページへたどれるようになります。各ページの末尾には、そのページにリンクしているページの一覧（バックリンク）も自動で付きます。

## 解説ページの書き方

### front matter

各ページの先頭に、次のような情報を書きます。

```
---
title: GitHubとは：基本の考え方
short: GitHubとは
description: リポジトリ、コミット、履歴など、GitHubを使うときに知っておきたい基本の考え方を、図で説明します。
category: github
order: 1
level: 入門
updated: 2026年10月7日
---
```

- `title`：ページの題名（ページの見出しになる。本文に`# 見出し`は書かない）。
- `short`：左のメニューに出す短い名前（省略すると`title`）。
- `description`：一文の要約。ページの冒頭、一覧のカード、検索結果に出る。
- `category`：分類。`start`（はじめに）、`github`（GitHubを使う）、`copilot`（Copilotを使う）、`ai`（AIを理解する）、`project`（プロジェクトを進める）、`reference`（調べる）のどれか。
- `order`：分類の中での並び順（小さいほど先）。
- `level`：`入門`、`基本`、`発展`のどれか。
- `updated`：内容を最後に見直した日。
- `toc`：`no`と書くと「このページの内容」（目次）を出さない。

### 文章

- 読者は「AIとの探検ゼミナール」の受講生です。多くはプログラミングの経験がなく、GitHubにも慣れていません。専門用語は初出で説明し、たとえや具体例を使って平易に書きます。
- 日本語の書き方は[AGENTS.md](../AGENTS.md)の「日本語で書くための規則」に従います（段落の途中で改行しない、太字を使わない、全角の句読点と括弧、日本語と英数字の間に空白を入れない、など）。
- 本文は`## `の見出しで節に分けます。見出しは「〜とは」「〜する」のように内容が分かる短い言葉にします。
- 料金、プラン、機能、画面の表記など、時期によって変わる情報には「2026年10月時点」のように時点を書き、公式の案内へのリンクを添えます。不確かなことは断定しません。
- 授業に固有の事実（日程、配られるツール、学内のサービスなど）はWikiのページへリンクし、Wikiと食い違うことを書かないようにします。Wikiにない事実を書くときは、出典となる公式の資料にリンクします。
- ページの最後に「次に読むページ」の節を置き、関連する解説ページとWikiのページへリンクします。
- 英語の画面に出る言葉は`<span class="ui">Commit changes</span>`のように書くと、ボタンのような見た目になります。

### 囲みと部品

Markdownの中にHTMLを書くときは、中のMarkdownも変換されるように`markdown="1"`を付け、HTMLの開始タグの前後に空行を入れます。

```
<div class="box tip" markdown="1">
<p class="box-title">ポイント</p>

ここにMarkdownで本文を書く。

</div>
```

- 囲みの種類：`note`（補足、青）、`tip`（ポイント、緑）、`warn`（注意、橙）、`danger`（禁止・危険、赤）、`try`（やってみよう、紫）。
- 良い例と悪い例の対比：`<div class="compare" markdown="1">`の中に`<div class="good" markdown="1">`と`<div class="bad" markdown="1">`を並べる。
- 手順：`<ol class="steps">`の中に`<li>`を並べると、番号つきの手順になる（中はHTMLで書く）。
- 体験コーナー：`<div class="demo" data-demo="名前"></div>`と書くと、`static/site.js`の`demos`に登録した小さな対話型の教材が表示される。いまあるのは`next-token`（次の言葉の予測）、`tokens`（トークン分け）、`prompt-builder`（プロンプトの組み立て）、`paste-check`（AIに貼り付ける前の確認）。

### 図（SVG）

図は`site/figures/`にSVGファイルとして置き、本文では次のように埋め込みます。ファイル名は半角の英小文字・数字・ハイフンにします。

```
<figure class="fig">
{{svg:github-commits.svg}}
<figcaption>図の説明を一文で。</figcaption>
</figure>
```

`{{svg:…}}`の部分は、組み立てのときにSVGの中身に置き換えられます（ページの中に直接埋め込まれる）。そのため、図の色はCSSのクラスで指定し、明るい表示と暗い表示の両方で見やすくなるようにします。色を直接書かない（`fill="#2f6fdb"`などは使わない）のが原則です。

- 文字：`tx`（本文の色）、`tm`（薄い文字）、`tw`（白、色の濃い図形の上の文字）、`t-blue`など（色つきの文字）。
- 塗り：`f-blue`（濃い色）、`f-blue-s`（淡い色）。色は`blue`、`green`、`orange`、`purple`、`red`、`teal`、`yellow`、`gray`。
- 線：`s-blue`など（`fill="none"`と`stroke-width`を併せて書く）。中立の線は`ln`（薄い）、`lnf`（濃い）。
- 背景：`bg`（カードの地の色）、`bgs`（少し濃い地の色）。
- 文字の太さ：`bold`、見出し風の丸い書体は`round`。
- 動き：`anim-pulse`（点滅）、`anim-dash`（破線が流れる）、`anim-float`（ふわふわ動く）。動きを減らす設定の利用者には自動で止まる。動きの開始を順にずらすには`d1`〜`d5`（0.4秒ずつ遅らせる）を併せて付ける。

SVGには`viewBox`を付け、`width`と`height`は書きません。`role="img"`と、図の内容を説明する`aria-label`を付けます。文字の大きさは、横幅640前後の`viewBox`で12〜16程度にすると、パソコンでもスマートフォンでも読めます。スマートフォンでは、横幅の大きな図は横にスクロールして見られます。縦長の小さな図には`<figure class="fig narrow">`を使います。

図の色の使い分けの目安：GitHubの履歴やコミットは緑、ブランチや作業中のものは橙、AIは紫、人や自分のパソコンは青、注意は赤、資料や知識ベースはティール。

### 動画と画像

自分で作れる図はSVGで作ります。動きを見せたいときは、まずSVGのアニメーションや体験コーナーを考えます。動画（MP4）が必要なら、ffmpegなどで作り、`site/static/media/`に置いて`<video controls>`で埋め込みます。ファイルは数MB以内にします。外部のサービスで画像を作った場合は、作ったサービス、モデル、日付を、ページの末尾か図の説明に書きます。

## 外部のサービスの利用

画像の生成など、自分で作れない素材が必要なときは、環境変数`OPENROUTER_API_KEY`のOpenRouterを使えます。上限は、このプロジェクトでの利用について1日あたり5ドルです。キーはほかの用途と共用なので、キー全体の利用額ではなく`site/openrouter-log.md`の記録で数えます。リクエストに`"usage": {"include": true}`を付けると応答の`usage.cost`に費用が入るので、使うたびに日付、目的、モデル、費用を書き足します。

## Wikiとの関係

- 解説ページを書く途中で、授業に固有の新しい事実や、Wikiに足すとよい情報が分かったら、Wikiのページにも反映します（手順は`AGENTS.md`に従い、作業記録に書く）。
- Wikiのページの「関連ページ」の節では、関係する解説ページへ`../../site/content/guide/名前.md`のようにリンクできます。
