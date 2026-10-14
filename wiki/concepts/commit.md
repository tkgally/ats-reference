# コミット

プロジェクトの履歴に、ある時点の状態を一つの記録として保存する操作と、その記録、コミット（commit）についてのページです。

## コミットとは

GitHub公式のドキュメントによれば、コミットは、プロジェクトの履歴に保存される、ある時点のスナップショットです。写真を撮ることにたとえられています。コミットに含めたいファイルは、先に`git add`で準備（ステージ）してから、`git commit`で記録します（[資料：コミット、クローン、マージ](../sources/web-github-commit-clone-merge.md)、2026年10月14日に確認）。

Gitがデータを変更の差ではなくスナップショットとして記録する考え方は、[バージョン管理とGit](version-control-and-git.md)にあります。

## コミットメッセージ

コミットには、何を変えたかを短く書いたメッセージを付けます。このリポジトリでは、作業記録の見出しと同じ形式（例：`取り込み | 授業の背景情報`）をコミットメッセージにします（[AGENTS.md](../../AGENTS.md)）。

## コミットとプッシュの違い

コミットは手元のリポジトリに記録するだけで、GitHubには届きません。手元のコミットをGitHubに送るのがプッシュ（`git push`）です。GitHub Copilotデスクトップアプリでのコミットとプッシュの具体的な操作は、公式のページで未確認です（[GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)）。

## 関連ページ

- [バージョン管理とGit](version-control-and-git.md)
- [ブランチ](branch.md)
- [マージ](merge.md)
- [クローン](clone.md)
- [プルリクエスト](pull-request.md)

## 出典

- [資料：コミット、クローン、マージ（GitHub Docs）](../sources/web-github-commit-clone-merge.md)
