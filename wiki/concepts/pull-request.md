# プルリクエスト

ブランチで行った変更を、本流に取り込んでほしいと提案し、話し合い、確かめてから取り込むためのGitHubのしくみ、プルリクエスト（pull request）についてのページです。

## プルリクエストとは

GitHub公式のドキュメントによれば、プルリクエストは変更をプロジェクトに取り込むための提案です。取り込む前に変更について話し合い、レビューし、問題を早く見つけられるため、GitHubの共同作業の中心にある機能とされています（[資料：プルリクエスト、フォーク、ブランチ](../sources/web-github-pr-fork-branch.md)、2026年10月13日に確認）。略して「PR」とも呼びます。

## 画面の構成

- Conversation：説明、議論、レビューが並ぶ。
- Files changed：変更点の差分（何がどう変わったか）を見る。
- Commits：変更の経過をコミットごとに見る。
- Checks：自動のテストやビルドの結果を見る。

## ドラフトとマージの状態

作業の途中で意見がほしいときは、ドラフトのプルリクエストにできます。ドラフトはマージできません。準備ができたら「レビューの準備ができた」にします。マージの前に解決すべきこと（足りない承認、通っていないチェックなど）は、プルリクエストの上部とマージのボックスに表示されます。マージの方法の違い（マージコミット、squash、rebase）は、この資料には書かれていません。この知識ベースのリポジトリでは、squash mergeを使っています（[AGENTS.md](../../AGENTS.md)）。

## 授業での使いどころ

GitHub Copilotデスクトップアプリでは、セッションの変更を確かめたあと、Create PRでプルリクエストを作れます（[GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)）。AIエージェントが作った変更も、プルリクエストで人が確かめてから取り込む流れにすると、間違いに気づきやすくなります（資料外の補足）。

## VS Codeでの作成

VS Codeでは、GitHub Pull Requests and Issues拡張機能を入れてサインインすると、プルリクエストを作れます。手元でブランチを作ってコミットしたあと、コマンドパレットのGitHub Pull Requests: Create Pull Requestか、Pull Requestsの表示のCreate Pull Requestを選び、ベースのブランチ、題名、説明を入れてCreateを選びます。途中の作業ならCreate Draftを選びます（2026年10月29日に確認、[資料：VS CodeとGitHubの連携](../sources/web-vscode-github-quickstart.md)）。

## 関連ページ

- [GitHub Actions](github-actions.md)
- [GitHub flow（ブランチとプルリクエストの流れ）](github-flow.md)
- [ブランチ](branch.md)
- [フォーク](fork.md)
- [Issues](github-issues.md)
- [リポジトリ](repository.md)
- [解説ページ：ブランチとプルリクエストでの共同作業](../../site/content/guide/github-collaboration.md)
- [マージ](merge.md)

## 出典

- [資料：プルリクエスト、フォーク、ブランチ（GitHub Docs）](../sources/web-github-pr-fork-branch.md)
- [資料：VS CodeとGitHubの連携、ソース管理のクイックスタート（公式ドキュメント）](../sources/web-vscode-github-quickstart.md)
