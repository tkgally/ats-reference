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
