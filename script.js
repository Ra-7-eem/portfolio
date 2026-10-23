/* =====================================================
   JAVASCRIPT — PORTFOLIO INTERACTIONS
   Raheem Darweesh Portfolio
   Features: Matrix BG | Typed Text | Language Toggle (AR/EN) | Theme Toggle (Dark/Light)
   ===================================================== */

'use strict';



// =====================================================
// TRANSLATIONS OBJECT
// =====================================================
const TRANSLATIONS = {
  ar: {
    page_title: "رحيم درويش | مهندس برمجيات",
    meta_desc: "رحيم درويش — مهندس برمجيات متخصص في .NET وتطوير الويب. بيصمم ويبني أنظمة برمجية قوية، APIs متكاملة، وحلول تقنية احترافية. متاح لمشاريع العمل الحر.",
    nav_about: "عني",
    nav_services: "خدماتي",
    nav_portfolio: "أعمالي",
    nav_testimonials: "آراء العملاء",
    nav_contact: "تواصل معي",
    loader_status: "جارِ التهيئة...",
    hero_greeting: "مرحباً،  أنا",
    hero_desc: `كمهندس برمجيات، أصمم وأبني <span class="highlight">مواقع ويب وصفحات هبوط</span> احترافية، وأنظمة <span class="highlight">Backend قوية</span> وAPIs متكاملة تحوّل فكرتك لمنتج حقيقي وأنشره للعالم.`,
    hero_btn_work: "شوف أعمالي",
    hero_btn_hire: "وظفني",
    stat_projects: "مشروع منجز",
    stat_satisfaction: "رضا العملاء",
    stat_clients: "عميل سعيد",
    about_title: "عني",
    about_title2: "أنا",
    about_subtitle: "المهندس اللي وراء الكود",
    about_p1: `أنا <span class="highlight">مهندس برمجيات</span> متخصص في تطوير .NET والويب من دمياط، مصر. تخرجت في علوم الكمبيوتر وطوّرت مهاراتي من خلال <span class="highlight">مبادرة بناة مصر الرقمية (DEPI)</span>، وأعمل بشكل مستقل على مختلف منصات العمل الحر، خصوصاً منصة <span class="highlight">خمسات</span>.`,
    about_p2: `كمهندس برمجيات، أؤمن إن الحل الصح مش بس إنك تخلي الكود يشتغل — ده إنك تصمم نظام <span class="highlight">نظيف وقابل للصيانة والتطوير</span> يكبر مع أعمالك. بطبّق مبادئ هندسة البرمجيات (OOP وSOLID) وأنماط المعمارية الحديثة في كل مشروع.`,
    about_p3: `سواء كنت محتاج <span class="highlight">موقع ويب</span> أو <span class="highlight">صفحة هبوط</span> أو API أو تطبيق Backend مخصص أو <span class="highlight">أتمتة المهام والعمليات</span>، وكمان بقدر أنشره على الإنترنت وأضبط إعدادات <span class="highlight">الاستضافة والدومين</span> — أنا هنا أحوّل رؤيتك لواقع بأعلى معايير هندسة البرمجيات.`,
    about_quote: "أنا لا أقدم فقط صفحة مقصودة، بل أقدم أيضًا تجربة رقمية تجعل المشروع الخاص بك لا يُنسى.",
    about_cv: "تحميل السيرة الذاتية",
    services_title: "خدماتي",
    services_title2: "المتاحة",
    services_subtitle: "إيه اللي أقدر أبنيه لك",
    most_popular: "الأكثر طلباً",
    s1_title: "تطوير الـ Back-End",
    s1_desc: "بناء تطبيقات Server-Side قوية ومنطق أعمال احترافي باستخدام <strong>ASP.NET Core</strong>. من معمارية قواعد البيانات لـ APIs نظيفة، بتكّل كل حاجة تحت الغطا.",
    s1_f1: "تطبيقات ASP.NET Core", s1_f2: "معمارية MVC", s1_f3: "طبقات منطق الأعمال والبيانات", s1_f4: "تصميم وتحسين قواعد البيانات",
    s2_title: "تطوير RESTful APIs",
    s2_desc: "تصميم وبناء <strong>REST APIs</strong> آمنة وقابلة للتطوير لتشغيل تطبيقاتك. مع JWT Authentication ومعالجة أخطاء صحيحة.",
    s2_f1: "تصميم وتنفيذ REST API", s2_f2: "أنظمة JWT والمصادقة", s2_f3: "اختبار API بـ Postman", s2_f4: "تكامل مع APIs خارجية",
    s3_title: "مواقع ويب وصفحات هبوط",
    s3_desc: "تصميم وبناء <strong>مواقع ويب احترافية</strong> وصفحات هبوط جذابة وسريعة تحوّل الزوار لعملاء. متجاوبة مع كل الشاشات وسريعة التحميل.",
    s3_f1: "مواقع ويب متجاوبة (Responsive)", s3_f2: "صفحات هبوط محترفة وجذابة", s3_f3: "تصميم UI عصري بإحساس بصري عالي", s3_f4: "دمج Backend وقاعدة بيانات لو احتيجت",
    s4_title: "تصميم وإدارة قواعد البيانات",
    s4_desc: "تصميم schemas قواعد بيانات فعّالة وكتابة queries محسّنة بـ <strong>SQL Server</strong> وـEntity Framework.",
    s4_f1: "ERD وتصميم قاعدة البيانات", s4_f2: "إدارة SQL Server", s4_f3: "Entity Framework Core (LINQ)", s4_f4: "تحسين الاستعلامات",
    s5_title: "الأتمتة والسكريبتات",
    s5_desc: "بناء سكريبتات وأدوات أتمتة باستخدام <strong>Python</strong> أو <strong>Google Apps Script</strong> لتوفير وقتك.",
    s5_f1: "سكريبتات Python والأتمتة", s5_f2: "حلول Google Apps Script", s5_f3: "أدوات معالجة البيانات", s5_f4: "أتمتة سير العمل المخصصة",
    s6_title: "النشر وإعدادات الاستضافة",
    s6_desc: "نشر مشروعك على الإنترنت وإعداد بيئة الاستضافة بشكل احترافي. ربط الدومين، ضبط <strong>SSL</strong> والأمان، وتحسين الأداء ليتوصل إليك عملاؤك.",
    s6_f1: "Deploy على Hostinger / cPanel / VPS", s6_f2: "ربط الدومين وإعدادات DNS", s6_f3: "ضبط SSL وHTTPS والأمان", s6_f4: "تحسين سرعة الموقع (Performance)",
    s7_title: "تخصيص المتاجر الإلكترونية",
    s7_desc: "تطوير وتحسين مظهر متجرك على منصات <strong>سلة، زد، Shopify، WooCommerce، و ExpandCart</strong>. تصميم واجهات احترافية وتعديلات برمجية مخصصة لزيادة المبيعات وتحسين تجربة العميل.",
    s7_f1: "تعديلات برمجية مخصصة (HTML, CSS)", s7_f2: "تصميم واجهات جذابة وعصرية", s7_f3: "تحسين سرعة المتجر وتجربة الشراء", s7_f4: "ربط ودمج الإضافات الخارجية",
    s1_badge: "Back-End", s2_badge: "APIs", s4_badge: "قواعد بيانات", s5_badge: "أتمتة (Automation)", s6_badge: "استضافة ونشر", s7_badge: "متاجر إلكترونية",
    learn_more: "اعرف المزيد",
    slider_prev: "السابق",
    slider_next: "التالي",
    portfolio_title: "أعمال",
    portfolio_title2: "مميزة",
    portfolio_subtitle: "مشاريع حقيقية تم تسليمها لعملاء حقيقيين بأعلى معايير الجودة والأداء",
    filter_all: "الكل",
    filter_landing: "مواقع وصفحات هبوط",
    filter_webapps: "تطبيقات ويب ولوحات تحكم",
    filter_ecommerce: "متاجر وكتالوجات",
    filter_corporate: "شركات ومؤسسات",
    view_live: "معاينة حية ↗",
    visit_project: "زيارة الموقع ↗",
    visit_gym: "موقع الجيم ↗",
    visit_dashboard: "لوحة التحكم ↗",
    visit_version1: "الصفحة 1 ↗",
    visit_version2: "الصفحة 2 ↗",
    view_all_projects_btn: "عرض جميع الأعمال",
    projects_page_title1: "أعمال تروي",
    projects_page_title2: "قصص التميّز والنجاح",
    projects_page_subtitle: "جولة في أبرز المشاريع والحلول الرقمية التي بنيتها بأعلى معايير هندسة البرمجيات لتحقيق نتائج استثنائية لعملائي.",
    back_to_home_text: "العودة للرئيسية",
    client_project: "مشروع معتمد ✓",
    fullstack_badge: "مشروع متكامل (Full Stack)",
    review_verified: "تقييم موثق على خمسات ✓",
    view_khamsat_review: "عرض التقييم في خمسات",
    tab_video: "استعراض الفيديو ▶",
    tab_screens: "صور الواجهات",
    open_in_drive: "فتح الفيديو على Google Drive ↗",
    usp1: "تجربة رقمية لا تُنسى",
    usp2: "كود نظيف وهندسة متقنة",
    usp3: "تسليم في الموعد دائماً",
    usp4: "تصميم يعكس هوية مشروعك",
    usp5: "دعم وتواصل مستمر",
    usp6: "Full Stack من الفكرة للإطلاق",
    p_arcade_title: "منصة ARCADE | متجر إلكترونيات ولوحة تحكم شاملة",
    p_arcade_badge: "متجر إلكتروني + لوحة إدارة (Full Stack)",
    p_arcade_desc: "منصة تجارة إلكترونية متكاملة لبيع الإلكترونيات وأجهزة الكمبيوتر مع لوحة تحكم ERP شاملة لإدارة المنتجات، المخزون، الطلبات، والعملاء، مبنية بهندسة برمجية متطورة (Angular 17 + ASP.NET Core 9 + SQL Server).",
    p_arcade_cta: "معاينة الموقع ↗",
    arcade_modal_title: "منصة ARCADE | متجر إلكترونيات ولوحة تحكم متكاملة",
    arcade_modal_tag: "Full Stack Enterprise",
    p_adeem_title: "متجر أديم لايت | Adeem Light",
    p_adeem_badge: "متجر إلكتروني وتوزيع إضاءة",
    p_adeem_desc: "متجر إلكتروني متخصص في بيع مواد الإضاءة الداخلية والخارجية، مع تقديم خدمة هندسية احترافية لتصميم وتوزيع الإضاءة وفق أعلى المعايير الفنية وتجربة شراء سلسة وسريعة.",
    p_alghzal_title: "شركة الغزال للمنتجات الغذائية",
    p_alghzal_badge: "شركة ومصنع غذائي",
    p_alghzal_desc: "موقع تعريفي وتسويقي متكامل لشركة فلسطينية رائدة في تصنيع وتسويق المنتجات الغذائية عالية الجودة، يبرز خطوط الإنتاج والشهادات والقدرات التوزيعية بهوية بصرية مميزة.",
    p_fahsmabani_title: "منصة فحص وتقييم المباني",
    p_fahsmabani_badge: "فحص واستشارات هندسية",
    p_fahsmabani_desc: "صفحة هبوط تسويقية متقدمة لمهندس فحص منشآت معتمد، مزودة بأحدث نماذج الحجز وعرض التقنيات والأجهزة الحديثة لضمان سلامة المباني والاستثمار العقاري.",
    p_powerfitness_title: "باور فيتنس جيم + لوحة تحكم الأدمن",
    p_powerfitness_badge: "تطبيق ويب + لوحة تحكم",
    p_powerfitness_desc: "منصة إلكترونية متكاملة لتسجيل عضويات الجيم واختيار الباقات، مع لوحة تحكم أدمن تفاعلية وشاملة لإدارة المشتركين والمدربين والتقارير المالية بكفاءة وسلاسة.",
    p_mzcreative_title: "وكالة MZ Creative للتصميم الداخلي و3D",
    p_mzcreative_badge: "وكالة تصميم داخلي 3D",
    p_mzcreative_desc: "موقع إلكتروني عصري وفخم لوكالة هندسة داخلية متخصصة في التصميم المعماري ثلاثي الأبعاد وتخطيط المساحات الحديثة، يتميز بمعرض أعمال سينمائي وتجربة تصفح غامرة.",
    p_3dsmax_title: "دورة التصميم المعماري 3ds Max & V-Ray",
    p_3dsmax_badge: "صفحة هبوط دورة تدريبية",
    p_3dsmax_desc: "صفحة هبوط تسويقية مخصصة للتسجيل في دورة حضورية لتعليم التصميم المعماري ثلاثي الأبعاد والـ Rendering بـ 3ds Max و V-Ray، مصممة لرفع معدل التحويل وسرعة التسجيل.",
    p_tamayouz_title: "جائزة التميز في التدريب والموارد البشرية",
    p_tamayouz_badge: "منصة جوائز وتكريم",
    p_tamayouz_desc: "بوابة رقمية رسمية لجائزة التميز في التدريب وتطوير الموارد البشرية، تتيح للمؤسسات والمدربين الاطلاع على معايير الجائزة، الشروط، وتقديم ملفات الترشح إلكترونياً.",
    p_bilal_title: "بلال مصلح للمطابخ والديكور الخشبي",
    p_bilal_badge: "مطابخ وديكورات خشبية",
    p_bilal_desc: "موقع تعريفي احترافي يستعرض أعمال تصنيع وتركيب المطابخ والديكورات الخشبية الراقية، مع كتالوج مشاريع مصورة ونماذج تفاعلية لحساب القياسات والتواصل الفوري.",
    p_juman_title: "جمان لتصميم وتصنيع المطابخ والأثاث",
    p_juman_badge: "أثاث ومطابخ عصرية",
    p_juman_desc: "موقع إلكتروني يعكس هوية شركة جمان في تصميم وتنفيذ الأثاث الداخلي والمطابخ العصرية بأعلى جودة وخامات مستوردة، مدمج به معرض صور فائق الجودة وقنوات طلب مباشرة.",
    p_drasma_title: "عيادة د. أسماء لتجميل وزراعة الأسنان",
    p_drasma_badge: "عيادة طب وتجميل أسنان",
    p_drasma_desc: "صفحة هبوط طبية فاخرة لطبيبة أسنان متخصصة في زراعة الأسنان وتجميل الوجه اللاجراحي، تشمل استعراض حالات العلاج، آراء المراجعين، وحجز مواعيد فوري بنسختين متطورتين.",
    p_catalog_title: "كتالوج المنتجات الذكي + سلة ولوحة تحكم",
    p_catalog_badge: "كتالوج وسلة + لوحة تحكم",
    p_catalog_desc: "منصة تجارة إلكترونية سريعة تتيح تصفح المنتجات وإضافتها للسلة وإرسال الطلبات عبر الواتساب، مع لوحة تحكم أدمن كاملة لإضافة وتعديل المنتجات والأسعار وإدارة المخزون.",
    p_opis_title: "مدارس رواد المدارات العالمية والأهلية",
    p_opis_badge: "صرح تعليمي ودولي",
    p_opis_desc: "بوابة تعريفية شاملة لمؤسسة تعليمية دولية كبرى، تستعرض البرامج الأكاديمية والمراحل الدراسية والأنشطة والاعتمادات الدولية مع نموذج تسجيل وقبول إلكتروني سلس.",
    p_alkhebrat_title: "مكتب الخبرات المتعددة | استشارات المطاعم",
    p_alkhebrat_badge: "استشارات مالية وتشغيلية",
    p_alkhebrat_desc: "صفحة هبوط تسويقية لمستشار مالي وتشغيلي متخصص في قطاع المطاعم والمقاهي، تركز على كشف الهدر وهيكلة التكاليف وبناء خطط مالية دقيقة تضاعف أرباح المستثمرين.",
    test_title: "آراء",
    test_title2: "العملاء",
    test_subtitle: "تقييمات حقيقية من مشاريع حقيقية",
    contact_title: "هيا نشتغل",
    contact_title2: "مع بعض",
    contact_subtitle: "عندك مشروع في بالك؟ هيا نبني حاجة عظيمة.",
    form_name: "الاسم",
    form_subject: "الخدمة المطلوبة",
    form_select_placeholder: "اختر نوع الخدمة...",
    form_opt1: "تطوير Back-End (.NET)", form_opt2: "تطوير RESTful APIs",
    form_opt3: "مواقع ويب وصفحات هبوط", form_opt4: "تصميم وإدارة قواعد البيانات",
    form_opt5: "أتمتة وسكريبتات (Python/GAS)", form_opt6: "النشر وإعدادات الاستضافة",
    form_opt7: "تخصيص المتاجر الإلكترونية", form_opt8: "استشارة أو مشروع آخر",
    form_message: "تفاصيل المشروع (اختياري)",
    form_send: "إرسال عبر واتساب",
    form_placeholder_name: "اكتب اسمك هنا...",
    form_placeholder_msg: "اكتب أي تفاصيل إضافية عن مشروعك (اختياري)...",
    form_sending: "جاري التحويل للواتساب...",
    footer_copy: "Raheem Darweesh <span class=\"copyright-symbol\">&copy;</span> 2025",
    footer_available: "متاح لمشاريع العمل الحر",
    typed_phrases: ['مهندس برمجيات', 'بناء مواقع ويب احترافية وسريعة', 'تصميم صفحات هبوط تضاعف مبيعاتك', 'تطوير REST APIs قوية وآمنة', 'Full-Stack متخصص في تقنيات NET.', 'شريكك التقني لمشروعك القادم']
  },

  en: {
    page_title: "Raheem Darweesh | Software Engineer",
    meta_desc: "Raheem Darweesh — Software Engineer specializing in .NET and web development. Designing and building scalable systems, RESTful APIs, and professional software solutions. Available for freelance projects.",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact Me",
    loader_status: "Initializing...",
    hero_greeting: "Hello, World! I'm",
    hero_desc: `As a software engineer, I design and build <span class="highlight">professional websites &amp; landing pages</span>, scalable <span class="highlight">REST APIs</span>, and robust backend systems — then deploy them with full <span class="highlight">hosting &amp; domain configuration</span>.`,
    hero_btn_work: "View My Work",
    hero_btn_hire: "Hire Me",
    stat_projects: "Projects Done",
    stat_satisfaction: "Client Satisfaction",
    stat_clients: "Happy Clients",
    about_title: "About",
    about_title2: "Me",
    about_subtitle: "The engineer behind the code",
    about_p1: `I'm a <span class="highlight">Software Engineer</span> specializing in .NET and full-stack web development from Damietta, Egypt. I hold a degree in Computer Science and further developed my skills through the <span class="highlight">Digital Egypt Pioneers Initiative (DEPI)</span>, actively working as a top-rated freelancer across digital platforms, especially <span class="highlight">Khamsat</span>.`,
    about_p2: `As a software engineer, I believe great software is not just about making things work — it's about engineering <span class="highlight">clean, maintainable, and scalable systems</span> that grow with your business. I apply software engineering principles (OOP, SOLID) and modern architecture patterns in every project.`,
    about_p3: `Whether you need a <span class="highlight">professional website</span>, a high-converting <span class="highlight">landing page</span>, a custom REST API, <span class="highlight">task &amp; workflow automation</span>, or end-to-end deployment with hosting and domain setup — I deliver it all with software engineering standards.`,
    about_quote: "I don't just deliver a landing page — I deliver a digital experience that makes your project truly unforgettable.",
    about_cv: "Download CV",
    services_title: "My",
    services_title2: "Services",
    services_subtitle: "What I can build for you",
    most_popular: "Most Popular",
    s1_title: "Back-End Development",
    s1_desc: "Building powerful server-side applications and business logic using <strong>ASP.NET Core</strong>. From database architecture to clean APIs, I handle everything under the hood.",
    s1_f1: "ASP.NET Core Web Apps", s1_f2: "MVC Architecture", s1_f3: "Business Logic & Data Layers", s1_f4: "Database Design & Optimization",
    s2_title: "RESTful API Development",
    s2_desc: "Designing and building scalable, secure, and well-documented <strong>REST APIs</strong> that power your web and mobile applications. With JWT authentication and proper error handling.",
    s2_f1: "REST API Design & Implementation", s2_f2: "JWT & Authentication Systems", s2_f3: "API Testing with Postman", s2_f4: "Third-party API Integration",
    s3_title: "Websites & Landing Pages",
    s3_desc: "Designing and building <strong>professional websites</strong> and high-converting landing pages that look stunning and load fast. Fully responsive across all devices.",
    s3_f1: "Responsive Websites (All Devices)", s3_f2: "Professional Landing Pages", s3_f3: "Modern UI Design & Visual Feel", s3_f4: "Backend & Database Integration if Needed",
    s4_title: "Database Design & Management",
    s4_desc: "Designing efficient, normalized database schemas and writing optimized queries using <strong>SQL Server</strong> and Entity Framework.",
    s4_f1: "ERD & Database Design", s4_f2: "SQL Server Management", s4_f3: "Entity Framework Core (LINQ)", s4_f4: "Query Optimization",
    s5_title: "Automation & Scripting",
    s5_desc: "Building custom automation scripts and tools using <strong>Python</strong> or <strong>Google Apps Script</strong> to save you time and automate repetitive tasks.",
    s5_f1: "Python Scripting & Automation", s5_f2: "Google Apps Script Solutions", s5_f3: "Data Processing Tools", s5_f4: "Custom Workflow Automation",
    s6_title: "Deployment & Hosting Setup",
    s6_desc: "Taking your project live with professional hosting configuration. Domain connection, <strong>SSL</strong> security, DNS setup, and performance optimization so your clients reach you fast.",
    s6_f1: "Deploy on Hostinger / cPanel / VPS", s6_f2: "Domain Connection & DNS Configuration", s6_f3: "SSL, HTTPS & Security Setup", s6_f4: "Website Performance Optimization",
    s7_title: "E-Commerce Customization",
    s7_desc: "Enhancing your store on platforms like <strong>Salla, Zid, Shopify, WooCommerce, and ExpandCart</strong>. Custom UI designs and code tweaks to boost sales and user experience.",
    s7_f1: "Custom HTML, CSS modifications", s7_f2: "Professional UI/UX store design", s7_f3: "Shopping experience optimization", s7_f4: "Third-party tools integration",
    s1_badge: "Back-End", s2_badge: "APIs", s4_badge: "Database", s5_badge: "Automation", s6_badge: "Deploy & Hosting", s7_badge: "E-Commerce",
    learn_more: "Learn More",
    slider_prev: "Prev",
    slider_next: "Next",
    portfolio_title: "Featured",
    portfolio_title2: "Projects",
    portfolio_subtitle: "Real-world projects delivered for actual clients with peak performance & standards",
    filter_all: "All",
    filter_landing: "Websites & Landing",
    filter_webapps: "Web Apps & Dashboards",
    filter_ecommerce: "E-Commerce & Catalogs",
    filter_corporate: "Corporate & Services",
    view_live: "Live Demo ↗",
    visit_project: "Visit Project ↗",
    visit_gym: "Gym Website ↗",
    visit_dashboard: "Admin Panel ↗",
    visit_version1: "Page 1 ↗",
    visit_version2: "Page 2 ↗",
    view_all_projects_btn: "View All Projects",
    projects_page_title1: "Projects That Tell",
    projects_page_title2: "Stories of Excellence & Success",
    projects_page_subtitle: "A curated showcase of high-impact digital solutions and platforms engineered to deliver exceptional results for my clients.",
    back_to_home_text: "Back to Home",
    client_project: "Client Project ✓",
    fullstack_badge: "Full Stack Project",
    review_verified: "Verified Khamsat Review ✓",
    view_khamsat_review: "View Review on Khamsat",
    tab_video: "Video Walkthrough ▶",
    tab_screens: "UI Screenshots",
    open_in_drive: "Open Video on Google Drive ↗",
    usp1: "Unforgettable Digital Experience",
    usp2: "Clean Code & Solid Engineering",
    usp3: "Always Delivered On Time",
    usp4: "Design That Reflects Your Brand",
    usp5: "Continuous Support & Communication",
    usp6: "Full Stack — Idea to Launch",
    p_arcade_title: "ARCADE Platform | Electronics Store & Complete Admin ERP",
    p_arcade_badge: "E-Commerce + Admin ERP (Full Stack)",
    p_arcade_desc: "A full-stack e-commerce & administrative management platform for electronics, featuring live sales metrics, low-stock warnings, order lifecycle tracking, and JWT-secured role authentication (Angular 17 + ASP.NET Core 9 + SQL Server).",
    p_arcade_cta: "Preview Website ↗",
    arcade_modal_title: "ARCADE Platform | Electronics Store & Admin ERP",
    arcade_modal_tag: "Full Stack Enterprise",
    p_adeem_title: "Adeem Light | Lighting Store & Design",
    p_adeem_badge: "E-Commerce & Lighting Design",
    p_adeem_desc: "Specialized e-commerce store for indoor and outdoor lighting supplies, featuring professional lighting design & distribution services and a high-converting shopping experience.",
    p_alghzal_title: "Al Ghzal Food Products Co.",
    p_alghzal_badge: "Food Manufacturing & Brand",
    p_alghzal_desc: "Comprehensive corporate and marketing website for a leading Palestinian food manufacturing company, showcasing product lines, quality standards, and distribution network.",
    p_fahsmabani_title: "Fahs Mabani | Building Inspection",
    p_fahsmabani_badge: "Engineering & Inspection",
    p_fahsmabani_desc: "High-converting landing page for certified building inspection services, equipped with modern booking flows and inspection equipment breakdown for property buyers.",
    p_powerfitness_title: "Power Fitness Gym & Admin Dashboard",
    p_powerfitness_badge: "Web App & Admin Dashboard",
    p_powerfitness_desc: "Full-featured membership registration platform for fitness gyms, bundled with an interactive admin dashboard to manage members, trainers, plans, and subscription analytics.",
    p_mzcreative_title: "MZ Creative | 3D & Interior Design",
    p_mzcreative_badge: "3D & Interior Agency",
    p_mzcreative_desc: "Sleek, luxurious portfolio website for an interior architecture and 3D visualization agency, featuring an immersive project gallery and interactive architectural showcases.",
    p_3dsmax_title: "3ds Max & V-Ray Architectural Course",
    p_3dsmax_badge: "Training Course Landing Page",
    p_3dsmax_desc: "High-conversion landing page designed for an in-person 3D architectural visualization course with 3ds Max and V-Ray, engineered for fast registrations and lead capture.",
    p_tamayouz_title: "Tamayouz HR & Training Excellence Award",
    p_tamayouz_badge: "Award & Recognition Platform",
    p_tamayouz_desc: "Official digital portal for the HR & Training Excellence Award, allowing institutions and professionals to explore criteria, evaluation stages, and submit candidacies online.",
    p_bilal_title: "Bilal Musleh | Custom Kitchens & Wood Decor",
    p_bilal_badge: "Custom Kitchens & Woodwork",
    p_bilal_desc: "Showcase portfolio for bespoke luxury kitchens and interior woodwork, featuring a filtered project gallery, materials catalog, and streamlined inquiry funnels.",
    p_juman_title: "Juman | Kitchens & Modern Furniture",
    p_juman_badge: "Modern Furniture & Kitchens",
    p_juman_desc: "Elegant corporate website representing Juman's modern furniture and custom kitchen manufacturing, integrated with high-res galleries and instant consultation ordering.",
    p_drasma_title: "Dr. Asma Clinic | Dental & Facial Aesthetics",
    p_drasma_badge: "Medical & Aesthetic Clinic",
    p_drasma_desc: "Luxury medical landing page for a specialized dental implant and facial aesthetic clinic, featuring treatment cases, patient testimonials, and dual custom layouts.",
    p_catalog_title: "Smart Product Catalog & Order System",
    p_catalog_badge: "Catalog, Cart & Admin Panel",
    p_catalog_desc: "Dynamic e-commerce catalog allowing customers to browse products, manage a persistent shopping cart, and submit orders, complete with an admin panel for full inventory management.",
    p_opis_title: "OPIS | Pioneers International Schools",
    p_opis_badge: "International Education Platform",
    p_opis_desc: "Comprehensive educational portal for a premier international school, presenting academic curricula, accreditations, campus facilities, and online admission registration.",
    p_alkhebrat_title: "Alkhebrat | Restaurant Financial & Ops Advisory",
    p_alkhebrat_badge: "Financial & Operations Consulting",
    p_alkhebrat_desc: "High-impact advisory landing page for restaurant and café financial consultancy, emphasizing waste elimination, cost restructuring, and profit optimization frameworks.",
    test_title: "What Clients",
    test_title2: "Say",
    test_subtitle: "Real feedback from real projects",
    contact_title: "Let's Work",
    contact_title2: "Together",
    contact_subtitle: "Have a project in mind? Let's build something great.",
    form_name: "Name",
    form_subject: "Requested Service",
    form_select_placeholder: "Select a service...",
    form_opt1: "Back-End Development (.NET)", form_opt2: "RESTful API Development",
    form_opt3: "Websites & Landing Pages", form_opt4: "Database Design & Management",
    form_opt5: "Automation & Scripting (Python/GAS)", form_opt6: "Deployment & Hosting Setup",
    form_opt7: "E-Commerce Customization", form_opt8: "Consultation / Other Project",
    form_message: "Project Details (Optional)",
    form_send: "Send via WhatsApp",
    form_placeholder_name: "Enter your name...",
    form_placeholder_msg: "Tell me about your project (optional)...",
    form_sending: "Opening WhatsApp...",
    footer_copy: "Raheem Darweesh <span class=\"copyright-symbol\">&copy;</span> 2025",
    footer_available: "Available for freelance opportunities",
    typed_phrases: ['Software Engineer', 'Building Fast, Professional & Modern Websites', 'High-Converting Landing Pages', 'Robust & Secure REST APIs', '.NET Full-Stack Developer', 'Your Tech Partner for Next Project']
  }
};

