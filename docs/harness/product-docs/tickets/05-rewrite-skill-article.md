# 05：重寫第二篇「認識 mnemo-study-cards」（slice 2）
contract-freezing: no
depends-on: []

## 要做什麼

spec-slice2 R15、R16、R17。

1. 依 R15 寫新文案到 `copy/mnemo-study-cards.md`（取代 slice 1 版本）。事實來源只有技能 v0.2.0
   （`/mnt/d/mnemo-study-cards-skill` commit `93d60d7`）、主程式正式版讀者看得到的卡型說明，以及論文作者公開全文。
2. 內容核對（S3）：派全新 opus 子代理逐句核對，重寫 `verification/content-mnemo-study-cards.md`；修 FAIL 後由同一核對者複核。
3. 第三篇自足性（S5）：另派一個全新子代理只讀第三篇，產出 `verification/standalone-getting-started.md`。
   有缺口就停下問 owner。
4. 把核對過的文案交 owner 同意（`state.md` § Decisions by human）。owner 改動涉及技能決策或產品的句子，該句再複核。
5. owner 同意後寫進 `src/content/docs/skills/mnemo-study-cards/index.mdx`（內容與 copy 逐字相同，只多前言），
   並依 R17 改首頁卡片說明一句。
6. 測試：在 `tests/articles.spec.ts` 加 AC14、AC15；AC5、R8 上下篇等既有斷言保持不變。

## 測試接縫

S1、S2、S3、S5。

## 驗收條件

- [ ] owner 同意文案
- [ ] S3 報告全部 PASS；S5 報告沒有缺口或缺口已由 owner 裁定
- [ ] `npm run build` exit 0；`npm test` 全綠（含 AC14、AC15）
- [ ] 故意在第二篇加入「pack.md」或調換兩個 h2 的順序時，測試變紅
- [ ] `npm run check:public` 乾淨
