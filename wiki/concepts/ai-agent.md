# AIエージェント

目標を与えられると、自分で計画を立て、ファイルの編集や命令の実行などの道具を使いながら作業を進めるAI、AIエージェントについてのページです。

## この授業との関係

第2回（2026年10月7日）の授業では、AIエージェントを使って長期プロジェクトの知識ベースを作る方法が実演されました（[第2回の記録](../course/sessions/session-02.md)）。この知識ベースも、エージェントが資料を読み、Wikiのページを書き、維持しています（[LLM Wiki](llm-wiki.md)）。授業では複数のAIツールやモデルを使う予定なので、エージェントへの指示は、特定の製品に依存しない共通のファイル`AGENTS.md`にまとめられています（[資料：授業の背景情報](../sources/ats-class-background.md)）。

## チャットとの違い

以下は一般的な知識にもとづく補足です（資料外の補足）。

- チャット：人間が質問し、AIが答える。答えを使って作業するのは人間。
- エージェント：人間が目標を伝えると、AIが「計画する → 道具を使う → 結果を確かめる」を繰り返して作業を進める。ファイルの作成や編集、命令の実行、ウェブ検索、GitHubでのコミットやプルリクエストの作成などを行える。

GitHub Copilotには、エディターの中で作業を進めるエージェントモードと、GitHub上で作業を任せるとブランチで作業してプルリクエストを作るCopilot cloud agentがあります（[資料：GitHub Copilotのプラン（GitHub Docs）](../sources/web-github-copilot-plans.md)）。ほかにも、各社がコマンドラインやウェブで使えるエージェントを提供しています（資料外の補足）。

## 指示ファイル

多くのエージェントは、作業の前にリポジトリの中の決まった名前のファイルを読み、そこに書かれた約束事に従います。この知識ベースでは`AGENTS.md`に約束事をまとめ、エージェント独自のファイル（`CLAUDE.md`など）には「`AGENTS.md`に従うこと」とだけ書いています（[AGENTS.md](../../AGENTS.md)）。GitHub Copilotも`AGENTS.md`を読むことが、公式ドキュメントで確かめられています（[資料：Copilotが読む指示ファイル](../sources/web-github-copilot-instructions.md)）。

## 使うときの注意

エージェントは多くの作業を自動で行うので、人間による確認が欠かせません（資料外の補足）。GitHubでは、エージェントの変更をコミットやプルリクエストごとに確かめ、問題があれば元に戻せます（[GitHub](../tools/github.md)）。パスワードやAPIキーなどの秘密の情報をエージェントに渡したり、リポジトリに置いたりしないことも大切です。

## 関連ページ

- [大規模言語モデル（LLM）](large-language-model.md)
- [LLM Wiki](llm-wiki.md)
- [GitHub Copilot](../tools/github-copilot.md)
- [GitHub](../tools/github.md)
- 解説ページ：[AIエージェントとは](../../site/content/guide/ai-agents.md)、[Copilotのエージェントに作業を頼む](../../site/content/guide/copilot-agent.md)、[自分のプロジェクトに知識ベースを作る](../../site/content/guide/knowledge-base.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：GitHub Copilotのプラン（GitHub Docs）](../sources/web-github-copilot-plans.md)
- [資料：Copilotが読む指示ファイル（GitHub Docs、VS Code Docs）](../sources/web-github-copilot-instructions.md)
- [LLM Wiki（日本語版）](../../llm-wiki-j.md)（リポジトリ直下の参照文書）
