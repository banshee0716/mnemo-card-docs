# 11：學習科學〈認知負荷理論〉（slice 3b）
contract-freezing: no
depends-on: [第一批 RELEASED]

## 要做什麼

spec-slice3 R22–R25、R27、R28；本篇方向、例子、限制與文獻池見 brief §4「認知負荷理論」。

1. 文獻查證（R24）：由子代理產出 `research/cognitive-load.md`（批次內共用文獻寫在第一個用到的檔案）。主幹文獻讀不到 → 停下問 owner。
2. 文案：`copy/learning-science/cognitive-load.md`。只用 `research/` 標了頁碼的發現；brief「待查證」說法不符就改寫或刪除。
3. S6：全新 opus 子代理核對，產出 `verification/content-ls-cognitive-load.md`；修 FAIL，同一核對者複核 FAIL 列。
4. 與同批文案一起送 owner；同意後寫進 `src/content/docs/learning-science/cognitive-load.mdx`（與 copy 逐字相同，只多前言）。
5. 測試：本篇 h2 清單寫進 AC20 常數；`PAGES`、側欄、上下篇由 06b（第一批）或 13（第二批）統一上站。
6. 產品段：無；正文不出現 Mnemo-Card（AC22）。文獻池少於 3 筆時停下問 owner（R23 第 4 點）。理論修訂（增生負荷的定位）只在補充說明交代，且以 Sweller 2023 原文為準。

## 測試接縫

S1、S2、S6。

## 驗收條件

- [ ] `research/cognitive-load.md` 書目逐欄核對、發現附頁碼；儲存庫沒有 PDF
- [ ] S6 報告沒有未處理的 FAIL（含讀者驗收三問）
- [ ] owner 同意文案
- [ ] `npm test` 全綠（含本篇 AC20–AC22）；`npm run check:public` 乾淨
- [ ] 變異：調換本篇兩個 h2、刪掉一筆參考文獻到少於 3 筆（或刪掉某筆的連結）時，測試變紅
