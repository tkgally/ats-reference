---
title: 作業用フォルダーを増やす：ワークツリー
short: ワークツリー
description: 一つのリポジトリから複数のブランチを別々のフォルダーで同時に開けるワークツリーの考え方と、Copilotアプリの「New worktree」との関係を説明します。
category: github
order: 10
level: 発展
updated: 2026年11月3日
---

ブランチを切り替えると、フォルダーの中身がそのブランチの状態に入れ替わります。作業の途中で別のブランチを見たいときは、変更をいったん片づけなければならず、面倒です。そこで使えるのが、ワークツリー（worktree）です。公式の情報は2026年11月2日に確かめたものにもとづきます（[資料：git worktree](../../../wiki/sources/web-git-docs-worktree.md)）。

## ワークツリーとは

ワークツリーは、いまのリポジトリにつながった、もう一つの作業用フォルダーです。ブランチごとに別のフォルダーを持てるので、複数のブランチを同時に開いておけます。もう一度クローンする必要はありません。

<figure class="fig">
{{svg:worktree-folders.svg}}
<figcaption>履歴とブランチは一つのリポジトリで共有し、取り出しているブランチとコミット前の変更はフォルダーごとに別になる。</figcaption>
</figure>

- 共有されるもの：ブランチ、タグ、履歴の中身、リポジトリの設定。
- フォルダーごとに別のもの：いまどのブランチを取り出しているか、コミット前の変更。
- 最初のフォルダー（クローンなどでできたもの）はメインのワークツリーと呼ばれ、削除できません。

## 基本の操作

ターミナルでは、次の三つを覚えれば足ります（ターミナルの使い方は[コマンドライン入門](terminal-basics.md)）。

- `git worktree add ../hotfix`：新しいフォルダーを作り、そこで作業できるようにする。
- `git worktree list`：ワークツリーの一覧を見る。
- `git worktree remove ../hotfix`：使い終わったフォルダーを削除する。

<div class="box warn" markdown="1">
<p class="box-title">注意</p>

- 一つのブランチは、同時に一つのワークツリーでしか取り出せません。
- コミットしていない変更があるフォルダーは、強制しない限り削除できません。
- 公式は、複数のチェックアウトの機能を実験的なものとしています（2026年11月2日時点）。

</div>

## Copilotデスクトップアプリとの関係

Copilotデスクトップアプリでは、エージェントのセッションを始めるとき、変更を入れる場所として<span class="ui">New worktree</span>か<span class="ui">Current checkout</span>を選べます（[Copilotデスクトップアプリを使い始める](copilot-app.md)）。New worktreeは別の作業用コピーで作業する選択肢で、エージェントの作業が、いま開いているフォルダーに影響しません。アプリが裏でGitのワークツリーを使っているかどうかは、資料に書かれていません（要確認）。

## 次に読むページ

- [ブランチとプルリクエストでの共同作業](github-collaboration.md)
- [Copilotデスクトップアプリを使い始める](copilot-app.md)
- [Copilotのエージェントに作業を頼む](copilot-agent.md)
- Wikiの関連ページ：[ワークツリー](../../../wiki/concepts/worktree.md)、[ブランチ](../../../wiki/concepts/branch.md)
