# 13：第二批網站接法與導讀頁改版（slice 3b）
contract-freezing: no
depends-on: [10, 11, 12]

## 要做什麼

spec-slice3 R19、R21、R26、R28（G2 F29）。

1. 導讀頁補列三篇：改 `copy/learning-science/index.md`，重跑導讀頁 S6（含新增的三句介紹），與 10–12 文案一起送 owner。
2. owner 同意後：10–12 三篇 `.mdx` 與導讀頁改版同時上站；側欄補三項；生成學習的下一篇自動接到自我解釋（R21）。
3. 測試：`PAGES` 與 AC19、AC20、AC23 常數表補三頁；AC24 加搜「認知負荷」對應認知負荷頁。

## 測試接縫

S1、S2、S6（導讀頁）。

## 驗收條件

- [ ] owner 同意第二批文案與導讀頁改版
- [ ] `npm test` 全綠；`npm run check:public` 乾淨
- [ ] 變異：側欄調換第二批兩篇、刪除導讀頁對 KLI 的連結時，測試變紅
