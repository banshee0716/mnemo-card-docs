# product-docs — harness state

```harness
slug: product-docs
slice: "4"
stage: RELEASED
holder: builder
tier: LOW
gates_passed: [G1, G2A, G2B, G4, G5, G7]
open_p0p1: 0
gate: G7
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：改寫一篇靜態文章並加圖片佔位；不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送；推送由 owner 執行）
- slice 1–3：RELEASED，封存於 `state-slice1.md`、`state-slice2.md`、`state-slice3.md`。
- 任務：依完整使用者旅程，把〈第一次使用 Mnemo-Card〉寫得更完整；需要附圖，先以小字佔位（owner 2026-10-15）。
- what is left：無。之後換真圖另開切片。 → S3 → owner 審 → 上站 → G4 → owner 推送 → S4。 → spec＋工作票 → G2 → 文案 → S3 核對 → owner 審 → 上站 → G4 → owner 推送 → S4。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-15）
- [x] G2A spec reviewed（r1 FAIL，F36–F49 已修，不複審）
- [x] G2B tickets reviewed（同上）
- [x] G3 conditional checkpoint（LOW 不適用）
- [x] G4 verified（verification/g4-slice4.md：乾淨 clone 139 passed，變異 6/6 變紅）
- [x] G5 accepted by human（2026-10-15「大略可行，可以直接放了」）
- [x] G6A task review（owner G1 豁免）
- [x] G6B code review（owner G1 豁免）
- [x] G7 released（run 38672179817 success；S4 13/13 回 200，evidence/s4-g7-s4-smoke.md）

## Evidence (G4)
| Acceptance criterion | Check | Result/output ref |
| --- | --- | --- |
| AC28–AC35 | 全新子代理乾淨 clone `npm test`、check:public、變異 6 項 | verification/g4-slice4.md：139 passed、乾淨、6/6 紅 |

## Deviation log

## Decisions by human
- 2026-10-15：owner 開下一個任務：依完整使用者旅程，把〈第一次使用 Mnemo-Card〉寫得更完整；文章需要附圖，目前沒有圖，先加小字做佔位符。

- 2026-10-15 G1：A2 在「開始使用」拆兩篇；B1 帳號沿用 R9（介面帳號功能沒開資料庫權限）；C、D 照建議，豁免 G6；手機版先不管，只寫桌機與平板。

- 2026-10-15 owner：兩篇文案「大略可行，可以直接放了」（G5 文案同意，含新頁標題、「設定」核准句、首頁改法；最後一節開頭維持原樣）。

## Decisions by Builder
- Builder: 2026-10-15 產品旅程盤點完成（子代理唯讀正式版 main）；發現第 1 步帳號說法與程式不一致，列為 intent B 交 owner 確認。
- Builder: 2026-10-15 slice 3 的 state 封存為 `state-slice3.md`，本檔改記 slice 4。
- Builder: 2026-10-15 G2 r1 的 F36–F49 全部照建議修進 spec-slice4、工作票 14／15、intent 註記與兩篇草稿；R39 字數下修為第一篇 2,000–3,000、新頁 1,100–2,000（owner 要避免認知負荷過大）。
- Builder: 2026-10-15 S3 初核 7 列 FAIL（側欄底部顯示寬度、首頁主卡時機、張數顯示、禁用詞「保證」、匯入入口、登出行為），照核對者建議修正，複核全部 PASS；快捷鍵表格改清單（R39 第 2 點）。