// =====================================================
// APP STATE
// =====================================================
let currentLang = 'en';
let typedPhraseIndex = 0;
let typedCharIndex = 0;
let typedDeleting = false;
let typedTimer = null;

// =====================================================
// 1. MATRIX CANVAS BACKGROUND
// =====================================================
(function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|;:?.NET C# SQL API';
  const charArr = chars.split('');
  let columns, drops;
  const fontSize = 14;
  let lastWidth = 0;
  let lastHeight = 0;

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Prevent resize triggers from mobile address bar toggle (only height changes slightly)
    if (width === lastWidth && Math.abs(height - lastHeight) < 120) {
      return;
    }

    lastWidth = width;
    lastHeight = height;

    canvas.width = width;
    canvas.height = height;
    columns = Math.floor(width / fontSize);

    // Resize drops array while keeping current drops positions to prevent resets
    if (!drops) {
      drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * (height / fontSize)));
    } else {
      const oldDrops = [...drops];
      drops = Array(columns).fill(1);
      for (let i = 0; i < Math.min(columns, oldDrops.length); i++) {
        drops[i] = oldDrops[i];
      }
      // If columns increased, randomize new drops start position so they don't fall in a line
      for (let i = oldDrops.length; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * (height / fontSize));
      }
    }
  }

  function draw() {
    const style = getComputedStyle(document.body);
    ctx.fillStyle = style.getPropertyValue('--matrix-bg').trim() || 'rgba(10,14,26,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = style.getPropertyValue('--matrix-color').trim() || '#00ff88';
    ctx.font = `${fontSize}px JetBrains Mono, monospace`;
    for (let i = 0; i < drops.length; i++) {
      ctx.fillText(charArr[Math.floor(Math.random() * charArr.length)], i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  resize();
  window.addEventListener('resize', resize);
  setInterval(draw, 60);
})();


// =====================================================
// 2. NAVBAR SCROLL EFFECT (FLOATING PILL ON SCROLL)
// =====================================================
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
}
window.addEventListener('scroll', handleNavbarScroll, { passive: true });
handleNavbarScroll();


