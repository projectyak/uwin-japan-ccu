/* UWin·Japan — language switcher (EN / 中文 / 日本語) */
(function () {
  const I18N = {
    en: {
      navFeatures: "Features",
      navPlatform: "Platform",
      navMetrics: "Metrics",
      navHardware: "Hardware",
      navSoftware: "Software",
      navSolution: "Solution",
      navContact: "Contact",
      navBookDemo: "See the solution",
      navGetStarted: "Contact Us",

      heroEyebrow: "CARBON & ESG PRACTICE",
      heroH1: "Capture carbon.<br><em>File compliantly.</em>",
      heroLead: "Our integrated CCU equipment and platform capture factory CO₂, convert it into sellable sodium bicarbonate, track every gram in real time, and prepare compliance and METI subsidy documents for you.",
      heroCtaPrimary: "Contact Us",
      heroCtaSecondary: "See the platform",
      heroMetiReady: "METI-ready exports",

      featuresEyebrow: "Platform · CCU·XPO",
      featuresH2: "Everything your CCU operation needs,<br><em>in one auditable place.</em>",
      featuresLead: "From sensor to submission, CCU·XPO handles the full chain, with no manual re-entry.",
      feat1Title: "Real-time digital MRV",
      feat1Body: "IoT sensor data streams directly into a tamper-evident audit trail every 5 seconds. Calibration events and drift corrections are automatically versioned and locked.",
      feat2Title: "Automated emissions calculation",
      feat2Body: "Calculation pipelines apply approved emission factors from IPCC, METI, and JIS standards. Every computation is explainable and traceable to source.",
      feat3Title: "METI subsidy packages",
      feat3Body: "One click generates a compliant ZIP containing your CCU form, supporting evidence, and audit trail hash, ready for submission to NEDO or the Ministry of Economy.",
      feat4Title: "Assured audit trail",
      feat4Body: "Every data point, calculation, and user action carries a timestamp, user fingerprint, and hash chain. Carbon & ESG team provides assurance on demand.",
      feat4Tag: "Audit · read-only share",
      equipInputs: "INPUTS",
equipOutputs: "OUTPUTS",
equipResources: "Resource Inputs",
equipBoundaryLabel: "UWin CCU System Boundary",

      darkEyebrow: "Solution Package",
      darkH2: "Hardware & software,<br><em>built as one package.</em>",
      darkLead: "Replace manual spreadsheets and one-off data exports with a single platform that connects sensors, calculations, and filings.",
      dark1Title: "Equipment health at a glance",
      dark1Body: "Uptime, vibration, temperature, and capture-rate trends for every SKID in your plant, updated in real time.",
      dark2Title: "Historical trend analysis",
      dark2Body: "Compare current vs prior period vs targets across any date range, with exportable CSV for internal reporting.",
      dark3Title: "Master data management",
      dark3Body: "Maintain legal entity info, plant boundary declarations, and emission factor versions in one governed store.",

      stat1Label: "CO<sub>2</sub>e captured on platform year-to-date",
      stat1Sub: "across 34 active plants",
      stat2Label: "Average capture rate across all monitored skids",
      stat2Sub: "target 90% · last 30 days",
      stat3Label: "Estimated METI subsidy value facilitated",
      stat3Sub: "FY2026 applications in progress",

      equipHowEyebrow: "How It Works",
      equipHowH3: "From factory exhaust <em>to sellable product.</em>",

      howEyebrow: "How it works",
      howH2: "From sensor reading <em>to filed report.</em>",
      step1Title: "Connect your equipment",
      step1Body: "Register your CCU skids and configure IoT sensor feeds. Supported protocols: Modbus TCP, OPC-UA, MQTT, and manual CSV upload.",
      step2Title: "Define your calculation",
      step2Body: "Select approved emission factors, declare your system boundary, and configure the calculation template for your facility type.",
      step3Title: "Export your compliance package",
      step3Body: "One click assembles a METI-ready ZIP: pre-filled subsidy form, sensor evidence, audit trail, and calculation summary with hash-stamped and signed.",

      contactEyebrow: "Get in touch",
      contactH2: "Ready to simplify <em>your CCU compliance?</em>",
      contactLead: "Request a personalized demo tailored to your CCU operations, reporting workflow, and compliance requirements.",
      fName: "Name",
      fNamePh: "Tanaka Keiji",
      fEmail: "Email",
      fCompany: "Company",
      fCompanyPh: "Santon Steel Corp.",
      fMessage: "Message",
      fMessagePh: "Tell us about your CCU operation and compliance goals.",
      fSubmit: "Send message &rarr;",
      fThanks: "Thank you. We will reach out to you soon.",

      footerDesc: "Carbon capture & utilization compliance, from sensor to submission. Operated by Carbon & ESG Practice.",
      footerColPlatform: "Platform",
      footerDashboard: "Dashboard",
      footerDataCenter: "Data center",
      footerCalculation: "Calculation",
      footerReporting: "Reporting",
      footerAbout: "About",
      footerCarbonEsg: "Carbon & ESG",
      footerInsights: "Insights",
      footerCareers: "Careers",
      footerColResources: "Resources",
      footerDocs: "Documentation",
      footerApi: "API reference",
      footerSecurity: "Data security",
      footerSupport: "Support",
      footerCopy: "© 2026 UWin.Japan  All rights reserved.",

      // --- New Equipment Solution Keys ---
      navEquipment: "Equipment · UWin CCU",
      equipEyebrow: "Carbon & ESG Practice",
      equipH2: "UWin CCU Equipment,<br><em>from flue gas to product.</em>",
      equipLead: "A single skid-mounted unit captures CO₂ from industrial exhaust and converts it into market-ready NaHCO₃ or Na₂CO₃, five stages, one compact footprint.",
      stage1Name: "Capture", 
      stage2Name: "Absorption", 
      stage3Name: "Heat Mgmt", 
      stage4Name: "Crystallization", 
      stage5Name: "Separation",
      hwFeat1Title: "Modular skid-mounted",
      hwFeat1Body: "Compact footprint, plug-and-play deployment in 6–8 weeks with minimal civil work.",
      hwFeat1Tag: "COMPACT · PLUG & PLAY",
      hwFeat2Title: ">90% capture rate",
      hwFeat2Body: "Industry-leading CO₂ absorption efficiency directly from flue gas streams.",
      hwFeat2Tag: "INDUSTRY-LEADING",
      hwFeat3Title: "Marketable byproducts",
      hwFeat3Body: "High-purity NaHCO₃ / Na₂CO₃ ready for food, pharma, and construction supply chains.",
      hwFeat3Tag: "NaHCO₃ · Na₂CO₃",
      hwFeat4Title: "IoT-ready MRV",
      hwFeat4Body: "Built-in sensors stream live capture and emissions data to the UWin platform from day one.",
      hwFeat4Tag: "METI-COMPLIANT",

      heroTagline: "Capture CO₂. Create revenue. Stay compliant.",
      heroCtaHardware: "See the solution",
      hwFeaturesEyebrow: "Hardware Features",
      hwFeaturesH3: "Modular, IoT-ready, <em>built to capture.</em>",
      equipSrcTitle: "Factory Exhaust",
      util1: "Electricity",
      util2: "Water",
      util3: "NaOH",
      output1Title: "Byproduct",
      output2Title: "Purified Gas",

      // --- Monitoring Section ---
      monEyebrow: "Equipment Real-Time Monitoring",
      monMeta: "IoT sensors · ISO 14064-3:2019",
      a01Label: "Inlet CO₂ Concentration NDIR",
      a02Label: "Outlet CO₂ Concentration NDIR",
      a03Label: "Exhaust Gas Flow Meter",
      a04Label: "CCU Power Consumption JIS C1211",
      a05Label: "NaHCO₃ Output JIS B7611",
      a06Label: "NaOH Usage",
      monStatus: "Operating · Live",
      legendCo2: "CO₂ Flow",
      legendCooling: "Cooling Circuit",
      legendNaoh: "NaOH Dosing",
      legendSlurry: "Slurry",
      legendStructure: "Structure",
      monAxes: "6 active sensors",
      svgQuench: "QUENCH",
      svgReactor: "SUPER-GRAVITY",
      svgAbsorber: "SPRAY",
      svgFan: "FAN",
      svgStack: "STACK",
      svgFeedTank: "NaOH TANK",
      svgCrystallizer: "FILTER PRESS",
      svgCo2In: "CO₂ IN",
      svgCleanGas: "↑ CLEAN GAS",
      svgProduct: "NaHCO₃",

      gateEyebrow: "Visitor registration",
      gateH2: "Welcome to <em>UWin·Japan</em>",
      gateLead: "Please register for more details.",
      fTitle: "Title",
      fTitlePh: "Sustainability Manager",
      gateSubmit: "Enter site &rarr;",
    },

    zh: {
      navFeatures: "功能特色",
      navPlatform: "平台",
      navMetrics: "成效數據",
      navHardware: "硬體設備",
      navSoftware: "軟體平台",
      navSolution: "解決方案",
      navContact: "聯絡我們",
      navBookDemo: "查看解決方案",
      navGetStarted: "聯絡我們",

      heroEyebrow: "碳管理與 ESG 服務",
      heroH1: "碳捕集管理，<br><em>合規申報無縫完成</em>",
      heroLead: "整合即時設備監測、符合 ISO 14064-3 的排放量計算，以及自動化 METI 補助申請文件產製。",
      heroCtaPrimary: "聯絡我們",
      heroCtaSecondary: "了解平台",
      heroMetiReady: "METI 申報就緒匯出",

      featuresEyebrow: "平台 · CCU·XPO",
      featuresH2: "CCU 營運所需能力，<br><em>集中於單一可稽核平台</em>",
      featuresLead: "從感測器到申報文件，CCU·XPO 串接完整資料鏈，無須重複手動輸入。",
      feat1Title: "即時數位 MRV",
      feat1Body: "IoT 感測資料每 5 秒即時寫入防竄改稽核軌跡。校正事件與漂移修正皆會自動版本化並鎖定紀錄。",
      feat2Title: "自動化排放量計算",
      feat2Body: "計算流程套用 IPCC、METI 與 JIS 等核可排放係數。每一筆計算皆可解釋，並可追溯至原始資料來源。",
      feat3Title: "METI 補助申請套件",
      feat3Body: "一鍵產生合規 ZIP 檔，內含 CCU 申請表、佐證資料與稽核軌跡雜湊值，可直接支援送交 NEDO 或經濟產業省。",
      feat4Title: "可信賴的稽核軌跡",
      feat4Body: "每筆資料、計算結果與使用者操作皆附有時間戳記、使用者指紋與雜湊鏈。Carbon & ESG 團隊可依需求提供確信服務。",
      feat4Tag: "稽核 · 唯讀分享",

    equipInputs: "投入端 (INPUTS)",
equipOutputs: "產出端 (OUTPUTS)",
equipResources: "資源投入 (Resource Inputs)",
equipBoundaryLabel: "UWin CCU 系統計算邊界",

      darkEyebrow: "解決方案套件",
      darkH2: "硬體與軟體，<br><em>整合為一套方案。</em>",
      darkLead: "以單一平台串接感測器、計算流程與申報作業，取代分散的試算表與一次性資料匯出。",
      dark1Title: "設備狀態一目了然",
      dark1Body: "即時掌握廠內每一座 SKID 的稼動率、振動、溫度與碳捕集率趨勢。",
      dark2Title: "歷史趨勢分析",
      dark2Body: "可依任意期間比較本期、前期與目標值，並匯出 CSV 供內部報告使用。",
      dark3Title: "主資料管理",
      dark3Body: "於單一受治理資料庫中維護法人資訊、廠界聲明與排放係數版本。",

      stat1Label: "平台年度累計捕集 CO<sub>2</sub>e",
      stat1Sub: "涵蓋 34 座運轉中工廠",
      stat2Label: "所有監測 SKID 的平均捕集率",
      stat2Sub: "目標 90% · 近 30 日",
      stat3Label: "促成的 METI 補助估計金額",
      stat3Sub: "FY2026 申請進行中",

      equipHowEyebrow: "運作方式",
      equipHowH3: "從工廠廢氣，<em>到可售商品。</em>",

      howEyebrow: "運作方式",
      howH2: "從感測讀數，<em>到完成申報。</em>",
      step1Title: "連接您的設備",
      step1Body: "登錄 CCU 機組並設定 IoT 感測器資料來源。支援 Modbus TCP、OPC-UA、MQTT 與 CSV 手動上傳。",
      step2Title: "定義計算邏輯",
      step2Body: "選擇核可排放係數、宣告系統邊界，並依設施類型設定計算範本。",
      step3Title: "匯出合規申報套件",
      step3Body: "一鍵組成 METI 適用 ZIP：預填補助申請表、感測佐證、稽核軌跡與計算摘要，並完成雜湊戳記與簽署。",

      contactEyebrow: "聯絡我們",
      contactH2: "簡化您的 CCU 合規流程了",
      contactLead: "預約專屬展示，依您的 CCU 營運模式、報告流程與合規需求量身說明。",
      fName: "姓名",
      fNamePh: "陳大文",
      fEmail: "電子郵件",
      fCompany: "公司",
      fCompanyPh: "三同股份有限公司",
      fMessage: "訊息",
      fMessagePh: "請簡述貴公司的 CCU 營運情境與合規目標。",
      fSubmit: "送出訊息 &rarr;",
      fThanks: "感謝您。我們將盡速與您聯繫。",

      footerDesc: "從感測器到申報文件，支援碳捕集與再利用的合規管理。由 Carbon & ESG Practice 營運。",
      footerColPlatform: "平台",
      footerDashboard: "儀表板",
      footerDataCenter: "資料中心",
      footerCalculation: "計算",
      footerReporting: "報告",
      footerAbout: "關於我們",
      footerCarbonEsg: "碳管理與 ESG",
      footerInsights: "洞察觀點",
      footerCareers: "人才招募",
      footerColResources: "資源",
      footerDocs: "文件",
      footerApi: "API 參考",
      footerSecurity: "資料安全",
      footerSupport: "支援",
      footerCopy: "© 2026 UWin.Japan  版權所有。",

      // --- New Equipment Solution Keys ---
      navEquipment: "設備 · UWin CCU",
      equipEyebrow: "碳管理與 ESG 服務",
      equipH2: "UWin CCU 設備，<br><em>廢氣到商品一體成型。</em>",
      equipLead: "單一模組化 SKID，從工業廢氣直接捕集 CO₂，轉化為可上市的 NaHCO₃ 或 Na₂CO₃，五道製程，一個精巧機組。",
      stage1Name: "捕捉設備", 
      stage2Name: "吸收", 
      stage3Name: "熱能管理", 
      stage4Name: "結晶化", 
      stage5Name: "固液分離",
      hwFeat1Title: "模組化 SKID 設計",
      hwFeat1Body: "佔地精巧，最快 6–8 週即可完成安裝調試，無需大型土木工程。",
      hwFeat1Tag: "精巧設計 · 即插即用",
      hwFeat2Title: ">90% 碳捕集率",
      hwFeat2Body: "業界領先的二氧化碳吸收效率，直接從煙道廢氣中高效分離。",
      hwFeat2Tag: "業界領先技術",
      hwFeat3Title: "可上市副產物",
      hwFeat3Body: "產出高純度小蘇打（NaHCO₃），可直接進入食品、製藥與建材供應鏈。",
      hwFeat3Tag: "NaHCO₃ · Na₂CO₃",
      hwFeat4Title: "內建 IoT 數位 MRV",
      hwFeat4Body: "設備內建感測器，從上線第一天起即可將即時數據串流至平台。",
      hwFeat4Tag: "符合 METI 標準",

      heroTagline: "捕集 CO₂。創造收益。保持合規。",
      heroCtaHardware: "查看解決方案",
      hwFeaturesEyebrow: "設備特點",
      hwFeaturesH3: "模組化、IoT就緒，<em>專為捕集而生。</em>",
      equipSrcTitle: "廠區廢氣",
      util1: "電力",
      util2: "水",
      util3: "NaOH",
      output1Title: "副產物",
      output2Title: "淨化氣體",

      // --- Monitoring Section ---
      monEyebrow: "設備即時監測",
      monMeta: "IoT 感測器 · ISO 14064-3:2019",
      a01Label: "入口 CO₂ 濃度 NDIR",
      a02Label: "出口 CO₂ 濃度 NDIR",
      a03Label: "廢氣流量計",
      a04Label: "CCU 電力消耗 JIS C1211",
      a05Label: "NaHCO₃ 產量 JIS B7611",
      a06Label: "NaOH 用量",
      monStatus: "運轉中 · 即時",
      legendCo2: "CO₂ 流向",
      legendCooling: "冷卻迴路",
      legendNaoh: "NaOH 加藥",
      legendSlurry: "泥漿",
      legendStructure: "結構",
      monAxes: "6 個感測器啟用",
      svgQuench: "急冷塔",
      svgReactor: "超重力",
      svgAbsorber: "噴淋塔",
      svgFan: "風機",
      svgStack: "煙囪",
      svgFeedTank: "NaOH 桶",
      svgCrystallizer: "板式壓濾機",
      svgCo2In: "CO₂ 入口",
      svgCleanGas: "↑ 潔淨氣體",
      svgProduct: "NaHCO₃",

      gateEyebrow: "訪客登記",
      gateH2: "歡迎來到 <em>UWin·Japan</em>",
      gateLead: "請登記以取得更多詳細資訊。",
      fTitle: "職稱",
      fTitlePh: "永續發展經理",
      gateSubmit: "進入網站 &rarr;",
    },

    ja: {
      navFeatures: "機能",
      navPlatform: "プラットフォーム",
      navMetrics: "実績データ",
      navHardware: "ハードウェア",
      navSoftware: "ソフトウェア",
      navSolution: "ソリューション",
      navContact: "お問い合わせ",
      navBookDemo: "ソリューションを見る",
      navGetStarted: "お問い合わせ",

      heroEyebrow: "カーボン & ESG プラクティス",
      heroH1: "炭素回収を管理し、<br><em>コンプライアンス報告を確実に</em>",
      heroLead: "リアルタイム設備モニタリング、ISO 14064-3 準拠の排出量計算、METI 補助金申請パッケージの自動生成を統合します。",
      heroCtaPrimary: "お問い合わせ",
      heroCtaSecondary: "プラットフォームを見る",
      heroMetiReady: "METI 対応エクスポート",

      featuresEyebrow: "プラットフォーム · CCU·XPO",
      featuresH2: "CCU 運用に必要なすべてを、<br><em>監査可能な単一プラットフォームに</em>",
      featuresLead: "センサーから申請まで、CCU·XPO がデータチェーン全体をつなぎ、手作業での再入力を不要にします。",
      feat1Title: "リアルタイム・デジタル MRV",
      feat1Body: "IoT センサーデータは 5 秒ごとに、改ざん検知可能な監査証跡へ直接ストリーミングされます。校正イベントとドリフト補正也自動的にバージョン管理され、ロックされます。",
      feat2Title: "排出量計算の自動化",
      feat2Body: "計算パイプラインは、IPCC、METI、JIS などの承認済み排出係数を適用します。すべての計算は説明可能で、元データまで追跡できます。",
      feat3Title: "METI 補助金申請パッケージ",
      feat3Body: "ワンクリックで、CCU 申請フォーム、補足エビデンス、監査証跡ハッシュを含む準拠 ZIP を生成。NEDO または経済産業省への提出を支援します。",
      feat4Title: "信頼性の高い監査証跡",
      feat4Body: "すべてのデータポイント、計算、ユーザー操作に、タイムスタンプ、ユーザー指紋、ハッシュチェーンを付与します。Carbon & ESG チームが必要に応じて保証業務を提供します。",
      feat4Tag: "監査 · 読み取り専用共有",

      equipInputs: "投入 (INPUTS)",
      equipOutputs: "産出 (OUTPUTS)",
      equipResources: "リソース投入",
      equipBoundaryLabel: "UWin CCU システム境界",

      darkEyebrow: "ソリューションパッケージ",
      darkH2: "ハードウェアとソフトウェア、<br><em>ひとつのパッケージに。</em>",
      darkLead: "センサー、計算、申請を単一プラットフォームで接続し、分散した表計算や一時的なデータエクスポート作業を置き換えます。",
      dark1Title: "設備状態をひと目で把握",
      dark1Body: "工場内すべての SKID について、稼働率、振動、温度、炭素回収率のトレンドをリアルタイムに確認できます。",
      dark2Title: "履歴トレンド分析",
      dark2Body: "任意の期間で当期、前期、目標値を比較し、社内報告用に CSV 形式でエクスポートできます。",
      dark3Title: "マスターデータ管理",
      dark3Body: "法人情報、プラント境界宣言、排出係数バージョンを、統制された単一ストアで管理します。",

      stat1Label: "プラットフォーム上の年度累計 CO<sub>2</sub>e 回収量",
      stat1Sub: "稼働中の 34 工場を対象",
      stat2Label: "監視中 SKID 全体の平均回収率",
      stat2Sub: "目標 90% · 直近 30 日",
      stat3Label: "支援した METI 補助金の推定額",
      stat3Sub: "FY2026 申請進行中",

      equipHowEyebrow: "仕組み",
      equipHowH3: "工場排気から、<em>販売できる製品へ。</em>",

      howEyebrow: "仕組み",
      howH2: "センサー読取値から、<em>申請書類まで。</em>",
      step1Title: "設備を接続",
      step1Body: "CCU スキッドを登録し、IoT センサーフィードを設定します。対応プロトコル：Modbus TCP、OPC-UA、MQTT、CSV 手動アップロード。",
      step2Title: "計算ロジックを定義",
      step2Body: "承認済み排出係数を選択し、システム境界を宣言したうえで、施設タイプに応じた計算テンプレートを設定します。",
      step3Title: "コンプライアンス申請パッケージを出力",
      step3Body: "ワンクリックで METI 対応 ZIP を作成。事前入力済み補助金申請フォーム、センサーエビデンス、監査証跡、計算サマリーを含み、ハッシュスタンプと署名にも対応します。",

      contactEyebrow: "お問い合わせ",
      contactH2: "<em>CCU コンプライアンスを簡素化</em>する準備はできていますか？",
      contactLead: "貴社の CCU 運用、報告フロー、コンプライアンス要件に合わせた個別デモをご依頼ください。",
      fName: "お名前",
      fNamePh: "田中 啓二",
      fEmail: "メールアドレス",
      fCompany: "会社名",
      fCompanyPh: "三同鉄鋼株式会社",
      fMessage: "メッセージ",
      fMessagePh: "貴社の CCU 運用状況とコンプライアンス目標をお聞かせください。",
      fSubmit: "送信 &rarr;",
      fThanks: "ありがとうございます。追って速やかにご連絡いたします。",

      footerDesc: "センサーから申請まで、炭素回収・利活用のコンプライアンス管理を支援します。Carbon & ESG Practice 運営。",
      footerColPlatform: "プラットフォーム",
      footerDashboard: "ダッシュボード",
      footerDataCenter: "データセンター",
      footerCalculation: "計算",
      footerReporting: "レポート",
      footerAbout: "会社情報",
      footerCarbonEsg: "カーボン & ESG",
      footerInsights: "インサイト",
      footerCareers: "採用情報",
      footerColResources: "リソース",
      footerDocs: "ドキュメント",
      footerApi: "API リファレンス",
      footerSecurity: "データセキュリティ",
      footerSupport: "サポート",
      footerCopy: "© 2026 UWin.Japan  全著作権所有。",

      // --- New Equipment Solution Keys ---
      navEquipment: "設備 · UWin CCU",
      equipEyebrow: "カーボン & ESG プラクティス",
      equipH2: "UWin CCU 設備、<br><em>排気から製品へ、一体型。</em>",
      equipLead: "スキッドマウント型の単一ユニットが工業排気からCO₂を直接捕集し、市場直結のNaHCO₃またはNa₂CO₃に転換します。全5段階、ひとつのコンパクトな機体に収めています。",
      stage1Name: "CO₂ 捕集", 
      stage2Name: "吸収", 
      stage3Name: "熱エネルギー管理", 
      stage4Name: "晶析", 
      stage5Name: "固液分離",
      hwFeat1Title: "スキッドマウント型モジュール",
      hwFeat1Body: "コンパクトな設計で、大規模な土木工事なしに 6〜8 週間で迅速な導入が可能です。",
      hwFeat1Tag: "コンパクト · プラグ＆プレイ",
      hwFeat2Title: "90% 以上の回収率",
      hwFeat2Body: "煙道ガスから直接 CO₂ を吸収する、業界トップクラスの効率を実現しました。",
      hwFeat2Tag: "業界最先端技術",
      hwFeat3Title: "市場性のある副産物",
      hwFeat3Body: "高純度の重曹（NaHCO₃）を生成し、食品、製薬、建材市場へ直接供給可能です。",
      hwFeat3Tag: "NaHCO₃ · Na₂CO₃",
      hwFeat4Title: "IoT 対応 MRV",
      hwFeat4Body: "内蔵センサーにより、稼働初日から回収・排出データをプラットフォームへ転送します。",
      hwFeat4Tag: "METI 準拠",

      heroTagline: "CO₂を回収。収益を生む。コンプライアンスを維持。",
      heroCtaHardware: "ソリューションを見る",
      hwFeaturesEyebrow: "設備特長",
      hwFeaturesH3: "モジュール型、IoT対応、<em>捕集のために設計。</em>",
      equipSrcTitle: "工場排気",
      util1: "電力",
      util2: "水",
      util3: "NaOH",
      output1Title: "副産物",
      output2Title: "精製ガス",

      // --- Monitoring Section ---
      monEyebrow: "設備リアルタイム監視",
      monMeta: "IoT センサー · ISO 14064-3:2019",
      a01Label: "入口 CO₂ 濃度 NDIR",
      a02Label: "出口 CO₂ 濃度 NDIR",
      a03Label: "排気ガス流量計",
      a04Label: "CCU 消費電力 JIS C1211",
      a05Label: "NaHCO₃ 生産量 JIS B7611",
      a06Label: "NaOH 使用量",
      monStatus: "稼働中 · ライブ",
      legendCo2: "CO₂ フロー",
      legendCooling: "冷却回路",
      legendNaoh: "NaOH 投入",
      legendSlurry: "スラリー",
      legendStructure: "構造",
      monAxes: "アクティブセンサー 6台",
      svgQuench: "急冷塔",
      svgReactor: "超重力反応器",
      svgAbsorber: "スプレー塔",
      svgFan: "送風機",
      svgStack: "煙突",
      svgFeedTank: "NaOH タンク",
      svgCrystallizer: "板状フィルター",
      svgCo2In: "CO₂ 入口",
      svgCleanGas: "↑ クリーンガス",
      svgProduct: "NaHCO₃",

      gateEyebrow: "ご来訪登録",
      gateH2: "<em>UWin·Japan</em> へようこそ",
      gateLead: "詳細情報については、ご登録をお願いいたします。",
      fTitle: "役職",
      fTitlePh: "サステナビリティ責任者",
      gateSubmit: "サイトに入る &rarr;",
    }
  };

  const HTML_LANG = { en: "en", zh: "zh-Hant", ja: "ja" };

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    const dict = I18N[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[dict[k]] || dict[k];
      // Note: original code used el.innerHTML = dict[k]; 
      // I kept it simple to ensure HTML renders properly.
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const k = el.getAttribute("data-i18n-placeholder");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });

    document.documentElement.setAttribute("lang", HTML_LANG[lang] || "en");
    try { localStorage.setItem("ccu-lang", lang); } catch (_) {}

    document.querySelectorAll(".nav-lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    window.__ccuLang = lang;
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  }

  window.__ccuOnSubmitContact = function (form) {
    const lang = window.__ccuLang || "en";
    const msg = (I18N[lang] && I18N[lang].fThanks) || I18N.en.fThanks;
    form.innerHTML =
      '<div style="text-align:center;padding:32px;color:var(--pwc-orange);font-weight:700;">' +
      msg +
      "</div>";
  };

  function init() {
    let saved = "en";
    try { saved = localStorage.getItem("ccu-lang") || "en"; } catch (_) {}
    if (!I18N[saved]) saved = "en";

    document.querySelectorAll(".nav-lang button").forEach((b) => {
      b.addEventListener("click", () => applyLang(b.dataset.lang));
    });
    applyLang(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();