---
title: Copilotのエージェントに作業を頼む
short: Copilotのエージェント
description: VS Codeのエージェントと、GitHub上で動くクラウドエージェントの違い、よい頼み方、指示ファイル（AGENTS.md）、安全に任せるための注意を、知識ベースへの資料の取り込みを例に説明します。
category: copilot
order: 3
level: 発展
updated: 2026年10月7日
---

## エージェントに「作業」を頼む

チャットでは、AIに質問して答えをもらいます。エージェントには、作業そのものを頼みます。「この資料を読んで要約ページを作り、目録と作業記録も更新して」と頼むと、エージェントは自分で手順を考え、ファイルを読み、書き換え、結果を確かめながら作業を進めます。エージェントという考え方の全体は[AIエージェントとは](ai-agents.md)で説明しています。

GitHub Copilotには、作業を頼めるエージェントが大きく二つあります（2026年10月時点）。

- VS Codeのエージェント：自分のパソコンのVS Codeの中で動く。チャットで<span class="ui">Agent</span>を選んで頼む。
- クラウドエージェント：GitHubのサーバーの上で動く。github.comでIssueを割り当てたり、チャットで頼んだりすると、ブランチを作って作業し、プルリクエストを出す。公式の名前は「Copilot cloud agent」（以前の名前は「Copilot coding agent」）。

<figure class="fig">
{{svg:copilot-agent-local-vs-cloud.svg}}
<figcaption>VS Codeのエージェントは目の前で一緒に進める相棒、クラウドエージェントは仕事を預けて結果を受け取る相手、と考えると分かりやすい。</figcaption>
</figure>

どちらを使うか迷ったら、次の目安で選びましょう。

- 何をしてほしいか、まだはっきりしない：VS Codeのエージェントで、相談しながら進める。
- 頼む内容をはっきり書ける：クラウドエージェントに任せ、その間は別のことをする。
- パソコンが手元にない：github.comやGitHub Mobileから、クラウドエージェントに頼む。

