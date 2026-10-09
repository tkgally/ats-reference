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
