# G4 獨立驗證：slice 3b（KLI 框架）

驗證對象：main 最新提交 `fcb80d3af08e5b2a1d20bc80b5186c4bf4e3bbee`（乾淨 clone，`npm ci`，安裝 chromium）。

## 結果

- `npm test`：121 通過、0 失敗。
- `npm run check:public`：乾淨，掃描 57 個提交。
- AC26：`git log --all --name-only --format= | grep -i '\.pdf$'` 無輸出。
- 逐字比對（去掉 copy 開頭 HTML 註解與 frontmatter 後比正文）：
  - `kli-framework`：正文相同（5072 字元），frontmatter 相同。
  - `index`：正文相同（623 字元，copy 文末〈首頁說明句〉與〈側欄文字提案〉兩節未上站），frontmatter 只多 `prev: false`。

## 變異（clone 內各改一處、跑完整 `npm test`、還原）

| 項 | 變異 | 結果 | 紅燈測試 |
|---|---|---|---|
| a | 側欄把「KLI 框架」移到「自我解釋」之前 | 紅（2 失敗） | AC19 側欄順序、AC23 上下篇 |
| b | KLI 正文加「Mnemo-Card」 | 紅（1） | AC22（noMnemoCard） |
| c | KLI 正文加「基礎概念卡」 | 紅（1） | AC22（noCardTypes） |
| d | 調換兩個 h2 | 紅（1） | AC20 h2 順序 |
| e | 參考文獻刪到 2 筆 | 紅（1） | AC21 參考文獻 3–7 筆 |
| f | 導讀頁刪〈KLI 框架〉一行 | 紅（1） | R26 清單與已上線文章一致 |
| g | 加中文式引用「（Koedinger 等人，2012）」 | 紅（1） | AC22（引用格式 regex） |
| h | 認知負荷理論加 `next: false` | 紅（1） | AC23 上下篇 |

X/8 = 8/8 紅，無綠燈。每次變異後已 `git checkout` 還原，clone 乾淨。
