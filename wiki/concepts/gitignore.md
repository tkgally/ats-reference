# .gitignore（無視するファイル）

コミットしたくないファイルをGitに伝えるための設定ファイル、`.gitignore`についてのページです。

## .gitignoreとは

`.gitignore`は、Gitがコミットの対象にしないファイルやフォルダーを列挙するファイルです。パソコンの中の一時ファイルや、リポジトリに入れたくないファイルを、うっかりコミットしないために使います。`.gitignore`自体をコミットすると、リポジトリをクローンした人とも同じ規則を共有できます（[資料：.gitignore、ライセンス、GitHub Pages](../sources/web-github-gitignore-license-pages.md)、2026年10月17日に確認）。

## 作り方

リポジトリのフォルダーでターミナルを開き、`touch .gitignore`を実行すると空のファイルができます。中身は、無視したいファイルの名前や場所を一行ずつ書きます。OS、言語、環境ごとのひな型が、GitHubの`github/gitignore`リポジトリやgitignore.ioで配られています。規則の細かい書き方は、今回の資料に書かれておらず未確認です。

## 注意すること

- すでにコミットされて追跡されているファイルは、`.gitignore`に書き足しても無視されません。先に`git rm --cached ファイル名`で追跡をやめる必要があります。
- すべてのリポジトリで無視したいもの（エディターのバックアップなど）は`~/.config/git/ignore`に、自分だけで使う規則は、リポジトリの中の`.git/info/exclude`に書けます。
- パスワードや鍵のような秘密の情報は、公式ドキュメントのこのページでは扱われていません。すでにコミットしてしまった情報は履歴に残ります（資料外の補足）。そもそもリポジトリに入れないことが大切です。

## 関連ページ

- [リポジトリ](repository.md)
- [コミット](commit.md)
- [バージョン管理とGit](version-control-and-git.md)
- [GitHub](../tools/github.md)

## 出典

- [資料：.gitignore、ライセンス、GitHub Pages（GitHub Docs）](../sources/web-github-gitignore-license-pages.md)
