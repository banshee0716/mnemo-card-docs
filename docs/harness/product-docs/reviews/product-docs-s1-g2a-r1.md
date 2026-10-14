# product-docs-s1-g2a-r1 — raw reviewer output

- review-id: product-docs-s1-g2a-r1   gate: G2A（與 G2B 合審，owner 裁定）
- review type: initial  lens: combined（spec＋tickets）
- reviewer: fresh-context Claude opus 子代理（LOW 輕量流程）
- head SHA: 5fe8c1f1de1dc565a4510d2199a5c6bd34bffa2f
- raw verdict: NEEDS FIXES
- findings returned: 10 → recorded as F1–F10 in findings.md

註：原文引用了一個個人電子郵件地址，存檔時以「[個人信箱]」取代。2026-10-14 G6 預審發現原文含主程式的檔案路徑、帳號與寄信設定，
依 AGENTS.md 公開規則以「[主程式內部細節]」取代；未刪節原文保存在主程式儲存庫。其餘照錄。

## Output (verbatim)

# product-docs G2A＋G2B 合審（規格與工作票）

只讀不寫；未改檔、未安裝、未推送。查證方式：讀主程式正式版 main 的程式碼；以 `npm pack` 取得 `@astrojs/starlight@0.42.6` 原始碼核對實際行為（`npm view` 確認 astro 7.3.8 / starlight 0.42.6 即今日最新）；`gh` 唯讀查詢儲存庫。

## 發現

**F1 [P1] 第一篇的登入步驟是 owner 未決的內容決定，Builder 只能編造**
- 位置：spec R9、AC10、ticket 03
- 證據：正式版登入頁同時有「登入／建立帳號」兩個分頁與「忘記密碼？」（[主程式內部細節]）；[主程式內部細節]；受試者帳號由研究者預先建立並提供，忘記密碼由研究者協助處理（主程式 2026-09-07 的帳號安排）。
- 失敗情境：R9 只寫「用已收到的帳號登入」，沒說受試者收到什麼（電子郵件＋密碼？）、忘記密碼怎麼辦。Builder 只好補寫，最可能照畫面寫「按忘記密碼」——在正式環境行不通，違反品質線「每個操作都能在正式產品上照做」。另外若 owner 想提醒「登入頁的建立帳號請勿使用」，AC10 禁止「建立帳號」字樣的測試會直接紅。
- 要改：請 owner 定第 1 步的確切說法（帳號從誰那裡拿、包含什麼；忘記密碼找誰——寫成讀者懂的話，不寫後台操作），以及是否提到「建立帳號」分頁；AC10 改為禁止步驟性寫法（例如「驗證信」「按「建立帳號」」），而不是禁止單字。
- 驗證：spec R9 含 owner 定稿句；S3 核對表的「忘記密碼」列對照 owner 裁定而非畫面。

**F2 [P1] 第三篇是否保留論文範例是未明說的產品決定，且 AC11 無法核對**
- 位置：spec R11、ticket 04 步驟 2、AC11
- 證據：草稿第三篇第 2～4 步每段都以〈Cognitive offloading〉為例：書目與三個外部連結、整段產卡提示（程式碼區塊）、四項論文專屬的檢查重點；「遇到問題時」含「待安裝驗證後補入」「待確認」佔位句。ticket 04 只說拿掉「尚未執行的範例」，沒說論文本身、提示範本、四項檢查算不算。
- 失敗情境：全拿掉 → 第 2～4 步幾乎無內容；保留 → S3 要核對「論文中的身體行動實例」「內部負荷、操作成本、後設認知」等說法，但 S3 的事實來源只列主程式與技能，沒有論文本身，AC11 做不到。佔位句也與 owner「不建空頁／待補內容」精神衝突。
- 要改：請 owner 二選一——(a) 只寫通用流程、不用論文例子；(b) 保留論文作為「輸入示意」（書目＋提示範本，明寫尚未實際執行），並把論文加入 S3 事實來源。兩種都要同時決定「遇到問題時」一節與「實際呼叫技能的方式待補」句的去留。
- 驗證：R11 逐段列出保留內容；S3 來源欄有對應依據。

