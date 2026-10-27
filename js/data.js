const translations = {
    ar: {
        site_title: "ركن أبو سعود البرمجي",
        nav_home: "الرئيسية",
        nav_projects: "التطبيقات والأدوات",
        nav_repo: "مستودع السورس",
        nav_features: "الأقسام",
        hero_badge: "يدعم iOS 15 - 17 & RootHide / TrollStore",
        hero_title: "عالم من التطبيقات، الأدوات، وتعديلات النظام الاحترافية 🚀",
        hero_subtitle: "منصتي الخاصة لعرض وتحميل أحدث تطبيقات iOS بصيغة IPA، وأدوات الجيلبريك (Tweaks)، ومشاريع الطرفية الذكية المصممة بأعلى أداء وأنظف كود.",
        btn_explore: "تصفح التحميلات",
        btn_add_repo: "إضافة السورس (Repo)",
        stat_apps: "حزمة منشورة",
        stat_clean: "أمان واستقرار",
        stat_native: "برمجة أصلية",
        feat_heading: "ماذا يقدم هذا الموقع؟ ✨",
        feat_subheading: "أقسام متكاملة ومشروحة بالصور لتسهيل الوصول لكل ما تحتاجه لجهازك بضغطة زر",
        feat1_title: "تطبيقات iOS متكاملة",
        feat1_desc: "تطبيقات مبنية بواجهات SwiftUI العربية، جاهزة للتثبيت المباشر عبر TrollStore بصلاحيات كاملة بدون انتهاء الشهادة.",
        feat2_title: "أدوات وتعديلات الجيلبريك",
        feat2_desc: "حزم DEB مبرمجة بدقة ومتوافقة مع بيئة Dopamine و RootHide لتحسين النظام وإصلاح الخطوط والطرفية.",
        feat3_title: "أدوات الطرفية والذكاء الاصطناعي",
        feat3_desc: "سكربتات وأنظمة سطر أوامر (CLI) متطورة تدمج الذكاء الاصطناعي وإدارة النظام مباشرة من تطبيق NewTerm.",
        proj_heading: "مكتبة التطبيقات والتعديلات 📦",
        proj_subheading: "اختر القسم المناسب أو ابحث عن الأداة لتحميلها مباشرة بصيغة IPA أو DEB",
        filter_all: "الكل",
        filter_ipa: "تطبيقات (.ipa)",
        filter_tweak: "تعديلات (.deb)",
        filter_cli: "أدوات طرفية (CLI)",
        search_placeholder: "ابحث عن تطبيق أو أداة...",
        repo_title: "أضف مستودع السورس الخاص بي 📲",
        repo_desc: "احصل على التحديثات التلقائية لجميع الأدوات والحزم مباشرة عبر مدير الحزم المفضل لديك في الجيلبريك (Sileo أو Zebra).",
        btn_copy: "نسخ الرابط",
        btn_copied: "تم النسخ!",
        add_sileo: "إضافة إلى Sileo",
        add_zebra: "إضافة إلى Zebra",
        footer_desc: "تطوير وبرمجة تطبيقات وأدوات iOS وتعديلات الأنظمة باحترافية.",
        footer_rights: "جميع الحقوق محفوظة © 2026 - صُمم بكل إتقان.",
        btn_download_now: "تحميل مباشر",
        btn_trollstore: "تثبيت TrollStore",
        btn_details: "التفاصيل",
        btn_soon: "قريباً على السورس",
        modal_changelog: "سجل التغييرات والمميزات:",
        modal_compatibility: "التوافق:",
        modal_size: "الحجم:"
    },
    en: {
        site_title: "Abu Saud Dev Hub",
        nav_home: "Home",
        nav_projects: "Apps & Tweaks",
        nav_repo: "Repository",
        nav_features: "Sections",
        hero_badge: "Supports iOS 15 - 17 & RootHide / TrollStore",
        hero_title: "A World of Pro iOS Apps, Tweaks & System Utilities 🚀",
        hero_subtitle: "My personal hub to showcase and download native iOS IPA apps, Jailbreak tweaks (.deb), and smart CLI tools crafted with clean code and top performance.",
        btn_explore: "Browse Downloads",
        btn_add_repo: "Add Repository",
        stat_apps: "Published packages",
        stat_clean: "Safe & Stable",
        stat_native: "Native Code",
        feat_heading: "What Does This Platform Offer? ✨",
        feat_subheading: "Well-organized, illustrated sections to help you grab everything your device needs in one click",
        feat1_title: "Full-Featured iOS Apps",
        feat1_desc: "Built with modern SwiftUI interfaces, ready for direct permanent installation via TrollStore with full entitlements.",
        feat2_title: "Jailbreak Tweaks & Mods",
        feat2_desc: "Precision-crafted DEB packages compatible with Dopamine & RootHide environments to enhance system & terminal.",
        feat3_title: "Terminal & AI CLI Tools",
        feat3_desc: "Advanced command-line agents and scripts integrating AI and local process management right inside NewTerm.",
        proj_heading: "Apps & Tweaks Library 📦",
        proj_subheading: "Filter by category or search for any tool to download directly as IPA or DEB",
        filter_all: "All",
        filter_ipa: "iOS Apps (.ipa)",
        filter_tweak: "Tweaks (.deb)",
        filter_cli: "CLI Tools",
        search_placeholder: "Search for an app or tweak...",
        repo_title: "Add My Official Repository 📲",
        repo_desc: "Get automatic updates for all my tweaks and packages directly through your favorite package manager (Sileo or Zebra).",
        btn_copy: "Copy URL",
        btn_copied: "Copied!",
        add_sileo: "Add to Sileo",
        add_zebra: "Add to Zebra",
        footer_desc: "Developing native iOS apps, jailbreak tweaks, and CLI tools.",
        footer_rights: "All Rights Reserved © 2026 - Crafted with precision.",
        btn_download_now: "Direct Download",
        btn_trollstore: "Install via TrollStore",
        btn_details: "Details",
        btn_soon: "Coming to the repo",
        modal_changelog: "Features & Changelog:",
        modal_compatibility: "Compatibility:",
        modal_size: "Size:"
    }
};

