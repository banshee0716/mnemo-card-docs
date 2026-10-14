# Findings — product-docs

原文：`reviews/product-docs-s1-g2a-r1.md`。依 owner 裁定（LOW 輕量流程），修完不複審。

## F1 [P1] 第一篇登入步驟缺帳號事實（round 1, 2026-10-14）
- Disposition: fixed — spec R9 寫入事實（研究者提供電子郵件與密碼、忘記密碼聯絡研究者、不教「忘記密碼？」），AC10 改禁步驟句；ticket 03 送文案時請 owner 確認事實仍成立。
## F2 [P1] 第三篇是否保留論文範例未決（round 1）
- Disposition: fixed — owner 2026-10-14 裁定採 (b)：以同一篇論文為輸入示例，但不提供產出的卡片；論文加入 S3 事實來源；「遇到問題時」與佔位句不上站（spec R11、S3、ticket 04）。
## F3 [P1] 公開核對報告會帶入主程式內部細節（round 1）
- Disposition: fixed — spec S3 分公開／內部兩份；AC13 grep 擴大到 src、public、verification、evidence 並加搜路徑樣式。
## F4 [P1] 公開歷史含個人信箱（round 1）
- Disposition: fixed — spec K2 身分檢查、AGENTS.md 規則；owner 2026-10-14 授權改寫歷史並強制推送，全部提交作者改為 noreply。
## F5 [P2] 上下篇會連到外部連結 — fixed（spec R8 表、AC4）
## F6 [P2] AC7 鍵盤條件 — fixed（spec AC7、AC9；tickets 01、02）
## F7 [P2] 深色主題對比 — fixed（spec R4、ticket 02）
## F8 [P2] 工作流固定 ubuntu-24.04 — fixed（spec R14）
## F9 [P2] G7 順序與 G7 前推 main — fixed（spec K3、§5 G7；ticket 01）
## F10 [P3] 技能版本與檔名界線 — fixed（spec R10、ticket 04）

## Round 1 verdict (2026-10-14)
NEEDS FIXES → F1–F10 全部關閉，依 owner 裁定不複審。

# G6A＋G6B round 1（Codex，2026-10-14）

原文：`reviews/product-docs-s1-g6ab-r1.md`（base fa5a923，head 97fb444）。判定：G6A APPROVE AFTER FIXES；G6B APPROVE AFTER FIXES。

## F11 [P1] AC13 排除 spec 且只掃 HEAD，公開歷史洩漏仍會顯示通過（spec.md:169-173；confidence high）
- 失敗情境：提交 A 在 spec.md 加入內部路徑或設定，提交 B 刪除；既定命令零輸出，A 推送後仍可用 SHA 存取。
- Disposition: fixed — 新增 `scripts/check-public.mjs`（`npm run check:public`）：掃描 HEAD 可達的每個提交的檔案內容、提交者身分與提交訊息；樣式只定義在腳本內，不整檔排除 spec，已知無害的歷史行以「檔案＋整行」逐行允許，未用到的允許項會警告。spec AC13 與 AGENTS.md 改為此指令。變異測試（暫存 clone）：spec 中間提交含寄信設定字樣後刪除、中間提交含主程式路徑後刪除、提交訊息含個人信箱、非 noreply 提交者、憑證樣式，五項皆 exit 1；還原後 exit 0。待全新 opus 確認關閉。
## F12 [P2] 最終介面與測試改動晚於最後一份獨立驗證（state.md:29-42）
- 失敗情境：G4 證據停在 d6fc960，之後的側欄移除、splash 首頁、CSS、Logo 與 AC4／AC7 測試修改沒有獨立驗證。
- Disposition: fixed（待驗）— 修完後由全新驗證者在乾淨 clone 的最終 HEAD 重跑 G4（AC1–AC10、AC13）。
## F13 [P2] 唯一即時狀態仍把已完成的刪庫重建列為 blocker（state.md:21-22）
- Disposition: fixed — state.md blockers 改為 none，what is left 只列實際剩餘步驟；刪庫重建與推送結果記在 § Decisions by human。
## F14 [P2] AC10 仍可讓未加書名號的重設密碼指示假綠燈（tests/articles.spec.ts:115-126）
- 失敗情境：段落寫「接著按忘記密碼重設」，不含書名號也不在清單中，測試仍綠。
- Disposition: fixed — 第一篇含「忘記密碼」的每一句都必須同時含「聯絡」與「研究者」。變異「如果忘記密碼，接著按忘記密碼重設。」→ AC10 紅燈。
## F15 [P3] AC3 丟棄跨頁 fragment，壞掉的深連結仍回報成功（tests/helpers.ts:35-65）
- 失敗情境：連到 ../first-use/#不存在，頁面 200 即通過。
- Disposition: fixed — AC3 保留站內連結的 fragment，取得目標頁後確認存在對應 id。變異：連到 `../../first-use/#不存在的段落` → 紅燈；連到存在的 `#7-安排下一次練習` → 綠燈。

