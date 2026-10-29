# 資料：VS CodeとGitHubの連携、ソース管理のクイックスタート（公式ドキュメント）

VS Code公式ドキュメントにある、GitHubへのサインイン、クローン、公開、プルリクエストの作成と、ソース管理のクイックスタートの要約です（2026年10月29日に確認）。

## 資料の情報

- Working with GitHub in VS Code：[https://code.visualstudio.com/docs/sourcecontrol/github](https://code.visualstudio.com/docs/sourcecontrol/github)
- Quickstart: Source control in VS Code：[https://code.visualstudio.com/docs/sourcecontrol/quickstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart)
- 発行者：Microsoft（VS Code公式ドキュメント）
- 確認した日：2026年10月29日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- サインイン（Gitの操作）：拡張機能は要らない。プライベートのリポジトリをクローンするときやGitHubにプッシュするときに、VS Codeがサインインを求める。ブラウザーの案内に従い、終わったらVS Codeに戻る。
- サインイン（プルリクエストとIssue）：GitHub Pull Requests and Issues拡張機能を入れ、アクティビティバーのGitHubのアイコンからSign Inを選ぶ。
- ブラウザーから戻れないとき：ブラウザーに出たトークンをコピーし、VS Codeのステータスバーの「Signing in to github.com...」を選んで貼り付け、Enterを押す。
- クローン：コマンドパレットでGit: Cloneを実行するか、フォルダーを開いていないときにSource Controlの表示でClone Repositoryを選ぶ。GitHubのリポジトリの一覧から選ぶ。
- プルリクエストの作成：拡張機能を入れてサインインし、手元でブランチを作ってコミットする。GitHub Pull Requests: Create Pull Requestを実行するか、Pull Requestsの表示でCreate Pull Requestを選ぶ。ベースのブランチ、題名、説明を入れてCreateを選ぶ。リポジトリにテンプレートがあれば説明に入る。途中の作業ならCreate Draftを選ぶ。ブランチがまだ公開されていなければ、プッシュ先を選ぶ。
- クイックスタートの流れ：Gitを入れて名前とメールアドレスを設定する。空のフォルダーを開いてInitialize Repositoryを選ぶ。ファイルを作ると、Changesの下に未追跡を示すUの印で出る。ファイルの横の「+」（Stage Changes）でステージし、メッセージを入れてCommitを選ぶ。Source Control Graphで確認する。
- 公開（任意、GitHubのアカウントが必要）：コマンドパレットでPublish to GitHubを実行し、サインインしてリポジトリの名前を付ける。練習ならプライベートを選ぶ。
- 公開のあと：More Actions（…）のPushでコミットを送る。Sync Changesはプルのあとにプッシュする。
- 資料に書かれていないこと：GitHubに公開する手順は、GitHubの連携のページには書かれておらず、クイックスタートに短く出てくるだけである。ブランチの作り方は別のページ（ブランチ、スタッシュ、ワークツリー）にある。

## この資料から更新したWikiページ

- [VS Code](../tools/vs-code.md)
- [コミット](../concepts/commit.md)
- [プッシュ、プル、フェッチ](../concepts/push-pull-fetch.md)
- [プルリクエスト](../concepts/pull-request.md)