クラウドエージェントは、2026年10月時点で、Copilot Studentと有料のプランで使え、無料のCopilot Freeでは使えません（[Plans for GitHub Copilot](https://docs.github.com/en/copilot/get-started/plans)）。授業で提供される版で使えるかどうかは、[GitHub Copilot](../../../wiki/tools/github-copilot.md)のWikiページと授業の案内で確かめてください。

## VS Codeのエージェントに頼む

VS Codeの準備は[VS CodeでCopilotを使う準備](vscode-copilot-setup.md)で説明しています。準備ができたら、次の流れで頼みます。

<ol class="steps">
<li>作業したいリポジトリをVS Codeで開き、ソース管理の<span class="ui">変更の同期</span>で最新の状態にしておきます。</li>
<li>チャットを開き、エージェントの選択欄で<span class="ui">Agent</span>を選びます。大きな作業なら、先に<span class="ui">Plan</span>で計画を立ててもらうのも手です。</li>
<li>頼みたいことを書いて送ります（書き方は次の節）。</li>
<li>エージェントが作業を始めます。命令の実行などで許可を求められたら、内容を読んでから<span class="ui">Allow</span>などで認めます。</li>
<li>作業が終わったら、書き換えたファイルを一つずつ確かめ、残すものは<span class="ui">Keep</span>、取り消すものは<span class="ui">Undo</span>で決めます。直してほしい点があれば、続けてチャットで頼みます。</li>
<li>納得したら、ソース管理でコミットして同期し、GitHubに送ります。</li>
</ol>

## GitHubのクラウドエージェントに頼む

クラウドエージェントは、GitHubのサーバーの上に自分専用の作業場所を用意して、そこでリポジトリを複製し、作業します。自分のパソコンを閉じていても作業は進みます。

<figure class="fig">
{{svg:copilot-agent-cloud-loop.svg}}
<figcaption>クラウドエージェントは、mainから分かれたブランチで作業し、プルリクエストを出す。人がレビューし、納得してからmainにマージする。</figcaption>
</figure>

### 頼み方

2026年10月時点では、主に次の方法で頼めます（[About Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent)）。

- Issueを割り当てる：リポジトリの<span class="ui">Issues</span>で、作業の内容を書いたIssue（課題の票）を作り、右側の<span class="ui">Assignees</span>（担当者）で<span class="ui">Copilot</span>を選ぶ。Issueの本文が、そのまま作業の指示になる。
- エージェントの画面から頼む：github.comの<span class="ui">Agents</span>の画面やCopilotのチャットで、リポジトリを選んで作業を頼む。「プルリクエストを作って」と書いておくと、終わったときにプルリクエストが開かれる。
- VS Codeから預ける：VS Codeのチャットで、作業の場所としてクラウドを選んで頼む。

### 作業のあと

Copilotは、`copilot/`で始まる名前のブランチを作って作業し、コミットを積み重ねます。作業が終わると、プルリクエストが開かれ、通知が届きます。ここからは人の出番です。

<ol class="steps">
<li>プルリクエストの<span class="ui">Files changed</span>（変更されたファイル）を開き、何がどう変わったかを読みます。追加は緑、削除は赤で表示されます。</li>
<li>直してほしい点があれば、プルリクエストのコメント欄に<code>@copilot</code>と書いてから、直してほしい内容を書きます。Copilotが同じブランチで作業を続け、修正のコミットを足します。</li>
<li>納得したら、<span class="ui">Merge pull request</span>を押して<code>main</code>にマージします。納得できなければ、マージせずに閉じても構いません。</li>
</ol>

安全のため、クラウドエージェントには次のような制限があります（2026年10月時点、[Risks and mitigations for Copilot cloud agent](https://docs.github.com/en/copilot/concepts/agents/cloud-agent/risks-and-mitigations)）。

- 書き込めるのは、自分が作業しているブランチだけ。`main`を直接書き換えることはない。
- 自分でプルリクエストをマージすることはない。マージするかどうかは人が決める。
- インターネットへの接続が制限されている。
- 一回の作業には時間の上限（約1時間）がある。

ブランチやプルリクエストの考え方は、[ブランチとプルリクエストでの共同作業](github-collaboration.md)で詳しく説明します。

## よい頼み方

エージェントは、頼まれた内容を手がかりに、自分で判断しながら進みます。頼み方があいまいだと、思っていたのと違う作業をしたり、関係のないファイルまで書き換えたりします。頼むときは、次の5つを意識しましょう。

- 目的：何のための作業か。
- 対象：どのファイル、どのフォルダーを扱うか。
- 完成の条件：何ができたら終わりか。
- 守ること：変えてはいけないもの、従うべき約束事。
- 報告：終わったら何を知らせてほしいか。

<div class="compare" markdown="1">
<div class="good" markdown="1">

伝わりやすい頼み方

`raw/`に置いた`session-03-notes.md`を、`AGENTS.md`の取り込みの手順に従ってWikiに取り込んでください。要約ページを`wiki/sources/`に作り、第3回の記録のページを更新し、目録と作業記録にも反映してください。`raw/`の中のファイルは変更しないでください。終わったら、更新したページの一覧と、資料どうしで食い違っていた点を報告してください。

</div>
<div class="bad" markdown="1">

伝わりにくい頼み方

新しいメモをいい感じにまとめておいて。

</div>
</div>

ほかにも、次のようなことを心がけると、うまくいきやすくなります。

- 一度に頼む作業は小さくする。「Wikiを全部見直して」より「`wiki/tools/`のページのリンク切れを直して」のほうが、結果を確かめやすい。
- 例を見せる。「このページと同じ形式で」と既存のページを示すと、形がそろう。
- 分からないことがあれば質問してから進めるよう頼む。「不明な点があれば、作業を始める前に質問してください」と書いておく。
- うまくいかなかったら、何が違ったかを具体的に伝えて頼み直す。

頼み方の一般的なコツは[AIへの頼み方（プロンプト）](prompting.md)にまとめています。

## 指示ファイル：毎回言わなくてよいことを書いておく

「日本語で書く」「段落の途中で改行しない」「`raw/`は変更しない」など、毎回守ってほしい約束事は、頼むたびに書くのではなく、リポジトリの中のファイルに書いておきます。エージェントは作業を始めるときにそのファイルを読み、約束事に従います。このようなファイルを指示ファイル（カスタム指示）と言います。

Copilotが読む主な指示ファイルは、次のとおりです（2026年10月時点、[Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions)、[Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)）。

| ファイル | 置き場所 | 役割 |
| :---- | :---- | :---- |
| `AGENTS.md` | リポジトリの直下（フォルダーごとに置くこともできる） | 多くのエージェントが共通して読む指示ファイル。Copilotもこれを読む。 |
| `.github/copilot-instructions.md` | `.github`フォルダーの中 | Copilot専用の、リポジトリ全体への指示。 |
| `.github/instructions/名前.instructions.md` | `.github/instructions`フォルダーの中 | 特定のフォルダーや種類のファイルだけに当てはまる指示。 |

公式の案内によれば、`AGENTS.md`はリポジトリの中のどこに置いてもよく、作業しているファイルにいちばん近い`AGENTS.md`が優先されます。VS Codeでは、設定の`chat.useAgentsMdFile`で`AGENTS.md`を読むかどうかを切り替えられます。

この授業の知識ベース（このサイトのもとになっているリポジトリ）では、指示を`AGENTS.md`にまとめています。Copilot、Claude Code、OpenAI Codexなど、どのエージェントを使っても同じ約束事で作業できるようにするためです。Claude Codeのように別の名前の指示ファイル（`CLAUDE.md`）を読むエージェントのためには、そのファイルに「`AGENTS.md`に従うこと」とだけ書いています。実際の中身は[AGENTS.md](../../../AGENTS.md)で読めます。自分のプロジェクトのリポジトリを作るときも、同じように`AGENTS.md`を一つ用意しておくと、エージェントを乗り換えても困りません（[LLM Wiki](../../../wiki/concepts/llm-wiki.md)）。

<div class="box tip" markdown="1">
<p class="box-title">ポイント</p>

指示ファイルは、最初から完璧に書く必要はありません。エージェントが同じ間違いを繰り返したら、そのたびに「〜しない」「〜のときは〜する」と一行足していきましょう。指示ファイルの改訂そのものを、エージェントに頼むこともできます。

</div>

## 例：知識ベースに新しい資料を取り込んでもらう

[LLM Wiki](../../../wiki/concepts/llm-wiki.md)の考え方で作った知識ベースに、新しい資料を取り込む場合を例に、流れを見てみましょう。

<ol class="steps">
<li>取り込みたい資料（授業のメモ、調べた記事の要点など）をMarkdownのファイルにし、リポジトリの<code>raw/</code>フォルダーに置いてコミットします。github.comの画面からアップロードしても構いません。</li>
<li>VS Codeのエージェントか、クラウドエージェントに頼みます。クラウドエージェントの場合は、たとえば「資料の取り込み：raw/session-03-notes.md」という題のIssueを作り、本文に前の節の「伝わりやすい頼み方」のような指示を書いて、Copilotに割り当てます。</li>
<li>エージェントは<code>AGENTS.md</code>を読み、取り込みの手順に従って、要約ページの作成、関係するページの更新、目録と作業記録への追記を行います。</li>
<li>プルリクエスト（またはVS Codeの変更の一覧）で、結果を確かめます。資料に書いていないことが事実のように書かれていないか、リンクが正しいか、日本語の約束事が守られているかを見ます。</li>
<li>直してほしい点を伝え、納得したらマージ（またはコミットして同期）します。</li>
</ol>

<div class="box try" markdown="1">
<p class="box-title">やってみよう</p>

自分の練習用リポジトリに、短い<code>AGENTS.md</code>を作ってみましょう。たとえば「このリポジトリは日本語で書く」「段落の途中で改行しない」「変更したらREADME.mdの更新履歴に一行足す」の3行だけで構いません。そのうえでエージェントに簡単な作業を頼み、約束事が守られるかを確かめてみてください。

</div>

## 安全に任せるために

エージェントは、人の確認なしに多くのことを進められます。だからこそ、次の点を守りましょう。

- 差分を必ず読む：エージェントの「完了しました」という報告をうのみにせず、変更された内容を自分の目で確かめる。全部を理解できなくても、「頼んでいないファイルが変わっていないか」「消えてはいけない文が消えていないか」は確かめられる（[AIの出力を確かめる](checking-ai-output.md)）。
- 秘密を渡さない：パスワード、APIキー、他人の個人情報を、チャットに書いたりリポジトリに置いたりしない。エージェントはリポジトリの中のファイルを読むので、置いた時点で読まれると考える。
- 作業を小さく区切る：一つの依頼で一つのまとまった作業にする。結果を確かめやすく、うまくいかなかったときに戻しやすい。
- ブランチで試す：大きな変更はブランチで行い、プルリクエストで確かめてから`main`に取り込む。クラウドエージェントは、最初からこのやり方で作業する。
- 履歴を頼りにする：コミットしておけば、失敗しても前の状態に戻せる（[GitHubとは：基本の考え方](github-basics.md)）。
- 使える量を意識する：エージェントの長い作業は、AIクレジットを多く使う。頼み直しが続くときは、いったん止めて頼み方を見直す（[GitHub Copilotとは](copilot-overview.md)）。

<div class="box danger" markdown="1">
<p class="box-title">禁止</p>

公開のリポジトリで、エージェントに個人情報や公開してはいけない資料を扱わせないでください。エージェントが書いたものでも、コミットしてGitHubに送った内容の責任は、頼んだ人にあります（[AIを使うときの倫理とルール](ai-ethics.md)）。

</div>

## 次に読むページ

- [AIエージェントとは](ai-agents.md)
- [ブランチとプルリクエストでの共同作業](github-collaboration.md)
- [AIへの頼み方（プロンプト）](prompting.md)
- [AIの出力を確かめる](checking-ai-output.md)
- [プロジェクトの知識ベースを作る](knowledge-base.md)
- Wikiの関連ページ：[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[LLM Wiki](../../../wiki/concepts/llm-wiki.md)、[第2回（2026年10月7日）：GitHubのデモ](../../../wiki/course/sessions/session-02.md)
