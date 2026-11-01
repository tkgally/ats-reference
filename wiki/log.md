# 作業記録

取り込み、質問、点検などの作業を時系列で記録したページです。追記のみで、過去の項目は書き換えません。

## [2026-10-07] スキーマ | 知識ベースの立ち上げ

- [LLM Wiki（日本語版）](../llm-wiki-j.md)にもとづき、スキーマ[AGENTS.md](../AGENTS.md)を作成した。エージェント独自の指示ファイルとして`CLAUDE.md`（「AGENTS.mdに従うこと」のみ）を置いた。
- ディレクトリ構成を決めた：`raw/`（元資料）、`wiki/`の下に`sources/`、`course/`、`people/`、`tools/`、`campus/`、`concepts/`。`answers/`は必要になったら作る。
- `README.md`を書き直し、Wikiの入り口へのリンクを置いた。

## [2026-10-07] 取り込み | 授業の背景情報

- 資料：リポジトリ直下にあった`ats-class-background.md`を、内容を変えずに`raw/ats-class-background.md`へ移した。
- 作成したページ：[資料：授業の背景情報](sources/ats-class-background.md)、[全体の概観](overview.md)、[授業の概要](course/course-overview.md)、[授業の日程と進行](course/schedule.md)、[達成目標](course/learning-goals.md)、[第2回の記録](course/sessions/session-02.md)、[トム・ガリー](people/tom-gally.md)、[この授業で使うAIツール](tools/ai-tools.md)、[GitHub](tools/github.md)、[GitHubの日本語対応](tools/github-japanese-support.md)、[GitHub Copilot](tools/github-copilot.md)、[Microsoft 365 Copilot](tools/microsoft-365-copilot.md)、[VS Code](tools/vs-code.md)、[学内のITサービス](campus/it-services.md)、[TCUアカウントと多要素認証](campus/tcu-account.md)、[学内Wi-Fi](campus/campus-wifi.md)、[WebClass](campus/webclass.md)、[LLM Wiki](concepts/llm-wiki.md)、[PBL（プロジェクト型学習）](concepts/project-based-learning.md)、[AI利用の倫理](concepts/ai-ethics.md)、[目録](index.md)
- 判断したこと：資料の日程表には年がないため、第13回・第14回を2027年1月とした。11月18日が表にないことを「要確認」として記録した。
- 確認が必要な点：第4回以降の内容、評価方法、GitHub Copilotの提供プランなど。一覧は[全体の概観](overview.md)の「確認が必要な点」にある。
- 次に取り込むとよい資料：授業サイトのログのページ、学生が使えるAIツールについての資料（背景資料で追加が予告されている）。

## [2026-10-07] スキーマ | 解説サイトとウェブ上の資料の扱い

- 解説サイト「ATSガイド」（GitHub Pages）を作り、Wikiの全ページをHTML版として公開することにした。材料と約束事は`site/`と`site/README.md`にある。
- [AGENTS.md](../AGENTS.md)に「ウェブ上の資料」（`wiki/sources/web-*.md`として要約する）、「解説サイトとの関係」「作業の終え方」（ビルドの確認、プルリクエスト、squash merge）を加え、ディレクトリ構成を更新した。人間の了承を得て改訂した。
- 作業を続けるための指示として、リポジトリ直下に`resume-wiki-work.md`と`resume-website-work.md`を置いた。

## [2026-10-07] 取り込み | ウェブ上の資料（GitHub Copilot、AIチャットサービス、国の指針）

- 解説ページを書く過程で調べた公式の情報を、ウェブ上の資料として要約した：[資料：GitHub Copilotのプラン](sources/web-github-copilot-plans.md)、[資料：学生向けのGitHub Copilot](sources/web-github-copilot-students.md)、[資料：Copilotが読む指示ファイル](sources/web-github-copilot-instructions.md)、[資料：ChatGPT、Claude、Geminiの料金とデータの設定](sources/web-ai-chat-services.md)、[資料：生成AIと教育・著作権についての国の指針](sources/web-ai-guidelines-japan.md)。
- 作成したページ：[ChatGPT、Claude、Gemini](tools/ai-chat-services.md)、[大規模言語モデル（LLM）](concepts/large-language-model.md)、[AIエージェント](concepts/ai-agent.md)。
- [資料：GitHubのアカウント、二要素認証、共同作業者の招待](sources/web-github-account.md)も作り、[GitHub](tools/github.md)に「アカウントと招待について」の節を加えた。
- 更新したページ：[GitHub Copilot](tools/github-copilot.md)（一般向けのプラン、AGENTS.mdを読むことの確認により「要確認」を解消）、[Microsoft 365 Copilot](tools/microsoft-365-copilot.md)（データの扱い）、[この授業で使うAIツール](tools/ai-tools.md)、[AI利用の倫理](concepts/ai-ethics.md)（国の指針）、[全体の概観](overview.md)、[目録](index.md)。
- 各ページの「関連ページ」に、関係する解説ページへのリンクを加えた。
- 確認が必要な点：大学から提供されるGitHub Copilotのプラン、TCUアカウントでのMicrosoft 365 Copilotのデータ保護、授業・大学としてのAI利用の指針。

