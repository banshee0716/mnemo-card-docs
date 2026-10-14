# 04：第二篇「認識 mnemo-study-cards」與第三篇「安裝並第一次產卡」
contract-freezing: no
depends-on: [03]

## 要做什麼

spec R6（「mnemo-study-cards」群組）、R7（首頁加兩篇入口）、R8、R10、R11、R12。

1. 新增 `src/content/docs/skills/mnemo-study-cards/index.mdx`，文案取自文案草稿第二篇，
   依 R10 調整，文末連到第三篇。
2. 新增 `src/content/docs/skills/mnemo-study-cards/getting-started.mdx`，依 R11 寫成流程說明。
   - 第 2～4 步取自文案草稿第三篇的相應段落，但拿掉示範論文的實際產物、預期結果與尚未執行的範例。
   - 下載段落只有一句「目前尚未開放下載」。
3. 兩篇的完整文案先交 owner 同意，同意後才寫進網站（同 03）。
4. 內容核對（S3）。派全新子代理，產出 `verification/content-mnemo-study-cards.md` 與
   `verification/content-getting-started.md`：
   - 技能相關說法對照 `/mnt/d/mnemo-study-cards-skill`（v0.2.0）的 `SKILL.md` 與 `references/`。
   - 匯入與學習步驟對照主程式正式版。
5. 測試加入以下項目，並把兩頁納入 AC2、AC3、AC6、AC8 的頁面清單：
   - AC4：兩頁有文章目錄、上一篇／下一篇。
   - AC5：搜「卡包」找得到這兩篇之一。
   - AC10 的第三篇部分：下載段落沒有 `<a>` 或程式碼區塊。

## 測試接縫

S1、S2、S3。

## 驗收條件

- [ ] owner 同意兩篇文案（`state.md` § Decisions by human）
- [ ] 兩份核對報告全部 PASS
- [ ] `npm run build` exit 0；`npm test` 全綠（兩頁的 AC2–AC6、AC8、AC10）
- [ ] AC13：`git grep -n -i -e supabase -e SERVICE_ROLE -e memo-card-system -e "\.env" -- src` 沒有輸出
- [ ] 第二篇沒有替兩邊說法不一致的卡型下定義；兩篇都沒有技能內部腳本或檔名（R10、R12）
