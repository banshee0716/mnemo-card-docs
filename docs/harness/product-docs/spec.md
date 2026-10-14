# product-docs — spec

依據：`intent.md`（owner G1 裁定 2026-10-14）。等級 LOW。工作票在 `tickets/`。

## 1. 需求

**專案與建置**

- **R1**：Astro + Starlight 專案位於本儲存庫根目錄。版本取 ticket 01 當下 npm 上的最新穩定版，
  以 `npm view` 查證後鎖定精確版本，並把版本與查證日期寫入 `state.md` § Decisions
  （2026-10-14 查到 `astro` 7.3.8、`@astrojs/starlight` 0.42.6，僅供參考）。
  - Node 24；`package.json` 的 `engines.node` 寫 `24.x`。
  - `.npmrc` 設 `ignore-scripts=true` 與 `save-exact=true`；提交 `package-lock.json`。
  - 腳本：`dev`、`build`、`preview`、`test`。不得有 `pre*`／`post*` 腳本。
- **R2**：`site: 'https://banshee0716.github.io'`、`base: '/mnemo-card-docs'`。
  所有站內連結與資源都必須在 `base` 之下可用。內容中的站內連結用相對連結，或在 Starlight 設定裡
  用 slug；不得寫無 `base` 的根路徑連結。換自訂網域時只改 `site`／`base` 兩處。
- **R3**：單一語言根語系 `locales: { root: { label: '繁體中文', lang: 'zh-TW' } }`。
  建置後確認介面文字是繁體（例如「搜尋」而非「搜索」）。若有字串落回簡體或英文，只在
  `src/content/i18n/zh-TW.json` 覆寫該字串，不覆寫元件。

**外觀**

- **R4**：網站標題「Mnemo-Card 文件」。Logo 與產品導覽列的品牌標誌相同，是 Lucide 的
  `book-open` 圖示（ISC 授權）。取用 `lucide-static` 或官方 SVG，存成 `src/assets/logo.svg`，
  著主色；`replacesTitle: false`，保留文字標題。
  - 字型：內文 Noto Sans TC、標題 Noto Serif TC，以 fontsource 套件經 `customCss` 載入，
    並設定 `--sl-font`。
  - 主色：`#0071E3`，透過 Starlight 的 accent CSS 變數設定。
  - 保留 Starlight 內建的淺色／深色切換。淺色主題用 #0071E3（對白底約 4.7:1）。深色主題的
    連結與強調文字（`accent-high`）改用同色系、較淺的藍，確切值由 Builder 決定並記在
    `state.md`；兩種主題的文字對比都要達 AA（4.5:1）。（G2 F7）
- **R5**：不覆寫 Starlight 元件（`components` overrides）。若某需求非覆寫不可，先在 `state.md`
  記 `Builder:` 決定與理由，且覆寫只能包住原元件，不能複製改寫。
  - 不啟用 `editLink`。
  - `lastUpdated: false`，因為淺層 clone 下日期不準。
  - 不放社群連結。

**導覽與頁面**

- **R6**：網址與側欄如下。只列出已存在的文章，不建空分類或待補頁。

  | 頁面 | slug（`base` 之後） | 側欄群組 |
  | --- | --- | --- |
  | 文件首頁 | `/` | （首頁） |
  | 第一次使用 Mnemo-Card | `first-use/` | 開始使用 |
  | 認識 mnemo-study-cards | `skills/mnemo-study-cards/` | mnemo-study-cards |
  | 安裝並第一次產卡 | `skills/mnemo-study-cards/getting-started/` | mnemo-study-cards |

  文件首頁不列入側欄，由頁首的 Logo 與標題回到首頁。

  側欄只放文章，不放外部連結（owner 2026-10-14 裁定移除原本的「Mnemo-Card」外部連結群組）。