// =====================================================
// 3. HAMBURGER MOBILE MENU & SMOOTH SCROLL
// =====================================================
(function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');

      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const topOffset = 70;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - topOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
})();


// =====================================================
// 4. TYPED TEXT EFFECT — uses current language phrases
// =====================================================
function restartTyped() {
  clearTimeout(typedTimer);
  typedPhraseIndex = 0;
  typedCharIndex = 0;
  typedDeleting = false;
  const el = document.getElementById('typed-text');
  if (el) el.textContent = '';
  runTyped();
}

function runTyped() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const phrases = TRANSLATIONS[currentLang].typed_phrases;
  const current = phrases[typedPhraseIndex];
  const speed = { type: 75, del: 45, pause: 2000 };

  if (typedDeleting) {
    el.textContent = current.substring(0, typedCharIndex--);
    if (typedCharIndex < 0) {
      typedDeleting = false;
      typedPhraseIndex = (typedPhraseIndex + 1) % phrases.length;
      typedTimer = setTimeout(runTyped, 300);
      return;
    }
  } else {
    el.textContent = current.substring(0, typedCharIndex++);
    if (typedCharIndex > current.length) {
      typedDeleting = true;
      typedTimer = setTimeout(runTyped, speed.pause);
      return;
    }
  }
  typedTimer = setTimeout(runTyped, typedDeleting ? speed.del : speed.type);
}

