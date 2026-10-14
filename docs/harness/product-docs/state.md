# product-docs — harness state

```harness
slug: product-docs
slice: "3"
stage: SPEC
holder: builder
tier: LOW
gates_passed: [G1]
open_p0p1: 0
gate: G2
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：新增靜態文章（學習科學分區）；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送）
- slice 1：RELEASED 2026-10-14，封存於 `state-slice1.md`；slice 2：RELEASED 2026-10-14，封存於 `state-slice2.md`。
- brief：`brief-slice3-learning-science.md`（owner 兩輪討論整理，非 intent）
- intent：`intent-slice3.md`（owner G1 2026-10-14）
- what is left：spec-slice3 與工作票 → G2 合審 → 逐篇查證文獻、寫文案、核對 → owner 審文案 → 上站與測試 → G4 → G5 → G7 → S4。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [ ] G2A spec reviewed
- [ ] G2B tickets reviewed
- [x] G3 conditional checkpoint（LOW 不適用）
- [ ] G4 verified
- [ ] G5 accepted by human
- [ ] G6A task review（owner 2026-10-14 指示豁免，輕量流程）
- [ ] G6B code review（同上）
- [ ] G7 released

## Evidence (G4)
| Acceptance criterion | Check | Result/output ref |
| --- | --- | --- |

## Deviation log

## Decisions by human
- 2026-10-14：owner 開 slice 3「學習科學」分區，LOW 輕量流程：G2 一次合審、修完不複審；一篇一票；每篇一位全新核對者
  同時對照論文（寫頁碼）與 Mnemo-Card 正式版畫面；每兩、三篇送 owner 審一次；G6 豁免；保留一次獨立 G4；owner 推送後跑 S4。
  不宣稱 Mnemo-Card 的學習成效；論文只轉述，不複製、不散布 PDF；讀不到全文的文獻不支撐具體說法。

- 2026-10-14：owner G1 通過（「可以，當然沒問題…直接開始做吧」）：A1 分兩批（第一批導讀＋檢索＋間隔＋生成學習；
  第二批自我解釋＋認知負荷＋KLI）、B 沿用 brief 標題、C 文獻 3–7 篇不湊數、D1 產品段只放在有對應功能的篇目、
  E1 讀不到全文先找合法公開版，找不到就降級；第三篇 `next: false` 不改。未提供示範稿。

## Decisions by Builder
- Builder: 2026-10-14 slice 2 的 state 封存為 `state-slice2.md`，本檔改記 slice 3。
