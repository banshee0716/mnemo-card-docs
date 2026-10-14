# product-docs — harness state

```harness
slug: product-docs
slice: "1"
stage: VERIFIED
holder: reviewer
tier: LOW
gates_passed: [G1, G2A, G2B, G4]
open_p0p1: 0
gate: G6A
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：靜態文件站，不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送，K3）
- intent：`docs/harness/product-docs/intent.md`（owner G1 2026-10-14）
- spec：`docs/harness/product-docs/spec.md`（G2A＋G2B r1 合審，修完關閉，2026-10-14）
- tickets：`docs/harness/product-docs/tickets/` 01–04（同上）
- what is left：G6A＋G6B 一輪 Codex 合審（packet：handoff-1-final-review.md，範圍 fa5a923...HEAD），等 owner 在本儲存庫發動；之後 G5、G7。
- blockers：GitHub 儲存庫待 owner 刪除後重建（見 § Decisions by human 2026-10-14 外洩處理）。

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [x] G2A spec reviewed（fresh opus r1 NEEDS FIXES → F1–F10 修完，依 owner 裁定不複審；reviews/product-docs-s1-g2a-r1.md）
- [x] G2B tickets reviewed（同一輪合審）
- [x] G3 conditional checkpoint（LOW 不適用）
- [x] G4 verified（全新 opus 子代理，乾淨 clone @ d6fc960，2026-10-14）
- [ ] G5 accepted by human
- [ ] G6A task review（Codex，與 G6B 合一輪）
- [ ] G6B code review
- [ ] G7 released

## Evidence (G4)
| Acceptance criterion | Check | Result/output ref |
| --- | --- | --- |
| AC1 | 乾淨 clone `npm ci && npm run build`（Node 24.21.0） | EXIT=0；dist 四頁＋pagefind（zh-tw page_count 4） |
| AC2、AC3、AC6、AC8、AC9 | `npm test`，四頁各跑（AC8 淺色＋深色） | 43 passed @ d6fc960 |
| AC4 | 側欄順序與外部連結、三篇文章目錄、R8 上下篇逐頁斷言 | PASS；調換側欄群組、拿掉 `next: false` 時測試變紅 |
| AC5 | 鍵盤開搜尋：「熟悉度」→第一篇；「卡包」→技能文章 | PASS |
| AC7 | 跳轉連結、桌機側欄、手機選單 Enter／Esc、手機文章目錄、搜尋 | PASS（G4 後補強：Tab 走到手機目錄與文章連結，43 passed） |
| AC10 | 第一篇禁用字與步驟句；第三篇下載段一句、無連結無程式碼、無待補待確認 | PASS；加連結時測試變紅 |
| AC11 | verification/ 三份報告 | first-use 62 PASS；mnemo-study-cards 35 PASS；getting-started 52 PASS；FAIL 皆 0 |
| AC12 | 部署與線上冒煙 | G7 時執行 |
| AC13 | spec 的 `git grep`；提交者身分 | 無輸出；只有 noreply 地址 |

## Deviation log

## Decisions by human
- 2026-10-14：G1 裁定見 intent.md 第 1–9 條。
- 2026-10-14：本儲存庫由 owner 授權建立；harness 文件遷入，之後的工作階段在此開。
- 2026-10-14：第三篇以〈Cognitive offloading〉為輸入示例，不提供產出的卡片（G2 F2）。
- 2026-10-14：授權改寫歷史並強制推送，把個人信箱換成 noreply（G2 F4）。

- 2026-10-14：ticket 03 第一篇文案同意上站；帳號事實（研究者提供電子郵件與密碼、忘記密碼聯絡研究者）仍成立；
  第 1 步補「建立帳號」分頁不開放使用的提醒（附註 A），第 7 步補「已精通」只代表排程走完的說明（附註 C）。
- 2026-10-14：ticket 04 第二篇〈認識 mnemo-study-cards〉與第三篇〈安裝並第一次產卡〉文案同意上站
  （含依核對附註修正的 5 處）。
- 2026-10-14：owner 決定先跑 G6（一輪 Codex 合審）再做 G5 驗收，讓 G5 看到最終版本。
- 2026-10-14：owner 裁定移除側欄「Mnemo-Card」外部連結群組（開啟 Mnemo-Card、產品首頁），側欄只放文章（spec R6、AC4 已改）；
  並要求參考產品官網首頁與 DDIA 文件站（ddia.vonng.com/tw/ch2/）整理介面；並要求慎重處理 G2 審查原文外洩。
- 2026-10-14：外洩處理。owner 裁定刪除 GitHub 上的儲存庫並重建，遠端 main 只放到原本公開的位置
  （乾淨版 fa5a923，對應舊 492e030，不含工作流、不觸發部署）。理由：查證 GitHub 仍可用 SHA 打開被強制推送取代的
  舊提交（含個人信箱的 5fe8c1f、含主程式內部細節的 26123a3），強制推送無法清除。

## Decisions by Builder
- Builder: 2026-10-14 以 `npm view` 查證並鎖定：`astro` 7.3.8、`@astrojs/starlight` 0.42.6、
  `sharp` 0.35.5、`@playwright/test` 1.64.0、`@axe-core/playwright` 4.13.0。專案由 `create-astro` 5.2.6
  的 `starlight` 範本產生後只取設定檔，不留範例文章與社群連結。
- Builder: `.npmrc` 另加 `engine-strict=true`，讓 `engines.node: 24.x` 在其他 Node 版本直接安裝失敗。
- Builder: `editLink` 只在設定 `baseUrl` 時出現，因此不設定即為關閉；`lastUpdated: false` 明寫。
- Builder: `ignore-scripts=true` 下建置正常：sharp 走預建的平台套件，Pagefind 走平台二進位套件，
  皆不需安裝腳本，無 deviation。
- Builder: `npm audit` 有 10 筆 moderate，全部源自同一個 `postcss-selector-parser` 6.1.4
  （GHSA-rj75-hqrm-r3gf，Starlight → expressive-code → postcss-nested）。只在建置時處理本站自有 CSS，
  外部無法提供輸入；修正版是 7.x，跨主版本 override 風險高於弱點本身，暫不處理，待上游更新。
- Builder: R3 覆寫（`src/content/i18n/zh-TW.json`）：`heading.anchorLabel`（原為英文
  “Section titled …”）、`page.draft`（原為英文），以及全部 10 個 `pagefind.*` 字串（Pagefind 表單的
  `aria-label` 原為英文 “Search this site”）。其餘 Starlight 繁中字串保持原樣。
- Builder: Astro 7 偵測到 AI 代理時會把 `astro preview` 自動放到背景，導致 Playwright 判定伺服器提早結束；
  `webServer` 指令加 `--ignore-lock` 強制前景執行。
- Builder: 工作流 action 版本（2026-10-14 查各 action 最新 release）：`actions/checkout@v7`、
  `actions/setup-node@v7`、`actions/upload-pages-artifact@v5`、`actions/deploy-pages@v5`。
  Astro 官方範例同為 checkout@v7、deploy-pages@v5；GitHub Docs 與 README 仍示較舊主版本，取最新者。
  不用 `withastro/action`，因為建置與部署之間要跑測試。
- Builder: ticket 01 的 favicon 暫用範本內建的 `public/favicon.svg`，由 ticket 02 依 R4 換成書本圖示。
- Builder: ticket 01 驗收由全新 sonnet 子代理在乾淨 clone 執行，全部 PASS（AC1 exit 0、`npm test` 6 passed、
  R14 逐項、K2、故意加入無 base 連結時 AC3 會變紅）。
- Builder: Logo 取 `lucide-static` v0.553.0 的 `book-open`，與主程式導覽列使用的 lucide-react 0.553.0 同版同圖形
  （最新 1.56.0 已改圖形，不採用）。線條色 #0071E3；ISC 授權聲明放在 SVG 內的註解（建置後保留）。
  `public/favicon.svg` 用同一圖示。深色導覽列上對比 3.22:1，達非文字圖形 3:1。
- Builder: 字型用 fontsource 的可變字重版 `@fontsource-variable/noto-sans-tc` 與 `noto-serif-tc` 5.3.1
  （2026-10-14 `npm view` 查證；OFL-1.1）。靜態版每套約 70–80 MB，可變版約 5–6 MB，以 unicode-range 分片按需下載。
  標題（頁面 h1 與內文 h1–h6）用 Noto Serif TC。
- Builder: 主色變數（spec R4）。淺色：accent #0071E3（對白底 4.70:1）、accent-high #004A99、accent-low #D9EAFC。
  深色：accent #0071E3、accent-high #66B0FF（對頁面底 7.79:1、對側欄底 6.63:1）、accent-low #00264F
  （疊在 accent-high 上 6.63:1）。兩種主題 axe 皆無 serious／critical。
- Builder: 首頁維持 doc 版型（非 splash），讓側欄的「Mnemo-Card」連結在首頁也看得到；「開啟 Mnemo-Card」用
  內建 `LinkCard`。「先讀哪一篇」與文章入口由 03／04 補。沒有任何元件覆寫。
- Builder: 手機選單是原生 Popover，Esc 由瀏覽器關閉；測試以 `:popover-open` 斷言。搜尋測試先等 Pagefind
  表單插入再按 Tab，避免時序造成的假紅燈。
- Builder: ticket 02 驗收由全新 sonnet 子代理在乾淨 clone 執行，全部 PASS（12 passed、Logo 路徑與主程式逐字相同、
  對比計算、截圖檢視、改錯產品首頁網址時測試變紅）。
- Builder: ticket 03 順序調整：先由全新 opus 子代理做 S3 核對、修 FAIL、複核，再送 owner 審文案，讓 owner 看到的
  是核對過的版本。owner 若改動涉及產品操作的句子，該句再複核。核對對照正式版 main（STATUS 2026-10-11 發布），
  以 `git show` 讀取，未 checkout。初核 3 FAIL（「基礎概念卡」、背面翻回正面的方式、手機簡稱）→ 修正 → 複核 PASS。
- Builder: 公開報告初版寫到登入頁的安全機制與寄信能力，違反 S3；已請同一核對者移除，該觀察只留內部報告。
- Builder: S3 內部報告依 spec 寫在主程式儲存庫 `docs/harness/product-docs/content-check-first-use.md`，
  為未追蹤的新檔，未 add／commit，未動主程式任何既有檔案（K1 只新增這個 spec 指定的檔）。
- Builder: owner 補的兩句（建立帳號分頁、已精通）由同一核對者複核 PASS；公開報告 62 PASS／0 FAIL／13 非產品說法。
  `first-use.mdx` 與 `copy/first-use.md` 內容逐字相同（只多 `next: false`）。
- Builder: 第一篇暫設 `next: false`：第二篇在 ticket 04 才存在，否則 Starlight 攤平側欄會把下一篇指向外部連結
  「開啟 Mnemo-Card」。ticket 04 移除此設定並補 R8 完整斷言。文末提到第二、三篇的句子也在 04 加連結。
- Builder: AC3 的連結檢查加上頁內錨點驗證（`#…` 必須對應頁面上的 id）。
- Builder: ticket 03 驗收由全新 sonnet 子代理在乾淨 clone 執行，全部 PASS（24 passed；加入「驗證信」與錯誤錨點時測試變紅）。
- Builder: ticket 04 同樣先 S3 再送 owner。兩篇初核皆 0 FAIL；依核對附註改 5 處（第三篇：預覽後按「下一步」、
  標題在「來源」步驟修改、頁碼以期刊版為準；第二篇：章節為整理單位的說法、「不會另外遮住概述」），複核皆 PASS。
  終版：第二篇 PASS 35／FAIL 0；第三篇 PASS 52／FAIL 0。UCL 典藏頁被機器人驗證擋下，核對者改以公開書目索引確認。
