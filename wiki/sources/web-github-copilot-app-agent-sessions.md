# 資料：Copilotアプリのエージェントセッション（公式ドキュメントの再確認）

GitHubの公式ドキュメント「Working with agent sessions in the GitHub Copilot app」を、コミットとプッシュの操作が書かれているかという観点で読み直した結果の要約です（2026年10月30日に確認）。

## 資料の情報

- Working with agent sessions in the GitHub Copilot app：[https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions)
- 発行者：GitHub（公式）
- 確認した日：2026年10月30日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- セッションを始めるとき、変更を入れる場所を選べる。「New worktree」は別の作業用コピーを作って作業し、「Current checkout」は今開いているチェックアウトでそのまま作業する。ベースにするブランチも選べる（要約を通した取得内容のため、表記の細部は要確認）。
- 変更が進んでいるセッションで`/security-review`と入力すると、プルリクエストを作る前の最初の点検として、ローカルの変更を確認できる。`/rubber-duck`は、現在の計画、実装、テストへの批評を求めるコマンド。
- コードスキャンの警告などをセッションと並べて扱うには、GitHubのセキュリティ拡張機能を入れる。
- コミット、プッシュ、プルリクエストの作り方、「Changes」の表示や「Create PR」ボタンは、このページには書かれていない。「Create PR」などの名称は、すでに[別の資料](web-github-copilot-app-docs.md)にある記述で、このページでは確かめられなかった。コミットとプッシュのページを探した検索でも、アプリの手順を書いた公式ページは見つからなかった（CLIとVS Codeの説明のみ）。

## この資料から更新したページ

- [GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)
