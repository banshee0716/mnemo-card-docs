# 文獻查證：KLI 框架（Batch 2：學習科學入門 第 6 篇）

查證日期：2026-10-14（接續於 2026-10-15）。依 spec-slice3 R24 執行；R27 不宣稱規則適用。
本檔是公開檔案：只有轉述、頁碼、短引文與公開網址。全文 PDF 只放在工作階段暫存目錄，未進儲存庫。

頁碼說明（重要）：
- Koedinger et al. (2012)：取得的是**作者最終稿（authors' final version，2011-12-06 稿，非出版社排版的正式版）**，共 41 頁，每頁頁首有稿內頁序。本檔寫作「稿 p.N」。**稿頁碼不等於期刊印刷頁 757–798**，S6 必須使用同一份作者稿核對；文章中如要標印刷頁，需 owner 取得出版社正式版後再對照。文中另附章節編號，方便對照正式版。
- Reinhold et al. (2024)：出版社開放取用正式版（CC BY 4.0），頁首印「Page N of 21」，寫作「p.N」。
- Loibl et al. (2025)：出版社開放取用正式版（CC BY 4.0）；本檔以 PDF 頁序 N 表示（第 1 頁＝期刊頁 1485），寫作「PDF p.N」，期刊印刷頁碼未逐頁核對。

## 總表

| 文獻 | 書目核對結果 | 全文版本與網址 | 可否支撐具體說法 |
|---|---|---|---|
| Koedinger, Corbett, & Perfetti (2012)（主幹） | 作者順序、年份、期刊 *Cognitive Science* 36(5)、頁 757–798、DOI 10.1111/j.1551-6709.2012.01245.x，與 Crossref、作者稿首頁一致。**篇名大小寫**：出版社頁為 "The Knowledge‐Learning‐Instruction Framework: Bridging the Science‐Practice Chasm to Enhance Robust Student Learning"（Title Case）；brief 寫成 sentence case "knowledge-learning-instruction framework"。APA 7 篇名用 sentence case，brief 寫法可用，但 "Knowledge-Learning-Instruction" 是專有框架名，建議保留大寫。作者稿首頁把第二作者縮寫印成 "Corbett, A.C."，出版社資料是 Albert T. Corbett（A. T.），以 brief／Crossref 為準 | 作者最終稿，CMU KiltHub（figshare）公開：https://doi.org/10.1184/r1/6470522（檔案下載 https://ndownloader.figshare.com/files/11899079）。出版社 Wiley 頁（https://doi.org/10.1111/j.1551-6709.2012.01245.x）需訂閱，未使用；不在 PubMed Central／Europe PMC 全文。原先 Unpaywall 列的 pact.cs.cmu.edu 位址連不上 | 可。全文已讀（稿 pp.1–34 正文，pp.35–40 參考文獻，p.41 註腳）。頁碼為稿頁序，見上 |
| Reinhold et al. (2024) | 作者六位（Reinhold, Leuders, Loibl, Nückles, Beege, Boelmann）順序與 brief 相符；*Educational Psychology Review* 36，Article 14（Crossref 文章編號 14，線上 2024-01-26，2024-01-02 接受）；DOI 10.1007/s10648-024-09845-6。篇名出版社頁為 "Learning Mechanisms Explaining Learning With Digital Tools in Educational Settings: a Cognitive Process Framework"；APA 7 用 sentence case 即與 brief 一致 | 出版社開放取用正式版（CC BY 4.0），已讀相關段落。https://doi.org/10.1007/s10648-024-09845-6 | 僅用來說明它自己如何描述與 KLI 的關係（見第 2 節）。未通讀其全部論證，不支撐其他具體說法 |
| Loibl et al. (2025) | 作者四位（Loibl, Leuders, Glogger-Frey, Rummel）相符；*Instructional Science* 53(6)，1485–1509；DOI 10.1007/s11251-024-09665-9；線上發表 2024-05-18（2024-04-01 接受），與 brief「2024 先行線上」一致。**書目要補：期號 (6)**。篇名出版社頁為 "CID: a framework for the cognitive analysis of composite instructional designs" | 出版社開放取用正式版（CC BY 4.0），已讀相關段落。https://doi.org/10.1007/s11251-024-09665-9 | 僅用來說明它自己如何描述與 KLI 的關係（見第 3 節）。未通讀其全部論證 |