- Builder: 第一篇移除暫時的 `next: false`，文末兩篇名稱補上相對連結（文字不變）。首頁加 mnemo-study-cards 兩篇入口。
  上下篇測試改成依 spec R8 表逐頁斷言文字與網址。
- Builder: G4 驗證者的 P3 建議中，AC7 兩項已補強（手機文章目錄改用 Tab 走到再 Enter；側欄改斷言走到文章連結）。
  其餘 P3 不處理：AC3 不遞迴檢查 CSS `url()` 字型分片（四頁互相連結，頁面層級已完整）；文章目錄只在桌機斷言；
  建置時 Starlight 的 404 內容項警告（自動產生 404 頁，無影響）。
- Builder: G6 正式審查前由全新 opus 子代理預審（範圍 73eef06..f46d100）：G6A、G6B 皆 APPROVE AFTER FIXES，
  1 個 P1、2 個 P2、1 個 P3。處理如下：
  - P1：G2 審查原文含主程式的檔案路徑與帳號、寄信設定，且已在公開的 origin/main。已將公開檔改以
    「[主程式內部細節]」取代，未刪節原文存於主程式儲存庫 `docs/harness/product-docs/`（未追蹤）；spec R9 的
    寄信能力說明改為讀者層級說法。**歷史仍含原文，是否改寫歷史並強制推送待 owner 決定（K3）。**
    spec AC13 的搜尋擴大到全儲存庫（原範圍漏掉 reviews／spec），並要求路徑樣式後接檔名；以原始審查檔驗證會命中 4 行。
  - P2：Playwright 會重用 4321 上手動開的 preview，可能測到別的工作樹。改用獨立的 4399 埠（`PLAYWRIGHT_PORT`），
    `reuseExistingServer: false`。G4 與各票驗收當時都已確認 4321 空著，證據仍有效。
  - P2：AC10 斷言太窄。改為第一篇全文禁止「「忘記密碼？」」，提到「建立帳號」的句子必須含「不開放使用」；
    以預審者的兩個變異驗證會變紅。
  - P3（不處理）：`copy/` 與上站頁面重複保存。`copy/` 是 owner 核准與 S3 核對的紀錄；之後改動文章時須同步更新
    copy 與核對報告，列為已知限制。
