# 資料：VS Codeのソース管理（公式ドキュメント）

VS Code公式ドキュメントにある、ソース管理（Gitの操作）の概要のページの要約です（2026年10月27日に確認）。

## 資料の情報

- Source control in VS Code：[https://code.visualstudio.com/docs/sourcecontrol/overview](https://code.visualstudio.com/docs/sourcecontrol/overview)
- 発行者：Microsoft（VS Code公式ドキュメント）
- 確認した日：2026年10月27日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- 概要のページで、各手順の詳細は別のページ（Quickstart、Repositories & Remotes、競合の解消など）にある。初期化、クローン、GitHubへの公開、サインインの手順はこのページには書かれていない。
- 前提：Gitを自分のコンピューターに入れておく。VS Codeはそのgitを使う。コミットの作者として、`git config --global user.name`と`git config --global user.email`で名前とメールアドレスを設定する。これは作者の表示のためで、サインインの情報ではない。
- リポジトリの用意：フォルダーを開く（File > Open Folder...）、手元で初期化して最初のコミットを作る、Gitのホストからクローンする、GitHub Repositories拡張機能でクローンせずに見る、のいずれか。手元のリポジトリを共有するには、公開するかリモートを追加する。
- 画面の部分：Source Controlの表示（変更したファイルの確認、ステージ、コミット）、差分エディター（ファイルの版を比べ、変更を部分的にステージできる）、Source Control Graph（コミット、ブランチ、取り込み待ちと送信待ちの確認）、Explorerの中のTimeline（一つのファイルのコミットと保存の履歴）、ステータスバー（今のブランチと同期の操作）。
- 変更の確認：Changesの下は未ステージの編集、Staged Changesの下は次のコミットに入る内容。
- コミット：ファイル全体または行ごとにステージしてコミットする。コミットは手元の履歴に残すだけで、何もアップロードしない。
- プッシュ、プル、同期：プッシュはコミットをアップロードし、プルはリモートのコミットを取り込む。同期（Sync）はプルのあとにプッシュする。取り込む前に、取り込み待ちの内容を確かめるよう案内されている。
- ブランチ、スタッシュ、ワークツリー：別の作業はブランチで行う。コミットしていない変更を一時的によけるのがスタッシュ、別のブランチを別のフォルダーに取り出すのがワークツリー。
- 競合：インラインの操作か3ウェイのマージエディターで解消し、操作を完了するか取り消す。
- 履歴：グラフでリポジトリ全体、Timelineで一つのファイル、Git blameで各行を最後に変えた人を見る。
- GitHub：クローンとプッシュは組み込みのGit機能で行う。プルリクエストの作成やレビュー、Issueの管理には、GitHub Pull Requests and Issues拡張機能を入れる。
- ショートカット：Source Controlの表示はCtrl+Shift+G（WindowsとLinux）、拡張機能の表示はCtrl+Shift+X。

## この資料から更新したWikiページ

- [VS Code](../tools/vs-code.md)
- [コミット](../concepts/commit.md)