## Round 1 verdict (2026-10-14)
G6A APPROVE AFTER FIXES；G6B APPROVE AFTER FIXES → F11–F15 全部修正；F11（P1）由全新 opus 確認關閉（不跑第二輪 Codex，LOW 輕量流程）。
關閉驗證者另提 N1–N5（P2／P3，無實際洩漏）已處理，見 state.md § Decisions by Builder。

# slice 2 — G2A＋G2B round 1（全新 opus，2026-10-14）

原文：`reviews/product-docs-s2-g2a-r1.md`（head 1fe6d41）。判定：G2A APPROVE AFTER FIXES；G2B APPROVE AFTER FIXES。
依 LOW 輕量流程，修完不複審。

## F16 [P2] 產品行為只核對卡型；背面漏了概述（slice 2 G2 F1；confidence high）
- 失敗情境：文案寫「背面是兩個提示」，S3 只對技能核對而 PASS，網站描述與產品畫面不符。
- Disposition: fixed — R15 主題 3 改為「背面有一段概述與兩個提示，背面組成以產品畫面為準」；S3 與 ticket 第 1 步加入正背面與匯入對照產品畫面。
## F17 [P2] 搜「卡包」的斷言用前綴比對，第三篇命中也通過（slice 2 G2 F2；confidence high）
- 失敗情境：新第二篇不含「卡包」，搜尋只回第三篇，AC5 仍綠。
- Disposition: fixed — AC17 加斷言：有一筆結果路徑（去掉 `#`）完全等於第二篇網址；R15 第 3 點要求文案至少一處用「卡包」；ticket 變異清單加入「刪掉所有卡包」。
## F18 [P2] 牌組計畫寫法易被寫成「等你確認」；漏了「要求先看計畫」（slice 2 G2 F3；confidence high）
- 失敗情境：文案寫「先列計畫讓你確認再產卡」，與技能「列摘要後直接寫卡」相反。
- Disposition: fixed — 主題 1 寫明列摘要後直接寫卡、只有要求先看計畫才停；主題 4 補「要求先看計畫」「來源缺漏補件」，以及「多數不問或只問一輪、最多三輪」。
## F19 [P3] 冷讀定義過寬（slice 2 G2 F4；confidence high）
- Disposition: fixed — 主題 3 改用技能的三個前提（本副先備程度、沒讀過來源、沒看過同副其他卡；領域常識不解釋）。
## F20 [P2] S5 判準問不成，子代理可能用技能知識補缺口（slice 2 G2 F5；confidence medium-high）
- 失敗情境：第三篇缺前提，子代理憑對技能的了解補上而判無缺口。
- Disposition: fixed — 判準改為「缺少完成產卡所需的任何資訊」；明列禁讀（第二篇、copy、verification、spec、intent、技能目錄、主程式）與不得載入技能；每步須引用原句。
## F21 [P3] AC14 沒規定 h2 恰好是哪些（slice 2 G2 F6；confidence medium-high）
- Disposition: fixed — AC14 改為 h2 清單完全等於定稿文案的六個標題；R15 寫明不另立 h2；測試在文案定稿後寫死；變異清單加「多加一個 h2」。
## F22 [P3] AC15 涵蓋太窄、比對方式未定（slice 2 G2 F7；confidence medium）
- Disposition: fixed — 範圍為內容區加 meta description；英文代碼不分大小寫完整單字；加「點選「」「選擇「」「輸入「」「拖入」「上傳」；禁止行內 code；註明是回歸防護網。
## F23 [P3] 「照推薦」與不寫操作的界線（slice 2 G2 F8；confidence medium）
- Disposition: fixed — R15 第 5 點加：描述技能如何回應屬決策說明，不寫成「請輸入／請回覆…」指示句。
## F24 [P3] 首頁說明句不經 owner 與 S3；intent 第 7 條未寫進 spec（slice 2 G2 F9；confidence high）
- Disposition: fixed — 首頁說明句併入 copy 送 owner、列入 S3；spec 新增 §2「不做」。

## Round 1 verdict (2026-10-14)
G2A APPROVE AFTER FIXES；G2B APPROVE AFTER FIXES → F16–F24 全部修正，依 LOW 流程不複審。
