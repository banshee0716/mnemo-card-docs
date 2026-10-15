# 15：網站接法（開始使用拆兩篇）（slice 4）
contract-freezing: no
depends-on: [14]

## 要做什麼

spec-slice4 R29–R31、R40；owner 同意 ticket 14 的文案後才做。

1. 文案寫進 `src/content/docs/first-use.mdx` 與新檔 `src/content/docs/review-and-manage.mdx`（去掉開頭註解與「不上本頁」的節）。
2. `astro.config.mjs`：「開始使用」群組加第二項。
3. 首頁照 owner 同意的改法加 `LinkCard`、改說明句。
4. 測試：`PAGES`、`PAGINATION`、「桌機有文章目錄」清單加新頁；新增 AC28–AC33（可放新檔 `tests/getting-started.spec.ts`）；
   AC10 的帳號檢查改成兩篇都跑；刪掉 `articles.spec.ts` 的「AC4：側欄『開始使用』群組含本篇」，由 AC28 取代（G2 F38）；加 AC33a 搜尋。
5. `npm test`、`npm run check:public`。

## 測試接縫

S1、S2。

## 驗收條件

- [ ] `npm test` 全綠；`npm run check:public` 乾淨
- [ ] 變異（G2 F45），各自測試變紅：調換「開始使用」兩項（AC28、AC29）、改新頁一個 h2（AC30）、刪掉一個佔位（AC31）、
  在新頁加「忘記密碼？」或「變更密碼」（AC10、AC32）、首頁兩張卡片對調（AC33）
