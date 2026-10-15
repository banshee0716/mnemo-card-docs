<!--
  slice 3 ticket 12 文案草稿：學習科學〈KLI 框架〉。
  依 spec-slice3 R22–R24、R27；事實來源：research/kli-framework.md（Koedinger et al. 2012 為 CMU 機構典藏的作者最終稿，頁碼依稿件頁序；
  Reinhold et al. 2024、Loibl et al. 2025 為出版社開放取用版）。owner 提供的討論整理與三角形面積示意圖只作寫作流程參考；
  owner 指定的兩篇部落格文章只作結構參考，不引用。著重：K、L、I 的定義、學習過程分類、與其他學習理論的連結（owner 2026-10-15）。
  產品段：無；正文不出現產品名稱與卡型名稱（R25、AC22）。
  送 owner 審閱；同意後才寫進 src/content/docs/learning-science/kli-framework.mdx。
-->

---
title: KLI 框架：為什麼要先想清楚「學會」是什麼意思？
description: KLI 框架把「學什麼」「怎麼學會」「怎麼教」分開來看。說明知識、學習與教學各指什麼、學習過程的三種類型，以及它如何把不同的學習研究連在一起。
---

假設老師說「這週要學會三角形面積」。學會指的是什麼？以下是一個示意，不是原始論文的分類：

- 說得出公式「底乘以高，再除以二」；
- 在各種形狀、方向的三角形裡，找得出哪一條是底、哪一條是高；
- 拿到不同的數字，能正確算出面積；
- 說得出為什麼要除以二，以及它和平行四邊形面積的關係。

同一個單元包含好幾種不同的能力，學會一種不代表學會其他。原始論文也提到，三角形面積公式背後有道理可講，但會正確使用它的學生，未必理解這個道理 (Koedinger et al., 2012)。

**KLI 框架**（Knowledge-Learning-Instruction framework）想處理的就是這件事：在問「哪種教法最好」之前，先弄清楚要學會的是哪一種知識、需要哪一種學習過程 (Koedinger et al., 2012)。

## K、L、I 各指什麼？

KLI 是三個英文字的縮寫 (Koedinger et al., 2012)：

- **K：知識**（knowledge）。學習者要學會什麼。框架用**知識組件**（knowledge component）稱呼學到的一個個知識單位；知識組件看不見，只能從學習者在一組相關任務上的表現推論出來。
- **L：學習**（learning）。學習者腦中發生了什麼變化。這些變化看不見，而且會受到學習者原本已經知道什麼影響。
- **I：教學**（instruction）。看得見、通常是事先安排的活動，例如給練習題、提供回饋、帶討論。

三者的關係是：知識的種類限制了需要的學習過程，學習過程又限制了合適的教學安排。框架另外也把「評量」列為看得見的事件：要知道學生學到什麼，只能靠比較他們在不同題目上的表現 (Koedinger et al., 2012)。

知識組件可以依四個問題來區分 (Koedinger et al., 2012)：

- **什麼時候用？** 適用的情況是固定的，還是要先辨認眼前是哪一種情況？
- **答案是什麼？** 答案是固定的，還是要依條件產生不同的答案？
- **說得出來嗎？** 這項知識能不能用語言表達？
- **有道理可講嗎？** 這項知識有沒有成立的理由？（作者說這是程度之分。）

依此可分出事實、類別、概念、規則、原理等類型，但作者說這些名稱只是粗略的對應。

## 學習有哪幾種過程？

框架把學習過程分成三大類 (Koedinger et al., 2012)：

- **記憶與流暢化**（memory and fluency-building）：記得更牢、用得更快、更自動。例如反覆回想公式，直到不必思考就能說出。
- **歸納與精煉**（induction and refinement）：從許多例子找出規律，並逐步修正。例如看過很多三角形後，越來越能準確找出高。
- **理解與意義建構**（understanding and sense-making）：弄懂道理，建立能用語言說明理由的知識。例如想通三角形為什麼是平行四邊形的一半。

以上例子是示意。

這三類不是固定的先後順序，可以各自進行，也可以同時發生；不過作者也指出，新手常在歸納與理解，熟練之後重點才轉向精煉與流暢化 (Koedinger et al., 2012)。

框架用**穩健學習**（robust learning）來判斷學習的品質：學到的東西能長期記得、能用在新的情境，並且能讓之後的學習更快。學習過程和這三種結果之間不是一對一的關係，例如不是只有理解才帶來遷移 (Koedinger et al., 2012)。

## KLI 怎麼把不同的學習研究連在一起？

KLI 的一個用處，是替各種學習研究找到各自的位置。原始論文把有研究支持的教學原則，依它主要促進的學習過程分類 (Koedinger et al., 2012)：

