# 資料：プルリクエスト、フォーク、ブランチ（GitHub Docs）

GitHubの公式ドキュメントにある、プルリクエスト、フォーク、ブランチの概説の要約です（2026年10月13日に確認）。

## 資料の情報

- About pull requests：[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- About forks：[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- About branches：[https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月13日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- プルリクエスト：コードなどの変更をプロジェクトに取り込んでほしいと提案するしくみで、GitHubの共同作業の中心にある機能。取り込む前に話し合い、レビューし、問題を早く見つけられる。画面には、説明と議論とレビューを見る「Conversation」、変更点の差分を見る「Files changed」、変更の経過を見る「Commits」、自動のテストやビルドの結果を見る「Checks」などのタブがある。
- ドラフト：作業の途中で共有するために、ドラフトのプルリクエストを開ける。ドラフトはマージできず、「レビューの準備ができた」にすると、コードオーナーにレビューが依頼される。いつでもドラフトに戻せる。
- マージの状態：プルリクエストの上部とマージのボックスに、マージの前に解決すべき妨げや足りない承認が表示される。このページはマージの方法（マージコミット、squash、rebase）の違いには触れていない。
- 共同作業の二つの型：フォークしてプルリクエストを送る型（fork and pull）と、共有のリポジトリで作業する型（shared repository）がある。
- フォーク：別のリポジトリ（上流、upstream）の複製として始まる、独立したリポジトリ。独自の設定と権限を持つが、上流とのつながりは保つ。ブランチと違い、フォークはブランチ、メンバー、Issues、プルリクエスト、Actionsなどをすべて備えた一つのリポジトリである。公開リポジトリは、個人のアカウントや、リポジトリを作れる組織にフォークできる。非公開のリポジトリは、アクセス権があり所有者が許す場合にフォークできる。
- フォークの注意：フォークの公開範囲は上流に従い、単独では変えられない。上流の所有者はネットワーク内のすべてのフォークを読める。組織やエンタープライズのポリシーでフォークを制限できる。上流の変更をフォークに取り込む方法は、このページには書かれていない。
- ブランチ：機能の追加、不具合の修正、アイデアの試しを、リポジトリの「閉じた領域」で行うためのもの。ブランチは必ず既存のブランチから作る。ブランチの作成、プルリクエストの作成、削除と復元には書き込み権限が要る。
- 既定のブランチ：リポジトリを訪れたときに表示され、クローンしたときに最初にチェックアウトされ、新しいプルリクエストの比較の土台（base）になる。新しいリポジトリでは`main`という名前がふつう。
- ブランチの比較：プルリクエストは、作業側のブランチ（head）と土台のブランチ（base）を比べる。差分が安定するよう、土台のブランチを作業用のブランチに頻繁に取り込み、プルリクエストは小さいうちに早くマージするのがよい。
- ブランチの保護：保護されたブランチには、強制プッシュや削除の禁止、チェックの通過、レビューの承認、コードオーナーの承認、署名つきコミットなどの規則を課せる。管理者は、設定によっては規則を迂回できる。

## この資料から更新したページ

- [プルリクエスト](../concepts/pull-request.md)
- [フォーク](../concepts/fork.md)
- [ブランチ](../concepts/branch.md)