## [2026-10-07] 取り込み | 教員からの連絡（GitHubとCopilotのプラン、公開範囲）

- 資料：教員がエージェントとの作業の中で伝えた連絡を[資料：教員からの連絡（2026年10月7日）](sources/instructor-note-2026-10-07.md)にまとめた（`raw/`には置かれていない）。
- 内容：大学はGitHubとCopilotのプランをMicrosoftと調整中。リポジトリの公開範囲はあとで決まり、学内（TCU）だけで共有できる3つ目の選択肢が使えるかもしれない。
- 更新したページ：[GitHub](tools/github.md)（「リポジトリの公開範囲（未定）」の節を追加）、[GitHub Copilot](tools/github-copilot.md)、[全体の概観](overview.md)（確認が必要な点）、[資料：GitHubのアカウント、二要素認証、共同作業者の招待](sources/web-github-account.md)（GitHubのInternalの公開範囲を追記）、[目録](index.md)。
- 解説サイトでも、非公開を勧めていた記述を「授業での方針は未定、決まるまでは練習用を非公開で」という仮の記述に改めた（GitHubとは、GitHubを始める、自分のプロジェクトに知識ベースを作る、よくある質問、GitHub Copilotとは、AIを使うときの倫理とルール、英語の画面を読むための単語帳、用語集）。
- 確認が必要な点：大学のGitHubとCopilotのプランが決まったら、公開範囲と提供されるCopilotのプランの記述を更新する。

## [2026-10-07] 取り込み | ウェブ上の資料（情報基盤センター「Google（g.tcu.ac.jp）サービスの利用について」）

- 情報基盤センターのウェブサイトで、2026年10月7日付のお知らせを見つけ、[資料：Google（g.tcu.ac.jp）サービスの利用について](sources/web-tcu-google-services.md)として要約した。
- 作成したページ：[TCUのGoogleアカウント（g.tcu.ac.jp）](campus/tcu-google-account.md)。
- 更新したページ：[学内のITサービス](campus/it-services.md)、[TCUアカウントと多要素認証](campus/tcu-account.md)、[ChatGPT、Claude、Gemini](tools/ai-chat-services.md)、[全体の概観](overview.md)、[目録](index.md)。
- 確認が必要な点：大学のGoogleアカウントでGeminiが使えるか、データ保護がどうなるか。お知らせには書かれていない。TCUアカウントのMicrosoft 365 Copilotの機能とデータ保護も、大学の案内は見つからなかった（情報基盤センターのトップページにMicrosoft 365 Copilotへのリンクがあることだけ確認）。
- 次回に回したこと：`site/log.md`の依頼は、いずれも大学のGitHubとCopilotのプランの決定や新しい`raw/`の資料を待っているため、今回は対応していない。解説ページ（よくある質問など）に、Gmailを使わないという注意を足す余地がある（`site/log.md`に候補として書いた）。

## [2026-10-08] 取り込み | ウェブ上の資料（TCUメール、Microsoft Copilot Chatのプライバシー）

- 「確認が必要な点」のうち、Microsoft 365 Copilotのデータ保護を公式の情報で調べ、[資料：Microsoft Copilot Chatのプライバシーと保護](sources/web-microsoft-copilot-chat-privacy.md)と[資料：TCUメール（情報基盤センター）](sources/web-tcu-mail.md)を作った。
- 更新したページ：[Microsoft 365 Copilot](tools/microsoft-365-copilot.md)（エンタープライズデータ保護、入力が組織に記録されること、名称の変更の節）、[学内のITサービス](campus/it-services.md)（学生のメール、最近のお知らせ）、[全体の概観](overview.md)、[目録](index.md)。
- 解決できなかった点：TCUアカウントでMicrosoft 365 Copilotのどの機能とデータ保護が有効かは、大学の案内が見つからず、未解決のまま。Geminiの扱いも同様。授業の運営に関わる点（評価、日程など）は資料がないため触れていない。
- 確認してほしい点：WebClassの不具合の復旧のお知らせ（10月6日）の詳細は確かめていない。
- 次回に回したこと：`raw/`に新しい資料はなく、`site/log.md`の依頼も大学の決定待ちのため対応していない。新しい資料の追加か、大学のプラン決定を待つ。

## [2026-10-09] 取り込み | ウェブ上の資料（Git、GitHub flow、Markdown）と概念ページ

