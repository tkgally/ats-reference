# クローン

GitHubにあるリポジトリを、自分のパソコンにコピーして作業できるようにする操作、クローン（clone）についてのページです。

## クローンとは

`git clone`は、既存のリモートのリポジトリの手元のコピーを作ります。ファイル、履歴、ブランチをすべて含みます。Gitは分散型なので、それぞれのクローンは自己完結していて、中央のサーバーにつなぎ続けなくても作業できます。手元で編集したら、GitHubへプッシュして送り、他の人の変更はプルで取り込みます（[資料：コミット、クローン、マージ](../sources/web-github-commit-clone-merge.md)、2026年10月14日に確認）。

## クローンの方法

- GitHubのウェブ：リポジトリの「Code」ボタンからURLをコピーし、ターミナルで`git clone`に続けて貼り付ける。コードスペースへのクローンもできる。
- GitHub Desktop：「Code」メニューからGitHub Desktopで開く。
- GitHub CLI：`gh repo clone`にリポジトリ名を続ける。

授業でおもに使うGitHub Copilotデスクトップアプリでのクローンの操作は、公式のページで未確認です（[GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)）。

## つながらないとき

クローンに失敗したときは、HTTPSで接続できるか、リポジトリへのアクセス権があるか、既定のブランチが残っているかを確かめます。

## クローンとフォークの違い

クローンは手元へのコピーで、GitHub上の別のリポジトリは作りません。フォークはGitHub上に独立したリポジトリを作ります（[フォーク](fork.md)）。

## 関連ページ

- [リポジトリ](repository.md)
- [コミット](commit.md)
- [フォーク](fork.md)
- [プッシュ、プル、フェッチ](push-pull-fetch.md)
- [バージョン管理とGit](version-control-and-git.md)

## 出典

- [資料：コミット、クローン、マージ（GitHub Docs）](../sources/web-github-commit-clone-merge.md)
- [資料：マージの衝突とフェッチ・プル（GitHub Docs）](../sources/web-github-conflicts-fetch-pull.md)
