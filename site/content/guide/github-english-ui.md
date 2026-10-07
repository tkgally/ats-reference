---
title: 英語の画面を読むための単語帳
short: 英語の画面の単語帳
description: GitHubの英語の画面によく出る言葉を、画面の場所ごとに表にまとめました。ブラウザの翻訳を使うときの注意や、日本語の公式ドキュメントの使い方も説明します。
category: github
order: 3
level: 入門
updated: 2026年10月7日
---

## 英語の画面は「決まった言葉」の組み合わせ

GitHubのウェブサイトには公式の日本語の画面がなく、メニューやボタンは英語で表示されます（2026年10月時点、[GitHubの日本語対応](../../../wiki/tools/github-japanese-support.md)）。ただ、画面に出る英語は、長い文章よりも、決まった短い言葉がほとんどです。同じ言葉がいろいろな場所に何度も出てくるので、よく出る50〜100語ほどを知っていれば、たいていの操作は迷わずにできるようになります。

このページは、辞書のように引いて使う単語帳です。最初から全部覚える必要はありません。画面で分からない言葉に出会ったら、ブラウザの検索（WindowsならCtrl＋F、MacならCommand＋F）でこのページの中を探してください。

<figure class="fig">
{{svg:github-english-ui-repo-page.svg}}
<figcaption>リポジトリのトップページの模式図。番号の場所の言葉を、このページの表で説明している。</figcaption>
</figure>

## リポジトリの上の部分

リポジトリを開くと、一番上にリポジトリの名前と、横に並んだタブがあります。タブは、そのリポジトリの中の「部屋」のようなものです。

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">Code</span> | コード | ファイルの一覧とREADMEが表示される、リポジトリの入り口のタブ。 |
| <span class="ui">Issues</span> | イシュー（課題） | やること、困りごと、アイデアなどを書いておく掲示板。 |
| <span class="ui">Pull requests</span> | プルリクエスト | 変更を本流に取り込むための依頼の一覧。略して「PR」。 |
| <span class="ui">Actions</span> | アクション | 自動で動く処理（サイトの公開や確認など）の記録。 |
| <span class="ui">Projects</span> | プロジェクト | 課題をカードのように並べて管理する板。使わなくてもよい。 |
| <span class="ui">Wiki</span> | ウィキ | GitHubに付属する説明ページの機能。この授業の知識ベースとは別物。 |
| <span class="ui">Security</span> | セキュリティ | 安全に関する警告や設定。 |
| <span class="ui">Insights</span> | インサイト | だれがどれだけ変更したかなどの統計。 |
| <span class="ui">Settings</span> | 設定 | リポジトリの名前、公開範囲、共同作業者などの設定。持ち主など権限のある人にだけ表示される。 |
| <span class="ui">Watch</span> | ウォッチ（見守る） | このリポジトリで何かあったときに通知を受け取る設定。 |
| <span class="ui">Fork</span> | フォーク | 他人のリポジトリを、自分のアカウントに丸ごと複製すること。 |
| <span class="ui">Star</span> | スター | 「いいね」やブックマークのような印。 |
| <span class="ui">Public</span>／<span class="ui">Private</span> | 公開／非公開 | リポジトリをだれでも見られるか、招待した人だけが見られるか。 |

## ファイル一覧のまわり

<span class="ui">Code</span>のタブでは、ファイルの一覧の上に、ブランチの切り替えやファイルの追加のボタンが並びます。

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">main</span> | メイン | 本流のブランチの名前。押すと、ブランチを切り替えたり、新しく作ったりできる。 |
| <span class="ui">Branch</span>／<span class="ui">Branches</span> | ブランチ | 本流から枝分かれした作業用の流れ。 |
| <span class="ui">Tags</span> | タグ | 特定の時点に付けた名札（「完成版1」など）。 |
| <span class="ui">Go to file</span> | ファイルへ移動 | ファイル名で検索して開く。 |
| <span class="ui">Add file</span> | ファイルを追加 | 押すと、下の二つが選べる。 |
| <span class="ui">Create new file</span> | 新しいファイルを作る | ブラウザの中で新しいファイルを書く。 |
| <span class="ui">Upload files</span> | ファイルをアップロード | パソコンにあるファイルを入れる。 |
| <span class="ui">Code</span>（緑のボタン） | コード | リポジトリを複製（clone）したり、ZIPでダウンロードしたりするための窓を開く。 |
| <span class="ui">Clone</span> | クローン（複製） | リポジトリを丸ごと自分のパソコンなどに複製すること。 |
| <span class="ui">Download ZIP</span> | ZIPでダウンロード | いまのファイル一式を、一つの圧縮ファイルとして保存する。履歴は含まれない。 |
| <span class="ui">Commits</span> | コミット（の一覧） | 時計のアイコンと並ぶ。押すと履歴が開く。 |
| <span class="ui">About</span> | このリポジトリについて | 右側にある説明の欄。 |
| <span class="ui">README</span> | リードミー | リポジトリの説明のファイル。一覧の下に表示される。 |
| <span class="ui">.gitignore</span> | ギットイグノア | Gitに記録しないファイルを指定するファイル。 |
| <span class="ui">License</span> | ライセンス | 他人がどんな条件で使ってよいかを示すファイル。 |
| <span class="ui">Releases</span> | リリース | 完成版などを配布用にまとめたもの。 |