- 授業で何度も出てくるのに独立したページがなかった概念を、公式の資料で確かめて3ページにまとめた。ウェブ上の資料として、[資料：Pro Git「What is Git?」](sources/web-git-book-what-is-git.md)、[資料：GitHub flow（GitHub Docs）](sources/web-github-flow.md)、[資料：Markdown Reference（CommonMark）](sources/web-commonmark-help.md)を作った。
- 作成したページ：[バージョン管理とGit](concepts/version-control-and-git.md)、[GitHub flow（ブランチとプルリクエストの流れ）](concepts/github-flow.md)、[Markdown](concepts/markdown.md)。
- 更新したページ：[GitHub](tools/github.md)、[LLM Wiki](concepts/llm-wiki.md)（関連ページ）、[目録](index.md)。各概念ページから、対応する解説ページ（GitHubとは、ブランチとプルリクエスト、Markdownの書き方）へリンクした。
- 解決できなかった点：`raw/`に新しい資料はなく、大学のGitHub・Copilotのプランも未定のため、「確認が必要な点」は変わらない。TCUのGeminiの扱いやMicrosoft 365 Copilotの学内設定も、大学の案内が見つからないまま。
- 次回に回したこと：コンテキストウィンドウ、ハルシネーション、プロンプトの概念ページ（解説ページ「AIの答えを確かめる」「プロンプトの書き方」に対応）。
- 備考：この環境では`python`が`markdown`を持たない別のPythonを指していたため、`/usr/bin/python3`でビルドを確かめた。

## [2026-10-10] 取り込み | ウェブ上の資料（コンテキストウィンドウ、ハルシネーション、プロンプト）と概念ページ

- 前回「次回に回したこと」とした3つの概念ページを、Anthropicの開発者向けドキュメントで確かめて作った。ウェブ上の資料として[資料：Claude Platform Docs](sources/web-claude-docs-context-hallucination.md)を作った。
- 作成したページ：[プロンプト](concepts/prompt.md)、[コンテキストウィンドウ](concepts/context-window.md)、[ハルシネーション](concepts/hallucination.md)。
- 更新したページ：[大規模言語モデル（LLM）](concepts/large-language-model.md)（関連ページ）、[目録](index.md)。各概念ページから、対応する解説ページへリンクした。
- 注意：出典はClaudeの開発者向けドキュメントなので、窓の大きさなどは他社のモデルと異なりうることをページに明記した。
- 解決できなかった点：`raw/`に新しい資料はなく、大学のGitHub・Copilotのプランも未定。「確認が必要な点」は変わらない。
- 次回に回したこと：解説ページ（生成AIのしくみ、AIへの頼み方、AIの答えを確かめる）の「関連ページ」から新しい概念ページへのリンク（解説ページは本回では変更していない。`site/log.md`に候補として記載）。

## [2026-10-11] 取り込み | ウェブ上の資料（リポジトリ、二要素認証）と概念ページ

- 新しい資料：[資料：リポジトリと二要素認証（GitHub Docs）](sources/web-github-repositories-2fa.md)（2026年10月11日に確認）
- 作ったページ：[リポジトリ](concepts/repository.md)、[二要素認証](concepts/two-factor-authentication.md)
- 更新したページ：[GitHub](tools/github.md)（関連ページ）、目録
- 未処理の`raw/`資料と、`site/log.md`のWiki向けの依頼はなかったため、「内容の拡充」として、受講生がGitHubを始めるときに必要な概念を独立ページにした。
- 確認が必要な点：解決したものはない。大学のGitHub・Copilotのプランは引き続き未定。
- 次回に回す作業：Issues、フォーク、READMEなどの独立ページ。AGENTS.mdの点検（取り込みが5件以上進んでいる）。

## [2026-10-12] 取り込み | ウェブ上の資料（IssuesとREADME）と概念ページ

- 新しい資料：[資料：IssuesとREADME（GitHub Docs）](sources/web-github-issues-readme.md)（2026年10月12日に確認）
- 作ったページ：[Issues](concepts/github-issues.md)、[README](concepts/readme.md)
- 更新したページ：[リポジトリ](concepts/repository.md)（関連ページ）、目録
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、「内容の拡充」として前回予告した独立ページを作った。
- 確認が必要な点：解決したものはない。大学のGitHub・Copilotのプランは引き続き未定。授業でIssuesを使うかどうかも資料がなく、推測として明記した。
- 次回に回す作業：フォークのページ、AGENTS.mdの点検（取り込みが5件以上進んでいる）。
- 備考：この環境の`python`は`markdown`を持たないため、`/usr/bin/python3`でビルドを確かめた。

## [2026-10-13] 取り込み | GitHub Copilotデスクトップアプリのガイド

- 新しい資料：`raw/20261013-GitHub-and-Copilot-information.md`（[要約](sources/20261013-GitHub-and-Copilot-information.md)）。併せて、担当教員から「この授業ではGitHub Copilotデスクトップアプリをおもに使い、LLMへのアクセスとGitHubのリポジトリでの作業をそのアプリで行う」との指示を受けた。
- 作ったページ：[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)
- 更新したページ：[GitHub Copilot](tools/github-copilot.md)、[GitHub](tools/github.md)、[この授業で使うAIツール](tools/ai-tools.md)、[TCUアカウントと多要素認証](campus/tcu-account.md)、[全体の概観](overview.md)、目録
- 確認が必要な点を追加：大学が配るGitHubアカウントの種類、ログイン方法、二要素認証の方式、組織の「GitHub Copilot app」ポリシー。IT担当者への質問21項目は資料にある。エージェントは公式ドキュメント「GitHub Copilot アプリ」を自分では確かめておらず、資料の記述に頼っている（次回、確かめて`web-`の要約にする）。
- 次回に回す作業：公式ドキュメントでアプリの記述を確かめる。IT担当者の説明（10月14日の予定）が資料として加わったら、アカウント、利用権、公開範囲の記述を更新する。解説ページ（GitHubを始める、Copilotとは、よくある質問）がアプリ中心の説明になっているかを`site/log.md`に依頼として書いた。
- 備考：`raw/`の資料がリポジトリのルートからの相対パスでリンクを書いていたため、`site/build.py`が`raw/`の資料に限りその書き方を受け付けるようにした（`raw/`は変更していない）。この環境では`/usr/bin/python3`でビルドを確かめた。

