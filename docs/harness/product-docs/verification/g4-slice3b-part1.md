# G4 獨立驗證：slice 3b 第一部分（自我解釋、認知負荷理論）

驗證對象：commit 7c4038d，乾淨 clone，`npm ci` 後驗證。作者不自驗，本報告由全新工作階段產出。

## 結果

- `npm test`：110 通過、0 失敗。
- `npm run check:public`：乾淨，掃描 52 個提交。
- AC26：`git log --all --name-only --format= | grep -i '\.pdf$'` 無輸出；`.gitignore` 第 7 行為 `*.pdf`。通過。
- 逐字比對：
  - self-explanation.mdx、cognitive-load.mdx 與 copy 同名 .md（去掉開頭 HTML 註解）完全相同。
  - index.mdx 與 copy（去掉註解與文末「首頁說明句」「側欄文字與頁面標題提案」）相比，唯一差異是 mdx 多一行 `prev: false`。
  - 首頁「學習科學」段說明句、LinkCard 標題與說明、首頁 description 與 copy「首頁說明句」一節一致。

## 變異測試（7/8 紅，1 個缺口）

| 項 | 變異 | 結果 | 抓到的測試 |
|---|---|---|---|
| a | astro.config.mjs 調換自我解釋與認知負荷理論 | 紅（2 失敗） | AC19 側欄順序、AC23 上下篇 |
| b | 調換自我解釋兩個 h2 | 紅 | AC20 h2 恰為定稿標題 |
| c | 認知負荷理論正文加「Mnemo-Card」 | 紅 | AC22 產品名稱界線 |
| d | 自我解釋產品段加「保證」 | 紅 | AC22 成效宣稱 |
| e | 認知負荷參考文獻刪到 2 筆 | 紅 | AC21 參考文獻 3–7 筆 |
| f | 自我解釋加「（Chi 等人，1994）」 | 紅 | AC22（中文式引用） |
| g | 導讀頁刪掉〈認知負荷理論〉連結行 | **綠（缺口）** | 無 |
| h | 生成學習前言加 `next: false` | 紅 | AC23 上下篇 |

### g 綠燈原因

learning-science.spec.ts 對導讀頁只檢查 h2 標題（`從哪一篇開始？`）、側欄與首頁入口。沒有任何測試檢查導讀頁清單的連結數量或目標。因此刪掉任一篇的連結行都不會變紅。AC24 只涵蓋搜尋，不涵蓋導讀頁清單。

建議（Builder 自決）：在 learning-science.spec.ts 加一則測試，檢查導讀頁清單連結恰為五篇、順序依 R19，且 href 都解析到已上線頁面。這是測試缺口，不是內容錯誤；目前導讀頁內容與 copy 一致。

clone 內每項變異後已還原（git checkout），主儲存庫未修改。
