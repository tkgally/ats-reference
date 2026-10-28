# 資料：GitHub Copilotアプリのツールの権限とサンドボックス（公式ドキュメント）

GitHubの公式ドキュメントにある、Copilotアプリでエージェントがツールを使う前の確認（ツールの権限）と、サンドボックスについての説明の要約です（2026年10月28日に確認）。

## 資料の情報

- Working with agent sessions in the GitHub Copilot app：[https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions)
- Allowing safe commands to run without manual approval：[https://docs.github.com/en/copilot/concepts/agents/allowing-safe-commands](https://docs.github.com/en/copilot/concepts/agents/allowing-safe-commands)
- About local sandboxing / cloud sandboxes for GitHub Copilot：[https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes](https://docs.github.com/en/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes)
- 発行者：GitHub（公式）
- 確認した日：2026年10月28日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- セッションのモードとツールの権限は別のものである。セッションのモード（Interactive、Plan、Autopilot）はエージェントの仕事の進め方を決め、ツールの権限は、ツールを実行する前に確認を求めるかどうかを決める。
- 権限のレベルは三つある。Manual approval（Ask every time：ツールの実行前に毎回確認する）、Assisted（モデルが各要求を審査し、安全と判断したものは自動で承認し、危うそうなものだけ人に確認する）、Unconditional approval（Approve all：確認なしで実行する）。
- 切り替え方：プロンプト欄の下のモードの表示を押し、Tool permissionsに合わせて選ぶと、そのセッションの権限が変わる。ローカルのセッションの既定は、アプリの設定の「Sessions」で決める。スラッシュコマンドの`/permissions assisted`でも、現在のセッションをAssistedにできる。
- Assistedの対象は、シェルの命令、ファイルの場所へのアクセス、ファイルの読み書き、URLの取得。すでに許可の規則や過去の承認があるものは、審査なしで通る。モデルは間違えることがあり、危険なものや意図しないものを承認する恐れがある。サンドボックスの代わりにはならないと、資料は注意している。
- 組織の管理者は、Approve all（無条件の承認）を使えなくしたり、Assistedを使えなくしたりできる。管理者が決めた既定の権限は、利用者の設定より優先される。
- Autopilotと権限の関係：Autopilotは、入力を待たずにコードを書き、テストを走らせ、繰り返すモード。自動で動く実行や対話のない実行では、確認が必要な要求は拒否され、モデルの説明がCopilotに返されて別の方法を探す、と書かれている（Assistedの説明のページ）。クラウドのセッションでは、ツールの権限の設定は使えない。
- ローカルのサンドボックス：自分のパソコンの上で、エージェントが実行するツールのファイル、通信、認証情報へのアクセスを制限する。既定ではオフで、Copilotの利用枠に含まれ追加料金はない。`/sandbox on`と`/sandbox off`で、セッションごとに切り替えられる。仮想マシンやコンテナーではなく、OSの機能による軽い制限である。macOSは15以降、Linuxはbubblewrap、Windowsは新しいWindows 11が必要とされる。サンドボックスを使わないと、シェルの命令は利用者のすべての権限で動く。アプリで設定できる項目は、CLIより少ない。
- クラウドのサンドボックス：セッション全体をGitHubの用意した隔離環境で動かす。使った量に応じた課金になる。
- 資料に書かれていないこと：許可を求める表示の画面の細部、コミットとプッシュの具体的な操作（agent-sessionsのページは扱っていない）、大学の組織での設定の状態。

## この資料から更新したページ

- [エージェントの承認と権限](../concepts/agent-permissions.md)
- [GitHub Copilotデスクトップアプリ](../tools/github-copilot-app.md)