## [2026-10-13] 点検 | Copilotデスクトップアプリの公式ドキュメントの確認

- 新しい資料：[資料：GitHub Copilotアプリの公式ドキュメント](sources/web-github-copilot-app-docs.md)（2026年10月13日に確認）。前回「次回に回す作業」にした、公式ドキュメントでのアプリの記述の確認を行った。
- 更新したページ：[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)（公式で確かめた内容と、Changes、Create PRの流れを加えた）、目録
- 確認が必要な点：公式の資料の間で、提供対象（Freeを含む全プランか）の記述が食い違う。大学のアカウントで使えるかは、IT担当者の説明（10月14日の予定）を待つ。コミットとプッシュの具体的な操作は公式のページから確かめられていない。

## [2026-10-13] 取り込み | ウェブ上の資料（プルリクエスト、フォーク、ブランチ）と概念ページ

- 新しい資料：[資料：プルリクエスト、フォーク、ブランチ（GitHub Docs）](sources/web-github-pr-fork-branch.md)（2026年10月13日に確認）
- 作ったページ：[プルリクエスト](concepts/pull-request.md)、[フォーク](concepts/fork.md)、[ブランチ](concepts/branch.md)
- 更新したページ：[GitHub flow](concepts/github-flow.md)、[リポジトリ](concepts/repository.md)（関連ページ）、目録
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、「内容の拡充」として、前回予告したフォークのページと、GitHub Copilotアプリで使う用語（ブランチ、プルリクエスト）の独立ページを作った。
- 確認が必要な点：解決したものはない。IT担当者の説明（10月14日の予定）と大学のGitHub・Copilotのプランは引き続き未定。マージの方法の違いと、フォークへ上流の変更を取り込む方法は、今回の資料に書かれておらず、未記載。
- 次回に回す作業：コミット、クローン、マージの独立ページ（公式ドキュメントで確認）。AGENTS.mdの点検（取り込みが5件以上進んでいる）。

## [2026-10-14] 取り込み | TCU GitHub Copilot 学生向け利用手順

- 新しい資料：[資料：TCU GitHub Copilot 学生向け利用手順](sources/tcu-github-copilot-student-procedure.md)（`raw/`のdocx、IT担当者による手順書。担当教員から「当面これを正しい情報として扱う」との指示があった）
- 更新したページ：[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)（大学の手順の節を追加し、アカウントの種類などの未解決の点を更新）、[GitHub](tools/github.md)、[GitHub Copilot](tools/github-copilot.md)、[TCUアカウントと多要素認証](campus/tcu-account.md)、[全体の概観](overview.md)、目録
- 解説ページ`copilot-app.md`と`github-first-steps.md`のアカウント準備の手順を、担当教員の指示で、この手順書にもとづいて改めた。
- 解決した確認事項：アカウントの方式（個人のGitHubアカウント＋大学のSSO）、Copilot Businessの利用枠の割り当て、リポジトリの作成先と命名・Private。
- 確認が必要な点：二要素認証の方式、アプリのポリシー、提供期間と学期後の扱い、プロジェクト用リポジトリの公開範囲、学内ネットワーク。手順書にEMU（管理されたアカウント）とは書かれていないので、「個人アカウント方式」は読み取りで、IT担当者に確認したい。10月14日にもう一つ更新版が`raw/`に置かれたと聞いたが、この回の開始時点で`main`にあったのはこのdocxだけだった。更新版が加わったら再度取り込む。

## [2026-10-14] 取り込み | ウェブ上の資料（コミット、クローン、マージ）と概念ページ

- 新しい資料：[資料：コミット、クローン、マージ（GitHub Docs）](sources/web-github-commit-clone-merge.md)（2026年10月14日に確認）
- 作ったページ：[コミット](concepts/commit.md)、[クローン](concepts/clone.md)、[マージ](concepts/merge.md)
- 更新したページ：[ブランチ](concepts/branch.md)、[プルリクエスト](concepts/pull-request.md)、[フォーク](concepts/fork.md)、[リポジトリ](concepts/repository.md)、[バージョン管理とGit](concepts/version-control-and-git.md)（いずれも関連ページ）、目録
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回予告した「内容の拡充」を行った。
- 確認が必要な点：マージの衝突（コンフリクト）の解消方法、Copilotデスクトップアプリでのコミット、プッシュ、クローンの具体的な操作は、今回の資料に書かれておらず未確認。解決した確認事項はない。
- 次回に回す作業：衝突の解消とプッシュ／プルの独立ページ（公式ドキュメントで確認）。取り込みが5件以上進んでいるので、AGENTS.mdの点検。

