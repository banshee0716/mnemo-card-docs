# G4 驗證：product-docs slice 4（開始使用拆兩篇）

- 驗證者：全新工作階段子代理（非作者）
- 日期：2026-10-15
- 對象：`main` HEAD `b25d389`（未推送），在暫存目錄乾淨 clone 執行
- 依據：`spec-slice4.md` §4 AC28–AC35、`tickets/15-getting-started-split-site.md`

## 執行結果

| 指令 | 結果 |
| --- | --- |
| `npm ci` | 成功 |
| `PLAYWRIGHT_PORT=4417 npm test` | **139 passed**（59.7s），0 failed |
| `npm run check:public` | `check-public: 乾淨，掃描 64 個提交` |

## AC 逐條

| AC | 檢查 | 結果 |
| --- | --- | --- |
| AC28 | `tests/getting-started.spec.ts`「AC28」斷言側欄第一群組標題為「開始使用」，連結文字**恰為**兩項且依序，href 各為 `/mnemo-card-docs/first-use/`、`/mnemo-card-docs/review-and-manage/`。舊的「AC4：側欄『開始使用』群組含本篇」已從 `articles.spec.ts` 刪除（grep 無結果）。`astro.config.mjs` 群組兩項順序正確。 | PASS |
| AC29 | `articles.spec.ts` 的 `PAGINATION`：第一篇 prev 為 null、next 為新頁；新頁 prev 第一篇、next〈認識 mnemo-study-cards〉；〈認識 mnemo-study-cards〉prev 為新頁。測試對 null 斷言連結數為 0，否則比對標題與 href。 | PASS |
| AC30 | 兩篇 h2 以 `toEqual` 比對完整陣列（完全相等、依序）。陣列與 `copy/first-use.md`（9 個）、`copy/review-and-manage.md`（8 個，不含「首頁改法（不上本頁）」）的 h2 逐一相同。 | PASS |
| AC31 | 佔位數量各為 8、4，與定稿 grep 數相同（定稿編號 1–8、1–4 連號）；測試斷言每個以「〔附圖 {i+1}：」開頭（同時鎖住連號）、含「示範資料」、有 `data-pagefind-ignore`，並依文件順序計算每個 h2 區段的佔位數最多 2。 | PASS |
| AC32 | `articles.spec.ts` 的 AC10 帳號檢查改為對 `first-use/`、`review-and-manage/` 兩篇都跑（掃描 `.sl-markdown-content` 的 innerText，佔位 `<small>` 在其中）；`getting-started.spec.ts` 對兩篇斷言不含「變更密碼」「登出所有裝置」「手機」「窄版」；第一篇含「設定」的清單項目含核准句「帳號相關的功能目前不開放，有需要請聯絡提供帳號給你的研究者。」（與定稿第 48 行一致）。 | PASS |
| AC33 | 測試取「先讀哪一篇」h2 到下一個 h2 之間所有連結的 pathname，以 `toEqual` 斷言恰為 `[first-use/, review-and-manage/]` 依序。該區段只有說明段落（無連結）與兩張 `LinkCard`。附註：測試鎖的是連結而非元件名稱；該區段沒有其他連結，足以涵蓋本條。 | PASS |
| AC33a | 測試以 Pagefind 搜「重置排程」，斷言結果含 `/mnemo-card-docs/review-and-manage/`（去掉 #）。 | PASS |
| AC34 | `tests/helpers.ts` 的 `PAGES` 含 `review-and-manage/`（標題「之後的複習與管理」）；`articles.spec.ts`「桌機有文章目錄」清單含 `REVIEW`。 | PASS |
| AC35 | S3 報告 `content-first-use-v2.md`：67 列，FAIL 0（初核 4 項已修，複核 PASS）；`content-review-and-manage.md`：45 列，FAIL 0（初核 3 項已修，複核 PASS）。逐列檢查結果欄只有 PASS／PASS（附註）／非產品說法／觀察，無殘留 FAIL。抽查複核修訂句（匯入入口、登出取消訊息、側欄寬度、首頁主卡、「1 / 1」、「也不表示日後一定記得」）都已出現在上站的 mdx；兩篇不含「保證」。兩份報告只引用本儲存庫的 `copy/…` 路徑與 `data-pagefind-ignore`，沒有主程式檔案路徑或程式片段。`npm test` 全綠、`check:public` 乾淨（見上）。 | PASS |

## 上站內容與定稿一致性

| 項目 | 檢查 | 結果 |
| --- | --- | --- |
| `first-use.mdx` | 去掉 `copy/first-use.md` 開頭註解後 `diff` 完全相同 | 一致 |
| `review-and-manage.mdx` | 去掉開頭註解與「## 首頁改法（不上本頁）」一節後 `diff`，只差該節前多出的一個空行 | 一致 |
| 首頁 `index.mdx` | 第一張卡說明「從登入開始，用一張範例卡完成第一輪練習，並建立複習排程。」；其後加 LinkCard「之後的複習與管理」，說明逐字相同；frontmatter `description` 逐字相同 | 一致 |

## 變異測試（只在 clone 做，每次以 `git checkout -- .` 還原）

範圍：`npx playwright test tests/getting-started.spec.ts tests/articles.spec.ts`（35 個測試）。

| # | 變異 | 預期變紅 | 實際失敗的測試 | 結果 |
| --- | --- | --- | --- | --- |
| M1 | `astro.config.mjs` 調換「開始使用」兩項 | AC28、AC29 | AC28；AC4 上下篇（first-use／review-and-manage／skills/mnemo-study-cards）共 4 個 | 紅 |
| M2 | 新頁「## 6 登出」改為「## 6 登出帳號」 | AC30 | AC30：review-and-manage/ | 紅 |
| M3 | 刪除新頁附圖 4 佔位 | AC31 | AC31：review-and-manage/ | 紅 |
| M4 | 新頁加「登入頁上的「忘記密碼？」可以重新取得密碼。」 | AC10 | AC10、AC32：review-and-manage/ | 紅 |
| M5 | 新頁加「想換密碼，可以到「設定」變更密碼。」 | AC32 | AC32：review-and-manage/ 不教帳號功能 | 紅 |
| M6 | 首頁兩張 LinkCard 對調 | AC33 | AC33 | 紅 |

6／6 變紅；每次只紅對應的測試，其餘 31–34 個通過。還原後 clone 的 `git status` 是乾淨的。

## 結論

**PASS**：AC28–AC35 全部符合，測試確實鎖住各條，六項變異全部變紅。
