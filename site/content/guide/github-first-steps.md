---
title: GitHubを始める：アカウントと最初のリポジトリ
short: GitHubを始める
description: GitHubのアカウントを作り、二要素認証を設定し、最初のリポジトリでファイルを編集してコミットし、仲間を招待するまでを、手順を追って説明します。
category: github
order: 2
level: 入門
updated: 2026年10月7日
---

## 最初の日にすること

このページでは、GitHubを初めて使う人が最初の日にすることを、順番に説明します。全部で30分〜1時間ほどです。GitHubの基本の考え方（リポジトリ、コミット、履歴）は[GitHubとは：基本の考え方](github-basics.md)で説明しているので、先に読んでおくと分かりやすくなります。

<figure class="fig">
{{svg:github-first-steps-flow.svg}}
<figcaption>最初の日の流れ。アカウントを作って守りを固め、練習用のリポジトリで編集と履歴を体験し、最後に仲間を招待する。</figcaption>
</figure>

GitHubの画面は英語です（2026年10月時点）。このページでは、画面に出る英語を<span class="ui">Sign up</span>のような形で示します。知らない言葉が出てきたら、[英語の画面を読むための単語帳](github-english-ui.md)を引いてください。

## アカウントを作る

### ユーザー名の選び方

GitHubのユーザー名は、リポジトリのURL（`github.com/ユーザー名/リポジトリ名`）や、コミットの記録、チームの仲間の画面など、あちこちに表示されます。次の点を考えて決めましょう。

- 使える文字：半角の英数字とハイフン（`-`）だけ。大文字と小文字は区別されない。
- 短く、読みやすく：仲間に口頭で伝えても分かる長さにする（例：`hanako-y`、`tcu-taro`）。
- 個人情報を入れない：学籍番号や生年月日は入れない。本名を出したくなければ、本名でなくてよい。
- 長く使えるもの：授業の後も使い続けられる名前にする。あとから設定で変えられるが、URLが変わるので、早めに決めておくのがよい。

### メールアドレスはどれを使うか

登録に使うメールアドレスは、大学のメールでも個人のメールでもかまいません。ただ、大学のメールは卒業すると使えなくなるのが一般的なので、長く使うつもりなら個人のメールで登録し、必要に応じて大学のメールを二つ目のアドレスとして追加する方法がおすすめです。一つのアカウントに複数のメールアドレスを登録でき、後で説明する学生向けの特典の申請では、大学のメールが役に立つことがあります。

授業でどのメールアドレスを使うよう指示があった場合は、その指示に従ってください。大学のアカウントについては[TCUアカウントと多要素認証](../../../wiki/campus/tcu-account.md)を見てください。

### 登録の手順

<ol class="steps">
<li>ブラウザで <code>https://github.com</code> を開き、右上の<span class="ui">Sign up</span>をクリックする。</li>
<li>メールアドレス、パスワード、ユーザー名を入力する。パスワードは、ほかのサービスと使い回さない長いものにする。</li>
<li>人間であることを確かめる簡単なパズルが出たら、画面の指示どおりに答える。</li>
<li>登録したメールアドレスに確認のコードが届くので、それを画面に入力する。</li>
<li><span class="ui">Sign in</span>でログインできれば完了。最初に出るアンケートのような画面は、飛ばしてもかまわない。</li>
</ol>