restartTyped();

(function initCodeTyping() {
  const codeBlocks = document.querySelectorAll('#hero-code-text, #about-code-text');
  if (!codeBlocks.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = document.getElementById('page-loader');
  let loaderHidden = !loader;

  if (loader) {
    window.addEventListener('page-loader-hidden', () => {
      loaderHidden = true;
    }, { once: true });
  }

  codeBlocks.forEach((code) => {
    const textNodes = [];
    const walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }

    const characters = [];
    textNodes.forEach((textNode) => {
      const fragment = document.createDocumentFragment();
      [...textNode.nodeValue].forEach((character) => {
        const characterSpan = document.createElement('span');
        characterSpan.className = 'snippet-char';
        characterSpan.textContent = character;
        fragment.appendChild(characterSpan);
        characters.push(characterSpan);
      });
      textNode.replaceWith(fragment);
    });

    const cursor = document.createElement('span');
    cursor.className = 'snippet-typing-cursor';
    cursor.setAttribute('aria-hidden', 'true');

    const revealCode = () => {
      if (prefersReducedMotion) {
        characters.forEach((character) => character.classList.add('is-visible'));
        code.querySelectorAll('.code-line').forEach((line) => line.classList.add('is-active'));
        characters.at(-1)?.after(cursor);
        return;
      }

      characters.forEach((character, index) => {
        setTimeout(() => {
          character.closest('.code-line')?.classList.add('is-active');
          character.classList.add('is-visible');
          character.after(cursor);
        }, 20 * index);
      });
    };

    const card = code.closest('.hero-code-snippet, .terminal-card') || code;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();

        if (loaderHidden) {
          revealCode();
        } else {
          window.addEventListener('page-loader-hidden', revealCode, { once: true });
        }
      }
    }, { threshold: 0.2 });

    observer.observe(card);
  });
})();


// =====================================================
// 5. ANIMATED COUNTERS
// =====================================================
(function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  let started = false;

  function startCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / (2000 / 16));
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        counter.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 16);
    });
  }

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !started) { started = true; startCounters(); }
  }, { threshold: 0.5 });
  const el = document.querySelector('.hero-stats');
  if (el) observer.observe(el);
})();


// =====================================================
// 6. SCROLL REVEAL
// =====================================================
(function initReveal() {
  const els = document.querySelectorAll('.services-stage, .section-header, .project-card, .testimonials-stage, .about-grid > *, .contact-grid > *');
  els.forEach(el => el.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();


// =====================================================
// 6.5. PORTFOLIO CAROUSEL (3D COVERFLOW) & FILTERS
// =====================================================
const portfolioCarousel = document.getElementById('portfolioCarousel');
const portfolioPrev = document.getElementById('portfolioPrev');
const portfolioNext = document.getElementById('portfolioNext');
const portfolioDotsContainer = document.getElementById('portfolioDots');
const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');

let currentPortfolioIndex = 0;
let allPortfolioSlides = [];
let activePortfolioSlides = [];
let portfolioDots = [];
let currentPortfolioFilter = 'all';

function initPortfolioCarousel() {
  if (!portfolioCarousel) return;
  allPortfolioSlides = Array.from(portfolioCarousel.querySelectorAll('.portfolio-slide'));
  if (allPortfolioSlides.length === 0) return;

  // Filter clicks
  portfolioFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      portfolioFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPortfolioFilter = btn.getAttribute('data-filter') || 'all';
      currentPortfolioIndex = 0;
      updateActivePortfolioSlides();
    });
  });

  // Slide side clicks
  allPortfolioSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
      if (hasSwipedPortfolio) return;
      if (!slide.classList.contains('active')) {
        const idx = activePortfolioSlides.indexOf(slide);
        if (idx !== -1) {
          goToPortfolioSlide(idx);
        }
      }
    });
  });

  updateActivePortfolioSlides();
}

function updateActivePortfolioSlides() {
  activePortfolioSlides = allPortfolioSlides.filter(slide => {
    const categories = (slide.getAttribute('data-category') || '').split(' ');
    return currentPortfolioFilter === 'all' || categories.includes(currentPortfolioFilter);
  });

  // Hide non-matching slides completely
  allPortfolioSlides.forEach(slide => {
    if (!activePortfolioSlides.includes(slide)) {
      slide.style.display = 'none';
      slide.className = 'portfolio-slide';
    } else {
      slide.style.display = '';
    }
  });

  // Re-build dots
  if (portfolioDotsContainer) {
    portfolioDotsContainer.innerHTML = '';
    portfolioDots = [];
    activePortfolioSlides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.className = 'portfolio-dot' + (i === currentPortfolioIndex ? ' active' : '');
      dot.setAttribute('aria-label', `Go to project ${i + 1}`);
      dot.addEventListener('click', () => goToPortfolioSlide(i));
      portfolioDotsContainer.appendChild(dot);
      portfolioDots.push(dot);
    });
  }

  updatePortfolioCarousel(true);
}

function goToPortfolioSlide(index) {
  currentPortfolioIndex = index;
  updatePortfolioCarousel();
}

function updatePortfolioCarousel(isInit = false) {
  if (activePortfolioSlides.length === 0) return;

  const total = activePortfolioSlides.length;
  if (currentPortfolioIndex < 0) currentPortfolioIndex = total - 1;
  if (currentPortfolioIndex >= total) currentPortfolioIndex = 0;

  const prevIndex = (currentPortfolioIndex - 1 + total) % total;
  const nextIndex = (currentPortfolioIndex + 1) % total;

  activePortfolioSlides.forEach((slide, i) => {
    let baseClass = 'portfolio-slide';
    if (slide.id === 'project-powerfitness' || slide.id === 'project-catalog' || slide.id === 'project-drasma' || slide.id === 'project-arcade') {
      baseClass += ' featured-project';
    }
    if (slide.classList.contains('has-gallery')) {
      baseClass += ' has-gallery';
    }

    if (total === 1) {
      slide.className = baseClass + ' active';
    } else if (i === currentPortfolioIndex) {
      slide.className = baseClass + ' active';
    } else if (i === prevIndex) {
      slide.className = baseClass + ' prev';
    } else if (i === nextIndex) {
      slide.className = baseClass + ' next';
    } else {
      slide.className = baseClass;
    }
  });

  // Update dots
  portfolioDots.forEach((dot, i) => dot.classList.toggle('active', i === currentPortfolioIndex));
  if (!isInit && portfolioDots[currentPortfolioIndex] && typeof portfolioDots[currentPortfolioIndex].scrollIntoView === 'function') {
    portfolioDots[currentPortfolioIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

if (portfolioPrev) {
  portfolioPrev.addEventListener('click', () => {
    currentPortfolioIndex--;
    updatePortfolioCarousel();
  });
}
if (portfolioNext) {
  portfolioNext.addEventListener('click', () => {
    currentPortfolioIndex++;
    updatePortfolioCarousel();
  });
}

// Swipe Support for Portfolio Carousel
let isDraggingPortfolio = false;
let startPosPortfolio = 0;
let hasSwipedPortfolio = false;

if (portfolioCarousel) {
  portfolioCarousel.addEventListener('mousedown', (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    isDraggingPortfolio = true;
    startPosPortfolio = e.clientX;
    hasSwipedPortfolio = false;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDraggingPortfolio) return;
    isDraggingPortfolio = false;
    const diff = e.clientX - startPosPortfolio;
    const isAr = currentLang === 'ar';
    if (Math.abs(diff) > 35) {
      hasSwipedPortfolio = true;
      if (isAr) {
        if (diff > 0) currentPortfolioIndex++;
        else currentPortfolioIndex--;
      } else {
        if (diff > 0) currentPortfolioIndex--;
        else currentPortfolioIndex++;
      }
      updatePortfolioCarousel();
      setTimeout(() => { hasSwipedPortfolio = false; }, 300);
    }
  });

  portfolioCarousel.addEventListener('touchstart', (e) => {
    if (e.target.closest('a') || e.target.closest('button')) return;
    startPosPortfolio = e.touches[0].clientX;
    hasSwipedPortfolio = false;
  }, { passive: true });

  portfolioCarousel.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startPosPortfolio;
    const isAr = currentLang === 'ar';
    if (Math.abs(diff) > 35) {
      hasSwipedPortfolio = true;
      if (isAr) {
        if (diff > 0) currentPortfolioIndex++;
        else currentPortfolioIndex--;
      } else {
        if (diff > 0) currentPortfolioIndex--;
        else currentPortfolioIndex++;
      }
      updatePortfolioCarousel();
      setTimeout(() => { hasSwipedPortfolio = false; }, 300);
    }
  }, { passive: true });
}

// Initialize Portfolio Carousel
initPortfolioCarousel();


