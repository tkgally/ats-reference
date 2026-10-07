# 大規模言語モデル（LLM）

ChatGPT、Claude、Gemini、GitHub Copilotなどの生成AIの中心にある技術、大規模言語モデル（LLM：Large Language Model）についてのページです。

## この授業との関係

この授業で使うAIツール（[GitHub Copilot](../tools/github-copilot.md)、[Microsoft 365 Copilot](../tools/microsoft-365-copilot.md)、ChatGPT、Claude、Geminiなど）は、いずれも大規模言語モデルを使っています（[この授業で使うAIツール](../tools/ai-tools.md)）。シラバスの達成目標の一つ「複数のAIツールの特性を理解し、プロジェクトに適したツールを選んで使える」には、ツールの土台にあるモデルのしくみと限界を知ることが役立ちます（[達成目標](../course/learning-goals.md)）。この知識ベースの方法である[LLM Wiki](llm-wiki.md)も、名前のとおりLLMを使うことを前提にしています。

## しくみの要点

以下は一般的な知識にもとづく補足です（資料外の補足）。図と体験つきの詳しい説明は、解説ページ[生成AIのしくみ](../../site/content/guide/how-llms-work.md)にあります。

- 次の言葉の予測：LLMは、それまでの文章に続く「次の言葉（トークン）」の確率を計算し、一つずつ選んで文章を作る。
- トークン：モデルが文章を扱う単位。単語、単語の一部、記号などに分けられる。日本語は英語より多くのトークンに分かれる傾向がある。
- 学習：大量の文章で事前学習したあと、人間の評価などを使って、指示に従い役に立つ答えを返すよう調整される。
- コンテキストウィンドウ：一度に読める文章の量の上限。会話の履歴や渡した資料もここに入る。
- 知識の期限：学習に使ったデータの時点より新しい出来事は、検索などの機能を使わない限り知らない。
- ハルシネーション：もっともらしいが事実でない内容（存在しない文献やURLなど）を作ってしまうことがある。答えは出典にあたって確かめる必要がある（[AIの答えを確かめる](../../site/content/guide/checking-ai-output.md)）。

## 関連ページ

- [AIエージェント](ai-agent.md)
- [LLM Wiki](llm-wiki.md)
- [この授業で使うAIツール](../tools/ai-tools.md)
- [AI利用の倫理](ai-ethics.md)
- 解説ページ：[生成AIのしくみ](../../site/content/guide/how-llms-work.md)、[AIへの頼み方](../../site/content/guide/prompting.md)、[AIの答えを確かめる](../../site/content/guide/checking-ai-output.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)（授業で使うツールの一覧）
- しくみの要点は一般的な知識にもとづく（資料外の補足）。
