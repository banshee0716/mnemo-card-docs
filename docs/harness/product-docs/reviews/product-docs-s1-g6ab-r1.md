# product-docs-s1-g6ab-r1 — raw reviewer output

```text
review-id: product-docs-s1-g6ab-r1   gate: G6A+G6B（合審，owner 裁定）   review type: final-review
lens: Prompt B，G6A 任務審查＋G6B 程式審查   base SHA: fa5a923b92e8a768f48ec639a3746bc0af8b3b10   head SHA: 97fb444d49402fa43b5658b7f66e4ca1bbef81ab
command: /codex:adversarial-review --background --base fa5a923 <focus text，見 state.md 與 handoff-1-final-review.md>（owner 在本儲存庫發動）
plugin: codex-plugin-cc v1.0.6   codex thread id: 01a139a2-82f7-7940-8efa-ce8bd8bdda44
model/effort: gpt-5.6-sol / high（~/.codex/config.toml）
verdict: needs-attention -> G6A APPROVE AFTER FIXES；G6B APPROVE AFTER FIXES
findings: 5（P0 0 / P1 1 / P2 3 / P3 1）→ findings.md F11–F15
```

## Output (verbatim)

```text
# Codex Adversarial Review

Target: branch diff against fa5a923
Verdict: needs-attention

不可發布。G6A：APPROVE AFTER FIXES；G6B：APPROVE AFTER FIXES。AC 狀態：AC1 Partially verified；AC2 Partially verified；AC3 Partially verified；AC4 Partially verified；AC5 Verified；AC6 Partially verified；AC7 Partially verified；AC8 Partially verified；AC9 Partially verified；AC10 Verified；AC11 Verified；AC12 Not verified（依規格留待 G7）；AC13 Verified（本次另行掃描目前可達歷史），但既定防漏檢查本身有 P1 缺口。部署工作流的建置、測試、上傳、部署順序正確；依 G7 順序先啟用 Pages 時，未發現會部署未測試產物的路徑。現行可達提交未找到 secret、個人信箱或明確的主程式內部路徑；提交者皆為 noreply。涵蓋建置設定、內容、工作流、測試、無障礙／介面證據、公開儲存庫衛生與提交歷史；依指示未執行測試，也未開啟 findings.md。開啟的檔案：.github/workflows/deploy.yml、.npmrc、AGENTS.md、astro.config.mjs、package.json、package-lock.json、playwright.config.ts、tsconfig.json、public/favicon.svg、src/assets/logo.svg、src/content.config.ts、src/content/i18n/zh-TW.json、src/styles/custom.css、src/content/docs/index.mdx、src/content/docs/first-use.mdx、src/content/docs/skills/mnemo-study-cards/index.mdx、src/content/docs/skills/mnemo-study-cards/getting-started.mdx、tests/helpers.ts、tests/site.spec.ts、tests/navigation.spec.ts、tests/articles.spec.ts、docs/harness/product-docs/handoff-1-final-review.md、intent.md、spec.md、state.md、tickets/01-scaffold-and-deploy-pipeline.md、tickets/02-brand-home-and-product-links.md、tickets/03-article-first-use.md、tickets/04-articles-skill.md、copy/first-use.md、copy/getting-started.md、copy/mnemo-study-cards.md、verification/content-first-use.md、verification/content-getting-started.md、verification/content-mnemo-study-cards.md、reviews/product-docs-s1-g2a-r1.md、evidence/t02-home-dark.png、evidence/t02-home-light.png、evidence/t02-home-mobile-light.png、evidence/ui-article-dark.png、evidence/ui-article-light.png、evidence/ui-article-mobile.png、evidence/ui-home-dark.png、evidence/ui-home-light.png、node_modules/@astrojs/starlight/package.json、dist/style/props.css、dist/style/print.css、dist/style/anchor-links.css、dist/components/Hero.astro、AnchorHeading.astro、Page.astro、PageSidebar.astro、MobileMenuToggle.astro、Select.astro、SidebarSublist.astro、Pagination.astro、EditLink.astro、Footer.astro、Search.astro、MobileTableOfContents.astro、dist/user-components/LinkCard.astro、FileTree.astro、Tabs.astro、dist/components-internals/TableOfContents/starlight-toc.js、dist/integrations/satteri.js、dist/integrations/rehype-heading-links.js。

Findings:
- [high] [P1] AC13 排除 spec 且只掃 HEAD，會讓公開歷史洩漏仍顯示通過 (docs/harness/product-docs/spec.md:169-173)
  相關需求：K2、AC13。證據：命令宣稱擴大到全儲存庫，卻明確排除 spec.md；它也只執行一次 git grep，沒有走訪提交歷史。這正好漏掉先前曾發生洩漏的規格檔與「先提交、後刪除」情況。失敗情境：提交 A 在 spec.md 加入內部路徑、SMTP 設定或憑證，提交 B 在 G4 前刪除；既定命令零輸出，兩個提交 push 後 A 仍能以 SHA 公開存取。影響是不可由普通修正提交清除的隱私／安全洩漏，可能再次需要刪庫重建。
  Recommendation: 讓 AC13 對 fa5a923..HEAD 的每個可達提交執行掃描，且不得整檔排除 spec.md；將搜尋命令移到腳本、只排除命令所在的精確行，或採明確允許清單。新增變異測試：在中間提交及 spec 敘述各放一個測試標記，確認檢查必定失敗。
- [medium] [P2] 最終介面與驗收測試改動晚於最後一份獨立驗證 (docs/harness/product-docs/state.md:29-42)
  相關需求：作者不自驗、G4、AC1–AC4、AC6–AC9。證據：獨立 G4 證據停在 d6fc960，後續 61e3dbb 的 43 passed 仍早於側欄移除、splash 首頁、341 行 CSS、Logo 與多個 AC4／AC7 測試修改；state 只有 Builder 的 axe 敘述與截圖。失敗情境：最終 CSS 造成某文章 375px 溢位或對比退化，或移到文章頁的鍵盤／側欄斷言本身不能執行；舊版 43 passed 仍被當成 HEAD 的 G4 證據。影響是第一次 main 推送可能紅燈，或缺陷未被目前證據揭露，違反 G7 第一次執行必須成功。
  Recommendation: 由全新工作階段的驗證者在乾淨 clone 的 HEAD 執行 npm ci && npm run build 及 npm test，記錄 SHA、完整結果與 AC 對照；在此之前把 AC1–AC4、AC6–AC9 保持為 Partially verified。
- [medium] [P2] 唯一即時狀態仍把已完成的刪庫重建列為 blocker (docs/harness/product-docs/state.md:21-22)
  相關需求：AGENTS.md「唯一即時狀態」、K3、G7。證據：第 22 行說儲存庫仍待 owner 刪除重建，但同檔第 155 行記錄已完成重建並推送 fa5a923；本機也顯示 origin/main 位於該基準。失敗情境：G7 執行者以 canonical state 為準，再次要求或執行刪庫重建，造成設定／歷史再次遺失；另一種結果是把已解除的 blocker 當真而無限延後發布。
  Recommendation: 將 blocker 改為 none 或明確標為已完成，並讓 what-is-left 只列 G6、G5、G7 的實際剩餘步驟。
- [medium] [P2] AC10 仍可讓未加書名號的錯誤重設密碼指示假綠燈 (tests/articles.spec.ts:115-126)
  相關需求：R9、AC10。證據：全文檢查只禁止精確字串「「忘記密碼？」」，其餘檢查只看 li。失敗情境：文章段落改成「接著按忘記密碼重設」或「前往忘記密碼頁」，不含書名號且不在清單中；全部斷言仍通過，但受邀者會被引導到規格明定不可教的流程。影響是第一篇的關鍵登入復原指示失真，而測試提供錯誤信心。
  Recommendation: 對全文逐句檢查「忘記密碼」與操作動詞的組合，或精確允許唯一核准句「如果忘記密碼，請聯絡…研究者」並拒絕其他出現方式；加入上述無書名號段落的變異測試。
- [low] [P3] AC3 會丟棄跨頁 fragment，壞掉的深連結仍回報成功 (tests/helpers.ts:35-65)
  相關需求：品質線、AC3。證據：收集站內 URL 時先清除 hash，只另驗證 href 以 # 開頭的本頁錨點。失敗情境：文章連到 ../first-use/#不存在；請求去除 fragment 後取得頁面 200，且不進入本頁錨點檢查，因此測試通過，但讀者點擊後找不到指定段落。
  Recommendation: 保留每個站內連結的 fragment；取得目標頁後解碼 fragment 並確認該頁存在對應 id。新增跨頁錯誤錨點的回歸測試。

Next steps:
- 先修正 AC13 的歷史與 spec 掃描缺口，依流程由全新 opus 確認 P1 關閉。
- 修正兩個假綠燈案例與 state.md 的矛盾 blocker。
- 由全新驗證者在乾淨 clone 的最終 HEAD 重跑建置與 43 項 Playwright 測試，再更新 G4 證據。

```
