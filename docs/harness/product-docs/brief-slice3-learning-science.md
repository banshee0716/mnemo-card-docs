# product-docs slice 3 — 「學習科學」分區方向整理（G1 前草稿）

owner 2026-10-14 的兩輪討論整理。**這不是 intent**：slice 3 的工作階段以本檔起草 `intent-slice3.md`，由 owner G1 裁定。
文中的文獻資料來自討論，**全部尚未查證**（作者、年份、卷期、篇號、DOI、研究發現都要對照原文確認）。

## 1. 定位

**學習科學入門**：不需要心理學背景，也能理解一個概念在說什麼、研究支持到哪裡，以及自己可以怎麼運用。

- 不是論文導讀，也不是「產品多符合科學」的宣傳。
- 內容以 **2021–2025 年的綜述、後設分析與理論整理**為主，保留必要的經典文獻（例如 KLI 原始框架）；不為了年份新而換掉原始來源。
- 正文要能**獨立成立**：沒用過 Mnemo-Card 的人也讀得懂、用得上。產品連結只在文末一小段，或只放在延伸閱讀。
- 與產品文件分開：研究是設計的理論來源，不是 Mnemo-Card 成效的驗證；不宣稱產品的學習效果。

## 2. 篇目（第一版只做這六篇加一篇導讀）

資料夾 `src/content/docs/learning-science/`；側欄群組「學習科學」，側欄用短術語，頁面標題用問題。

| 順序 | 側欄 | 頁面標題（暫定） | 檔名（暫定） |
| --- | --- | --- | --- |
| 0 | 學習科學 | 導讀頁（約 200–300 字：分區目的、怎麼選讀） | `index.mdx` |
| 1 | 檢索練習 | 檢索練習：為什麼「試著想起來」也是一種學習？ | `retrieval-practice.mdx` |
| 2 | 間隔練習 | 間隔練習：為什麼不要把複習全部擠在同一天？ | `spaced-practice.mdx` |
| 3 | 生成學習 | 生成學習：為什麼整理過，不一定真的理解了？ | `generative-learning.mdx` |
| 4 | 自我解釋 | 自我解釋：為什麼要問自己「這一步為什麼成立」？ | `self-explanation.mdx` |
| 5 | 認知負荷理論 | 認知負荷理論：為什麼有些教材讓人越看越亂？ | `cognitive-load.mdx` |
| 6 | KLI 框架 | KLI 框架：為什麼要先想清楚「學會」是什麼意思？ | `kli-framework.mdx` |

KLI 放最後：讀者有前五篇的基礎後，再思考方法如何選擇與組合。進階主題（認知卸載、遷移、後設認知、建構性檢索）第一版不做。

## 3. 寫作規格

- **篇幅**：正文約 1,000–1,600 個中文字，參考文獻另計。導讀頁 200–300 字。
- **文獻數**：一般文章 4–7 篇真正用得上的文獻；框架類（KLI）不為湊數硬加。
- **文獻角色**：

  | 角色 | 回答什麼 |
  | --- | --- |
  | 近期綜述或理論整理 | 這個概念目前應該怎麼理解？ |
  | 系統性回顧或後設分析 | 不同研究整體上支持什麼？效果有沒有條件？ |
  | 具體實證研究 | 研究者實際怎麼做？哪些情況沒有預期效果？ |
  | 必要的經典文獻 | 這個概念原本指什麼？不能被改寫成什麼？ |

- **正文路線**：熟悉的學習情境 → 白話概念（先白話，再給英文術語）→ 具體例子（兩種做法的比較）→ 研究發現與限制 → 可以怎麼做。
  正文不逐篇介紹文獻；引用標在對應的句子。
- **標題**：各節用問題式小標題（示範稿用「它和重新閱讀有什麼不同？」「研究支持什麼？」「是不是只要一直考自己就好？」
  「可以怎麼開始？」）。每篇必須涵蓋的區塊：例子、研究發現與限制、可以怎麼做；文末固定兩節「參考文獻」與「延伸閱讀」。
  （取代第一輪討論的「固定四個 h2」方案；確切標題規則在 spec 定。）