## [2026-10-15] 取り込み | ウェブ上の資料（マージの衝突、フェッチとプル）と概念ページ

- 新しい資料：[資料：マージの衝突とフェッチ・プル（GitHub Docs）](sources/web-github-conflicts-fetch-pull.md)（2026年10月15日に確認）
- 作ったページ：[マージの衝突（コンフリクト）](concepts/merge-conflict.md)、[プッシュ、プル、フェッチ](concepts/push-pull-fetch.md)
- 更新したページ：[マージ](concepts/merge.md)（衝突の節を更新）、[クローン](concepts/clone.md)（関連ページと出典）、目録
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回予告した「内容の拡充」を行った。
- 確認が必要な点：衝突の目印の書式、GitHubの画面での解消手順、Copilotデスクトップアプリでのコミット、プッシュ、プル、クローンの操作は、公式ドキュメントの今回のページに書かれておらず未確認。解決した確認事項はない。
- 次回に回す作業：Copilotデスクトップアプリでの操作の確認。取り込みが5件以上進んでいるのでAGENTS.mdの点検（今回は見送り）。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-16] 点検 | 日本語の規則と目録の整合

- 点検の範囲：`wiki/`の全ページ。目録にないページ、リンク切れ、`[[ ]]`形式のリンク、太字、半角の句読点、半角のチルダ、日本語と英数字の間の空白を調べた。
- 直したもの：日本語と英数字の間の空白（`tokyo-city-university`の前後など）を、[資料：TCU GitHub Copilot 学生向け利用手順](sources/tcu-github-copilot-student-procedure.md)、[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)、[GitHub](tools/github.md)、[全体の概観](overview.md)で削った。
- 問題がなかったもの：目録にないページ、孤立ページ、リンク切れ、太字、半角の句読点はなかった。資料の題名（「TCU GitHub Copilot 学生向け利用手順」など）と画面の表記（`Settings → …`）の空白は、原文のままにした。`web-commonmark-help.md`の`**`は、記号を示すためにコード表記で囲んである。
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、新しい資料の取り込みはしていない。
- 確認が必要な点：解決したものはない。Copilotデスクトップアプリでのコミット、プッシュ、プル、クローンの操作は引き続き未確認。10月14日の更新版の手順書は、この回の開始時点でも`raw/`になかった。
- 次回に回す作業：Copilotデスクトップアプリでの操作の確認、内容の薄いページの拡充。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-17] 取り込み | ウェブ上の資料（.gitignore、ライセンス、GitHub Pages）と概念ページ

- 新しい資料：[資料：.gitignore、ライセンス、GitHub Pages（GitHub Docs）](sources/web-github-gitignore-license-pages.md)（2026年10月17日に確認）
- 作ったページ：[.gitignore（無視するファイル）](concepts/gitignore.md)、[ライセンス](concepts/license.md)、[GitHub Pages](concepts/github-pages.md)
- 更新したページ：[リポジトリ](concepts/repository.md)、[README](concepts/readme.md)（いずれも関連ページ）、目録
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、「内容の拡充」を行った。
- 確認が必要な点：`.gitignore`の規則の書き方、大学の組織でのGitHub Pagesの可否と公開範囲、授業のプロジェクトでのライセンスの扱いは未確認。解決した確認事項はない。
- 次回に回す作業：Copilotデスクトップアプリでの操作の確認、内容の薄いページの拡充、`.gitignore`の規則の書き方の確認。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-18] 取り込み | Copilotデスクトップアプリのセッション管理の再確認

- 更新した資料：[資料：GitHub Copilotアプリの公式ドキュメント](sources/web-github-copilot-app-docs.md)（2026年10月18日に再確認。「Working with agent sessions」のページ）
- 更新したページ：[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)（チャットの保管と、設定の「Sessions」の説明を追加）、目録（最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、確認が必要な点の調査を行った。
- 確認が必要な点：コミットとプッシュの具体的な操作、許可を求める表示は、公式ドキュメントの該当ページに書かれておらず、引き続き未確認（アプリを実際に操作して確かめる必要がある）。解決した確認事項はない。
- 次回に回す作業：内容の薄いページの拡充。10月14日の更新版の手順書が`raw/`に置かれたら取り込む。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-19] 取り込み | ウェブ上の資料（gitignoreの規則の書き方）

- 新しい資料：[資料：gitignoreの規則の書き方（Git公式ドキュメント）](sources/web-git-docs-gitignore.md)（2026年10月19日に確認）
- 更新したページ：[.gitignore（無視するファイル）](concepts/gitignore.md)（「規則の書き方」の節を追加し、未確認だった点を解消）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回予告した「`.gitignore`の規則の書き方の確認」を行った。
- 解決した確認事項：`.gitignore`の規則の書き方（前回までの未確認事項）。
- 確認が必要な点：Copilotデスクトップアプリでのコミットとプッシュの具体的な操作は引き続き未確認。10月14日の更新版の手順書は`raw/`に置かれていない。秘密情報の扱いは公式ドキュメントで未確認のまま。
- 次回に回す作業：内容の薄いページの拡充（`markdown.md`、`commit.md`など）。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-20] 取り込み | ウェブ上の資料（VS Codeの入門と表示言語）

