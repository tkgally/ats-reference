---
title: VS CodeでCopilotを使う準備
short: VS Codeの準備
description: VS Codeを入れて日本語にし、GitHubでサインインしてCopilotを使えるようにし、リポジトリを開いて作業し、変更をGitHubに送るまでの手順を説明します。
category: copilot
order: 2
level: 基本
updated: 2026年10月7日
---

## なぜVS Codeを使うのか

VS Code（Visual Studio Code、ビジュアル・スタジオ・コード）は、Microsoftが無料で提供しているエディター（ファイルを書くためのアプリ）です。もともとはプログラムを書くための道具ですが、Markdownの文章を書くのにも向いています。この授業でVS Codeを使うとよい理由は、次の3つです。

- 公式の日本語言語パックがあり、メニューやボタンを日本語で表示できる。英語の画面しかないgithub.comより、ずっと分かりやすい（[GitHubの日本語対応](../../../wiki/tools/github-japanese-support.md)）。
- GitHub Copilotが組み込まれていて、ファイルを書きながら質問したり、エージェントに作業を頼んだりできる。
- GitHubのリポジトリを自分のパソコンに複製し、変更をGitHubに送り返す操作を、ボタンで行える。

このページでは、VS Codeを入れてから、Copilotに頼んだ変更をGitHubに送るまでを、順番に説明します。全体の流れは次のとおりです。

<figure class="fig">
{{svg:vscode-copilot-setup-flow.svg}}
<figcaption>1〜3は最初の一回だけ。4はリポジトリごとに一回。5と6は作業のたびに繰り返す。</figcaption>
</figure>

<div class="box warn" markdown="1">
<p class="box-title">画面の表記について</p>

VS CodeとCopilotは毎月のように更新され、ボタンの名前や置き場所がよく変わります。このページの説明は2026年10月時点のもので、公式の案内（[Set up GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/setup)、2026年10月7日に確認）にもとづいています。画面の表記が説明と違うときは、似た名前のボタンを探すか、Copilotのチャットに「〇〇はどこにありますか」と聞いてみてください。

</div>

## 準備するもの

- 自分のパソコン（WindowsかmacOS）。VS CodeはLinuxでも使える。
- GitHubのアカウント（まだの人は[GitHubを始める：アカウントと最初のリポジトリ](github-first-steps.md)）。
- Copilotが使える状態のGitHubアカウント。授業で提供される有料版の使い始め方は、授業やWebClassで案内されます（[GitHub Copilot](../../../wiki/tools/github-copilot.md)）。案内の前でも、無料のCopilot Freeで練習できます。

## 1. VS Codeを入れる

<ol class="steps">
<li>公式サイト <a href="https://code.visualstudio.com/">code.visualstudio.com</a> を開き、自分のパソコンに合ったものをダウンロードします。</li>
<li>ダウンロードしたファイルを開き、画面の案内に従ってインストールします。Windowsでは、途中の選択肢はそのままで構いません。macOSでは、アプリを「アプリケーション」フォルダーに移します。</li>
<li>VS Codeを起動します。最初に表示される「ようこそ」の画面は、閉じても構いません。</li>
</ol>

## 2. 日本語の画面にする

<ol class="steps">
<li>画面の左端に縦に並んだアイコンのうち、四角が4つ組み合わさった形のアイコン（<span class="ui">Extensions</span>、拡張機能）をクリックします。</li>
<li>上の検索欄に「Japanese」と入力し、Microsoftが提供している「Japanese Language Pack for Visual Studio Code」を選んで<span class="ui">Install</span>をクリックします。</li>
<li>右下に再起動を求めるメッセージが出たら、<span class="ui">Change Language and Restart</span>のようなボタンを押します。再起動すると、メニューが日本語になります。</li>
</ol>

