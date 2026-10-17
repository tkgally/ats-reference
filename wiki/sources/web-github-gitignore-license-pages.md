# 資料：.gitignore、ライセンス、GitHub Pages（GitHub Docs）

GitHubの公式ドキュメントにある、ファイルを無視する設定（.gitignore）、リポジトリのライセンス、GitHub Pagesの概要と制限の要約です（2026年10月17日に確認）。

## 資料の情報

- Ignoring files：[https://docs.github.com/en/get-started/git-basics/ignoring-files](https://docs.github.com/en/get-started/git-basics/ignoring-files)
- Licensing a repository：[https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- What is GitHub Pages?：[https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- GitHub Pages limits：[https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月17日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

### ファイルを無視する設定

- `.gitignore`は、コミットしないファイルやフォルダーを列挙するファイル。これ自体をコミットすると、リポジトリをクローンした人と規則を共有できる。
- 作り方の例：リポジトリのフォルダーでターミナルを開き、`touch .gitignore`を実行する。
- すでにGitが追跡しているファイルには、規則を足しても効かない。先に`git rm --cached ファイル名`で追跡をやめる必要がある。
- すべてのリポジトリで無視したいもの（エディターのバックアップファイルなど）は、`~/.config/git/ignore`に書く。自分だけで使い、共有しない規則は、リポジトリの`.git/info/exclude`に書く。
- OS、言語、環境ごとのひな型として、`github/gitignore`リポジトリとgitignore.ioが紹介されている。
- この資料に書かれていないこと：規則（パターン）の書き方、秘密情報の保護としての位置づけ。

### ライセンス

- ライセンスは、他の人がコードを使い、変更し、配布してよい範囲を示す。オープンソースにするには必要。
- ライセンスがないと、著作権法の既定が適用され、作者がすべての権利を持つ。他の人は複製、配布、改変ができない。
- ライセンスの本文は、リポジトリの最上位に`LICENSE.txt`、`LICENSE.md`、`LICENSE.rst`のいずれかの名前で置く。READMEで触れるだけにせず、ファイルを置くよう勧められている。
- 一覧にはMIT、Apache License 2.0、GPL（GPL-2.0、GPL-3.0）などが載るが、各ライセンスの条件の説明はない。選び方は、choosealicense.comとOpen Source Guideが紹介されている。
- ライセンスを選ぶ画面は、新しいリポジトリを作るときにだけ出る。既存のリポジトリには、ブラウザーでファイルを追加する。
- GitHubは法律事務所ではなく、情報は現状のまま提供される。法的な疑問は専門家に相談するよう書かれている。

### GitHub Pages

- HTML、CSS、JavaScriptのファイルをGitHubのリポジトリから公開する、静的サイトのホスティングサービス。必要なら公開前に組み立て（ビルド）を挟める。独自ドメインも使える。
- 種類：ユーザーまたは組織のサイト（`<アカウント名>.github.io`というリポジトリ、`https://<アカウント名>.github.io`で公開）と、プロジェクトのサイト（リポジトリの中のフォルダー、`https://<アカウント名>.github.io/<リポジトリ名>`で公開）。
- 数の制限：一つのアカウントにユーザーまたは組織のサイトは一つ。プロジェクトのサイトは一つのリポジトリに一つ。
- 訪問者のIPアドレスは、安全のために記録される。
- 利用の制限：オンラインの事業、電子商取引、商用のSaaSの無料ホスティングには使えない。GitHubの利用規約も守る。大きさは公開するサイトで1GBまで（元のリポジトリは1GB以下が推奨）、通信量は月100GBの目安、ビルドは1時間に10回の目安（GitHub Actionsの独自の流れで公開する場合は対象外）。公開の処理は10分で時間切れになる。
- パスワードやクレジットカード番号を扱うような、機微な取引には使わない。
- この資料に書かれていないこと：公開元の設定の手順、プランや公開範囲による違い（大学の組織でどうなるかは未確認）。

## この資料から更新したページ

- [.gitignore（無視するファイル）](../concepts/gitignore.md)
- [ライセンス](../concepts/license.md)
- [GitHub Pages](../concepts/github-pages.md)
- [リポジトリ](../concepts/repository.md)
- [README](../concepts/readme.md)
