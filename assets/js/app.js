/* ============================================================
   GLOBAL APP — i18n, Data Store, Navigation, Utilities
   ============================================================ */
(function () {
  'use strict';

  const CONTACT = {
    name: 'Wendy',
    phone: '+86 19548146867',
    phoneClean: '8619548146867',
    note: 'WeChat / WhatsApp'
  };

  const CATEGORIES = [
    { key: 'phoneChain', icon: '📱', weightHint: 'Light' },
    { key: 'bracelet', icon: '⌚', weightHint: 'Light-Medium' },
    { key: 'necklace', icon: '📿', weightHint: 'Medium' },
    { key: 'anklet', icon: '🦶', weightHint: 'Medium' },
    { key: 'ring', icon: '💍', weightHint: 'Heavy (per volume)' }
  ];

  const ADMIN_PASSWORD = 'wendy123'; // 后台密码，可自行修改
  const STORAGE_KEY_PRODUCTS = 'wj_products_v1';
  const STORAGE_KEY_LANG = 'wj_lang';

  const LANGS = [
    { code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr' },
    { code: 'zh', label: '中文', flag: '🇨🇳', dir: 'ltr' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr' }
  ];

  /* ---------------- Translation dictionaries (INLINE — works with file://) ---------------- */
  let currentLang = 'en';
  const i18nDict = {
    en: {
      nav: { home: "Home", products: "Products", phoneChain: "Phone Chains", bracelet: "Bracelets", necklace: "Necklaces", anklet: "Anklets", ring: "Rings", allProducts: "All Products", contact: "Contact Us", admin: "Admin", language: "Language" },
      home: {
        heroTitle: "Premium Fashion Jewelry — Direct from Our Factory",
        heroSubtitle: "Factory & Trading Integration — Best Price & Quality from China",
        heroCta: "View Products →", heroContact: "Contact Wendy on WhatsApp",
        categoriesTitle: "Our Product Categories", categoriesDesc: "Phone chains (our main line) plus bracelets, necklaces, anklets and rings — mix & match to fill containers perfectly.",
        eyebrowCollections: "Collections", eyebrowIntegration: "Factory & Trading Integration", eyebrowBest: "Best Sellers", eyebrowContact: "Get in Touch",
        advantageTitle: "Why Choose Wendy Jewelry?",
        advantageSubtitle: "Factory & Trading Integration — Your Trusted Jewelry Partner",
        adv1Title: "Factory-Direct Pricing", adv1Desc: "We own our manufacturing facility, cutting out middlemen and offering you the most competitive prices in the market.",
        adv2Title: "Smart Container Optimization", adv2Desc: "We expertly mix heavy and light goods to maximize both weight and volume of every container, saving you up to 30% on shipping costs.",
        adv3Title: "Wide Product Range", adv3Desc: "From phone chains, bracelets, necklaces, anklets to rings — one-stop sourcing for all your jewelry needs.",
        adv4Title: "Custom & OEM Support", adv4Desc: "Flexible MOQ, custom designs, private labeling — we tailor solutions for small boutiques and large brands alike.",
        featuredTitle: "Featured Products", featuredDesc: "Handpicked favorites — all with multiple color options and clear material & weight info.", viewAll: "View All Products →",
        heroBadgeTitle: "🚢 Maximize Every Container", heroBadgeDesc: "We mix light & heavy goods to save you up to 30% shipping cost.",
        shipTitle: "🚢 Smart Container Loading — How We Save You Money",
        shipIntro: "As a factory & trading integrated business, we understand shipping better than trading companies. Jewelry SKUs have very different densities:",
        shipL1: "Light goods: Phone chains, bracelets, anklets — fill volume fast but add little weight",
        shipL2: "Medium: Necklaces",
        shipL3: "Heavy per volume: Rings — small and dense, use up weight allowance quickly",
        shipL4: "Result: We combine categories so your container hits BOTH max weight AND max volume — save up to 30% shipping!",
        shipLegendLight: "Light: Phone chain / Bracelet", shipLegendHeavy: "Heavy: Ring / Necklace",
        shipResult: "✅ Balanced load = max weight + max volume = lowest unit cost",
        contactTitle: "Contact Wendy Directly",
        contactSubtitle: "Questions? Need a quote? Container planning help? Reach out — Wendy replies within 2 hours on WeChat & WhatsApp.",
        contactPerson: "Wendy", contactRole: "Senior Sales Manager · Jewelry Factory",
        contactPhone: "+86 19548146867", contactNote: "(WeChat / WhatsApp)",
        copySuccess: "Phone number copied!",
        chatWhatsApp: "💬 Chat on WhatsApp", browseFirst: "📦 Browse Products First",
        feat1Title: "⚡ Fast Reply", feat1Desc: "Response within 2 hours during business hours (GMT+8).",
        feat2Title: "📷 Real Photos & Samples", feat2Desc: "Request real product photos, videos or physical samples anytime.",
        feat3Title: "🚢 Container Planning", feat3Desc: "Tell us your target budget — we mix SKUs for best possible per-unit cost.",
        feat4Title: "🌍 Global Shipping", feat4Desc: "We ship via sea, air & express to 100+ countries. EXW / FOB / CIF.",
        footerRights: "All rights reserved.",
        footerDesc: "Premium fashion jewelry manufacturer & exporter — factory & trading integration."
      },
      products: { title: "Product Catalog", subtitle: "Browse our full collection of fashion jewelry. All products include material & weight details plus multiple color options.", searchPlaceholder: "Search products...", filterAll: "All", noProducts: "No products found", viewDetails: "View Details", inquiry: "Inquiry", material: "Material", weight: "Weight", colors: "Available Colors" },
      detail: { back: "← Back to Products", material: "Material", weight: "Weight", colors: "Available Colors", description: "Description", inquiryBtn: "Send Inquiry to Wendy", inquiryWhatsApp: "WhatsApp", inquiryWechat: "WeChat", shareColor: "Select a color to view" },
      admin: { title: "Admin Panel", loginTitle: "Admin Login", password: "Password", loginBtn: "Login", logout: "Logout", wrongPwd: "Wrong password", addProduct: "Add New Product", editProduct: "Edit Product", deleteProduct: "Delete", confirmDelete: "Are you sure to delete this product?", saveBtn: "Save Product", cancelBtn: "Cancel / Reset", productName: "Product Name (EN) *", productNameAr: "Product Name (AR)", productNameEs: "Product Name (ES)", category: "Category *", price: "Price (USD)", material: "Material (EN) *", materialAr: "Material (AR)", materialEs: "Material (ES)", weight: "Weight (g) *", description: "Description (EN)", descriptionAr: "Description (AR)", descriptionEs: "Description (ES)", mainImage: "Main Image URL", colors: "Color Variants", colorName: "Color name (EN) e.g. Rose Gold", colorImage: "Image URL https://...", addColor: "+ Add Color", removeColor: "✕", online: "On Shelf (visible)", offline: "Offline", toggleStatus: "Toggle", saveSuccess: "Saved successfully!", deleteSuccess: "Deleted successfully!", productList: "Product List", status: "Status", actions: "Actions", edit: "Edit" },
      common: { loading: "Loading...", error: "Error", success: "Success" }
    },
    zh: {
      nav: { home: "首页", products: "产品中心", phoneChain: "手机链", bracelet: "手链", necklace: "项链", anklet: "脚链", ring: "戒指", allProducts: "全部产品", contact: "联系我们", admin: "后台", language: "语言" },
      home: {
        heroTitle: "时尚精品饰品 — 工厂直供",
        heroSubtitle: "工贸一体 — 中国直供 · 最优价格与品质",
        heroCta: "查看产品 →", heroContact: "WhatsApp 联系 Wendy",
        categoriesTitle: "我们的产品分类", categoriesDesc: "手机链（主营）+ 手链、项链、脚链、戒指 — 灵活搭配，完美装满货柜。",
        eyebrowCollections: "产品系列", eyebrowIntegration: "工贸一体", eyebrowBest: "热销爆款", eyebrowContact: "联系我们",
        advantageTitle: "为什么选择 Wendy Jewelry？",
        advantageSubtitle: "工贸一体 — 您值得信赖的饰品合作伙伴",
        adv1Title: "工厂直供价格", adv1Desc: "我们拥有自有工厂，省去中间环节，为您提供市场上最具竞争力的价格。",
        adv2Title: "智能柜子装载优化", adv2Desc: "我们专业搭配轻重货物，最大化利用每个货柜的重量与体积，为您节省高达 30% 的运费。",
        adv3Title: "产品品类齐全", adv3Desc: "从手机链、手链、项链、脚链到戒指 — 一站式满足您所有的饰品采购需求。",
        adv4Title: "支持定制与 OEM", adv4Desc: "灵活起订量、定制设计、自有品牌 — 我们为小型精品店与大型品牌量身打造解决方案。",
        featuredTitle: "精选产品", featuredDesc: "精挑细选的爆款 — 全部支持多色可选，清晰标注材质与重量。",
        viewAll: "查看全部产品 →",
        heroBadgeTitle: "🚢 货柜利用最大化",
        heroBadgeDesc: "搭配轻重货物，最高节省 30% 运费。",
        shipTitle: "🚢 智能装柜 — 我们如何为您省钱",
        shipIntro: "作为工贸一体的企业，我们比纯贸易公司更懂物流。饰品的密度差异极大：",
        shipL1: "轻货：手机链、手链、脚链 — 快速占满体积但重量轻",
        shipL2: "中等：项链",
        shipL3: "小体积高密度：戒指 — 体积小但密度高，快速用完重量额度",
        shipL4: "结果：我们组合不同品类，让您的货柜同时达到最大重量 + 最大体积 — 节省高达 30% 运费！",
        shipLegendLight: "轻货：手机链 / 手链", shipLegendHeavy: "重货：戒指 / 项链",
        shipResult: "✅ 均衡装载 = 最大重量 + 最大体积 = 最低单位成本",
        contactTitle: "直接联系 Wendy",
        contactSubtitle: "有疑问？需要报价？货柜规划帮助？立即联系 — Wendy 在 2 小时内通过微信 / WhatsApp 回复。",
        contactPerson: "Wendy", contactRole: "资深销售经理 · 饰品工厂",
        contactPhone: "+86 19548146867", contactNote: "（微信 / WhatsApp）",
        copySuccess: "已复制手机号！",
        chatWhatsApp: "💬 WhatsApp 在线咨询", browseFirst: "📦 先逛产品",
        feat1Title: "⚡ 快速回复", feat1Desc: "工作时间（北京 GMT+8）2 小时内回复。",
        feat2Title: "📷 实拍图与样品", feat2Desc: "随时索取产品实拍图、视频或样品。",
        feat3Title: "🚢 货柜规划", feat3Desc: "告知目标预算 — 我们搭配 SKU 实现最低单位成本。",
        feat4Title: "🌍 全球海运", feat4Desc: "海运 / 空运 / 快递发往 100+ 国家。EXW / FOB / CIF。",
        footerRights: "版权所有。",
        footerDesc: "时尚精品饰品制造商与出口商 — 工贸一体。"
      },
      products: { title: "产品目录", subtitle: "浏览我们完整的时尚饰品系列。所有产品均标注材质与重量，并提供多种颜色选择。", searchPlaceholder: "搜索产品...", filterAll: "全部", noProducts: "未找到产品", viewDetails: "查看详情", inquiry: "询盘", material: "材质", weight: "重量", colors: "可选颜色" },
      detail: { back: "← 返回产品列表", material: "材质", weight: "重量", colors: "可选颜色", description: "产品描述", inquiryBtn: "向 Wendy 发送询盘", inquiryWhatsApp: "WhatsApp", inquiryWechat: "微信", shareColor: "选择颜色查看" },
      admin: { title: "管理后台", loginTitle: "管理员登录", password: "密码", loginBtn: "登录", logout: "退出", wrongPwd: "密码错误", addProduct: "新增产品", editProduct: "编辑产品", deleteProduct: "删除", confirmDelete: "确定删除这个产品吗？", saveBtn: "保存产品", cancelBtn: "取消 / 重置", productName: "产品名称（英文）", productNameAr: "产品名称（阿语）", productNameEs: "产品名称（西语）", category: "分类", price: "价格（美元）", material: "材质（英文）", materialAr: "材质（阿语）", materialEs: "材质（西语）", weight: "重量（克）", description: "描述（英文）", descriptionAr: "描述（阿语）", descriptionEs: "描述（西语）", mainImage: "主图链接", colors: "颜色变体", colorName: "颜色名称（英文），如玫瑰金", colorImage: "颜色图片链接 https://...", addColor: "+ 新增颜色", removeColor: "✕", online: "已上架", offline: "已下架", toggleStatus: "切换", saveSuccess: "保存成功！", deleteSuccess: "删除成功！", productList: "产品列表", status: "状态", actions: "操作", edit: "编辑" },
      common: { loading: "加载中...", error: "错误", success: "成功" }
    },
    ar: {
      nav: { home: "الرئيسية", products: "المنتجات", phoneChain: "سلاسل الهواتف", bracelet: "الأساور", necklace: "القلادات", anklet: "الخلاخيل", ring: "الخواتم", allProducts: "جميع المنتجات", contact: "تواصل معنا", admin: "لوحة التحكم", language: "اللغة" },
      home: {
        heroTitle: "مجوهرات أزياء فاخرة — مباشرة من مصنعنا",
        heroSubtitle: "تكامل المصنع والتجارة — أفضل سعر وجودة من الصين",
        heroCta: "عرض المنتجات →", heroContact: "تواصل مع ويندي عبر WhatsApp",
        categoriesTitle: "فئات منتجاتنا", categoriesDesc: "سلاسل الهواتف (خطنا الرئيسي) بالإضافة إلى الأساور والقلادات والخلاخيل والخواتم — مزج ومطابقة لملء الحاويات بشكل مثالي.",
        eyebrowCollections: "المجموعات", eyebrowIntegration: "تكامل المصنع والتجارة", eyebrowBest: "الأكثر مبيعاً", eyebrowContact: "تواصل معنا",
        advantageTitle: "لماذا تختار مجوهرات ويندي؟",
        advantageSubtitle: "تكامل المصنع والتجارة — شريك المجوهرات الموثوق الخاص بك",
        adv1Title: "أسعار مباشرة من المصنع", adv1Desc: "نملك منشأة التصنيع الخاصة بنا، مما يلغي الوسطاء ويقدم لك أكثر الأسعار تنافسية في السوق.",
        adv2Title: "تحقيق الحاويات الذكي", adv2Desc: "نقوم بدمج البضائع الثقيلة والخفيفة ببراعة لزيادة وزن وحجم كل حاوية إلى أقصى حد، مما يوفر لك ما يصل إلى 30٪ من تكاليف الشحن.",
        adv3Title: "مجموعة منتجات واسعة", adv3Desc: "من سلاسل الهواتف والأساور والقلادات والخلاخيل إلى الخواتم — مصدر واحد لجميع احتياجاتك من المجوهرات.",
        adv4Title: "دعم مخصص و OEM", adv4Desc: "حد أدنى للطلب مرن، تصاميم مخصصة، وضع علامات خاصة — نصمم حلولاً للمتاجر الصغيرة والعلامات التجارية الكبيرة على حد سواء.",
        featuredTitle: "المنتجات المميزة", featuredDesc: "مختارات مفضلة يدوياً — جميعها بخيارات ألوان متعددة ومعلومات واضحة عن المادة والوزن.", viewAll: "عرض جميع المنتجات →",
        heroBadgeTitle: "🚢 تعظيم استخدام كل حاوية", heroBadgeDesc: "نمزج البضائع الخفيفة والثقيلة لتوفير ما يصل إلى 30٪ من تكاليف الشحن.",
        shipTitle: "🚢 تحميل الحاويات الذكي — كيف نوفر لك المال",
        shipIntro: "كأعمال تجمع المصنع والتجارة، نفهم الشحن أفضل من شركات التجارة. منتجات المجوهرات لها كثافات مختلفة جداً:",
        shipL1: "البضائع الخفيفة: سلاسل الهواتف والأساور والخلاخيل — تملأ الحجم بسرعة لكنها تضيف وزناً قليلاً",
        shipL2: "متوسط: القلادات",
        shipL3: "ثقيل لكل حجم: الخواتم — صغيرة وكثيفة، تستنفد بدل الوزن بسرعة",
        shipL4: "النتيجة: نجمع بين الفئات لجعل حاويتك تحقق كلاً من أقصى وزن وأقصى حجم — توفير يصل إلى 30٪ من الشحن!",
        shipLegendLight: "خفيف: سلسلة الهاتف / سوار", shipLegendHeavy: "ثقيل: خاتم / قلادة",
        shipResult: "✅ حمل متوازن = أقصى وزن + أقصى حجم = أدنى تكلفة للوحدة",
        contactTitle: "تواصل مع ويندي مباشرة",
        contactSubtitle: "هل لديك أسئلة؟ هل تحتاج إلى عرض سعر؟ مساعدة في تخطيط الحاويات؟ تواصل — ويندي ترد في غضون ساعتين على WeChat و WhatsApp.",
        contactPerson: "ويندي", contactRole: "مديرة مبيعات أولى · مصنع مجوهرات",
        contactPhone: "+86 19548146867", contactNote: "(WeChat / WhatsApp)",
        copySuccess: "تم نسخ رقم الهاتف!",
        chatWhatsApp: "💬 محادثة على WhatsApp", browseFirst: "📦 تصفح المنتجات أولاً",
        feat1Title: "⚡ رد سريع", feat1Desc: "رد خلال ساعتين خلال ساعات العمل (GMT+8).",
        feat2Title: "📷 صور حقيقية وعينات", feat2Desc: "اطلب صور منتجات حقيقية أو فيديو أو عينات مادية في أي وقت.",
        feat3Title: "🚢 تخطيط الحاويات", feat3Desc: "أخبرنا بميزانيتك المستهدفة — نمزج الـ SKUs لأفضل تكلفة لكل وحدة.",
        feat4Title: "🌍 شحن عالمي", feat4Desc: "نشحن بحراً وجواً وبريداً سريعاً إلى أكثر من 100 دولة. EXW / FOB / CIF.",
        footerRights: "جميع الحقوق محفوظة.",
        footerDesc: "شركة مصنعة ومصدرة لمجوهرات الأزياء الفاخرة — تكامل المصنع والتجارة."
      },
      products: { title: "كتالوج المنتجات", subtitle: "تصفح مجموعتنا الكاملة من مجوهرات الأزياء. جميع المنتجات تشمل تفاصيل المادة والوزن بالإضافة إلى خيارات الألوان المتعددة.", searchPlaceholder: "ابحث عن المنتجات...", filterAll: "الكل", noProducts: "لا توجد منتجات", viewDetails: "عرض التفاصيل", inquiry: "استفسار", material: "المادة", weight: "الوزن", colors: "الألوان المتاحة" },
      detail: { back: "← العودة للمنتجات", material: "المادة", weight: "الوزن", colors: "الألوان المتاحة", description: "الوصف", inquiryBtn: "إرسال استفسار إلى ويندي", inquiryWhatsApp: "WhatsApp", inquiryWechat: "WeChat", shareColor: "حدد لوناً للعرض" },
      admin: { title: "لوحة التحكم", loginTitle: "تسجيل الدخول", password: "كلمة المرور", loginBtn: "دخول", logout: "خروج", wrongPwd: "كلمة مرور خاطئة", addProduct: "إضافة منتج جديد", editProduct: "تعديل المنتج", deleteProduct: "حذف", confirmDelete: "هل أنت متأكد من حذف هذا المنتج؟", saveBtn: "حفظ المنتج", cancelBtn: "إلغاء", productName: "اسم المنتج (EN)", productNameAr: "اسم المنتج (AR)", productNameEs: "اسم المنتج (ES)", category: "الفئة", price: "السعر (USD)", material: "المادة (EN)", materialAr: "المادة (AR)", materialEs: "المادة (ES)", weight: "الوزن (جم)", description: "الوصف (EN)", descriptionAr: "الوصف (AR)", descriptionEs: "الوصف (ES)", mainImage: "رابط الصورة الرئيسية", colors: "ألوان متنوعة", colorName: "اسم اللون (EN)", colorImage: "رابط صورة اللون", addColor: "+ إضافة لون", removeColor: "إزالة", online: "معروض", offline: "غير معروض", toggleStatus: "تبديل الحالة", saveSuccess: "تم الحفظ بنجاح!", deleteSuccess: "تم الحذف بنجاح!", productList: "قائمة المنتجات", status: "الحالة", actions: "الإجراءات", edit: "تعديل" },
      common: { loading: "جارٍ التحميل...", error: "خطأ", success: "نجاح" }
    },
    es: {
      nav: { home: "Inicio", products: "Productos", phoneChain: "Cadenas para Teléfono", bracelet: "Pulseras", necklace: "Collares", anklet: "Tobilleras", ring: "Anillos", allProducts: "Todos los Productos", contact: "Contacto", admin: "Administración", language: "Idioma" },
      home: {
        heroTitle: "Joyería de Moda Premium — Directo de Nuestra Fábrica",
        heroSubtitle: "Integración Fábrica y Comercio — Mejor Precio y Calidad desde China",
        heroCta: "Ver Productos →", heroContact: "Contactar a Wendy por WhatsApp",
        categoriesTitle: "Nuestras Categorías de Productos", categoriesDesc: "Cadenas para teléfono (nuestra línea principal) además de pulseras, collares, tobilleras y anillos — mezcla y combina para llenar contenedores perfectamente.",
        eyebrowCollections: "Colecciones", eyebrowIntegration: "Integración Fábrica y Comercio", eyebrowBest: "Más Vendidos", eyebrowContact: "Contáctanos",
        advantageTitle: "¿Por Qué Elegir Wendy Jewelry?",
        advantageSubtitle: "Integración Fábrica y Comercio — Tu Socio de Joyería de Confianza",
        adv1Title: "Precios Directos de Fábrica", adv1Desc: "Somos propietarios de nuestra planta de fabricación, eliminando intermediarios y ofreciéndote los precios más competitivos del mercado.",
        adv2Title: "Optimización Inteligente de Contenedores", adv2Desc: "Combinamos expertamente mercancías pesadas y ligeras para maximizar tanto el peso como el volumen de cada contenedor, ahorrándote hasta un 30% en costos de envío.",
        adv3Title: "Amplia Gama de Productos", adv3Desc: "Desde cadenas para teléfono, pulseras, collares, tobilleras hasta anillos — aprovisionamiento integral para todas tus necesidades de joyería.",
        adv4Title: "Soporte Personalizado y OEM", adv4Desc: "MOQ flexible, diseños personalizados, etiquetado privado — adaptamos soluciones tanto para pequeñas boutiques como para grandes marcas.",
        featuredTitle: "Productos Destacados", featuredDesc: "Favoritos seleccionados a mano — todos con múltiples opciones de color e información clara de material y peso.", viewAll: "Ver Todos los Productos →",
        heroBadgeTitle: "🚢 Maximiza Cada Contenedor", heroBadgeDesc: "Mezclamos bienes ligeros y pesados para ahorrarte hasta 30% en costos de envío.",
        shipTitle: "🚢 Carga Inteligente de Contenedores — Cómo Ahorramos Dinero",
        shipIntro: "Como negocio integrado de fábrica y comercio, entendemos el envío mejor que las empresas comerciales. Los SKUs de joyería tienen densidades muy diferentes:",
        shipL1: "Bienes ligeros: Cadenas para teléfono, pulseras, tobilleras — llenan el volumen rápido pero agregan poco peso",
        shipL2: "Mediano: Collares",
        shipL3: "Pesado por volumen: Anillos — pequeños y densos, agotan la asignación de peso rápidamente",
        shipL4: "Resultado: Combinamos categorías para que tu contenedor alcance TANTO el peso máximo COMO el volumen máximo — ¡ahorra hasta 30% en envío!",
        shipLegendLight: "Ligero: Cadena para teléfono / Pulsera", shipLegendHeavy: "Pesado: Anillo / Collar",
        shipResult: "✅ Carga equilibrada = peso máximo + volumen máximo = menor costo por unidad",
        contactTitle: "Contacta a Wendy Directamente",
        contactSubtitle: "¿Preguntas? ¿Necesitas una cotización? ¿Ayuda con la planificación de contenedores? Contacta — Wendy responde en menos de 2 horas por WeChat y WhatsApp.",
        contactPerson: "Wendy", contactRole: "Gerente Senior de Ventas · Fábrica de Joyería",
        contactPhone: "+86 19548146867", contactNote: "(WeChat / WhatsApp)",
        copySuccess: "¡Número copiado!",
        chatWhatsApp: "💬 Chatear por WhatsApp", browseFirst: "📦 Ver Productos Primero",
        feat1Title: "⚡ Respuesta Rápida", feat1Desc: "Respuesta en menos de 2 horas durante el horario comercial (GMT+8).",
        feat2Title: "📷 Fotos Reales y Muestras", feat2Desc: "Solicita fotos reales de productos, videos o muestras físicas en cualquier momento.",
        feat3Title: "🚢 Planificación de Contenedores", feat3Desc: "Dinos tu presupuesto objetivo — mezclamos SKUs para el mejor costo por unidad posible.",
        feat4Title: "🌍 Envío Global", feat4Desc: "Enviamos por mar, aire y expreso a más de 100 países. EXW / FOB / CIF.",
        footerRights: "Todos los derechos reservados.",
        footerDesc: "Fabricante y exportador de joyería de moda premium — integración de fábrica y comercio."
      },
      products: { title: "Catálogo de Productos", subtitle: "Explora nuestra colección completa de joyería de moda. Todos los productos incluyen información de material y peso, además de múltiples opciones de color.", searchPlaceholder: "Buscar productos...", filterAll: "Todos", noProducts: "No se encontraron productos", viewDetails: "Ver Detalles", inquiry: "Consultar", material: "Material", weight: "Peso", colors: "Colores Disponibles" },
      detail: { back: "← Volver a Productos", material: "Material", weight: "Peso", colors: "Colores Disponibles", description: "Descripción", inquiryBtn: "Enviar Consulta a Wendy", inquiryWhatsApp: "WhatsApp", inquiryWechat: "WeChat", shareColor: "Selecciona un color para ver" },
      admin: { title: "Panel de Administración", loginTitle: "Iniciar Sesión", password: "Contraseña", loginBtn: "Entrar", logout: "Cerrar Sesión", wrongPwd: "Contraseña incorrecta", addProduct: "Añadir Nuevo Producto", editProduct: "Editar Producto", deleteProduct: "Eliminar", confirmDelete: "¿Seguro que quieres eliminar este producto?", saveBtn: "Guardar Producto", cancelBtn: "Cancelar", productName: "Nombre del Producto (EN)", productNameAr: "Nombre del Producto (AR)", productNameEs: "Nombre del Producto (ES)", category: "Categoría", price: "Precio (USD)", material: "Material (EN)", materialAr: "Material (AR)", materialEs: "Material (ES)", weight: "Peso (g)", description: "Descripción (EN)", descriptionAr: "Descripción (AR)", descriptionEs: "Descripción (ES)", mainImage: "URL de Imagen Principal", colors: "Variantes de Color", colorName: "Nombre del Color (EN)", colorImage: "URL de Imagen del Color", addColor: "+ Añadir Color", removeColor: "Eliminar", online: "En Estante", offline: "Fuera de Estante", toggleStatus: "Cambiar Estado", saveSuccess: "¡Guardado con éxito!", deleteSuccess: "¡Eliminado con éxito!", productList: "Lista de Productos", status: "Estado", actions: "Acciones", edit: "Editar" },
      common: { loading: "Cargando...", error: "Error", success: "Éxito" }
    }
  };

  function t(key) {
    const parts = key.split('.');
    let cur = i18nDict[currentLang] || {};
    for (const p of parts) {
      if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
      else return key;
    }
    return typeof cur === 'string' ? cur : key;
  }

  function getLocalized(obj, field) {
    if (!obj) return '';
    const suf = currentLang === 'en' ? '' : currentLang.charAt(0).toUpperCase() + currentLang.slice(1);
    const key = suf ? field + suf : field;
    if (obj[key]) return obj[key];
    return obj[field] || '';
  }

  // i18n is embedded — no fetch required. loadI18n kept as no-op for compatibility.
  async function loadI18n() { /* already loaded inline */ return; }

  function getBasePath() {
    // if page is in /pages/xxx.html then base is ../
    const path = window.location.pathname;
    if (path.includes('/pages/')) return '../';
    return '';
  }

  function setLang(code) {
    const lang = LANGS.find((l) => l.code === code);
    if (!lang) return;
    currentLang = code;
    localStorage.setItem(STORAGE_KEY_LANG, code);
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', lang.dir);
    // refresh translations on page
    applyTranslations();
    // re-render page content if handler registered
    if (window.__onLangChange) window.__onLangChange();
    // update active in selectors
    document.querySelectorAll('[data-lang-code]').forEach((el) => {
      el.classList.toggle('active', el.dataset.langCode === code);
    });
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val !== key) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val !== key) el.setAttribute('placeholder', val);
    });
  }

  /* ---------------- Data store (products) ---------------- */
  function uid() {
    return 'p_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function getDefaultProducts() {
    const img = (prompt, size = 'landscape_16_9') =>
      `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;
    return [
      {
        id: uid(), active: true, category: 'phoneChain',
        name: 'Pearl & Crystal Beaded Phone Chain',
        nameAr: 'سلسلة هاتف من اللؤلؤ والكريستال المزركش',
        nameEs: 'Cadena para Teléfono con Perlas y Cristales',
        price: 2.5,
        material: 'Stainless Steel + Acrylic Beads + Pearl',
        materialAr: 'الفولاذ المقاوم للصدأ + خرز أكريليك + لؤلؤ',
        materialEs: 'Acero Inoxidable + Cuentas de Acrílico + Perla',
        weight: 15,
        description: 'Elegant beaded phone chain with pearl accents and crystal beads. Universal attachment fits all smartphones. Perfect accessory for daily use and gift.',
        descriptionAr: 'سلسلة هاتف أنيقة مزينة باللؤلؤ وخرز الكريستال. ملحق مثالي للاستخدام اليومي والهدايا.',
        descriptionEs: 'Cadena para teléfono elegante con detalles de perlas y cuentas de cristal. Accesorio perfecto para uso diario y regalo.',
        image: img('e-commerce product photo of a beautiful beaded phone chain strap with pearl, crystal and gold beads, white background, studio lighting', 'landscape_4_3'),
        colors: [
          { name: 'Rose Gold', image: img('e-commerce product photo of rose gold beaded phone chain, white background', 'landscape_4_3') },
          { name: 'Silver', image: img('e-commerce product photo of silver beaded phone chain, white background', 'landscape_4_3') },
          { name: 'Gold', image: img('e-commerce product photo of gold beaded phone chain, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'phoneChain',
        name: 'Cute Charm Phone Chain (Korean Style)',
        nameAr: 'سلسلة هاتف برموز لطيفة (أسلوب كوري)',
        nameEs: 'Cadena para Teléfono con Dijes Lindos (Estilo Coreano)',
        price: 1.8,
        material: 'Alloy + Resin Charms + Nylon Cord',
        materialAr: 'سبيكة + تعاليق راتنجية + حبل نايلون',
        materialEs: 'Alebación + Dijes de Resina + Cordón de Nailon',
        weight: 12,
        description: 'Korean style cute charm phone chain with colorful resin pendants. Lightweight and trendy. MOQ 100 pcs per design.',
        descriptionAr: 'سلسلة هاتف كورية اللون مع تعاليق ملونة. خفيفة الوزن وعصرية.',
        descriptionEs: 'Cadena para teléfono de estilo coreano con dijes coloridos. Ligera y moderna.',
        image: img('e-commerce product photo of cute korean style phone chain strap with colorful charms and beads, white background', 'landscape_4_3'),
        colors: [
          { name: 'Pink', image: img('e-commerce product photo of pink cute korean phone chain, white background', 'landscape_4_3') },
          { name: 'Purple', image: img('e-commerce product photo of purple cute korean phone chain, white background', 'landscape_4_3') },
          { name: 'Rainbow', image: img('e-commerce product photo of rainbow colorful cute korean phone chain, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'bracelet',
        name: 'Boho Multi-layer Beaded Bracelet',
        nameAr: 'سوار بوهو متعدد الطبقات',
        nameEs: 'Pulsera Boho de Múltiples Capas con Cuentas',
        price: 3.2,
        material: 'Natural Stone + Alloy + Elastic Cord',
        materialAr: 'حجر طبيعي + سبيكة + حبل مرن',
        materialEs: 'Piedra Natural + Alebación + Cordón Elástico',
        weight: 28,
        description: 'Bohemian style multi-layer bracelet with natural stones. Stackable design, comfortable fit. Perfect for beach and daily wear.',
        descriptionAr: 'سوار بوهو متعدد الطبقات مع أحجار طبيعية. تصميم قابل للتكديس.',
        descriptionEs: 'Pulsera bohemia de múltiples capas con piedras naturales. Diseño apilable.',
        image: img('e-commerce product photo of boho multi-layer beaded bracelet with natural stones, white background', 'landscape_4_3'),
        colors: [
          { name: 'Turquoise', image: img('e-commerce product photo of turquoise boho bracelet, white background', 'landscape_4_3') },
          { name: 'Earth Tone', image: img('e-commerce product photo of earth tone brown beaded boho bracelet, white background', 'landscape_4_3') },
          { name: 'Ocean Blue', image: img('e-commerce product photo of ocean blue beaded boho bracelet, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'bracelet',
        name: '18K Gold Plated Minimalist Chain Bracelet',
        nameAr: 'سوار سلسلة بسيط مطلي بالذهب عيار 18 قيراط',
        nameEs: 'Pulsera de Cadena Minimalista Chapada en Oro 18K',
        price: 4.5,
        material: 'Brass + 18K Gold Plated',
        materialAr: 'نحاس + مطلي بالذهب عيار 18 قيراط',
        materialEs: 'Latón + Chapado en Oro 18K',
        weight: 8,
        description: 'Minimalist dainty chain bracelet. 18K gold plated, tarnish-resistant. Adjustable length 16+3cm.',
        descriptionAr: 'سوار سلسلة دقيق بسيط. مطلي بالذهب عيار 18 قيراط، مقاوم للبهتان.',
        descriptionEs: 'Pulsera de cadena delicada minimalista. Chapada en oro 18K, resistente al deslustre.',
        image: img('e-commerce product photo of 18k gold plated dainty minimalist chain bracelet, white background', 'landscape_4_3'),
        colors: [
          { name: 'Gold', image: img('e-commerce product photo of gold dainty minimalist bracelet, white background', 'landscape_4_3') },
          { name: 'Silver', image: img('e-commerce product photo of silver dainty minimalist bracelet, white background', 'landscape_4_3') },
          { name: 'Rose Gold', image: img('e-commerce product photo of rose gold dainty minimalist bracelet, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'necklace',
        name: 'Butterfly Pendant Choker Necklace',
        nameAr: 'قلادة تشوكر مع قلادة فراشة',
        nameEs: 'Collar Gargantilla con Dije de Mariposa',
        price: 3.8,
        material: 'Alloy + Enamel + Chain',
        materialAr: 'سبيكة + مينا + سلسلة',
        materialEs: 'Alebación + Esmalte + Cadena',
        weight: 18,
        description: 'Cute butterfly pendant choker. Trendy design, great for women and teens. Available in multiple colors.',
        descriptionAr: 'قلادة تشوكر بقلادة فراشة لطيفة. تصميم عصري.',
        descriptionEs: 'Collar gargantilla con dije de mariposa. Diseño moderno.',
        image: img('e-commerce product photo of butterfly pendant choker necklace, white background', 'landscape_4_3'),
        colors: [
          { name: 'Blue', image: img('e-commerce product photo of blue butterfly choker necklace, white background', 'landscape_4_3') },
          { name: 'Pink', image: img('e-commerce product photo of pink butterfly choker necklace, white background', 'landscape_4_3') },
          { name: 'Purple', image: img('e-commerce product photo of purple butterfly choker necklace, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'necklace',
        name: 'Layered Coin Pendant Necklace',
        nameAr: 'قلادة طبقات بميدالية عملة',
        nameEs: 'Collar de Capas con Dije de Moneda',
        price: 5.2,
        material: 'Stainless Steel + Coin Pendant',
        materialAr: 'الفولاذ المقاوم للصدأ + ميدالية عملة',
        materialEs: 'Acero Inoxidable + Dije de Moneda',
        weight: 22,
        description: 'Multi-layered necklace with engraved coin pendant. Waterproof and hypoallergenic stainless steel.',
        descriptionAr: 'قلادة متعددة الطبقات بميدالية عملة محفورة. فولاذ مقاوم للصدأ مضاد للحساسية.',
        descriptionEs: 'Collar de múltiples capas con dije de moneda grabado. Acero inoxidable hipoalergénico.',
        image: img('e-commerce product photo of layered coin pendant necklace, white background', 'landscape_4_3'),
        colors: [
          { name: 'Gold', image: img('e-commerce product photo of gold layered coin necklace, white background', 'landscape_4_3') },
          { name: 'Silver', image: img('e-commerce product photo of silver layered coin necklace, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'anklet',
        name: 'Shell Charm Beach Anklet Set',
        nameAr: 'مجموعة خلاخيل شاطئية بقرود الصدف',
        nameEs: 'Juego de Tobilleras de Playa con Dijes de Concha',
        price: 2.6,
        material: 'Shell + Alloy + Beads',
        materialAr: 'صدفة + سبيكة + خرز',
        materialEs: 'Concha + Alebación + Cuentas',
        weight: 14,
        description: 'Beachy boho anklet set with natural shell charms. Adjustable size, perfect for summer vacation.',
        descriptionAr: 'مجموعة خلاخيل شاطئية بقرود الصدف الطبيعية. حجم قابل للتعديل.',
        descriptionEs: 'Juego de tobilleras playeras con dijes de concha natural. Tamaño ajustable.',
        image: img('e-commerce product photo of shell charm beach anklet set, white background', 'landscape_4_3'),
        colors: [
          { name: 'Natural White', image: img('e-commerce product photo of white shell anklet, white background', 'landscape_4_3') },
          { name: 'Beige', image: img('e-commerce product photo of beige shell anklet, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'anklet',
        name: 'Adjustable Cuban Link Anklet',
        nameAr: 'خلخل كوباني قابل للتعديل',
        nameEs: 'Tobillera Cubana Ajustable',
        price: 3.5,
        material: 'Stainless Steel Cuban Chain',
        materialAr: 'سلسلة كوبانية من الفولاذ المقاوم للصدأ',
        materialEs: 'Cadena Cubana de Acero Inoxidable',
        weight: 16,
        description: 'Stylish cuban link anklet. Stainless steel, waterproof and no color fade. Adjustable length.',
        descriptionAr: 'خلخل كوباني أنيق من الفولاذ المقاوم للصدأ، مقاوم للماء.',
        descriptionEs: 'Tobillera cubana elegante de acero inoxidable, resistente al agua.',
        image: img('e-commerce product photo of cuban link chain anklet, white background', 'landscape_4_3'),
        colors: [
          { name: 'Gold', image: img('e-commerce product photo of gold cuban anklet, white background', 'landscape_4_3') },
          { name: 'Silver', image: img('e-commerce product photo of silver cuban anklet, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'ring',
        name: 'Stackable Crystal Zircon Ring Set',
        nameAr: 'مجموعة خواتم زركون كريستالية قابلة للتكديس',
        nameEs: 'Juego de Anillos de Circón Cristalino Apilables',
        price: 3.9,
        material: 'Copper + Zirconia Stone',
        materialAr: 'نحاس + حجر الزركونيا',
        materialEs: 'Cobre + Piedra de Circonia',
        weight: 20,
        description: 'Luxury stackable zircon ring set (4pcs). Sparkling AAA zirconia, gold plated. Great for parties and weddings.',
        descriptionAr: 'مجموعة خواتم زركون فاخرة قابلة للتكديس (4 قطع). ماسية زركونيا AAA.',
        descriptionEs: 'Juego de anillos de circón de lujo apilables (4 piezas). Circonia AAA brillante.',
        image: img('e-commerce product photo of luxury stackable crystal zircon ring set, white background', 'landscape_4_3'),
        colors: [
          { name: 'Gold', image: img('e-commerce product photo of gold zircon ring set, white background', 'landscape_4_3') },
          { name: 'Rose Gold', image: img('e-commerce product photo of rose gold zircon ring set, white background', 'landscape_4_3') },
          { name: 'Silver', image: img('e-commerce product photo of silver zircon ring set, white background', 'landscape_4_3') }
        ]
      },
      {
        id: uid(), active: true, category: 'ring',
        name: 'Minimalist Open Adjustable Ring',
        nameAr: 'خاتم مفتوح بسيط قابل للتعديل',
        nameEs: 'Anillo Abierto Minimalista Ajustable',
        price: 1.6,
        material: '925 Sterling Silver Plated',
        materialAr: 'مطلي بالفضة الإسترلينية 925',
        materialEs: 'Chapado en Plata de Ley 925',
        weight: 3,
        description: 'Simple dainty open ring. Adjustable to all finger sizes. Perfect for everyday wear and gifting.',
        descriptionAr: 'خاتم مفتوح بسيط ودقيق. قابل للتعديل ليناسب جميع أحجام الأصابع.',
        descriptionEs: 'Anillo abierto simple y delicado. Ajustable a todos los tamaños de dedo.',
        image: img('e-commerce product photo of minimalist open adjustable silver ring, white background', 'landscape_4_3'),
        colors: [
          { name: 'Silver', image: img('e-commerce product photo of silver minimalist open ring, white background', 'landscape_4_3') },
          { name: 'Gold', image: img('e-commerce product photo of gold minimalist open ring, white background', 'landscape_4_3') }
        ]
      }
    ];
  }

  function loadProducts() {
    const raw = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (!raw) {
      const def = getDefaultProducts();
      localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(def));
      return def;
    }
    try {
      return JSON.parse(raw);
    } catch {
      const def = getDefaultProducts();
      localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(def));
      return def;
    }
  }

  function saveProducts(list) {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(list));
  }

  function getActiveProducts() {
    return loadProducts().filter((p) => p.active);
  }

  function getProductById(id) {
    return loadProducts().find((p) => p.id === id);
  }

  /* ---------------- Navigation & header rendering ---------------- */
  function renderHeader() {
    const current = (document.querySelector('[data-page]') || {}).getAttribute('data-page') || 'home';
    const base = getBasePath();
    const html = `
      <header class="site-header">
        <div class="container header-inner">
          <a href="${base}index.html" class="brand">
            <span class="brand-logo">💎</span>
            <span class="brand-name">Wendy<span class="brand-accent">Jewelry</span></span>
          </a>
          <nav class="main-nav" id="mainNav">
            <a href="${base}index.html" class="${current === 'home' ? 'active' : ''}" data-i18n="nav.home">Home</a>
            <a href="${base}pages/products.html" class="${current === 'products' ? 'active' : ''}" data-i18n="nav.products">Products</a>
            <div class="nav-dropdown">
              <a class="dd-trigger" href="javascript:;">${t('nav.phoneChain')} ▾</a>
              <div class="dd-menu">
                <a href="${base}pages/products.html?cat=phoneChain" data-i18n="nav.phoneChain">Phone Chains</a>
                <a href="${base}pages/products.html?cat=bracelet" data-i18n="nav.bracelet">Bracelets</a>
                <a href="${base}pages/products.html?cat=necklace" data-i18n="nav.necklace">Necklaces</a>
                <a href="${base}pages/products.html?cat=anklet" data-i18n="nav.anklet">Anklets</a>
                <a href="${base}pages/products.html?cat=ring" data-i18n="nav.ring">Rings</a>
              </div>
            </div>
            <a href="${base}index.html#contact" data-i18n="nav.contact">Contact Us</a>
            <a href="${base}pages/admin.html" data-i18n="nav.admin" class="admin-link">🔐 Admin</a>
          </nav>
          <div class="header-actions">
            <div class="lang-switcher" id="langSwitcher">
              <button class="lang-btn" id="langBtn" aria-label="Language">
                <span class="lang-flag">${(LANGS.find((l) => l.code === currentLang) || LANGS[0]).flag}</span>
                <span class="lang-code">${currentLang.toUpperCase()}</span>
                <span>▾</span>
              </button>
              <div class="lang-menu" id="langMenu">
                ${LANGS.map((l) => `
                  <button data-lang-code="${l.code}" class="${l.code === currentLang ? 'active' : ''}">
                    <span>${l.flag}</span>
                    <span>${l.label}</span>
                  </button>
                `).join('')}
              </div>
            </div>
            <button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>
          </div>
        </div>
      </header>
    `;
    const el = document.getElementById('siteHeader');
    if (el) {
      el.innerHTML = html;
      bindHeaderEvents();
    }
  }

  function bindHeaderEvents() {
    const btn = document.getElementById('langBtn');
    const menu = document.getElementById('langMenu');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    if (btn && menu) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
      });
      document.addEventListener('click', () => menu.classList.remove('show'));
      menu.querySelectorAll('button[data-lang-code]').forEach((b) => {
        b.addEventListener('click', () => setLang(b.dataset.langCode));
      });
    }
    if (toggle && nav) {
      toggle.addEventListener('click', () => nav.classList.toggle('open'));
    }
  }

  function renderFooter() {
    const base = getBasePath();
    const year = new Date().getFullYear();
    const html = `
      <footer class="site-footer" id="contact">
        <div class="container footer-grid">
          <div>
            <div class="brand footer-brand">
              <span class="brand-logo">💎</span>
              <span class="brand-name">Wendy<span class="brand-accent">Jewelry</span></span>
            </div>
            <p class="footer-desc" data-i18n="home.footerDesc">Premium fashion jewelry manufacturer & exporter — factory & trading integration.</p>
          </div>
          <div>
            <h4 data-i18n="nav.products">Products</h4>
            <ul class="footer-links">
              <li><a href="${base}pages/products.html?cat=phoneChain" data-i18n="nav.phoneChain">Phone Chains</a></li>
              <li><a href="${base}pages/products.html?cat=bracelet" data-i18n="nav.bracelet">Bracelets</a></li>
              <li><a href="${base}pages/products.html?cat=necklace" data-i18n="nav.necklace">Necklaces</a></li>
              <li><a href="${base}pages/products.html?cat=anklet" data-i18n="nav.anklet">Anklets</a></li>
              <li><a href="${base}pages/products.html?cat=ring" data-i18n="nav.ring">Rings</a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="home.contactTitle">Get In Touch</h4>
            <div class="contact-card">
              <div class="contact-row"><strong data-i18n="home.contactPerson">Wendy</strong></div>
              <div class="contact-row">
                <span>📞</span>
                <a href="tel:${CONTACT.phoneClean}" id="footerPhone">${CONTACT.phone}</a>
                <button class="copy-btn" data-copy="${CONTACT.phone}" aria-label="Copy">📋</button>
              </div>
              <div class="contact-row light" data-i18n="home.contactNote">(WeChat / WhatsApp)</div>
              <div class="contact-btns">
                <a class="btn-small wa" href="https://wa.me/${CONTACT.phoneClean}" target="_blank" rel="noopener">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          © ${year} Wendy Jewelry. <span data-i18n="home.footerRights">All rights reserved.</span>
        </div>
      </footer>
    `;
    const el = document.getElementById('siteFooter');
    if (el) {
      el.innerHTML = html;
      bindCopyEvents();
    }
  }

  function bindCopyEvents() {
    document.querySelectorAll('[data-copy]').forEach((b) => {
      b.addEventListener('click', () => {
        const text = b.getAttribute('data-copy');
        navigator.clipboard && navigator.clipboard.writeText(text).catch(() => {});
        const original = b.innerHTML;
        b.innerHTML = '✅';
        toast(t('home.copySuccess'));
        setTimeout(() => (b.innerHTML = original), 1500);
      });
    });
  }

  function toast(msg) {
    let t = document.getElementById('wj-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'wj-toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('show'), 2000);
  }

  function productCardHTML(p) {
    const base = getBasePath();
    const catLabel = t('nav.' + p.category);
    return `
      <div class="product-card" data-id="${p.id}">
        <a href="${base}pages/product.html?id=${p.id}" class="pc-img">
          <img src="${p.image}" alt="${getLocalized(p, 'name')}" loading="lazy"/>
          <span class="pc-cat">${catLabel}</span>
        </a>
        <div class="pc-body">
          <h3 class="pc-title">${getLocalized(p, 'name')}</h3>
          <div class="pc-meta">
            <span title="${t('products.material')}">🧪 ${getLocalized(p, 'material')}</span>
            <span title="${t('products.weight')}">⚖️ ${p.weight}g</span>
          </div>
          <div class="pc-colors">
            ${(p.colors || []).slice(0, 4).map((c) => `
              <span class="color-dot" title="${c.name}" style="background-image:url('${c.image}')"></span>
            `).join('')}
            ${(p.colors || []).length > 4 ? `<span class="color-dot-more">+${p.colors.length - 4}</span>` : ''}
          </div>
          <div class="pc-actions">
            <a href="${base}pages/product.html?id=${p.id}" class="btn-outline" data-i18n="products.viewDetails">View Details</a>
            <a href="https://wa.me/${CONTACT.phoneClean}?text=${encodeURIComponent('Hi Wendy, I want to inquire about: ' + p.name)}" target="_blank" rel="noopener" class="btn-small wa" data-i18n="products.inquiry">Inquiry</a>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------- Admin helpers ---------------- */
  function adminLoggedIn() {
    return sessionStorage.getItem('wj_admin') === '1';
  }
  function adminLogin(pwd) { return pwd === ADMIN_PASSWORD; }
  function adminLogout() { sessionStorage.removeItem('wj_admin'); }

  /* ---------------- Init ---------------- */
  async function initApp() {
    currentLang = localStorage.getItem(STORAGE_KEY_LANG) || 'en';
    await loadI18n();
    const lang = LANGS.find((l) => l.code === currentLang) || LANGS[0];
    document.documentElement.setAttribute('lang', lang.code);
    document.documentElement.setAttribute('dir', lang.dir);

    renderHeader();
    renderFooter();
    applyTranslations();

    if (window.__pageInit) window.__pageInit();
  }

  /* Export */
  window.WJ = {
    CONTACT, CATEGORIES, LANGS, ADMIN_PASSWORD,
    t, setLang, getLocalized,
    loadProducts, saveProducts, getActiveProducts, getProductById, uid,
    renderHeader, renderFooter, applyTranslations,
    productCardHTML, toast, getBasePath,
    adminLoggedIn, adminLogin, adminLogout
  };

  document.addEventListener('DOMContentLoaded', initApp);
})();
