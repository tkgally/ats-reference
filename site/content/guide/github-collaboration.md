---
title: ブランチとプルリクエストでの共同作業
short: ブランチとプルリクエスト
description: 本流を壊さずに変更を試すブランチと、変更を確かめてから取り込むプルリクエストの流れを、チームでの作業とAIエージェントへの依頼の両方の場面で説明します。
category: github
order: 4
level: 基本
updated: 2026年10月7日
---

## なぜブランチを使うのか

リポジトリには、本流となる`main`というブランチがあります。`main`は、チームの「いまの正式な版」です。発表の資料やサイトの公開も、ふつうは`main`の内容をもとに行います。

その`main`を、何人もの人やAIエージェントが直接書き換えると、次のようなことが起こります。

- 途中までしか書けていない文章や、試しに入れた変更が、正式な版に混ざる。
- 二人が同じファイルを同時に書き換えて、片方の変更が消えたり、ぶつかったりする。
- AIエージェントが大きな変更をしたとき、どこが変わったのか、取り込んでよいのかを確かめる前に反映されてしまう。

ブランチ（branch、枝）は、`main`から枝分かれした作業用の流れです。ブランチの上では、いくら書き換えても`main`には影響しません。作業が終わって内容を確かめたら、ブランチの変更を`main`に合流（マージ）させます。文書で言えば、「原本のコピーを作って編集し、よければ原本に反映する」作業を、GitHubが記録つきで手伝ってくれるしくみです。

<figure class="fig">
{{svg:github-collaboration-branches.svg}}
<figcaption>自分とAIエージェントが、それぞれのブランチで並行して作業し、終わったものから順にmainへマージする。</figcaption>
</figure>

## ブランチを作る

ブラウザだけでブランチを作れます。

<ol class="steps">
<li>リポジトリのトップで、ファイル一覧の左上にある<span class="ui">main ▾</span>（ブランチの切り替え）をクリックする。</li>
<li>入力欄に新しいブランチの名前を入れる（例：<code>add-survey</code>）。</li>
<li><span class="ui">Create branch: add-survey from main</span>のような表示をクリックすると、ブランチができ、表示がそのブランチに切り替わる。</li>
<li>そのままファイルを編集してコミットすると、変更は新しいブランチに記録される。</li>
</ol>

ファイルを編集してコミットするときに、ダイアログで<span class="ui">Create a new branch for this commit and start a pull request</span>を選んでも、ブランチが作られ、そのままプルリクエストの画面に進みます。こちらのほうが手軽です（[GitHubを始める](github-first-steps.md)）。

ブランチの名前は、半角の英小文字・数字・ハイフンで、何の作業かが分かるものにします（例：`fix-schedule`、`add-interview-notes`）。チームで「名前の最初に自分の名前を付ける」（例：`hanako/add-survey`）などの約束を決めておくと、だれの作業か分かりやすくなります。

## プルリクエストの流れ

プルリクエスト（pull request、略してPR）は、「このブランチの変更を`main`に取り込んでください」という依頼です。依頼といっても、相手に送る手紙ではなく、変更の中身、説明、話し合いの記録をひとまとめにした、リポジトリの中のページです。

<figure class="fig">
{{svg:github-collaboration-pr-cycle.svg}}
<figcaption>プルリクエストの一生。レビューで直してほしい点が見つかったら、同じブランチに修正のコミットを足す。PRは自動で新しい内容に更新される。</figcaption>
</figure>

