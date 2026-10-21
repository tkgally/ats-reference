---
title: GitHub Pagesで自分のサイトを公開する
short: GitHub Pagesで公開する
description: 自分のリポジトリのファイルをウェブサイトとして公開する手順を、docs/フォルダーから公開する方法と、GitHub Actionsで公開する方法の二つについて、一歩ずつ説明します。
category: github
order: 7
level: 基本
updated: 2026年10月21日
---

GitHub Pagesを使うと、リポジトリに置いたHTMLなどのファイルが、`https://アカウント名.github.io/リポジトリ名/`のようなURLのウェブサイトになります。プロジェクトの紹介ページ、発表の資料、作ったツールのデモなどを、URL一つで人に見せられます。このガイドも、この仕組みで公開されています（[このサイトの使い方](about-this-site.md)）。

このページでは、自分のリポジトリでサイトを公開する手順を、二つの方法について説明します。画面の表記と手順は、2026年10月21日にGitHubの公式ドキュメントで確かめたものです（[資料：GitHub Pagesの公開の手順](../../../wiki/sources/web-github-pages-setup.md)）。GitHub Pagesでできることと制限の全体は、Wikiの[GitHub Pages](../../../wiki/concepts/github-pages.md)にまとめています。

<figure class="fig">
{{svg:github-pages-two-ways.svg}}
<figcaption>二つの公開の方法。どちらも、公開先のURLは同じ形になる。</figcaption>
</figure>

## どちらの方法を選ぶか

| 項目 | 方法A：docs/から公開 | 方法B：GitHub Actionsで公開 |
| :---- | :---- | :---- |
| しくみ | `docs/`フォルダーのファイルをそのまま公開する | ワークフローのファイルに書いた手順で公開する |
| 準備するもの | `docs/index.html`だけ | `.github/workflows/`のファイルと、公開するファイル |
| 向いている場面 | HTMLのページを数枚置くだけのとき | 公開の前に組み立て（変換）をしたいとき、`docs/`以外のフォルダーを公開したいとき |
| 難しさ | やさしい | 少し難しい |

はじめての人は、方法Aから始めるのがおすすめです。あとから方法Bに切り替えることもできます。

<div class="box warn" markdown="1">
<p class="box-title">始める前に：公開してよいかを確かめる</p>

GitHub Pagesのサイトは、ふつうインターネットの誰でも見られます。リポジトリをPrivateにしていても、サイトのほうは公開されることがあります。個人情報、学内限定の資料、他の人の著作物を載せないでください。

また、GitHubの無料のプラン（個人のGitHub Freeや、組織のGitHub Free）では、GitHub Pagesを使えるのはPublicのリポジトリだけです。授業の組織（tokyo-city-university）のPrivateのリポジトリでGitHub Pagesが使えるか、使えるとして誰が見られるかは、2026年10月21日時点で分かっていません（[GitHub](../../../wiki/tools/github.md)）。授業のリポジトリで公開したいとき、個人のアカウントにPublicのリポジトリを作って公開したいときは、先に教員に相談し、チームでも話し合ってください（[チームでプロジェクトを進める](teamwork.md)）。

</div>

## 公開先のURLを知っておく

自分のプロジェクトのリポジトリから公開するサイトは「プロジェクトのサイト」と呼ばれ、URLは次の形になります。

```
https://アカウント名.github.io/リポジトリ名/
```

アカウント名は、リポジトリの持ち主（個人のユーザー名か組織の名前）です。たとえば、ユーザー`hanako-y`のリポジトリ`my-project`なら、`https://hanako-y.github.io/my-project/`です。`docs/about.html`というファイルは`https://hanako-y.github.io/my-project/about.html`になります。

このほかに、`アカウント名.github.io`という名前のリポジトリを作ると、`https://アカウント名.github.io/`で公開される「ユーザーのサイト」も作れます。一つのアカウントに一つだけです。このページでは、プロジェクトのサイトを説明します。