- **參考文獻與延伸閱讀分開**：參考文獻只列正文真正用到的來源；延伸閱讀挑一兩篇，各附一句閱讀指引。
- **產品段**：文末一小段（或只在延伸閱讀放連結），說明 Mnemo-Card 借鑑了什麼、使用者可以怎麼做，不把設計依據當成效果已驗證。
- **驗收問題**：讀者不看參考文獻，能不能（1）理解概念、（2）辨認一個例子、（3）避開一個常見誤解？
- **原則**：保留文章的輕量，但不把研究簡化成口號；增加文獻厚度，但不要求讀者先學會讀論文。

## 4. 各篇方向與文獻池（20 篇，待查證）

### 1. 檢索練習

- 核心：檢索不只是檢查學習成果，進行檢索本身也可能改善之後的回想。和重讀的差別在於要求學習者自己產生答案；
  不必是正式計分的考試。
- 限制：課堂研究的平均效果不代表任何題目、任何安排都一樣；檢索勝過重讀，不等於勝過所有其他主動學習活動
  （相對優勢可能與是否提供正確答案回饋有關）；不是在沒有基礎時一直猜。
- 做法：先嘗試回答 → 核對材料 → 修正遺漏與錯誤；再把練習分散到不同時間（連到間隔練習）。
- 討論中的示範稿已有全文草稿，可作為語氣與密度的參考（數字與研究發現仍須查證）。
- 文獻：
  - Carpenter, S. K., Pan, S. C., & Butler, A. C. (2022). The science of effective learning with spacing and retrieval practice. *Nature Reviews Psychology, 1*, 496–511.（主要導讀；與間隔練習共用）
  - McDermott, K. B. (2021). Practicing retrieval facilitates learning. *Annual Review of Psychology, 72*, 609–633.
  - Agarwal, P. K., Nunes, L. D., & Blunt, J. R. (2021). Retrieval practice consistently benefits student learning: A systematic review of applied research in schools and classrooms. *Educational Psychology Review, 33*, 1409–1453.
  - Yang, C., Luo, L., Vadillo, M. A., Yu, R., & Shanks, D. R. (2021). Testing (quizzing) boosts classroom learning: A systematic and meta-analytic review. *Psychological Bulletin, 147*(4), 399–435.（討論稿引用「222 項獨立研究、48,478 名學生」，待查證）
  - Gonçalves, A. de O., Muniz, B. F. B., & Jaeger, A. (2025). Retrieval practice versus elaborative encoding: A systematic and meta-analytic review. *Educational Psychology Review, 37*, Article 100.

### 2. 間隔練習

- 主角是「練習如何分布」，不是遺忘曲線的歷史。從「同樣一小時，一次讀完還是分幾次」切入；間隔不是增加總時數。
- 界線：分散練習通常有幫助，不等於所有人都該照同一組日期複習；擴張間隔不一定優於等間隔，不能寫成普遍規則。
- 文末可給示意安排，但明確標示是可調整的範例，不是研究證明的最佳日程。
- 文獻：
  - Mawson, R. D., & Kang, S. H. K. (2025). The distributed practice effect on classroom learning: A meta-analytic review of applied research. *Behavioral Sciences, 15*(6), Article 771.（主要來源）
  - Latimier, A., Peyre, H., & Ramus, F. (2021). A meta-analytic review of the benefit of spacing out retrieval practice episodes on retention. *Educational Psychology Review, 33*, 959–987.（區分「間隔對集中」與「擴張對等間隔」）
  - Murray, E., Horner, A. J., & Göbel, S. M. (2025). A meta-analytic review of the effectiveness of spacing and retrieval practice for mathematics learning. *Educational Psychology Review, 37*, Article 75.（學科差異）
  - 共用 Carpenter 等人（2022）。

### 3. 生成學習

