# 資料：GitHub Pagesの公開の手順（GitHub Docs）

GitHubの公式ドキュメントにある、GitHub Pagesのサイトの作り方、公開元（ブランチのフォルダーとGitHub Actions）の設定、独自のワークフロー、公開範囲、公開の取り下げの手順の要約です（2026年10月21日に確認）。

## 資料の情報

- Creating a GitHub Pages site：[https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- Configuring a publishing source for your GitHub Pages site：[https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- Using custom workflows with GitHub Pages：[https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- Changing the visibility of your GitHub Pages site（GitHub Enterprise Cloud）：[https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)
- Unpublishing a GitHub Pages site：[https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site](https://docs.github.com/en/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site)
- GitHub Actionsのひな型「Static HTML」：[https://github.com/actions/starter-workflows/blob/main/pages/static.yml](https://github.com/actions/starter-workflows/blob/main/pages/static.yml)
- 発行者：GitHub（公式ドキュメントと、公式のひな型のリポジトリ）
- 確認した日：2026年10月21日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

### 使える条件と入口のファイル

- リポジトリの持ち主がGitHub FreeまたはGitHub Free for organizationsのとき、リポジトリはPublicでなければならない。
- 入口のファイルとして、`index.html`、`index.md`、`README.md`のいずれかを探す。ブランチから公開するときは、公開元のフォルダーの一番上に置く。GitHub Actionsで公開するときは、公開するまとまり（アーティファクト）の一番上に入れる。
- 変更を送ってから反映されるまで、最大10分ほどかかることがある。1時間たっても反映されないときは、Jekyllの組み立てのエラーを確かめる。
- 公開したサイトは、Settingsの「Pages」にある「Visit site」から開ける。
- ファイルの場所がURLになる。例：`/about/contact-us.md`は`https://<user>.github.io/<repository>/about/contact-us.html`になる。

### ブランチから公開する

- 手順：リポジトリの「Settings」→左のメニューの「Code, planning, and automation」の「Pages」→「Build and deployment」の「Source」で「Deploy from a branch」→ブランチを選ぶ（最初は「None」）→フォルダーを「/(root)」か「/docs」から選ぶ→「Save」。
- 公開元のブランチに変更を送るたびに、選んだフォルダーの中身が公開される。
- 独自の組み立てが要らないサイトに向く。この方法では、GitHubがJekyllで組み立てる。`.nojekyll`というファイルを置くと、Jekyllの組み立てを飛ばしてファイルをそのまま公開する。
- `/docs`から公開していて、そのフォルダーを消すと、組み立てが「`/docs`フォルダーがない」というエラーで失敗する。
- シンボリックリンクを含むリポジトリでは、GitHub Actionsを使う必要がある。

### GitHub Actionsで公開する

- 手順：「Settings」→「Pages」→「Build and deployment」の「Source」で「GitHub Actions」を選ぶ→おすすめのワークフローのひな型を選ぶ（すでにワークフローがあれば不要）。
- Jekyll以外の組み立てをしたいときや、組み立てたファイルのためのブランチを作りたくないときに向く。
- ワークフローの典型的な流れ：既定のブランチへのpushか手動の実行で動き、`actions/checkout`で取り出し、必要なら組み立て、`actions/upload-pages-artifact`でまとめ、`actions/deploy-pages`で公開する。公開の手順はプルリクエストでは飛ばす。
- 公開の仕事には少なくとも`pages: write`と`id-token: write`の権限が要る。環境（environment）の名前は既定で`github-pages`で、なければ自動で作られる。
- 組み立てと公開を別の仕事に分けるときは、公開の側に`needs`で組み立ての仕事を指定する。
- ひな型「Static HTML」（2026年10月21日時点）は、`actions/checkout@v4`、`actions/configure-pages@v5`、`actions/upload-pages-artifact@v3`（`path: '.'`でリポジトリ全体を公開）、`actions/deploy-pages@v5`を使う。公式ドキュメントの例では、より新しい版（`checkout@v6`、`upload-pages-artifact@v4`など）が使われている。

### 公開範囲

- リポジトリがPrivateでも、プランや組織が認めていれば、サイトはインターネットに公開される。
- アクセスを限ったサイト（private visibility）はGitHub Enterprise Cloudの組織だけで使え、リポジトリの読み取り権限を持つ人だけが見られる。Enterprise Managed Usersを使う組織では、限定公開のサイトだけが作れる。
- この資料に書かれていないこと：授業の組織（tokyo-city-university）のプラン。

### 公開の取り下げ

- 「Your site is live at」の表示の横の「…」のメニューから「Unpublish site」を選ぶ。いまの公開が取り下げられるが、サイトの設定やリポジトリの中身は消えない。
- もう一度公開するには、GitHub Actionsならワークフローを動かし、ブランチなら公開元に設定してコミットする。

## この資料から更新したページ

- [GitHub Pages](../concepts/github-pages.md)
