---
title: AIツールの選び方：種類、特徴、無料版と有料版
short: AIツールの選び方
description: チャットAI、コーディング用のエージェント、調査用のツール、画像や動画の生成ツールなど、AIツールの種類と選び方を、目的別の流れ図で説明します。
category: ai
order: 2
level: 基本
updated: 2026年10月7日
---

## なぜ「選び方」を学ぶのか

この授業の達成目標の一つは、「複数のAIツールの特性を理解し、プロジェクトに適したツールを選んで使える」ことです（[達成目標](../../../wiki/course/learning-goals.md)）。そのため授業では、一つの製品に絞らず、目的に合わせて複数のツールを使い分けます。

AIツールは、名前も機能も料金も、数か月単位で変わります。このページでは、特定の製品の細かい機能を覚えるのではなく、「どんな種類のツールがあり、何を基準に選ぶか」という、変わりにくい考え方を中心に説明します。製品についての記述は2026年10月時点のもので、最新の情報は各社の公式の案内で確かめてください。

## AIツールの種類

AIツールは、使い方によって大きく五つの種類に分けられます。ただし、境目ははっきりしていません。たとえばChatGPTのようなチャットAIでも、検索、画像の生成、ファイルの作成などができます。

<figure class="fig">
{{svg:ai-tools-compare-map.svg}}
<figcaption>AIツールの主な種類。一つの製品が複数の種類にまたがることも多い。</figcaption>
</figure>

- チャットAI：画面で文章をやりとりして、質問、相談、文章の作成、要約、翻訳などをする。ChatGPT、Claude、Geminiなど。
- 仕事のアプリに組み込まれたAI：Word、Excel、PowerPoint、メールなどの中で、その場の文書を使って手伝う。Microsoft 365 Copilotなど。
- コーディング用のAIとエージェント：プログラムを書いたり、ファイルを読み書きして作業を進めたりする。GitHub Copilotなど。エージェントについては[AIエージェントとは](ai-agents.md)で説明します。
- 調査・検索用のAI：ウェブを検索して、出典のリンクつきで答えたり、長い調査報告をまとめたりする。Perplexityや、各社のチャットAIにある「ディープリサーチ」（Deep Research）機能など。自分の資料だけをもとに答えるGoogleのNotebookLMもこの仲間です。
- 画像・音声・動画の生成AI：文章の指示から、イラスト、写真風の画像、音声、音楽、動画などを作る。チャットAIに組み込まれているものと、専用のサービスがあります。

## 主なチャットAIの比較

授業で名前が挙がっている主なチャットAIを比べると、次のようになります（2026年10月時点）。「得意なこと」は一般によく言われる傾向で、モデルの更新によって変わります。