// =====================================================
// 6.6. PROJECT CARD MULTI-IMAGE GALLERY SWITCHER & AUTOPLAY
// =====================================================
(function initProjectGalleries() {
  document.querySelectorAll('.portfolio-slide.has-gallery, .project-card.has-gallery').forEach(card => {
    const dots = card.querySelectorAll('.gallery-dot');
    const images = card.querySelectorAll('.project-gallery-img');
    if (images.length <= 1) return;

    let currentIdx = 0;
    let autoPlayTimer = null;

    function goToImage(idx) {
      currentIdx = idx;
      dots.forEach(d => d.classList.remove('active'));
      images.forEach(img => img.classList.remove('active'));

      if (dots[currentIdx]) dots[currentIdx].classList.add('active');
      if (images[currentIdx]) images[currentIdx].classList.add('active');
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(() => {
        const nextIdx = (currentIdx + 1) % images.length;
        goToImage(nextIdx);
      }, 3500);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    dots.forEach((dot, idx) => {
      const switchImg = (e) => {
        if (e) e.stopPropagation();
        goToImage(idx);
      };

      dot.addEventListener('click', switchImg);
      dot.addEventListener('mouseenter', switchImg);
    });

    // Start auto-play & pause on hover
    startAutoPlay();
    card.addEventListener('mouseenter', stopAutoPlay);
    card.addEventListener('mouseleave', startAutoPlay);
  });
})();


// =====================================================
// 6.8. INTERACTIVE PROJECT GALLERY & VIDEO WALKTHROUGH MODAL
// =====================================================
const arcadeGalleryData = [
  {
    src: "assets/projects/ARCADE/2.png",
    title_ar: "واجهة المتجر الرئيسية (Storefront Home - Build Your Dream Rig)",
    title_en: "Storefront Home - Build Your Dream Rig",
    desc_ar: "الصفحة الرئيسية لمتجر الإلكترونيات وتصفح الأقسام والمكونات الاحترافية.",
    desc_en: "Modern electronics storefront homepage with category navigation and hardware highlights."
  },
  {
    src: "assets/projects/ARCADE/1.png",
    title_ar: "بوابة تسجيل دخول المستخدمين (User Authentication)",
    title_en: "User & Customer Authentication Portal",
    desc_ar: "واجهة تسجيل دخول آمنة للمستخدمين والعملاء مع توثيق JWT وتشفير كلمات المرور.",
    desc_en: "Secure authentication portal for registered shoppers featuring JWT tokens."
  },
  {
    src: "assets/projects/ARCADE/3.png",
    title_ar: "كتالوج المنتجات والفلترة المتقدمة (Products Catalog)",
    title_en: "Products Catalog & Advanced Hardware Filters",
    desc_ar: "استعراض المنتجات مع الفلترة حسب القطع، نطاق الأسعار، التوفر، وإضافة المنتجات للسلة.",
    desc_en: "Filtered hardware catalog with price ranges, stock status, specs, and shopping cart integration."
  },
  {
    src: "assets/projects/ARCADE/7.png",
    title_ar: "إتمام الطلب والدفع الآمن (Secure Checkout)",
    title_en: "Secure Checkout & Order Summary",
    desc_ar: "واجهة الدفع الآمن مع تفاصيل الشحن، ملخص الطلب، وخطوات التأكيد بوضوح.",
    desc_en: "Secure checkout interface with shipping details, order summary, and clear confirmation steps."
  },
  {
    src: "assets/projects/ARCADE/4.png",
    title_ar: "بوابة دخول لوحة إدارة النظام (Admin Portal Login)",
    title_en: "Admin Portal Secure Access",
    desc_ar: "بوابة دخول محصنة ومخصصة لمدراء النظام والتحكم بصلاحيات المسؤولين.",
    desc_en: "Dedicated role-protected administrative access portal."
  },
  {
    src: "assets/projects/ARCADE/6.png",
    title_ar: "لوحة التحكم التنفيذية وإحصائيات المبيعات (Executive Dashboard)",
    title_en: "Executive Admin Dashboard & Live Analytics",
    desc_ar: "لوحة تحكم إدارية شاملة تعرض الإيرادات، حجم الطلبات، المخزون، وتنبيهات النواقص.",
    desc_en: "Full admin ERP dashboard displaying total revenue, orders, active inventory, and status charts."
  },
  {
    src: "assets/projects/ARCADE/8.png",
    title_ar: "لوحة التحكم - الطلبات الحديثة (Orders Management)",
    title_en: "Admin Dashboard - Recent Orders & Alerts",
    desc_ar: "نظرة عامة على الطلبات الحديثة، حالة الطلبات، وتنبيهات المنتجات منخفضة المخزون.",
    desc_en: "Overview of recent orders, real-time status charts, and low stock alerts."
  },
  {
    src: "assets/projects/ARCADE/9.png",
    title_ar: "إدارة المخزون وتحديث الكميات (Inventory Management)",
    title_en: "Inventory Management & Stock Health",
    desc_ar: "واجهة مخصصة لمراقبة حالة المخزون، تحديث الكميات بسرعة، وتتبع نواقص المنتجات.",
    desc_en: "Dedicated interface to monitor stock health, quick stock updates, and track shortages."
  }
];

function initProjectGalleryModal() {
  const modal = document.getElementById('projectGalleryModal');
  if (!modal) return;

  const overlay = document.getElementById('projectModalOverlay');
  const closeBtn = document.getElementById('projectModalClose');
  const prevBtn = document.getElementById('pmPrevBtn');
  const nextBtn = document.getElementById('pmNextBtn');
  const mainImage = document.getElementById('pmMainImage');
  const screenTitle = document.getElementById('pmScreenTitle');
  const screenDesc = document.getElementById('pmScreenDesc');
  const thumbnailsBar = document.getElementById('pmThumbnailsBar');
  const triggers = document.querySelectorAll('.open-arcade-gallery, .open-arcade-video');

  const tabVideo = document.getElementById('pmTabVideo');
  const tabGallery = document.getElementById('pmTabGallery');
  const videoStage = document.getElementById('pmVideoStage');
  const galleryStage = document.getElementById('pmGalleryStage');
  const videoIframe = document.getElementById('pmVideoIframe');

  const videoSrc = "https://drive.google.com/file/d/1jtJatQcDNpOSRsGC-Wgm11loa31jvqkb/preview";

  let currentIdx = 0;
  let activeData = arcadeGalleryData;
  let currentMode = 'video';

  function setMode(mode) {
    currentMode = mode;
    const isAr = (currentLang || document.documentElement.lang) === 'ar';

    if (tabVideo) tabVideo.classList.toggle('active', mode === 'video');
    if (tabGallery) tabGallery.classList.toggle('active', mode === 'gallery');

    if (mode === 'video') {
      if (videoStage) videoStage.style.display = 'flex';
      if (galleryStage) galleryStage.style.display = 'none';
      if (thumbnailsBar) thumbnailsBar.style.display = 'none';

      if (videoIframe && (!videoIframe.src || videoIframe.src === 'about:blank' || !videoIframe.src.includes('drive.google.com'))) {
        videoIframe.src = videoSrc;
      }

      if (screenTitle) {
        screenTitle.textContent = isAr ? "استعراض فيديو شامل للنظام (Walkthrough Video)" : "Comprehensive System Video Walkthrough";
      }
      if (screenDesc) {
        screenDesc.textContent = isAr
          ? "استعراض فيديو حي لجميع عمليات الشراء، تصفح الكتالوج، وتحديثات لوحة تحكم الأدمن والـ ERP."
          : "Live video walkthrough showcasing customer shopping flow, catalog browsing, and real-time Admin ERP operations.";
      }
    } else {
      if (videoStage) videoStage.style.display = 'none';
      if (galleryStage) galleryStage.style.display = 'flex';
      if (thumbnailsBar) thumbnailsBar.style.display = 'flex';

      showSlide(currentIdx);
    }
  }

  if (tabVideo) tabVideo.addEventListener('click', () => setMode('video'));
  if (tabGallery) tabGallery.addEventListener('click', () => setMode('gallery'));

  function renderThumbnails() {
    if (!thumbnailsBar) return;
    thumbnailsBar.innerHTML = '';
    activeData.forEach((item, idx) => {
      const thumb = document.createElement('button');
      thumb.className = 'pm-thumb' + (idx === currentIdx ? ' active' : '');
      thumb.setAttribute('type', 'button');
      thumb.setAttribute('aria-label', `Preview ${idx + 1}`);
      thumb.innerHTML = `<img src="${item.src}" alt="Thumb ${idx + 1}" loading="lazy" />`;
      thumb.addEventListener('click', () => {
        setMode('gallery');
        showSlide(idx);
      });
      thumbnailsBar.appendChild(thumb);
    });
  }

  function showSlide(idx) {
    if (idx < 0) idx = activeData.length - 1;
    if (idx >= activeData.length) idx = 0;
    currentIdx = idx;

    const item = activeData[currentIdx];
    const isAr = (currentLang || document.documentElement.lang) === 'ar';

    if (mainImage) {
      mainImage.style.opacity = '0.3';
      mainImage.style.transform = 'scale(0.98)';
      setTimeout(() => {
        mainImage.src = item.src;
        mainImage.alt = isAr ? item.title_ar : item.title_en;
        mainImage.style.opacity = '1';
        mainImage.style.transform = 'scale(1)';
      }, 120);
    }

    if (screenTitle) {
      screenTitle.textContent = isAr ? item.title_ar : item.title_en;
    }

    if (screenDesc) {
      screenDesc.textContent = isAr ? item.desc_ar : item.desc_en;
    }

    if (thumbnailsBar) {
      const thumbs = thumbnailsBar.querySelectorAll('.pm-thumb');
      thumbs.forEach((t, i) => {
        t.classList.toggle('active', i === currentIdx);
      });
      if (thumbs[currentIdx]) {
        thumbs[currentIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  function openModal(defaultMode = 'video') {
    activeData = arcadeGalleryData;
    renderThumbnails();
    setMode(defaultMode);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (videoIframe) {
      videoIframe.src = '';
    }
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal('video');
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIdx - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIdx + 1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeModal();
    } else if (currentMode === 'gallery') {
      if (e.key === 'ArrowLeft') {
        showSlide(currentIdx - 1);
      } else if (e.key === 'ArrowRight') {
        showSlide(currentIdx + 1);
      }
    }
  });

  window.addEventListener('languageChanged', () => {
    if (modal.classList.contains('active')) {
      setMode(currentMode);
    }
  });
}


// =====================================================
// 6.7. STANDALONE PROJECTS PAGE FILTERING (projects.html)
// =====================================================
(function initProjectsPageFilters() {
  const projectsGrid = document.getElementById('projectsGrid');
  if (!projectsGrid) return;
  const filterBtns = document.querySelectorAll('.projects-page-hero .portfolio-filter-btn');
  const projectCards = projectsGrid.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
})();


// =====================================================
// 7. CONTACT FORM — WhatsApp redirect
// =====================================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const subjectSelect = document.getElementById('contact-subject');
    const selectedOption = subjectSelect ? subjectSelect.options[subjectSelect.selectedIndex] : null;
    const serviceName = selectedOption && selectedOption.value ? selectedOption.text.trim() : '';
    const message = document.getElementById('contact-message').value.trim();
    const isAr = currentLang === 'ar';

    let formattedMsg = '';
    if (isAr) {
      formattedMsg = `مرحباً مهندس رحيم 👋\n\nاسمي: *${name}*\nالخدمة المطلوبة: *${serviceName || 'مشروع جديد'}*`;
      if (message) {
        formattedMsg += `\n\n*تفاصيل المشروع:*\n${message}`;
      }
    } else {
      formattedMsg = `Hello Eng. Raheem 👋\n\nMy Name: *${name}*\nRequested Service: *${serviceName || 'New Project'}*`;
      if (message) {
        formattedMsg += `\n\n*Project Details:*\n${message}`;
      }
    }

    const msg = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/201032304640?text=${msg}`, '_blank');

    const btn = document.getElementById('contact-submit-btn');
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = `<span>✓ ${TRANSLATIONS[currentLang].form_sending}</span>`;
      setTimeout(() => { btn.innerHTML = orig; contactForm.reset(); }, 3000);
    }
  });
}


// =====================================================
// 9. ACTIVE NAV LINK ON SCROLL (SCROLL SPY)
// =====================================================
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(s => {
    const top = s.offsetTop - 200;
    const height = s.offsetHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      current = s.id;
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const isCurrent = href === `#${current}` || href === `index.html#${current}`;
    link.classList.toggle('active', isCurrent && !link.classList.contains('nav-link-cta'));
  });
}, { passive: true });


// =====================================================
// 10. PARALLAX AVATAR GLOW
// =====================================================
(function () {
  const glow = document.querySelector('.avatar-glow');
  if (!glow) return;
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    glow.style.transform = `translate(${x}px, ${y}px)`;
  });
})();


// =====================================================
// 11. DESKTOP CURSOR TRAIL (Only on devices with fine pointer / mouse)
// =====================================================
(function () {
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hasFinePointer) return;

  const trail = [];
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    dot.style.cssText = `position:fixed;width:${4 + i * 0.5}px;height:${4 + i * 0.5}px;border-radius:50%;background:rgba(0,255,136,${0.6 - i * 0.05});pointer-events:none;z-index:9999;transition:all ${0.05 + i * 0.02}s linear;transform:translate(-50%,-50%);`;
    document.body.appendChild(dot);
    trail.push(dot);
  }
  document.addEventListener('mousemove', e => {
    trail.forEach(d => {
      d.style.left = e.clientX + 'px';
      d.style.top = e.clientY + 'px';
    });
  }, { passive: true });
})();