取得全文的過程：Koedinger 以 Unpaywall 查到作者版，經 figshare API 取得 CMU 機構典藏檔；Reinhold 與 Loibl 用瀏覽器自動化按出版社頁面的「Download PDF」。未使用 Sci-Hub、LibGen、Scribd、部落格等第三方來源。

---

## 1. Koedinger, Corbett, & Perfetti (2012)（主幹）

Koedinger, K. R., Corbett, A. T., & Perfetti, C. (2012). The Knowledge-Learning-Instruction framework: Bridging the science-practice chasm to enhance robust student learning. *Cognitive Science, 36*(5), 757–798. https://doi.org/10.1111/j.1551-6709.2012.01245.x

文獻性質：理論框架論文（不是後設分析、不是單一實驗）。作者自稱這是 framework 而非 theory：框架提出大方向的主張，要加上假設才能變成可預測的理論（稿 p.5，引 Anderson 1993）。論文提出三個互相協調的分類（知識、學習、教學）與它們之間的依賴關係，並以工作範例原則為例示範（第 6 節）。

### R24 書目核對

見總表。補充：頁碼 757–798 與 Crossref 一致；稿共 41 頁（含參考文獻與註腳）。

### a–j 核對表（討論稿說法 vs 原文）

稿頁碼＝作者稿頁序。結果欄用「符合／部分符合／不符／原文找不到」。

**a. 框架三部分：知識、學習、教學；並關注評量表現、既有知識與學習過程的關係。——符合（需補一點）**
- 稿 p.5：框架由三個分類組成：知識的種類、學習歷程的種類、教學選擇的種類，及它們之間的依賴關係；知識限制學習歷程，學習歷程再限制哪些教學選擇最適合產生穩健學習。
- 稿 p.6（第 2.1 節、圖 1）：框架連結三種事件：教學事件（Instructional Events，可觀察、通常是計畫好的環境變動）、學習事件（Learning Events，不可觀察的認知變化，會被既有知識影響）、評量事件（Assessment Events，可觀察）。圖 1 說明：教學事件導致學習事件，學習事件導致知識組件改變，知識組件導致學生表現，表現在評量事件中被觀察。
- 補充：討論稿的「評量表現、既有知識與學習過程的關係」可對應圖 1 與其說明（學習事件「can be effected by existing knowledge」，稿 p.6 圖 1 說明）；但評量事件是原文第四個明確列出的事件類型，不是單純的附帶說明。文章若寫「三個層次」要注意：原文的核心是三個「分類」，事件有三種（教學、學習、評量）。

**b. KC 定義：從學生在任務上的表現推論出的知識單位。——符合（措辭宜更精確）**
- 稿 p.9 原文定義：「an acquired unit of cognitive function or structure that can be inferred from performance on a set of related tasks」。差在：是「習得的認知功能或結構單位」，且是從「一組相關任務」的表現推論，不是單一任務。
- 稿 p.7：KC 本身不可觀察，要靠比較不同評量事件（任務或題目）的表現來推論。稿 p.9：KC 是概括詞，涵蓋產生式規則、schema、迷思概念、facet，以及日常用語的概念、原理、事實、技能。稿 p.9：許多 KC 在約 10 秒的「單位任務」層級。
- 原文用語是 Knowledge Component；中文宜寫「知識組件」並附英文。

**c. KC 分類依據。——符合（四項都在原文；細節需補）**
- 稿 p.12：知識分類做出四個關鍵區分：應用條件的一般性（constant 固定／variable 變動）、反應的一般性、KC 是否為語言可表達（verbal）、能在多大程度上被合理化（rationale）。稿 p.11：「條件─反應」格式強調知道不只是 what／how，還有 when。
- 注意 rationale：原文說理由的有無是「graded rather than all or none」（程度之分，非有無二分），且取決於該領域的理論發展深度（稿 p.15，第 3.1.5 節）。但表 3 把它列成 yes／no 欄。
- 原文「表 3：基本知識組件類別」（稿 p.12）七列（條件／反應／語言關係／理由→常見名稱），如實轉述：
  1. 固定／固定／非語言／無 → association（聯結）
  2. 固定／固定／語言／無 → fact（事實）
  3. 變動／固定／非語言／無 → category（類別）
  4. 變動／固定／語言／無 → concept（概念）
  5. 變動／變動／非語言／無 → production、schema、skill（產生式、基模、技能）
  6. 變動／變動／語言／無 → rule、plan（規則、計畫）
  7. 變動／變動／語言／有 → principle、rule、model（原理、規則、模型）
  原文明言：這些名稱是對常用詞的「粗略對應」，「不一定與分類中的格子一對一」（稿 p.12）。
