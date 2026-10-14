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
- Disposition: 待處理（擬修）
## F12 [P2] 最終介面與測試改動晚於最後一份獨立驗證（state.md:29-42）
- 失敗情境：G4 證據停在 d6fc960，之後的側欄移除、splash 首頁、CSS、Logo 與 AC4／AC7 測試修改沒有獨立驗證。
- Disposition: 待處理（擬修）
## F13 [P2] 唯一即時狀態仍把已完成的刪庫重建列為 blocker（state.md:21-22）
- Disposition: 待處理（擬修）
## F14 [P2] AC10 仍可讓未加書名號的重設密碼指示假綠燈（tests/articles.spec.ts:115-126）
- 失敗情境：段落寫「接著按忘記密碼重設」，不含書名號也不在清單中，測試仍綠。
- Disposition: 待處理（擬修）
## F15 [P3] AC3 丟棄跨頁 fragment，壞掉的深連結仍回報成功（tests/helpers.ts:35-65）
- 失敗情境：連到 ../first-use/#不存在，頁面 200 即通過。
- Disposition: 待處理（擬修）