- **R7**：文件首頁說明三件事：這個站是什麼、給誰讀、先讀哪一篇。另有三篇文章的入口，以及一個
  「開啟 Mnemo-Card」連結。首頁用 Starlight 內建元件（例如 `LinkCard`／`CardGrid`，或 splash
  模板的 `hero.actions`），不寫自訂版型。
- **R8**：文章頁使用 Starlight 預設的文章目錄、上一篇／下一篇與手機選單。
  Starlight 會把側欄攤平來算上下篇，外部連結也算在內，所以各頁上下篇固定如下（G2 F5）：

  | 頁面 | 上一篇 | 下一篇 |
  | --- | --- | --- |
  | 第一次使用 Mnemo-Card | 無 | 認識 mnemo-study-cards |
  | 認識 mnemo-study-cards | 第一次使用 Mnemo-Card | 安裝並第一次產卡 |
  | 安裝並第一次產卡 | 認識 mnemo-study-cards | 無（前言設 `next: false`） |

  只用前言設定，不覆寫元件。

**內容**

文案基礎為 Mnemo-Card 主程式儲存庫的 `docs/plans/2026-10-12-mnemo-card-user-guide-v2.md`。
編輯附錄不上站。三篇共同主軸：AI 整理、閱讀材料、學習者自己回想與解釋是不同活動；
不把翻面、產卡、匯入或評分成功當作學習成效。

- **R9**：第一篇「第一次使用 Mnemo-Card」取自 v2 第一篇。
  - 第 1 步改為：一句「目前暫不開放註冊」，接著寫明受邀者從研究者取得登入用的電子郵件與密碼，
    從產品首頁的「登入」進入工作區；忘記密碼請聯絡提供帳號的研究者。不出現建立帳號或驗證信的步驟，
    也不教讀者使用登入頁的「忘記密碼？」（受試者的密碼由研究者協助處理）。
    依據：主程式 2026-09-07 的帳號安排，於 ticket 03 文案送 owner 時一併確認。（G2 F1）
  - 其餘步驟（建立牌組、載入範例卡、第一次練習、記錄熟悉度、安排下一次練習）逐步對照主程式
    `STATUS.md` 記錄的正式版 main 核對，按鈕名稱與畫面文字以程式為準。
- **R10**：第二篇「認識 mnemo-study-cards」取自 v2 第二篇。
  - 描述以技能 v0.2.0 為準：`/mnt/d/mnemo-study-cards-skill` 的 commit `93d60d7`，
    主檔 `skills/mnemo-study-cards/SKILL.md` 與同層 `references/`。
  - 不寫主程式與技能說法不一致的卡型定義：凡是兩邊不一致的卡型說法，不下定義，只寫兩邊一致的部分。
  - 可提的檔名只有讀者拿到的交付檔 `pack.md`，以及「不要把 JSON 報告當匯入檔」這句提醒。
    不寫技能內部的腳本、中間檔或驗證規則名稱（例如 `run.mjs`、`content.json`）。（G2 F10）
  - 文末連到第三篇。
- **R11**：第三篇「安裝並第一次產卡」寫成流程說明，依序為：
  1. 下載與安裝：只有一句「目前尚未開放下載」，不給連結、指令、版本、平台或安裝路徑。
  2. 準備論文與學習目標。
  3. 提出產卡要求。
  4. 檢查產出。
  5. 匯入 Mnemo-Card。
  6. 開始第一次學習。

  其他規定：
  - 以 Risko 與 Gilbert（2016）〈Cognitive offloading〉為輸入示例（owner 2026-10-14）：可放書目、
    DOI 與作者公開全文／UCL 典藏的外部連結、示例的學習目標與產卡提示，以及針對這篇論文的檢查重點。
    論文內容一律轉述，不複製論文正文，不重新散布 PDF。
  - 不放任何產出：不放產好的卡片、卡包、牌組數、卡片數、截圖或「會得到什麼」的預告。
  - 草稿的「遇到問題時」一節與「待補」「待確認」佔位句都不上站。（G2 F2）
  - 第 2～4 步對照技能 v0.2.0 的流程；文中關於論文內容的說法對照論文本身。
  - 第 5～6 步對照主程式的匯入與學習畫面。
  - 不放示範論文的實際產物、牌組數、卡片內容或截圖。
  - 不寫「照著做必定得到某結果」。