// =====================================================
// 12. SERVICES CAROUSEL (3D COVERFLOW)
// =====================================================
const servicesCarousel = document.getElementById('servicesCarousel');
const servicesPrev = document.getElementById('servicesPrev');
const servicesNext = document.getElementById('servicesNext');
const servicesDotsContainer = document.getElementById('servicesDots');
let currentServiceIndex = 0;
let serviceSlides = [];
let serviceDots = [];

function initServicesCarousel() {
  if (!servicesCarousel) return;
  serviceSlides = Array.from(servicesCarousel.querySelectorAll('.service-slide'));
  if (serviceSlides.length === 0) return;

  // Create dots
  if (servicesDotsContainer) {
    servicesDotsContainer.innerHTML = '';
    serviceDots = [];
    serviceSlides.forEach((slide, i) => {
      const dot = document.createElement('button');
      dot.className = 'services-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goToServiceSlide(i));
      servicesDotsContainer.appendChild(dot);
      serviceDots.push(dot);
    });
  }

  // Attach click and modal events directly to slides and their buttons
  serviceSlides.forEach((slide, i) => {
    // Clicking a side card centers it
    slide.addEventListener('click', (e) => {
      if (hasSwipedService) return;
      if (!slide.classList.contains('active')) {
        goToServiceSlide(i);
      }
    });

    // Clicking the "Learn More" button opens the modal
    const btn = slide.querySelector('.service-slide-btn');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openServiceModal(slide);
      });
    }
  });

  updateServicesCarousel();
}

function updateServicesCarousel() {
  if (serviceSlides.length === 0) return;

  // Enforce circular bounds
  if (currentServiceIndex < 0) currentServiceIndex = serviceSlides.length - 1;
  if (currentServiceIndex >= serviceSlides.length) currentServiceIndex = 0;

  const total = serviceSlides.length;
  const prevIndex = (currentServiceIndex - 1 + total) % total;
  const nextIndex = (currentServiceIndex + 1) % total;

  serviceSlides.forEach((slide, i) => {
    let baseClass = 'service-slide';
    if (slide.classList.contains('service-slide--featured')) {
      baseClass += ' service-slide--featured';
    }

    if (i === currentServiceIndex) {
      slide.className = baseClass + ' active';
    } else if (i === prevIndex) {
      slide.className = baseClass + ' prev';
    } else if (i === nextIndex) {
      slide.className = baseClass + ' next';
    } else {
      slide.className = baseClass;
    }
  });

  // Update dots
  serviceDots.forEach((dot, i) => dot.classList.toggle('active', i === currentServiceIndex));
}

if (servicesPrev) {
  servicesPrev.addEventListener('click', () => {
    currentServiceIndex--;
    updateServicesCarousel();
  });
}
if (servicesNext) {
  servicesNext.addEventListener('click', () => {
    currentServiceIndex++;
    updateServicesCarousel();
  });
}

// Swipe Support
let isDraggingService = false;
let startPosService = 0;

if (servicesCarousel) {
  servicesCarousel.addEventListener('mousedown', dragStartService);
  servicesCarousel.addEventListener('touchstart', dragStartService, { passive: true });
  servicesCarousel.addEventListener('mouseup', dragEndService);
  servicesCarousel.addEventListener('mouseleave', dragEndService);
  servicesCarousel.addEventListener('touchend', dragEndService);

  // Global event delegation backup for button clicks
  servicesCarousel.addEventListener('click', (e) => {
    const btn = e.target.closest('.service-slide-btn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const slide = btn.closest('.service-slide');
      if (slide) openServiceModal(slide);
    }
  });
}

let hasSwipedService = false;

function dragStartService(e) {
  isDraggingService = true;
  hasSwipedService = false;
  startPosService = getPositionXService(e);
}

function dragEndService(e) {
  if (!isDraggingService) return;
  isDraggingService = false;
  const currentPosition = getPositionXService(e.type.includes('mouse') ? e : (e.changedTouches ? e.changedTouches[0] : e));
  const diff = currentPosition - startPosService;

  if (Math.abs(diff) > 10) {
    hasSwipedService = true;
  }

  if (Math.abs(diff) > 35) { // Swipe threshold
    const isArabic = document.documentElement.lang === 'ar' || (typeof currentLang !== 'undefined' && currentLang === 'ar');
    if (isArabic) {
      if (diff > 0) currentServiceIndex++;
      else currentServiceIndex--;
    } else {
      if (diff > 0) currentServiceIndex--;
      else currentServiceIndex++;
    }
    updateServicesCarousel();
    setTimeout(() => { hasSwipedService = false; }, 300);
  }
}

function getPositionXService(event) {
  return event.pageX !== undefined ? event.pageX : (event.touches ? event.touches[0].clientX : event.clientX);
}

function goToServiceSlide(index) {
  currentServiceIndex = index;
  updateServicesCarousel();
}

