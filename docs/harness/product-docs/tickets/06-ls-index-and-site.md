# 06：學習科學導讀頁與網站接法（slice 3a）
contract-freezing: no
depends-on: [07, 08, 09]（導讀頁列出的篇目與上下篇依賴第一批三篇定稿；側欄與測試骨架可先做）

## 要做什麼

spec-slice3 R19、R20、R21、R26，以及第一批的 AC19–AC25 測試。

1. 文案：`copy/learning-science/index.md`（R26），文末一節「首頁說明句」（R20）。S6 只做第 4、5 點與 R26。與 07–09 的文案一起送 owner。
2. owner 同意後：新增 `src/content/docs/learning-science/index.mdx`（`prev: false`）；`astro.config.mjs` 加「學習科學」群組（只列已上線頁）；
   首頁加 h2「學習科學」與 `LinkCard`，`description` 補「學習科學入門」。
3. 測試：`tests/helpers.ts` `PAGES` 加入第一批四頁；`tests/articles.spec.ts` 的 `PAGINATION` 擴充到 R21；側欄斷言改為 AC19；
   新增 `tests/learning-science.spec.ts`：AC20（各頁 h2 清單常數）、AC21、AC22、AC23 首頁入口、AC24 搜「檢索練習」。
   「桌機有文章目錄」迴圈涵蓋新文章（導讀頁 h2 少於兩個時排除並註明）。

## 測試接縫

S1、S2、S6（導讀頁）。

## 驗收條件

- [ ] owner 同意導讀頁與首頁說明句
- [ ] `npm run build` exit 0；`npm test` 全綠；`npm run check:public` 乾淨
- [ ] 變異：側欄調換兩篇順序、移除導讀頁 `prev: false`、刪除首頁 `LinkCard`、在 KLI 以外的任一頁加「最佳排程」時，測試都變紅
