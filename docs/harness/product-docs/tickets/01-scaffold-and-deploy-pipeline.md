# 01：Starlight 專案骨架、測試框架與部署工作流（端到端打通）
contract-freezing: yes（`site`／`base`、slug 規則、測試框架與工作流形狀；後續票沿用）
depends-on: []

## 要做什麼

spec R1、R2、R3、R5（不覆寫元件、關閉 editLink 與 lastUpdated）、R13、R14、K2、K3。
本票不推送；G7 之前不推 `main`（K3）。

1. 以 `npm view` 查證 `astro`、`@astrojs/starlight`、`@playwright/test`、`@axe-core/playwright`
   的最新穩定版，鎖定精確版本，並把版本與日期記入 `state.md` § Decisions（`Builder:`）。
   用 Astro 官方的 Starlight 起始方式建立專案，但不保留範例文章。
   再寫 `.npmrc`、`engines.node`，以及 `dev`／`build`／`preview`／`test` 腳本。
2. `astro.config.mjs`：設定 `site`、`base`、根語系 `zh-TW`、標題「Mnemo-Card 文件」，
   關閉 `editLink` 與 `lastUpdated`。
3. 首頁先放一段真實簡介（這個站是什麼、還在建置中），不放假連結。側欄暫時沒有項目（首頁不列入側欄，spec R6）。
4. `playwright.config.ts`：`webServer` 跑 `npm run build && npm run preview`，`baseURL` 含 `base`，
   只用 chromium。`tests/site.spec.ts` 先涵蓋首頁的以下項目：
   - AC2：首頁 200、`lang`、標題。
   - AC3：爬首頁的站內連結與資源。
   - AC6：375px 寬度沒有橫向捲動。
   - AC8：首頁在淺色與深色主題下的 axe。
   - AC9：介面是繁體字串。

   爬連結和 axe 的輔助函式寫成可重用，讓後續票只需加頁面清單。
5. `.github/workflows/deploy.yml` 依 R14 撰寫。
6. 確認 `ignore-scripts=true` 下，Pagefind 與 Astro 的影像處理依賴仍能建置。
   若不能，停下來記 deviation，不得關閉 `ignore-scripts`。

## 測試接縫

S1、S2（首頁部分）。

## 驗收條件

- [ ] AC1：`rm -rf node_modules dist && npm ci && npm run build` exit 0，`dist/pagefind/` 存在
- [ ] `npm test` 全綠（首頁的 AC2、AC3、AC6、AC8、AC9）
- [ ] 工作流 YAML 符合 R14：權限只有三項、沒有 secret、測試通過後才部署
      （以閱讀確認；實際部署在 G7）
- [ ] 若 Starlight 對 `zh-TW` 有字串落回簡體或英文，已依 R3 在 `src/content/i18n/zh-TW.json`
      覆寫，並寫明是哪些字串（至少包含 `heading.anchorLabel`，見 spec AC9）
- [ ] K2：`git log --format='%ae%n%ce' | sort -u` 只輸出 noreply 地址
- [ ] AGENTS.md 的「指令」段與實際腳本一致

示範：`npm run preview` 後開 `http://localhost:4321/mnemo-card-docs/`，
看到繁中介面的「Mnemo-Card 文件」首頁，搜尋按鈕標示為「搜尋」。
