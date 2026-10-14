# product-docs — harness state

```harness
slug: product-docs
slice: "2"
stage: BUILT
holder: human
tier: LOW
gates_passed: [G1, G2A, G2B, G4, G5, G6A, G6B]
open_p0p1: 0
gate: G7
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：單篇靜態文章改寫；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送）
- slice 1：RELEASED 2026-10-14，紀錄封存於 `state-slice1.md`。
- intent：`docs/harness/product-docs/intent-slice2.md`（owner G1 2026-10-14）
- spec：`spec-slice2.md`；tickets：`tickets/05-rewrite-skill-article.md`
- what is left：owner 推送 main（G7）→ S4 線上冒煙。G5、G6 依 owner 豁免。 → owner 審文案 → G4 → G6 → G5 → G7。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [x] G2A spec reviewed（全新 opus r1 APPROVE AFTER FIXES → F16–F24 修完，不複審；reviews/product-docs-s2-g2a-r1.md）
- [x] G2B tickets reviewed（同一輪合審）
- [x] G3 conditional checkpoint（LOW 不適用）
- [x] G4 verified（全新 sonnet，乾淨 clone @ 580df81：npm test 47 passed、check:public 乾淨；變異 5/6 紅，M5 已補斷言）
- [x] G5 accepted by human（owner 2026-10-14 同意文案並要求上線，視為驗收）
- [x] G6A task review（owner 2026-10-14 豁免：要求輕量流程）
- [x] G6B code review（同上豁免）
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
- 2026-10-14：S5（verification/standalone-getting-started.md）找到 11 個缺口（無阻擋級）。owner 裁定：第三篇大致沒問題，
  只補「卡包與檢查結果怎麼讀」；第 1 節改為說明技能是什麼，並寫明技能檔由研究者提供給符合條件的受試者（不點名 AI 工具）。
  其餘缺口列為已知限制（spec-slice2 R18）。
- 2026-10-14：S3 發現 Mnemo-Card 公開首頁「四種卡片」區塊把深入解析卡寫成「和相近的做法差在哪？」，與新增卡片畫面及技能的
  「為什麼會這樣？」不一致。owner 裁定：文章以技能與新增卡片畫面為準；主程式首頁的說法另開主程式切片修正（不在本儲存庫）。
- 2026-10-14：owner 同意兩篇文案（第二篇全文、第三篇 R18 改動、首頁說明句），要求放上網站，並要求流程輕量化、少耗 token。
  Builder 依此記為：G5 由文案同意涵蓋；G6 Codex 豁免；保留一次輕量的獨立驗證（作者不自驗）。

## Decisions by Builder
- Builder: 2026-10-14 slice 1 的 state 封存為 `state-slice1.md`，本檔改記 slice 2。
- Builder: 標題與網址不變，避免牽動側欄、上下篇與其他頁連結（intent-slice2.md 第 1 條，待 owner G1 確認）。
- Builder: R10 的卡型一致性：主程式正式版（STATUS 記錄的 main）新增卡片畫面上的四個卡型問句，與技能 v0.2.0 卡型表一致；
  v2 文案草稿記的「深入解析定義差異」是主程式內部詞彙表與技能的差異，讀者看不到，不觸發 intent 第 3 條的停點。
  spec-slice2 R16 仍要求核對者以畫面文字複核。
- Builder: 文案上站（index.mdx、getting-started.mdx 與 copy 逐字相同；首頁說明句）；測試加 AC14、AC15、AC17、AC18，AC10 下載段改為 owner 同意的兩段；`npm test` 47 passed。
- Builder: G4 變異 M5（刪光第二篇「卡包」）原本不變紅：Pagefind 對中文逐字比對。AC17 補「正文含卡包」斷言；以 `sed` 把卡包換成資料包重跑 AC17 → 1 failed，還原後 `npm test` 47 passed。