| ツール（提供元） | よく言われる得意なこと | 無料で使えるか | 料金の案内 |
| :---- | :---- | :---- | :---- |
| ChatGPT（OpenAI） | 利用者が多く、機能が幅広い。画像の生成、音声での会話、調査など | 制限つきで無料 | [料金のページ](https://chatgpt.com/pricing) |
| Claude（Anthropic） | 長い文章の読解と執筆、プログラミング、ファイルの作成 | 制限つきで無料 | [料金のページ](https://claude.com/pricing) |
| Gemini（Google） | Google検索、Gmail、Googleドキュメントなどとの連携、画像や動画の理解 | 制限つきで無料 | [料金のページ](https://gemini.google/subscriptions/) |
| Microsoft 365 Copilot（Microsoft） | Word、Excel、Teams、Outlookなどの中での作業 | TCUアカウントで利用 | [Wikiのページ](../../../wiki/tools/microsoft-365-copilot.md) |
| GitHub Copilot（GitHub） | プログラミング、リポジトリでの作業、エージェント | 授業で有料版を提供 | [Wikiのページ](../../../wiki/tools/github-copilot.md) |

ChatGPT、Claude、Geminiは、どれも無料版と、月額20ドル前後の個人向け有料版を用意しています（2026年時点）。さらに上位の、より多く使えるプランもあります。無料版と有料版のおもな違いは次のとおりです。

- 使える量：無料版は、一定の時間に送れるメッセージの数や、読み込めるファイルの量に上限があり、上限に達すると数時間待つことになる。
- 使えるモデル：有料版では、より性能の高いモデルや、推論モデル（[生成AIのしくみ](how-llms-work.md)）を多く使える。
- 使える機能：ディープリサーチ、動画の生成、エージェント機能などは、有料版に限られたり、回数が少なかったりすることが多い。

学生向けの割引や無料期間が提供されることもありますが、条件（国、期間、学生の確認方法）はたびたび変わります。申し込む前に、公式の案内で条件を確かめましょう。

<div class="box note" markdown="1">
<p class="box-title">補足</p>

モデルの名前（GPT、Claude、Geminiなどの後ろに付く番号や名前）は、数か月ごとに新しくなります。ウェブの記事やAI自身の答えに出てくるモデル名や料金は、古いことがよくあります。「いまどのモデルが一番よいか」は、記事の日付を確かめ、公式の発表で確認してください。

</div>

## 目的から選ぶ

ツールを選ぶときは、「どのツールが一番すごいか」ではなく、「いま何をしたいか」から考えます。次の流れ図を目安にしてください。

<figure class="fig">
{{svg:ai-tools-compare-flow.svg}}
<figcaption>したいことから、使うツールの種類を選ぶ。迷ったら、同じ頼みを2〜3のツールで試して比べる。</figcaption>
</figure>

目的ごとに、選ぶときの観点を補足します。

- 最新の情報を調べる：ウェブ検索を使えるツールを選び、答えに出典のリンクが付いているかを見る。報告書のような長い調査には、ディープリサーチの機能が向いている。どちらの場合も、出典を実際に開いて確かめる（[AIの答えを確かめる](checking-ai-output.md)）。
- 手元の資料について聞く：PDFや文書を添付できるチャットAIか、NotebookLMのように「渡した資料だけをもとに答える」ツールを使う。答えが資料のどこにもとづくかを示してくれるものが確かめやすい。
- 文章を書く、考えを整理する：どのチャットAIでもできる。文章の調子や考え方の癖は、ツールによってかなり違うので、何種類か試して自分に合うものを探す。
- Word、Excel、メールで作業する：Microsoft 365 Copilotは、開いている文書やメールを材料にして手伝ってくれる。大学のアカウントで使えるので、学内の文書を扱うときにも検討する。
- プログラム、ウェブサイト、リポジトリの作業：授業で提供されるGitHub Copilotを使う（[GitHub Copilotとは](copilot-overview.md)）。VS Codeのエージェント機能や、GitHubの上で作業を任せる機能がある。
- 画像、音声、動画を作る：生成ツールを使う。ただし、他人の作品に似たものを作らない、実在の人物の画像や声を勝手に作らない、商用利用の条件を確かめるなど、権利と利用規約に注意する（[AIを使うときの倫理とルール](ai-ethics.md)）。

## 同じ頼みを2〜3のツールで試す

自分に合うツールを見つける一番よい方法は、実際に比べてみることです。同じ頼み（プロンプト）を、2〜3のツールに送り、答えを並べて読みます。

<div class="box try" markdown="1">
<p class="box-title">やってみよう</p>

次のような頼みを、ChatGPT、Claude、Gemini、Microsoft 365 Copilotのうち2〜3のツールに送って、答えを比べてみましょう。

- 「東京都市大学の学生が、半年でできる地域の課題を調べるプロジェクトの案を5つ、表にしてください。」
- 「次の文章を、高校生にも分かるように書き直してください。」（自分で書いた文章を貼り付ける）

比べるときは、内容の正しさ、具体性、文章の読みやすさ、質問への答え方（確認の質問をしてくるか）、出典の示し方に注目します。

</div>

比べてみると、同じ頼みでもツールによって答えがかなり違うことが分かります。一つのツールの答えが不十分でも、別のツールではうまくいくことがあります。また、複数のツールの答えが食い違う箇所は、どれかが間違っている可能性が高い箇所でもあります。確かめるべき点を見つけるのにも、比較は役に立ちます。

## プライバシーの設定を確かめる

個人向けのチャットAIでは、入力した内容や会話が、サービスの改善やモデルの学習に使われることがあります。多くのサービスでは、設定でこれを止められます（オプトアウト）。使い始めるときに、一度確かめておきましょう。2026年10月時点の各社の案内では、設定の場所は次のとおりです。画面の表示は、言語の設定や時期によって変わります。

| ツール | 設定の場所（目安） | 公式の案内 |
| :---- | :---- | :---- |
| ChatGPT | 設定 → データコントロール → <span class="ui">Improve the model for everyone</span> | [Data controls in ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt) |
| Claude | 設定 → プライバシー → <span class="ui">Help improve Claude</span> | [Anthropic Privacy Center](https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings) |
| Gemini | 設定とヘルプ → アクティビティ（<span class="ui">Keep Activity</span>をオフ） | [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961) |

設定をオフにしても、安全確保のために一定期間は会話が保存される場合があります。また、Microsoftの案内では、職場や学校のアカウントでサインインして使うCopilot Chatには「エンタープライズデータ保護」が適用され、入力や回答が基盤モデルの学習に使われないとされています（[Microsoftの案内](https://support.microsoft.com/en-us/privacy/data-protection-when-using-microsoft-365-copilot-chat-for-work-or-school)）。大学のアカウントでの扱いの詳細は、大学の案内で確かめてください（[Microsoft 365 Copilot](../../../wiki/tools/microsoft-365-copilot.md)）。

<div class="box danger" markdown="1">
<p class="box-title">入力してはいけないもの</p>

設定にかかわらず、パスワード、他人の個人情報（氏名と連絡先、学籍番号など）、インタビュー相手から預かった未公開の情報、公開してはいけない資料は、AIに入力しないでください。迷ったら、名前を「Aさん」に置き換えるなど、情報を伏せてから使いましょう。

</div>

## この授業で使えるもの

2026年10月7日時点で、授業に関係するツールの入手方法は次のとおりです。詳しくは[この授業で使うAIツール](../../../wiki/tools/ai-tools.md)を見てください。

- GitHub Copilot：大学の予算で、受講生全員に有料版が提供される（10月〜1月末）。申し込み方法などの詳細は、授業やWebClassで案内される予定（[GitHub Copilot](../../../wiki/tools/github-copilot.md)）。
- Microsoft 365 Copilot：TCUアカウントでサインインして使う（[Microsoft 365 Copilot](../../../wiki/tools/microsoft-365-copilot.md)）。
- ChatGPT、Claude、Geminiなど：プロジェクトに合わせて各自で選ぶ。まずは無料版で試し、必要になったら有料版を検討する。

<div class="box tip" markdown="1">
<p class="box-title">ポイント</p>

チームで作業するときは、どのツールを何に使ったかをメモしておくと、あとで結果を比べたり、発表で説明したりするときに役立ちます。記録の仕方は[AIの答えを確かめる](checking-ai-output.md)の「AIを使ったことを記録する」を見てください。

</div>

## 次に読むページ

- [生成AIのしくみ](how-llms-work.md)
- [AIへの頼み方（プロンプトのコツ）](prompting.md)
- [AIエージェントとは](ai-agents.md)
- [GitHub Copilotとは](copilot-overview.md)
- [AIを使うときの倫理とルール](ai-ethics.md)
- Wikiの関連ページ：[この授業で使うAIツール](../../../wiki/tools/ai-tools.md)、[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[Microsoft 365 Copilot](../../../wiki/tools/microsoft-365-copilot.md)、[達成目標](../../../wiki/course/learning-goals.md)