- 從「筆記看起來很完整，卻說不清楚」切入。生成學習關心學習者是否主動組織資訊並連結原有知識，不是產出多少文字；
  摘要、畫圖、概念圖只是可能引發這些活動的方法。開頭說明「生成」指學習者的認知活動，不是生成式 AI。
- 例子：兩份假想筆記——一份只是換位置，一份說清楚因果與和舊知識的關係。
- 限制：不同生成活動不一定能互相替代，也不是越多越好（例：某動畫教材研究中寫摘要有幫助、畫圖沒有，兩者合做未優於只寫摘要；這是特定條件下的結果）。
- 文獻：
  - Fiorella, L. (2023). Making sense of generative learning. *Educational Psychology Review, 35*, Article 50.（主幹）
  - Brod, G. (2021). Generative learning: Which strategies for what age? *Educational Psychology Review, 33*, 1295–1318.
  - Lawson, A. P., & Mayer, R. E. (2024). Generative learning activities for online multimedia learning: When summarizing is effective but drawing is not. *Frontiers in Psychology, 15*, Article 1452385.

### 4. 自我解釋

- 從「看得懂解答每一行，收起來卻不知道為什麼這樣做」切入。核心區分**重述內容**與**補出關係**。
- 可示範三種提問：這一步用了什麼原理？和前一步有什麼關係？條件改變後原來的解釋還成立嗎？（依概念設計的範例，不是唯一題型）
- 限制：整體有益，但效果隨知識內容、學習環境與安排而變；解釋品質本身仍待研究。
- 文獻：
  - Tan, L.-P., Gong, S.-Y., Wang, Y.-J., Guo, X.-R., Xu, X.-Z., & Wang, Y.-Q. (2025). Enhancing academic performance through self-explanation in digital learning environments (DLEs): A three-level meta-analysis. *Educational Psychology Review, 37*, Article 20.（討論稿稱整合 56 項研究，待查證）
  - Bisra, K., Liu, Q., Nesbit, J. C., Salimi, F., & Winne, P. H. (2018). Inducing self-explanation: A meta-analysis. *Educational Psychology Review, 30*, 703–725.
  - Endres, T., Carpenter, S. K., & Renkl, A. (2024). Constructive retrieval: Benefits for learning, motivation, and metacognitive monitoring. *Learning and Instruction, 94*, Article 101974.（實證研究，不是綜述；放延伸閱讀）
  - 共用 Fiorella（2023），交代與生成學習的關係。

### 5. 認知負荷理論

- 不用「大腦像小容器」當核心比喻（容易被讀成「內容越少越好」）。從「把說明放到對應步驟旁邊就比較好懂」切入。
- 核心：困難不只來自內容本身，也來自被迫用什麼方式處理內容；減少無助於學習的處理，不拿掉必要的理解活動。
- 交代理論修訂：Sweller（2023）中增生負荷不再被視為與內在、外在負荷並列的獨立來源（待查證）；入門正文只在補充說明交代。
- 主要篇幅：分段、整合必要資訊、提供示範、依先備知識調整引導。
- 文獻：
  - Sweller, J. (2023). The development of cognitive load theory: Replication crises and incorporation of other theories can lead to theory expansion. *Educational Psychology Review, 35*, Article 95.（理論發展論述，不當後設分析介紹）
  - Sweller, J. (2024). Cognitive load theory and individual differences. *Learning and Individual Differences, 110*, Article 102423.
  - Paas, F., & van Merriënboer, J. J. G. (2020). Cognitive-load theory: Methods to manage working memory load in the learning of complex tasks. *Current Directions in Psychological Science, 29*(4), 394–398.
  - 可共用 Brod（2021）或 Fiorella（2023）談活動要求，但要分清理論來源。

### 6. KLI 框架