日本語にならないときは、<kbd>Ctrl</kbd>＋<kbd>Shift</kbd>＋<kbd>P</kbd>（macOSでは<kbd>⌘</kbd>＋<kbd>Shift</kbd>＋<kbd>P</kbd>）でコマンドパレット（命令を名前で探して実行する欄）を開き、「Configure Display Language」と入力して「ja」を選びます。

## 3. GitHubでサインインしてCopilotを使えるようにする

2026年10月時点では、CopilotはVS Codeに最初から組み込まれています。以前のように「GitHub Copilot Chat」という拡張機能を別に入れる必要はありません。

<ol class="steps">
<li>画面のいちばん下の帯（ステータスバー）の右のほうにある、Copilotのアイコンにマウスを重ねます。</li>
<li>表示されたメニューで、AI機能を使い始めるボタン（英語の表示では<span class="ui">Use AI Features</span>）を選びます。</li>
<li>サインインの方法を聞かれたら、GitHubのアカウントでサインインする方法を選びます。ブラウザが開くので、GitHubにサインインし、VS Codeとの連携を許可（<span class="ui">Authorize</span>など）します。</li>
<li>ブラウザに「VS Codeに戻る」ような案内が出たら、それに従ってVS Codeに戻ります。ステータスバーのCopilotのアイコンが普通の表示になれば準備完了です。</li>
</ol>

すでにCopilotのプランが付いたアカウントなら、VS Codeはそのプランを使います。プランがないアカウントでサインインすると、無料のCopilot Freeとして使い始めます。授業で有料版が提供されたら、その有料版が付いたアカウントでサインインしているかを確かめてください。左端のアイコン列の下のほうにある人の形のアイコン（アカウント）から、どのアカウントでサインインしているかを確かめられます。

## 画面の見方

ここで、VS Codeの画面の主な部分を確かめておきましょう。

<figure class="fig">
{{svg:vscode-copilot-setup-window.svg}}
<figcaption>VS Codeの画面の模式図。左から、アイコンの列、ファイルの一覧、エディター、チャット。いちばん下がステータスバー。</figcaption>
</figure>

左端のアイコンの列（アクティビティバー）で、左側に何を表示するかを切り替えます。よく使うのは、ファイルの一覧を出す「エクスプローラー」と、変更の記録や送信をする「ソース管理」の二つです。ソース管理のアイコンは、枝分かれした線の形をしています。

## 4. リポジトリを開く（クローン）

GitHubにあるリポジトリを自分のパソコンに複製することを、クローン（clone）と言います。クローンすると、リポジトリのファイルと履歴が丸ごとパソコンにコピーされ、VS Codeで開いて作業できるようになります。

<ol class="steps">
<li>左端のアイコンの列から「ソース管理」を開きます。フォルダーを何も開いていなければ、<span class="ui">リポジトリのクローン</span>というボタンが表示されます（英語では<span class="ui">Clone Repository</span>）。</li>
<li>画面の上に入力欄が出たら、<span class="ui">GitHubから複製</span>（<span class="ui">Clone from GitHub</span>）を選びます。初めてのときは、GitHubへのサインインを求められます。</li>
<li>自分が使えるリポジトリの一覧が出るので、開きたいリポジトリを選びます。一覧にないときは、リポジトリのURL（<code>https://github.com/持ち主/名前</code>）を貼り付けます。</li>
<li>保存先のフォルダーを聞かれたら、「ドキュメント」などの分かりやすい場所を選びます。OneDriveやiCloudなど、自動で同期されるフォルダーの中は避けたほうが無難です。</li>
<li>複製が終わると「開きますか」と聞かれるので、<span class="ui">開く</span>（<span class="ui">Open</span>）を選びます。「このフォルダー内のファイルの作成者を信頼しますか」と聞かれたら、自分や授業のリポジトリであれば信頼して開きます。</li>
</ol>

<div class="box note" markdown="1">
<p class="box-title">Gitが入っていないと言われたら</p>

