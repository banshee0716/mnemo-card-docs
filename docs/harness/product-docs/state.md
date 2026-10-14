# product-docs — harness state

```harness
slug: product-docs
slice: "1"
stage: INTENT_APPROVED
holder: reviewer
tier: LOW
gates_passed: [G1]
open_p0p1: 0
gate: G2A
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：靜態文件站，不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（新儲存庫；尚無程式碼）
- intent：`docs/harness/product-docs/intent.md`（owner G1 2026-10-14）
- spec：`docs/harness/product-docs/spec.md`（送 G2A＋G2B 合審）
- tickets：`docs/harness/product-docs/tickets/` 01–04（送合審）
- what is left：全新 opus 合審規格與工作票（G2A＋G2B 一次）→ 修正後不複審 → 開始 ticket 01。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [ ] G2A spec reviewed（與 G2B 合審）
- [ ] G2B tickets reviewed
- [ ] G3 conditional checkpoint
- [ ] G4 verified
- [ ] G5 accepted by human
- [ ] G6A task review（Codex，與 G6B 合一輪）
- [ ] G6B code review
- [ ] G7 released

## Evidence (G4)
| Acceptance criterion | Check | Result/output ref |
| --- | --- | --- |

## Deviation log

## Decisions by human
- 2026-10-14：G1 裁定見 intent.md 第 1–9 條。
- 2026-10-14：本儲存庫由 owner 授權建立；harness 文件遷入，之後的工作階段在此開。

## Decisions by Builder