- 不從分類表開始，從「同樣說學會一個概念，其實可能指不同事情」開始（記住公式／知道何時適用／理解推導／在新題目使用；示意，不是 KLI 正式分類）。
- 三個層次：希望形成什麼知識、需要什麼學習過程、如何安排教學活動；用途是連結三者，不是一體適用的最佳教法。
- 讀完要能問：「我安排的活動，真的要求學習者處理我希望他學會的東西嗎？」
- 延伸：數位工具提供的功能不等於學生實際的認知活動；前一階段形成的知識可能改變下一階段活動的效果。
- 偏向教師、教材設計者與研究讀者，但仍先例子後框架。不把 Mnemo-Card 四種卡型對應到 KLI 知識類型。
- 文獻：
  - Koedinger, K. R., Corbett, A. T., & Perfetti, C. (2012). The knowledge-learning-instruction framework: Bridging the science-practice chasm to enhance robust student learning. *Cognitive Science, 36*(5), 757–798.（原始來源，必留）
  - Reinhold, F., Leuders, T., Loibl, K., Nückles, M., Beege, M., & Boelmann, J. M. (2024). Learning mechanisms explaining learning with digital tools in educational settings: A cognitive process framework. *Educational Psychology Review, 36*, Article 14.（CoDiL；借鑑 KLI 的整合框架，不是新版 KLI）
  - Loibl, K., Leuders, T., Glogger-Frey, I., & Rummel, N. (2025). CID: A framework for the cognitive analysis of composite instructional designs. *Instructional Science, 53*, 1485–1509.（2024 先行線上發表）

## 5. 跨篇學術界線

- 生成學習 ≠ 生成式 AI；自我解釋可視為生成學習的一種具體策略。
- 認知負荷理論 ≠ 學習越輕鬆越好。
- 間隔練習 ≠ 某種固定排程最佳；擴張間隔不是已確立的普遍規則。
- KLI ≠ 把四種卡型對應到四種知識類型。
- 文章間的概念關係圖是文件導讀用的整理，不是單一理論提出的因果模型。

## 6. Builder 檢查：落地前要先處理的事

1. **文獻查證（最大成本，也是最大風險）**：上列 20 篇的書目與研究發現都來自討論，必須逐一對照原文。
   - 核對者要讀得到全文。開放取用的（多數 *Educational Psychology Review* 文章、*Frontiers*、*Behavioral Sciences*）較容易；
     *Nature Reviews Psychology*、*Annual Review of Psychology*、*Psychological Bulletin*、*Cognitive Science*、
     *Learning and Individual Differences*、*Current Directions* 可能要找作者公開版。**讀不到全文的文獻，不用它支撐具體說法**
     （最多列為延伸閱讀，或換成可取得的來源）。
   - 具體數字（研究數、樣本數、效果量）與「某研究發現」的句子，逐句寫頁碼或章節。
2. **產品段對照產品現況**：卡片背面是一段概述加兩個提示；排程是固定遞增與每週間隔，不能暗示是最佳排程。
   主程式的範例卡已講過檢索練習、自我解釋與建構性檢索，說法要一致。
3. **網站接法**：`astro.config.mjs` 側欄是手動設定（frontmatter 的 `sidebar.label`／`order` 不會自動生效），要加群組；
   現有網址不動；決定第三篇 `next: false` 是否改接導讀頁；首頁「先讀哪一篇」加入口；`tests/helpers.ts` 的 `PAGES`、
   上下篇與側欄順序測試要更新；可沿用 slice 2 做法以測試鎖住各篇的 h2 清單。
4. **公開儲存庫與著作權**：論文只轉述，不複製段落、不散布 PDF；引文網址去掉追蹤參數。
5. **輕量流程（owner 要求少耗 token）**：intent 只列篇目、文獻池、寫作規格、界線與不做的事；G2 一次合審；
   一篇一張工作票、每篇一位核對者同時查文獻與產品；文案每兩、三篇送 owner 一次；G6 豁免；保留一次獨立 G4。
   篇數多，可考慮分兩批上線（例如先導讀＋檢索＋間隔＋自我解釋，再生成學習＋認知負荷＋KLI），由 owner 在 G1 決定。
