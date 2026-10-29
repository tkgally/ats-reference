# プッシュ、プル、フェッチ

手元のリポジトリとGitHub上のリポジトリの間で変更をやり取りする三つの操作、プッシュ（push）、プル（pull）、フェッチ（fetch）についてのページです。

## 三つの操作

- プッシュ（`git push`）：手元のブランチのコミットを、リモートのリポジトリに送って更新する。
- フェッチ（`git fetch`）：他の人の新しい作業をリモートから取得する。自分のブランチは変えない。新しいリモート追跡ブランチとタグを取得するだけで、マージはしない。
- プル（`git pull`）：フェッチとマージを一つの命令で行う。リモートの変更が、手元の作業中のブランチに取り込まれる。

（以上は[資料：マージの衝突とフェッチ・プル](../sources/web-github-conflicts-fetch-pull.md)と[資料：コミット、クローン、マージ](../sources/web-github-commit-clone-merge.md)による。2026年10月15日に確認）

## 使い分けの目安

- 手元でコミットした変更をGitHubに載せたい：プッシュ。
- GitHub上の最新の状態を手元に反映したい：プル。
- 取り込む前に、何が変わったかを見たい：フェッチ。

## VS Codeでの操作

VS Codeでは、公開済みのリポジトリでMore Actions（…）のPushからコミットを送れます。Sync Changesはプルのあとにプッシュします。手元だけにあるリポジトリは、Publish to GitHubで初めてGitHubに載せます（2026年10月29日に確認、[資料：VS CodeとGitHubの連携](../sources/web-vscode-github-quickstart.md)、[VS Code](../tools/vs-code.md)）。

## 注意

- プルはマージを伴うので、先に手元の作業をコミットしておく。
- プルで解消できない衝突が起きたら、`git merge --abort`でプルの前の状態に戻せる（[マージの衝突](merge-conflict.md)）。
- クローンは、最初に一度だけ行うコピーの作成で、その後の更新にはフェッチやプルを使う（[クローン](clone.md)）。この点は、資料の記述から読み取れる整理だが、資料に明示されてはいない（資料外の補足）。
- Copilotデスクトップアプリでこれらの操作がどの画面のどのボタンに当たるかは、今回の資料に書かれておらず未確認。

## 関連ページ

- [コミット](commit.md)
- [クローン](clone.md)
- [マージ](merge.md)
- [ブランチ](branch.md)
- [リポジトリ](repository.md)
- [バージョン管理とGit](version-control-and-git.md)

## 出典

- [資料：マージの衝突とフェッチ・プル（GitHub Docs）](../sources/web-github-conflicts-fetch-pull.md)
- [資料：コミット、クローン、マージ（GitHub Docs）](../sources/web-github-commit-clone-merge.md)
- [資料：VS CodeとGitHubの連携、ソース管理のクイックスタート（公式ドキュメント）](../sources/web-vscode-github-quickstart.md)
