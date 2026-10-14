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
- what is left：ticket 01 已由全新子代理驗收 PASS；ticket 02 完成待驗；下一步 ticket 03（需 owner 審文案）。
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
