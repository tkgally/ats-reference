---
title: 用語集
short: 用語集
description: GitHub、Copilot、生成AI、プロジェクトに関する言葉の意味を、短く説明し、詳しい解説ページへ案内します。
category: reference
order: 1
level: 入門
updated: 2026年10月7日
---

このページでは、授業やこのサイトに出てくる言葉を分野ごとに並べ、短く説明しています。詳しく知りたい言葉は、リンク先の解説ページを読んでください。ブラウザのページ内検索（Windowsは<kbd>Ctrl</kbd>＋<kbd>F</kbd>、Macは<kbd>⌘</kbd>＋<kbd>F</kbd>）を使うと、言葉をすばやく探せます。

## GitHubとGit

GitHub
: ファイルと、その変更の記録（履歴）をインターネット上に保管し、共有するサービス。→[GitHubとは](github-basics.md)

Git（ギット）
: ファイルの変更履歴を記録するための道具。GitHubはGitで記録したリポジトリを置く場所。→[GitHubとは](github-basics.md)

リポジトリ（Repository）
: プロジェクトのファイルと履歴をまとめた箱。略して「リポ」。→[GitHubとは](github-basics.md)

コミット（Commit）
: ファイルの変更を、説明（コミットメッセージ）をつけて履歴に記録すること。また、その記録の一つ一つ。→[GitHubとは](github-basics.md)

コミットメッセージ
: コミットに付ける短い説明。「何を、なぜ変えたか」があとで分かるように書く。→[GitHubとは](github-basics.md)

ブランチ（Branch）
: 本流から枝分かれした作業用の流れ。本流を壊さずに変更を試せる。→[ブランチとプルリクエスト](github-collaboration.md)

main（メイン）
: リポジトリの本流となるブランチの名前。公開や提出に使う、確定した状態を置く。→[ブランチとプルリクエスト](github-collaboration.md)

プルリクエスト（Pull request、PR）
: ブランチでの変更を本流に取り込んでほしいという依頼。変更の内容を確かめ、話し合う場所にもなる。→[ブランチとプルリクエスト](github-collaboration.md)

マージ（Merge）
: ブランチでの変更を本流に合流させること。→[ブランチとプルリクエスト](github-collaboration.md)

スカッシュマージ（Squash and merge）
: ブランチでの複数のコミットを一つにまとめてから本流に取り込むマージの方法。本流の履歴がすっきりする。→[ブランチとプルリクエスト](github-collaboration.md)

コンフリクト（Conflict、競合）
: 同じファイルの同じ部分が別々に書き換えられ、自動では合流できない状態。どちらを残すか人間（またはエージェント）が決める。→[ブランチとプルリクエスト](github-collaboration.md)

差分（diff）
: 変更の前と後の違い。GitHubでは削除が赤、追加が緑で表示される。→[ブランチとプルリクエスト](github-collaboration.md)

プッシュ（push）、プル（pull）、クローン（clone）
: プッシュは手元のコミットをGitHubに送ること、プルはGitHubの新しいコミットを手元に取ってくること、クローンはリポジトリを丸ごと手元に複製すること。→[GitHubとは](github-basics.md)

Issue（イシュー）
: リポジトリに付ける課題や話題のメモ。やることの一覧や、不具合の報告に使う。→[ブランチとプルリクエスト](github-collaboration.md)

README（リードミー）
: リポジトリの入り口に置く説明のファイル（`README.md`）。リポジトリを開くと最初に表示される。→[Markdownの書き方](markdown.md)

公開（Public）と非公開（Private）
: リポジトリをだれでも見られるようにするか、招待した人だけに見せるかの設定。→[GitHubとは](github-basics.md)

コラボレーター（Collaborator）
: リポジトリに招待され、書き込みを許された人。→[GitHubを始める](github-first-steps.md)

GitHub Actions
: リポジトリに変更が入ったときなどに、決めておいた作業を自動で実行するGitHubの機能。このサイトの公開にも使っている。→[このサイトの使い方](about-this-site.md)

GitHub Pages
: リポジトリのファイルをウェブサイトとして公開するGitHubの機能。→[このサイトの使い方](about-this-site.md)

Markdown（マークダウン）
: 記号を使って見出しや箇条書きなどを表す、簡単な書き方の決まり。ファイル名は`.md`で終わる。→[Markdownの書き方](markdown.md)

## Copilotとエディター

GitHub Copilot
: GitHubのAIアシスタント。エディターやGitHubのウェブサイトで、質問に答えたり、ファイルを書いたり、作業を任されたりする。→[GitHub Copilotとは](copilot-overview.md)

Microsoft 365 Copilot
: WordやTeamsなどのMicrosoft 365の中で使うAIアシスタント。GitHub Copilotとは別の製品。→[GitHub Copilotとは](copilot-overview.md)

