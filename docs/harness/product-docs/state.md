# product-docs — harness state

```harness
slug: product-docs
slice: "2"
stage: BRIEFED
holder: human
tier: LOW
gates_passed: []
open_p0p1: 0
gate: G1
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：單篇靜態文章改寫；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送）
- slice 1：RELEASED 2026-10-14，紀錄封存於 `state-slice1.md`。
- intent：`docs/harness/product-docs/intent-slice2.md`（草稿，待 owner G1）
- what is left：owner 確認 G1 → spec 增補與工作票 → G2 → 撰寫與 S3 核對 → owner 審文案 → G4 → G6 → G5 → G7。
- blockers：none

## Gates
- [ ] G1 intent approved by human
- [ ] G2A spec reviewed
- [ ] G2B tickets reviewed
- [x] G3 conditional checkpoint（LOW 不適用）
- [ ] G4 verified
- [ ] G5 accepted by human
- [ ] G6A task review
- [ ] G6B code review
- [ ] G7 released

## Evidence (G4)
| Acceptance criterion | Check | Result/output ref |
| --- | --- | --- |

## Deviation log

## Decisions by human
- 2026-10-14：owner 決定不做「編輯此頁」連結，改在 GitHub 網頁直接編輯；不保護 main、不改 PR 流程、不在工作流加跑公開檢查。
- 2026-10-14：slice 2 重寫〈認識 mnemo-study-cards〉，說明技能如何判斷主題、拆分內容、生成卡片。owner 選定：
  依三個問題組織、卡型用中文名稱、沿用〈Cognitive offloading〉範例、舊段落濃縮保留（intent-slice2.md 第 2–5 條）。
- 2026-10-14：owner 要求第二篇與第三篇目的截然不同：第二篇講原理，第三篇是單純步驟、不看第二篇也能照做（intent-slice2.md 第 6 條）。

## Decisions by Builder
- Builder: 2026-10-14 slice 1 的 state 封存為 `state-slice1.md`，本檔改記 slice 2。
- Builder: 標題與網址不變，避免牽動側欄、上下篇與其他頁連結（intent-slice2.md 第 1 條，待 owner G1 確認）。
