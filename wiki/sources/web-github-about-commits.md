# 資料：コミットについて（GitHub Docs）

GitHubの公式ドキュメントにある、コミットの概説（About commits）の要約です（2026年10月23日に確認）。

## 資料の情報

- About commits：[https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月23日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- コミットは、ブランチ上の一つ以上のファイルの変更を記録するもので、編集したファイルを保存することに似ている。
- Gitはコミットごとに固有のID（SHAまたはハッシュ）を付ける。IDは、どの変更か、いつ行われたか、誰が行ったかを特定する。
- コミットには必ずメッセージを付ける。メッセージは変更を簡潔に説明するものとされている。
- 一緒に作業した人を共同作者（co-author）として加えられる。組織の名義でコミットを作ることもできる（詳しくは別のページ）。
- リポジトリがコミットの署名（signoff）を求めている場合、ウェブ上でコミットすると自動で署名される。暗号による署名付きコミットはこのページでは扱っていない。
- コミットのページには、まだ`main`に入っていないコミットにはブランチの表示、`main`に入ったコミットにはタグの表示が出る。変更されたファイルをたどるファイルツリーもある。履歴を見る手順の説明はこのページにはない。

## この資料から更新したページ

- [コミット](../concepts/commit.md)