VS Code（Visual Studio Code）
: Microsoftが無料で提供しているエディター。日本語の画面にでき、Copilotを使いやすい。→[VS CodeでCopilotを使う準備](vscode-copilot-setup.md)

エディター
: 文章やプログラムのファイルを書くためのソフトウェア。

エージェントモード
: エディターの中で、Copilotが複数のファイルの編集や命令の実行をしながら作業を進める使い方。→[Copilotのエージェントに作業を頼む](copilot-agent.md)

Copilot cloud agent
: GitHub上で作業を任せると、Copilotがブランチで作業してプルリクエストを作る機能。→[Copilotのエージェントに作業を頼む](copilot-agent.md)

GitHub Education
: 学生や教員向けの特典を提供するGitHubのしくみ。学生と認証されるとCopilotを無料で使える（2026年10月時点）。→[GitHubを始める](github-first-steps.md)

## 生成AIのしくみ

生成AI
: 文章、画像、音声、プログラムなどを新しく作り出すAIの総称。→[生成AIのしくみ](how-llms-work.md)

大規模言語モデル（LLM）
: 大量の文章から学習し、文章の続きを予測して答えを作るAIのモデル。ChatGPT、Claude、Gemini、Copilotなどの中心にある。→[生成AIのしくみ](how-llms-work.md)

モデル
: AIの「頭脳」にあたる部分。同じサービスでも、使うモデルによって得意なことや速さが違う。→[AIツールの選び方](ai-tools-compare.md)

トークン
: モデルが文章を扱う単位。単語や単語の一部、記号など。利用量や読める量はトークンの数で数えることが多い。→[生成AIのしくみ](how-llms-work.md)

コンテキストウィンドウ
: モデルが一度に読める文章の量の上限。会話の履歴や渡した資料もここに入る。→[生成AIのしくみ](how-llms-work.md)

温度（temperature）
: 答えのランダムさを決める設定。低いと決まった答えに、高いと多様な答えになりやすい。→[生成AIのしくみ](how-llms-work.md)

学習データの期限（ナレッジカットオフ）
: モデルが学習した情報の時点。それより新しいことは、検索などを使わない限り知らない。→[生成AIのしくみ](how-llms-work.md)

ハルシネーション
: AIが、もっともらしいが事実ではない内容（存在しない文献やURLなど）を作ってしまうこと。→[AIの答えを確かめる](checking-ai-output.md)

マルチモーダル
: 文章だけでなく、画像、音声、動画なども読んだり作ったりできること。→[生成AIのしくみ](how-llms-work.md)

推論モデル
: 答える前に、考える手順を長めにたどってから答えるように作られたモデル。時間はかかるが、複雑な問題に強い。→[生成AIのしくみ](how-llms-work.md)

## AIの使い方

プロンプト
: AIへの指示や質問の文章。目的、背景、条件、出力の形を伝えると、よい答えが得やすい。→[AIへの頼み方](prompting.md)

AIエージェント
: 目標を与えられると、自分で計画を立て、道具を使い、結果を確かめながら作業を進めるAI。→[AIエージェントとは](ai-agents.md)

AGENTS.md
: リポジトリに置く、AIエージェントへの指示をまとめたファイル。多くのエージェントが作業の前に読む。→[AIエージェントとは](ai-agents.md)

一次資料
: 公式の発表、原論文、法律の条文など、情報のおおもとにあたる資料。AIの答えを確かめるときに頼りにする。→[AIの答えを確かめる](checking-ai-output.md)

APIキー
: プログラムからAIなどのサービスを使うための合言葉のような文字列。他人に知られると勝手に使われるので、公開してはいけない。→[AIを使うときの倫理とルール](ai-ethics.md)

## プロジェクトと知識ベース

PBL（プロジェクト型学習）
: 学生が自分で課題を設定し、プロジェクトを進めながら学ぶ授業の形。→[プロジェクトの進め方](project-workflow.md)

LLM Wiki
: AIエージェントが資料を読んでWikiを書き、維持し続けるという知識ベースの作り方。この授業の知識ベースもこの方法で作っている。→[自分のプロジェクトに知識ベースを作る](knowledge-base.md)

知識ベース
: 調べたこと、決めたこと、資料の要点などを、あとで引けるように整理して蓄積したもの。→[自分のプロジェクトに知識ベースを作る](knowledge-base.md)

取り込み（ingest）、質問（query）、点検（lint）
: LLM Wikiの三つの操作。資料をWikiに反映する、Wikiを調べて答える、Wikiの矛盾やリンク切れを確かめる。→[自分のプロジェクトに知識ベースを作る](knowledge-base.md)

## 次に読むページ

- [よくある質問とトラブル対処](faq.md)
- [このサイトの使い方](about-this-site.md)
- Wikiの関連ページ：[大規模言語モデル（LLM）](../../../wiki/concepts/large-language-model.md)、[AIエージェント](../../../wiki/concepts/ai-agent.md)、[LLM Wiki](../../../wiki/concepts/llm-wiki.md)
