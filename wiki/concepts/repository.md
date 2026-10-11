# リポジトリ

プロジェクトのファイルとその変更履歴を保管する場所、リポジトリ（repository）についてのページです。

## リポジトリとは

GitHub公式のドキュメントによれば、リポジトリはGitHubの最も基本的な単位で、コードやファイルとその変更履歴を保管する場所です（[資料：リポジトリと二要素認証](../sources/web-github-repositories-2fa.md)、2026年10月11日に確認）。授業のプロジェクトでは、プロジェクトのファイル、知識ベース、作業履歴を一つのリポジトリにまとめます（[GitHub](../tools/github.md)）。変更履歴を記録するしくみは[バージョン管理とGit](version-control-and-git.md)にあります。

複数の共同作業者を置くことができ、できることは権限で制御されます。

## 公開範囲

- 公開（Public）：インターネット上のだれでも見られる。
- 非公開（Private）：自分と、明示的に共有した人だけが見られる。組織のリポジトリでは、一部の組織メンバーも見られる。
- 組織内（Internal）：GitHub Enterprise Cloudで、エンタープライズのアカウントが所有する組織のリポジトリにだけある。

授業で使うリポジトリの公開範囲は、GitHubとCopilotのプランが決まってから決まる見込みです（[GitHub](../tools/github.md)）。AIに貼り付ける内容と公開範囲の関係は、[AI利用の倫理](ai-ethics.md)も参照してください。

## クローンとフォーク

- クローン：リポジトリのすべてのファイルとすべての版を、手元にまるごと複製する。
- フォーク：元のリポジトリ（アップストリーム）とコードや公開範囲の設定を共有する、自分の新しいリポジトリを作る。

## 関連ページ

- [GitHub](../tools/github.md)
- [バージョン管理とGit](version-control-and-git.md)
- [GitHub flow（ブランチとプルリクエストの流れ）](github-flow.md)
- [二要素認証](two-factor-authentication.md)

## 出典

- [資料：リポジトリと二要素認証（GitHub Docs）](../sources/web-github-repositories-2fa.md)
- [資料：GitHubのアカウント、二要素認証、共同作業者の招待](../sources/web-github-account.md)
