# 資料：リポジトリと二要素認証（GitHub Docs）

GitHubの公式ドキュメントにある、リポジトリの基本と二要素認証の概説の要約です（2026年10月11日に確認）。

## 資料の情報

- About repositories：[https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- About two-factor authentication：[https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月11日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- リポジトリ：GitHubの最も基本的な単位で、コードやファイルとその変更履歴を保管する場所。複数の共同作業者を置け、権限でアクセスを制御できる。
- 公開範囲：公開（Public）はインターネット上のだれでも見られる。非公開（Private）は自分と、明示的に共有した人（組織のリポジトリでは一部の組織メンバー）だけが見られる。組織内（Internal）は、GitHub Enterprise Cloudでエンタープライズのアカウントが所有する組織のリポジトリにだけある。
- クローン：リポジトリのすべてのファイルとすべての版を、手元にまるごと複製すること。
- フォーク：元のリポジトリ（アップストリーム）とコードや公開範囲の設定を共有する、新しいリポジトリを作ること。
- 二要素認証：パスワードに加えて、本人だけが持つ第二の要素を入力する、ログイン時の追加の手順。
- 二要素認証の方法：認証アプリ（時間で変わる一回限りのコード）、SMS、セキュリティキー（FIDO2などの物理キー、Touch IDやWindows Helloなど）、GitHub Mobile（認証アプリかSMSを設定したあとで第二の要素にできる）。パスキーは任意で、ログインを一段階で済ませられるが、締め出しを避けるため認証アプリやSMSなどの予備の方法を残すよう勧められている。
- リカバリーコード：設定時に保存する。スマートフォンなどを失ったときにログインできる。二要素認証の情報と回復手段を失うと、GitHubサポートでもアカウントを復旧できないため、保管が重要。
- 組織の所有者は、メンバーなどに二要素認証を必須にできる。

## この資料から更新したページ

- [リポジトリ](../concepts/repository.md)
- [二要素認証](../concepts/two-factor-authentication.md)
