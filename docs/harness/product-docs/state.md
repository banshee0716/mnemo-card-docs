# product-docs — harness state

```harness
slug: product-docs
slice: "1"
stage: INTENT_APPROVED
holder: human
tier: LOW
gates_passed: [G1]
open_p0p1: 1
gate: G2A
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：靜態文件站，不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（新儲存庫；尚無程式碼）
- intent：`docs/harness/product-docs/intent.md`（owner G1 2026-10-14）
- spec：`docs/harness/product-docs/spec.md`（送 G2A＋G2B 合審）
- tickets：`docs/harness/product-docs/tickets/` 01–04（送合審）
- what is left：G2 合審 r1 NEEDS FIXES，F1–F3、F5–F10 已修（findings.md）；F4（公開歷史含個人信箱）待 owner 授權改寫並強制推送。之後 G2A／G2B 通過 → PLAN_APPROVED → ticket 01。
- blockers：F4 需 owner 決定是否改寫歷史（建議：是，趁提交還少）

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
