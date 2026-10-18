# product-docs — harness state

```harness
slug: product-docs
slice: "5"
stage: RELEASED
holder: none
tier: LOW
gates_passed: [G1, G4, G5, G7]
open_p0p1: 0
gate: G7
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：換圖與一句過時說明；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（推送由 owner 執行）
- slice 1–4：RELEASED，封存於 `state-slice1.md` … `state-slice4.md`。
- 意圖：`intent-slice5.md`（owner G1 2026-10-19）。
- what is left：無。後續見 § Decisions。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-19，對話中逐項裁定）
- [ ] G2 — owner 指示直接處理（範圍小，無 spec／工作票）
- [x] G4 verified：`npm test` 139 passed、`npm run check:public` 乾淨、`npm run build` 13 頁（2026-10-19，Builder 貼出輸出；截圖由 Builder 逐張目視核對標籤）
- [x] G5 accepted by human（owner 本機預覽兩篇：「驗證完畢，可以出了」，2026-10-19）
- [ ] G6 — 豁免（owner「可以出了」，比照 slice 4 D）
- [x] G7 released（owner 推送 main；Pages 部署）

## Decisions by Builder
- Builder: 12 個佔位改為 astro:assets 圖片（webp），圖下一行「圖：」說明；說明文字不再排除於搜尋（佔位才需要排除）。
- Builder: owner FireShot 截圖中的測試帳號電子郵件已塗掉（owner 2026-10-19）；其餘截圖於本機以 example.com 示範帳號拍攝。
- Builder: 首頁與卡片編輯兩張以主程式 develop `82e88b5a`（編輯欄位改名「檢索提示」）重拍；正式站需先上該版。
- Builder: 刪除〈第一次使用〉「『建立帳號』分頁」一句（主程式 2026-10-18 起登入頁無分頁）；文章「提取提示」改「檢索提示」。

## 後續（不在本切片）
- 技能頁 `skills/mnemo-study-cards/getting-started.mdx` 第 81 行 `## 提取提示` 為匯入格式標題；待主程式加入「檢索提示」匯入別名後一併改。
- 主程式用字：建立排程後的「開始 Practice」未翻譯；匯入頁副標「三步驟」但有四步。
- 學習科學文章搬到另一個專案，本站只留操作文件（owner 2026-10-19）。