## ファイルを開いたとき

ファイル名をクリックすると、そのファイルの中身が表示されます。上の部分に、表示の切り替えや編集のボタンが並びます。

<figure class="fig">
{{svg:github-english-ui-file-view.svg}}
<figcaption>ファイルを開いたときの画面の上の部分の模式図。</figcaption>
</figure>

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">Preview</span> | プレビュー | Markdownなどを、整えた見た目で表示する。 |
| <span class="ui">Code</span> | コード | 書式記号を含む、元の文字のまま表示する。 |
| <span class="ui">Blame</span> | ブレイム | 行ごとに、最後にだれがいつ変えたかを表示する。英語の本来の意味は「責める」だが、責任追及の機能ではない。 |
| <span class="ui">Raw</span> | ロウ（生の） | 飾りのない文字だけのページで表示する。 |
| <span class="ui">Copy raw file</span> | 中身をコピー | ファイルの中身を丸ごとコピーする。AIに貼り付けるときに便利。 |
| <span class="ui">Download raw file</span> | ダウンロード | そのファイルだけを保存する。 |
| <span class="ui">Edit this file</span> | このファイルを編集 | 鉛筆のアイコン。ブラウザの中で編集できる。 |
| <span class="ui">History</span> | 履歴 | そのファイルだけのコミットの一覧。 |
| <span class="ui">Delete file</span> | ファイルを削除 | 鉛筆の横などのメニューにある。削除もコミットとして記録される。 |

## 変更を記録するとき

ファイルを編集したり追加したりした後は、コミットの画面（ダイアログ）が出ます。

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">Commit changes...</span> | 変更をコミット | 編集の画面の右上の緑のボタン。押すとダイアログが開く。 |
| <span class="ui">Commit message</span> | コミットメッセージ | 変更の短い説明。日本語でよい。 |
| <span class="ui">Extended description</span> | 詳しい説明 | 必要なら書く、長めの説明。空でもよい。 |
| <span class="ui">Commit directly to the main branch</span> | mainに直接コミット | 本流にそのまま記録する。 |
| <span class="ui">Create a new branch for this commit and start a pull request</span> | 新しいブランチに記録してPRを始める | 変更をブランチに記録し、プルリクエストを作る流れに進む。 |
| <span class="ui">Propose changes</span> | 変更を提案 | 書き込む権限がないリポジトリなどで、変更を提案として出す。 |
| <span class="ui">Cancel changes</span> | 変更を取り消す | 編集をやめて、何も記録しない。 |
| <span class="ui">Show diff</span> | 差分を表示 | どこを変えたかを色分けして見せる。 |

## ブランチとプルリクエスト

