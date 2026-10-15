# 15：網站接法（開始使用拆兩篇）（slice 4）
contract-freezing: no
depends-on: [14]

## 要做什麼

spec-slice4 R29–R31、R40；owner 同意 ticket 14 的文案後才做。

1. 文案寫進 `src/content/docs/first-use.mdx` 與新檔 `src/content/docs/review-and-manage.mdx`（去掉開頭註解與「不上本頁」的節）。
2. `astro.config.mjs`：「開始使用」群組加第二項。
3. 首頁照 owner 同意的改法加 `LinkCard`、改說明句。
4. 測試：`PAGES`、`PAGINATION`、「桌機有文章目錄」清單加新頁；新增 AC28–AC33（可放新檔 `tests/getting-started.spec.ts`）；
   AC10 的帳號檢查改成兩篇都跑。
5. `npm test`、`npm run check:public`。

## 測試接縫

S1、S2。

## 驗收條件

- [ ] `npm test` 全綠；`npm run check:public` 乾淨
- [ ] 變異：調換「開始使用」兩項、刪掉一個佔位、在新頁加「忘記密碼？」時，測試變紅