- 表 4（稿 p.23）把 KC 簡化為三欄：Facts（固定─固定）、Rules（條件變動）、Principles（帶理由的語言 KC）。
- 複雜度：條件／反應為變動、語言與非語言並有、帶理由者較複雜（稿 p.16）。
- 文章若要寫「事實、規則、原理」三種，要標明這是表 4 的簡化，完整分類是表 3。

**d. 學習過程三大類；三者不是固定順序。——大類符合；「不是固定順序」部分符合**
- 稿 p.19（第 4 節）三類：A. Memory and fluency-building（記憶與流暢化；非語言，強化記憶與知識編譯，使知識更自動、成為「chunked」）；B. Induction and refinement（歸納與精煉；非語言，提高知識準確度，含知覺、概括、辨別、分類、基模歸納、因果歸納）；C. Understanding and sense-making（理解與意義建構；明確、以語言為中介，含理解文字描述、解釋式學習、科學發現、語言規則演繹，也含自我解釋、論證，稿 p.22）。
- 順序：原文**沒有規定固定順序**。稿 p.33 結論：這些過程「可以或多或少獨立地、或某種程度同步地進行」（can proceed more-or-less independently or in some synchrony）。稿 p.21–22：記憶強化貫穿學習全程；許多能力先由非語言歸納產生，之後才可能被「理解」並說出來，但理解與意義建構也可出現在知識形成早期（稿 p.22）。
- 但原文有「階段」傾向的說法（不是固定順序）：學規則時歸納對初始形成和精煉很關鍵，之後記憶與流暢化才變重要（稿 p.24）；新手主要在歸納與意義建構，進階學生在精煉與流暢化（稿 p.31）。→ 文章寫「不是固定順序」可以，但不要寫成「沒有任何階段傾向」。
- 稿 p.20：學習過程與穩健學習結果之間沒有一對一對應（例如不是只有意義建構才帶來遷移）。

**e. 教學原則與知識類型、學習過程的對應；是否寫成待驗證假設。——符合（原文明寫為假設）**
- 稿 p.25 表 5（原則依學習過程分類，由簡到繁）：記憶與流暢化 → 間隔與測驗（Spacing and Testing）、最佳化排程；歸納與精煉 → 及時回饋、特徵聚焦（Feature Focusing）、工作範例；理解與意義建構 → 提示式自我解釋、Accountable Talk（課堂談話）。稿 p.24：此處「原則」指有「substantial evidence」支持能提升穩健學習效率的教學事件。
- 稿 p.18–19：原文對「教學選擇如何依知識類型而定」提出「tentative hypotheses」（暫時性假設）：簡單的固定─固定 KC（歷史事實、詞彙）與非語言可能性類別傾向強調回憶、間隔、輔導式練習與排程；複雜的變動─變動 KC 傾向比較與更多工作範例；需要語言與非語言兩種形式的整合型 KC 傾向提示自我解釋；有理由的 KC 傾向課堂論證與對話。原文：「Each hypothesis has some support in the research literature」，並明說「all these hypotheses require further testing」（稿 p.18）。
- 稿 p.19：分類「does not resolve these debates」，只是提供可實驗檢驗的「knowledge-by-instruction interactions」。
- 稿 p.28 表 6：標題為「A possible correlation」，是已有實驗的整理（+ 有效、0 無差異、空格無相關實驗），不是定論。
- 稿 p.8：框架可用來產生假設，說明「desirable difficulties」（提高難度）與降低認知負荷兩派看似矛盾的建議，可能因為研究的知識種類、學習事件、評量事件不同——原文稱這是「generate hypotheses」，不是已解決。