**F3 [P1] 內容核對報告會把私有主程式的內部細節帶進公開儲存庫，而 AC13 刻意不檢查**
- 位置：spec S3、AC13；ticket 03 步驟 3、ticket 04 步驟 4
- 證據：S3 要求報告的對照欄寫「主程式檔案與正式版 SHA」，報告放在 `docs/harness/product-docs/verification/`，會公開；AGENTS.md 規定「不要把它的內部細節寫進本儲存庫」；AC13 明寫「harness 文件不在此限」。
- 失敗情境：核對員依 S3 寫出主程式的檔案路徑甚至程式片段，推送後公開；AC13 抓不到。
- 要改：公開報告的對照欄只寫讀者看得到的證據（畫面文字、操作路徑、核對時的正式版日期）；檔案層級的對照留在主程式儲存庫（與 intent 的內部紀錄同做法）或本機不提交的檔案。AC13 的 `git grep` 擴大到整個儲存庫（排除 AGENTS.md 事實來源段），並加搜 `lib/`、`components/`、`app/(`、`.ts:` 等。
- 驗證：G4 跑擴大後的 grep 無輸出。

**F4 [P1] 公開的 Git 歷史已含個人 Gmail 地址**
- 位置：首個 commit `5fe8c1f`；spec K2、AC13
- 證據：`gh repo view` 顯示 PUBLIC 且 `origin/main` 已推；該 commit 作者為 [個人信箱]；本機 `git config user.email` 目前是 GitHub noreply，但首個 commit 未用它。K2／AC13 都沒有檢查 commit 作者資料。
- 失敗情境：個人信箱永久公開；之後 commit 與部署越多，改寫歷史越麻煩。
- 要改：請 owner 決定是否趁只有一個 commit 時改寫並強推（對外動作，需 owner 授權）；K2 加一條機械檢查：`git log --format='%ae%n%ce' | sort -u` 只能出現 noreply 地址。
- 驗證：G4 證據貼出該指令輸出。

**F5 [P2] 上一則／下一則會連到外部連結，AC4 也沒寫清每頁應為何**
- 位置：spec R6、R8、AC4；ticket 04
- 證據：Starlight 0.42.6 `utils/navigation.js` 的 `getPrevNextLinks` 以 `flattenSidebar` 攤平側欄，外部 `link` 項目也算。最後一篇「安裝並第一次產卡」的「下一則」會變成「開啟 Mnemo-Card」（外部網站）。R6 也沒說首頁是否列入側欄（影響第一篇有沒有「前一則」）。
- 要改：spec 寫明每頁上下則（例如最後一篇前言設 `next: false`，屬前言設定，不是覆寫元件），寫明首頁是否在側欄；AC4 改為斷言每頁上下則的確切文字與網址。
- 驗證：Playwright 逐頁斷言。

**F6 [P2] AC7 鍵盤條件照字面會測不過，且漏了 intent 要求的兩項**
- 位置：spec AC7；ticket 01、02
- 證據：Starlight zh-TW 的跳轉連結文字是「跳到內容」，不是「跳到正文」；連結指向 `#_top` 的 h1（無 tabindex），按 Enter 後 `document.activeElement` 不會在正文內。手機選單是原生 popover（`popovertarget`），天生支援 Esc，「不支援 Esc 記為限制」的但書用不到。intent 品質線要求鍵盤能操作「側欄、文章目錄」，AC7 未列。另外 zh-TW 的 `heading.anchorLabel` 是英文 "Section titled …"（螢幕閱讀器會念英文），ticket 01 要列出落回英文的字串時應列入。
- 要改：斷言改為「網址變為 `#_top`，下一次 Tab 停在 `main` 內的元素」；文字以實際標籤為準（若要「跳到正文」就依 R3 覆寫字串）；加入「Tab 可到側欄連結」「手機版文章目錄 `<details>` 可用鍵盤展開」。
- 驗證：npm test。

