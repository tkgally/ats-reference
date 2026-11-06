# シングルサインオン（SSO）

一度の大学アカウントでの認証で、GitHubの組織の資源を使えるようにする仕組み、シングルサインオン（SSO）についてのページです。

## SSOとは

SSOは、組織が決めた一つの認証の窓口（IdP）で本人確認をして、ほかのサービスの利用を許す仕組みです。GitHubでは、組織の管理者がSSOを必須にすると、メンバーはリポジトリ、イシュー、プルリクエストなどを開くときに、組織のIdPでサインインします。サインインしたあとはGitHubに戻り、個人のGitHubアカウントとその貢献の記録はそのまま使えます。ブラウザで最近サインインしていれば、自動で認可されます（[資料：GitHubのSAMLシングルサインオン](../sources/web-github-saml-sso.md)、2026年11月5日に確認）。

## GitHubのサインインとSSO認証は別の処理

GitHubにサインインすることと、組織のSSO認証をすることは別です。サインインしていても、その組織のSSOのセッションがなければ、組織の資源は使えません。アプリも、有効なセッションがないとSSO必須の組織にアクセスできません。公開リポジトリの閲覧、フォーク、クローンはSSOなしでもできますが、イシューやプルリクエストの閲覧にはSSOが必要です（同じ資料）。

セッションは、IdPが別に指定しない限り24時間です。時間がたつと、もう一度認証が必要になることがあります。有効なセッションは、GitHubのセキュリティの設定で確かめられます（同じ資料）。

## この授業での使い方

授業用のGitHubの組織（tokyo-city-university）では、個人のGitHubアカウントでサインインしたあと、大学のTCUアカウント（Microsoft Entra ID）でSSO認証をします。手順は[TCUアカウント](../campus/tcu-account.md)と[GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)にあります（[資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)）。

リポジトリがアプリの一覧に出ない、「Access denied」や「Single sign-on to view this chat.」と出る、といったときは、SSOのセッションがないことが原因のことが多く、SSOのURLで認証し直すと解決します（同じ資料）。

## 管理されたユーザーアカウント（EMU）との違い

SSOでは、受講生は自分の個人アカウントを持ったまま組織に入ります。EMUは、企業が新しく作って管理するアカウントを使う方式です（[資料：GitHubのSAMLシングルサインオン](../sources/web-github-saml-sso.md)）。授業の方式は前者で、卒業後も個人アカウントを使い続けられると考えられます（[資料：Copilotデスクトップアプリを使い始めるためのガイド](../sources/20261013-GitHub-and-Copilot-information.md)、要確認）。

## トークンとSSHキー（資料外の補足を含む）

資料によると、コマンドやAPIで保護された内容を使うときは、個人用アクセストークンとSSHキーを組織ごとに認可する必要があります。授業ではデスクトップアプリを使うので多くの受講生には関係しませんが、ターミナルからGitを使うときに認証でつまずいたら、この認可を疑ってください。授業の組織で実際にどう表示されるかは未確認です（要確認）。

## 関連ページ

- [TCUアカウント](../campus/tcu-account.md)
- [GitHub](../tools/github.md)
- [GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)
- [二要素認証](two-factor-authentication.md)
- [リポジトリ](repository.md)
- [SSO認証とは：サインインが二度必要に見える理由](../../site/content/guide/sso.md)

## 出典

- [資料：GitHubのSAMLシングルサインオン](../sources/web-github-saml-sso.md)
- [資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)
- [資料：Copilotデスクトップアプリを使い始めるためのガイド](../sources/20261013-GitHub-and-Copilot-information.md)
