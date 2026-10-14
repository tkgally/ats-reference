# GitHub

この授業でプロジェクトのファイル、知識ベース、作業履歴を管理するのに使うGitHubについてのページです。

## この授業での役割

GitHubは、プロジェクトのファイル、知識ベース、作業履歴を管理する場所として使います。第2回（2026年10月7日）の授業では、GitHubと[LLM Wiki](../concepts/llm-wiki.md)の考え方を使って、AIエージェントで長期プロジェクトの知識ベースを作る方法が実演されました（[第2回の記録](../course/sessions/session-02.md)）。この知識ベースもGitHubのリポジトリに置かれています。

授業では、リポジトリでの作業はおもに[GitHub Copilotデスクトップアプリ](github-copilot-app.md)から行います（2026年10月13日、担当教員）。授業用のGitHubの組織は「TCU Copilot Teaching Platform」（tokyo-city-university）で、受講生は個人のGitHubアカウントで入り、大学のSSO認証で組織につなぎます。リポジトリは組織の下に`ats-名字-test-1`のような名前でPrivateに作ります（2026年10月14日時点。手順は[GitHub Copilotデスクトップアプリ](github-copilot-app.md)、出典は[資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)）。

## 覚えておくとよい操作

GitHubの画面は英語ですが、この授業では次のような必要な操作に絞って覚えれば十分とされています。

- リポジトリの作成
- ファイルと履歴の確認
- 招待の承諾

それ以外の作業の多くは、AIエージェントに日本語で頼んで進められます。英語の画面を補う方法は[GitHubの日本語対応](github-japanese-support.md)にまとめています。

## アカウントと招待について（2026年10月7日時点）

GitHubの公式ドキュメントによれば、GitHubはコードを投稿する多くのアカウントに二要素認証を求めています。学生はGitHub Educationに在籍の証明を示して申し込むと、Copilotを無料で使える特典などを受けられます。チームで一つのリポジトリを使うときは、リポジトリの持ち主がSettings → Collaboratorsから仲間を招待し、招待された人が7日以内に承諾します（[資料：GitHubのアカウント、二要素認証、共同作業者の招待](../sources/web-github-account.md)）。この授業で受講生がGitHub Educationに申し込む必要があるかどうかは、資料からは分かりません（要確認）。

## リポジトリの公開範囲

2026年10月14日の大学の手順書では、試しのリポジトリは組織 tokyo-city-university の下にPrivateで作るよう指示されています（[資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)）。プロジェクト用のリポジトリの公開範囲や、Internalが使えるかは、まだ分かっていません。以下は10月7日時点の記述です。

授業で使うリポジトリを公開と非公開のどちらにするかは、2026年10月7日時点で決まっていません。大学はGitHubとCopilotのプランをMicrosoftと調整しているところで、学内（TCU）だけで共有できる3つ目の選択肢が使えるようになるかもしれません（[資料：教員からの連絡（2026年10月7日）](../sources/instructor-note-2026-10-07.md)）。GitHubには、組織向けの契約で使える「Internal」（組織のメンバーだけが見られる）という公開範囲があり（[資料：GitHubのアカウント、二要素認証、共同作業者の招待](../sources/web-github-account.md)）、それに当たる可能性があります（推測、要確認）。プランの詳細が分かったら、この節を更新します。

## 知識ベースに使う利点

[LLM Wiki（日本語版）](../../llm-wiki-j.md)によれば、GitHubで知識ベースを運用すると、変更履歴、ブランチ、共同作業が自然に手に入ります。エージェントによる更新をコミットごとに確認でき、問題があれば元に戻せます。リポジトリの画面が、Wikiを読むための閲覧ツールの役目も果たします。

## 関連ページ

- [バージョン管理とGit](../concepts/version-control-and-git.md)
- [GitHub flow（ブランチとプルリクエストの流れ）](../concepts/github-flow.md)
- [Markdown](../concepts/markdown.md)
- [リポジトリ](../concepts/repository.md)
- [二要素認証](../concepts/two-factor-authentication.md)
- [GitHubの日本語対応](github-japanese-support.md)
- [GitHub Copilot](github-copilot.md)
- [LLM Wiki](../concepts/llm-wiki.md)
- [この授業で使うAIツール](ai-tools.md)
- 解説ページ：[GitHubとは：基本の考え方](../../site/content/guide/github-basics.md)、[GitHubを始める](../../site/content/guide/github-first-steps.md)、[ブランチとプルリクエストでの共同作業](../../site/content/guide/github-collaboration.md)、[Markdownの書き方](../../site/content/guide/markdown.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：GitHubのアカウント、二要素認証、共同作業者の招待](../sources/web-github-account.md)
- [資料：教員からの連絡（2026年10月7日、GitHubとCopilotのプラン）](../sources/instructor-note-2026-10-07.md)
- [資料：TCU GitHub Copilot 学生向け利用手順](../sources/tcu-github-copilot-student-procedure.md)
- [LLM Wiki（日本語版）](../../llm-wiki-j.md)（リポジトリ直下の参照文書）
