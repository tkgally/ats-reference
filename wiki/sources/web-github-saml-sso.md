# 資料：GitHubのSAMLシングルサインオン（GitHub公式）

GitHubの公式ドキュメント「About authentication with single sign-on」を、組織でSSO認証が必要になる理由と動き方を知る目的で読んだ結果の要約です（2026年11月5日に確認）。

## 資料の情報

- 題名：About authentication with single sign-on
- URL：[https://docs.github.com/en/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on](https://docs.github.com/en/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年11月5日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- SAMLのSSOは、組織や企業の管理者が、リポジトリ、イシュー、プルリクエストなどの組織の資源へのアクセスを守るための仕組み。メンバーは組織のIdP（認証の担当）でサインインするので、個人のGitHubアカウントと、そこでの貢献の記録はそのまま使える。
- 保護された資源を開くと、GitHubがIdPのサインイン画面へ案内し、サインインが済むとGitHubに戻る。ブラウザで最近サインインしていれば、自動で認可される。一つのGitHubアカウントは、組織ごとに一つの外部の身元にしかつなげられず、その対応が組織のメンバーとチームでの権限を決める。
- SSOのセッションがないと、IdPで認証するまで組織の資源を使えない。アプリも、有効なセッションがなければSSO必須の組織にアクセスできない。公開リポジトリの閲覧、フォーク、クローンはIdPの認証なしでもできるが、イシューやプルリクエストの閲覧などにはIdPの認証が要る。
- APIやGitで保護された内容を使うには、個人用アクセストークンとSSHキーを、組織ごとに認可する必要がある。OAuthアプリとGitHub Appsは、認可のときに有効なSSOのセッションが要る。SSOが有効になった後の最初の認証のとき、以前に認可したアプリは認可し直す。
- セッションは、IdPが別に指定しない限り24時間。有効なセッションは、セキュリティの設定で確かめて管理できる。
- 管理されたユーザーアカウント（Enterprise Managed Users）との違い：SSOでは個人のアカウントを持ったまま組織に入る。EMUは企業が新しく作って管理するアカウントを使う。

## この資料から更新したWikiページ

- [シングルサインオン（SSO）](../concepts/single-sign-on.md)（新規）
