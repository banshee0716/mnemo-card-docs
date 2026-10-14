# 08：學習科學〈間隔練習〉（slice 3a）
contract-freezing: no
depends-on: [07（共用 Carpenter 等人 2022 的查證）]

## 要做什麼

spec-slice3 R22–R25、R27、R28；本篇方向、例子、限制與文獻池見 brief §4「間隔練習」。

1. 文獻查證（R24）：由子代理產出 `research/spaced-practice.md`（批次內共用文獻寫在第一個用到的檔案）。主幹文獻讀不到 → 停下問 owner。
2. 文案：`copy/learning-science/spaced-practice.md`。只用 `research/` 標了頁碼的發現；brief「待查證」說法不符就改寫或刪除。
3. S6：全新 opus 子代理核對，產出 `verification/content-ls-spaced-practice.md`；修 FAIL，同一核對者複核 FAIL 列。
4. 與同批文案一起送 owner；同意後寫進 `src/content/docs/learning-science/spaced-practice.mdx`（與 copy 逐字相同，只多前言）。
5. 測試：本篇 h2 清單寫進 AC20 常數；`PAGES`、側欄、上下篇隨 06 的結構加入本篇。
6. 產品段（R25）：有。排程是固定遞增與每週間隔，不得暗示最佳或個人化排程。文末示意安排要標明是可調整的範例。

## 測試接縫

S1、S2、S6。

## 驗收條件

- [ ] `research/spaced-practice.md` 書目逐欄核對、發現附頁碼；儲存庫沒有 PDF
- [ ] S6 報告沒有未處理的 FAIL（含讀者驗收三問）
- [ ] owner 同意文案
- [ ] `npm test` 全綠（含本篇 AC20–AC22）；`npm run check:public` 乾淨
- [ ] 變異：調換本篇兩個 h2、刪掉一筆參考文獻到少於 3 筆（或刪掉某筆的連結）時，測試變紅
