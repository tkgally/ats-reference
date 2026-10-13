# 資料：GitHub Copilotアプリの公式ドキュメント

GitHubの公式ドキュメントと更新情報にある、GitHub Copilotアプリ（デスクトップアプリ）の説明の要約です（2026年10月13日に確認）。

## 資料の情報

- Quickstart for the GitHub Copilot app：[https://docs.github.com/en/copilot/get-started/quickstart-copilot-app](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app)
- Working with agent sessions in the GitHub Copilot app：[https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions)
- GitHub Copilot app is now available to all（更新情報、2026年7月7日）：[https://github.blog/changelog/2026-07-07-github-copilot-app-available-to-all/](https://github.blog/changelog/2026-07-07-github-copilot-app-available-to-all/)
- 発行者：GitHub（公式）
- 確認した日：2026年10月13日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- 対応と提供：macOS、Windows、Linuxで使える。2026年7月7日の更新情報は、すべてのCopilotプラン（FreeとGitHub Educationを含む）で使えるとしている。プランがない人は、自分のモデル提供元のキー（BYOK）で使える。ただし、同じ公式ドキュメントの別のページや別の版には、提供対象が限られるとも読める記述があり、資料の間で食い違っている。最新の更新情報に従いつつ、大学のアカウントで使えるかは確かめが必要。
- 必要なもの：GitHubのアカウント、Copilotのプラン（または自分のモデル提供元の認証情報）、パソコンにインストールされたGit。Copilot BusinessとEnterpriseでは、組織の「GitHub Copilot app」ポリシーを有効のままにする（既定で有効）。更新情報は、BusinessとEnterpriseでは管理者がCopilot CLIをポリシーで有効にする必要があるとも述べている。GitHub Enterprise Serverには対応していない。
- 入手とサインイン：GitHub Copilotアプリのダウンロードページから、自分のパソコン用のものを入手する。アプリを開き、「Sign in to GitHub」をクリックして案内に従う。
- 最初の設定：Copilotのプランがなければ、登録するか自分のモデル提供元で続けるかを選ぶ。次に、最近のGitHubでの活動からリポジトリを選ぶか、パソコンのフォルダーを加えるか、あとで加える。最後にテーマ（画面の配色）を選ぶ。
- プロジェクトの追加：サイドバーのProjectsの横の追加（プラス）アイコンから、パソコンのフォルダーまたはリポジトリ、GitHubのリポジトリ（一覧から選んでクローン）、リポジトリのURLのいずれかで加える。
- セッション：Projectsの下の、プロジェクトの横にあるStart a new sessionのアイコンで始める。プロンプト欄の下の選択欄で、モード、モデル、推論の強さを選んでから頼む。プロンプトでは、#でIssueを、@でファイルを指定でき、/でコマンドを使える。
- セッションのモード：Interactive（一緒に進める。変更案を示し、人の入力を待つ）、Plan（計画を立て、人が承認してから実行する）、Autopilot（人の手を借りずに、コードを書き、テストを走らせ、繰り返す）。
- 作業の場所とブランチ：セッションごとに独立した作業場所があり、並行して動かしても衝突しない。新しい作業ツリー（working tree）、自分のローカルのリポジトリ、クラウドのサンドボックス（公開プレビュー）から選べる。ローカルのサンドボックス（ファイル、通信、認証情報へのアクセスを制限する）は`/sandbox on`で入れられる。
- 変更の確認と取り込み：プロンプト欄の上のChangesで差分（変更点）を確かめ、よければCreate PRでプルリクエストを作る。PRのボタンで、作ったプルリクエストを開ける。エージェントが入力を求めたら答える。
- Chats：専用のブランチや作業ツリーを持たない、会話だけのモード。
- 便利なコマンド：`/security-review`（変更の脆弱性の確認、公開プレビュー）、`/rubber-duck`（計画や実装への別のエージェントからの批評）。
- 資料に書かれていないこと：コミットとプッシュの具体的な操作、許可を求める表示の細部。これらは、この資料からは確かめられていない。

## この資料から更新したページ

- [GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)
