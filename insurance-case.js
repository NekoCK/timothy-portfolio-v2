(() => {
  "use strict";

  const CASES = {
    "zh-Hant": {
      pageTitle: "從每個客戶都像新專案，到可複用的保險交付框架",
      eyebrow: "案例研究 · 保險科技 · 企業軟體服務 · 2024",
      hero: {
        title: ["從「每個客戶都像新專案」，", "變成可複用的保險交付框架"],
        deck: "我把原本混在一起的交付問題拆成兩個瓶頸：上游收斂客戶決策範圍，下游提高設計與工程複用，讓團隊不只做得更快，也更清楚該做什麼。",
        meta: [["角色", "主責產品設計師"], ["期間", "2024.11–2024.12"], ["團隊", "業務、產品、設計、工程"], ["範圍", "問題定義、產品架構、申請體驗、交付系統"]],
        metricLabels: {
          deliveryAria: "3 個月以上縮短至約 1 個月，交付時間約縮短 67%",
          deliveryUnit: "月",
          approximate: "約",
          deliveryText: "每個新客戶案從需求確認到交付的時間",
          deliveryDelta: "約縮短 67%",
          effortAria: "每個客戶案所需的工程與設計人力，從 9 人週降至 2.4 人週，約減少 73%",
          effortUnit: "人週",
          effortText: "每個客戶案所需的工程＋設計人力",
          effortDelta: "約減少 73%"
        }
      },
      toc: [["00", "案例摘要", "glance"], ["01", "背景", "background"], ["02", "產品與系統決策", "decisions"], ["03", "互動設計決策", "experience"], ["04", "實際採用", "adoption"], ["05", "成果", "outcomes"]],
      glance: {
        label: "案例摘要",
        title: ["每接一個新客戶，", "團隊都要重新談需求、重新設計、重新估工"],
        subtitle: ["平台雖然能高度客製，卻沒有共同起點與清楚的客製邊界。", "業務、設計與工程每一案都得重走一次交付流程，時程也因此難以預估。"],
        image: "assets/Insurance/BeforeAfter_CHv4.svg",
        alt: "調整前為開放式需求造成反覆對齊與重工；調整後由範本先界定選擇範圍，再由團隊於框架內配置可複用模組",
        caption: "調整前：逐案定義範圍並反覆修改。調整後：範本先建立決策邊界，再以可複用模組回應差異需求並加速交付。",
        open: "完整圖"
      },
      background: {
        marker: "背景",
        title: ["客戶選擇太多，讓每個新案都重新開始", "需求重談、設計重做、工程重新估工"],
        body: "平台原本為了支援不同保險商品與品牌，開放了很多可調整項目，但沒有清楚界定哪些可以改、哪些應該共用。結果每個新客戶案都要重新確認需求範圍，設計與工程也難以沿用既有成果。",
        evidenceLabel: "問題如何確認",
        evidence: "訪談業務、產品與工程團隊，並比對既有專案的需求對齊與交付紀錄。",
        problems: [
          { image: "assets/Insurance/01SalesAndClients.png", title: "需求難對齊", body: "缺少可參考的範本，客戶難以具體描述需求，業務需要反覆確認方向。", alt: "客戶與業務因缺少具體範本而反覆確認需求方向的情境" },
          { image: "assets/Insurance/HighFlexible.png", title: "客製無邊界", body: "缺少明確的配置邊界，團隊難以判斷哪些功能可以複用、哪些需要額外開發。", alt: "高度自由的產品缺少明確客製化邊界的情境" },
          { image: "assets/Insurance/01RepeatToDevelop.png", title: "交付難複用", body: "每個新案都要重新設計、估算與開發，既有成果難以轉化為可重用的交付資產。", alt: "設計與工程在每個新案中重複投入開發的情境" }
        ]
      },
      decisions: {
        marker: "產品與系統決策",
        title: ["標準流程能加快交付，", "卻回答不了「彈性應該到哪裡為止」"],
        intro: ["團隊原本希望透過標準流程縮短交付時間，但我在訪談與交付回顧中發現，真正反覆出現的問題是：哪些應該固定、哪些可以讓客戶調整，始終沒有明確答案。", "因此我進一步從「交付模型」與「範本的配置邊界」兩個層次做設計決策。"],
        d1: {
          label: "決策一 · 交付模型",
          title: "交付流程應該固定到什麼程度？",
          comparisonAria: "三種交付模型比較",
          terms: { client: "客戶", design: "設計", dev: "開發", fixedFlow: "同一固定流程", delivery: "交付", need: "客戶需求", boundary: "範本邊界", modules: ["模組甲", "模組乙", "模組丙"] },
          fields: ["做法", "優點", "限制"],
          models: [
            { option: "方案甲", status: "未採用", state: "rejected", title: "逐案客製化", texts: ["每個新客戶重新定義頁面、流程與需求，再由設計與工程逐案交付。", "彈性最高，可以回應個別客戶需求。", "需求難收斂，設計與工程每案重新投入，交付時間也難以預估。"] },
            { option: "方案乙", status: "仍不足", state: "not-enough", title: "單一標準流程", texts: ["所有客戶沿用同一套固定頁面與流程，以標準化降低設計與開發成本。", "交付最快，也最容易估工與維護。", "無法回應不同品牌、商品與合作情境中的必要差異。"] },
            { option: "方案丙", status: "採用", state: "chosen", title: "範本＋受控模組化", texts: ["以基礎版本為主，範本先界定選擇範圍，再讓範本與後續購買流程在預先定義的位置插入或替換有限模組。", "保留核心結構與體驗，同時能處理不同品牌、商品與合作需求，避免每案重新設計與開發。", "需要先定義哪些位置可配置、有哪些可選模組，以及哪些核心結構不可更動。"] }
          ],
          chosen: {
            label: "最終選擇", title: "範本＋受控模組化", principleLead: "以基礎版本維持核心體驗，", principleEnd: "只把可預期差異轉成", emphasis: "有限配置", details: [["範本", "界定可選範圍，避免每次從空白開始談需求。"], ["受控模組化", "以基礎版本為主，在預先定義的位置插入、替換或啟用有限選項。"]],
            commercialLabel: "商業延伸", commercialIntro: "不是取消客製化，而是把客製需求分級。", commercial: [["基礎方案", "基礎範本", "標準價格"], ["模組加購", "可選模組", "處理額外需求"], ["完整客製", "完整客製服務", "處理超出既有配置邊界的需求"]],
            practiceLabel: "實際應用", practiceCaption: "同一內容架構支援不同品牌，業務、產品、設計與客戶從共用畫面開始討論。", practiceAlt: "同一落地頁範本套用三種保險品牌主題",
            resultLabel: "結果", resultMetric: "約 50% ↓", resultTitle: "業務回饋：需求對齊時間減少", resultBody: "需求從反覆定義範圍，轉為在具體選項中收斂。", resultNote: "此數字非精確計時。"
          }
        },
        d2: {
          label: "決策二 · 配置邊界", title: "我如何界定範本的配置邊界？",
          lead: ["可調整項目開放太多，團隊仍得為每個客戶逐案修正設計；開放太少，又無法回應必要的品牌與商業差異。", "我因此盤點畫面元素，與產品、工程逐項評估，把差異分為可配置、有限配置與鎖定三個層級。"],
          levelsLabel: "配置層級", spectrum: ["配置彈性較高", "限制逐步增加"],
          levels: [
            { kind: "brand", title: "融入客戶品牌", level: "可配置", reason: "在既定規則內替換品牌表現，不改變產品核心結構。", items: ["品牌色", "字體", "插圖與圖片"] },
            { kind: "modules", title: "選配預設模組", level: "有限配置", reason: "從預先設計好的模組與選項中組合，不重新設計。", items: ["可選模組", "預設變體", "插入內容區塊", "啟用既有模組"] },
            { kind: "locked", title: "固定核心架構", level: "鎖定", reason: "維持流程、互動與交付複用所需的核心規則。", items: ["資訊架構", "版面與網格", "元件行為", "驗證邏輯", "核心流程"] }
          ],
          diagram: { type: "字", image: "圖", core: "核心", slot: "位置", module: "模組", variant: "變體", locked: "鎖定", layout: "版面", behavior: "行為", flow: "流程" },
          principleLabel: "設計原則", principle: "只開放不破壞核心體驗，且能被團隊穩定複用的差異。", ownership: "主導範本＋受控模組化方向，並與產品、工程團隊共同定義配置邊界。",
          practiceTitle: "實際落地", evidence: [
            { image: "assets/images/original/insuranceColorVariant.png", title: "品牌表現｜可配置", caption: "同一組設計變數映射不同品牌色盤。", alt: "同一組設計變數對應不同保險品牌色盤" },
            { image: "assets/images/original/insuranceDesignSystem.png", title: "核心體驗｜鎖定", caption: "共用元件維持相同結構、狀態與驗證行為。", alt: "保險產品共用樣式與表單元件" }
          ],
          resultLabel: "結果", resultMetric: "1 週 → 2 天", resultTitle: "新客戶設計適配時間", resultBody: "配置邊界與共用規則建立後，新客戶不再從零重新設計。"
        }
      },
      interactions: {
        marker: "互動設計決策", eyebrow: "互動設計決策", title: "框架建立後，我再處理兩個互動層級的問題", intro: "法規資訊如何呈現，以及長頁申請流程如何拆分。",
        ux1: { label: "互動決策一 · 法規資訊呈現", title: "必要法規資訊怎麼保持可取得，又不中斷申請？", constraintLabel: "限制條件", constraint: "保險合作夥伴要求法規內容位於明顯位置，但完整法律文字會壓過主要申請任務。", options: [["方案甲 · 頁內常見問題／收合展開", "採用", "保留必要資訊的可取得性，同時不中斷申請流程。"], ["方案乙 · 新頁／彈出視窗", "未採用", "內容完整，但使用者需要離開目前脈絡，行動端也容易遮擋主畫面。"]], evidenceTitle: "常見問題／收合展開特寫", evidenceCaption: "必要條款可在目前申請脈絡中直接展開，點擊可查看完整頁面。", evidenceAlt: "頁內常見問題與收合展開狀態特寫" },
        ux2: { label: "互動決策二 · 申請流程", title: "單一長頁面，要不要拆成多步驟？", blocks: [["調整前", "身分資料、方案、文件與聲明集中在同一長頁面。"], ["研究", "參考市場常見的保險申請流程，並訪談有車險購買經驗的同仁，了解實際購買歷程。"], ["設計決策", "依資訊任務拆成多步驟，讓每一步只處理一個主要任務。"]], afterLabel: "調整後", afterTitle: "每一步只處理一個主要任務", steps: ["個人資訊", "方案選擇", "文件與聲明", "確認與付款"], note: "研究用來支持設計判斷，不代表已驗證完成率或其他行為成效。", evidence: [["assets/images/original/insuranceTaskCentered.png", "每個步驟只呈現當前任務所需的欄位與說明。", "任務導向的保險申請畫面"], ["assets/images/original/insuranceSplitFlow.png", "完整序列：個人資訊、方案、文件與聲明、確認付款。", "拆分後的多步驟保險申請流程"]] }
      },
      adoption: { marker: "實際採用", title: "同一框架，三個進行中的企業合作案", body: "框架已應用於三個進行中的企業合作案。各案在已定義的可調整範圍內改變品牌與方案內容，核心流程與元件維持不變。", overviewCaption: "框架涵蓋落地頁、方案、揭露、申請表單與保險營運流程。", overviewAlt: "保險框架應用於申請、方案與營運畫面", aria: "進行中的企業合作案", status: "進行中", cards: [["assets/images/original/insuranceMarsh.png", "Marsh 台灣 · 汽車保險", "Marsh 台灣汽車保險畫面"], ["assets/images/original/insuranceShinKong.png", "新光越南 · 壽險產品", "新光越南壽險產品畫面"], ["assets/images/original/insuranceRichmond.png", "Richmond · 數位保險體驗", "Richmond 數位保險體驗畫面"]] },
      outcomes: { eyebrow: "05 · 成果", title: "從一次性交付，到可重用的交付基礎", subtitle: "成果來自框架導入前後的人力與時程比較，不是後續使用者體驗改善的行為成效。", cards: [["每案人力投入", "9 → 約 2.4 人週", "每個客戶案所需的工程＋設計人力", "約減少 73%"], ["完整交付", "3+ 月 → 約 1 月", "每個新客戶案從需求確認到完成交付", "交付週期約縮短 67%"], ["設計適配", "1 週 → 2 天", "在既有框架上完成新客戶的品牌與內容調整", "不再從空白開始設計"]], staffingAria: "工程與設計投入比較", before: ["導入前", "4 位工程師 × 2 週", "＋ 1 位設計師 × 1 週", "＝ 9 人週"], after: ["導入後", "2 位工程師 × 1 週", "＋ 1 位設計師 × 2 天", "≈ 2.4 人週"], note: "工程＋設計投入為框架導入前後的人力配置比較。端到端交付週期來自同一比較的整體時程觀察；設計適配時間為設計師實際工作時間的前後比較。三個企業合作案目前均在進行中。" },
      imageOpen: "原尺寸"
    },

    en: {
      pageTitle: "From Every Client Being a New Project to a Reusable Insurance Delivery Framework",
      eyebrow: "Case Study · InsurTech · B2B SaaS · 2024",
      hero: {
        title: ["From “every client is a new project”", "to a reusable insurance delivery framework"],
        deck: "I separated a tangled delivery problem into two bottlenecks: narrowing the client decision space upstream and increasing Design and Engineering reuse downstream. The team could move faster and know more clearly what to build.",
        meta: [["Role", "Lead Product Designer"], ["Timeline", "Nov–Dec 2024"], ["Team", "Sales, Product, Design, Engineering"], ["Scope", "Problem Framing, Product Architecture, Application Experience, Delivery System"]],
        metricLabels: { deliveryAria: "Delivery time reduced from more than 3 months to approximately 1 month, about 67 percent shorter", deliveryUnit: "mo", approximate: "~", deliveryText: "Time from confirmed requirements to delivery for each new client", deliveryDelta: "~67% shorter", effortAria: "Engineering and Design effort per client reduced from 9 to 2.4 person-weeks, about 73 percent less", effortUnit: "person-weeks", effortText: "Engineering + Design effort required per client", effortDelta: "~73% less" }
      },
      toc: [["00", "At a Glance", "glance"], ["01", "Background", "background"], ["02", "Product & System Decisions", "decisions"], ["03", "Interaction Decisions", "experience"], ["04", "Adoption", "adoption"], ["05", "Outcomes", "outcomes"]],
      glance: { label: "Case at a Glance", title: ["Every new client meant renegotiating requirements,", "redesigning the experience, and re-estimating the build"], subtitle: ["The platform was highly customizable, but it had no shared starting point or clear customization boundary.", "Sales, Design, and Engineering repeated the entire delivery process for every engagement, making timelines difficult to predict."], image: "assets/Insurance/BeforeAfter_ENv4.svg", alt: "Before: open-ended requirements create repeated alignment and rework. After: a Template defines the choice boundary before the team configures reusable modules within it.", caption: "Before: define scope and revise it engagement by engagement. After: use a Template to establish the decision boundary, then address differences with reusable modules and accelerate delivery.", open: "View full diagram" },
      background: { marker: "Background", title: ["Too many client choices made every engagement restart", "Requirements were renegotiated, designs rebuilt, and Engineering re-estimated"], body: "The platform had opened many adjustable elements to support different insurance products and brands, but had not defined what could change and what should remain shared. Each new client therefore required another round of scope definition, while Design and Engineering struggled to reuse existing work.", evidenceLabel: "How I confirmed the problem", evidence: "I interviewed Sales, Product, and Engineering, then compared findings with alignment and delivery records from prior engagements.", problems: [
        { image: "assets/Insurance/01SalesAndClients.png", title: "Hard to align", body: "Without concrete Templates to reference, clients struggled to articulate requirements and Sales repeatedly reconfirmed the direction.", alt: "Clients and Sales repeatedly aligning because they lack a concrete Template" },
        { image: "assets/Insurance/HighFlexible.png", title: "No customization boundary", body: "Without a defined configuration boundary, the team could not quickly tell what was reusable and what required additional development.", alt: "A highly flexible product without a clear customization boundary" },
        { image: "assets/Insurance/01RepeatToDevelop.png", title: "Delivery could not be reused", body: "Every engagement required another design, estimate, and build, so prior work rarely became reusable delivery assets.", alt: "Design and Engineering repeating implementation for each new client" }
      ] },
      decisions: {
        marker: "Product & System Decisions", title: ["A standard flow could speed up delivery,", "but it could not answer where flexibility should stop"], intro: ["The team originally aimed to shorten delivery through a standard flow. Through stakeholder interviews and delivery reviews, I found a recurring unanswered question: what should stay fixed, and what should clients be allowed to change?", "I therefore made decisions at two levels: the delivery model and the Template's configuration boundary."],
        d1: { label: "Decision 1 · Delivery Model", title: "How standardized should the delivery flow be?", comparisonAria: "Comparison of three delivery models", terms: { client: "Client", design: "Design", dev: "Dev", fixedFlow: "Same fixed flow", delivery: "Delivery", need: "Client need", boundary: "Template boundary", modules: ["Module A", "Module B", "Module C"] }, fields: ["Approach", "Benefit", "Limitation"], models: [
          { option: "Option A", status: "Rejected", state: "rejected", title: "Bespoke delivery", texts: ["Redefine pages, flows, and requirements for every new client, then deliver each engagement through Design and Engineering.", "Maximum flexibility for individual client needs.", "Requirements are difficult to converge; Design and Engineering restart for every engagement, and delivery time remains unpredictable."] },
          { option: "Option B", status: "Not enough", state: "not-enough", title: "One standard flow", texts: ["Require every client to use the same fixed pages and flow, reducing design and development effort through standardization.", "Fastest to deliver, estimate, and maintain.", "Cannot accommodate necessary differences across brands, products, and partnership models."] },
          { option: "Option C", status: "Chosen", state: "chosen", title: "Template + controlled modularity", texts: ["Start from a baseline. The Template defines the choice boundary, while predefined modules can be inserted or replaced at specific points in the Template and purchase flow.", "Preserves the core structure and experience while supporting necessary brand, product, and partnership differences without rebuilding each engagement.", "Requires clear rules for configurable positions, available modules, and the core structures that cannot change."] }
        ], chosen: { label: "Chosen Model", title: "Template + controlled modularity", principleLead: "Preserve the core experience through a baseline,", principleEnd: "and turn only predictable differences into", emphasis: "bounded configuration", details: [["Template", "Defines the choice set so requirements no longer start from a blank page."], ["Controlled modularity", "Uses a baseline with predefined positions where limited options can be inserted, replaced, or enabled."]], commercialLabel: "Commercial Extension", commercialIntro: "Customization was not removed; it was tiered.", commercial: [["Base offering", "Base Template", "Standard pricing"], ["Module add-ons", "Optional modules", "Additional needs"], ["Full customization", "Custom service", "Needs beyond the existing configuration boundary"]], practiceLabel: "Decision in Practice", practiceCaption: "The same content structure supports different brands, giving Sales, Product, Design, and clients a shared screen for discussion.", practiceAlt: "One landing-page Template adapted to three insurance brands", resultLabel: "Result", resultMetric: "~50% ↓", resultTitle: "Sales feedback: less time spent aligning requirements", resultBody: "Conversations shifted from repeatedly defining scope to converging around concrete options.", resultNote: "This was not measured with precise time tracking." } },
        d2: { label: "Decision 2 · Configuration Boundary", title: "How did I define the Template's configuration boundary?", lead: ["Open too much and the team still redesigns case by case; open too little and the product cannot support necessary brand and business differences.", "I inventoried the interface elements with Product and Engineering, then classified differences into three levels: configurable, bounded, and locked."], levelsLabel: "Configuration Levels", spectrum: ["More configuration flexibility", "Increasing constraints"], levels: [
          { kind: "brand", title: "Fit the client brand", level: "Configurable", reason: "Brand expression can change within defined rules without altering the product's core structure.", items: ["Color", "Typography", "Illustration and imagery"] },
          { kind: "modules", title: "Select predefined modules", level: "Bounded configuration", reason: "Compose from designed modules and options; do not redesign them.", items: ["Optional module", "Predefined variant", "Insert content block", "Enable existing module"] },
          { kind: "locked", title: "Keep the core architecture fixed", level: "Locked", reason: "The rules required for flow comprehension, interaction consistency, and delivery reuse remain shared.", items: ["Information architecture", "Layout and grid", "Component behavior", "Validation logic", "Core flow"] }
        ], diagram: { type: "Type", image: "Image", core: "Core", slot: "Slot", module: "Module", variant: "Variant", locked: "Locked", layout: "Layout", behavior: "Behavior", flow: "Flow" }, principleLabel: "Design Principle", principle: "Open only the differences that preserve the core experience and can be reused reliably by the team.", ownership: "I led the Template + controlled modularity direction and defined the configuration boundary with Product and Engineering.", practiceTitle: "In Practice", evidence: [
          { image: "assets/images/original/insuranceColorVariant.png", title: "Brand expression | Configurable", caption: "One token structure maps to different client brand palettes.", alt: "One set of design tokens mapped to different insurance brand palettes" },
          { image: "assets/images/original/insuranceDesignSystem.png", title: "Core experience | Locked", caption: "Shared components keep the same structure, states, and validation behavior.", alt: "Shared insurance styles and form components" }
        ], resultLabel: "Result", resultMetric: "1 week → 2 days", resultTitle: "New-client design adaptation time", resultBody: "Once the boundary and shared rules were established, new clients no longer started from a blank design." }
      },
      interactions: { marker: "Interaction Decisions", eyebrow: "Interaction Decisions", title: "After defining the framework, I addressed two interaction-level problems", intro: "How to present regulatory information, and how to break apart an overloaded application page.", ux1: { label: "Interaction Decision 1 · Regulatory Disclosure", title: "How can required regulatory content stay accessible without interrupting the application?", constraintLabel: "Constraint", constraint: "Insurance partners required regulatory content to be prominent, but full legal copy could overwhelm the primary application task.", options: [["Option A · In-page FAQ / Accordion", "Chosen", "Keeps required information accessible without interrupting the application flow."], ["Option B · New page / Modal", "Rejected", "Shows the full content, but removes users from the current context and can obstruct the main screen on mobile."]], evidenceTitle: "FAQ / Accordion close-up", evidenceCaption: "Required terms expand directly within the current application context. Open the image to view the full page.", evidenceAlt: "Close-up of the in-page FAQ and accordion states" }, ux2: { label: "Interaction Decision 2 · Application Flow", title: "Should one long page become a multi-step flow?", blocks: [["Before", "Identity details, plan selection, documents, and declarations appeared on one long page."], ["Research", "I reviewed common insurance application flows and interviewed colleagues with car-insurance purchase experience to understand the actual journey."], ["Decision", "Split the flow by information task so each step handles one primary job."]], afterLabel: "After", afterTitle: "One primary task per step", steps: ["Personal details", "Plan selection", "Documents and declarations", "Review and payment"], note: "The research informed the design decision; it did not validate completion-rate or other behavioral outcomes.", evidence: [["assets/images/original/insuranceTaskCentered.png", "Each step shows only the fields and guidance required for the current task.", "Task-centered insurance application interface"], ["assets/images/original/insuranceSplitFlow.png", "Complete sequence: personal details, plan, documents and declarations, then review and payment.", "Multi-step insurance application flow"]] } },
      adoption: { marker: "Adoption", title: "One framework across three ongoing enterprise engagements", body: "The framework is being applied across three ongoing enterprise engagements. Each adapts brand and plan content within the defined configuration boundary while keeping the core flow and components unchanged.", overviewCaption: "The framework covers landing pages, plans, disclosures, application forms, and insurance operations.", overviewAlt: "Insurance framework applied across application, plan, and operations screens", aria: "Ongoing enterprise engagements", status: "Ongoing", cards: [["assets/images/original/insuranceMarsh.png", "Marsh Taiwan · Motor Insurance", "Marsh Taiwan motor-insurance interface"], ["assets/images/original/insuranceShinKong.png", "Shin Kong Vietnam · Life Insurance", "Shin Kong Vietnam life-insurance interface"], ["assets/images/original/insuranceRichmond.png", "Richmond · Digital Insurance Experience", "Richmond digital insurance experience"]] },
      outcomes: { eyebrow: "05 · Outcomes", title: "From one-off delivery to a reusable foundation", subtitle: "These outcomes compare staffing and timelines before and after the framework—not behavioral outcomes from the later UX improvements.", cards: [["Effort per engagement", "9 → ~2.4 person-weeks", "Engineering + Design effort required per client", "~73% reduction"], ["End-to-end delivery", "3+ months → ~1 month", "From confirmed requirements to completed delivery for each new client", "~67% shorter"], ["Design adaptation", "1 week → 2 days", "Brand and content adaptation on the existing framework", "No blank-slate redesign"]], staffingAria: "Engineering and Design effort comparison", before: ["Before", "4 engineers × 2 weeks", "+ 1 designer × 1 week", "= 9 person-weeks"], after: ["After", "2 engineers × 1 week", "+ 1 designer × 2 days", "≈ 2.4 person-weeks"], note: "Engineering + Design effort compares staffing before and after the framework. The end-to-end delivery timeline comes from the same internal before/after comparison; design adaptation time compares actual designer working time. All three enterprise engagements are ongoing." },
      imageOpen: "View original"
    },

    ja: {
      pageTitle: "顧客ごとに新規プロジェクトとなる状態から、再利用可能な保険デリバリー基盤へ",
      eyebrow: "ケーススタディ · InsurTech · B2B SaaS · 2024",
      hero: { title: ["「顧客ごとに新規プロジェクト」の状態から、", "再利用可能な保険デリバリー基盤へ"], deck: "複雑に絡んでいたデリバリー課題を、上流の顧客の選択範囲を絞ることと、下流のデザイン・開発の再利用性を高めることという2つのボトルネックに整理しました。チームは速く進めるだけでなく、何をつくるべきかも明確に判断できるようになりました。", meta: [["役割", "リード・プロダクトデザイナー"], ["期間", "2024年11月–12月"], ["チーム", "営業、プロダクト、デザイン、開発"], ["担当範囲", "課題定義、プロダクト設計、申込体験、デリバリー基盤"]], metricLabels: { deliveryAria: "3か月超から約1か月へ、デリバリー期間を約67パーセント短縮", deliveryUnit: "か月", approximate: "約", deliveryText: "要件確定から納品までに要する期間", deliveryDelta: "約67%短縮", effortAria: "案件ごとの開発とデザイン工数を9人週から2.4人週へ、約73パーセント削減", effortUnit: "人週", effortText: "案件ごとに必要な開発＋デザイン工数", effortDelta: "約73%削減" } },
      toc: [["00", "概要", "glance"], ["01", "背景", "background"], ["02", "プロダクト・システムの意思決定", "decisions"], ["03", "インタラクションの意思決定", "experience"], ["04", "導入状況", "adoption"], ["05", "成果", "outcomes"]],
      glance: { label: "概要", title: ["新しい顧客を迎えるたびに、", "要件調整・再設計・工数見積もりを一からやり直していた"], subtitle: ["柔軟にカスタマイズできる一方、共通の出発点も明確なカスタマイズ境界もありませんでした。", "営業・デザイン・開発は案件ごとに同じデリバリープロセスを繰り返し、期間の予測も困難でした。"], image: "assets/Insurance/BeforeAfter_JPv4.svg", alt: "変更前はオープンエンドな要件による調整と手戻りが発生。変更後はTemplateで選択範囲を定め、チームが再利用可能なモジュールを構成する。", caption: "変更前：案件ごとに範囲を定義し、何度も修正。変更後：Templateで意思決定の境界を定め、再利用可能なモジュールで差分に対応してデリバリーを高速化。", open: "全体図を見る" },
      background: { marker: "背景", title: ["顧客の選択肢が多すぎるため、案件のたびに再スタート", "要件を話し直し、デザインを作り直し、開発工数を見積もり直していた"], body: "異なる保険商品やブランドに対応するため、多くの調整項目が開放されていました。しかし、何を変更でき、何を共通化すべきかは定義されていませんでした。その結果、新規案件ごとに要件範囲を確認し直し、デザインと開発も既存成果を再利用しにくい状態でした。", evidenceLabel: "課題の確認方法", evidence: "営業・プロダクト・開発へのインタビューと、既存案件の要件調整・デリバリー記録を照合しました。", problems: [
        { image: "assets/Insurance/01SalesAndClients.png", title: "要件を合わせにくい", body: "参照できるTemplateがなく、顧客は要件を具体化しにくいため、営業が方向性を何度も確認していました。", alt: "具体的なTemplateがなく、顧客と営業が要件を繰り返し確認する状況" },
        { image: "assets/Insurance/HighFlexible.png", title: "カスタマイズ境界がない", body: "設定可能な範囲が定義されておらず、再利用できる機能と追加開発が必要な機能をすぐに判断できませんでした。", alt: "明確なカスタマイズ境界がない柔軟なプロダクト" },
        { image: "assets/Insurance/01RepeatToDevelop.png", title: "デリバリーを再利用できない", body: "案件ごとにデザイン・見積もり・開発をやり直し、既存成果を再利用可能な資産として蓄積できませんでした。", alt: "案件ごとにデザインと開発を繰り返す状況" }
      ] },
      decisions: { marker: "プロダクト・システムの意思決定", title: ["標準フローでデリバリーは速くできても、", "「柔軟性をどこまで許容するか」には答えられない"], intro: ["チームは当初、標準フローによるデリバリー期間の短縮を目指していました。しかしインタビューと案件レビューから、何を固定し、何を顧客に合わせて変更できるようにするかが未定義だと分かりました。", "そこで、デリバリーモデルとTemplateの設定境界という2つのレベルで意思決定を行いました。"],
        d1: { label: "意思決定1 · デリバリーモデル", title: "デリバリーフローをどこまで固定するか？", comparisonAria: "3つのデリバリーモデルの比較", terms: { client: "顧客", design: "デザイン", dev: "開発", fixedFlow: "同一の固定フロー", delivery: "納品", need: "顧客要件", boundary: "Template境界", modules: ["モジュールA", "モジュールB", "モジュールC"] }, fields: ["進め方", "利点", "制約"], models: [
          { option: "案A", status: "不採用", state: "rejected", title: "案件ごとのフルカスタマイズ", texts: ["顧客ごとに画面・フロー・要件を定義し直し、デザインと開発を個別に進める。", "個別要件への柔軟性が最も高い。", "要件を収束しにくく、案件ごとにデザインと開発が必要なため、期間も予測しにくい。"] },
          { option: "案B", status: "不十分", state: "not-enough", title: "単一の標準フロー", texts: ["すべての顧客が同じ固定画面・フローを利用し、標準化によってデザインと開発コストを抑える。", "デリバリー・見積もり・保守が最も速い。", "ブランド、商品、提携形態に必要な差異へ対応できない。"] },
          { option: "案C", status: "採用", state: "chosen", title: "Template＋制御されたモジュール化", texts: ["基礎版を起点に、Templateで選択範囲を定義し、Templateと購入フローの所定位置で限定モジュールを挿入・置換する。", "中核構造と体験を維持しつつ、ブランド・商品・提携要件の差異に対応し、案件ごとの作り直しを避けられる。", "設定可能な位置と選択肢、変更できない中核構造を事前に定義する必要がある。"] }
        ], chosen: { label: "採用モデル", title: "Template＋制御されたモジュール化", principleLead: "基礎版で中核体験を維持し、", principleEnd: "予測可能な差異だけを", emphasis: "限定設定", details: [["Template", "選択範囲を定め、要件の話し合いを白紙から始めない。"], ["制御されたモジュール化", "基礎版を中心に、定義済みの位置で限られた選択肢を挿入・置換・有効化する。"]], commercialLabel: "商業展開", commercialIntro: "カスタマイズをなくすのではなく、要望を段階化しました。", commercial: [["基本プラン", "基本Template", "標準価格"], ["モジュール追加", "選択モジュール", "追加要件に対応"], ["フルカスタマイズ", "個別対応", "既存の設定境界を超える要件に対応"]], practiceLabel: "実際のデザイン", practiceCaption: "同一の情報構造を異なるブランドに適用し、営業・プロダクト・デザイン・顧客が共通画面から議論できるようにしました。", practiceAlt: "同じランディングページTemplateを3つの保険ブランドへ適用", resultLabel: "結果", resultMetric: "約50% ↓", resultTitle: "営業からのフィードバック：要件調整時間を削減", resultBody: "範囲を何度も定義する話し合いから、具体的な選択肢をもとに収束する進め方へ変わりました。", resultNote: "厳密な時間計測による数値ではありません。" } },
        d2: { label: "意思決定2 · 設定境界", title: "Templateの設定境界をどう定義したか？", lead: ["開放しすぎれば顧客ごとの再設計が残り、制限しすぎれば必要なブランド・ビジネス差異に対応できません。", "そこで画面要素を洗い出し、プロダクト・開発と一つずつ評価して、設定可能・限定設定・固定の3段階に分類しました。"], levelsLabel: "設定レベル", spectrum: ["設定の自由度が高い", "制約が強くなる"], levels: [
          { kind: "brand", title: "顧客ブランドへ適合", level: "設定可能", reason: "定義済みルール内でブランド表現を置き換え、中核構造は変えません。", items: ["カラー", "タイポグラフィ", "イラスト・画像"] },
          { kind: "modules", title: "定義済みモジュールを選択", level: "限定設定", reason: "設計済みのモジュールと選択肢を組み合わせ、再設計はしません。", items: ["選択モジュール", "定義済みバリアント", "情報ブロックの挿入", "既存モジュールの有効化"] },
          { kind: "locked", title: "中核アーキテクチャを固定", level: "固定", reason: "フロー理解・一貫した操作・デリバリー再利用に必要なルールを共通化します。", items: ["情報アーキテクチャ", "レイアウト・グリッド", "コンポーネント挙動", "バリデーション", "中核フロー"] }
        ], diagram: { type: "文字", image: "画像", core: "中核", slot: "位置", module: "モジュール", variant: "バリアント", locked: "固定", layout: "配置", behavior: "挙動", flow: "フロー" }, principleLabel: "デザイン原則", principle: "中核体験を損なわず、チームが安定して再利用できる差異だけを開放する。", ownership: "Template＋制御されたモジュール化の方向性を主導し、プロダクト・開発と設定境界を定義しました。", practiceTitle: "実際の適用", evidence: [
          { image: "assets/images/original/insuranceColorVariant.png", title: "ブランド表現｜設定可能", caption: "同一のデザイントークン構造を異なるブランドカラーパレットへ対応させました。", alt: "同一のデザイントークンを異なる保険ブランドのカラーパレットへ対応" },
          { image: "assets/images/original/insuranceDesignSystem.png", title: "中核体験｜固定", caption: "共通コンポーネントの構造・状態・バリデーション挙動を統一しました。", alt: "保険プロダクトの共通スタイルとフォームコンポーネント" }
        ], resultLabel: "結果", resultMetric: "1週間 → 2日", resultTitle: "新規顧客向けデザイン適用時間", resultBody: "設定境界と共通ルールを定義したことで、新規案件を白紙からデザインし直す必要がなくなりました。" }
      },
      interactions: { marker: "インタラクションの意思決定", eyebrow: "インタラクションの意思決定", title: "基盤を定義した後、2つの具体的な操作課題に取り組んだ", intro: "必須の法規情報をどう見せるか、情報量の多い申込ページをどう分割するかです。", ux1: { label: "意思決定1 · 法規情報", title: "必須の法規情報を確認可能にしながら、申込を中断させない方法は？", constraintLabel: "制約", constraint: "保険パートナーは法規情報を目立つ位置に置く必要がありましたが、全文を表示すると主な申込タスクを圧迫します。", options: [["案A · ページ内FAQ／アコーディオン", "採用", "必要情報を確認可能な状態に保ち、申込フローを中断させません。"], ["案B · 別ページ／モーダル", "不採用", "全文を表示できますが、現在の文脈から離れ、モバイルでは主画面を遮る可能性があります。"]], evidenceTitle: "FAQ／アコーディオンの拡大", evidenceCaption: "必要な条項を現在の申込文脈内で展開できます。画像を開くとページ全体を確認できます。", evidenceAlt: "ページ内FAQとアコーディオン状態の拡大" }, ux2: { label: "意思決定2 · 申込フロー", title: "1つの長いページを複数ステップに分けるべきか？", blocks: [["変更前", "本人情報、プラン、書類、申告事項が1つの長いページに集中していました。"], ["リサーチ", "一般的な保険申込フローを参照し、自動車保険の購入経験がある同僚へ実際の購入プロセスを聞きました。"], ["意思決定", "情報タスクごとにステップを分け、各ステップで1つの主要タスクだけを扱う設計にしました。"]], afterLabel: "変更後", afterTitle: "各ステップで1つの主要タスクに集中", steps: ["本人情報", "プラン選択", "書類・申告", "確認・支払い"], note: "このリサーチは設計判断の根拠であり、完了率などの行動成果を検証したものではありません。", evidence: [["assets/images/original/insuranceTaskCentered.png", "各ステップには、現在のタスクに必要な項目と説明だけを表示しました。", "タスク中心の保険申込画面"], ["assets/images/original/insuranceSplitFlow.png", "本人情報、プラン、書類・申告、確認・支払いまでの全体フロー。", "複数ステップに分割した保険申込フロー"]] } },
      adoption: { marker: "導入状況", title: "同じ基盤を3件の進行中エンタープライズ案件へ展開", body: "この基盤は3件の進行中エンタープライズ案件で活用されています。定義済みの設定境界内でブランドとプラン内容を変更し、中核フローとコンポーネントは共通化しています。", overviewCaption: "ランディングページ、プラン、法規情報、申込フォーム、保険業務フローを同じ基盤でカバーしています。", overviewAlt: "申込・プラン・業務画面へ適用した保険デリバリー基盤", aria: "進行中のエンタープライズ案件", status: "進行中", cards: [["assets/images/original/insuranceMarsh.png", "Marsh Taiwan · 自動車保険", "Marsh Taiwanの自動車保険画面"], ["assets/images/original/insuranceShinKong.png", "新光ベトナム · 生命保険", "新光ベトナムの生命保険画面"], ["assets/images/original/insuranceRichmond.png", "Richmond · デジタル保険体験", "Richmondのデジタル保険体験"]] },
      outcomes: { eyebrow: "05 · 成果", title: "案件ごとの個別対応から、再利用可能なデリバリー基盤へ", subtitle: "成果は基盤導入前後の人員・期間比較に基づくもので、後続のUX改善による行動成果ではありません。", cards: [["案件ごとの工数", "9 → 約2.4人週", "案件ごとに必要な開発＋デザイン工数", "約73%削減"], ["エンドツーエンドのデリバリー", "3か月超 → 約1か月", "要件確定から納品までに要する期間", "約67%短縮"], ["デザイン適用", "1週間 → 2日", "既存基盤で新規顧客のブランド・内容を調整", "白紙からの再設計が不要"]], staffingAria: "開発とデザインの工数比較", before: ["導入前", "開発4名 × 2週間", "＋ デザイナー1名 × 1週間", "＝ 9人週"], after: ["導入後", "開発2名 × 1週間", "＋ デザイナー1名 × 2日", "≈ 2.4人週"], note: "開発＋デザイン工数は、基盤導入前後の人員配置を比較したものです。エンドツーエンドの期間も同じ社内比較に基づき、デザイン適用時間は実作業時間の前後比較です。3件のエンタープライズ案件はいずれも進行中です。" },
      imageOpen: "元画像"
    }
  };

  const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  const titleLines = (items, className = "") => items.map(item => `<span class="${className}">${escapeHtml(item)}</span>`).join("");
  const zoomFigure = ({ image, alt, caption, open, layout = "wide", className = "" }) => `
    <figure class="media-card reveal ${className}" data-layout="${escapeHtml(layout)}" data-zoom-src="${escapeHtml(image)}" data-zoom-caption="${escapeHtml(caption)}" tabindex="0" role="button" aria-label="${escapeHtml(open)}">
      <div class="media-card__visual"><img loading="lazy" decoding="async" src="${escapeHtml(image)}" alt="${escapeHtml(alt)}"></div>
      <figcaption>${caption}<small>${escapeHtml(open)} ↗</small></figcaption>
    </figure>`;

  const renderModelDiagram = (index, terms) => {
    if (index === 0) return `<div class="model-diagram model-diagram--custom">${["A", "B", "C"].map(suffix => `<div class="model-diagram__row"><span class="model-diagram__node">${escapeHtml(terms.client)} ${suffix}</span><span class="model-diagram__arrow">→</span><span class="model-diagram__node">${escapeHtml(terms.design)} ${suffix}</span><span class="model-diagram__arrow">→</span><span class="model-diagram__node">${escapeHtml(terms.dev)} ${suffix}</span></div>`).join("")}</div>`;
    if (index === 1) return `<div class="model-diagram model-diagram--fixed"><div class="model-diagram__clients">${["A", "B", "C"].map(suffix => `<span class="model-diagram__node">${escapeHtml(terms.client)} ${suffix}</span>`).join("")}</div><span class="model-diagram__arrow">→</span><span class="model-diagram__node model-diagram__flow">${escapeHtml(terms.fixedFlow)}</span><span class="model-diagram__arrow">→</span><span class="model-diagram__node">${escapeHtml(terms.delivery)}</span></div>`;
    return `<div class="model-diagram model-diagram--modular"><span class="model-diagram__node">${escapeHtml(terms.need)}</span><span class="model-diagram__arrow">→</span><span class="model-diagram__node model-diagram__template">${escapeHtml(terms.boundary)}</span><span class="model-diagram__arrow">→</span><div class="model-diagram__modules">${terms.modules.map(item => `<span class="model-diagram__node">${escapeHtml(item)}</span>`).join("")}</div><span class="model-diagram__arrow">→</span><span class="model-diagram__node">${escapeHtml(terms.delivery)}</span></div>`;
  };

  const renderConfigurationDiagram = (kind, labels) => {
    if (kind === "brand") return `<div class="config-diagram config-diagram--brand"><div class="config-diagram__page"><span></span><span></span><span></span></div><span class="config-diagram__swap">↔</span><div class="config-diagram__brand-options"><span class="config-diagram__swatches"><i></i><i></i><i></i></span><span>${escapeHtml(labels.type)}</span><span>${escapeHtml(labels.image)}</span></div></div>`;
    if (kind === "modules") return `<div class="config-diagram config-diagram--modules"><div class="config-diagram__core"><span>${escapeHtml(labels.core)}</span><i>→</i><span>${escapeHtml(labels.slot)}</span><i>→</i><span>${escapeHtml(labels.core)}</span></div><div class="config-diagram__branch">↓</div><div class="config-diagram__options"><span class="config-diagram__option">＋ ${escapeHtml(labels.module)}</span><span class="config-diagram__option">↔ ${escapeHtml(labels.variant)}</span></div></div>`;
    return `<div class="config-diagram config-diagram--locked"><span class="config-diagram__lock-label">${escapeHtml(labels.locked)}</span><div class="config-diagram__locked-flow"><span>${escapeHtml(labels.layout)}</span><i>→</i><span>${escapeHtml(labels.behavior)}</span><i>→</i><span>${escapeHtml(labels.flow)}</span></div></div>`;
  };

  const render = ({ locale, project, ui, tail = "" }) => {
    const c = CASES[locale] || CASES.en;
    const d1 = c.decisions.d1;
    const d2 = c.decisions.d2;
    const sentenceStop = locale === "en" ? "." : "。";
    return `
      <div class="case-page case-page--insurance-approved" data-page="case" data-project="insurance" id="case-content" style="--project-accent:${escapeHtml(project.accent)};--project-soft:${escapeHtml(project.soft)};--project-dark:${escapeHtml(project.dark)}">
        <section class="case-hero"><div class="shell">
          <a class="case-back text-link" href="#home" data-home-target="work">← ${escapeHtml(ui.backToWork)}</a>
          <div class="case-hero__frame">
            <div class="case-hero__copy"><div class="case-hero__inner">
              <span class="eyebrow">${escapeHtml(c.eyebrow)}</span>
              <h1 class="case-title"><span class="case-title__name">${titleLines(c.hero.title, "case-title__line")}</span></h1>
              <p class="case-deck">${escapeHtml(c.hero.deck)}</p>
              <div class="case-meta case-meta--hero">${c.hero.meta.map(([label, value]) => `<div class="case-meta__item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("")}</div>
              <div class="hero-metrics" aria-label="${escapeHtml(c.outcomes.title)}">
                <article class="hero-metric"><strong aria-label="${escapeHtml(c.hero.metricLabels.deliveryAria)}"><span class="hero-metric__number" data-count-to="3" data-count-suffix="+" aria-hidden="true">3+</span><span class="hero-metric__unit" aria-hidden="true">${escapeHtml(c.hero.metricLabels.deliveryUnit)}</span><span class="hero-metric__transition" aria-hidden="true">→</span><span class="hero-metric__operator" aria-hidden="true">${escapeHtml(c.hero.metricLabels.approximate)}</span><span class="hero-metric__number" data-count-to="1" aria-hidden="true">1</span><span class="hero-metric__unit" aria-hidden="true">${escapeHtml(c.hero.metricLabels.deliveryUnit)}</span></strong><span>${escapeHtml(c.hero.metricLabels.deliveryText)}</span><small class="hero-metric__delta">${escapeHtml(c.hero.metricLabels.deliveryDelta)}</small></article>
                <article class="hero-metric"><strong aria-label="${escapeHtml(c.hero.metricLabels.effortAria)}"><span class="hero-metric__number" data-count-to="9" aria-hidden="true">9</span><span class="hero-metric__transition" aria-hidden="true">→</span><span class="hero-metric__number" data-count-to="2.4" data-count-decimals="1" aria-hidden="true">2.4</span><span class="hero-metric__unit" aria-hidden="true">${escapeHtml(c.hero.metricLabels.effortUnit)}</span></strong><span>${escapeHtml(c.hero.metricLabels.effortText)}</span><small class="hero-metric__delta">${escapeHtml(c.hero.metricLabels.effortDelta)}</small></article>
              </div>
            </div></div>
            <figure class="case-cover"><img src="${escapeHtml(project.cover)}" alt="${escapeHtml(c.pageTitle)}" style="view-transition-name:project-cover-insurance"><span class="case-cover__index">${escapeHtml(project.index)}</span></figure>
          </div>
        </div></section>

        <nav class="case-toc" aria-label="${escapeHtml(c.toc[0][1])}"><ol>${c.toc.map(([number, label, id]) => `<li><a href="#${escapeHtml(id)}" data-section="${escapeHtml(id)}" data-insurance-section-link><span class="case-toc__number" aria-hidden="true">${escapeHtml(number)}</span><span>${escapeHtml(label)}</span></a></li>`).join("")}</ol></nav>

        <section class="snapshot-section" id="glance"><div class="shell">
          <header class="snapshot-header reveal"><span class="eyebrow">${escapeHtml(c.glance.label)}</span><h2><span class="snapshot-header__name">${titleLines(c.glance.title, "snapshot-header__title-line")}</span><span class="snapshot-header__subtitle">${c.glance.subtitle.map(escapeHtml).join("<br>")}</span></h2></header>
          <figure class="media-card snapshot-visual reveal" data-layout="wide" data-zoom-src="${escapeHtml(c.glance.image)}" data-zoom-caption="${escapeHtml(c.glance.caption)}" tabindex="0" role="button" aria-label="${escapeHtml(c.glance.open)}"><div class="snapshot-image-crop"><img src="${escapeHtml(c.glance.image)}" width="1672" height="680" alt="${escapeHtml(c.glance.alt)}"></div><figcaption>${escapeHtml(c.glance.caption)}<small>${escapeHtml(c.glance.open)} ↗</small></figcaption></figure>
        </div></section>

        <section class="case-section" id="background" data-section-order="1"><div class="shell case-section__inner">
          <aside class="case-section__marker"><strong>01</strong><span>${escapeHtml(c.background.marker)}</span></aside>
          <div class="case-section__content"><div class="case-prose reveal"><h2>${titleLines(c.background.title, "background-title__line")}</h2><p>${escapeHtml(c.background.body)}</p></div>
            <aside class="research-note reveal"><strong>${escapeHtml(c.background.evidenceLabel)}</strong><p>${escapeHtml(c.background.evidence)}</p></aside>
            <div class="case-points"><div class="insight-grid">${c.background.problems.map(problem => `<article class="insight-card problem-card reveal"><div class="problem-card__media"><img src="${escapeHtml(problem.image)}" alt="${escapeHtml(problem.alt)}" loading="lazy"></div><div class="problem-card__body"><h3>${escapeHtml(problem.title)}</h3><p>${escapeHtml(problem.body)}</p></div></article>`).join("")}</div></div>
          </div>
        </div></section>

        <section class="case-section" id="decisions" data-section-order="2"><div class="shell case-section__inner">
          <aside class="case-section__marker"><strong>02</strong><span>${escapeHtml(c.decisions.marker)}</span></aside>
          <div class="case-section__content"><div class="case-prose reveal"><h2>${titleLines(c.decisions.title, "decision-title__line")}</h2>${c.decisions.intro.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}</div>
            <div class="case-subsections">
              <section class="case-subsection" id="decision-template"><span class="decision-label">${escapeHtml(d1.label)}</span><h3>${escapeHtml(d1.title)}</h3>
                <div class="decision-models" aria-label="${escapeHtml(d1.comparisonAria)}">${d1.models.map((model, index) => `<article class="decision-model reveal" data-status="${escapeHtml(model.state)}"><div class="decision-model__visual" aria-hidden="true">${renderModelDiagram(index, d1.terms)}</div><div class="decision-model__body"><div class="decision-model__meta"><span>${escapeHtml(model.option)}</span><span class="decision-model__status">${escapeHtml(model.status)}</span></div><h4>${escapeHtml(model.title)}</h4><dl>${model.texts.map((text, textIndex) => `<div><dt>${escapeHtml(d1.fields[textIndex])}</dt><dd>${escapeHtml(text)}</dd></div>`).join("")}</dl></div></article>`).join("")}</div>
                <div class="decision-connector" aria-hidden="true"><span></span></div>
                <section class="chosen-model reveal" aria-labelledby="chosen-model-title"><div class="chosen-model__intro"><span class="chosen-model__label">${escapeHtml(d1.chosen.label)}</span><h4 id="chosen-model-title">${escapeHtml(d1.chosen.title)}</h4><p>${escapeHtml(d1.chosen.principleLead)}<br>${escapeHtml(d1.chosen.principleEnd)} <em>${escapeHtml(d1.chosen.emphasis)}</em>${sentenceStop}</p></div>
                  <div class="chosen-model__details">${d1.chosen.details.map(([title, body]) => `<div><h5>${escapeHtml(title)}</h5><p>${escapeHtml(body)}</p></div>`).join("")}</div>
                  <div class="chosen-model__commercial"><span class="chosen-model__section-label">${escapeHtml(d1.chosen.commercialLabel)}</span><p>${escapeHtml(d1.chosen.commercialIntro)}</p><div class="commercial-progression">${d1.chosen.commercial.map(item => `<article><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span><small>${escapeHtml(item[2])}</small></article>`).join("")}</div></div>
                  <div class="chosen-model__practice"><span class="decision-practice-label">${escapeHtml(d1.chosen.practiceLabel)}</span><div class="media-gallery template-evidence">${zoomFigure({ image: "assets/images/original/insuranceProcess3.png", alt: d1.chosen.practiceAlt, caption: escapeHtml(d1.chosen.practiceCaption), open: c.imageOpen })}</div></div>
                  <div class="chosen-model__result"><span class="chosen-model__section-label">${escapeHtml(d1.chosen.resultLabel)}</span><span class="chosen-model__result-metric">${escapeHtml(d1.chosen.resultMetric)}</span><strong>${escapeHtml(d1.chosen.resultTitle)}</strong><p>${escapeHtml(d1.chosen.resultBody)}</p><small>${escapeHtml(d1.chosen.resultNote)}</small></div>
                </section>
              </section>

              <section class="case-subsection" id="decision-boundaries"><span class="decision-label">${escapeHtml(d2.label)}</span><h3>${escapeHtml(d2.title)}</h3><p class="configuration-lead">${d2.lead.map(escapeHtml).join("<br>")}</p><span class="configuration-levels-label">${escapeHtml(d2.levelsLabel)}</span><div class="configuration-spectrum-cue" aria-label="${escapeHtml(d2.spectrum.join(" — "))}"><span>${escapeHtml(d2.spectrum[0])}</span><i aria-hidden="true"></i><span>${escapeHtml(d2.spectrum[1])}</span></div>
                <div class="configuration-boundary">${d2.levels.map(level => `<section class="configuration-group reveal"><div class="configuration-group__visual" aria-hidden="true">${renderConfigurationDiagram(level.kind, d2.diagram)}</div><div class="configuration-group__heading"><h4>${escapeHtml(level.title)}</h4><strong class="configuration-group__level">${escapeHtml(level.level)}</strong></div><p class="configuration-group__reason">${escapeHtml(level.reason)}</p><ul class="configuration-group__items">${level.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`).join("")}</div>
                <aside class="design-principle reveal"><span>${escapeHtml(d2.principleLabel)}</span><strong>${escapeHtml(d2.principle)}</strong><p class="design-principle__ownership">${escapeHtml(d2.ownership)}</p></aside>
                <div class="configuration-evidence-header"><h4>${escapeHtml(d2.practiceTitle)}</h4></div><div class="media-gallery configuration-evidence">${d2.evidence.map(item => zoomFigure({ image: item.image, alt: item.alt, caption: `<span><strong>${escapeHtml(item.title)}</strong>${escapeHtml(item.caption)}</span>`, open: c.imageOpen, layout: "half" })).join("")}</div>
                <div class="configuration-result reveal"><span class="chosen-model__section-label">${escapeHtml(d2.resultLabel)}</span><strong>${escapeHtml(d2.resultMetric)}</strong><p>${escapeHtml(d2.resultTitle)}</p><p>${escapeHtml(d2.resultBody)}</p></div>
              </section>
            </div>
          </div>
        </div></section>

        <section class="case-section" id="experience" data-section-order="3"><div class="shell case-section__inner"><aside class="case-section__marker"><strong>03</strong><span>${escapeHtml(c.interactions.marker)}</span></aside><div class="case-section__content"><div class="case-prose reveal"><span class="eyebrow">${escapeHtml(c.interactions.eyebrow)}</span><h2>${escapeHtml(c.interactions.title)}</h2><p>${escapeHtml(c.interactions.intro)}</p></div><div class="case-subsections">
          <section class="case-subsection" id="decision-disclosure"><span class="decision-label">${escapeHtml(c.interactions.ux1.label)}</span><h3 class="disclosure-title">${escapeHtml(c.interactions.ux1.title)}</h3><div class="decision-context"><strong>${escapeHtml(c.interactions.ux1.constraintLabel)}</strong><p>${escapeHtml(c.interactions.ux1.constraint)}</p></div><div class="case-points"><div class="insight-grid" data-count="2">${c.interactions.ux1.options.map((option, index) => `<article class="insight-card reveal"${index === 0 ? ' data-status-tone="selected"' : ""}><div class="insight-card__heading"><h3>${escapeHtml(option[0])}</h3><span class="insight-card__status">${escapeHtml(option[1])}</span></div><p>${escapeHtml(option[2])}</p></article>`).join("")}</div></div><div class="media-gallery disclosure-evidence">${zoomFigure({ image: "assets/images/original/insuranceModular.png", alt: c.interactions.ux1.evidenceAlt, caption: `<span><strong>${escapeHtml(c.interactions.ux1.evidenceTitle)}</strong>${escapeHtml(c.interactions.ux1.evidenceCaption)}</span>`, open: c.imageOpen, className: "disclosure-evidence__primary" })}</div></section>
          <section class="case-subsection" id="decision-flow"><span class="decision-label">${escapeHtml(c.interactions.ux2.label)}</span><h3>${escapeHtml(c.interactions.ux2.title)}</h3><div class="decision-evidence-grid">${c.interactions.ux2.blocks.map(block => `<article class="decision-evidence-card reveal"><span>${escapeHtml(block[0])}</span><p>${escapeHtml(block[1])}</p></article>`).join("")}</div><figure class="system-visual system-visual--flow reveal" data-visual-type="application-steps"><figcaption class="system-visual__header"><span>${escapeHtml(c.interactions.ux2.afterLabel)}</span><strong>${escapeHtml(c.interactions.ux2.afterTitle)}</strong></figcaption><div class="application-steps">${c.interactions.ux2.steps.map((step, index) => `${index ? '<span class="application-steps__arrow" aria-hidden="true">→</span>' : ""}<div class="application-steps__item">${escapeHtml(step)}</div>`).join("")}</div><p class="system-visual__note">${escapeHtml(c.interactions.ux2.note)}</p></figure><div class="media-gallery">${c.interactions.ux2.evidence.map(item => zoomFigure({ image: item[0], caption: escapeHtml(item[1]), alt: item[2], open: c.imageOpen, layout: "half" })).join("")}</div></section>
        </div></div></div></section>

        <section class="case-section" id="adoption" data-section-order="4"><div class="shell case-section__inner"><aside class="case-section__marker"><strong>04</strong><span>${escapeHtml(c.adoption.marker)}</span></aside><div class="case-section__content"><div class="case-prose reveal"><h2 class="adoption-title">${escapeHtml(c.adoption.title)}</h2><p>${escapeHtml(c.adoption.body)}</p></div><div class="media-gallery">${zoomFigure({ image: "assets/images/original/insuranceCaseStudies.png", alt: c.adoption.overviewAlt, caption: escapeHtml(c.adoption.overviewCaption), open: c.imageOpen })}</div><div class="adoption-grid" aria-label="${escapeHtml(c.adoption.aria)}">${c.adoption.cards.map(item => `<article class="adoption-card reveal"><div class="adoption-card__visual"><img loading="lazy" decoding="async" src="${escapeHtml(item[0])}" alt="${escapeHtml(item[2])}"></div><div class="adoption-card__body"><span>${escapeHtml(c.adoption.status)}</span><strong>${escapeHtml(item[1])}</strong></div></article>`).join("")}</div></div></div></section>

        <section class="outcomes-section" id="outcomes"><div class="shell"><header class="outcomes-header reveal"><div><span class="eyebrow">${escapeHtml(c.outcomes.eyebrow)}</span><h2>${escapeHtml(c.outcomes.title)}</h2></div><p>${escapeHtml(c.outcomes.subtitle)}</p></header><div class="metric-grid">${c.outcomes.cards.map(item => `<article class="metric-card reveal"><span class="metric-card__label">${escapeHtml(item[0])}</span><strong>${escapeHtml(item[1])}</strong><p>${escapeHtml(item[2])}</p><small>${escapeHtml(item[3])}</small></article>`).join("")}</div><div class="staffing-proof reveal" aria-label="${escapeHtml(c.outcomes.staffingAria)}"><div class="staffing-proof__state"><span>${escapeHtml(c.outcomes.before[0])}</span><strong>${c.outcomes.before.slice(1).map(escapeHtml).join("<br>")}</strong></div><span class="staffing-proof__arrow" aria-hidden="true">→</span><div class="staffing-proof__state"><span>${escapeHtml(c.outcomes.after[0])}</span><strong>${c.outcomes.after.slice(1).map(escapeHtml).join("<br>")}</strong></div></div><p class="evidence-note">${escapeHtml(c.outcomes.note)}</p></div></section>
        ${tail}
      </div>`;
  };

  let cleanup = null;

  const destroy = () => {
    cleanup?.();
    cleanup = null;
  };

  const setup = () => {
    destroy();
    const toc = document.querySelector(".case-page--insurance-approved .case-toc");
    const links = [...document.querySelectorAll(".case-page--insurance-approved .case-toc a[data-section]")];
    const sections = links.map(link => document.getElementById(link.dataset.section)).filter(Boolean);
    let frame = 0;
    let metricObserver = null;

    const update = () => {
      frame = 0;
      if (!toc || !links.length || !sections.length) return;
      const headerOffset = 72;
      const activationLine = Math.max(headerOffset + 80, window.innerHeight * 0.3);
      const firstRect = sections[0].getBoundingClientRect();
      const lastRect = sections[sections.length - 1].getBoundingClientRect();
      toc.classList.toggle("is-visible", firstRect.top <= activationLine && lastRect.bottom > headerOffset + 40);
      let active = sections[0];
      sections.forEach(section => { if (section.getBoundingClientRect().top <= activationLine) active = section; });
      links.forEach(link => {
        const isActive = link.dataset.section === active.id;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    update();

    const metricGroup = document.querySelector(".case-page--insurance-approved .hero-metrics");
    const metricNumbers = [...document.querySelectorAll(".case-page--insurance-approved [data-count-to]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderMetric = (element, value) => {
      const prefix = element.dataset.countPrefix || "";
      const suffix = element.dataset.countSuffix || "";
      const decimals = Number(element.dataset.countDecimals || 0);
      const formatted = decimals ? Number(value).toFixed(decimals) : Math.round(value);
      element.textContent = `${prefix}${formatted}${suffix}`;
    };
    const animateMetric = element => {
      const target = Number(element.dataset.countTo);
      let start;
      renderMetric(element, 0);
      const step = timestamp => {
        start ??= timestamp;
        const progress = Math.min((timestamp - start) / 1200, 1);
        renderMetric(element, target * (1 - Math.pow(1 - progress, 3)));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };
    if (metricGroup && metricNumbers.length && !reduceMotion && "IntersectionObserver" in window) {
      metricObserver = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        metricNumbers.forEach(animateMetric);
        metricObserver.disconnect();
      }, { threshold: 0.45 });
      metricObserver.observe(metricGroup);
    }

    cleanup = () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      metricObserver?.disconnect();
    };
  };

  window.INSURANCE_CASE_PAGE = {
    getContent(locale) { return CASES[locale] || CASES.en; },
    render,
    setup,
    destroy
  };
})();