クローンには、Git（変更履歴を記録するソフトウェア）が必要です。macOSでは、初めて使うときにGitを含む開発ツールのインストールを勧められるので、案内に従って入れます。Windowsで「Gitが見つからない」という表示と<span class="ui">Gitのダウンロード</span>のようなボタンが出たら、[Gitの公式サイト](https://git-scm.com/)から「Git for Windows」を入れ、VS Codeを再起動します。インストールの途中の選択肢は、そのままで構いません。

</div>

次からは、VS Codeのメニューの「ファイル」から「最近使用した項目を開く」を選べば、同じリポジトリをすぐに開けます。

## 5. チャットを開いて頼む

チャットは、画面の上のほうにあるCopilotのアイコン（吹き出しのような形）か、<kbd>Ctrl</kbd>＋<kbd>Alt</kbd>＋<kbd>I</kbd>（macOSでは<kbd>⌃</kbd>＋<kbd>⌘</kbd>＋<kbd>I</kbd>）で開きます。画面の右側にチャットの欄が出たら、下の入力欄に日本語で頼みたいことを書きます。

入力欄のまわりには、いくつかの選択欄があります。2026年10月時点では、主に次のものがあります。

| 選択欄 | 選べるもの（例） | 意味 |
| :---- | :---- | :---- |
| エージェント（モード） | <span class="ui">Ask</span>、<span class="ui">Agent</span>、<span class="ui">Plan</span> | Copilotにどこまで任せるか。 |
| モデル | <span class="ui">Auto</span>、各社のモデル名 | どのAIモデルを使うか。迷ったら<span class="ui">Auto</span>。 |
| 作業の場所 | 自分のパソコン（ローカル）、クラウドなど | エージェントがどこで動くか。最初はローカルのままでよい。 |
| 許可の設定 | 一つずつ確認する、すべて許可する、など | エージェントの操作をどこまで自動で認めるか。 |

エージェント（モード）の違いは次のとおりです。

- <span class="ui">Ask</span>：質問に答えるだけで、ファイルは書き換えない。「この資料の要点を教えて」「この英語のボタンは何をするもの？」など、相談や調べものに使う。
- <span class="ui">Agent</span>：目標を伝えると、Copilotが自分で手順を考え、ファイルを読み書きし、必要なら命令を実行しながら作業を進める。「`raw/`に置いた資料をWikiに取り込んで」など、まとまった作業に使う。
- <span class="ui">Plan</span>：すぐには書き換えず、作業の計画を立てて見せてくれる。大きな作業を頼む前に、進め方を相談するのに向いている。

以前のVS Codeには、指定したファイルだけを書き換える<span class="ui">Edit</span>というモードもありました。表示されない場合は、<span class="ui">Agent</span>で「このファイルだけを直して」と頼めば同じことができます。

<div class="box tip" markdown="1">
<p class="box-title">ポイント</p>

チャットに特定のファイルのことを聞きたいときは、そのファイルをエディターで開いておくか、エクスプローラーからチャットの入力欄にドラッグして添付します。「どのファイルの話か」がはっきりすると、答えが正確になります。

</div>

## エージェントの操作を確かめて認める

<span class="ui">Agent</span>で頼むと、Copilotはファイルを書き換えたり、ターミナル（文字で命令を打つ画面）で命令を実行したりします。重要な操作の前には、チャットの中に確認の表示が出て、許可を求められます。

- 命令の実行やツールの使用：内容を読み、問題なければ<span class="ui">Allow</span>（許可）のようなボタンを押す。何をするのか分からないときは、許可せずに「この命令は何をするものですか」と聞いてよい。
- ファイルの書き換え：書き換えた箇所が、追加は緑、削除は赤で表示される。内容を確かめ、残すなら<span class="ui">Keep</span>、取り消すなら<span class="ui">Undo</span>のようなボタンを押す。

許可の設定には、すべての操作を自動で認めるような選択肢もあります。便利ですが、エージェントが思わぬ操作をしても気づきにくくなります。慣れるまでは、一つずつ確認する設定のまま使いましょう。安全に任せるための考え方は[AIエージェントとは](ai-agents.md)と[Copilotのエージェントに作業を頼む](copilot-agent.md)で説明します。

## 6. 変更をコミットして同期する

VS Codeでファイルを書き換えても、そのままではパソコンの中で変わっただけです。GitHubに反映するには、変更を「コミット」して履歴に記録し、「同期」してGitHubに送ります。

<ol class="steps">
<li>左端のアイコンの列から「ソース管理」を開きます。変更したファイルの一覧が表示されます。ファイル名をクリックすると、どこが変わったかを左右に並べて確かめられます。</li>
<li>一覧の上の入力欄に、コミットメッセージ（何を変えたかの短い説明）を書きます。入力欄の横にあるきらきらしたアイコンを押すと、Copilotがメッセージの案を書いてくれます。案はそのまま使わず、内容に合っているか確かめましょう。</li>
<li><span class="ui">コミット</span>（<span class="ui">Commit</span>）ボタンを押します。「ステージされている変更がありません」のような確認が出たら、すべての変更をコミットする選択肢（<span class="ui">はい</span>など）を選びます。</li>
<li>ボタンが<span class="ui">変更の同期</span>（<span class="ui">Sync Changes</span>）に変わったら、それを押します。これで、コミットがGitHubに送られます。</li>
<li>ブラウザでGitHubのリポジトリを開き、変更が反映されているかを確かめます。</li>
</ol>

「同期」は、GitHubにある新しい変更を取ってくること（pull）と、自分のコミットをGitHubに送ること（push）を、まとめて行う操作です。チームで作業しているときや、github.comのクラウドエージェントに作業を頼んだあとは、作業を始める前にも一度同期して、最新の状態にしておきましょう。ステータスバーの左にある回転する矢印のアイコンでも同期できます。コミットや履歴の考え方は[GitHubとは：基本の考え方](github-basics.md)で説明しています。

## うまくいかないとき

| こんなとき | 試すこと |
| :---- | :---- |
| チャットに答えが返ってこない | ステータスバーのCopilotのアイコンを確かめる。サインインが切れていれば、もう一度サインインする。 |
| 有料版のはずなのに制限がかかる | 別のGitHubアカウントでサインインしていないかを確かめる。授業の案内も見直す。 |
| コミットのときに名前とメールアドレスを設定するよう言われる | Gitに自分の名前を登録する必要がある。チャットで「Gitのuser.nameとuser.emailを設定する方法を教えて」と聞き、案内に従う。メールアドレスは、GitHubの設定にある非公開用のアドレスを使うと安心。 |
| 同期のときにエラーが出る | GitHubの側に新しい変更があり、自分の変更とぶつかっていることがある。エラーの文をCopilotのチャットに貼り付けて、どうすればよいか聞く。 |
| 画面が英語に戻った | 日本語言語パックの更新のあとに起きることがある。「2. 日本語の画面にする」をもう一度行う。 |

<div class="box try" markdown="1">
<p class="box-title">やってみよう</p>

練習用のリポジトリをクローンし、<span class="ui">Ask</span>で「このリポジトリにはどんなファイルがありますか」と聞いてみましょう。次に<span class="ui">Agent</span>に切り替えて「README.mdの最後に、今日の日付と『VS Codeから編集しました』という一文を追加してください」と頼みます。変更を確かめて残し、コミットして同期し、GitHubの画面に反映されたかを確かめてみてください。

</div>

## 次に読むページ

- [Copilotのエージェントに作業を頼む](copilot-agent.md)
- [GitHub Copilotとは](copilot-overview.md)
- [GitHubとは：基本の考え方](github-basics.md)
- [ブランチとプルリクエストでの共同作業](github-collaboration.md)
- [Markdownの書き方](markdown.md)
- Wikiの関連ページ：[VS Code](../../../wiki/tools/vs-code.md)、[GitHub Copilot](../../../wiki/tools/github-copilot.md)、[GitHubの日本語対応](../../../wiki/tools/github-japanese-support.md)
