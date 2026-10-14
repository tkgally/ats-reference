# 全体の概観

この知識ベースが扱う「AIとの探検ゼミナール」の全体像と、現時点で分かっていること・まだ分かっていないことをまとめたページです。

## 授業の全体像

「AIとの探検ゼミナール」（ATS）は、東京都市大学世田谷キャンパスで2026年度後期の水曜日3限に開講される、全14回の実践型（PBL）の授業です。担当は[トム・ガリー](people/tom-gally.md)。受講生は最新のAIツールを使い、自分の関心にもとづくプロジェクトに個人またはチームで取り組み、テーマ設定から計画、実装、評価、発表までを進めます。プログラミングの経験は必要ありません。詳しくは[授業の概要](course/course-overview.md)、[授業の日程と進行](course/schedule.md)、[達成目標](course/learning-goals.md)を参照してください。

## 道具立て

授業の中心にあるのは、GitHubと複数のAIツールで、そのうちLLMの利用とリポジトリでの作業には、おもにGitHub Copilotデスクトップアプリを使います。

- [GitHub](tools/github.md)：プロジェクトのファイル、知識ベース、作業履歴を置く場所。画面は英語だが、必要な操作に絞って覚え、あとはAIエージェントに日本語で頼めばよい（[GitHubの日本語対応](tools/github-japanese-support.md)）。
- [GitHub Copilot](tools/github-copilot.md)：大学の予算で受講生全員に有料版が提供される（10月〜1月末）。
- [GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)：この授業でLLMを使い、GitHubのリポジトリで作業するときに、おもに使うアプリ（2026年10月13日、担当教員）。
- [Microsoft 365 Copilot](tools/microsoft-365-copilot.md)：TCUアカウントで使える。
- ChatGPT、Claude、Geminiなど：プロジェクトに合わせて選ぶ。

一つの製品に頼らず、目的に合ったツールを選べるようになることが達成目標の一つです。一覧は[この授業で使うAIツール](tools/ai-tools.md)にあります。ツールの土台にある技術とエージェントについては、[大規模言語モデル（LLM）](concepts/large-language-model.md)と[AIエージェント](concepts/ai-agent.md)にまとめています。

## 解説サイト

このWikiは、解説サイト「[ATSガイド](https://tkgally.github.io/ats-reference/)」の一部としてHTMLでも公開されています。サイトには、GitHub、Copilot、生成AI、プロジェクトの進め方などを図や例で説明する解説ページがあり、Wikiのページと相互にリンクしています（2026年10月7日に開設）。

## 知識ベースという方法

第2回（10月7日）の授業では、GitHubと[LLM Wiki](concepts/llm-wiki.md)の考え方を使い、エージェントで長期プロジェクトの知識ベースを作る方法が実演されました。この知識ベース自体がその実例で、どのエージェントでも同じ約束事（[AGENTS.md](../AGENTS.md)）で運用できるようにしています。受講生が自分のプロジェクトで同じ方法を使うときの手本にもなります。

## 学内の環境

TCUアカウント、WebClass、Microsoft 365などの学内サービスは[学内のITサービス](campus/it-services.md)にまとめています。教室のWi-Fiは定員内ならおおむね使えますが余裕が少なく、設備の増強は2026年末の見込みです。通信量の多い作業は授業時間外に行うのが安全です（[学内Wi-Fi](campus/campus-wifi.md)）。

## 確認が必要な点

資料がまだない、または資料から確定できない点です。資料が加わるたびに見直します。

- 第4回以降の各回の内容。プロジェクトの各段階（テーマ設定、計画、実装、評価、発表）がどの回に当たるか。
- 11月18日が休講日かどうか（日程表に含まれていない）。
- 成績評価の方法と基準、課題の提出先（WebClassを使うかどうか）。
- 個人とチームのどちらで取り組むか、チームの作り方。
- GitHub Copilotの提供プラン、申し込み方法、期間終了後の扱い。一般向けのプランと学生向けのプランは公式ドキュメントで確かめたが（[GitHub Copilot](tools/github-copilot.md)）、大学から提供されるものがどれに当たるかは分かっていない。大学はMicrosoftと調整中（2026年10月7日、教員からの連絡）。
- 解決したこと（2026年10月14日の大学の手順書）：授業用のGitHubの組織は tokyo-city-university で、受講生は個人のGitHubアカウントを作ってサインインし、大学のSSOで組織につなぐ。Copilot Businessの利用枠は授業用Teamに割り当て済み。試しのリポジトリは`ats-名字-test-1`の名前でPrivateに作る（[GitHub Copilotデスクトップアプリ](tools/github-copilot-app.md)）。まだ分からないこと：二要素認証の方式、組織の「GitHub Copilot app」ポリシーの状態、提供期間と学期後の扱い、学内ネットワークの制限。
- 授業で使うリポジトリの公開範囲。試しのリポジトリはPrivateと指示されたが（2026年10月14日）、プロジェクト用の公開範囲とInternalの可否は未確認（[GitHub](tools/github.md)）。
- ChatGPT、Claude、Geminiなどについて、大学として使えるもの、費用の扱い、利用上の注意。大学のGoogleアカウント（g.tcu.ac.jp）についての案内（Gmailは使わない、Google Classroomなどはサポート外）は分かったが、Geminiには触れていない（[TCUのGoogleアカウント](campus/tcu-google-account.md)）。
- AI利用の倫理（著作権、プライバシー、公正性）について、授業や大学としての具体的な指針。国の指針は[AI利用の倫理](concepts/ai-ethics.md)にまとめた。
- Microsoft 365 Copilotで、TCUアカウントにどの機能とデータ保護が適用されるか。Microsoftの公式ドキュメントでは、職場・学校のアカウントのCopilot Chatにエンタープライズデータ保護が適用され、入力は学習に使われないが、監査のために組織に記録されることを確かめた（2026年10月8日）。大学の設定は大学の案内が見つかっていない（[Microsoft 365 Copilot](tools/microsoft-365-copilot.md)）。

## 次に取り込むとよい資料

- 授業サイトの[ログのページ](https://sites.google.com/view/2026ats/ログ)（各回の進行）
- 学生が使えるAIツールについての資料（背景資料で追加が予告されている）
- シラバスの全文（評価方法を含むもの）
- 第2回のデモの手順やスライド

## 出典

- [資料：授業の背景情報](sources/ats-class-background.md)
- [資料：Copilotデスクトップアプリを使い始めるためのガイド（2026年10月13日）](sources/20261013-GitHub-and-Copilot-information.md)
- [資料：TCU GitHub Copilot 学生向け利用手順（2026年10月14日）](sources/tcu-github-copilot-student-procedure.md)
- [LLM Wiki（日本語版）](../llm-wiki-j.md)