<ol class="steps">
<li>ブランチで変更をコミットすると、リポジトリのトップに黄色い帯と<span class="ui">Compare &amp; pull request</span>のボタンが出る。これをクリックする（帯が出ないときは、<span class="ui">Pull requests</span>のタブで<span class="ui">New pull request</span>を押す）。</li>
<li>上の欄が<span class="ui">base: main</span> ← <span class="ui">compare: add-survey</span>のように、「取り込み先」と「取り込む元」になっていることを確かめる。</li>
<li>題名と説明を書く。説明には「何を、なぜ変えたか」「見てほしい点」を書く。</li>
<li><span class="ui">Create pull request</span>を押す。まだ作業中なら、ボタン横の▾から<span class="ui">Create draft pull request</span>（下書き）を選んでもよい。</li>
<li>仲間に確認（レビュー）を頼む。右側の<span class="ui">Reviewers</span>で相手を指定できる。</li>
<li>確認が済んだら<span class="ui">Merge pull request</span>（このリポジトリでは<span class="ui">Squash and merge</span>）を押し、<span class="ui">Confirm</span>で確定する。</li>
<li>マージが終わると<span class="ui">Delete branch</span>のボタンが出るので、押してブランチを片付ける。PRと履歴は残るので、消しても困らない。</li>
</ol>

### 差分を読む

レビューでは、PRの<span class="ui">Files changed</span>のタブで差分を読みます。差分は、削除された行が赤（行頭に`-`）、追加された行が緑（行頭に`+`）で表示されます。一行の中の一部だけを変えた場合も、「古い行を消して新しい行を足した」ように、赤と緑の組で表示されます。

```diff
 ## 日程
-第5回：10月28日　中間報告
+第5回：10月28日　中間報告（発表は一人3分）
+第6回：11月4日　アンケートの結果を共有
```

この例では、第5回の行に「発表は一人3分」が書き足され、第6回の行が新しく追加されたことが分かります。行の左の`+`をクリックすると、その行にコメントを付けられます。全体を見終わったら<span class="ui">Review changes</span>を押し、<span class="ui">Comment</span>（感想や質問だけ）、<span class="ui">Approve</span>（承認）、<span class="ui">Request changes</span>（修正を依頼）のどれかを選んで送ります。

<div class="compare" markdown="1">
<div class="good" markdown="1">

分かりやすいPRの説明

- 題名：アンケートの質問案を追加
- 説明：`survey/questions.md`に質問を10個書いた。質問5と6は似ているので、どちらを残すか意見がほしい。

</div>
<div class="bad" markdown="1">

分かりにくいPRの説明

- 題名：更新
- 説明：（空）
- 一つのPRに、アンケート、日程の修正、READMEの書き直しが全部入っている。

</div>
</div>

## マージの3つの方法

<span class="ui">Merge pull request</span>のボタンの横の▾を押すと、取り込み方を選べます。違いは、`main`の履歴にコミットがどう残るかです。

<figure class="fig">
{{svg:github-collaboration-merge-methods.svg}}
<figcaption>ブランチのコミットa、b、cを取り込む3つの方法。このリポジトリでは真ん中のSquash and mergeを使う。</figcaption>
</figure>

| 画面の表記 | 何が起こるか | 向いている場面 |
| :---- | :---- | :---- |
| <span class="ui">Create a merge commit</span> | ブランチのコミットをすべて残し、合流の印になるコミットを一つ足す。 | 枝分かれの記録を細かく残したいとき。 |
| <span class="ui">Squash and merge</span> | ブランチのコミットを一つにまとめ（squashは「押しつぶす」の意味）、一つのコミットとして`main`に足す。 | 一つのPRを一つの変更として記録したいとき。 |
| <span class="ui">Rebase and merge</span> | ブランチのコミットを一つずつ、`main`の先に並べ直す。 | コミットを一つずつ残しつつ、履歴を一直線にしたいとき。 |

この授業の知識ベース（このサイトのもとになっているリポジトリ）では、Squash and mergeを使っています（[AGENTS.md](../../../AGENTS.md)の「作業の終え方」）。ブランチの上で「下書き」「修正」「誤字を直す」のように細かいコミットを重ねても、`main`には「アンケートの質問案を追加」のような一つのコミットとして残るので、`main`の履歴が読みやすくなります。細かいコミットの記録は、PRのページの<span class="ui">Commits</span>のタブにちゃんと残っています。

