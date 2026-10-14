# 04：第二篇「認識 mnemo-study-cards」與第三篇「安裝並第一次產卡」
contract-freezing: no
depends-on: [03]

## 要做什麼

spec R6（「mnemo-study-cards」群組）、R7（首頁加兩篇入口）、R8、R10、R11、R12。

1. 新增 `src/content/docs/skills/mnemo-study-cards/index.mdx`，文案取自文案草稿第二篇，
   依 R10 調整，文末連到第三篇。
2. 新增 `src/content/docs/skills/mnemo-study-cards/getting-started.mdx`，依 R11 寫成通用流程說明，
   前言設 `next: false`（spec R8）。
   - 第 2～4 步取自文案草稿第三篇，以〈Cognitive offloading〉為輸入示例（書目、外部連結、
     學習目標、產卡提示、檢查重點），流程以技能 v0.2.0 為準；論文內容只轉述。
   - 不放任何產出：卡片、卡包、牌組數、卡片數、截圖或結果預告（spec R11）。
   - 下載段落只有一句「目前尚未開放下載」；草稿的「遇到問題時」與所有「待補」「待確認」句不上站。
3. 兩篇的完整文案先交 owner 同意，同意後才寫進網站（同 03）。
4. 內容核對（S3）。派全新子代理，產出 `verification/content-mnemo-study-cards.md` 與
   `verification/content-getting-started.md`：
   - 技能相關說法對照 `/mnt/d/mnemo-study-cards-skill` commit `93d60d7`（v0.2.0）的
     `skills/mnemo-study-cards/SKILL.md` 與同層 `references/`。
   - 匯入與學習步驟對照主程式正式版。
   - 論文相關說法對照作者公開全文，來源欄寫印刷頁碼。
   - 公開報告只寫讀者看得到的證據；檔案層級對照寫在主程式儲存庫的
     `docs/harness/product-docs/content-check-<slug>.md`（spec S3）。
5. 測試加入以下項目，並把兩頁納入 AC2、AC3、AC6、AC8 的頁面清單：
   - AC4：兩頁有文章目錄；三篇的上一篇／下一篇完全符合 spec R8 的表（含補上第一篇的下一篇）。
   - AC5：搜「卡包」找得到這兩篇之一。
   - AC10 的第三篇部分：下載段落沒有 `<a>` 或程式碼區塊；全文沒有「待補」「待確認」。

## 測試接縫

S1、S2、S3。

## 驗收條件

- [ ] owner 同意兩篇文案（`state.md` § Decisions by human）
- [ ] 兩份核對報告全部 PASS
- [ ] `npm run build` exit 0；`npm test` 全綠（兩頁的 AC2–AC6、AC8、AC10）
- [ ] AC13：spec AC13 的兩項檢查（擴大範圍的 `git grep`、提交者身分）都通過
- [ ] 第二篇沒有替兩邊說法不一致的卡型下定義；兩篇提到的檔名只有 `pack.md`（R10、R12）
