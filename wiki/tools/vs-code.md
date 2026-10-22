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
- 解説ページ：[VS CodeでCopilotを使う準備](../../site/content/guide/vscode-copilot-setup.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：VS Codeの公式ドキュメント（入門と表示言語）](../sources/web-vscode-docs.md)
- [資料：VS Codeの統合ターミナル（公式ドキュメント）](../sources/web-vscode-terminal.md)