// =====================================================
// DETAILED SERVICES DATA (FOR MODAL)
// =====================================================
const SERVICES_DETAILS = {
  'service-fullstack': {
    ar: {
      title: "تصميم وبناء مواقع ويب وصفحات هبوط عالية التحويل",
      badge: "الأكثر طلباً",
      isHot: true,
      overview: "أصمم وأبني مواقع ويب وصفحات هبوط (Landing Pages) استثنائية تجمع بين الإبهار البصري وسرعة التحميل الفائقة وتجربة المستخدم السلسة. الهدف الأساسي هو تحويل الزوار إلى عملاء حقيقيين وزيادة مبيعاتك أو تعزيز هويتك الرقمية بأعلى معايير هندسة البرمجيات الحديثة.",
      features: [
        "تصميم واجهات عصرية ومبتكرة (UI/UX) تناسب هويتك التجارية وتخلق انطباعاً أولياً مبهراً.",
        "توافق وتجاوب كامل 100% مع جميع الشاشات والأجهزة (موبايل، تابلت، ديسكتوب).",
        "كود برمجي خفيف وفائق السرعة مع تطبيق أحدث ممارسات الـ SEO لمحركات البحث.",
        "دمج نماذج التواصل السريع، أزرار واتساب المباشرة، ونماذج حجز المواعيد والطلبات.",
        "إمكانية ربط لوحة تحكم أو نظام Backend وقاعدة بيانات لإدارة المحتوى والطلبات بسهولة."
      ],
      techTitle: "التقنيات والأدوات",
      tech: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "Responsive Design", "SEO Best Practices", "Performance Optimization", "ASP.NET Core"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "Websites & High-Converting Landing Pages",
      badge: "Most Popular",
      isHot: true,
      overview: "I design and develop high-impact websites and landing pages engineered to captivate visitors and convert them into paying customers. Combining pixel-perfect aesthetics with lightning-fast load speeds, responsive layouts, and modern SEO architecture.",
      features: [
        "Modern, bespoke UI/UX design crafted to elevate your brand presence.",
        "100% responsive and tested across mobile, tablet, and desktop screens.",
        "Clean, optimized code adhering to SEO best practices for high Google ranking.",
        "Seamless contact forms, direct WhatsApp integration, and call-to-action triggers.",
        "Optional backend CMS or database integration for dynamic content management."
      ],
      techTitle: "Technologies Used",
      tech: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "Responsive Design", "SEO Best Practices", "Performance Optimization", "ASP.NET Core"],
      ctaText: "Order This Service Now"
    }
  },
  'service-analysis': {
    ar: {
      title: "النشر السحابي وإعدادات الاستضافة والأمان",
      badge: "استضافة وسيرفرات",
      isHot: false,
      overview: "أساعدك في نقل موقعك أو تطبيقك من مرحلة التطوير إلى العمل الفعلي على الإنترنت بأعلى درجات الاستقرار والأمان. من اختيار بيئة الاستضافة المناسبة وربط النطاقات إلى ضبط شهادات الأمان وسرعة السيرفر لضمان استمرارية عمل مشروعك دون أي توقف.",
      features: [
        "تجهيز ونشر التطبيقات على سيرفرات VPS، cPanel، Hostinger، أو السيرفرات السحابية.",
        "ربط النطاقات (Domain Name) وإعداد سجلات الـ DNS بشكل دقيق وخالٍ من الأخطاء.",
        "تثبيت وتفعيل شهادات الأمان SSL/HTTPS وتأمين نقل البيانات والتشفير الكامل.",
        "ربط وضبط شبكة Cloudflare لتسريع تصفح الموقع وحمايته من الهجمات (DDoS Protection).",
        "إعداد النسخ الاحتياطي التلقائي (Automated Backups) وفحص سرعة استجابة السيرفر."
      ],
      techTitle: "التقنيات والأدوات",
      tech: ["VPS Linux/Windows", "cPanel", "Hostinger", "Cloudflare", "DNS", "SSL / TLS", "Nginx / IIS", "Git Deployment"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "Deployment, Cloud & Hosting Setup",
      badge: "DevOps & Hosting",
      isHot: false,
      overview: "Taking your web application from local development to production with maximum uptime, robust security, and peak performance. From server configuration to domain routing and SSL encryption, I make sure your site is always live and secure.",
      features: [
        "End-to-end deployment on VPS (Linux/Windows), cPanel, Hostinger, or cloud hosting.",
        "Precision domain connection and DNS record management (A, CNAME, MX, TXT).",
        "SSL/TLS security certificate installation with strict HTTPS redirection.",
        "Cloudflare CDN integration for global content delivery and DDoS mitigation.",
        "Automated backup scheduling and server performance profiling."
      ],
      techTitle: "Technologies Used",
      tech: ["VPS Linux/Windows", "cPanel", "Hostinger", "Cloudflare", "DNS", "SSL / TLS", "Nginx / IIS", "Git Deployment"],
      ctaText: "Order This Service Now"
    }
  },
  'service-salla': {
    ar: {
      title: "تخصيص وتطوير المتاجر الإلكترونية لزيادة المبيعات",
      badge: "تجارة إلكترونية",
      isHot: false,
      overview: "أقدّم حلولاً وتعديلات برمجية وتصميمية متقدمة لمظهر ووظائف المتاجر على منصات **سلة (Salla)، زد (Zid)، Shopify، WooCommerce، و ExpandCart**. تحسين رحلة العميل بالكامل من تصفح المنتجات وحتى إتمام الشراء لتخفيض السلات المتروكة ومضاعفة مبيعاتك.",
      features: [
        "تعديلات وتخصيصات برمجية دقيقة للواجهات باستخدام HTML و CSS.",
        "إعادة تصميم وتنسيق صفحات المنتجات والسلة وصفحة الدفع لتسهيل الشراء وزيادة الثقة.",
        "تحسين سرعة تحميل المتجر وتجاوبه السلس مع شاشات الموبايل (Mobile-First Experience).",
        "ربط ودمج بوابات الدفع، شركات الشحن، بكسلات الإعلانات، وأدوات التسويق والتحليل.",
        "إضافة عناصر تفاعلية مخصصة كالبانرات الترويجية الذكية والعدادات التنازلية لزيادة الشراء."
      ],
      techTitle: "المنصات والتقنيات",
      tech: ["Salla SDK", "Zid", "Shopify Liquid", "WooCommerce", "ExpandCart", "Custom HTML, CSS", "E-commerce SEO"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "E-Commerce Customization & Store Optimization",
      badge: "E-Commerce",
      isHot: false,
      overview: "Elevate your online storefront on platforms like **Salla, Zid, Shopify, WooCommerce, and ExpandCart**. I deliver tailored UI/UX enhancements, custom script integrations, and conversion optimizations designed to reduce cart abandonment and increase revenue.",
      features: [
        "Custom HTML, CSS overrides for bespoke branding beyond default platform themes.",
        "Product page and checkout flow optimization for frictionless buying experience.",
        "Mobile-first responsive tuning and asset speed optimization.",
        "Third-party integrations (payment gateways, shipping APIs, tracking pixels, CRM).",
        "Interactive conversion triggers (smart promo bars, scarcity counters, upsell elements)."
      ],
      techTitle: "Platforms & Tech",
      tech: ["Salla SDK", "Zid", "Shopify Liquid", "WooCommerce", "ExpandCart", "Custom HTML, CSS", "E-commerce SEO"],
      ctaText: "Order This Service Now"
    }
  },
  'service-backend': {
    ar: {
      title: "هندسة وتطوير الأنظمة الخلفية (Back-End Development)",
      badge: "هندسة برمجيات",
      isHot: false,
      overview: "بناء بنية تحتية برمجية قوية ومنطق أعمال احترافي ومستقر لتطبيقك باستخدام **ASP.NET Core**. أهتم بتطبيق أفضل مبادئ هندسة البرمجيات (OOP, SOLID, Clean Architecture) لضمان أن يكون النظام آمناً، سريعاً، وقابلاً للتوسع والنمو مع زيادة المستخدمين.",
      features: [
        "بناء تطبيقات ومنطق أعمال متكامل بمعمارية MVC و Clean Architecture المنظمة.",
        "فصل طبقات البيانات ومنطق الأعمال لتسهيل الصيانة والتطوير المستقبلي.",
        "إدارة متقدمة للمستخدمين، الصلاحيات، والتحقق الصارم من صحة البيانات (Data Validation).",
        "ربط عالي الأداء مع قواعد البيانات عبر Entity Framework Core واستعلامات LINQ المحسنة.",
        "معالجة مركزية للأخطاء مع نظام تسجيل أحداث شامل (Centralized Logging & Error Handling)."
      ],
      techTitle: "التقنيات والأدوات",
      tech: ["C#", "ASP.NET Core", ".NET 8 / 9", "Entity Framework Core", "LINQ", "SQL Server", "Clean Architecture", "SOLID"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "Back-End System Architecture & Development",
      badge: "Back-End",
      isHot: false,
      overview: "Engineering enterprise-grade server-side applications and business logic with **ASP.NET Core**. Built upon SOLID principles and Clean Architecture to ensure your software is rock-solid, scalable, and effortlessly maintainable.",
      features: [
        "Robust MVC & Clean Architecture application development with ASP.NET Core.",
        "Strict separation of concerns between business logic and data access layers.",
        "User role management, authentication security, and rigorous input validation.",
        "High-performance database operations with EF Core and optimized LINQ queries.",
        "Centralized error handling, middleware pipelines, and structured logging."
      ],
      techTitle: "Technologies Used",
      tech: ["C#", "ASP.NET Core", ".NET 8 / 9", "Entity Framework Core", "LINQ", "SQL Server", "Clean Architecture", "SOLID"],
      ctaText: "Order This Service Now"
    }
  },
  'service-api': {
    ar: {
      title: "تصميم وبناء واجهات البرمجة (RESTful APIs)",
      badge: "تكامل وأنظمة",
      isHot: false,
      overview: "بناء وتوثيق واجهات برمجية (REST APIs) سريعة الاستجابة ومحمية بالكامل، تعمل كحلقة وصل سلسة بين قواعد البيانات ومختلف التطبيقات (ويب، موبايل، أو منصات خارجية)، مع تطبيق أحدث معايير الأمان والتشفير.",
      features: [
        "تصميم وبناء Endpoints قياسية سريعة وآمنة باستخدام ASP.NET Core Web API.",
        "أنظمة مصادقة وتفويض متقدمة باستخدام JWT (JSON Web Tokens) و Refresh Tokens.",
        "توثيق تفاعلي كامل ومفصل للـ API عبر Swagger / OpenAPI لتسهيل ربطه مع المطورين.",
        "اختبار شامل ودقيق لجميع نقاط النهاية باستخدام Postman وتغطية كافة السيناريوهات.",
        "ربط وتكامل الـ API مع بوابات الدفع الإلكتروني والخدمات السحابية والأنظمة الخارجية."
      ],
      techTitle: "التقنيات والأدوات",
      tech: ["ASP.NET Core Web API", "JWT Auth", "Swagger / OpenAPI", "Postman", "REST Architecture", "JSON Serialization", "Async / Await"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "RESTful API Engineering & Integration",
      badge: "RESTful APIs",
      isHot: false,
      overview: "Designing, building, and documenting high-throughput, secure RESTful APIs that seamlessly power your web and mobile clients, complete with JWT authorization and comprehensive Swagger documentation.",
      features: [
        "Standardized, high-speed RESTful endpoints built with ASP.NET Core Web API.",
        "Robust JWT authentication, role-based authorization, and token refresh mechanisms.",
        "Interactive Swagger / OpenAPI documentation for seamless team or client integration.",
        "Exhaustive endpoint testing and validation suites in Postman.",
        "Third-party webhook and payment gateway integration with error resilience."
      ],
      techTitle: "Technologies Used",
      tech: ["ASP.NET Core Web API", "JWT Auth", "Swagger / OpenAPI", "Postman", "REST Architecture", "JSON Serialization", "Async / Await"],
      ctaText: "Order This Service Now"
    }
  },
  'service-db': {
    ar: {
      title: "تصميم وهندسة قواعد البيانات وتحسين الاستعلامات",
      badge: "قواعد البيانات",
      isHot: false,
      overview: "تصميم وبناء قواعد بيانات علائقية متينة ومحكمة تمنع تكرار البيانات وتضمن سلامتها وسرعة استرجاعها تحت أقصى ضغط عمل. أقوم ببناء المخططات الهيكلية (ERD) وكتابة استعلامات SQL مفهرسة ومحسنة بأعلى كفاءة.",
      features: [
        "إعداد وتصميم مخططات العلاقات الهيكلية الدقيقة (ERD - Entity Relationship Diagrams).",
        "بناء جداول قواعد البيانات وتطبيق معايير التطبيع (Normalization 3NF) لمنع التكرار.",
        "كتابة استعلامات SQL و Stored Procedures و Triggers و Views متقدمة وعالية السرعة.",
        "تحسين أداء الاستعلامات وبناء الفهارس (Indexes) لتقليل زمن استجابة السيرفر لأجزاء من الثانية.",
        "تصميم استراتيجيات الترحيل والنسخ الاحتياطي واستعادة البيانات (Migrations & Data Integrity)."
      ],
      techTitle: "التقنيات والأدوات",
      tech: ["SQL Server (T-SQL)", "Entity Framework Core", "LINQ", "ERD Modeling", "Database Normalization", "Query Profiler", "Index Tuning"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "Database Design, Schema Architecture & SQL Tuning",
      badge: "Database",
      isHot: false,
      overview: "Architecting normalized, high-performance relational database schemas that protect data integrity and deliver ultra-fast query execution, from ERD modeling to deep SQL indexing and query optimization.",
      features: [
        "Comprehensive ERD modeling and database relationship architecture.",
        "Normalized relational schemas (3NF) eliminating redundancy and data anomalies.",
        "Advanced T-SQL queries, Stored Procedures, Views, and automated Triggers.",
        "Index optimization, query profiling, and execution plan performance tuning.",
        "EF Core migrations, schema versioning, and automated backup strategies."
      ],
      techTitle: "Technologies Used",
      tech: ["SQL Server (T-SQL)", "Entity Framework Core", "LINQ", "ERD Modeling", "Database Normalization", "Query Profiler", "Index Tuning"],
      ctaText: "Order This Service Now"
    }
  },
  'service-script': {
    ar: {
      title: "تطوير سكريبتات الأتمتة وحلول المهام المتكررة",
      badge: "أتمتة وسكريبتات",
      isHot: false,
      overview: "وفّر ساعات من العمل اليدوي الروتيني من خلال سكريبتات مخصصة وأدوات أتمتة ذكية باستخدام **Python** و **Google Apps Script**. أساعدك في جمع البيانات، ربط الأنظمة، وأتمتة جداول البيانات والتقارير تلقائياً دون تدخل يدوي.",
      features: [
        "بناء سكريبتات Python لجمع وسحب ومعالجة وتنظيف البيانات (Web Scraping & Data Extraction).",
        "حلول أتمتة سحابية بـ Google Apps Script للربط التلقائي بين Google Sheets, Gmail, Forms, Drive.",
        "روبوتات وسكريبتات ذكية لأتمتة إرسال التقارير الدورية والتنبيهات المباشرة (Email / Webhooks).",
        "أدوات لمزامنة ونقل البيانات تلقائياً بين المنصات والمواقع المختلفة عبر الـ APIs.",
        "تسليم سكريبتات سهلة التشغيل بضغطة زر مع دليل استخدام مفصّل وشرح بالفيديو إن لزم."
      ],
      techTitle: "التقنيات والأدوات",
      tech: ["Python", "Google Apps Script", "Google Workspace APIs", "Pandas", "BeautifulSoup / Requests", "JSON / CSV", "Webhooks / Cron"],
      ctaText: "اطلب هذه الخدمة الآن"
    },
    en: {
      title: "Workflow Automation & Custom Scripting",
      badge: "Automation",
      isHot: false,
      overview: "Eliminate repetitive manual tasks and accelerate your business operations with tailored automation scripts using **Python** and **Google Apps Script**, seamlessly connecting tools, extracting data, and automating spreadsheets.",
      features: [
        "Python web scraping and structured data extraction pipelines.",
        "Serverless Google Apps Script automations syncing Google Sheets, Drive, Gmail, and Forms.",
        "Automated reporting bots and instant notifications via email and custom webhooks.",
        "Cross-platform data synchronization and scheduled background tasks.",
        "Ready-to-run, well-documented scripts with intuitive one-click operation."
      ],
      techTitle: "Technologies Used",
      tech: ["Python", "Google Apps Script", "Google Workspace APIs", "Pandas", "BeautifulSoup / Requests", "JSON / CSV", "Webhooks / Cron"],
      ctaText: "Order This Service Now"
    }
  }
};

// =====================================================
// SERVICE MODAL LOGIC
// =====================================================
const serviceModal = document.getElementById('serviceModal');
const serviceModalOverlay = document.getElementById('serviceModalOverlay');
const serviceModalClose = document.getElementById('serviceModalClose');
const serviceModalImg = document.getElementById('serviceModalImg');
const serviceModalBadge = document.getElementById('serviceModalBadge');
const serviceModalTitle = document.getElementById('serviceModalTitle');
const serviceModalDesc = document.getElementById('serviceModalDesc');
const serviceModalFeatures = document.getElementById('serviceModalFeatures');
const serviceModalTags = document.getElementById('serviceModalTags');
const serviceModalOverviewTitle = document.getElementById('serviceModalOverviewTitle');
const serviceModalFeaturesTitle = document.getElementById('serviceModalFeaturesTitle');
const serviceModalCta = document.getElementById('serviceModalCta');
const serviceModalCtaText = document.getElementById('serviceModalCtaText');

let currentActiveSlideId = null;

function openServiceModal(slide) {
  if (!serviceModal || !slide) return;

  const slideId = slide.id;
  currentActiveSlideId = slideId;
  const lang = document.documentElement.lang || 'ar';
  const data = SERVICES_DETAILS[slideId] ? SERVICES_DETAILS[slideId][lang] : null;

  const img = slide.querySelector('.service-slide-icon img');
  if (serviceModalImg && img) serviceModalImg.src = img.src;

  if (data) {
    // Populate with rich detailed data
    if (serviceModalTitle) serviceModalTitle.textContent = data.title;
    if (serviceModalBadge) {
      serviceModalBadge.textContent = data.badge;
      if (data.isHot) {
        serviceModalBadge.classList.add('service-slide-badge--hot');
      } else {
        serviceModalBadge.classList.remove('service-slide-badge--hot');
      }
    }
    if (serviceModalDesc) {
      // Allow bold formatting with ** in data
      serviceModalDesc.innerHTML = data.overview.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
    if (serviceModalOverviewTitle) serviceModalOverviewTitle.textContent = lang === 'ar' ? 'نبذة عن الخدمة' : 'Service Overview';
    if (serviceModalFeaturesTitle) serviceModalFeaturesTitle.textContent = lang === 'ar' ? 'ما الذي ستحصل عليه بالتحديد:' : 'What You Will Get Exactly:';
    if (serviceModalCtaText) serviceModalCtaText.textContent = data.ctaText;

    // Render features
    if (serviceModalFeatures) {
      serviceModalFeatures.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    }

    // Render tech stack tags
    if (serviceModalTags) {
      serviceModalTags.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');
    }
  } else {
    // Fallback if ID is not in detailed dictionary
    const badge = slide.querySelector('.service-slide-badge');
    const title = slide.querySelector('.service-slide-title');
    const desc = slide.querySelector('.service-slide-desc');
    const features = slide.querySelector('.service-slide-features');
    const tags = slide.querySelector('.service-slide-tags');

    if (serviceModalBadge && badge) serviceModalBadge.innerHTML = badge.innerHTML;
    if (serviceModalTitle && title) serviceModalTitle.innerHTML = title.innerHTML;
    if (serviceModalDesc && desc) serviceModalDesc.innerHTML = desc.innerHTML;
    if (serviceModalFeatures && features) serviceModalFeatures.innerHTML = features.innerHTML;
    if (serviceModalTags && tags) serviceModalTags.innerHTML = tags.innerHTML;
  }

  const modalContent = serviceModal.querySelector('.service-modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
  serviceModal.scrollTop = 0;

  serviceModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  if (!serviceModal) return;
  const modalContent = serviceModal.querySelector('.service-modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
  serviceModal.scrollTop = 0;
  serviceModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (serviceModalClose) serviceModalClose.addEventListener('click', closeServiceModal);
if (serviceModalOverlay) serviceModalOverlay.addEventListener('click', closeServiceModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && serviceModal && serviceModal.classList.contains('active')) {
    closeServiceModal();
  }
});

// CTA Button Click -> Preselect option in contact form & smooth scroll
if (serviceModalCta) {
  serviceModalCta.addEventListener('click', (e) => {
    e.preventDefault();
    closeServiceModal();

    const subjectSelect = document.getElementById('contact-subject');
    if (subjectSelect && currentActiveSlideId) {
      // Find matching option
      let matched = false;
      for (let i = 0; i < subjectSelect.options.length; i++) {
        if (subjectSelect.options[i].value === currentActiveSlideId) {
          subjectSelect.selectedIndex = i;
          matched = true;
          break;
        }
      }
      if (!matched && subjectSelect.options.length > 1) {
        subjectSelect.selectedIndex = 1;
      }
    }

    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  });
}

// Initialize on DOMContentLoaded or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initServicesCarousel);
} else {
  initServicesCarousel();
}


// =====================================================
// 13. LANGUAGE TOGGLE
// =====================================================
function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Update page-level attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (document.getElementById('projectsGrid')) {
    document.title = lang === 'ar' ? 'معرض الأعمال الكامل | رحيم درويش' : 'All Projects Showcase | Raheem Darweesh';
  } else {
    document.title = t.page_title;
  }
  document.querySelector('meta[name="description"]').setAttribute('content', t.meta_desc);
  // Update form placeholders
  const nameEl = document.getElementById('contact-name');
  if (nameEl) nameEl.placeholder = t.form_placeholder_name;
  const msgEl = document.getElementById('contact-message');
  if (msgEl) msgEl.placeholder = t.form_placeholder_msg;
  // Update hero name
  const heroName = document.querySelector('.hero-name');
  if (heroName) {
    heroName.innerHTML = lang === 'ar'
      ? 'رحيم<br/><span class="accent-text">درويش</span>'
      : 'Raheem<br/><span class="accent-text">Darweesh</span>';
  }
  // Typed wrapper: RTL in Arabic so mixed phrases render correctly
  const typedWrapper = document.querySelector('.hero-typed-wrapper');
  if (typedWrapper) {
    typedWrapper.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
  // Typed prefix — >> in both languages (user wants it visible in Arabic too)
  const typedPrefix = document.getElementById('typed-prefix');
  if (typedPrefix) {
    typedPrefix.textContent = '>> ';
  }
  // Body class for language-specific CSS
  document.body.classList.toggle('lang-ar', lang === 'ar');
  document.body.classList.toggle('lang-en', lang === 'en');
  // Update lang toggle button label
  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
  }
  // Restart typed effect with new phrases
  restartTyped();
}

const langToggleBtn = document.getElementById('lang-toggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('portfolio-lang', currentLang);
    applyTranslations(currentLang);
  });
}


// =====================================================
// 12.5. TESTIMONIALS SLIDER CONTROLLER
// =====================================================
let currentTestimonialIndex = 0;
let testSlideInterval = null;

function initTestimonialsSlider() {
  const carousel = document.getElementById('testimonialsCarousel');
  if (!carousel) return;
  
  const slides = Array.from(carousel.querySelectorAll('.testimonial-slide'));
  const dotsContainer = document.getElementById('testDots');
  const counter = document.getElementById('testCounter');
  const prevBtn = document.getElementById('testPrev');
  const nextBtn = document.getElementById('testNext');
  
  if (!slides.length) return;

  // Build Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `test-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Review ${idx + 1}`);
      dot.addEventListener('click', () => {
        goToTestimonialSlide(idx);
        restartAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function updateTestimonialView() {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentTestimonialIndex);
    });

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.test-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentTestimonialIndex);
      });
    }

    if (counter) {
      counter.textContent = `${currentTestimonialIndex + 1} / ${slides.length}`;
    }
  }

  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % slides.length;
    updateTestimonialView();
  }

  function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + slides.length) % slides.length;
    updateTestimonialView();
  }

  function goToTestimonialSlide(index) {
    currentTestimonialIndex = index;
    updateTestimonialView();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      restartAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      restartAutoSlide();
    });
  }

  // Auto-play
  function startAutoSlide() {
    stopAutoSlide();
    testSlideInterval = setInterval(nextTestimonial, 5000);
  }

  function stopAutoSlide() {
    if (testSlideInterval) {
      clearInterval(testSlideInterval);
      testSlideInterval = null;
    }
  }

  function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  // Swipe Gestures
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoSlide();
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        prevTestimonial();
      } else {
        nextTestimonial();
      }
    }
  }

  updateTestimonialView();
  startAutoSlide();
}


