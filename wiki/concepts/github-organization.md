# GitHubの組織とTeam

複数の人が共同で使うGitHubの共有アカウントである組織（Organization）と、その中のメンバーのグループであるTeamについてのページです。

## 組織とは

組織（Organization）は、複数の人が多くのプロジェクトで共同作業するための、共有のアカウントです。組織用の別のアカウントでサインインするのではなく、各自が個人のGitHubアカウントでサインインし、組織に参加して使います（[資料：GitHubの組織とTeam](../sources/web-github-organizations-teams.md)、2026年11月10日に確認）。

リポジトリには持ち主（Owner）があり、個人のアカウントか組織のどちらかになります。組織が持ち主のリポジトリは、個人のものではなく組織のものとして管理されます。[リポジトリ](repository.md)も参照してください。

## 組織での役割

組織に関わる人には役割があります。主なものは次のとおりです（同じ資料）。

- 所有者（owner）：組織のすべてを管理できる。メンバーが作れるリポジトリの種類を制限するなどの設定もできる。
- メンバー（member）：既定の役割。管理の権限はないが、既定ではリポジトリやプロジェクトを作ることなどができる。
- 外部のコラボレーター（outside collaborator）：組織のメンバーではないが、組織の特定のリポジトリにアクセスできる人。

所有者は、組織の中に作られたすべてのリポジトリに、常にアクセスできます。Privateのリポジトリでも、組織の所有者には見えることを覚えておいてください（同じ資料）。

## Teamとは

Teamは、組織のメンバーをまとめたグループです。組織のメンバーだけが入れます（同じ資料）。

- 権限をまとめて与える：Teamに対して、リポジトリの読み取り、書き込み、管理の権限を与えられる。一人ずつ設定しなくてよい。
- まとめて知らせる：Teamの名前でメンションすると、Teamの全員に通知が届く。プルリクエストのレビューをTeamに頼むこともできる。
- 入れ子にできる：子のTeamは親のTeamの権限を引き継ぐ。
- 見える範囲：公開のTeam（visible）は組織のメンバー全員が見られ、非公開のTeam（secret）はそのTeamのメンバーと所有者だけが見られる。組織の外の人は、どのTeamも見られない。

「Team」という言葉は、GitHubで二つの意味に使われるので注意してください。一つはこのページで説明しているメンバーのグループ、もう一つは「GitHub Team」という組織向けの料金プランの名前です。

## Teamの同期

Teamの同期（team synchronization）は、GitHubのTeamを、組織が使う認証の担当（IdP）のグループとつなぐ機能です。IdPの側でグループの顔ぶれが変わると、GitHubのTeamにも自動で反映されます。対応するIdPにはMicrosoft Entra IDがあります。この機能を使うには、組織でSAMLの[シングルサインオン（SSO）](single-sign-on.md)が有効になっている必要があります（同じ資料）。

## この授業での組織とTeam

2026年10月14日の大学の手順書によれば、授業で使う組織は「TCU Copilot Teaching Platform」（組織名はtokyo-city-university）です（[資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)）。

- 受講生は、個人のGitHubアカウントでサインインし、大学のTCUアカウントでSSO認証をして、組織の資源を使う。
- 授業ごとにTeamがあり、履修者が登録される。大学のMicrosoft Entra IDのグループとGitHubのTeamが同期されている（手順書の言葉では「Team Sync」）。
- Copilot Business（有償版）の利用枠は、授業用のTeamに割り当てられている。公式ドキュメントでも、Copilot Businessの利用枠は、組織の所有者がメンバーやTeamに割り当てるものと説明されている。
- 組織への参加、Teamへの所属、利用枠の適用は、受講生が自分で設定する作業ではない。
- リポジトリを作るときは、持ち主（Owner）に自分のアカウントではなくtokyo-city-universityを選ぶ。手順は[GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)にある。

## 大学の組織のプランについての推測

大学の組織がGitHubのどのプランを使っているかは、授業の資料には書かれていません。ただし、公式ドキュメントは、Teamの同期をGitHub Enterprise Cloudを使う組織の機能として説明しています。手順書がTeamの同期に触れていることから、大学の組織はGitHub Enterprise Cloudを使っていると思われます（エージェントの推測、要確認。2026年11月10日時点）。

この推測が正しければ、組織内だけで共有するInternalのリポジトリや、見られる人を限ったGitHub Pagesのサイトが、仕組みの上では使える可能性があります。ただし、Internalはエンタープライズのアカウントが所有する組織に限られ、実際に使えるかは大学の設定によります。授業でどの公開範囲を使うかは、担当教員の指示に従ってください（[GitHub](../tools/github.md)、[GitHub Pages](github-pages.md)）。

## 受講生が知っておくとよいこと

- 自分のGitHubアカウントは個人のもので、組織の下に作ったリポジトリは組織のもの。組織のリポジトリは、組織の所有者（大学の管理者と思われる）が管理できる。学期が終わったあとに組織のリポジトリやCopilotの利用枠がどうなるかは、まだ分かっていない（要確認）。残したいものは、学期が終わる前に担当教員に相談するとよい（資料外の補足）。
- 組織のリポジトリやCopilotが使えないときは、まずSSO認証をやり直す。それでも使えなければ、Teamへの登録の問題かもしれないので、画面のメッセージを記録して授業担当者に連絡する（Teamへの登録が原因になりうるという点は資料外の補足）。

## 関連ページ

- [GitHub](../tools/github.md)
- [リポジトリ](repository.md)
- [シングルサインオン（SSO）](single-sign-on.md)
- [GitHub Copilot](../tools/github-copilot.md)
- [GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)
- [TCUアカウントと多要素認証](../campus/tcu-account.md)
- [GitHub Pages](github-pages.md)
- [プルリクエスト](pull-request.md)
- [SSO認証とは：サインインが二度必要に見える理由](../../site/content/guide/sso.md)

## 出典

- [資料：GitHubの組織とTeam（GitHub Docs）](../sources/web-github-organizations-teams.md)
- [資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)
- [資料：GitHubのプランとPrivateリポジトリでのGitHub Pages（GitHub Docs）](../sources/web-github-plans.md)
