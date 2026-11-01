# 資料：GitHub Actionsの基本（GitHub Docs）

GitHubの公式ドキュメントにある、GitHub Actionsの基本的な考え方（ワークフロー、イベント、ジョブ、アクション、ランナー）の要約です（2026年11月1日に確認）。

## 資料の情報

- Understanding GitHub Actions：[https://docs.github.com/en/actions/get-started/understand-github-actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年11月1日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- GitHub Actionsは、ビルド、テスト、公開（デプロイ）といった作業を自動で行うための仕組み（CI/CDのプラットフォーム）。プルリクエストごとにテストを走らせることも、新しいIssueに自動でラベルを付けることもできる。
- ワークフロー：自動化された一連の処理。リポジトリの`.github/workflows`フォルダーに置くYAMLファイルで定義する。イベントで動くほか、手動や決めた時刻にも動かせる。一つのリポジトリに複数置ける。
- イベント：ワークフローを動かすきっかけ。プルリクエストの作成、Issueの作成、コミットのプッシュなど。
- ジョブ：同じランナーで実行される手順（ステップ）のまとまり。既定ではジョブどうしは並行して動き、依存を指定すると前のジョブの完了を待つ。ステップはシェルのスクリプトか、アクションを実行する。
- アクション：繰り返し使える部品。リポジトリの取得、環境の準備、認証の設定などを行う。自作もでき、GitHub Marketplaceにも公開されている。
- ランナー：ワークフローを実行するサーバー。GitHubはUbuntu Linux、Windows、macOSのものを用意し、実行のたびに新しい仮想マシンで動く。自前のランナーも使える。

## この資料から更新したWikiページ

- [GitHub Actions](../concepts/github-actions.md)（新規）
- [GitHub Pages](../concepts/github-pages.md)
