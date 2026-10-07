---
title: このサイトの使い方
short: このサイトの使い方
description: ATSガイドの構成（解説ページとWiki）、目的別の読み方、情報の確かさについての注意をまとめています。
category: start
order: 1
level: 入門
updated: 2026年10月7日
---

## このサイトは何か

ATSガイドは、東京都市大学の授業「AIとの探検ゼミナール」（ATS）の受講生が、自分のプロジェクトを進めながら引けるように作った解説サイトです。GitHub、GitHub Copilot、生成AIのしくみと使い方、プロジェクトの進め方など、授業で必要になることを、プログラミングの経験がない人にも分かるように説明しています（授業については[授業の概要](../../../wiki/course/course-overview.md)を参照）。

サイトは二つの部分からできています。

- 解説ページ：考え方、使い方、手順を、図や例を使って説明するページ。左のメニューや[解説ページの一覧](index.md)から開けます。
- Wiki（知識ベース）：授業の日程、使うツール、学内のITサービスなどの事実を、出典つきで記録したページ群。[Wikiの目録](../../../wiki/index.md)から全ページを見られます。

解説ページで授業に固有の事実（日程や、大学から配られるツールなど）に触れるときは、Wikiのページへリンクしています。Wikiのページには、そのテーマを詳しく説明する解説ページへのリンクが「このテーマの解説ページ」として表示されます。

## このサイトのしくみ

このサイト自体が、授業で扱う「AIエージェントと一緒に作る」ことの実例です。授業の資料はGitHubのリポジトリに置かれ、AIエージェントがそれを読んでWikiと解説ページを書いています。リポジトリに入った変更は、GitHubの機能（GitHub ActionsとGitHub Pages）によって自動でウェブサイトとして公開されます。

<figure class="fig">
{{svg:about-this-site-structure.svg}}
<figcaption>資料からWikiと解説ページが作られ、自動で公開されるまでの流れ。</figcaption>
</figure>

この方法は、Andrej Karpathyが提案した「LLM Wiki」という考え方にもとづいています（[LLM Wiki](../../../wiki/concepts/llm-wiki.md)）。同じ方法で自分のプロジェクトの知識ベースを作る手順は、[自分のプロジェクトに知識ベースを作る](knowledge-base.md)で説明しています。

## 目的別の読み方

<div class="box note" markdown="1">
<p class="box-title">GitHubを使ったことがない</p>

[GitHubとは](github-basics.md) → [GitHubを始める](github-first-steps.md) → [英語の画面を読むための単語帳](github-english-ui.md)の順に読んでください。英語の画面に戸惑ったら、単語帳を開いたままにしておくと便利です。

</div>

<div class="box tip" markdown="1">
<p class="box-title">AIツールを上手に使いたい</p>

[生成AIのしくみ](how-llms-work.md)でAIの得意・不得意を知り、[AIへの頼み方](prompting.md)と[AIの答えを確かめる](checking-ai-output.md)で使い方のコツをつかみましょう。どのツールを使うか迷ったら[AIツールの選び方](ai-tools-compare.md)が参考になります。

</div>

<div class="box try" markdown="1">
<p class="box-title">Copilotで作業を任せてみたい</p>

[GitHub Copilotとは](copilot-overview.md) → [VS CodeでCopilotを使う準備](vscode-copilot-setup.md) → [Copilotのエージェントに作業を頼む](copilot-agent.md)の順に読んでください。エージェントという考え方そのものは[AIエージェントとは](ai-agents.md)で説明しています。

</div>

<div class="box warn" markdown="1">
<p class="box-title">プロジェクトのテーマや進め方に悩んでいる</p>

[プロジェクトの進め方](project-workflow.md)で全体の流れをつかみ、[AIを使うときの倫理とルール](ai-ethics.md)で気をつけることを確かめてください。

</div>

困ったことが起きたときは[よくある質問とトラブル対処](faq.md)を、言葉の意味を知りたいときは[用語集](glossary.md)を見てください。

## 検索と表示の切り替え

- 画面右上の虫眼鏡のアイコンから、解説ページとWikiの全文を検索できます。複数の言葉を空白で区切ると、すべてを含むページを探します。
- 月のアイコンで、明るい表示と暗い表示を切り替えられます。
- スマートフォンでは、左上の三本線のアイコンでページの一覧を開けます。横に長い図は、指で横にずらして見られます。

## 情報の確かさについて

<div class="box warn" markdown="1">
<p class="box-title">日付のある情報は、公式の案内でも確かめる</p>

AIツールの料金、プラン、機能、画面の表記は、数か月で変わることがあります。このサイトでは、そうした情報に「2026年10月時点」のような時点を書き、公式の案内へのリンクを添えています。大事な判断をする前には、リンク先の最新の情報も確かめてください。

</div>

授業の運営に関わること（課題、評価、日程の変更など）は、授業中の説明、授業サイト、WebClassなどでの教員の案内が最優先です。このサイトやWikiの記述と食い違うときは、教員の案内に従ってください。

このサイトの文章と図は、AIエージェントが書いています。人間が方向を決めて確認していますが、誤りが残っている可能性があります。おかしな点に気づいたら、授業中に教員に知らせてください。それ自体が、AIの出力を確かめる良い練習になります（[AIの答えを確かめる](checking-ai-output.md)）。

## 次に読むページ

- [GitHubとは：基本の考え方](github-basics.md)
- [生成AIのしくみ](how-llms-work.md)
- [プロジェクトの進め方](project-workflow.md)
- Wikiの関連ページ：[全体の概観](../../../wiki/overview.md)、[授業の日程と進行](../../../wiki/course/schedule.md)
