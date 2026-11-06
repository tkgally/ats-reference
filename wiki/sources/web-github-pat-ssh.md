# 資料：GitHubの個人用アクセストークンとSSH（GitHub公式）

GitHubの公式ドキュメント二件（個人用アクセストークンの管理、SSHの説明）を、コマンドラインからGitHubにつなぐときの認証方法を知る目的で読んだ結果の要約です（2026年11月6日に確認）。

## 資料の情報

- 題名：Managing your personal access tokens
- URL：[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- 題名：About SSH
- URL：[https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年11月6日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

### 個人用アクセストークン

- パスワードの代わりに、コマンドラインやAPIでGitHubに認証するために使うトークン。自分のアカウントと同じ範囲の権限を、トークンの設定の範囲内で持つ。アカウントの権限を超えることはできない。
- 種類は二つ。細かく設定できる「fine-grained」（推奨）と、広い範囲の権限をもつ「classic」。fine-grainedは、自分または一つの組織だけ、特定のリポジトリだけ、必要な権限だけに絞れる。classicはアクセスできるすべてのリポジトリに及ぶ。
- 作る場所：プロフィール画像、Settings、Developer settings、Personal access tokens。fine-grainedは名前、有効期限、対象の所有者、リポジトリ、権限を決めて生成する。
- 有効期限：fine-grainedの既定は30日。期限なしも選べるが、組織の方針で禁止されることがある。1年使われないトークンは自動で削除される。期限を付けることが強く勧められている。
- 組織が承認を求める設定のとき、トークンは承認されるまで「pending」で、公開情報しか読めない。
- 安全のために：パスワードと同じように扱う。作る前に、GitHub CLIやGit Credential Managerで足りないかを考える。スクリプトに使うときは、GitHub ActionsやCodespacesのシークレットなどに保管する。不要になったら削除する。
- HTTPSでGitを使うとき、パスワードを聞かれたらトークンを入力する。トークンはHTTPSのリモートでのみ使える。

### SSH

- SSHを使うと、リポジトリへのアクセスのたびにユーザー名とトークンを入力せずにすむ。コミットへの署名にも使える。
- 鍵は対になっている。秘密鍵は自分のパソコンに置き、他人に見せない。公開鍵だけをGitHubのアカウントに登録する。
- 安全のために：秘密鍵にパスフレーズを付け、ssh-agentを使う。ハードウェアのセキュリティキーも使える。登録した鍵を定期的に見直し、不要・漏えいの疑いのある鍵は取り消す。1年使われない鍵は自動で削除される。
- 組織がSAMLのSSOを使っているときは、鍵を使う前に組織への認可が必要（[資料：GitHubのSAMLシングルサインオン](web-github-saml-sso.md)）。

## この資料から更新したWikiページ

- [GitHubの認証：トークンとSSHキー](../concepts/github-authentication.md)（新規）
- [シングルサインオン（SSO）](../concepts/single-sign-on.md)
- [二要素認証](../concepts/two-factor-authentication.md)
- [リポジトリのクローン](../concepts/clone.md)
