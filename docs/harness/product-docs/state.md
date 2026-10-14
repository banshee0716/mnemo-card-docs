# product-docs — harness state

```harness
slug: product-docs
slice: "2"
stage: SPEC_APPROVED
holder: builder
tier: LOW
gates_passed: [G1, G2A, G2B]
open_p0p1: 0
gate: G4
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：單篇靜態文章改寫；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送）
- slice 1：RELEASED 2026-10-14，紀錄封存於 `state-slice1.md`。
- intent：`docs/harness/product-docs/intent-slice2.md`（owner G1 2026-10-14）
- spec：`spec-slice2.md`；tickets：`tickets/05-rewrite-skill-article.md`
- what is left：ticket 05：撰寫文案 → S3 核對、S5 自足性 → owner 審文案 → G4 → G6 → G5 → G7。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [x] G2A spec reviewed（全新 opus r1 APPROVE AFTER FIXES → F16–F24 修完，不複審；reviews/product-docs-s2-g2a-r1.md）
- [x] G2B tickets reviewed（同一輪合審）
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
- 2026-10-14：owner G1 通過（「目前看可以，只要確定內容就好」）；附圖之後再考慮，不在本切片。

## Decisions by Builder
- Builder: 2026-10-14 slice 1 的 state 封存為 `state-slice1.md`，本檔改記 slice 2。
- Builder: 標題與網址不變，避免牽動側欄、上下篇與其他頁連結（intent-slice2.md 第 1 條，待 owner G1 確認）。
- Builder: R10 的卡型一致性：主程式正式版（STATUS 記錄的 main）新增卡片畫面上的四個卡型問句，與技能 v0.2.0 卡型表一致；
  v2 文案草稿記的「深入解析定義差異」是主程式內部詞彙表與技能的差異，讀者看不到，不觸發 intent 第 3 條的停點。
  spec-slice2 R16 仍要求核對者以畫面文字複核。
