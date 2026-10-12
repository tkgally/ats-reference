# 資料：IssuesとREADME（GitHub Docs）

GitHubの公式ドキュメントにある、Issues（課題の管理）とREADMEファイルの概説の要約です（2026年10月12日に確認）。

## 資料の情報

- About issues：[https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues)
- About READMEs：[https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月12日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- Issues：リポジトリ内で作業を計画し、話し合い、追跡するための柔軟なしくみ。不具合の報告、機能の要望、アイデア、作業項目など、チームが書き留めたり話し合ったりしたい話題に使える。
- Issuesに付けられる情報：担当者（assignee）、ラベル、課題の種類、マイルストーン（目標ごとのまとまり）、サブ課題（大きな作業を小さく分ける）、課題どうしの依存関係。
- ほかの作業とのつながり：課題を別の課題やプルリクエストの中で言及すると、相互の参照ができる。プルリクエストの説明に特定のキーワードを書くと、マージされたときに関連する課題を自動で閉じられる。GitHub Projectsと連携できる。
- 課題フォームとテンプレートで、役に立つ報告を促せる。課題を購読すると、新しいコメントの通知を受け取れる。自由な議論に向く話題は、GitHub Discussionsに変換できる。
- README：リポジトリにあるファイルで、プロジェクトの目的、役立つ点、始め方、助けを得る方法、維持している人を説明する。訪問者が最初に目にするので、使い始めて貢献するために必要なことに絞って書く。長い文書はWikiに置くのがよいとされる。
- READMEの置き場所：GitHubは`.github`ディレクトリ、リポジトリの直下、`docs`ディレクトリの順に探し、複数あれば先に見つかったものを表示する。
- READMEの表示：GitHubが整形して表示し、見出しから目次（Outline）を作る。相対リンクと画像のパスは現在のブランチに合わせて調整されるので、相対リンクが勧められている。500 KiBを超える部分は切り捨てられる。ユーザー名と同じ名前の公開リポジトリのREADMEは、プロフィールのページに表示できる。

## この資料から更新したページ

- [Issues](../concepts/github-issues.md)
- [README](../concepts/readme.md)
