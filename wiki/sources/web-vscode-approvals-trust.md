# 資料：VS Codeのエージェントの承認と権限、Workspace Trust（公式ドキュメント）

VS Code公式ドキュメントにある、エージェントの道具の承認と権限、安全に使うための注意、Workspace Trustのページの要約です（2026年10月26日に確認）。

## 資料の情報

- Use tools with agents：[https://code.visualstudio.com/docs/copilot/agents/agent-tools](https://code.visualstudio.com/docs/copilot/agents/agent-tools)
- Manage approvals and permissions：[https://code.visualstudio.com/docs/agents/run/approvals](https://code.visualstudio.com/docs/agents/run/approvals)
- Secure AI-Assisted Development in VS Code：[https://code.visualstudio.com/docs/agents/run/security](https://code.visualstudio.com/docs/agents/run/security)
- Workspace Trust：[https://code.visualstudio.com/docs/editing/workspaces/workspace-trust](https://code.visualstudio.com/docs/editing/workspaces/workspace-trust)
- 発行者：Microsoft（VS Code公式ドキュメント）
- 確認した日：2026年10月26日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない。取得した内容は要約を通したため、設定名などの細部は要確認）

## 内容の要約

### 承認の確認

- 承認を求める表示が出たら、道具の入力内容を開いて確かめ、問題なければAllow（許可）を選ぶ。ターミナルの命令の確認は読み取り専用で、変えたいときは拒否して、エージェントに直す点を伝える。
- 道具を有効にすることは、エージェントが使えるようにするだけで、承認や権限の設定を省略するものではない。

### 権限のレベル

`chat.permissions.default`で設定し、チャット入力欄の権限のメニューから切り替える。

- Manual permissions（既定）：道具、URL、ターミナルの承認の設定に従い、自動承認されないものは確認を求める。
- Assisted permissions（試験的）：LLMが各操作を審査し、承認しないものは確認を求める。Folder isolationが必要で、Local harnessのセッションでは使えない。
- Allow all：すべての操作を確認なしで実行する。
- Autopilot：道具を自動で承認し、エラーのやり直しや、止まる質問への回答も自動で行う。

### 個別の承認

- 道具：`chat.tools.eligibleForAutoApproval`で、確認なしで動かせる道具を決める。`false`にすると常に手動承認になる。コマンド「Chat: Manage Tool Approval」で承認を確かめ、「Chat: Reset Tool Confirmations」で消せる。
- URL：`chat.tools.urls.autoApprove`。URLに接続すること（リクエスト）と、取得した内容をチャットに加えること（レスポンス）の2段階で承認を分けられる。
- ターミナルの命令：`chat.tools.terminal.autoApprove`。命令ごとに判定し、`true`で自動承認、`false`で要承認、`/正規表現/`でパターン指定。複合した命令は、すべての部分が`true`の規則に合うときだけ自動承認される。`false`の規則が常に優先する。`chat.tools.terminal.enableAutoApprove`を切ると、すべての命令で承認を求める。
- サンドボックス：`chat.agent.sandbox.enabled`で、ターミナルの命令のファイルとネットワークへのアクセスを制限できる（macOS、Linux、WSL2はプレビュー、Windowsは試験的）。

### 資料にある警告

- Allow allとAutopilotは、ファイル編集、ターミナルの命令、外部の道具の呼び出しなど、壊す恐れのある操作の確認を省く。信頼できるワークスペースでだけ使う。
- すべての権限の確認を飛ばす設定や、すべてのワークスペースで確認をなくす設定（`chat.tools.global.autoApprove`）もあり、危険とされている。
- ターミナルの自動承認は、助けにはなるが安全の境界ではない。命令の検出には既知の抜けがある。

### 安全に使うための注意（Secure AI-Assisted Development）

- 主な危険：プロンプトインジェクション（取得したウェブの内容などに紛れた悪意ある指示が、エージェントの作業を乗っ取る）、エージェントがユーザーの権限で行う自動の操作、第三者の拡張機能やMCPサーバーの不具合や悪意、自動承認によるレビューの減少、ファイルの内容やターミナルの出力がモデルに送られることによる秘密情報の流出。
- 対策：信頼できないプロジェクトはRestricted Modeで開く。コミットやマージの前に、差分エディターですべての編集を確かめる。`.env`のような大事なファイルは手動承認にする。道具とターミナルの権限は、ワークスペースやユーザーの全体ではなくセッション単位にする。MCPサーバーの設定を確かめてから信頼する。自動承認の規則だけに頼らない。

### Workspace Trust

- 作業フォルダーの中のコードが、承認なしに自動で動くかどうかを制御するセキュリティ機能。見慣れないフォルダーを開くと、作者を信頼するかを尋ねる。信頼しない場合はRestricted Modeになる。
- Restricted Modeで止まるもの：AIエージェント、ターミナル（開こうとすると信頼を尋ねる）、タスク、デバッグ、実行ファイルを指す設定の一部、Workspace Trustへの対応を宣言していない拡張機能。文章の閲覧と編集はできる。
- 信頼の管理：バナーのManageのリンク、状態バーのRestricted Modeの表示、コマンド「Workspaces: Manage Workspace Trust」から行う。親のフォルダーを信頼すると、その下のフォルダーすべてに信頼が及ぶ。
- Workspace Trustは悪意のある拡張機能の実行を防げないので、拡張機能は信頼できる発行元のものだけを入れる。

## この資料から更新したWikiページ

- [エージェントの承認と権限](../concepts/agent-permissions.md)（新規）
- [VS Code](../tools/vs-code.md)
- [AIエージェント](../concepts/ai-agent.md)
- [ターミナル](../concepts/terminal.md)