## 方法A：docs/フォルダーから公開する

リポジトリの`main`ブランチにある`docs/`フォルダーの中身を、そのままサイトにする方法です。ここでは、ブラウザでgithub.comを使う手順を示します。Copilotデスクトップアプリで作業している人は、ステップ1をエージェントに頼んでもかまいません（後の「AIに手伝ってもらう」）。

### ステップ1：docs/index.htmlを作る

サイトの入口になるのは`index.html`というファイルです。訪問者がURLを開くと、まずこのファイルが表示されます。

<ol class="steps">
<li>github.comで自分のリポジトリを開き、<span class="ui">Add file</span>から<span class="ui">Create new file</span>を選ぶ。</li>
<li>ファイル名の欄に<code>docs/index.html</code>と入力する。<code>docs/</code>と打った時点で、フォルダーの名前として区切られる。</li>
<li>本文の欄に、下の例のようなHTMLを書く（貼り付けて、題名や文章を自分のものに変えればよい）。</li>
<li>右上の<span class="ui">Commit changes...</span>を押し、コミットメッセージ（例：「サイトの入口を追加」）を書いて、<span class="ui">Commit directly to the main branch</span>を選んだまま<span class="ui">Commit changes</span>を押す。</li>
</ol>

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>私たちのプロジェクト</title>
</head>
<body>
  <h1>私たちのプロジェクト</h1>
  <p>このサイトでは、AIとの探検ゼミナールで取り組んだプロジェクトを紹介します。</p>
  <p><a href="about.html">メンバーの紹介</a></p>
</body>
</html>
```

`<meta charset="utf-8">`の行は、日本語が文字化けしないために必要です。ページを増やすときは、`docs/about.html`のように同じフォルダーにファイルを足し、`<a href="about.html">`のようにリンクします。

<div class="box note" markdown="1">
<p class="box-title">HTMLの代わりにMarkdownでもよい</p>

方法Aでは、GitHubが公開の前にJekyll（ジェキル）という道具で、Markdownのファイルを自動でHTMLに変換します。そのため、`docs/index.md`や`docs/README.md`を入口にすることもできます（[Markdownの書き方](markdown.md)）。ただし、見た目はGitHubが決めた簡素なものになります。名前が`_`で始まるファイルやフォルダーはJekyllに無視されるので、それを公開したいときは、`docs/`の中に`.nojekyll`という空のファイルを置くと変換が行われなくなります（資料外の補足）。

</div>

### ステップ2：公開の設定をする

<ol class="steps">
<li>リポジトリの上の<span class="ui">Settings</span>を開く。見当たらないときは、<span class="ui">…</span>のメニューの中にある。<span class="ui">Settings</span>がなければ、そのリポジトリの管理者の権限がないので、持ち主か教員に頼む。</li>
<li>左のメニューの<span class="ui">Code, planning, and automation</span>の部分にある<span class="ui">Pages</span>を開く。</li>
<li><span class="ui">Build and deployment</span>の<span class="ui">Source</span>で<span class="ui">Deploy from a branch</span>を選ぶ。</li>
<li><span class="ui">Branch</span>の左のボタン（最初は<span class="ui">None</span>）で<span class="ui">main</span>を選び、右のボタンでフォルダーを<span class="ui">/(root)</span>から<span class="ui">/docs</span>に変える。</li>
<li><span class="ui">Save</span>を押す。</li>
</ol>

### ステップ3：公開されたかを確かめる

<ol class="steps">
<li>リポジトリの<span class="ui">Actions</span>タブを開く。<span class="ui">pages build and deployment</span>という実行が動いていれば、公開の処理が始まっている。緑のチェックが付けば完了、赤い×なら失敗。</li>
<li><span class="ui">Settings</span>の<span class="ui">Pages</span>に戻り、上のほうに出る<span class="ui">Visit site</span>を押す。サイトのURLもここに表示される。</li>
<li>自分のページが表示されれば成功。出るまで数分（長いと10分ほど）かかることがあるので、表示されなければ少し待って再読み込みする。</li>
</ol>

これで準備は終わりです。あとは、`docs/`の中のファイルを変更して`main`にコミットするたびに、サイトが自動で公開し直されます。

## 方法B：GitHub Actionsで公開する

GitHub Actionsは、リポジトリに変更が入ったときなどに、決めておいた作業を自動で行うGitHubの機能です。作業の手順は、`.github/workflows/`フォルダーに置くワークフローのファイル（YAMLという書式）に書きます。このガイドも、Markdownのファイルを公開の前にHTMLへ組み立てる手順を、この方法で動かしています。

### ステップ1：公開元をGitHub Actionsにする

<ol class="steps">
<li>リポジトリの<span class="ui">Settings</span>から、左のメニューの<span class="ui">Pages</span>を開く（方法Aのステップ2と同じ）。</li>
<li><span class="ui">Build and deployment</span>の<span class="ui">Source</span>で<span class="ui">GitHub Actions</span>を選ぶ。</li>
<li>おすすめのワークフローのひな型がいくつか表示される。HTMLのファイルをそのまま公開するなら、<span class="ui">Static HTML</span>の<span class="ui">Configure</span>を押す。</li>
</ol>

### ステップ2：ワークフローのファイルを確かめてコミットする

<span class="ui">Configure</span>を押すと、`.github/workflows/static.yml`というファイルの編集画面が開き、ひな型が入っています。おもな部分は次のとおりです（2026年10月21日に確かめたひな型の抜粋。番号つきの版、たとえば`@v4`は、時期によって変わります）。

```yaml
on:
  push:
    branches: ["main"]      # mainに変更が入ったら動く
  workflow_dispatch:        # Actionsタブから手で動かすこともできる