チームやAIエージェントと作業するときに必ず出てくる言葉です。流れは[ブランチとプルリクエストでの共同作業](github-collaboration.md)で説明しています。

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">New branch</span> | 新しいブランチ | ブランチを作る。 |
| <span class="ui">Compare &amp; pull request</span> | 比べてプルリクエスト | ブランチに新しいコミットがあると黄色い帯に出るボタン。押すとPRを作る画面になる。 |
| <span class="ui">New pull request</span> | 新しいプルリクエスト | PRを自分で作り始める。 |
| <span class="ui">base</span>／<span class="ui">compare</span> | 取り込み先／取り込む元 | 「どのブランチ（compare）を、どのブランチ（base）へ」を選ぶ欄。baseはふつう`main`。 |
| <span class="ui">Create pull request</span> | プルリクエストを作る | PRを作成する。 |
| <span class="ui">Draft</span> | 下書き | まだ作業中のPR。マージできない状態。 |
| <span class="ui">Conversation</span> | 会話 | PRの説明とコメントのやり取りのタブ。 |
| <span class="ui">Files changed</span> | 変更されたファイル | 差分（赤と緑）を見るタブ。 |
| <span class="ui">Review changes</span> | 変更をレビュー | 確認の結果をまとめて出すボタン。 |
| <span class="ui">Approve</span> | 承認 | 「この変更でよい」という意思表示。 |
| <span class="ui">Request changes</span> | 修正を依頼 | 「直してからマージしてほしい」という意思表示。 |
| <span class="ui">Comment</span> | コメント | 意見や質問を書く。 |
| <span class="ui">Merge pull request</span> | プルリクエストをマージ | 変更を取り込むボタン。 |
| <span class="ui">Squash and merge</span> | まとめてマージ | ブランチのコミットを一つにまとめて取り込む。 |
| <span class="ui">Rebase and merge</span> | 並べ直してマージ | コミットを一つずつ本流の先に並べ直して取り込む。 |
| <span class="ui">Confirm merge</span> | マージを確定 | マージを最終的に実行する。 |
| <span class="ui">Delete branch</span> | ブランチを削除 | マージが済んだブランチを消す。 |
| <span class="ui">Conflict</span> | 衝突（コンフリクト） | 同じ場所が別々に変えられて、自動ではまとめられない状態。 |
| <span class="ui">Resolve conflicts</span> | 衝突を解決 | 衝突を画面上で直すボタン。 |
| <span class="ui">Open</span>／<span class="ui">Closed</span>／<span class="ui">Merged</span> | 未処理／閉じた／マージ済み | PRやIssueの状態。 |

## Issues

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">New issue</span> | 新しいIssue | Issueを書く。 |
| <span class="ui">Title</span> | 題名 | Issueの題名。 |
| <span class="ui">Assignees</span> | 担当者 | そのIssueを担当する人（AIエージェントを指定できる場合もある）。 |
| <span class="ui">Labels</span> | ラベル | 分類の札。`bug`（不具合）、`enhancement`（改善）、`documentation`（文書）、`question`（質問）など。 |
| <span class="ui">Milestone</span> | 節目 | 「中間発表まで」など、期限ごとのまとまり。 |
| <span class="ui">Close issue</span> | Issueを閉じる | 済んだIssueを閉じる。 |
| <span class="ui">Reopen issue</span> | 再び開く | 閉じたIssueを元に戻す。 |

## 設定と招待

| 英語 | 読み方・訳 | 意味 |
| :---- | :---- | :---- |
| <span class="ui">General</span> | 全般 | 名前の変更などの基本の設定。 |
| <span class="ui">Rename</span> | 名前を変える | リポジトリの名前を変える。 |
| <span class="ui">Collaborators</span> | 共同作業者 | 招待した仲間の一覧。 |
| <span class="ui">Add people</span>／<span class="ui">Invite</span> | 人を追加／招待する | 共同作業者を招待する。 |
| <span class="ui">Accept invitation</span> | 招待を承諾 | 招待を受けるボタン。 |
| <span class="ui">Decline</span> | 断る | 招待を断る。 |
| <span class="ui">Danger Zone</span> | 危険な操作 | 公開範囲の変更や削除など、取り消しにくい操作をまとめた欄。 |
| <span class="ui">Change visibility</span> | 公開範囲を変える | 公開と非公開を切り替える。 |
| <span class="ui">Delete this repository</span> | このリポジトリを削除 | 元に戻せないので、使う前に必ず相談する。 |
| <span class="ui">Password and authentication</span> | パスワードと認証 | アカウントの設定の中にある、二要素認証などの欄。 |

## どこでも出てくる小さな言葉

| 英語 | 意味 | 英語 | 意味 |
| :---- | :---- | :---- | :---- |
| <span class="ui">Sign up</span> | 新規登録 | <span class="ui">Sign in</span> | ログイン |
| <span class="ui">Sign out</span> | ログアウト | <span class="ui">Save</span> | 保存 |
| <span class="ui">Cancel</span> | 取り消し | <span class="ui">Submit</span> | 送信 |
| <span class="ui">Update</span> | 更新 | <span class="ui">Delete</span> | 削除 |
| <span class="ui">Edit</span> | 編集 | <span class="ui">Copy</span> | コピー |
| <span class="ui">Dismiss</span> | 閉じる（表示を消す） | <span class="ui">Learn more</span> | 詳しい説明へ |
| <span class="ui">optional</span> | 任意（空でもよい） | <span class="ui">required</span> | 必須 |
| <span class="ui">ahead</span> | 先に進んでいる | <span class="ui">behind</span> | 遅れている |

