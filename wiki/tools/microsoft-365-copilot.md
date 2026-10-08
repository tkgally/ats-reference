# Microsoft 365 Copilot

TCUアカウントで使える、Microsoft 365のAIアシスタントについてのページです。

## 利用の方法

- TCUアカウントでサインインして使う（[TCUアカウントと多要素認証](../campus/tcu-account.md)）。
- 入り口：[https://m365.cloud.microsoft/?auth=2](https://m365.cloud.microsoft/?auth=2)

TCUメールやOfficeアプリなど、大学のMicrosoft 365の使い方は情報基盤センターの[TCUメール（Microsoft 365）](https://www.itc.tcu.ac.jp/ictservice/tcumail/)の案内にあります。

## GitHub Copilotとの違い

名前は似ていますが、[GitHub Copilot](github-copilot.md)とは別の製品です。GitHub Copilotは大学の予算で受講生に提供される有料版で、GitHubやVS Codeで使います。Microsoft 365 CopilotはTCUアカウントで使えるもので、Microsoft 365の中で使います。どの機能が使えるか、学内でのデータの扱いがどうなっているかは、まだ授業の資料がありません。

## データの扱い（2026年10月7日時点）

Microsoftの案内によれば、職場や学校のアカウントで使うMicrosoft 365 Copilot Chatには「エンタープライズデータ保護」が適用され、入力や回答が基盤モデルの学習に使われることはないとされています（[資料：ChatGPT、Claude、Geminiの料金とデータの設定](../sources/web-ai-chat-services.md)）。TCUアカウントでの利用にこれがそのまま当てはまるかは、大学の案内で確かめる必要があります（要確認）。

2026年10月8日にMicrosoft Learnの公式ドキュメントで確かめた点は次のとおりです（[資料：Microsoft Copilot Chatのプライバシーと保護](../sources/web-microsoft-copilot-chat-privacy.md)）。

- 入力と回答は基盤モデルの学習に使われない。適用中は画面の上部に緑色の盾のマークが出る。
- 入力と回答は、監査のために組織のMicrosoft 365に記録される。大学の管理者が調べられる設定になりうるので、個人的な相談や機微な情報は入力しないほうが安全（資料外の補足）。
- Copilot Chatはウェブの情報をもとに答える。大学のファイルやメールをもとに答える機能は、Copilot Chatでは標準では働かず、入力に貼り付けるか、Outlookの中で使う。

## 名称の変更

Microsoftは、「Microsoft 365 Copilot」を「Microsoft Copilot」、「Microsoft 365 Copilot Chat」を「Microsoft Copilot Chat」に改めつつあります。移行の期間中は新旧の名前が混ざります。大学の情報基盤センターのトップページは、2026年10月8日時点で「Microsoft 365 Copilot」の名前でリンクを載せています（[資料：TCUメール（情報基盤センター）](../sources/web-tcu-mail.md)）。このWikiでは、大学の案内に合わせて当面「Microsoft 365 Copilot」と書きます。

## 関連ページ

- [この授業で使うAIツール](ai-tools.md)
- [GitHub Copilot](github-copilot.md)
- [学内のITサービス](../campus/it-services.md)
- [ChatGPT、Claude、Gemini](ai-chat-services.md)

## 出典

- [資料：授業の背景情報](../sources/ats-class-background.md)
- [資料：ChatGPT、Claude、Geminiの料金とデータの設定](../sources/web-ai-chat-services.md)
- [資料：Microsoft Copilot Chatのプライバシーと保護](../sources/web-microsoft-copilot-chat-privacy.md)
- [資料：TCUメール（情報基盤センター）](../sources/web-tcu-mail.md)