**f. 不對稱假說。——需如實描述；討論稿未給內容，下為原文**
- 稿 p.23–24（第 4.4 節）首次出現：較簡單的學習過程（流暢化與精煉）可能支持複雜知識，但複雜的學習過程（如論證）可能無法支持簡單知識（如任意的固定─固定聯結）。對照表 4：事實欄中，歸納與精煉、理解與意義建構都標「−−」（沒有要歸納的一般化，也沒有理由可用來理解）。
- 稿 p.28–29（第 5.4 節）教學層面的版本：複雜知識的教學可包含簡單的教學事件，簡單知識則不會因更複雜的教學事件而受益。與之對照的「對齊假說（alignment hypothesis）」（簡單知識用簡單教學、複雜知識用複雜教學；兩個方向）被作者論證為不夠準確，因為間隔、測驗等簡單記憶方法對複雜 KC 也有效。
- 作者結論語氣：「more nearly correct」（稿 p.29）；結論再說「could turn out to be more nearly correct」（稿 p.33）。同段列出反方論點：複雜教學（自我解釋、論證）可能間接達到與簡單方法相同的記憶效果；助記法本身即是解釋（稿 p.29）。並強調要把時間成本納入效率判斷（稿 p.29）。
- 所以是「假說」，不是已證實的原則。

**g. 穩健學習。——符合**
- 稿 p.5–6：學習是穩健的，當它（1）長期保持（long-term retention）、（2）遷移到與學習情境在材料內容、情境等維度不同的新情境、或（3）加速未來學習（accelerated future learning）。
- 稿 p.20（圖 3 說明）：加速未來學習可包含三種不同過程：學習如何學習（一般學習策略）、獲得深層概念或基礎技能、增加「cognitive head room」（核心知識的流暢化釋出容量）。
- 稿 p.20：學習過程與穩健結果不是一對一。
- 稿 p.13：評量需有延遲測驗、速度（流暢度）等，才能更可靠地推論穩健獲得。

**h. 作者承認配對仍需驗證；限制是否為原文所述。——配對需驗證：符合；限制：部分符合（原文有，但沒有單獨的限制章節，說法分散）**
- 需驗證：稿 p.18「all these hypotheses require further testing」；稿 p.5：框架中的每個命題與教學原則，對其他人群都是可實驗檢驗的假設；稿 p.29：「more research is needed to clarify boundaries」；稿 p.34：框架「imply a broad range of empirical studies that can disconfirm as well as strengthen」，不是固定的分類，最後以是否促成「revision, abandonment, or enrichment」來檢驗其效用。
- 範圍：研究主要取自國中到大學（稿 p.5），其他人群需要新的研究。
- KC 劃分有判斷空間：稿 p.8「Cognitive task analysis remains as much an art as a science」；稿 p.10：KC 是階層的，要選對層級；稿 p.16：以描述長度與執行時間估計 KC 複雜度，「Neither approach is guaranteed」；稿 p.41 註腳 ix：何時把 KC 拆小，與成績門檻（例：95%）有關；稿 p.17–18：沒有萬無一失的方法預測學生的迷思。
- 一項任務涉及多個 KC：稿 p.10（階層例：句子理解依賴字詞辨識、三角學依賴幾何）；稿 p.15–16、p.18 的整合型 KC（integrative KC）需要多個任務的組合才能推論，推論要靠較難與較易任務的比較；稿 p.13 單一題目答對不足以推論（例：選對 "an orange"，要再測 "an honor" 才知道條件）。
- 其他限制：稿 p.27 自我解釋對不同 KC 與學習者不一定有益（知覺性或非語言 KC 可能受干擾；低先備知識者需要訓練）。
- 文章若寫「作者在文中承認 KC 劃分需要判斷」可以，但出處要寫多處，且是「藝術與科學並存」等語氣，不是專節限制。