// =====================================================
// 13. INIT — Load saved preferences
// =====================================================
(function init() {
  const savedLang = localStorage.getItem('portfolio-lang') || 'en';
  applyTranslations(savedLang);
  currentLang = savedLang;
  initTestimonialsSlider();
  initProjectGalleryModal();
  initReviewLightbox();
})();

function hidePageLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader || loader.classList.contains('is-hidden')) return;

  loader.classList.add('is-hidden');
  setTimeout(() => {
    window.dispatchEvent(new Event('page-loader-hidden'));
    loader.remove();
  }, 700);
}

window.addEventListener('load', hidePageLoader, { once: true });
setTimeout(hidePageLoader, 4500);

// =====================================================
// 14. REVIEW LIGHTBOX
// =====================================================
function initReviewLightbox() {
  const modal   = document.getElementById('lightboxModal');
  const overlay = document.getElementById('lightboxOverlay');
  const img     = document.getElementById('lightboxImg');
  const closeBtn= document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const counter = document.getElementById('lightboxCounter');

  if (!modal) return;

  // Collect all testimonial review images
  let images = [];
  let currentIndex = 0;

  function collectImages() {
    images = Array.from(
      document.querySelectorAll('.testimonial-img-wrapper img')
    );
  }

  function openLightbox(index) {
    collectImages();
    currentIndex = index;
    showImage(currentIndex);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    // Clear src after transition
    setTimeout(() => { img.src = ''; }, 350);
  }

  function showImage(index) {
    if (!images.length) return;
    // Wrap around
    currentIndex = (index + images.length) % images.length;
    img.style.opacity = '0';
    img.style.transform = 'scale(0.94)';
    setTimeout(() => {
      img.src = images[currentIndex].src;
      img.alt = images[currentIndex].alt || 'Review';
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 150);
    if (counter) counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  // Wire up image click events (delegated, works even after slider re-render)
  document.addEventListener('click', (e) => {
    // Click on testimonial image wrapper → open at that index
    const wrapper = e.target.closest('.testimonial-img-wrapper');
    if (wrapper) {
      collectImages();
      const clickedImg = wrapper.querySelector('img');
      const index = images.indexOf(clickedImg);
      if (index !== -1) openLightbox(index);
      return;
    }

    // Click on "View Review" button → open the specified image directly
    const reviewBtn = e.target.closest('.open-review-lightbox');
    if (reviewBtn) {
      const src = reviewBtn.getAttribute('data-img');
      if (!src) return;
      // Show image directly without relying on the index list
      img.style.opacity = '0';
      img.style.transform = 'scale(0.94)';
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (counter) counter.textContent = '';
      setTimeout(() => {
        img.src = src;
        img.alt = 'Client Review';
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      }, 150);
    }
  });

  // Add cursor pointer hint on hover
  document.querySelectorAll('.testimonial-img-wrapper').forEach(w => {
    w.style.cursor = 'zoom-in';
  });

  // Style transition for image swap
  if (img) {
    img.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay)  overlay.addEventListener('click', closeLightbox);

  if (prevBtn) prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  if (nextBtn) nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showImage(currentIndex - 1);
    if (e.key === 'ArrowRight')  showImage(currentIndex + 1);
  });
}