- **記憶與流暢化**：[間隔練習](../spaced-practice/)、測驗（也就是[檢索練習](../retrieval-practice/)）。
- **歸納與精煉**：即時回饋、引導學習者注意關鍵特徵、提供解題示範（見[〈認知負荷理論〉](../cognitive-load/)）。
- **理解與意義建構**：提示學習者[自我解釋](../self-explanation/)、讓學生在討論中說明理由。

這種分類也能解釋一些看似矛盾的建議。有些研究者主張刻意增加學習的難度，有些則主張減少外在負荷；作者提出，兩邊的差異可能來自研究的知識種類、學習過程與評量方式不同，這是可以進一步檢驗的假設 (Koedinger et al., 2012)。

作者還提出**不對稱假說**（asymmetry hypothesis）：記憶、練習這類簡單的學習過程也能幫助學習複雜的知識；但論證、解釋這類複雜的過程，對學習一個沒有道理可講的單純事實，未必有幫助 (Koedinger et al., 2012)。作者認為這個看法比「簡單知識配簡單教法、複雜知識配複雜教法」更接近事實，但它仍是一個假說。

後來的研究者也借用 KLI 發展新框架：有研究把它和生成學習常用的「選擇、組織、整合」等觀點整合，分析數位工具如何影響學習 (Reinhold et al., 2024)；也有研究沿用它的層次，分析由多個階段組成的教學設計 (Loibl et al., 2025)。這些是延伸 KLI 的框架，不是新版的 KLI。

## 是不是只要找到最好的教學方法就好？

不是。KLI 要改變的正是這個問法：與其問「哪個教學方法最好」，不如問「對哪一種知識、需要哪一種學習過程時，哪個方法比較有效」 (Koedinger et al., 2012)。

但 KLI 也不是一套現成的答案。作者明白表示，知識類型和教學方式之間的配對，目前是暫時的假設，需要更多實驗檢驗；框架主要根據國中到大學的研究，用在其他族群時也需要新的研究。此外，要把一個單元拆成哪些知識組件，作者形容是藝術成分不亞於科學，需要判斷，沒有萬無一失的方法 (Koedinger et al., 2012)。

## 可以怎麼開始？

1. **先寫下「學會」的意思。** 把一個單元拆成幾項具體能力，例如記得、辨認、運用、說明理由。
2. **想想每項能力需要哪種學習過程。** 是要記得更牢、從例子找出規律，還是弄懂道理？
3. **再選活動。** 問自己：「我安排的活動，真的要求學習者處理我希望他學會的東西嗎？」
4. **用不同方式檢查。** 除了當下的測驗，也看隔一段時間後還記不記得、新題目會不會用。

## 參考文獻

- Koedinger, K. R., Corbett, A. T., & Perfetti, C. (2012). The Knowledge-Learning-Instruction framework: Bridging the science-practice chasm to enhance robust student learning. *Cognitive Science, 36*(5), 757–798. [https://doi.org/10.1111/j.1551-6709.2012.01245.x](https://doi.org/10.1111/j.1551-6709.2012.01245.x)
- Loibl, K., Leuders, T., Glogger-Frey, I., & Rummel, N. (2025). CID: A framework for the cognitive analysis of composite instructional designs. *Instructional Science, 53*(6), 1485–1509. [https://doi.org/10.1007/s11251-024-09665-9](https://doi.org/10.1007/s11251-024-09665-9)
- Reinhold, F., Leuders, T., Loibl, K., Nückles, M., Beege, M., & Boelmann, J. M. (2024). Learning mechanisms explaining learning with digital tools in educational settings: A cognitive process framework. *Educational Psychology Review, 36*(1), Article 14. [https://doi.org/10.1007/s10648-024-09845-6](https://doi.org/10.1007/s10648-024-09845-6)

## 延伸閱讀

- Koedinger, K. R., Corbett, A. T., & Perfetti, C. (2012). The Knowledge-Learning-Instruction framework: Bridging the science-practice chasm to enhance robust student learning. *Cognitive Science, 36*(5), 757–798. [https://doi.org/10.1111/j.1551-6709.2012.01245.x](https://doi.org/10.1111/j.1551-6709.2012.01245.x)
  閱讀指引：原始論文篇幅長、術語多，可以先讀說明三種事件的部分，再看知識組件的分類表與學習過程的三種類型；作者服務的大學典藏庫有公開版本。
- Reinhold, F., Leuders, T., Loibl, K., Nückles, M., Beege, M., & Boelmann, J. M. (2024). Learning mechanisms explaining learning with digital tools in educational settings: A cognitive process framework. *Educational Psychology Review, 36*(1), Article 14. [https://doi.org/10.1007/s10648-024-09845-6](https://doi.org/10.1007/s10648-024-09845-6)
  閱讀指引：適合想知道 KLI 如何和其他學習理論結合、用在數位學習工具的讀者。全文開放取用。