- 新しい資料：[資料：VS Codeの公式ドキュメント（入門と表示言語）](sources/web-vscode-docs.md)（2026年10月20日に確認）
- 更新したページ：[VS Code](tools/vs-code.md)（画面の主な部分と、表示を日本語にする手順を追加。関連ページにコミットを追加）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回予告した内容の薄いページの拡充を行った。
- 確認が必要な点：授業でVS Codeを必ず使うかどうかは未確認のまま。対応するOSは入門ページに記載がなく、資料外の補足として残した。解決した確認事項はない。10月14日の更新版の手順書は`raw/`に置かれていない。
- 次回に回す作業：内容の薄いページの拡充（`webclass.md`、`markdown.md`、`commit.md`など）。
- 解説ページとの食い違い：気づいたものはない（解説ページ`vscode-copilot-setup.md`は未確認。次回、表示言語の手順を照合するとよい）。

## [2026-10-21] 取り込み | ウェブ上の資料（GitHub Pagesの公開の手順）

- 作ったページ：[資料：GitHub Pagesの公開の手順（GitHub Docs）](sources/web-github-pages-setup.md)（サイトの作り方、ブランチのフォルダーとGitHub Actionsの公開元の設定、独自のワークフロー、公開範囲、公開の取り下げ。2026年10月21日に確認）
- 更新したページ：[GitHub Pages](concepts/github-pages.md)（URLとファイルの対応、公開元の選び方の表、入口のファイル、反映までの時間、ひな型、権限、公開の取り下げ、公開範囲とプランの節を追加。解説ページへのリンクを追加）、[概観](overview.md)（確認が必要な点に、授業の組織でPagesが使えるかを追加）、目録
- 解説サイトに新しいページ[GitHub Pagesで自分のサイトを公開する](../site/content/guide/github-pages.md)を加えた（記録は`site/log.md`）。
- 確認が必要な点：授業の組織（tokyo-city-university）のプランと、そのPrivateのリポジトリでGitHub Pagesが使えるか、使えるとして誰が見られるか。

## [2026-10-21] 取り込み | ウェブ上の資料（GitHubの基本的な書式）

- 新しい資料：[資料：GitHubの基本的な書式（GitHub Docs）](sources/web-github-markdown-syntax.md)（2026年10月21日に確認）
- 更新したページ：[Markdown](concepts/markdown.md)（「GitHubでの書き方の注意」の節を追加。タスクリスト、見出しへのリンク、改行の違い、注意書きなど）、目録（ページ数、資料数）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回予告した内容の薄いページの拡充を行った。
- 確認が必要な点：表の書き方は資料に載っておらず、資料外の補足として一言だけ書いた。大学の決定待ちの事項（Pagesの可否、公開範囲、提供期間）は変わらず。10月14日の更新版の手順書は`raw/`に置かれていない。
- 次回に回す作業：内容の薄いページの拡充（`webclass.md`、`commit.md`など）。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-22] 取り込み | ウェブ上の資料（VS Codeの統合ターミナル）と概念ページ

- 作ったページ：[資料：VS Codeの統合ターミナル（公式ドキュメント）](sources/web-vscode-terminal.md)（2026年10月22日に確認）、[ターミナル](concepts/terminal.md)（解説ページ「ターミナル入門」に対応する概念ページ）
- 更新したページ：[VS Code](tools/vs-code.md)、[AIエージェント](concepts/ai-agent.md)（ターミナルへのリンクを追加）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、言及はあるのに独立したページがない概念のページを作った。
- 確認が必要な点：エージェントがターミナルの命令を自動で実行するときの承認の仕組みは、この資料に書かれておらず未確認。大学の決定待ちの事項（Pagesの可否、公開範囲、提供期間）は変わらず。10月14日の更新版の手順書は`raw/`に置かれていない。
- 次回に回す作業：内容の薄いページの拡充（`webclass.md`、`commit.md`など）。VS Codeの承認・権限のページの確認。
- 解説ページとの食い違い：気づいたものはない（`terminal-basics.md`は、ターミナルの開き方がVS Codeの公式の説明と合っている）。

## [2026-10-23] 取り込み | ウェブ上の資料（コミットについて）

