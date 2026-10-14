# Handoff 1：final-review（G6A＋G6B 合審）— product-docs

- 你是 Reviewer：全程只讀，不得修改本儲存庫任何檔案；發現寫在輸出中，由 Builder 記錄。
- 審查依據：主程式儲存庫的 reviewer Prompt B（final independent code reviewer）。依 owner 裁定（AGENTS.md 工作方式 3、
  state.md § Decisions by human 2026-10-14），**這一輪同時涵蓋兩個關卡**，請分別給出判定：
  - **G6A 任務審查**：反向鏈 證據 → 實作 → 工作票 → spec → intent；對 spec AC1–AC13 逐條給狀態
    （Verified／Partially verified／Not verified／Violated；AC12 屬 G7 發布，標 Not verified 即可）。
  - **G6B 程式審查**：正確性、回歸風險、安全與隱私、工作流、測試品質、無障礙、可維護性。
  - 兩個判定各用 APPROVE／APPROVE AFTER FIXES／REJECT；有任何 P0 或 P1 就不得 APPROVE。
- 嚴重度：P0–P3。每個發現都要有具體的失敗情境（輸入或狀態 → 錯誤結果），格式：標題、檔案與行號、相關需求、
  證據、失敗情境、影響、需要的修正、建議的回歸測試、信心（high／medium／low）。最多 8 個，只報有把握的反例。
- 不要打開 `docs/harness/product-docs/findings.md`（避免受前一輪影響）；前一輪與預審的處置都寫在本 packet。

## 審查範圍

- 審查範圍：`492e030...HEAD`（指令以 `--base 492e030` 傳入；HEAD 是加入本 packet 的提交）。
  492e030 之前只有 G1／G2 的 harness 文件，不在範圍內。
- 範圍內的關注面（請在摘要中說明你涵蓋了哪些）：
  1. **建置與設定**：`package.json`、`package-lock.json`（只看依賴是否鎖定精確版本）、`.npmrc`、`astro.config.mjs`、
     `src/content.config.ts`、`src/content/i18n/zh-TW.json`、`src/styles/custom.css`、`src/assets/logo.svg`、`public/favicon.svg`。
  2. **部署工作流**：`.github/workflows/deploy.yml`（spec R14）。
  3. **內容**：`src/content/docs/` 的首頁與三篇文章（spec R6–R12）。文案已由 owner 核准、由全新子代理逐句核對
     （`docs/harness/product-docs/verification/` 三份報告）；只在說法與 spec 規則衝突、或在公開儲存庫洩漏內部細節時回報，
     不評論用字風格。
  4. **測試**：`playwright.config.ts`、`tests/*.ts`（spec S2、AC2–AC10）。請判斷斷言是否真的會在合理的回歸下變紅。
  5. **公開儲存庫衛生**：全範圍內的 harness 文件（`docs/harness/product-docs/` 下 state、spec、copy、verification、
     evidence、reviews）是否含 secret、個人信箱或主程式未公開的架構、設定、安全細節（AGENTS.md、spec K2、AC13）。
- 閱讀寬度：可以讀範圍外會被影響的檔案，包括 `node_modules/@astrojs/starlight/` 的元件原始碼，用來確認測試依賴的
  DOM 結構與行為。請在摘要列出你實際打開的檔案路徑。
- 不在範圍：主程式（Mnemo-Card）本身的行為與程式碼；技能（mnemo-study-cards）本身；論文內容；GitHub Pages 的實際
  部署（G7 才執行）。

## 標準

- `docs/harness/product-docs/intent.md`（owner G1 裁定）、`spec.md`（R1–R14、K1–K3、S1–S4、AC1–AC13）、
  `tickets/01`–`04`、`AGENTS.md`（公開儲存庫規則、依賴與腳本規則）。

## 驗證證據（Builder 提供；你不能執行測試，請判斷其可信度）

- G4（全新 opus 子代理，乾淨 clone @ cea85bf）：`npm ci && npm run build` exit 0，`npm test` 43 passed，
  AC 對照與變異實驗見 `state.md` § Evidence (G4)。
- 各票驗收：全新子代理在乾淨 clone 執行，記錄在 `state.md` § Decisions by Builder。
- 內容核對：`verification/content-first-use.md`（62 PASS）、`content-mnemo-study-cards.md`（35 PASS）、
  `content-getting-started.md`（52 PASS），FAIL 皆 0。
- 預審修正後（b2abc51）：`npm test` 43 passed（測試改在 4399 埠）。

## 已處理的預審發現（Builder 內部預審，不是 Reviewer 回合；請確認是否真正關閉）

- 預審 P1：G2 審查原文（`reviews/product-docs-s1-g2a-r1.md`）與 spec R9 含主程式檔案路徑、帳號與寄信設定。
  已在工作樹以「[主程式內部細節]」取代，spec AC13 搜尋擴大到全儲存庫。**Git 歷史（含已推送到公開 origin/main 的
  26123a3）仍有原文**；是否改寫歷史並強制推送待 owner 決定。請確認工作樹已無殘留，並評估 AC13 新搜尋是否足夠。
- 預審 P2：Playwright 重用 4321 上手動開的 preview → 改為 4399 且 `reuseExistingServer: false`。
- 預審 P2：AC10 斷言太窄 → 第一篇全文禁止「「忘記密碼？」」，提到「建立帳號」的句子必須含「不開放使用」。

## 已接受的限制（不要重報）

- `npm audit` 的 moderate：`postcss-selector-parser`（經 Starlight → expressive-code，只在建置時處理本站 CSS）。
- `copy/` 文案草稿與上站頁面重複保存；`copy/` 是 owner 核准與核對的紀錄。
- 建置時 Starlight 的 `Entry docs → 404 was not found` 警告（自動產生 404 頁）。
- AC3 不遞迴檢查 CSS `url()` 的字型分片；AC4 文章目錄只在桌機寬度斷言。
- 工作流的權限設在整個工作流層級（與 Astro 官方範例相同）。
- S3 的內部核對報告依 spec 存在主程式儲存庫，本儲存庫看不到。

## 需要你回答的問題

1. 有沒有任何 AC 實際上沒被證據支持，或測試在合理回歸下仍會是綠燈？
2. 工作流在第一次推送 `main` 時，有沒有會讓部署失敗或部署未測試內容的情況？
3. 範圍內的公開文件是否還有主程式未公開的細節、secret 或個人信箱？
4. 有沒有實作超出或不足 spec 的地方（例如側欄、上下篇、首頁入口、繁中字串覆寫、字型與配色）？
