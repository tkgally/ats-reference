# 資料：VS Codeの統合ターミナル（公式ドキュメント）

VS Code公式ドキュメントにある、統合ターミナルの基本のページの要約です（2026年10月22日に確認）。

## 資料の情報

- Terminal Basics：[https://code.visualstudio.com/docs/terminal/basics](https://code.visualstudio.com/docs/terminal/basics)
- 発行者：Microsoft（VS Code公式ドキュメント）
- 確認した日：2026年10月22日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- 統合ターミナルはVS Codeに組み込まれたターミナルで、ワークスペースのルート（開いているフォルダー）から始まる。`git`や`mkdir`などの命令を実行できる。
- 開き方：メニューのTerminalまたはViewから開く。コマンドパレットで「View: Toggle Terminal」を実行する。Explorerでフォルダーを右クリックして「Open in Integrated Terminal」を選ぶ。Ctrl+`（macOSはCmd+`）で表示を切り替え、Ctrl+Shift+`で新しいターミナルを作る。
- シェル：既定のシェルはシステムの設定で決まる。PowerShell、コマンドプロンプト、Git Bash、WSLなどが検出され、新規ターミナルのボタンの横の一覧から選べる。
- 複数のターミナル：タブで切り替え、ペインを分割して並べられる。
- 作業フォルダー：新しいターミナルは、既定ではExplorerに表示されているフォルダーで開く。
- 安全面：信頼していないワークスペース（Restricted Mode）ではターミナルが使えない。統合ターミナルはVS Code自身の権限で動く。複数行を貼り付けると、既定で警告が出る。Copilotのターミナルのインラインチャットは命令を提案し、実行するか挿入するかを選べる。ターミナルの出力をチャットで参照したり、実行せずに説明を頼んだりもできる。
- このページに書かれていないこと：エージェントがターミナルの命令を自動で実行するときの承認や権限（別のページにあるとされるが、確かめていない）。

## この資料から更新したWikiページ

- [ターミナル](../concepts/terminal.md)
- [VS Code](../tools/vs-code.md)
