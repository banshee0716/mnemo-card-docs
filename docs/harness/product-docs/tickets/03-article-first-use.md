# 03：第一篇「第一次使用 Mnemo-Card」
contract-freezing: no
depends-on: [02]

## 要做什麼

spec R6（「開始使用」群組）、R7（首頁加本篇入口）、R8、R9、R12。

1. 新增 `src/content/docs/first-use.mdx`，文案取自主程式文案草稿的第一篇，依 R9 改寫第 1 步。
   前言設 `prev: false`（spec R8）。
   - 先把要上站的完整文案交給 owner 看，owner 同意後才寫進網站。草稿寫在
     `docs/harness/product-docs/copy/first-use.md`。送審時請 owner 一併確認第 1 步的帳號事實
     （從研究者取得電子郵件與密碼、忘記密碼聯絡研究者）仍然成立。
   - 二級標題對應任務步驟，不要把每個小步驟都升成二級標題。
2. 側欄加入「開始使用」群組；首頁加本篇入口。
3. 內容核對（S3）：派全新工作階段的子代理，對照主程式 `STATUS.md` 記錄的正式版 main，逐步核對
   每個按鈕名稱、畫面文字與流程。產出兩份：公開的 `verification/content-first-use.md`（只寫讀者
   看得到的證據），以及主程式儲存庫內的 `docs/harness/product-docs/content-check-first-use.md`
   （檔案層級對照）。FAIL 的列先修文案，再由同一位核對者複核。
4. 測試加入以下項目，並把本頁納入 AC2、AC3、AC6、AC8 的頁面清單：
   - AC4：本頁有文章目錄；沒有上一篇。下一篇在 04 完成前暫時不存在，斷言延到 04 補齊。
   - AC5：搜「熟悉度」找得到本篇。
   - AC10 的第一篇部分：沒有「驗證信」，也沒有教讀者按「建立帳號」或「忘記密碼？」的步驟句。

## 測試接縫

S1、S2、S3。

## 驗收條件

- [ ] owner 同意文案（在 `state.md` § Decisions by human 記一行）
- [ ] `verification/content-first-use.md` 全部 PASS
- [ ] `npm run build` exit 0；`npm test` 全綠（本頁的 AC2–AC6、AC8、AC10）
- [ ] 本頁與公開核對報告沒有主程式內部檔名、資料表或設定（R12、S3）；AC13 的 grep 無輸出
