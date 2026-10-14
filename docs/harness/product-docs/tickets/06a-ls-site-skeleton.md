# 06a：學習科學網站骨架（slice 3a）
contract-freezing: no
depends-on: []

## 要做什麼

spec-slice3 R19、R21 的結構，以及 AC19–AC25 的測試骨架。不含任何文章文案。

1. `.gitignore` 加 `*.pdf`（AC26）。
2. 新增 `tests/learning-science.spec.ts`：以常數表（slug → 側欄文字、h2 清單）驅動 AC19、AC20、AC21、AC22、AC23、AC24；
   常數只列已上線頁，文章定稿時由 07–09、06b 填入。`tests/articles.spec.ts` 的側欄斷言改為 AC19，`PAGINATION` 依 R21 擴充。
3. 骨架提交時不加任何學習科學頁（側欄與常數表為空群組時測試須跳過該群組，不建空頁）。

## 測試接縫

S1、S2。

## 驗收條件

- [ ] `npm test` 全綠；`npm run check:public` 乾淨
