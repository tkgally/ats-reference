# ハルシネーション

生成AIが事実と違う内容を、もっともらしく答えてしまう現象、ハルシネーション（幻覚）についてのページです。

## 何のことか

最も高度なモデルでも、事実と違う内容や、与えた文脈と食い違う内容を作ることがあります。これをハルシネーションと呼びます（[資料：Claude Platform Docs](../sources/web-claude-docs-context-hallucination.md)）。存在しない文献やURLを挙げる、人物の経歴を取り違える、といった例がよく知られています（資料外の補足）。

原因は、AIが「正しい答え」ではなく「もっともらしい続きの文章」を作るしくみにあります（資料外の補足、[大規模言語モデル（LLM）](large-language-model.md)）。

## 減らすための方法

Anthropicの資料にある方法です（[資料：Claude Platform Docs](../sources/web-claude-docs-context-hallucination.md)）。

- 分からないときは「分からない」と答えてよいと、プロンプトで伝える。
- 長い資料を渡すときは、先に原文からそのままの引用を抜き出させ、その引用だけにもとづいて分析させる。
- 答えの各主張に引用や出典を付けさせ、裏づけがない主張は取り下げさせる。
- 同じ質問を何度かして答えを比べる。食い違う部分は怪しい。
- 与えた資料以外の知識を使わないよう指示する。

これらで大きく減らせますが、なくすことはできません。重要な情報は必ず自分で確かめるよう、資料にも書かれています。

## この授業での扱い

AIが書いた内容は、出典にあたって確かめ、確かめた結果を記録します。この知識ベースでも、資料にある事実と推測を分け、資料外の補足には明記する約束にしています（[AGENTS.md](../../AGENTS.md)）。AIの利用で配慮すべき点は[AI利用の倫理](ai-ethics.md)にまとめています。

## 関連ページ

- [大規模言語モデル（LLM）](large-language-model.md)
- [プロンプト](prompt.md)
- [コンテキストウィンドウ](context-window.md)
- [AI利用の倫理](ai-ethics.md)
- 解説ページ：[AIの答えを確かめる](../../site/content/guide/checking-ai-output.md)、[生成AIのしくみ](../../site/content/guide/how-llms-work.md)

## 出典

- [資料：Claude Platform Docs（コンテキストウィンドウ、ハルシネーションの低減、プロンプトの概説）](../sources/web-claude-docs-context-hallucination.md)
