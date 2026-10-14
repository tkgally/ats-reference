# TCUアカウントと多要素認証

大学の各サービスに共通のTCUアカウントと、その多要素認証についてのページです。

## TCUアカウント

[TCUアカウント](https://www.itc.tcu.ac.jp/tcuaccount/)は、大学の各サービスに共通のアカウントです。この授業では、[Microsoft 365 Copilot](../tools/microsoft-365-copilot.md)を使うときにも必要になります。TCUメール、TCUストレージ、WebClassなどの学内サービス（[学内のITサービス](it-services.md)）にも使うと思われます（要確認）。

## Googleのアカウント

TCUアカウントにはGoogleのアカウント（ユーザー名@g.tcu.ac.jp）も付いています。Gmailは有効ですが公式のメールはOutlookで、授業などの案内がない限りGmailは使いません（2026年10月7日時点。[TCUのGoogleアカウント（g.tcu.ac.jp）](tcu-google-account.md)）。

## GitHubの組織へのSSO認証

授業用のGitHubの組織（tokyo-city-university）を使うには、GitHubにサインインしたあと、大学のMicrosoft Entra IDアカウント（TCUアカウント）でSSO認証をします。SSOのURLは`https://github.com/orgs/tokyo-city-university/sso`です（2026年10月14日時点。手順は[GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)、出典は[資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)）。

## 多要素認証

TCUアカウントには[多要素認証](https://www.itc.tcu.ac.jp/mfa/)の案内があります。設定の手順や必要なもの（スマートフォンのアプリなど）については、まだ確かな資料がありません。2026年10月14日の大学の手順書では、GitHubまたは大学の認証画面で追加の本人確認や二要素認証を求められることがあり、方法は各自のアカウントの設定によって異なる、とだけ書かれています。具体的な方式は分かっていません（要確認）。

## 関連ページ

- [学内のITサービス](it-services.md)
- [Microsoft 365 Copilot](../tools/microsoft-365-copilot.md)
- [GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：Google（g.tcu.ac.jp）サービスの利用について](../sources/web-tcu-google-services.md)
- [資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)