const projectsData = [
    {
        id: 1,
        category: "ipa",
        badge: "IPA / TrollStore",
        version: "v2.4.0",
        size: "14.2 MB",
        compat: "iOS 15.0 - 17.0",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=700&auto=format&fit=crop",
        soon: true,
        title: {
            ar: "محرر الأكواد الذكي Noni AI",
            en: "Noni AI Swift Code Editor"
        },
        desc: {
            ar: "تطبيق محرر أكواد متكامل لنظام iOS بواجهة SwiftUI عربية، يدعم التلوين البرمجي والربط مع الذكاء الاصطناعي وبناء المشاريع.",
            en: "A native iOS code editor built with SwiftUI, featuring syntax highlighting, AI assistant integration, and project management."
        },
        features: {
            ar: [
                "واجهة رسومية عربية احترافية بـ SwiftUI",
                "دعم كامل لصلاحيات TrollStore والوصول للملفات",
                "مساعد ذكاء اصطناعي مدمج لتصحيح وكتابة الأكواد"
            ],
            en: [
                "Professional native SwiftUI interface",
                "Full TrollStore entitlements & file system access",
                "Built-in AI assistant for code generation and debugging"
            ]
        }
    },
    {
        id: 2,
        category: "cli",
        badge: "CLI / DEB",
        version: "v7.1.0",
        size: "621 KB",
        compat: "Dopamine / RootHide",
        image: "assets/nonicode.png",
        downloadUrl: "debs/com.bensaud.nonicode_7.1.0_iphoneos-arm64e.deb",
        title: {
            ar: "أداة الطرفية الذكية Noni Code CLI",
            en: "Noni Code AI CLI Agent"
        },
        desc: {
            ar: "وكيل ذكاء اصطناعي يعمل مباشرة داخل الطرفية (NewTerm) مبني بلغة C و Objective-C و Swift لتنفيذ الأوامر وإدارة الملفات.",
            en: "Native C, Objective-C, and Swift command-line AI agent for iOS terminal with local process management and tool execution."
        },
        features: {
            ar: [
                "سرعة فائقة واستهلاك منخفض للذاكرة",
                "تنفيذ أوامر النظام وبناء الحزم تلقائياً",
                "يدعم الاتصال بنماذج الذكاء الاصطناعي المختلفة"
            ],
            en: [
                "Blazingly fast native binary performance",
                "Automated shell execution and package compilation",
                "Supports multiple LLM providers and custom proxies"
            ]
        }
    },
    {
        id: 3,
        category: "tweak",
        badge: "Tweak / RootHide",
        version: "v1.2.0",
        size: "850 KB",
        compat: "iOS 15 - 16.6.1 (RootHide)",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=700&auto=format&fit=crop",
        soon: true,
        title: {
            ar: "أداة تعريب الطرفية ArabicFix & Ghostty",
            en: "ArabicFix Terminal & Ghostty Hook"
        },
        desc: {
            ar: "أداة جيلبريك (Tweak) تقوم بإصلاح الحروف العربية المقطعة والمعكوسة داخل تطبيقات الطرفية مثل NewTerm 3 و Ghostty.",
            en: "Jailbreak tweak that hooks text rendering to properly shape and display RTL Arabic characters inside iOS terminals."
        },
        features: {
            ar: [
                "ربط وتشبيك الحروف العربية بشكل صحيح 100%",
                "دعم اتجاه الكتابة من اليمين لليسار داخل التيرمنال",
                "مبنية وموقعة خصيصاً لتوافق Dopamine RootHide"
            ],
            en: [
                "Complete Arabic letter shaping and ligatures",
                "Proper RTL alignment inside terminal emulators",
                "Compiled with Clang and patched for RootHide"
            ]
        }
    },
    {
        id: 4,
        category: "ipa",
        badge: "IPA / Utility",
        version: "v3.0.1",
        size: "11.5 MB",
        compat: "iOS 15.0 - 17.5",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=700&auto=format&fit=crop",
        soon: true,
        title: {
            ar: "تطبيق الطرفية المطور NoniTerm",
            en: "NoniTerm Pro Terminal"
        },
        desc: {
            ar: "تطبيق طرفية مخصص لنظام iOS مع أزرار اختصارات سريعة، ودعم كامل للغة العربية، وثيمات داكنة مريحة للعين.",
            en: "Customized iOS terminal emulator featuring quick-action bars, native Arabic rendering, and sleek dark themes."
        },
        features: {
            ar: [
                "شريط اختصارات علوي مخصص للأوامر المتكررة",
                "دعم فتح عدة نوافذ (Tabs) في نفس الوقت",
                "تثبيت مباشر عبر TrollStore بكامل الصلاحيات"
            ],
            en: [
                "Customizable shortcut bar for frequent commands",
                "Multi-tab session management",
                "Direct TrollStore installation with root/mobile spawn"
            ]
        }
    },
    {
        id: 5,
        category: "tweak",
        badge: "Tweak / RootHide",
        version: "v1.7.1+ar4",
        size: "1.1 MB",
        compat: "iOS 15 - 16.7 (RootHide)",
        image: "depictions/com.bensaud.copylogarabic/banner.png",
        downloadUrl: "debs/com.bensaud.copylogarabic_1.7.1+ar4_iphoneos-arm64e.deb",
        title: {
            ar: "CopyLog العربي — سجل الحافظة",
            en: "CopyLog Arabic — Clipboard History"
        },
        desc: {
            ar: "النسخة العربية الكاملة من مدير سجل الحافظة CopyLog: تعريب للقوائم ورسائل النسخ وصفحة الإعدادات، مع إيقاف الإشعار المزعج الذي يظهر أعلى الشاشة عند كل عملية نسخ.",
            en: "Full Arabic build of the CopyLog clipboard manager: localized menus, copy messages and settings page, with the noisy on-screen copy banner turned off."
        },
        features: {
            ar: [
                "تعريب كامل للواجهة وصفحة الإعدادات",
                "إيقاف لافتة «تم النسخ» أعلى الشاشة",
                "مبنية لـ Dopamine RootHide (iphoneos-arm64e)"
            ],
            en: [
                "Fully localized interface and settings page",
                "On-screen copy banner disabled",
                "Built for Dopamine RootHide (iphoneos-arm64e)"
            ]
        }
    }
];
