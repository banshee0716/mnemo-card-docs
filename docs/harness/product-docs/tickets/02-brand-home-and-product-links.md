# 02：品牌外觀、文件首頁與返回產品連結
contract-freezing: no
depends-on: [01]

## 要做什麼

spec R4、R5、R6（只做「Mnemo-Card」外部連結群組）、R7（首頁架構；文章入口在 03／04 加）。

1. `src/assets/logo.svg`，依 R4 製作。
2. 以 fontsource 套件載入 Noto Sans TC 與 Noto Serif TC，同樣用 `npm view` 查證後鎖版。
   在 `src/styles/custom.css` 設定 `--sl-font`、標題字型與淺色／深色兩種主題的 accent 變數。
   兩種主題的主色與背景對比都要達 AA。
3. 側欄加上「Mnemo-Card」群組，內含兩個外部連結（R6）。
4. 首頁依 R7 撰寫「這是什麼、給誰讀」，以及「開啟 Mnemo-Card」連結。
   三篇文章的入口由 03／04 補上，本票不放指向尚未存在頁面的連結。
5. 測試加入：
   - AC4 的外部連結部分：兩個連結的網址與文字正確。
   - AC7 的「跳到正文」，以及手機寬度下用 Enter 打開選單。
   - 首頁在新樣式下重跑 AC6、AC8。

## 測試接縫

S1、S2。

## 驗收條件

- [ ] `npm run build` exit 0；`npm test` 全綠（新增的 AC4 外部連結、AC7 部分，以及 AC6、AC8 重跑）
- [ ] 沒有任何 Starlight 元件覆寫（`astro.config.mjs` 沒有 `components:`），
      否則必須有 `Builder:` 決定紀錄
- [ ] 字型、Logo、主色在淺色與深色主題下都正確顯示（附兩張本機截圖到
      `docs/harness/product-docs/evidence/`，只用示範內容）

示範：預覽首頁看到書本 Logo 與「Mnemo-Card 文件」，標題是明體、內文是黑體，主色為藍色。
側欄底部有「開啟 Mnemo-Card」與「產品首頁」。