画面の細かい文言や順番は、時期によって変わることがあります。分からなくなったら、公式の案内（[GitHub Docs：GitHubアカウントの作成](https://docs.github.com/ja/get-started/start-your-journey/creating-an-account-on-github)）を見るか、画面の写真をAIに見せて「この画面では何をすればよいか」と聞いてみましょう。

## 二要素認証を設定する

二要素認証（2FA、Two-factor authentication）は、パスワードに加えて、スマートフォンのアプリなどに表示される数字（コード）を入力してログインするしくみです。パスワードが漏れても、他人がログインしにくくなります。

GitHubは、コードに関わる活動をするアカウントの多くに二要素認証を義務づけていて、対象になると、画面やメールで設定を求められます（[GitHub Docs：必須の2要素認証について](https://docs.github.com/ja/authentication/securing-your-account-with-two-factor-authentication-2fa/about-mandatory-two-factor-authentication)）。求められていなくても、最初の日に設定しておくのが安全です。

<ol class="steps">
<li>スマートフォンに認証アプリ（Google AuthenticatorやMicrosoft Authenticatorなど、30秒ごとに変わる6桁の数字を表示するアプリ）を入れる。GitHubの公式アプリ「GitHub Mobile」も使える。</li>
<li>GitHubの右上の自分のアイコンをクリックし、<span class="ui">Settings</span>を開く。</li>
<li>左のメニューの<span class="ui">Password and authentication</span>を開き、<span class="ui">Enable two-factor authentication</span>をクリックする。</li>
<li>画面に出るQRコードを認証アプリで読み取り、アプリに表示された6桁の数字を入力する。</li>
<li>リカバリーコード（<span class="ui">Recovery codes</span>）をダウンロードし、スマートフォン以外の安全な場所に保存してから、保存したことを確認するボタンを押す。</li>
</ol>

<div class="box warn" markdown="1">
<p class="box-title">リカバリーコードはなくさない</p>

スマートフォンをなくしたり機種を変えたりして認証アプリが使えなくなると、リカバリーコードがなければ自分のアカウントに入れなくなることがあります。リカバリーコードは、パソコンのファイルやパスワード管理アプリ、紙など、スマートフォンとは別の場所に保存してください。機種を変える前には、認証アプリの引き継ぎも忘れずに。

</div>

## 学生向けの特典（GitHub Education）

GitHubには、学生であることを確認すると無料の特典が受けられる「GitHub Education」というしくみがあります。申請では、在籍を示す資料（在籍期間の分かる学生証の写真など）を提出し、学校によっては大学のメールアドレスも必要です（[GitHub Docs：学生としてGitHub Educationに申請する](https://docs.github.com/ja/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student)）。確認された学生は、学生向けのCopilotのプラン（Copilot Student）などを使えるようになります。

ただし、この授業では、大学の予算でGitHub Copilotの有料版が受講生全員に提供されます。大学はGitHubとCopilotのプランをMicrosoftと調整しているところです（2026年10月7日時点）。そのため、授業のためにGitHub Educationへ申請する必要は、いまのところありません。提供の方法や手続きは授業やWebClassで案内されるので、その指示を待ってください（[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[GitHub Copilotとは](copilot-overview.md)）。

<div class="box note" markdown="1">
<p class="box-title">補足</p>

学生向けの特典の内容や申請の受け付け状況は、ときどき変わります。2026年春には、学生向けのプランを含む一部のCopilotのプランで、新しい申し込みが一時止められたと報じられました。自分で申請したい場合は、その時点の公式の案内を確かめてください。

</div>

## 最初のリポジトリを作る

練習用のリポジトリを作ってみましょう。ここで作るものは、あとで消してもかまいません。

<figure class="fig">
{{svg:github-first-steps-new-repo.svg}}
<figcaption>「Create a new repository」（新しいリポジトリの作成）の画面を簡略化した図。実際の画面は、配置や見た目が少し違うことがある。</figcaption>
</figure>

<ol class="steps">
<li>GitHubの右上の<span class="ui">+</span>をクリックし、<span class="ui">New repository</span>を選ぶ。</li>
<li><span class="ui">Owner</span>（持ち主）が自分のユーザー名になっていることを確かめる。</li>
<li><span class="ui">Repository name</span>に名前を入れる（例：<code>my-first-repo</code>）。</li>
<li><span class="ui">Description</span>に一行の説明を入れる（例：「GitHubの練習用」）。日本語でよく、空でもかまわない。</li>
<li>公開範囲を選ぶ。この練習では、自分だけが見られる<span class="ui">Private</span>（非公開）にしておく。</li>
<li><span class="ui">Add README</span>をオンにする（チェックを入れる）。</li>
<li><span class="ui">.gitignore</span>と<span class="ui">License</span>はそのままでよい。<span class="ui">Create repository</span>をクリックすると、リポジトリができる。</li>
</ol>

リポジトリの名前は、ファイル名と同じく、半角の英小文字・数字・ハイフンで付けるのがおすすめです。日本語や空白を入れると、URLが読みにくくなったり、ツールによっては扱いにくくなったりします。プロジェクトの内容が分かる英語にしましょう（例：`campus-wifi-survey`、`ats-team3-project`）。

README（リードミー）は、リポジトリの説明を書くファイルです。リポジトリを開くと、ファイル一覧の下にその内容が表示されます。READMEがあると、だれが見ても「これは何のリポジトリか」がすぐ分かります。READMEは[Markdown](markdown.md)という書き方で書きます。

<div class="box tip" markdown="1">
<p class="box-title">公開範囲の選び方（授業での方針は未定）</p>

公開（<span class="ui">Public</span>）のリポジトリは、世界中のだれでも見られます。非公開（<span class="ui">Private</span>）は、自分と招待した人だけが見られます。組織向けの契約があると、組織のメンバーだけが見られる<span class="ui">Internal</span>（組織内）も選べます。

授業のプロジェクトでどの公開範囲を使うかは、まだ決まっていません。大学はGitHubとCopilotのプランをMicrosoftと調整しているところで、学内（TCU）だけで共有できる選択肢が使えるようになるかもしれません（2026年10月7日時点）。それまでは、練習用のリポジトリを非公開で作っておき、プロジェクト用のリポジトリは授業の案内を待ってから作るのが安全です。公開範囲は、あとから<span class="ui">Settings</span>の一番下にある<span class="ui">Danger Zone</span>（取り消しにくい操作をまとめた欄）で変えられます。

</div>

## ファイルを編集してコミットする

できたリポジトリのREADMEを書き換えて、最初のコミットをしてみましょう。

<ol class="steps">
<li>リポジトリのファイル一覧で<code>README.md</code>をクリックする。</li>
<li>右上の鉛筆のアイコン（<span class="ui">Edit this file</span>）をクリックすると、編集の画面になる。</li>
<li>本文に一文を書き足す（例：「GitHubの練習をしています。」）。<span class="ui">Preview</span>のタブを押すと、表示されるときの見た目を確かめられる。</li>
<li>右上の緑の<span class="ui">Commit changes...</span>をクリックする。</li>
<li>開いた画面（ダイアログ）の<span class="ui">Commit message</span>に、変更の説明を短く書く（例：「READMEに自己紹介を追加」）。日本語でよい。</li>
<li><span class="ui">Commit directly to the main branch</span>（mainブランチに直接コミット）が選ばれていることを確かめ、<span class="ui">Commit changes</span>をクリックする。</li>
</ol>

これで、変更が履歴に記録されました。ダイアログでもう一つの選択肢「Create a new branch for this commit and start a pull request」を選ぶと、変更を別のブランチに記録して、プルリクエストを作る流れになります。チームで作業するときはこちらを使うことが多くなります（[ブランチとプルリクエストでの共同作業](github-collaboration.md)）。

新しいファイルを作るときは、リポジトリのトップで<span class="ui">Add file</span>をクリックし、<span class="ui">Create new file</span>を選びます。ファイル名の欄に`notes/memo.md`のように`/`を入れて書くと、フォルダーも同時に作れます。パソコンにあるファイルを置きたいときは、<span class="ui">Add file</span>から<span class="ui">Upload files</span>を選び、ファイルをドラッグして入れてから、同じようにコミットします。

## 履歴を見る

リポジトリのトップで、ファイル一覧の右上にある時計のアイコンと<span class="ui">Commits</span>をクリックすると、コミットの一覧が新しい順に表示されます。一つのファイルの履歴だけを見たいときは、そのファイルを開いて<span class="ui">History</span>をクリックします。

一覧のコミットをクリックすると、そのコミットで何が変わったか（差分）が表示されます。削除された行は赤、追加された行は緑で示されます。さっきのREADMEの変更が、緑の行として見えるはずです。

## 仲間を招待する・招待を受ける

非公開のリポジトリをチームで使うには、仲間を共同作業者（<span class="ui">Collaborators</span>）として招待します。招待された人が承諾すると、そのリポジトリのファイルを読み書きできるようになります。

<figure class="fig">
{{svg:github-first-steps-invite.svg}}
<figcaption>招待の流れ。持ち主が設定画面から招待し、招待された人がメールか通知から承諾すると、共同作業者になる。</figcaption>
</figure>

招待する人（リポジトリの持ち主）の手順：

<ol class="steps">
<li>リポジトリの上部のタブから<span class="ui">Settings</span>を開く。</li>
<li>左のメニューの<span class="ui">Access</span>の欄にある<span class="ui">Collaborators</span>をクリックする。パスワードや二要素認証のコードを求められたら入力する。</li>
<li><span class="ui">Add people</span>をクリックし、仲間のユーザー名を入力して、候補から本人を選ぶ。</li>
<li>「Add（ユーザー名）to（リポジトリ名）」という形のボタンを押すと、招待が送られる。相手が承諾するまでは、一覧に招待中として表示される。</li>
</ol>

招待された人の手順：

<ol class="steps">
<li>GitHubに登録したメールアドレスに届く招待メールを開く。メールが見つからなければ、GitHubの画面右上の通知（受信箱のアイコン）を見るか、持ち主にリポジトリのURLを教えてもらい、その末尾に<code>/invitations</code>を付けて開く。</li>
<li><span class="ui">Accept invitation</span>をクリックする。断るときは<span class="ui">Decline</span>。</li>
<li>リポジトリが開けば完了。自分のリポジトリの一覧にも表示されるようになる。</li>
</ol>

<div class="box warn" markdown="1">
<p class="box-title">注意</p>

招待には期限があり、7日以内に承諾しないと無効になります。その場合は、持ち主にもう一度招待してもらいましょう。また、個人のアカウントのリポジトリでは、共同作業者はファイルの追加や書き換えができるようになります。招待するのは、信頼できるチームの仲間と教員だけにしてください（[GitHub Docs：共同作業者の招待](https://docs.github.com/ja/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)）。

</div>

## 困ったときは

| 困ったこと | 確かめること・すること |
| :---- | :---- |
| 確認のメールが届かない | 迷惑メールのフォルダーを見る。大学のメールで届かなければ、個人のメールで試す。 |
| 認証アプリのスマートフォンをなくした | 保存しておいたリカバリーコードでログインし、二要素認証を設定し直す。 |
| 招待のメールが見つからない | 通知（受信箱のアイコン）を見るか、リポジトリのURLの末尾に`/invitations`を付けて開く。期限が切れていたら再招待を頼む。 |
| リポジトリの名前を間違えた | <span class="ui">Settings</span>の<span class="ui">General</span>で<span class="ui">Repository name</span>を変えて<span class="ui">Rename</span>を押す。 |
| 公開にするつもりのないものを公開にした | すぐに<span class="ui">Danger Zone</span>の<span class="ui">Change visibility</span>で非公開にし、教員に相談する。 |
| 英語の画面の意味が分からない | [英語の画面を読むための単語帳](github-english-ui.md)を引くか、画面の写真をAIに見せて日本語で聞く。 |

<div class="box try" markdown="1">
<p class="box-title">やってみよう</p>

1. 練習用のリポジトリ`my-first-repo`を非公開で作る。
2. `README.md`に、自分が授業でやってみたいことを一文書き足してコミットする。
3. <span class="ui">Add file</span>から`notes/first-day.md`というファイルを作り、今日学んだことを三つ箇条書きにしてコミットする。
4. <span class="ui">Commits</span>を開き、自分のコミットが二つ並んでいること、それぞれの差分が緑で表示されることを確かめる。

</div>

## 次に読むページ

- [英語の画面を読むための単語帳](github-english-ui.md)
- [ブランチとプルリクエストでの共同作業](github-collaboration.md)
- [Markdownの書き方](markdown.md)
- [GitHub Copilotとは](copilot-overview.md)
- Wikiの関連ページ：[GitHub](../../../wiki/tools/github.md)、[GitHubの日本語対応](../../../wiki/tools/github-japanese-support.md)、[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[TCUアカウントと多要素認証](../../../wiki/campus/tcu-account.md)