**i. 「三角形面積」四種知識不是原文例子；原文實際的例子。——不符（原文沒有這四分法）；有相關的原文例子**
- 原文沒有「記住公式／辨認底與高／代入計算／理解為何除以 2」這樣的四分。
- 原文的幾何面積例子：
  - 表 2（稿 p.11）數學列：「Rule from name」圓面積公式名稱→A=πr²（固定─固定）；「Rule from context」要求某圖形面積且為圓→用 A=πr²（變動─固定）；「Solution planning」不規則形狀由規則形狀組成→分別求面積再合併（變動─變動）。
  - 稿 p.13：變動─變動例「To find the area of a triangle with height <H> and base <B>, multiply <H> * <B> * 1/2」（三角形面積是原文用來說明變動─變動 KC 的例子之一）。
  - 稿 p.15：「三角形面積公式」是有理由的規則（是歐氏空間的可證規律），但**成功的幾何學生可能不理解它的理由**（與語言使用者不知道複數規則的理由類比）。這與討論稿第 4 種「理解為何除以 2」精神接近，但原文沒有說「為何除以 2」的具體內容。
  - 稿 p.17（圖 2c）：幾何面積單元（圓面積，3.14×R^2）是變動─變動 KC 的計時例子，正確作答約 10–14 秒。
  - 稿 p.14、p.22：等腰三角形底角相等、「看起來相等就相等」的錯誤歸納（歸納與精煉的例子）。
- 結論：文章若用三角形面積的四種知識，必須標明「示意，非原文」；可說原文以三角形、圓面積的公式作為變動條件 KC 與帶理由規則的例子。

**j. 「日本首都」「四季成因」不是原文例子；原文是否有類似的對比例子。——原文沒有這兩個例子；有類似的對比**
- 原文以固定─固定（事實）對比有理由的規則／原理的例子：
  - 中文偏旁「日」→「sun」：固定─固定，無理由，是書寫慣例（稿 p.11–12）。
  - 「gravitational acceleration → g = 9.8/s²」（內容事實，稿 p.11 表 2）；「Pi 是圓周與直徑的比」，術語與定義的固定─固定 KC（稿 p.13）；歷史事實、詞彙為簡單 KC（稿 p.18）。
  - 與之對照：英文複數規則「去 y 加 ies」、定冠詞選擇（變動條件）；牛頓定律、數學定理（有理由的原理，稿 p.15、p.27）。
  - 稿 p.15 註腳 viii：tip／tub 的複數發音差異由語音限制解釋，有「自然的理由」，與任意的英文拼寫規則對比；稿 p.24：一個任意聯結的例子（不含 "ching" 偏旁的漢字仍讀 ching），無法用解釋重新推導。
  - 註腳 vi（稿 p.41）：能認出 "3/4" 是分數與能說出分數的定義是不同的 KC。
- 若文章要用「日本首都」（記住事實）對「四季成因」（可以理解與推導）的對比，宜寫為「示意」。在 KLI 的分類中，前者接近固定─固定的事實；後者是否算「帶理由的原理」，要由文章自己說明，原文沒有舉這個例子。

### 其他可能用到的原文重點（附稿頁碼）

- 框架的定位：作者說明這是「在教學環境中以學習者與教學環境的互動為分析單位」的中等顆粒度框架（稿 p.4）。
- 原則應依 KC 而非領域：「instructional principles should refer to KCs rather than to domains」（稿 p.18）；原文反對「drill and practice is not effective for mathematics」這類領域層級的說法。
- 先備知識與階段：新手與進階不是學生與領域之間的關係，而是學生與某個 KC 之間的關係（稿 p.32，第 6.4 節）。
- 兩派建議的調和（desirable difficulties 與降低認知負荷）以假設形式提出（稿 p.8，見上 e 項）。
- 作者視框架為促成研究的工具，並比較了 Bloom 分類：Bloom 以教學目標表達，KLI 聚焦達到目標所需的知識，以認知歷程表達（稿 p.33）。
- 與本站其他篇的連結（若需要）：自我解釋的討論見稿 p.14、p.27；間隔與測驗見稿 p.12、p.18、p.25；工作範例與認知負荷的比較見稿 pp.30–32（作者提出「知識缺口」理論作為認知負荷理論的另一種、可能互補的解釋，稿 p.30–32）。

### 對入門文章的使用建議（查證結論）

