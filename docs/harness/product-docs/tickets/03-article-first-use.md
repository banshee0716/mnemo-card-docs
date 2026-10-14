# 03：第一篇「第一次使用 Mnemo-Card」
contract-freezing: no
depends-on: [02]

## 要做什麼

spec R6（「開始使用」群組）、R7（首頁加本篇入口）、R8、R9、R12。

1. 新增 `src/content/docs/first-use.mdx`，文案取自主程式文案草稿的第一篇，依 R9 改寫第 1 步。
   - 先把要上站的完整文案交給 owner 看，owner 同意後才寫進網站。可以先寫進 PR 草稿或
     `docs/harness/product-docs/copy/first-use.md`。
   - 二級標題對應任務步驟，不要把每個小步驟都升成二級標題。
2. 側欄加入「開始使用」群組；首頁加本篇入口。
3. 內容核對（S3）：派全新工作階段的子代理，對照主程式 `STATUS.md` 記錄的正式版 main，逐步核對
   每個按鈕名稱、畫面文字與流程。產出 `verification/content-first-use.md`。
   FAIL 的列先修文案，再由同一位核對者複核。
4. 測試加入以下項目，並把本頁納入 AC2、AC3、AC6、AC8 的頁面清單：
   - AC4：本頁有文章目錄、下一篇。
   - AC5：搜「熟悉度」找得到本篇。
   - AC10 的第一篇部分：沒有「建立帳號」「驗證信」字樣。

## 測試接縫

S1、S2、S3。

## 驗收條件

- [ ] owner 同意文案（在 `state.md` § Decisions by human 記一行）
- [ ] `verification/content-first-use.md` 全部 PASS
- [ ] `npm run build` exit 0；`npm test` 全綠（本頁的 AC2–AC6、AC8、AC10）
- [ ] 本頁沒有主程式內部檔名、資料表或設定（R12）