- 作ったページ：[資料：コミットについて（GitHub Docs）](sources/web-github-about-commits.md)（2026年10月23日に確認）
- 更新したページ：[コミット](concepts/commit.md)（コミットの識別子、共同作者、署名、履歴での見え方の節を追加）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、内容の薄いページの拡充を行った。
- 確認が必要な点：コミットとプッシュの具体的な操作（Copilotデスクトップアプリ）は未確認のまま。大学の決定待ちの事項（Pagesの可否、公開範囲、提供期間）は変わらず。10月14日の更新版の手順書は`raw/`に置かれていない。
- 次回に回す作業：`webclass.md`の拡充（公式の情報が公開ページで見つかるか要確認）。VS Codeの承認・権限のページの確認。
- 解説ページとの食い違い：気づいたものはない。
- 備考：この実行環境では`python`が`markdown`を持たず、`/usr/bin/python3`で`site/build.py --check`が通った。

## [2026-10-24] 取り込み | ウェブ上の資料（GitHubのプランとPagesの公開範囲）

- 作ったページ：[資料：GitHubのプランとPrivateリポジトリでのGitHub Pages（GitHub Docs）](sources/web-github-plans.md)（2026年10月24日に確認）
- 更新したページ：[GitHub Pages](concepts/github-pages.md)（プランごとの違いを追加）、[全体の概観](overview.md)（確認が必要な点に、Enterprise Cloudが鍵になることを追記）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、「確認が必要な点」のうち公式の情報で確かめられる部分を調べた。
- 確認が必要な点：大学の組織のプラン（Enterprise Cloudか）は公開情報では分からず、教員かIT担当者への確認が必要。取得した内容は要約を通したため、プランの表の細部は要確認。
- 次回に回す作業：`webclass.md`の拡充。VS Codeの承認・権限のページの確認。
- 解説ページとの食い違い：気づいたものはない（`github-pages.md`の解説は、Privateでの公開を授業の組織に確かめるよう案内しており矛盾しない）。
- 備考：この実行環境では`python`が`markdown`を持たず、`/usr/bin/python3`で`site/build.py --check`を実行した。

## [2026-10-25] 取り込み | ウェブ上の資料（WebClass）

- 作ったページ：[資料：WebClass（情報基盤センター）](sources/web-tcu-webclass.md)（2026年10月25日に確認）
- 更新したページ：[WebClass](campus/webclass.md)（ログインとコースへの参加、できること、困ったときの節を追加）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回から回していたWebClassページの拡充を行った。
- 確認が必要な点：この授業でWebClassを課題の提出先に使うかは、授業の資料がなく未確認のまま（推測で埋めていない）。取得内容は要約を通したため細部は要確認。
- 次回に回す作業：VS Codeの承認・権限のページの確認。
- 解説ページとの食い違い：気づいたものはない。
- 備考：この実行環境では`python`に`markdown`が入っておらず、`python -m pip install -r site/requirements.txt`のあとで`site/build.py --check`が通った。

## [2026-10-26] 取り込み | ウェブ上の資料（VS Codeのエージェントの承認と権限、Workspace Trust）と概念ページ

- 作ったページ：[資料：VS Codeのエージェントの承認と権限、Workspace Trust（公式ドキュメント）](sources/web-vscode-approvals-trust.md)（2026年10月26日に確認）、[エージェントの承認と権限](concepts/agent-permissions.md)
- 更新したページ：[VS Code](tools/vs-code.md)、[AIエージェント](concepts/ai-agent.md)、[ターミナル](concepts/terminal.md)（承認と権限のページへのリンク）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回から回していた「VS Codeの承認・権限」を調べた。
- 確認が必要な点：授業で使うCopilotデスクトップアプリの承認の仕組みがVS Codeと同じかは未確認。大学の組織設定による制限も不明。取得内容は要約を通したため、設定名などの細部は要確認。
- 次回に回す作業：Copilotデスクトップアプリの権限の仕組みを公式ドキュメントで確かめる。
- 解説ページとの食い違い：気づいたものはない。`copilot-agent.md`に承認と権限の解説を足す案を`site/log.md`に書いた。

## [2026-10-27] 取り込み | ウェブ上の資料（VS Codeのソース管理）

- 作ったページ：[資料：VS Codeのソース管理（公式ドキュメント）](sources/web-vscode-source-control.md)（2026年10月27日に確認）
- 更新したページ：[VS Code](tools/vs-code.md)（「VS CodeでGitを使う」の節を追加）、[コミット](concepts/commit.md)（VS Codeでの操作の節を追加）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、VS Codeのページの拡充を行った。
- 確認が必要な点：資料は概要のページで、公開（Publish）やGitHubへのサインインの手順は書かれておらず未確認。取得内容は要約を通したため細部は要確認。授業で使うCopilotデスクトップアプリの承認の仕組み、授業でのWebClassの使い方は前回までと同じく未確認。
- 次回に回す作業：Copilotデスクトップアプリの権限の仕組みを公式ドキュメントで確かめる。VS CodeのGitHubへの公開とサインインの手順。
- 解説ページとの食い違い：気づいたものはない。表記の見比べ案を`site/log.md`に書いた。
- 備考：この実行環境では`python`に`markdown`が入っておらず、`python -m pip install -r site/requirements.txt`のあとで`site/build.py --check`が通った。

## [2026-10-28] 取り込み | ウェブ上の資料（Copilotアプリのツールの権限とサンドボックス）

