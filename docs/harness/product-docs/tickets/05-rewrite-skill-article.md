# 05：重寫第二篇「認識 mnemo-study-cards」（slice 2）
contract-freezing: no
depends-on: []

## 要做什麼

spec-slice2 R15、R16、R17。

1. 依 R15 寫新文案到 `copy/mnemo-study-cards.md`（取代 slice 1 版本），文末另列一節「首頁卡片說明」（R17）。
   事實來源：技能 v0.2.0（`/mnt/d/mnemo-study-cards-skill` commit `93d60d7`）；主程式正式版讀者看得到的畫面
   （卡型說明、卡片正面與背面、匯入）；論文作者公開全文（G2 F1）。文案至少一處使用「卡包」（G2 F2）。
2. 內容核對（S3）：派全新 opus 子代理逐句核對，重寫 `verification/content-mnemo-study-cards.md`
   （含首頁說明句一列）；修 FAIL 後由同一核對者複核。
3. 第三篇自足性（S5）：另派一個全新子代理，照 spec-slice2 S5 的限制（只讀第三篇與第一篇、不得讀第二篇、
   copy、verification、spec、intent、技能目錄或主程式，不得載入技能，每步引用原句）產出
   `verification/standalone-getting-started.md`。有缺口就停下問 owner（G2 F5）。
4. 把核對過的文案（含首頁說明句）交 owner 同意（`state.md` § Decisions by human）。owner 改動涉及技能決策或
   產品的句子，該句再複核。
5. owner 同意後寫進 `src/content/docs/skills/mnemo-study-cards/index.mdx`（內容與 copy 逐字相同，只多前言），
   並把首頁卡片說明換成 copy 中同意的那一句。
6. 測試：在 `tests/articles.spec.ts` 加 AC14（h2 清單完全等於定稿的六個標題）、AC15（spec-slice2 列的禁用字、
   英文代碼不分大小寫完整單字、無程式碼區塊與行內 code、含 meta description），以及 AC17 的搜尋斷言
   （搜「卡包」有一筆路徑完全等於第二篇網址）。既有 AC5、R8 上下篇等斷言保持不變。

## 測試接縫

S1、S2、S3、S5。

## 驗收條件

- [ ] owner 同意文案（含首頁說明句）
- [ ] S3 報告全部 PASS；S5 報告沒有缺口或缺口已由 owner 裁定
- [ ] `npm run build` exit 0；`npm test` 全綠（含 AC14、AC15、AC17 新斷言）
- [ ] 變異：在第二篇加入「pack.md」、加入「Concept」、調換兩個 h2、多加一個 h2、刪掉第二篇所有「卡包」時，測試都變紅
- [ ] `npm run check:public` 乾淨
