# 資料：GitHub Copilotのプラン（GitHub Docs）

GitHubの公式ドキュメントにある、GitHub Copilotのプランの種類と機能の一覧の要約です（2026年10月7日に確認）。

## 資料の情報

- 題名：Plans for GitHub Copilot
- URL：[https://docs.github.com/en/copilot/get-started/plans](https://docs.github.com/en/copilot/get-started/plans)
- 発行者：GitHub（公式ドキュメント）
- 確認した日：2026年10月7日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

### プランの種類

2026年10月7日時点で、次のプランが挙げられています。料金は米ドルでの月額です。

| プラン | 対象 | 料金 |
| :---- | :---- | :---- |
| Copilot Free | 個人（機能と利用量に制限あり） | 無料 |
| Copilot Student | GitHub Educationで認証された学生 | 無料 |
| Copilot Pro | 個人 | 10ドル |
| Copilot Pro+ | 個人（より多くの利用量と高性能なモデル） | 39ドル |
| Copilot Max | 個人（さらに多くの利用量） | 100ドル |
| Copilot Business | 組織（1人あたり） | 19ドル |
| Copilot Enterprise | 大企業向けの組織（1人あたり） | 39ドル |

Copilot Freeではモデルを自分で選べず、自動で選ばれます。

### 利用量の数え方

各プランには、毎月使える「GitHub AI Credits」の量が決まっています。2026年6月1日に、それまでの「premium requests」（高性能なモデルを使うたびに回数を数える方式）から、使ったトークンの量に応じて数える方式に切り替わったと報じられています（ドキュメントのほか、複数のウェブ記事による）。

### 主な機能

- Copilot Chat：VS Codeなどのエディター、GitHubのウェブサイト、GitHub Mobile、コマンドラインなどで使える（Freeでは制限あり）。
- エージェントモード：エディターの中で、Copilotが複数のファイルを編集したり命令を実行したりしながら作業を進める機能。
- Copilot cloud agent：GitHub上で作業を頼むと、Copilotがブランチで作業し、プルリクエストを作る機能（以前はcoding agentと呼ばれていた）。StudentとPro以上のプランで使える。
- コードレビュー：プルリクエストの変更をCopilotが確認する機能。Student以上のプランで使える。

### そのほか

2026年4月20日から、Pro、Pro+、学生向けプランなどの新規申し込みが一時停止されたと報じられています。2026年10月7日時点での状況は、この資料からは確認できません。

## この資料から更新したページ

- [GitHub Copilot](../tools/github-copilot.md)

## 関連する資料

- [資料：学生向けのGitHub Copilot](web-github-copilot-students.md)