チームで迷ったら、Squash and mergeに決めておくのがおすすめです。どの方法を使えるかは、リポジトリの<span class="ui">Settings</span>の<span class="ui">General</span>にある<span class="ui">Pull Requests</span>の欄で選べます。

## 衝突（コンフリクト）が起きたら

衝突（conflict、コンフリクト）は、二つのブランチが同じファイルの同じ場所を別々に書き換えたときに起こります。GitHubは、違う場所の変更なら自動でまとめてくれますが、同じ行が両方で変わっていると、「どちらが正しいか」を決められません。そこで、人に判断を求めます。衝突は失敗ではなく、「ここだけは人が決めてください」という合図です。

<figure class="fig">
{{svg:github-collaboration-conflict.svg}}
<figcaption>同じ行が別々に変えられると衝突になる。ファイルには両方の案が印つきで並ぶので、どちらを残すか決めて印を消す。</figcaption>
</figure>

衝突があると、PRの画面に<span class="ui">This branch has conflicts that must be resolved</span>と表示され、そのままではマージできません。直し方は二つあります。

<ol class="steps">
<li>簡単な衝突なら、<span class="ui">Resolve conflicts</span>のボタンを押す。ファイルの中に<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>、<code>=======</code>、<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>の印で区切られた二つの案が表示される。</li>
<li>残したい内容になるように書き直し、三種類の印の行をすべて消す。両方の案を合わせた新しい文にしてもよい。</li>
<li><span class="ui">Mark as resolved</span>を押し、<span class="ui">Commit merge</span>で確定する。衝突が消えれば、いつもどおりマージできる。</li>
</ol>

衝突がたくさんあるときや、どう直せばよいか分からないときは、AIエージェントに頼むのが近道です。そのときは、どちらを優先したいかを日本語で伝えます。

<div class="box try" markdown="1">
<p class="box-title">AIエージェントへの頼み方の例</p>

「プルリクエスト#12で`schedule.md`に衝突が起きています。第5回の日付は、mainにある新しい日付（11月4日）を正しいものとして残し、このブランチで足した発表時間の説明は生かしてください。直したら、何をどう直したかを説明してください。」

</div>

衝突を減らすコツもあります。

- 一つのPRを小さくし、早めにマージする。ブランチを長く放っておくほど、ぶつかりやすくなる。
- だれがどのファイルを担当するか、チームで分けておく。
- PRに<span class="ui">Update branch</span>のボタンが出たら押して、`main`の新しい変更を先に取り込んでおく。

## Issuesを「やることリスト」にする

<span class="ui">Issues</span>は、リポジトリに付いている掲示板です。不具合の報告に使うことが多いのですが、チームの「やることリスト」としても便利です。

- 一つのやることを一つのIssueにする（例：「アンケートの質問案を作る」「中間発表のスライドの構成を決める」）。
- <span class="ui">Assignees</span>で担当者を決め、<span class="ui">Labels</span>で分類する。
- 本文に`- [ ] 質問を10個書く`のように書くと、チェックボックスつきの小さな手順の一覧になる。
- PRの説明に`Closes #3`と書いておくと、そのPRがマージされたときに3番のIssueが自動で閉じる。
- 話し合いの記録が残るので、「なぜそう決めたか」をあとからたどれる。

Issueは、AIエージェントに頼みごとをするときの「依頼書」にもなります。次の節で説明します。

## チームで決めておきたいルール

学生のチームでGitHubを使うときに、最初に話し合って決めておくとよいことをまとめました。決めたことは、リポジトリのREADMEか、チームの約束事のファイル（エージェント向けなら`AGENTS.md`）に書いておきましょう。