- Builder: 介面整理（owner 2026-10-14 要求，參考產品官網首頁與 DDIA 文件站）。只改 CSS、Logo 與首頁版型，不覆寫元件、
  不動文章文字：
  - 標題層級：頁面標題 2.25rem 明體 > 段落標題（h2）1.5rem 明體、上方細線分節 > 小節標題（h3）1.1875rem 黑體；
    手機各降一級。原本 h2 為 2.19rem，與頁面標題幾乎同大。
  - 頂列：Logo 改為與官網相同的藍底白色書本圓角方塊（同一 lucide 0.553.0 圖形，ISC 聲明保留），站名改深色。
  - 側欄與目錄：群組名稱縮小淡化、移除縮排線；目前頁面改為淡藍圓角底配深藍字（原為整塊深藍底）；目錄左側細線、
    目前段落以主色標示。
  - 首頁改用 Starlight splash 版型的 hero（spec R7 允許）：明體大標、說明、兩顆膠囊按鈕（第一次使用、開啟 Mnemo-Card），
    下方沿用原有段落與文章卡片；首頁因此沒有側欄與目錄，原本測在首頁的側欄鍵盤測試改到文章頁。
  - 卡片、上下篇、表格統一圓角與淡邊框。新增 `--mc-active-fg`、`--mc-muted` 讓兩種主題的對比都達 AA（axe 驗證）。
  - 截圖：`evidence/ui-*.png`（淺色、深色、手機）。

- Builder: 歷史改寫：在獨立 clone 以 `git filter-branch --tree-filter` 對全部 15 個提交套用相同替換（只在原文存在時替換），
  驗證：最後的 tree 與改寫前相同、提交數與訊息與日期相同、身分只有 noreply、全歷史搜尋只剩無害命中
  （標題中的「Gmail」一詞、spec 與 ticket 中的搜尋指令本身）。本機 main 已切到新歷史；舊歷史打包為本機備份
  （scratchpad，不留分支）。新舊 SHA 對照：73eef06 不變；26123a3→725f8e8、117f21f→1b82f6e、492e030→fa5a923、
  fe28821→2835059、1d67eab→197ba22、51e18fa→1a0bf7d、b89d3e3→911f255、65a70d4→bdccda4、cea85bf→d6fc960、
  67cab0c→f46d100、b2abc51→61e3dbb、5d4d03a→7d212c4、9af07a4→8ab5910、350433e→1c900ba。
  本檔較早段落提到的舊 SHA 依此表對照。
- Builder: gh 權杖沒有 `delete_repo` 權限，刪庫由 owner 在 GitHub 設定頁執行；重建（同名、公開、同描述與功能開關）與推送 fa5a923 由 Builder 執行。
