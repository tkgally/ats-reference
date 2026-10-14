---
title: Copilotデスクトップアプリを使い始める
short: Copilotアプリ
description: この授業でおもに使うGitHub Copilotデスクトップアプリの入手、サインイン、最初のセッション、変更の確かめ方と、つまずきやすい点を説明します。
category: copilot
order: 1
level: 入門
updated: 2026年10月14日
---

## このアプリは何か

GitHub Copilotデスクトップアプリ（以下、Copilotアプリ）は、自分のパソコンにインストールして使うアプリです。リポジトリを開き、日本語で「こうしてほしい」と頼むと、Copilotのエージェントが作業を進めてくれます。この授業では、生成AIを使うことと、GitHubのリポジトリで作業することの両方を、おもにこのアプリで行います（担当教員の方針、2026年10月13日。[Wikiの解説](../../../wiki/tools/github-copilot-app.md)）。ChatGPT、Claude、Geminiなどほかのツールも、プロジェクトに合わせて選べます（[AIツールを比べる](ai-tools-compare.md)）。

公式のドキュメントによれば、このアプリはmacOS、Windows、Linuxで使えます（2026年10月13日に確認。[Quickstart for the GitHub Copilot app](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app)、[更新情報（2026年7月7日）](https://github.blog/changelog/2026-07-07-github-copilot-app-available-to-all/)）。

<figure class="fig">
{{svg:copilot-app-flow.svg}}
<figcaption>アプリでの作業の流れ。作業は、セッション専用のブランチで進むので、確かめて取り込むまで元のブランチは変わらない。</figcaption>
</figure>

<div class="box warn" markdown="1">
<p class="box-title">画面の表記について</p>

アプリは新しく、ボタンの名前や置き場所はこれからも変わるでしょう。このページの画面の表記は、公式ドキュメントの英語の表記にもとづいています。アプリの画面を実際に見て確かめたものではありません。違っていたら、似た名前のボタンを探すか、アプリのチャットで「〇〇はどこにありますか」と聞いてください。IT担当者や教員の説明が、このページと食い違ったら、そちらを優先してください。

</div>

## 使い始めるまでの流れ

授業では、大学のGitHubの組織「TCU Copilot Teaching Platform」（tokyo-city-university）を使います。大学のIT担当者の手順書（2026年10月14日。[Wikiの解説](../../../wiki/tools/github-copilot-app.md)）によれば、履修者はあらかじめ授業用のTeamに登録され、有償版のCopilot（Copilot Business）の利用枠もそのTeamに割り当てられています。組織への参加やCopilotの設定を、自分でする必要はありません。次の順に進めます。

<ol class="steps">
<li>ブラウザでGitHubにサインインします。GitHubのアカウントがなければ、画面の案内に従って新しく作り、そのアカウントでサインインします（<a href="github-first-steps.md">GitHubを始める</a>）。</li>
<li>次のURLを開き、大学のMicrosoftのアカウント（TCUアカウント）でSSO認証をします：<code>https://github.com/orgs/tokyo-city-university/sso</code>。GitHubへのサインインとSSO認証は別の処理で、組織のリポジトリやCopilotを使うにはSSO認証が必要です。認証の途中で、追加の本人確認や二要素認証を求められることがあります。画面の案内に従い、リカバリーコードが出たら安全な場所に保管してください（<a href="../../../wiki/concepts/two-factor-authentication.md">二要素認証</a>）。</li>
<li>SSO認証のあと、「TCU Copilot Teaching Platform」にアクセスできることを確かめます。</li>
<li>試しのリポジトリを作ります。作成先（<span class="ui">Owner</span>）に tokyo-city-university を選び、名前は<code>ats-名字-test-1</code>（名字が tanaka なら<code>ats-tanaka-test-1</code>）、公開設定は<span class="ui">Private</span>にします。名字のローマ字が分からなければ、教員に聞いてください。</li>
<li>公式のダウンロードページ（<a href="https://docs.github.com/ja/copilot/concepts/copilot-surfaces/github-copilot-app">GitHub Docs：GitHub Copilot アプリ</a>）の案内に従って、自分のパソコン用のアプリを入手してインストールします。パソコンにはGit（変更の履歴を記録するソフトウェア）が必要です。入っていなければ、公式サイト（<a href="https://git-scm.com/">git-scm.com</a>）の案内に従って入れます。</li>
<li>アプリを開き、<span class="ui">Sign in to GitHub</span>から、手順1と同じアカウントでサインインします。ブラウザが開いたら、授業用のアカウントであることを確かめ、求められたらSSO認証もします。</li>
<li>試しのリポジトリを選んで開き、リポジトリ名が正しいことを確かめます。</li>
</ol>

ブラウザ版のCopilot Chat（<code>https://github.com/copilot</code>）も、SSO認証が済んでいれば、組織のリポジトリを文脈に選んで使えます。

最初の日の確認項目：GitHubにサインインできる。SSO認証ができる。組織にアクセスできる。<code>ats-名字-test-1</code>の形式でPrivateのリポジトリを作れる。アプリを起動してサインインできる。作ったリポジトリをアプリで開ける。Copilotのチャットでリポジトリについて質問できる。

<div class="box warn" markdown="1">
<p class="box-title">リポジトリが一覧に出ない、「Access denied」と出るとき</p>

多くは、組織へのSSO認証が済んでいないことが原因です。上のSSOのURLを開いて大学のアカウントで認証をやり直し、アプリに戻って再読み込み（または再起動）してください。「Single sign-on to view this chat.」と出る場合も同じです。リポジトリの作成先と名前が正しいかも確かめます。それでも直らなければ、画面のメッセージを記録して、教員かIT担当者に連絡してください。

</div>

Copilotの利用権は、<code>https://github.com/settings/copilot</code>で付いているかを確かめられます。

## プロジェクトを加えて、セッションを始める

アプリでは、作業するリポジトリを「プロジェクト」として加えます。サイドバーのProjectsの横にある追加のアイコン（プラス）を押すと、次の三つから選べます。

- <span class="ui">Local folder or repository</span>：すでにパソコンにあるフォルダーやリポジトリ。
- <span class="ui">GitHub repository</span>：GitHubのリポジトリを一覧から選び、パソコンに複製（クローン）する。
- <span class="ui">Repository URL</span>：リポジトリのURLを貼り付ける。

保存先には、OneDriveなど自動で同期されるフォルダーの中は避けてください。

プロジェクトを加えたら、その横の<span class="ui">Start a new session</span>のアイコンで、セッションを始めます。セッションは、一つの作業の単位です。公式のドキュメントによれば、セッションごとに独立した作業場所と専用のブランチが用意されるので、いくつかの作業を並べて進めても、ぶつかりません。ブランチについては[GitHubとは](github-basics.md)と[ブランチとプルリクエストでの共同作業](github-collaboration.md)を見てください。

プロンプトを入力する欄の下で、モードとモデルなどを選べます。モードは三つです（2026年10月13日時点）。

| モード | 動き方 | 使いどころ |
| :---- | :---- | :---- |
| <span class="ui">Interactive</span> | 変更の案を示し、人の入力を待ちながら一緒に進める。 | 最初はこれ。 |
| <span class="ui">Plan</span> | 先に計画を立て、人が承認してから作業する。 | 大きめの作業の前に、進め方を決めたいとき。 |
| <span class="ui">Autopilot</span> | 人の手を借りずに、書いて、試して、繰り返す。 | 慣れるまでは使わない。 |

<div class="box danger" markdown="1">
<p class="box-title">Autopilotは、慣れるまで使わない</p>

Autopilotは、確認なしで作業を進めます。何が起きたか、あとから追うのが大変です。最初はInteractiveかPlanで、一歩ずつ確かめながら進めましょう。

</div>

## 頼んで、変更を確かめる

プロンプトの欄に、日本語で頼みたいことを書きます。うまい頼み方は[AIへの頼み方](prompting.md)と[Copilotのエージェントに作業を頼む](copilot-agent.md)にあります。プロンプトでは、`#`でIssue（課題）、`@`でファイルを指定でき、`/`でコマンドを呼び出せます。

エージェントが許可や選択を求めてきたら、内容を読んでから答えます。分からないときは許可せず、「これは何をするものですか」と聞いてかまいません。

作業が終わったら、プロンプト欄の上の<span class="ui">Changes</span>を押して、変更点（差分）を確かめます。追加された行と消された行が分かれて表示されます。意図したとおりか、資料に書いていないことが入っていないか、自分で読んでください。直したいところは、同じセッションで続けて頼みます。納得できたら<span class="ui">Create PR</span>で、変更を取り込んでもらうための提案（プルリクエスト）を作ります。作ったあとは<span class="ui">PR</span>のボタンで開けます。

<div class="box try" markdown="1">
<p class="box-title">やってみよう</p>

練習用のリポジトリをプロジェクトに加え、Interactiveで新しいセッションを始めます。「このリポジトリにはどんなファイルがありますか。初心者にも分かるように説明してください」と頼んでみましょう。次に、別のセッションで「READMEの最後に、今日の日付と一文のあいさつを足してください」と頼み、<span class="ui">Changes</span>で変更を確かめます。READMEとは何かは[Wikiの解説](../../../wiki/concepts/readme.md)にあります。

</div>

## つまずきやすい点

| こんなとき | 試すこと |
| :---- | :---- |
| 授業用ではないアカウントにつながってしまった | ブラウザに個人のアカウントがログインしたままだと起こりやすい。授業用のアカウントだけにするか、プライベートウィンドウでサインインする。 |
| 機能が使えない、制限がかかる | `https://github.com/settings/copilot`で、Copilotの利用権が付いているかを確かめる。付いていなければ、SSO認証を確かめたうえで、教員やIT担当者に伝える。 |
| 大学の組織で使えない | まずSSO認証（上の手順2）を確かめる。それでも使えなければ、組織のアプリのポリシーが関係している可能性があるので、教員やIT担当者に伝える。 |
| ダウンロードやサインインの通信が通らない | 学内のネットワークの制限かもしれない。スマートフォンのテザリングを試す。[学内Wi-Fi](../../../wiki/campus/campus-wifi.md)も見る。 |
| Gitがないと言われた | Gitをインストールする。 |

## 安全のための約束

- 学籍番号、成績、他人の個人情報、パスワード、APIキーを、リポジトリにも、Copilotへの入力にも書かない（[AIを使うときの倫理とルール](ai-ethics.md)）。
- 非公開のリポジトリでも、共同作業者には見える。招待は仲間と教員だけにする。
- Copilotが許可を求めたら、内容を読んでから許可する。

## 次に読むページ

- [GitHubを始める：アカウントと最初のリポジトリ](github-first-steps.md)
- [Copilotのエージェントに作業を頼む](copilot-agent.md)
- [GitHub Copilotとは](copilot-overview.md)
- [英語の画面を読むための単語帳](github-english-ui.md)
- [VS CodeでCopilotを使う準備](vscode-copilot-setup.md)（エディターで作業したい人向け）
- Wikiの関連ページ：[GitHub Copilotデスクトップアプリ](../../../wiki/tools/github-copilot-app.md)、[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[リポジトリ](../../../wiki/concepts/repository.md)
