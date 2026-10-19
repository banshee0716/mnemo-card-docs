# product-docs — harness state

```harness
slug: product-docs
slice: "6"
stage: ACCEPTING
holder: owner
tier: LOW
gates_passed: [G1, G4]
open_p0p1: 0
gate: G5
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：刪除一個內容分區與其導覽、測試；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（推送由 owner 執行）
- slice 1–5：RELEASED，封存於 `state-slice1.md` … `state-slice5.md`。
- what is left：G5（owner 本機預覽）、G7（owner 推送）。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-19：「文件站刪掉學習科學區：照你的裁定，不留說明頁也不轉址。新站已經上線，現在可以開始做。」）
- [ ] G2 — owner 指示直接處理（範圍小，無 spec／工作票）
- [x] G4 verified：Builder 貼出 `npm test` 75 passed（含新增 10 項刪除斷言）、`npm run build` 6 頁、`npm run check:public` 乾淨；全新 opus 子代理覆核 22fb761 重跑三項同綠，無 P0–P2（2026-10-19）
- [ ] G5 accepted by human
- [ ] G6 — 待 owner 決定是否比照 slice 4／5 豁免
- [ ] G7 released

## 範圍
- 刪除 `src/content/docs/learning-science/` 七頁、側欄「學習科學」群組、首頁「學習科學」段落與 frontmatter 描述中的「學習科學入門」。
- 舊網址一律是一般 404：不留說明頁、不轉址、不連到新站（owner 2026-10-19）。
- `docs/harness/` 內的學習科學研究、文案、驗證紀錄保留為歷史，不刪。

## Decisions by Builder
- Builder: `tests/learning-science.spec.ts` 改名為 `tests/learning-science-removed.spec.ts`，改為斷言刪除結果：七個舊網址回 404 且網址不變、無 meta refresh；側欄只剩兩群組；首頁無學習科學段落、連結與描述字樣；搜「檢索練習」不出現學習科學頁。
- Builder: 首頁不加連到作品集新站的入口（屬新的讀者可見內容，owner 未要求）。