- リポジトリを置く場所：だれのアカウントに作り、だれを招待するか。教員を招待するかどうか。
- `main`への直接のコミット：小さな誤字の修正だけはよい、それ以外はかならずPRにする、など。
- レビュー：PRは作った本人以外の一人が<span class="ui">Files changed</span>を見てからマージする。AIエージェントが作ったPRも同じ。
- マージの方法：Squash and mergeに統一する。
- 名前の付け方：ブランチ名、ファイル名は半角の英小文字・数字・ハイフン。コミットメッセージとPRの題名は日本語でよい。
- 置かないもの：個人情報、パスワードやAPIキー、公開してはいけない資料（[AIを使うときの倫理とルール](ai-ethics.md)）。
- 連絡の場所：相談はIssueやPRのコメントに書き、LINEなどで決めたことも要点をIssueに残す。

<div class="box tip" markdown="1">
<p class="box-title">ポイント</p>

レビューは「あら探し」ではなく、「二人目の目で確かめる」ことです。気づいたことは、「ここは〜という意味で合っていますか」のように質問の形で書くと、やり取りが穏やかになります。よいところを見つけたら、それも書きましょう。

</div>

## AIエージェントもブランチとプルリクエストで働く

GitHub Copilotのクラウドエージェント（Copilot cloud agent、以前の名前はcoding agent）のように、GitHubの上で作業するAIエージェントは、人と同じくブランチとプルリクエストを使います（2026年10月時点）。エージェントは`main`を直接書き換えず、自分のブランチで作業して、PRとして結果を出します。最後に取り込むかどうかを決めるのは人です。

<figure class="fig">
{{svg:github-collaboration-agent.svg}}
<figcaption>AIエージェントへの頼み方。人がIssueなどで依頼し、エージェントはブランチで作業してPRを出す。人が差分を確かめ、必要なら修正を頼み、最後に人がマージする。</figcaption>
</figure>

<ol class="steps">
<li>頼みたいことをIssueに書く。何を、どこまで、どんな約束事で（例：「AGENTS.mdの日本語の規則に従う」）してほしいかを具体的に書く。</li>
<li>IssueをCopilotに割り当てるか、GitHubのエージェントの画面から作業を頼む。</li>
<li>エージェントは自分用のブランチを作って作業し、コミットを重ね、プルリクエストを出す。</li>
<li>人が<span class="ui">Files changed</span>で差分を読む。直してほしい点があれば、PRのコメントで日本語で頼むと、エージェントが同じブランチに修正のコミットを足す。</li>
<li>内容に納得できたら、人がマージする。</li>
</ol>

クラウドエージェントを使えるかどうかは、Copilotのプランや設定によって決まります。授業で提供されるプランで何ができるかは、授業での案内を待ってください（[Copilotのエージェントに作業を頼む](copilot-agent.md)、[GitHub Copilot](../../../wiki/tools/github-copilot.md)）。Copilot以外のエージェント（パソコンで動くものなど）を使う場合も、「ブランチで作業してPRを出してもらい、人が確かめてからマージする」という流れは同じです。

この流れの一番の利点は、AIがした変更を、取り込む前に一つずつ確かめられることです。AIの出力には間違いがありえます。PRの差分を読むことが、そのまま「AIの出力を確かめる」作業になります（[AIの答えを確かめる](checking-ai-output.md)）。この授業の知識ベースも、AIエージェントがブランチで作業し、プルリクエストを通じて`main`に取り込む流れで作られています（[LLM Wiki](../../../wiki/concepts/llm-wiki.md)）。

## 次に読むページ

- [Markdownの書き方](markdown.md)
- [Copilotのエージェントに作業を頼む](copilot-agent.md)
- [AIエージェントとは](ai-agents.md)
- [AIの答えを確かめる](checking-ai-output.md)
- [プロジェクトの進め方](project-workflow.md)
- [英語の画面を読むための単語帳](github-english-ui.md)
- Wikiの関連ページ：[GitHub](../../../wiki/tools/github.md)、[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[LLM Wiki](../../../wiki/concepts/llm-wiki.md)
