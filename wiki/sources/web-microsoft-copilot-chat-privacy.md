# 資料：Microsoft Copilot Chatのプライバシーと保護（Microsoft Learn）

Microsoft Learnにある、職場や学校のアカウントで使うCopilot Chatのデータの扱いについての公式ドキュメントの要約です（2026年10月8日に確認）。

## 資料の情報

- 題名：Microsoft Copilot Chat Privacy and Protections
- URL：[https://learn.microsoft.com/en-us/copilot/privacy-and-protections](https://learn.microsoft.com/en-us/copilot/privacy-and-protections)
- 発行者：Microsoft
- 確認した日：2026年10月8日
- 種類：ウェブ上の資料（エージェントが調べたもの。`raw/`の資料ではない）

## 内容の要約

- 名称の変更：ページによれば、「Microsoft 365 Copilot」は「Microsoft Copilot」に、「Microsoft 365 Copilot Chat」は「Microsoft Copilot Chat」に改められつつある。移行の期間中は、古い名前が残る画面や案内がある。セキュリティ、コンプライアンス、プライバシーに変更はない。
- Copilot Chatの入力と回答は、Microsoft 365のサービスの境界の内側で処理され、「エンタープライズデータ保護」の対象になる。入力と回答が基盤モデルの学習に使われることはない。追加の費用はかからず、画面の上部の緑色の盾のマークで適用が分かる。
- Copilot Chatは、組織のファイルやメールをもとに答えるのではなく、ウェブの情報をもとに答える。組織の内容を使うには、入力に貼り付ける、ファイルをアップロードする、Outlookの中で使う、などの方法がある。
- ウェブ検索を使う設定のときは、入力から作った数語の検索語がBingに送られる。ユーザーや組織の識別情報は含まれない。
- 入力と回答は、監査や電子証拠開示（eDiscovery）のために、組織のMicrosoft 365（Exchange）に記録される。つまり、大学の管理者がこの記録を調べられる設定になりうる（資料外の補足：大学がどう運用しているかは分かっていない）。
- 管理者による設定や契約のプランによって、使える機能と制御は異なる。

## この資料から更新したページ

- [Microsoft 365 Copilot](../tools/microsoft-365-copilot.md)
