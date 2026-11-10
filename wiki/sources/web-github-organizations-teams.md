# 資料：GitHubの組織とTeam（GitHub Docs）

GitHubの公式ドキュメントにある、組織（Organization）、Team、組織での役割、Teamの同期、Copilotの利用枠の割り当ての説明の要約です（2026年11月10日に確認）。

## 資料の情報

- About organizations：[https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations)
- About teams：[https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams)
- Roles in an organization：[https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)
- Managing team synchronization for your organization：[https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization](https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)
- About repositories：[https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)（組織の所有者とリポジトリの関係の部分。ほかの部分は[資料：リポジトリと二要素認証](web-github-repositories-2fa.md)に要約がある）
- Granting access to Copilot for members of your organization：[https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-organization/manage-access/grant-access)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年11月10日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）。GitHubの一般的な説明であり、大学の組織の実際の設定は書かれていない。

## 内容の要約

組織：

- 組織は、複数の人が多くのプロジェクトで共同作業するための共有のアカウント。各自は個人のアカウントでサインインし、組織に参加する。
- 組織の所有者（owner）は、組織の資源へのアクセスを管理し、メンバーが作れるリポジトリの種類を制限するなどの設定ができる。
- 組織の所有者は、組織の中に作られたすべてのリポジトリに、常にアクセスできる（About repositories）。
- Internalの公開範囲は、GitHub Enterprise Cloudを使い、エンタープライズのアカウントが所有する組織のリポジトリで選べる（About repositories）。
- 組織は無料のプラン（GitHub Free）でも使えるが、Privateのリポジトリで使える機能は限られる。GitHub TeamとGitHub Enterprise Cloudのプランでは、Privateのリポジトリの機能がすべて使え、組織向けの機能が加わる。

役割：

- 所有者（owner）：組織のすべてを管理できる。少人数に限るが、二人以上にすることが勧められている。
- メンバー（member）：既定の、管理の権限がない役割。既定では、リポジトリやプロジェクトを作ることなどができる。
- 外部のコラボレーター（outside collaborator）：組織のメンバーではないが、組織の一つ以上のリポジトリにアクセスできる人。
- ほかに、モデレーター、支払いの管理者、セキュリティの管理者、Teamの管理者（team maintainer）などがある。

Team：

- Teamは、会社やグループの構成を反映した、組織のメンバーの集まり。組織のメンバーだけが入れ、外部のコラボレーターは入れない。
- 所有者とTeamの管理者は、Teamに対して、組織のリポジトリの読み取り、書き込み、管理の権限を与えられる。
- Teamの名前でメンションすると、Teamの全員に通知が届く。プルリクエストのレビューをTeamに頼むこともできる。
- Teamは入れ子にでき、子のTeamは親のTeamの権限を引き継ぐ。
- 公開のTeam（visible）は組織のメンバー全員が見られる。非公開のTeam（secret）は、そのTeamのメンバーと所有者だけが見られる。組織のメンバーでない人は、どのTeamも見られない。
- Teamごとにページがあり、メンバー、子のTeam、Teamのリポジトリが表示される。

Teamの同期（team synchronization）：

- GitHubのTeamを、IdP（認証の担当）のグループとつなぐ機能。IdPのグループの変更が、GitHubのTeamに自動で反映される。
- 「About teams」は、GitHub Enterprise Cloudを使う組織がこの機能を使えるとしている。同期の説明のページは、組織でSAMLのシングルサインオンを有効にする必要があり、そのためには組織がGitHub Enterprise Cloudを使っていなければならないとしている。
- 対応するIdPにはMicrosoft Entra ID（商用のテナント）とOktaがある。
- Teamに加えられるのは、すでに組織のメンバーである人だけ。Enterprise Managed Users（企業が管理するアカウント）を使う場合は、この機能は不要とされている。

Copilotの利用枠：

- Copilot Businessでは、組織の所有者が、メンバー全員、または選んだメンバーやTeamに利用枠（seat）を割り当てる。
- 料金は、利用枠を割り当てた時点から発生する（最初に使った時点ではない）。

## この資料から更新したWikiページ

- [GitHubの組織とTeam](../concepts/github-organization.md)（新規）
- [GitHub](../tools/github.md)（関連ページ）
- [GitHub Copilot](../tools/github-copilot.md)（関連ページ）
- [リポジトリ](../concepts/repository.md)（関連ページ）
- [シングルサインオン（SSO）](../concepts/single-sign-on.md)（関連ページ）
- [全体の概観](../overview.md)（確認が必要な点）
