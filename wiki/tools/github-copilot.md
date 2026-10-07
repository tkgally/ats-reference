# GitHub Copilot

大学の予算で受講生全員に有料版が提供される、GitHubのAIアシスタントについてのページです。

## 提供の条件（2026年10月7日時点）

- 大学の予算で、受講生全員に有料版が提供される。
- 提供期間は10月から1月末まで。授業の最終回（1月20日）の後もしばらく使える計算になる。

どのプラン（個人向け有料版のどれに当たるか）が提供されるのか、どう申し込むのか、期間が終わった後にどうなるのかは、まだ資料がありません。

## 一般向けのプランと機能（2026年10月7日時点）

GitHubの公式ドキュメントによれば、Copilotには無料のCopilot Free、学生向けのCopilot Student、個人向けの有料プラン（Pro、Pro+、Max）、組織向けのプラン（Business、Enterprise）があります。2026年6月からは、利用量を「GitHub AI Credits」で数える方式になったと報じられています。詳しくは[資料：GitHub Copilotのプラン（GitHub Docs）](../sources/web-github-copilot-plans.md)にまとめています。

主な機能は、エディターやGitHubのウェブサイトで使うチャット、エディターの中で作業を進めるエージェントモード、GitHub上で作業を任せるとブランチで作業してプルリクエストを作るCopilot cloud agent、プルリクエストのコードレビューなどです。

学生は、GitHub Educationで認証されると無料でCopilotを使えます（[資料：学生向けのGitHub Copilot](../sources/web-github-copilot-students.md)）。この授業で大学から提供される有料版が、これらのどのプランに当たるのかは、まだ分かっていません（要確認）。

## 日本語での使い方

Copilotの画面は英語ですが、日本語で質問すれば日本語で答えます。[VS Code](vs-code.md)に日本語言語パックを入れてCopilotを使うのが、最も日本語で作業しやすい環境とされています（[GitHubの日本語対応](github-japanese-support.md)）。

## この知識ベースとの関係

この知識ベースは特定のエージェントに依存しないよう、エージェントへの指示を`AGENTS.md`にまとめています。GitHubとVS Codeの公式ドキュメントによれば、Copilotはリポジトリの`AGENTS.md`を指示として読みます（2026年10月7日確認、[資料：Copilotが読む指示ファイル](../sources/web-github-copilot-instructions.md)）。そのため、Copilotのエージェント機能を使って、このWikiに資料を取り込んだり、質問したりすることもできます。

## 関連ページ

- [AIエージェント](../concepts/ai-agent.md)
- [この授業で使うAIツール](ai-tools.md)
- [GitHub](github.md)
- [VS Code](vs-code.md)
- [Microsoft 365 Copilot](microsoft-365-copilot.md)：名前は似ているが別の製品
- 解説ページ：[GitHub Copilotとは](../../site/content/guide/copilot-overview.md)、[VS CodeでCopilotを使う準備](../../site/content/guide/vscode-copilot-setup.md)、[Copilotのエージェントに作業を頼む](../../site/content/guide/copilot-agent.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：GitHub Copilotのプラン（GitHub Docs）](../sources/web-github-copilot-plans.md)
- [資料：学生向けのGitHub Copilot](../sources/web-github-copilot-students.md)
- [資料：Copilotが読む指示ファイル（GitHub Docs、VS Code Docs）](../sources/web-github-copilot-instructions.md)