- 可寫：三個分類的連結用途；KC 的定義（照 b 項）；四個區分與表 3、表 4 的簡化（照 c 項）；三大類學習過程且非固定順序（照 d 項）；穩健學習三個面向（g 項）。
- 要帶「假設」語氣：教學原則與知識類型的對應（e 項）、不對稱假說（f 項）。
- 限制：寫為原文承認的（h 項），出處多處，不是專節。
- 例子：三角形面積四分法、日本首都、四季成因都須標「示意」；原文真實例子見 i、j 項。
- 邊界：原文不涉及 Mnemo-Card；R27 禁止把卡型對應到 KC 類型。

---

## 2. Reinhold et al. (2024)（CoDiL）

Reinhold, F., Leuders, T., Loibl, K., Nückles, M., Beege, M., & Boelmann, J. M. (2024). Learning mechanisms explaining learning with digital tools in educational settings: A cognitive process framework. *Educational Psychology Review, 36*, Article 14. https://doi.org/10.1007/s10648-024-09845-6

只確認它如何描述自己與 KLI 的關係（頁碼為出版社 PDF 頁首的 Page N of 21）：
- p.1 摘要：提出 CoDiL，它「結合」（combines）三方面的核心想法：教學心理學的 utilization-of-learning-opportunity 框架、認知心理學的 knowledge-learning-instruction 框架，以及特定領域的學習與教學研究；稱為「synthesizing framework」（綜合框架）。
- p.3：用 KLI（Koedinger et al., 2012）來區分外部的教學事件與評量事件，以及內部的學習過程與知識組件，認為它很適合描述數位工具學習；CoDiL 納入 KLI 與 ULO 的核心想法（另外 SOI 模型定義內部認知核心過程）。
- p.5：沿用 KLI 把學習視為主動、建構、內容特定的認知過程，並引用 KLI 對知識組件的定義。
- p.13：作者明說目前的框架是 KLI、SOI、ULO 的「high-level conceptual integration」（高層次的概念整合），要用於具體研究還需在特定情境中具體化。
- 結論：自述為借鑑 KLI 並與其他框架整合的新框架，不是 KLI 的新版或修訂版。

## 3. Loibl et al. (2025)（CID）

Loibl, K., Leuders, T., Glogger-Frey, I., & Rummel, N. (2025). CID: A framework for the cognitive analysis of composite instructional designs. *Instructional Science, 53*(6), 1485–1509. https://doi.org/10.1007/s11251-024-09665-9

只確認它如何描述自己與 KLI 的關係（PDF 頁序 N）：
- PDF p.2：引入處說明 Koedinger et al. (2012) 提出 KLI，把知識組件、學習過程、教學設計三層關聯，以解釋教學設計如何啟動學習過程並帶來結果；CID 要解決的是多階段（組合式）教學設計。
- PDF p.4：「The framework follows Koedinger and colleagues' (2012) argument…」——CID 沿用 KLI 的論點，把這三層連結起來，並聚焦在多個教學階段之間的互動；CID 的核心是階段之間的「中介知識」（intermediate knowledge）如何影響下一階段的學習過程（摘要）。
- PDF p.6、p.9：說明 KLI 沒有明確考慮多階段的組合式設計（「without explicitly considering multiple phases in composite instructional designs」），CID 延伸其想法（例如把 KLI 提出的流暢化釋出認知資源，用於分析前後階段的順序假設）。
- PDF p.18：討論中說，CID 用來連結知識、學習過程、教學設計三層（引 Koedinger et al., 2012），並跨階段連結。
- 結論：自述為沿用並延伸 KLI 的三層邏輯到多階段情境，不是新版 KLI。

---

## 給 S6 與撰稿的提醒

1. Koedinger 只取得作者最終稿；若文章要標印刷頁碼，需 owner 提供出版社正式版（書目與 DOI 見上，Wiley 頁需訂閱）。目前文章只需要章節層級的引用時，可用本檔稿頁碼與章節號對照。
2. Reinhold 與 Loibl 只支撐「它們借鑑／延伸 KLI」這一句；不要用它們來支撐 KLI 本身的內容。
3. 討論稿「對閃卡系統的建議」依 owner 裁定不寫進正文（見 state.md）。