最後の二つは、「This branch is 2 commits ahead of main」（このブランチはmainより2コミット進んでいる）のような文で出てきます。ブランチの状態を説明する文には、次のようなものがあります。

- <span class="ui">Able to merge</span>：衝突がなく、マージできる。
- <span class="ui">This branch has no conflicts with the base branch</span>：取り込み先との衝突がない。
- <span class="ui">This branch has conflicts that must be resolved</span>：衝突があり、解決しないとマージできない。
- <span class="ui">This branch is out-of-date with the base branch</span>：取り込み先に新しい変更があり、このブランチが遅れている。<span class="ui">Update branch</span>で追いつける。

## ブラウザの翻訳を使うとき・使わないとき

ChromeやEdgeには、ページを日本語に翻訳する機能があります。ページの何もないところを右クリックして「日本語に翻訳」を選ぶか、アドレスバーの翻訳のアイコンを押すと、画面全体が日本語になります。設定画面や長い説明文を読むときには、とても助かります。

ただし、GitHubの画面では、翻訳がかえって混乱のもとになることがあります。

- ボタンの名前が変わる：たとえば<span class="ui">Blame</span>が「非難」、<span class="ui">Issues</span>が「問題」、<span class="ui">Star</span>が「星」のように訳されることがあり、説明やAIの答えに出てくる英語と対応が付かなくなる。
- ファイル名やコードまで訳される：`README.md`やフォルダー名、コミットメッセージが勝手に訳されて、本当の名前が分からなくなることがある。
- 編集の画面で使うと危ない：ファイルを編集しているときに翻訳が働くと、表示が崩れたり、どこを書き換えているのか分かりにくくなったりする。

<div class="compare" markdown="1">
<div class="good" markdown="1">

翻訳を使ってよい場面

- 設定の画面の説明文を読む
- エラーや警告の長い文を読む
- 他人のREADMEや説明を読む

</div>
<div class="bad" markdown="1">

翻訳を切っておく場面

- ファイルを編集・コミットするとき
- ファイル名やブランチ名を確かめるとき
- 手順の説明とボタンを照らし合わせるとき

</div>
</div>

翻訳は、使い終わったら元の言語に戻すのがおすすめです。英語のボタン名のまま覚えたほうが、このサイトの説明やAIの答えと照らし合わせやすくなります。

## 日本語で調べる方法

- 公式ドキュメント：[GitHub Docs](https://docs.github.com/ja)には日本語版があります。ページの言語の切り替えで日本語を選べます。英語の画面の名前は、日本語版でも英語のまま書かれていることが多いので、画面と照らし合わせやすくなっています。
- AIに聞く：画面の写真（スクリーンショット）をAIに見せて、「この画面のRequest changesは何をするボタンですか」と日本語で聞けば、日本語で説明してくれます。GitHub Copilotも、画面は英語でも日本語の質問に日本語で答えます（[GitHub Copilot](../../../wiki/tools/github-copilot.md)）。
- VS Codeを日本語にする：パソコンでVS Codeを使う場合は、Microsoft公式の日本語言語パックで画面を日本語にできます（[VS Code](../../../wiki/tools/vs-code.md)、[VS CodeでCopilotを使う準備](vscode-copilot-setup.md)）。

<div class="box tip" markdown="1">
<p class="box-title">ポイント</p>

この授業では、英語の画面は「リポジトリの作成」「ファイルと履歴の確認」「招待の承諾」など、必要な操作に絞って覚えれば十分です。それ以外の作業の多くは、AIエージェントに日本語で頼んで進められます（[GitHub](../../../wiki/tools/github.md)）。

</div>

<div class="box try" markdown="1">
<p class="box-title">やってみよう</p>

自分のリポジトリを開き、図の番号の場所を実際の画面で一つずつ探してみましょう。見つからない言葉があったら、AIに画面の写真を見せて「この言葉はどこにありますか」と聞いてみてください。画面の配置は、ときどき変わります。

</div>

## 次に読むページ

- [GitHubを始める：アカウントと最初のリポジトリ](github-first-steps.md)
- [ブランチとプルリクエストでの共同作業](github-collaboration.md)
- [用語集](glossary.md)
- Wikiの関連ページ：[GitHubの日本語対応](../../../wiki/tools/github-japanese-support.md)、[GitHub](../../../wiki/tools/github.md)、[VS Code](../../../wiki/tools/vs-code.md)
