# 資料：Model Context Protocol（MCP）の紹介とアーキテクチャ

MCPの公式ドキュメントのうち、概要のページ（What is the Model Context Protocol）と構造のページ（Architecture overview）を、MCPの考え方と構成要素を知る目的で読んだ結果の要約です（2026年11月3日に確認）。

## 資料の情報

- What is the Model Context Protocol (MCP)?：[https://modelcontextprotocol.io/docs/getting-started/intro](https://modelcontextprotocol.io/docs/getting-started/intro)
- Architecture overview：[https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture.md](https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture.md)
- 発行者：Model Context Protocolプロジェクト（公式ドキュメント）
- 確認した日：2026年11月3日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- MCPは、AIアプリケーションを外部のシステムにつなぐためのオープンソースの標準。データ源（ローカルのファイル、データベースなど）、道具（検索エンジン、計算機など）、手順（専用のプロンプトなど）につなげる。公式は「AIアプリケーションのUSB-Cポート」にたとえている。
- 利用例として、AIがGoogleカレンダーやNotionを使う、Figmaのデザインからウェブアプリを作る、組織のデータベースにチャットでたずねる、などが挙げられている。Claude、ChatGPT、Visual Studio Code、Cursorなど多くのアプリが対応している。
- 登場するもの：MCPホスト（Claude CodeやVS CodeのようなAIアプリケーション）、MCPクライアント（サーバーごとにホストが作る接続の担当）、MCPサーバー（文脈を提供するプログラム）。サーバーは、手元のパソコンで動くもの（ローカル）にも、ネット上で動くもの（リモート）にもなる。
- サーバーが提供できる三つの基本要素：ツール（AIが呼び出せる実行可能な機能）、リソース（文脈となるデータ）、プロンプト（やり取りの型を決める再利用できるひな形）。クライアント側の要素として、サーバーが利用者に追加の入力を求めるElicitationがある。
- 通信の方式は、同じ機械の中で使うstdioと、リモート向けのStreamable HTTPの二つ。リモートの認証にはOAuthが勧められている。
- MCPが決めるのは情報をやり取りする約束ごとだけで、AIアプリがLLMをどう使い、受け取った文脈をどう扱うかは決めない。
- 安全面は公式のセキュリティのページに分けて書かれている（今回は読んでいない）。

## この資料から更新したページ

- [MCP（Model Context Protocol）](../concepts/mcp.md)
