# 10：學習科學〈自我解釋〉（slice 3b）
contract-freezing: no
depends-on: [09（共用 Fiorella 2023 的查證）；第一批 RELEASED]

## 要做什麼

spec-slice3 R22–R25、R27、R28；本篇方向、例子、限制與文獻池見 brief §4「自我解釋」。

1. 文獻查證（R24）：由子代理產出 `research/self-explanation.md`（批次內共用文獻寫在第一個用到的檔案）。主幹文獻讀不到 → 停下問 owner。
2. 文案：`copy/learning-science/self-explanation.md`。只用 `research/` 標了頁碼的發現；brief「待查證」說法不符就改寫或刪除。
3. S6：全新 opus 子代理核對，產出 `verification/content-ls-self-explanation.md`；修 FAIL，同一核對者複核 FAIL 列。
4. 與同批文案一起送 owner；同意後寫進 `src/content/docs/learning-science/self-explanation.mdx`（與 copy 逐字相同，只多前言）。
5. 測試：本篇 h2 清單寫進 AC20 常數；`PAGES`、側欄、上下篇由 06b（第一批）或 13（第二批）統一上站。
6. 產品段（R25）：有。與產品內範例卡講的自我解釋、建構性檢索說法一致；卡片背面兩個提示的說法以畫面為準。

## 測試接縫

S1、S2、S6。

## 驗收條件

- [ ] `research/self-explanation.md` 書目逐欄核對、發現附頁碼；儲存庫沒有 PDF
- [ ] S6 報告沒有未處理的 FAIL（含讀者驗收三問）
- [ ] owner 同意文案
- [ ] `npm test` 全綠（含本篇 AC20–AC22）；`npm run check:public` 乾淨
- [ ] 變異：調換本篇兩個 h2、刪掉一筆參考文獻到少於 3 筆（或刪掉某筆的連結）時，測試變紅
