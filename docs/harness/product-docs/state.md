# product-docs — harness state

```harness
slug: product-docs
slice: "1"
stage: BUILDING
holder: builder
tier: LOW
gates_passed: [G1, G2A, G2B]
open_p0p1: 0
gate: G2A
round: 1
```
本區塊是唯一的狀態事實；下方文字都不構成授權。

- tier reason：靜態文件站，不涉及認證、資料庫、資料刪除、匯入、付款或同步。
- branch：`main`（G7 前不推送，K3）
- intent：`docs/harness/product-docs/intent.md`（owner G1 2026-10-14）
- spec：`docs/harness/product-docs/spec.md`（G2A＋G2B r1 合審，修完關閉，2026-10-14）
- tickets：`docs/harness/product-docs/tickets/` 01–04（同上）
- what is left：ticket 01–03 驗收 PASS；ticket 04 已上站（本機）、S3 兩份全 PASS，待全新子代理驗收；之後 G4。
- blockers：none

## Gates
- [x] G1 intent approved by human（2026-10-14）
- [x] G2A spec reviewed（fresh opus r1 NEEDS FIXES → F1–F10 修完，依 owner 裁定不複審；reviews/product-docs-s1-g2a-r1.md）
- [x] G2B tickets reviewed（同一輪合審）
- [ ] G3 conditional checkpoint
- [ ] G4 verified
- [ ] G5 accepted by human
- [ ] G6A task review（Codex，與 G6B 合一輪）
- [ ] G6B code review
- [ ] G7 released

## Evidence (G4)
| Acceptance criterion | Check | Result/output ref |
| --- | --- | --- |

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
