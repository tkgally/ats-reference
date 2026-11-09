# RAG（検索拡張生成）

質問に関係する情報を外部の資料から探してAIに渡し、答えの根拠を確かにする手法、RAG（検索拡張生成）についてのページです。

## 何のことか

RAGは、外部の知識ベースから関係する情報を探し、質問と一緒にモデルへ渡して、答えの根拠を確かにする手法です（[資料：Claude Platform Docs（用語集）](../sources/web-claude-docs-glossary.md)、2026年11月4日に確認）。AIが学習した知識だけに頼らず、手元の資料を読ませたうえで答えさせる方法です。

## なぜ使うのか

- モデルが参照できる文章の量には上限があるので、全部の資料を毎回渡すことはできません。そのため、関係する部分だけを選んで窓に入れます（[コンテキストウィンドウ](context-window.md)）。
- 根拠となる資料を渡すと、AIが事実と違うことを答える可能性を減らせます（[ハルシネーション](hallucination.md)）。ただし、なくすことはできません。

## 知識ベースとの違い

一般的なRAGは、質問のたびに資料から断片を探して答えを作るため、知識が蓄積されません。この授業で使う[LLM Wiki](llm-wiki.md)は、資料を読んだエージェントがWikiのページを書き、維持することで、知識を蓄積していく点が違います。

## 関連ページ

- [コンテキストウィンドウ](context-window.md)
- [ファインチューニング](fine-tuning.md)
- [ハルシネーション](hallucination.md)
- [LLM Wiki](llm-wiki.md)
- [大規模言語モデル（LLM）](large-language-model.md)
- [AIに資料や好みを伝える三つの方法：プロンプト、RAG、ファインチューニング](../../site/content/guide/rag-fine-tuning.md)

## 出典

- [資料：Claude Platform Docs（用語集）](../sources/web-claude-docs-glossary.md)
