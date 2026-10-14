# product-docs — harness state

```harness
slug: product-docs
slice: "1"
stage: PLAN_APPROVED
holder: builder
tier: LOW
gates_passed: [G1, G2A, G2B]
open_p0p1: 0
gate: G2A
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：靜態文件站，不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（新儲存庫；尚無程式碼）
- intent：`docs/harness/product-docs/intent.md`（owner G1 2026-10-14）
- spec：`docs/harness/product-docs/spec.md`（G2A＋G2B r1 合審，修完關閉，2026-10-14）
- tickets：`docs/harness/product-docs/tickets/` 01–04（同上）
- what is left：開始 ticket 01（新工作階段，在本儲存庫開）。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [x] G2A spec reviewed（fresh opus r1 NEEDS FIXES → F1–F10 修完，依 owner 裁定不複審；reviews/product-docs-s1-g2a-r1.md）
- [x] G2B tickets reviewed（同一輪合審）
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
- 2026-10-14：第三篇以〈Cognitive offloading〉為輸入示例，不提供產出的卡片（G2 F2）。
- 2026-10-14：授權改寫歷史並強制推送，把個人信箱換成 noreply（G2 F4）。

## Decisions by Builder
