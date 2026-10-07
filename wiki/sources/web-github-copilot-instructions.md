# 資料：Copilotが読む指示ファイル（GitHub Docs、VS Code Docs）

GitHub CopilotがリポジトリのどのファイルをAIへの指示として読むかについての、GitHubとVS Codeの公式ドキュメントの要約です（2026年10月7日に確認）。

## 資料の情報

- 題名：Adding repository custom instructions for GitHub Copilot（GitHub Docs）
- URL：[https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)
- 関連する資料：Custom instructions（VS Code Docs、[https://code.visualstudio.com/docs/copilot/customization/custom-instructions](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)）、AGENTS.mdの共通の約束事（[https://agents.md/](https://agents.md/)）
- 発行者：GitHub、Microsoft（VS Code）
- 確認した日：2026年10月7日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- Copilotは、リポジトリに置いた次のファイルを指示として読む：`.github/copilot-instructions.md`（リポジトリ全体への指示）、`.github/instructions/`の中の`*.instructions.md`（特定のファイルだけに当てはまる指示）、`AGENTS.md`（エージェントへの指示）。
- `AGENTS.md`はリポジトリのどこに置いてもよく、複数あるときは、作業しているファイルから見て最も近いものが優先される。
- `AGENTS.md`の代わりに、リポジトリの最上位に置いた`CLAUDE.md`か`GEMINI.md`の一つを使うこともできる。
- 指示の優先順位は、個人の指示、リポジトリの指示、組織の指示の順。
- VS CodeのCopilotも`AGENTS.md`を読む。設定（`chat.useAgentsMdFile`）で読むかどうかを切り替えられる。

## この知識ベースとの関係

この知識ベースは、エージェントへの約束事を`AGENTS.md`にまとめています（[AGENTS.md](../../AGENTS.md)）。上の資料から、GitHub Copilotのエージェントもこのファイルを読んで作業できることが確かめられました。

## この資料から更新したページ

- [GitHub Copilot](../tools/github-copilot.md)
- [AIエージェント](../concepts/ai-agent.md)
