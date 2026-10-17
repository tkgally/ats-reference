# GitHub Pages

リポジトリのファイルをウェブサイトとして公開するGitHubのサービス、GitHub Pagesについてのページです。

## GitHub Pagesとは

HTML、CSS、JavaScriptのファイルをGitHubのリポジトリから公開する、静的サイトのホスティングサービスです。必要なら公開の前に組み立て（ビルド）を挟めます。独自ドメインも使えます（[資料：.gitignore、ライセンス、GitHub Pages](../sources/web-github-gitignore-license-pages.md)、2026年10月17日に確認）。

## サイトの種類

- ユーザーまたは組織のサイト：`<アカウント名>.github.io`という名前のリポジトリに置き、`https://<アカウント名>.github.io`で公開される。
- プロジェクトのサイト：プロジェクトのリポジトリの中のフォルダーに置き、`https://<アカウント名>.github.io/<リポジトリ名>`で公開される。

このWikiの解説サイト「ATSガイド」も、プロジェクトのサイトの形で公開されています（[このサイトの使い方](../../site/content/guide/about-this-site.md)）。

## 制限と注意

- 数：ユーザーまたは組織のサイトは一つのアカウントに一つ、プロジェクトのサイトは一つのリポジトリに一つ。
- 大きさと量：公開するサイトは1GBまで、通信量は月100GB、ビルドは1時間に10回が目安。公開の処理は10分で時間切れになる。
- 使えない用途：オンラインの事業、電子商取引、商用のSaaSの無料ホスティング。
- 機微な取引：パスワードやクレジットカード番号を扱う用途には使わない。
- 記録：訪問者のIPアドレスは安全のために記録される。
- 公開すると誰でも見られる（資料外の補足）ので、個人情報や学内限定の資料を載せない。プランや公開範囲による違いは、今回の資料に書かれておらず未確認です。

## 関連ページ

- [リポジトリ](repository.md)
- [README](readme.md)
- [ライセンス](license.md)
- [GitHub](../tools/github.md)
- [このサイトの使い方](../../site/content/guide/about-this-site.md)

## 出典

- [資料：.gitignore、ライセンス、GitHub Pages（GitHub Docs）](../sources/web-github-gitignore-license-pages.md)
