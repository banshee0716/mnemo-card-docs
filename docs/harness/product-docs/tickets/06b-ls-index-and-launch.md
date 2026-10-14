# 06b：學習科學導讀頁、首頁入口與第一批上站（slice 3a）
contract-freezing: no
depends-on: [06a, 07, 08, 09]（07–09 文案 S6 通過後才寫導讀頁）

## 要做什麼

spec-slice3 R19、R20、R21、R26、R28。

1. 文案：`copy/learning-science/index.md`（R26），文末一節「首頁說明句」（R20），另列「側欄文字與頁面標題提案」（R19，G2 F35）。
2. S6（導讀頁範圍，含各篇一句介紹對照該篇正文，G2 F30）。與 07–09 的文案一起送 owner。
3. owner 同意後：新增 `src/content/docs/learning-science/index.mdx`（`prev: false`）；`astro.config.mjs` 加「學習科學」群組（只列已上線頁）；
   首頁加 h2「學習科學」與 `LinkCard`，`description` 補「學習科學入門」；07–09 三篇 `.mdx` 同時上站。
4. 測試：`tests/helpers.ts` `PAGES` 加入第一批四頁；06a 常數表填入四頁；「桌機有文章目錄」迴圈涵蓋三篇文章（導讀頁 h2 少於兩個時排除並註明）。

## 測試接縫

S1、S2、S6（導讀頁）。

## 驗收條件

- [ ] owner 同意導讀頁、首頁說明句、側欄文字與標題
- [ ] `npm run build` exit 0；`npm test` 全綠；`npm run check:public` 乾淨
- [ ] 變異：側欄調換兩篇順序、移除導讀頁 `prev: false`、刪除首頁 `LinkCard`、在檢索練習產品段加「最佳排程」時，測試都變紅
