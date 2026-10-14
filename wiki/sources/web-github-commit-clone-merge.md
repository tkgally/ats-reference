# 資料：コミット、クローン、マージ（GitHub Docs）

GitHubの公式ドキュメントにある、Gitの基本操作（コミット、クローン、マージ）とプルリクエストのマージ方法の概説の要約です（2026年10月14日に確認）。

## 資料の情報

- About Git：[https://docs.github.com/en/get-started/using-git/about-git](https://docs.github.com/en/get-started/using-git/about-git)
- Cloning a repository：[https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- About pull request merges：[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月14日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- コミット：プロジェクトの履歴に保存される、ある時点のスナップショット。写真を撮ることにたとえられている。コミットに含めるファイルは、先に`git add`で準備（ステージ）しておく。
- クローン：既存のリモートのプロジェクトの手元のコピーを`git clone`で作る。ファイル、履歴、ブランチを含む。Gitは分散型なので、それぞれのクローンは自己完結していて、中央のサーバーにつなぎ続けなくても作業できる。
- クローンの方法：GitHubのウェブ（リポジトリの「Code」ボタンからURLをコピーし、ターミナルで`git clone`）、GitHub Desktop、GitHub CLI（`gh repo clone`）がある。ウェブからはコードスペースにクローンすることもできる。失敗したときは、HTTPSでつながるか、アクセス権があるか、既定のブランチが残っているかを確かめる。
- プッシュとプル：プッシュ（`git push`）は手元のコミットをリモートのリポジトリに送る。プル（`git pull`）はリモートの同じブランチの変更を手元に取り込む。
- マージ：`git merge`は、ふつう二つのブランチの開発の線を一つにまとめる。例は、機能ブランチを`main`に取り込むこと。このページはマージの衝突（コンフリクト）には触れていない。
- プルリクエストのマージ方法は三つある。マージコミット（既定。プルリクエストのコミットをすべて残し、合流点を加える。履歴を完全に残したいときや、コミットごとに意味があるとき）、squash and merge（すべてのコミットを一つにまとめて取り込む。一つのまとまった変更や、小さな修正コミットが多いときに向く。途中のコミットは残らない。リポジトリが許可している必要がある）、rebase and merge（各コミットを合流点なしで一つずつ土台に加え、履歴を一直線にする。新しいコミット識別子ができる。リポジトリが許可している必要がある）。どの方法も書き込み権限が要る。
- 間接的なマージ：別のプルリクエストや直接のプッシュによって、コミットが土台のブランチから到達できるようになると、そのプルリクエストはマージ済みと表示される。ブランチ保護の規則を満たしていなくてもそうなることがある。

## この資料から更新したページ

- [コミット](../concepts/commit.md)
- [クローン](../concepts/clone.md)
- [マージ](../concepts/merge.md)
