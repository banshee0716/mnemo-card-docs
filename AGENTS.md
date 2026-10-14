# AGENTS.md

Mnemo-Card 的公開產品文件站：Astro + Starlight 靜態網站，GitHub Actions 部署到 GitHub Pages。
本檔是給 Claude Code 與 Codex 的工作規則；`CLAUDE.md` 匯入本檔，兩者不得分歧。

**這是公開儲存庫。** 內容與全部 Git 歷史任何人都看得到。不得提交：金鑰、環境變數、私人操作手冊、
Mnemo-Card 主程式未公開的架構或安全細節、受試者資料或真實帳號。截圖只能用示範資料。

## 現在在哪

- 唯一的即時狀態：`docs/harness/product-docs/state.md`（階段、持有者、閘門、下一步）。
  動手前先讀；尊重 `holder:` 與階段。
- 意圖與 owner 裁定：`docs/harness/product-docs/intent.md`。規格：`spec.md`。工作票：`tickets/`。

## 工作方式

1. **全程繁體中文**回覆 owner，少夾英文術語。
2. **閘門**：owner 只管 G1（意圖）、G5（驗收）、G7（發布）。其餘由 Builder 自決並記在
   `state.md` § Decisions by Builder，行首寫 `Builder:`。新的產品行為（讀者看到的內容、範圍）一律先問 owner。
3. **審查（LOW 輕量流程，owner 裁定）**：規格與工作票由全新工作階段的 opus 一次合審，修完不複審；
   完工後任務審查與程式審查合成**一輪 Codex**，在本儲存庫內執行；Codex 的 P1 修完由全新 opus
   確認關閉。
4. **作者不自驗。** 驗證由全新工作階段的子代理，或貼出輸出的指令完成。測試紅燈都是真失敗。
5. **不編造。** 技能版本、下載來源、平台、安裝方法、產品操作步驟、學習效果，查不到就不寫。
   文章寫的每個產品操作都要對照 Mnemo-Card 主程式現況核對（見下方「事實來源」）。
6. **子代理**：不得派 `fable`。預設實作 `sonnet`，需要判斷的工作用 `opus`。大量閱讀交給子代理。
7. **對外動作**（push、建立或改 GitHub 設定、Pages 設定、DNS）先問 owner，除非 owner 已明確授權該次動作。
8. **開發環境**：WSL2 Ubuntu，`~/code/mnemo-card-docs`，Node 24。`.npmrc` 設 `ignore-scripts=true`
   與 `save-exact=true`；依賴一律鎖定精確版本；不用 npm `pre*`／`post*` 生命週期腳本，
   建置步驟寫在明確的腳本裡。

## 事實來源（本機，唯讀）

- Mnemo-Card 主程式：`~/code/memo-card-system`。正式版本以其 `STATUS.md` 記錄的 main 為準。
  文案草稿：`docs/plans/2026-10-12-mnemo-card-user-guide-v2.md`（第一、二、三篇與文末「編輯查核索引」）。
  該儲存庫是私有的：可以讀來核對，但不要把它的內部細節寫進本儲存庫。
- mnemo-study-cards 技能：`/mnt/d/mnemo-study-cards-skill`，以 v0.2.0 為準。

## 指令（建立後由 ticket 01 補齊）

```bash
npm run dev       # 本機預覽（搜尋只在正式建置可用）
npm run build     # 靜態建置，產生 dist/ 與 Pagefind 索引
npm run preview   # 以 base 路徑預覽建置結果
npm test          # Playwright：頁面、連結、搜尋、手機寬度、鍵盤、無障礙
```