- **R12**：文章不得含主程式內部檔案路徑、資料表、環境設定或安全機制細節；只寫讀者看得到的畫面與操作。
- **R13**：搜尋使用 Starlight 內建 Pagefind，首頁與三篇都納入索引。

**部署**

- **R14**：`.github/workflows/deploy.yml`。
  - 觸發：push 到 `main`，以及 `workflow_dispatch`。
  - 流程：安裝（`npm ci`）、`npm run build`、安裝 Playwright 的 chromium、`npm test`。全部通過才
    上傳 Pages artifact，並由 `actions/deploy-pages` 部署。
  - `runs-on: ubuntu-24.04`（與主程式一致，避開 2026-10-19 起 `ubuntu-latest` 換版）。（G2 F8）
  - 權限只給 `contents: read`、`pages: write`、`id-token: write`。
  - 設 `concurrency` 群組，避免兩次部署重疊。
  - 不使用任何 secret；不使用 `pull_request_target`。
  - action 版本取 ticket 01 當下官方文件所示的主版本。
  - 不提交 `public/CNAME`。

## 2. 限制

- **K1**：不修改 Mnemo-Card 主程式儲存庫的任何檔案（讀取核對除外）。
- **K2**：公開儲存庫規則見 `AGENTS.md`；提交前檢查 diff 是否含 R12 禁止的內容或任何憑證。
  提交者身分只能是 GitHub noreply 地址：`git log --format='%ae%n%ce' | sort -u` 只能輸出
  `62146316+banshee0716@users.noreply.github.com`；提交時不得用 `-c user.email` 覆寫。（G2 F4）
- **K3**：對外動作需 owner 授權，包括 push、Pages 設定和第一次部署。G7 之前不推 `main`；
  工作流加入後，任何推到 `main` 的提交都會觸發部署。（G2 F9）

## 3. 測試接縫

- **S1 建置**：`npm run build` exit 0；`dist/` 內有四頁 HTML 與 Pagefind 索引。
- **S2 Playwright**：位於 `tests/`，對 `npm run preview`（含 `base`）執行，只用 chromium。
  斷言 AC2–AC10；無障礙用 `@axe-core/playwright`。
- **S3 內容核對**：每篇文章由全新工作階段的子代理逐句核對，作者不得自己核對。產出分兩份（G2 F3）：
  - 公開：`docs/harness/product-docs/verification/content-<slug>.md`。表格欄位：文章中的說法或步驟 →
    讀者看得到的證據（畫面文字、操作路徑）→ 核對日期與正式版發布日期 → PASS／FAIL。
    不得寫主程式檔案路徑、程式片段、資料表或設定。
  - 論文相關說法的來源欄寫論文的頁碼（印刷頁）；事實來源是作者公開全文
    `https://samgilbert.net/pubs/Risko2016TiCS.pdf`（DOI `10.1016/j.tics.2016.07.002`）。
  - 內部：檔案層級的對照（主程式檔案與 SHA、技能檔案與 commit）寫在主程式儲存庫的
    `docs/harness/product-docs/content-check-<slug>.md`，不進本儲存庫。
- **S4 線上冒煙**：部署後以 `curl` 確認正式網址四頁與 `pagefind/pagefind.js` 回 200，
  輸出記在 `evidence/`。

## 4. 驗收條件

