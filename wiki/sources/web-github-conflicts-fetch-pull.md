# 資料：マージの衝突とフェッチ・プル（GitHub Docs）

GitHubの公式ドキュメントにある、マージの衝突（コンフリクト）の概説と、リモートリポジトリから変更を取得する操作（クローン、フェッチ、プル）の要約です（2026年10月15日に確認）。

## 資料の情報

- About merge conflicts：[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)
- Getting changes from a remote repository：[https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository)
- About Git（プッシュとプルの定義の再確認）：[https://docs.github.com/en/get-started/using-git/about-git](https://docs.github.com/en/get-started/using-git/about-git)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月15日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- 衝突とは：Gitが二つのブランチの変更を自動では組み合わせられない状態。ふつう、別の行や別のファイルへの変更はGitが自動で組み合わせるが、同じファイルの同じ行に別々の変更を加えた場合や、一方がファイルを編集し他方が削除した場合には、人間の判断が要る。
- Gitの出力の例：「CONFLICT (content): Merge conflict in styleguide.md」に続けて「Automatic merge failed; fix conflicts and then commit the result.」と表示される。
- 解消の場所：単純な行の衝突はGitHubの画面で解消できることが多い。複雑な衝突は、手元のクローンで解消して、プルリクエストのブランチにプッシュする必要がある。
- 制限：Gitはどちらの版が正しいかを安全には選べないので、最終的な内容は人間が決める。衝突が残っている間は、プルリクエストの「Merge pull request」ボタンが使えない。コマンドラインでは、衝突を解消してコミットするまで、結果をプッシュできない。
- Copilotの支援：Copilotクラウドエージェントを使える場合は、リポジトリで有効なら、マージのボックスから衝突の解消を手伝わせられる（利用できるかは権限と設定による）。
- クローン：リモートリポジトリ全体の完全なコピーをパソコンに作る。新しいフォルダーをGitのリポジトリとして初期化し、`origin`という名前のリモートを設定し、すべてのファイルとコミットを取得して、既定のブランチを開く。
- フェッチ：他の人の新しい作業を取得するが、自分のブランチは変えない。新しいリモート追跡ブランチとタグを取得するだけで、マージはしない。
- プル：フェッチとマージを一つの命令でまとめて行う。マージを伴うので、先に手元の作業をコミットしておく。解消できない衝突が起きたら、`git merge --abort`でプルを始める前の状態に戻せる。
- プッシュ：手元のブランチのコミットをリモートに送り、リモートを更新する（About Gitの記述）。「Getting changes from a remote repository」のページはプッシュを扱っていない。
- この資料に書かれていないこと：衝突の目印（`<<<<<<<`など）の書式、GitHubの画面で衝突を解消する具体的な手順、Copilotデスクトップアプリでの操作。

## この資料から更新したページ

- [マージの衝突（コンフリクト）](../concepts/merge-conflict.md)
- [プッシュ、プル、フェッチ](../concepts/push-pull-fetch.md)
- [マージ](../concepts/merge.md)
- [クローン](../concepts/clone.md)
