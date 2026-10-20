# 資料：VS Codeの公式ドキュメント（入門と表示言語）

VS Code公式ドキュメントにある、入門ページと表示言語の変更方法のページの要約です（2026年10月20日に確認）。

## 資料の情報

- Getting started：[https://code.visualstudio.com/docs/getstarted/getting-started](https://code.visualstudio.com/docs/getstarted/getting-started)
- Display Language：[https://code.visualstudio.com/docs/configure/locales](https://code.visualstudio.com/docs/configure/locales)
- 発行者：Microsoft（VS Code公式ドキュメント）
- 確認した日：2026年10月20日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- 入門ページ：VS Codeは、AIエージェントを使いながらプロジェクトを作れるコードエディターとして説明されている。ダウンロードのページから入手し、AI機能を有効にする。バージョン管理にはGitを別に入れる。
- 画面の主な部分：Explorer（作業フォルダー内のファイルの一覧。選ぶとエディターのタブで開く）、Source Control（変更されたファイルと差分を見て、コミットする）、チャットの表示（エディターの横に置かれ、編集しながらエージェントと作業できる）。エージェントのセッションを一覧して見守る専用の「Agents window」もある。
- コマンドパレット：WindowsとLinuxではCtrl+Shift+P、macOSでは⇧⌘Pで開く。
- 作業フォルダー：エージェントはフォルダー（ワークスペース）の中で作業する。内容を確かめてから、そのフォルダーを信頼する。
- 変更の確認とコミット：Changesの表示で、エージェントが変えたファイルの差分を見られ、そこからコミットできる。コミットメッセージはVS Codeが下書きする。チェックポイントに戻すと、そのリクエストでのファイルの変更を取り消せる。リクエストを止めても、すでに終わった操作は取り消されない。
- 表示言語：日本語のコードは`ja`。拡張機能の表示（Ctrl+Shift+X、macOSは⇧⌘X）で「Japanese」と検索し、言語パックのカテゴリーから入れる。コマンドパレットで「Configure Display Language」を実行して日本語を選ぶと切り替わる（パックが未導入なら導入される）。切り替えたあとに再起動を求められる。ほかに、`argv.json`を編集する方法と、端末で`code . --locale=ja`と起動する方法がある。
- 入門ページに書かれていないこと：対応するOS、拡張機能の説明。

## この資料から更新したWikiページ

- [VS Code](../tools/vs-code.md)