**F7 [P2] 主色 #0071E3 在深色主題下達不到 AA**
- 位置：spec R4；ticket 02
- 證據：#0071E3 對 Starlight 深色背景（約 #17181c）對比約 3.8:1，文字需 4.5:1；Starlight 深色主題連結文字用 `accent-high`。
- 失敗情境：照字面「兩種主題的主色都要 AA」，深色主題必被 axe 標違規，到 AC8 才發現回頭重改。
- 要改：寫明深色主題用同色系較淺的 `accent-high`，確切值由 Builder 決定並記錄；淺色維持 #0071E3（對白約 4.7:1，可過）。
- 驗證：AC8 的 axe 在深色主題下無 color-contrast 違規。

**F8 [P2] 部署工作流應固定作業系統版本**
- 位置：spec R14
- 證據：主程式的紀錄為避開 2026-10-19 起 `ubuntu-latest` 改成 Ubuntu 26，主程式已固定 `ubuntu-24.04`。本站 G7 很可能落在那天之後，`playwright install --with-deps chromium` 不一定支援新版。
- 失敗情境：G7 才在 CI 紅燈。
- 要改：R14 加 `runs-on: ubuntu-24.04`。
- 驗證：讀 YAML。

**F9 [P2] G7 步驟順序錯誤**
- 位置：spec §5 G7、K3
- 證據：G7 寫先推 main 再到 Settings → Pages 設 Source 為 GitHub Actions。Pages 尚未啟用時 `actions/deploy-pages` 會失敗（找不到 Pages 網站），之後設定 Source 也不會自動重跑。另外儲存庫已在 GitHub，G7 前若推送 main，工作流會跑起來：Pages 未啟用就紅燈，已啟用就提早部署半成品。
- 要改：G7 改為：owner 先設 Source → 再推送（或設定後手動觸發 `workflow_dispatch`）→ S4；並寫明 G7 前不推 main（或接受中途紅燈）。
- 驗證：G7 證據中第一次 run 為綠。

**F10 [P3] 技能版本未釘住，「技能檔名」界線不清**
- 位置：spec R10、ticket 04 步驟 4
- 證據：技能儲存庫無 v0.2.0 tag，`plugin.json` 為 0.2.0、HEAD `93d60d7`；檔案在 `skills/mnemo-study-cards/SKILL.md`，不在 ticket 04 暗示的根目錄。R10 禁止「技能內部的檔案名稱」，但讀者匯入必須知道 `pack.md`；草稿也提到 JSON 報告（`content-review.json`）。
- 要改：S3 釘 commit `93d60d7` 與正確路徑；R10 寫明可提的檔名只限讀者拿到的交付檔（`pack.md`，及「不要把 JSON 報告當匯入檔」的提醒），不可提的是 `run.mjs`、`content.json`、檢查規則名稱等。

## 已查證、沒問題
- 側欄 `slug` 項目會自動加 `base`；slug 錯誤時建置直接失敗，所以 03／04 才加側欄項目的安排正確。
- hero 按鈕與 LinkCard 的 `href` 不會自動加 `base`；R2「用相對連結、不寫無 base 的根路徑」已涵蓋，AC3 也會抓到。
- `astro preview` 下搜尋可用（Starlight 明示需先建置再預覽）。
- 產品網址：`/app` 未登入會轉到 `/auth?next=/app`，首頁 200。
- 書本 Logo 確為 Lucide `BookOpen`；#0071E3 與 Noto 字型與主程式一致。
- 工作票先後關係正確，ticket 01 本身可從頭到尾打通。

## 結論：NEEDS FIXES

F1、F2 需 owner 先做內容決定；F3、F4 是公開儲存庫的外洩風險（F4 改寫歷史需 owner 授權）；F5–F10 由 Builder 直接改規格。依 owner 裁定，修完不必複審。