- 作ったページ：[資料：Copilotアプリのツールの権限とサンドボックス（公式ドキュメント）](sources/web-github-copilot-app-permissions.md)（2026年10月28日に確認）
- 更新したページ：[エージェントの承認と権限](concepts/agent-permissions.md)（Copilotアプリの権限の三つのレベルとサンドボックスの節を追加、確認が必要な点を更新）、[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)（安全のための約束に権限の項目を追加）、[全体の概観](overview.md)（確認が必要な点）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回から回していた「Copilotデスクトップアプリの権限の仕組み」を調べた。
- 確認が必要な点：権限の既定のレベル、許可を求める画面の細部、大学の組織で権限のレベルが制限されているか（管理者はApprove allとAssistedを無効にできると資料にある）、Workspace Trustに当たる仕組みの有無は未確認。取得内容は要約を通したため細部は要確認。
- 次回に回す作業：VS CodeのGitHubへの公開とサインインの手順。コミットとプッシュをCopilotアプリで行う操作。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-29] 取り込み | ウェブ上の資料（VS CodeとGitHubの連携、ソース管理のクイックスタート）

- 作ったページ：[資料：VS CodeとGitHubの連携、ソース管理のクイックスタート（公式ドキュメント）](sources/web-vscode-github-quickstart.md)（2026年10月29日に確認）
- 更新したページ：[VS Code](tools/vs-code.md)（「VS CodeからGitHubを使う」の節を追加、未確認の記述を更新）、[プルリクエスト](concepts/pull-request.md)（VS Codeでの作成の節）、[プッシュ、プル、フェッチ](concepts/push-pull-fetch.md)（VS Codeでの操作の節）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、前回から回していた「VS CodeのGitHubへの公開とサインインの手順」を調べた。
- 確認が必要な点：Publish to GitHubの詳しい手順は、GitHub連携のページには書かれておらず、クイックスタートの短い記述だけが根拠。大学の組織（SSO）の下でのサインインの流れは未確認。取得内容は要約を通したため、ボタン名などの細部は要確認。
- 次回に回す作業：コミットとプッシュをCopilotデスクトップアプリで行う操作。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-30] 取り込み | ウェブ上の資料（Copilotアプリのエージェントセッション）

- 作ったページ：[資料：Copilotアプリのエージェントセッション（公式ドキュメントの再確認）](sources/web-github-copilot-app-agent-sessions.md)（2026年10月30日に確認）
- 更新したページ：[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)（New worktreeとCurrent checkout、`/security-review`、コミット・プッシュが未確認のままであること）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、回していた「コミットとプッシュをCopilotアプリで行う操作」を調べた。
- 確認が必要な点：公式ドキュメントにアプリでのコミット・プッシュの手順が見つからなかった（検索ではCLIとVS Codeのみ）。この点はアプリの実際の画面で確かめるか、人間が資料を`raw/`に置くのが確実。取得内容は要約を通したため細部は要確認。
- 次回に回す作業：アプリでのコミットとプッシュは、実機の確認待ち。ほかに、点検（lint）をそろそろ行う。
- 解説ページとの食い違い：気づいたものはない。

## [2026-10-31] 点検 | 目録と日本語の規則の整合

- 点検の範囲：`wiki/`の全ページ。目録にないページ、孤立ページ、`[[ ]]`形式のリンク、太字、半角の句読点、半角のチルダ、日本語と英数字の間の空白を調べた。
- 結果：目録にないページと孤立ページはなかった。規則に反する書き方もなかった（空白が残る箇所は「GitHub Copilot アプリ」「TCU GitHub Copilot 学生向け利用手順」など、固有の名称や題名の表記）。目録のページ数が81となっていたのを、実数の84に直した。最終更新日も更新した。
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、内容の追加はしていない。
- 確認が必要な点：前回までと変わらない（Copilotアプリでのコミット・プッシュの実機確認、大学のプランと公開範囲、評価方法など）。
- 次回に回す作業：実機の確認待ちの項目。人間が`raw/`に新しい資料を置けば、取り込みを優先する。
- 解説ページとの食い違い：気づいたものはない。

## [2026-11-01] 取り込み | ウェブ上の資料（GitHub Actionsの基本）

- 作ったページ：[資料：GitHub Actionsの基本（GitHub Docs）](sources/web-github-actions-overview.md)（2026年11月1日に確認）、[GitHub Actions](concepts/github-actions.md)
- 更新したページ：[GitHub Pages](concepts/github-pages.md)と[プルリクエスト](concepts/pull-request.md)（関連ページに追加）、目録（ページ数、資料数、最終更新日）
- 未処理の`raw/`資料はなく、`site/log.md`のWiki向けの依頼も大学の決定待ちのため、言及はあるのに独立したページがなかったGitHub Actionsの概念ページを作った。
- 確認が必要な点：授業の組織でのActionsの利用枠は未確認。取得内容は要約を通したため細部は要確認。
- 次回に回す作業：Copilotアプリでのコミット・プッシュは実機の確認待ち（変わらず）。
- 解説ページとの食い違い：気づいたものはない。