permissions:
  contents: read
  pages: write              # Pagesに公開する許可
  id-token: write

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout                     # リポジトリのファイルを取り出す
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact              # 公開するファイルをまとめる
        uses: actions/upload-pages-artifact@v3
        with:
          path: '.'                        # どのフォルダーを公開するか
      - name: Deploy to GitHub Pages       # 公開する
        id: deployment
        uses: actions/deploy-pages@v5
```

ほとんどはそのままでかまいません。直すとよいのは、`path:`の一か所です。

- `path: '.'`のままだと、リポジトリのすべてのファイル（READMEやメモも含む）が公開される。公開してよいものだけを一つのフォルダー（例：`public`）に入れ、`path: 'public'`のように書き換えるのが安全。
- そのフォルダーの一番上に`index.html`を置く。これが入口になる。

確かめたら、右上の<span class="ui">Commit changes...</span>から`main`にコミットします。`.github/`で始まるフォルダーの名前は、変えないでください。

### ステップ3：動いたかを確かめる

<ol class="steps">
<li><span class="ui">Actions</span>タブを開くと、ワークフローの実行（名前はひな型では<span class="ui">Deploy static content to Pages</span>）が動いている。</li>
<li>実行を開くと、<span class="ui">deploy</span>の箱の下に公開先のURLが出る。緑のチェックが付けば完了。</li>
<li>URLを開いてページが表示されれば成功。以後は、<code>main</code>に変更が入るたびに同じ手順が自動で動く。</li>
</ol>

### 組み立ての手順を足す（発展）

方法Bのよさは、`Upload artifact`の前に、自分の手順を足せることです。たとえば、Markdownのファイルをスクリプトで変換し、できたHTMLを`_site`というフォルダーに書き出して、`path: '_site'`で公開できます。このリポジトリの[サイトの公開のワークフロー](https://github.com/tkgally/ats-reference/blob/main/.github/workflows/pages.yml)は、Pythonのスクリプトでサイトを組み立て、リンク切れがあれば公開を止めるようにしてあります。プルリクエストでは組み立ての確認だけをして、`main`に入ったときだけ公開する、という分け方もできます（[ブランチとプルリクエストでの共同作業](github-collaboration.md)）。

こうした手順の追加は、エージェントに頼むのが近道です。ただし、ワークフローのファイルは毎回自動で動く命令なので、AIが書いた中身を読み、何をするのかを理解してからコミットしてください（[ターミナル入門](terminal-basics.md)の確かめ方と同じです）。

## AIに手伝ってもらう

Copilotデスクトップアプリなどのエージェントには、次のように頼めます。

- 方法A：「このリポジトリの`docs/`フォルダーに、プロジェクトを紹介する`index.html`を作って。日本語で、スマートフォンでも読めるように。外部のサイトから読み込むファイルは使わないで」
- 方法B：「`public`フォルダーをGitHub Pagesに公開するGitHub Actionsのワークフローを`.github/workflows/`に作って。`main`へのpushと手動の実行で動くように」

エージェントがファイルを作ってくれても、Settingsの<span class="ui">Pages</span>の設定は、自分でブラウザから行う必要があります。できたページは、公開の前に自分の目で読み、事実と違うところ、載せてはいけない情報がないかを確かめます（[AIの答えを確かめる](checking-ai-output.md)）。

## うまくいかないとき

- <span class="ui">Pages</span>のメニューがない、設定が選べない：リポジトリの管理者の権限がないか、プランやリポジトリの公開範囲の都合で使えない可能性がある。前の「始める前に」を読み、教員に相談する。
- 404（<span class="ui">There isn't a GitHub Pages site here</span>）が出る：公開の直後なら数分待つ。入口のファイル名が`index.html`（すべて小文字）か、方法Aなら`docs/`の直下にあるか、方法Bなら`path:`のフォルダーの直下にあるかを確かめる。
- 一部のページや画像だけが出ない：URLは大文字と小文字を区別する。リンクのファイル名と実際のファイル名が一字一句同じかを確かめる。また、`/style.css`のように`/`で始まるリンクは`https://アカウント名.github.io/style.css`を指してしまい、リポジトリ名の部分が抜ける。`style.css`のような相対的な書き方にする（資料外の補足）。
- 文字化けする：HTMLの`<head>`に`<meta charset="utf-8">`があるか、ファイルがUTF-8で保存されているかを確かめる。
- 変更が反映されない：<span class="ui">Actions</span>タブで、最新の実行が成功しているかを見る。失敗していたら、実行を開いて赤い×の手順のメッセージを読む。エラーのメッセージをAIに見せて、意味を聞いてもよい。ブラウザが古い版を覚えていることもあるので、再読み込みも試す。
- 方法Aで`docs/`フォルダーを消した：公開の処理が失敗する。公開をやめたいときは、次の節の方法で止める。

## 公開をやめる

公開をやめたいときは、<span class="ui">Settings</span>の<span class="ui">Pages</span>を開き、<span class="ui">Your site is live at</span>の表示の横にある<span class="ui">…</span>のメニューから<span class="ui">Unpublish site</span>を選びます。いまの公開が取り下げられますが、リポジトリのファイルや設定は消えません。もう一度公開するには、方法Aなら公開元のブランチにコミットし、方法Bならワークフローを動かします。一度公開した内容は、その間に誰かが保存したり、検索サイトに記録されたりしている可能性があるので、「あとで消せばよい」とは考えず、公開の前に確かめることが大切です。

## 次に読むページ

- [リポジトリを整える：README、.gitignore、ライセンス、公開](repo-tidy.md)
- [ブランチとプルリクエストでの共同作業](github-collaboration.md)
- [Markdownの書き方](markdown.md)
- [成果を発表する](presenting.md)
- [AIを使うときの倫理とルール](ai-ethics.md)
- Wikiの関連ページ：[GitHub Pages](../../../wiki/concepts/github-pages.md)、[GitHub](../../../wiki/tools/github.md)、[リポジトリ](../../../wiki/concepts/repository.md)
