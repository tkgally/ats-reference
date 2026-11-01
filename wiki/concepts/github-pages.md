# GitHub Pages

リポジトリのファイルをウェブサイトとして公開するGitHubのサービス、GitHub Pagesについてのページです。

## GitHub Pagesとは

HTML、CSS、JavaScriptのファイルをGitHubのリポジトリから公開する、静的サイトのホスティングサービスです。必要なら公開の前に組み立て（ビルド）を挟めます。独自ドメインも使えます（[資料：.gitignore、ライセンス、GitHub Pages](../sources/web-github-gitignore-license-pages.md)、2026年10月17日に確認）。

## サイトの種類

- ユーザーまたは組織のサイト：`<アカウント名>.github.io`という名前のリポジトリに置き、`https://<アカウント名>.github.io`で公開される。
- プロジェクトのサイト：プロジェクトのリポジトリの中のフォルダーに置き、`https://<アカウント名>.github.io/<リポジトリ名>`で公開される。

ファイルの場所がそのままURLになります。たとえば、公開元の`about/contact-us.md`は`https://<アカウント名>.github.io/<リポジトリ名>/about/contact-us.html`になります（[資料：GitHub Pagesの公開の手順](../sources/web-github-pages-setup.md)、2026年10月21日に確認）。

このWikiの解説サイト「ATSガイド」も、プロジェクトのサイトの形で公開されています（[このサイトの使い方](../../site/content/guide/about-this-site.md)）。

## 公開元の選び方

公開の設定は、リポジトリの「Settings」→「Pages」→「Build and deployment」の「Source」で行います。選べるのは次の二つです（[資料：GitHub Pagesの公開の手順](../sources/web-github-pages-setup.md)、2026年10月21日に確認）。

| 項目 | ブランチから公開（Deploy from a branch） | GitHub Actionsで公開 |
| :---- | :---- | :---- |
| 設定 | ブランチ（例：`main`）とフォルダー（`/(root)`か`/docs`）を選ぶ | ワークフローのファイル（`.github/workflows/`）に手順を書く |
| 組み立て | GitHubがJekyllで組み立てる。`.nojekyll`を置くとそのまま公開 | ワークフローの中で自由に組み立てられる |
| 向いている場面 | 組み立てが要らない、小さなサイト | Jekyll以外の組み立てをしたいとき、組み立てたファイル用のブランチを作りたくないとき |

- 入口のファイル：`index.html`、`index.md`、`README.md`のいずれか。ブランチから公開するときは公開元のフォルダーの一番上に、GitHub Actionsのときは公開するまとまり（アーティファクト）の一番上に置く。
- 反映までの時間：変更を送ってから最大10分ほど。1時間たっても反映されないときは、組み立てのエラーを確かめる。
- GitHub Actionsのひな型：Settingsで「GitHub Actions」を選ぶと、「Static HTML」などのひな型が出る。「Static HTML」は既定でリポジトリ全体（`path: '.'`）を公開するので、公開してよいフォルダーだけに絞るとよい（絞ることは資料外の補足）。
- 権限：公開の仕事には`pages: write`と`id-token: write`の権限が要る。公開先の環境の名前は既定で`github-pages`。
- `/docs`から公開していて、そのフォルダーを消すと、公開の処理が失敗する。
- 公開の取り下げ：「Your site is live at」の横の「…」のメニューから「Unpublish site」を選ぶ。リポジトリの中身や設定は消えない。

受講生が自分のリポジトリで公開するための一歩ずつの手順は、解説ページ[GitHub Pagesで自分のサイトを公開する](../../site/content/guide/github-pages.md)にあります。このリポジトリ自身は、GitHub Actionsで公開しています。`.github/workflows/pages.yml`が、プルリクエストでは組み立てとリンクの確認だけを行い、`main`へのpushで`site/build.py`の組み立て結果（`_site/`）を公開します。

## 公開範囲とプラン

- GitHub FreeまたはGitHub Free for organizationsの持ち主のリポジトリでは、GitHub Pagesを使うにはリポジトリがPublicでなければならない（[資料：GitHub Pagesの公開の手順](../sources/web-github-pages-setup.md)）。
- リポジトリがPrivateでも、プランや組織が認めていれば、サイトはインターネットに公開される。
- 見られる人を限ったサイトは、GitHub Enterprise Cloudの組織だけで作れ、リポジトリの読み取り権限を持つ人だけが見られる。
- プランごとの違い（2026年10月24日に確認、[資料：GitHubのプランとPagesの公開範囲](../sources/web-github-plans.md)）：個人アカウントのFreeはPublicのリポジトリだけ。個人アカウントのProでも、非公開のサイトには組織のアカウントが要る。組織のTeamでも、非公開のサイトにはGitHub Enterprise Cloudが要る。
- 授業の組織（tokyo-city-university）のプランと、そのPrivateのリポジトリでGitHub Pagesが使えるか、使えるとして誰が見られるかは、2026年10月24日時点でも未確認です（[GitHub](../tools/github.md)）。試しのリポジトリはPrivateで作るよう指示されているので（2026年10月14日）、公開したいときは教員に確かめる必要があります。

## 制限と注意

- 数：ユーザーまたは組織のサイトは一つのアカウントに一つ、プロジェクトのサイトは一つのリポジトリに一つ。
- 大きさと量：公開するサイトは1GBまで、通信量は月100GB、ビルドは1時間に10回が目安（GitHub Actionsの独自のワークフローで公開する場合はビルドの回数の目安の対象外）。公開の処理は10分で時間切れになる（[資料：.gitignore、ライセンス、GitHub Pages](../sources/web-github-gitignore-license-pages.md)）。
- 使えない用途：オンラインの事業、電子商取引、商用のSaaSの無料ホスティング。
- 機微な取引：パスワードやクレジットカード番号を扱う用途には使わない。
- 記録：訪問者のIPアドレスは安全のために記録される。
- 公開すると誰でも見られる（資料外の補足）ので、個人情報や学内限定の資料を載せない。

## 関連ページ

- [GitHub Actions](github-actions.md)
- [リポジトリ](repository.md)
- [README](readme.md)
- [ライセンス](license.md)
- [GitHub](../tools/github.md)
- [GitHub Pagesで自分のサイトを公開する](../../site/content/guide/github-pages.md)
- [リポジトリを整える：README、.gitignore、ライセンス、公開](../../site/content/guide/repo-tidy.md)
- [このサイトの使い方](../../site/content/guide/about-this-site.md)

## 出典

- [資料：.gitignore、ライセンス、GitHub Pages（GitHub Docs）](../sources/web-github-gitignore-license-pages.md)
- [資料：GitHub Pagesの公開の手順（GitHub Docs）](../sources/web-github-pages-setup.md)
- [資料：GitHubのプランとPrivateリポジトリでのGitHub Pages（GitHub Docs）](../sources/web-github-plans.md)
