# VS Code

GitHub Copilotを日本語で使いやすいエディター、VS Code（Visual Studio Code）についてのページです。

## この授業での位置づけ

背景資料では、GitHubの英語の画面を補う方法の一つとして挙げられています。Microsoft公式の日本語言語パックを入れれば、エディターの画面を日本語にできます。VS Codeで[GitHub Copilot](github-copilot.md)を使う場合、最も日本語で作業しやすい環境になるとされています。

VS Codeを授業で必ず使うのかどうかは、資料からは分かりません。

## 画面の主な部分

公式の入門ページ（2026年10月20日に確認）によると、画面には次のような部分があります（[資料：VS Codeの公式ドキュメント](../sources/web-vscode-docs.md)）。

- Explorer：作業フォルダー内のファイルの一覧。ファイルを選ぶと、エディターのタブで開く。
- Source Control：変更されたファイルと差分を見て、コミットする。
- チャット：エディターの横に置かれ、編集しながらエージェントと作業できる。
- コマンドパレット：WindowsとLinuxではCtrl+Shift+P、macOSでは⇧⌘Pで開き、コマンド名を入力して実行する。

エージェントは作業フォルダー（ワークスペース）の中で作業します。フォルダーは、内容を確かめてから信頼するよう案内されています。エージェントが変えたファイルの差分は「Changes」の表示で確かめられ、そこから[コミット](../concepts/commit.md)できます（メッセージの下書きはVS Codeが作る）。チェックポイントに戻せば、そのリクエストでのファイルの変更を取り消せますが、リクエストを止めても終わった操作は取り消されません。バージョン管理にはGitを別に入れる必要があります。画面の下に開く統合ターミナルについては[ターミナル](../concepts/terminal.md)にまとめています。

信頼していないフォルダーはRestricted Modeで開かれ、エージェントとターミナルが止まります。エージェントが道具を使うときの承認の仕組み（Manual permissions、Allow allなど）と警告は、[エージェントの承認と権限](../concepts/agent-permissions.md)にまとめています（2026年10月26日に確認）。

## VS CodeでGitを使う

公式のドキュメントによると、VS Codeの画面でGitの基本操作ができます（2026年10月27日に確認、[資料：VS Codeのソース管理](../sources/web-vscode-source-control.md)）。

- 前提：Gitを別に入れ、コミットの作者として名前とメールアドレスを設定しておく。これは作者の表示のためで、サインインの情報ではない。
- 開く：Source Controlの表示（Ctrl+Shift+G、macOSは⌃⇧G）。Changesの下に未ステージの編集、Staged Changesの下に次の[コミット](../concepts/commit.md)に入る内容が並ぶ。ファイル全体でも、行ごとでもステージできる。
- コミットは手元の履歴に残すだけで、アップロードはしない。アップロードは[プッシュ](../concepts/push-pull-fetch.md)で行い、同期（Sync）はプルのあとにプッシュする。取り込む前に、取り込み待ちの内容を確かめる。
- [ブランチ](../concepts/branch.md)の切り替えと同期の操作は、画面下のステータスバーからできる。履歴はSource Control Graphとエクスプローラー内のTimelineで見る。
- [マージの競合](../concepts/merge-conflict.md)は、エディターの中の操作か3ウェイのマージエディターで解消する。
- プルリクエストの作成やレビューには、GitHub Pull Requests and Issues拡張機能が要る。

## VS CodeからGitHubを使う

公式のドキュメントによると、次のようにGitHubとつなげます（2026年10月29日に確認、[資料：VS CodeとGitHubの連携、クイックスタート](../sources/web-vscode-github-quickstart.md)）。

- サインイン（Gitの操作）：拡張機能は要らない。プライベートのリポジトリをクローンするときやGitHubにプッシュするときに、VS Codeがサインインを求める。ブラウザーの案内に従い、終わったらVS Codeに戻る。ブラウザーから戻れないときは、出たトークンをコピーし、ステータスバーの「Signing in to github.com...」を選んで貼り付ける。
- サインイン（プルリクエストとIssue）：GitHub Pull Requests and Issues拡張機能を入れ、アクティビティバーのGitHubのアイコンからSign Inを選ぶ。
- クローン：コマンドパレットでGit: Cloneを実行するか、フォルダーを開いていないときにSource Controlの表示でClone Repositoryを選び、一覧から選ぶ（[クローン](../concepts/clone.md)）。
- 手元のリポジトリの公開：コマンドパレットでPublish to GitHubを実行し、サインインしてリポジトリの名前を付ける。練習ならプライベートを選ぶ、とクイックスタートにある。公開のあとは、More Actions（…）のPushでコミットを送る。
- プルリクエスト：ブランチを作ってコミットしたあと、GitHub Pull Requests: Create Pull Requestを実行する。詳しくは[プルリクエスト](../concepts/pull-request.md)にある。

授業の大学の組織（SSOでつなぐ）の下でVS Codeからサインインする具体的な流れは、資料に書かれておらず未確認です。授業では主に[GitHub Copilotデスクトップアプリ](github-copilot-app.md)を使うので、VS Codeでの操作は補助と考えてください。

## 表示を日本語にする

公式のドキュメントによる手順です（2026年10月20日に確認）。

1. 拡張機能の表示（Ctrl+Shift+X、macOSは⇧⌘X）で「Japanese」と検索し、日本語の言語パックを入れる。
2. コマンドパレットで「Configure Display Language」を実行し、日本語（`ja`）を選ぶ。パックが未導入なら、このとき導入される。
3. 再起動を求められるので、再起動する。

ほかに、端末から`code . --locale=ja`と起動する方法もあります（言語パックが入っていることが前提）。

## 資料外の補足

VS CodeはMicrosoftが無料で提供しているエディターで、Windows、macOS、Linuxで使えます。公式の入門ページには対応するOSの記載がなく、この点は筆者の一般知識によります。

## 関連ページ

- [GitHub Copilot](github-copilot.md)
- [GitHubの日本語対応](github-japanese-support.md)
- [この授業で使うAIツール](ai-tools.md)
- [コミット](../concepts/commit.md)
- [ターミナル](../concepts/terminal.md)
- [エージェントの承認と権限](../concepts/agent-permissions.md)
- [プッシュ、プル、フェッチ](../concepts/push-pull-fetch.md)
- [プルリクエスト](../concepts/pull-request.md)
- [クローン](../concepts/clone.md)
- 解説ページ：[VS CodeでCopilotを使う準備](../../site/content/guide/vscode-copilot-setup.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：VS Codeの公式ドキュメント（入門と表示言語）](../sources/web-vscode-docs.md)
- [資料：VS Codeの統合ターミナル（公式ドキュメント）](../sources/web-vscode-terminal.md)
- [資料：VS Codeのソース管理（公式ドキュメント）](../sources/web-vscode-source-control.md)
- [資料：VS Codeのエージェントの承認と権限、Workspace Trust（公式ドキュメント）](../sources/web-vscode-approvals-trust.md)
- [資料：VS CodeとGitHubの連携、ソース管理のクイックスタート（公式ドキュメント）](../sources/web-vscode-github-quickstart.md)