- **AC1**：`npm ci && npm run build` 在乾淨 clone 上 exit 0；`.npmrc` 與鎖定版本符合 R1。
- **AC2**：四頁在 `base` 之下回 200；`<html lang="zh-TW">`；網頁標題含「Mnemo-Card 文件」。
- **AC3**：從四頁出發爬所有站內連結與資源（`href`／`src`），全部回 200；沒有任何站內連結漏掉 `base` 前綴。
- **AC4**：側欄依 R6 排列，只有文章、沒有外部連結；首頁不在側欄。
  文章頁有文章目錄（至少兩個二級標題的頁面）；每頁上一篇／下一篇的文字與網址完全符合 R8 的表。
- **AC5**：搜尋可用。搜「熟悉度」結果含第一次使用；搜「卡包」結果含 mnemo-study-cards 的文章。
- **AC6**：375px 寬度下四頁都沒有橫向捲動（`scrollWidth <= clientWidth`）。
- **AC7**：只用鍵盤可以完成以下操作（G2 F6）：
  - 第一次按 Tab 聚焦跳轉連結（文字以 Starlight 繁中字串為準，例如「跳到內容」）；按 Enter 後
    網址變為 `#_top`，下一次 Tab 停在 `main` 裡的元素。
  - 桌機寬度下，Tab 能走到側欄的文章連結。
  - 手機寬度下，用 Enter 打開選單後能 Tab 到文章連結，按 Esc 關閉選單。
  - 手機寬度下，文章目錄（`<details>`）能用鍵盤展開。
  - 能用鍵盤打開搜尋。
- **AC8**：四頁在淺色與深色主題下，axe 都沒有 serious 或 critical 違規。
- **AC9**：介面文字是繁體，例如出現「搜尋」且沒有「搜索」。落回英文的字串（已知
  `heading.anchorLabel`）依 R3 覆寫成繁中。
- **AC10**：第一篇沒有「驗證信」，也沒有教讀者按「建立帳號」或「忘記密碼？」的步驟句；第三篇的
  下載段落沒有任何連結或程式碼區塊，全文沒有「待補」「待確認」。以上以測試斷言。
- **AC11**：S3 三份核對報告全部 PASS，沒有未處理的列。
- **AC12**：R14 工作流在 push 後成功部署；S4 線上冒煙全部回 200（G7 時由 owner 授權執行）。
- **AC13**：沒有提交任何 secret、個人信箱或主程式內部細節（G2 F3、F4）：
  - `npm run check:public`（`scripts/check-public.mjs`）結束碼 0、沒有命中。它掃描 HEAD 可達的每一個提交（不只目前版本）
    的檔案內容、提交者身分與提交訊息；搜尋樣式只定義在腳本內，已知無害的歷史行以「檔案＋整行」逐行允許，
    不整檔排除。（G6 預審擴大到全儲存庫；G6 r1 F11 改為逐提交掃描）
  - K2 的提交者身分檢查只輸出 noreply 地址。

## 5. 閘門安排

- **G2**：本規格與工作票由全新 opus 一次合審，修完不複審（owner 裁定）。
- **G4**：乾淨 clone 跑 AC1–AC10 與 AC13，加上 S3 三份報告；由全新子代理驗證。
- **G5**：owner 用桌機與手機看本機預覽或已部署網站並驗收文字。
- **G6**：任務審查與程式審查合成一輪 Codex，在本儲存庫內執行；Codex 的 P1 修完由全新 opus 確認關閉。
- **G7**：owner 授權後，依序：在 Settings → Pages 把 Source 設為 GitHub Actions → push `main`
  （或設定後手動觸發 `workflow_dispatch`）→ 等待部署 → 跑 S4。第一次執行必須是綠燈。（G2 F9）

**回退**：revert 出問題的提交再 push，工作流會重新部署；緊急時由 owner 在 Settings → Pages 停用網站。

## 6. 之後的事（不在本切片）

- Mnemo-Card 主程式首頁加「文件」入口。這是主程式的 LOW 切片，網址上線後才做。
- 主程式改到文件所寫畫面的切片，應在其發布關口列出受影響的文章。這是主程式流程的待辦。
- 第三篇補示範產物與下載安裝；另兩篇文章；自訂網域。
