# product-docs — harness state

```harness
slug: product-docs
slice: "3a"
stage: IMPLEMENT
holder: builder
tier: LOW
gates_passed: [G1, G2A, G2B]
open_p0p1: 0
gate: G4
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：新增靜態文章（學習科學分區）；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送）
- slice 1：RELEASED 2026-10-14，封存於 `state-slice1.md`；slice 2：RELEASED 2026-10-14，封存於 `state-slice2.md`。
- brief：`brief-slice3-learning-science.md`（owner 兩輪討論整理，非 intent）
- intent：`intent-slice3.md`（owner G1 2026-10-14）
- what is left：第一批（3a）：06a 骨架 → 07–09 逐篇查證文獻、寫文案、核對 → owner 審文案 → 上站與測試 → G4 → G5 → G7 → S4。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [x] G2A spec reviewed（全新 opus r1 APPROVE AFTER FIXES → F25–F35 修完，不複審；reviews/product-docs-s3-g2-r1.md）
- [x] G2B tickets reviewed（同一輪合審；工作票改為 06a、06b、07–13）
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
- 2026-10-14：間隔練習的 Latimier 2021、Murray 2025 讀不到全文（出版社付費；只有審查前預印本），正文可用文獻不足 3 筆（R23 第 4 點）。
  owner 裁定：由 Builder 另找一篇讀得到全文的綜述，查證後補上。兩篇降級為延伸閱讀候選。
- 2026-10-14：檢索練習的主幹文獻 Carpenter 2022 讀不到全文（Nature Reviews Psychology 付費牆，無公開版）。owner 裁定改用
  Karpicke, J. D. (2017). Retrieval-based learning: A decade of progress（Byrne 主編 *Learning and Memory* 第 2 版，Elsevier，pp. 487–514；
  全文為 ERIC ED599273 作者提交版，頁碼依該版並註明）。Carpenter 2022 不再用於檢索與間隔；Gonçalves 2025 讀不到，不用。
- 2026-10-14：owner 同意間隔練習補兩篇：Cepeda 等人 2006（*Psychological Bulletin* 經典後設分析，作者實驗室公開的期刊版）與
  Smith 與 Scarf 2017（*Frontiers in Psychology* 開放取用）。Cepeda 超出 2021–2025 範圍，文中標「經典後設分析」。
  owner 另提供兩個 Carpenter 2022 連結（Scribd、教師部落格），Builder 判斷為第三方轉貼、非授權來源，依 R24 不用。
- 2026-10-14：owner 經機構權限從 Nature 官網下載 Carpenter 等人 2022 出版社正式版（owner 確認來源）。Builder 依此恢復使用：
  作為〈間隔練習〉主要導讀文獻；〈檢索練習〉維持 Karpicke 2017 為主幹，不改。PDF 只放暫存目錄。

## Decisions by Builder
- Builder: 2026-10-14 slice 2 的 state 封存為 `state-slice2.md`，本檔改記 slice 3。
- Builder: 2026-10-14 spec-slice3 R19 導讀頁側欄文字用「導讀」（brief 寫「學習科學」，與群組名重複）；頁面標題「學習科學導讀」。隨導讀頁文案送 owner。
- Builder: 2026-10-14 R22 引文格式定為全形括號作者姓氏＋年份（一位／兩位「與」／三位以上「等人」）。
- Builder: 2026-10-14 為縮短等待，G2 合審與第一批文獻查證（三位 sonnet，產出 `research/`）同時進行；查證只蒐集事實，不實作。
  若 G2 改動 R24，再補查。另派 sonnet 唯讀擷取主程式正式版讀者看得到的產品事實，供產品段起草（S6 仍獨立核對）。
- Builder: 2026-10-14 產品事實（主程式 main 5c9454d7 畫面文字）：背面＝概述＋「檢索提示」「自我解釋提示」；評分不影響下次複習；
  排程整副牌組、兩種固定模式（1、3、7、14、30 天／每 7 天共 8 次），畫面無「最佳化／個人化」字樣；沒有對應生成學習的功能。
  → 生成學習篇預計不放產品段（R25 第 1 點，S6 確認）；文章用「檢索提示」（編輯器另稱「提取提示」）。
