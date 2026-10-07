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
- 更新したページ：[GitHub Copilot](tools/github-copilot.md)（一般向けのプラン、AGENTS.mdを読むことの確認により「要確認」を解消）、[Microsoft 365 Copilot](tools/microsoft-365-copilot.md)（データの扱い）、[この授業で使うAIツール](tools/ai-tools.md)、[AI利用の倫理](concepts/ai-ethics.md)（国の指針）、[全体の概観](overview.md)、[目録](index.md)。
- 各ページの「関連ページ」に、関係する解説ページへのリンクを加えた。
- 確認が必要な点：大学から提供されるGitHub Copilotのプラン、TCUアカウントでのMicrosoft 365 Copilotのデータ保護、授業・大学としてのAI利用の指針。
