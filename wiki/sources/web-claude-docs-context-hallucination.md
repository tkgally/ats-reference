# 資料：Claude Platform Docs（コンテキストウィンドウ、ハルシネーションの低減、プロンプトの概説）

Anthropicの開発者向けドキュメントにある、コンテキストウィンドウ、ハルシネーションの減らし方、プロンプトエンジニアリングの概説の要約です（2026年10月10日に確認）。

## 資料の情報

- 題名：Context windows、Reduce hallucinations、Prompt engineering overview（いずれもClaude Platform Docs）
- URL：[https://platform.claude.com/docs/en/build-with-claude/context-windows](https://platform.claude.com/docs/en/build-with-claude/context-windows)、[https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations)、[https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview)
- 発行者：Anthropic
- 確認した日：2026年10月10日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）。Claudeの開発者向けの説明であり、他社のサービスの細部は異なりうる。

## 内容の要約

コンテキストウィンドウ：

- 「コンテキストウィンドウ」は、言語モデルが答えを作るときに参照できる全ての文章（答え自身を含む）で、モデルの「作業記憶」にあたる。学習に使った大量のデータとは別のもの。
- 会話が進むと、各回の質問と答えが積み重なり、次の回では過去の全てのやりとりに新しい質問を加えたものが入力になる。システムへの指示、ツールの定義、添付の画像や文書も窓に数えられる。
- 大きさはモデルによる。確認時点で、ClaudeのAPIでは最新のモデルの多くが100万トークン、それ以外が20万トークン。
- 窓が大きいほどよいとは限らない。トークン数が増えると正確さと想起の精度が下がる現象があり、「コンテキストロット（context rot）」と呼ばれる。窓に何を入れるかを選ぶことが、空きの大きさと同じくらい大切だとされる。
- claude.aiなどのチャット画面では、古い部分から順に外す方式で窓を管理することがある。長い会話やエージェントの作業では、要約して圧縮する方法（コンパクション）が主な対策とされる。

ハルシネーションの低減：

- 最も高度なモデルでも、事実と違う内容や、与えた文脈と食い違う内容を作ることがあり、これを「ハルシネーション」と呼ぶ。
- 基本の対策：（1）分からないときは「分からない」と言ってよいと明示する。（2）長い文書では、先に原文から一字一句そのままの引用を抜き出させ、その引用だけにもとづいて分析させる。（3）答えの各主張に引用や出典を付けさせ、裏づけが見つからない主張は取り下げさせる。
- 発展的な対策：同じ質問を複数回して答えを比べる、前の答えを検証させる、与えた資料以外の知識を使わないよう指示する、など。
- これらはハルシネーションを大きく減らすが、なくすことはできない。重要な情報、特に重大な判断では、必ず自分で確かめるよう書かれている。

プロンプトエンジニアリング：

- プロンプトを改良する前に、成功の基準、その基準で試す方法、最初の下書きの三つをそろえることが前提とされる。
- すべての失敗がプロンプトの改良で解決するとは限らない。遅さや費用は、モデルを替えるほうが簡単に改善できることがある。
- 技法（明確に書く、例を示す、構造を与える、役割を与える、考えさせる、作業を段階に分けるなど）は「Prompting best practices」にまとめられている。

## この資料から更新したページ

- [コンテキストウィンドウ](../concepts/context-window.md)
- [ハルシネーション](../concepts/hallucination.md)
- [プロンプト](../concepts/prompt.md)
