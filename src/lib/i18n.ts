export type Locale = "en" | "uk" | "pl" | "ru";

export const LOCALES: Locale[] = ["en", "uk", "pl", "ru"];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  uk: "UK",
  pl: "PL",
  ru: "RU",
};

export const LOCALE_PATH: Record<Locale, string> = {
  en: "/",
  uk: "/uk",
  pl: "/pl",
  ru: "/ru",
};

type Dict = {
  nav: { services: string; stack: string; portfolio: string; about: string; contact: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    rating: string;
    yearsLabel: string;
    projectsLabel: string;
    clientsLabel: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  stack: { title: string; subtitle: string; groups: { name: string; items: string[] }[] };
  portfolio: { title: string; subtitle: string; viewCase: string };
  cases: { title: string; tag: string; desc: string }[];
  testimonials: { title: string; subtitle: string; items: { name: string; role: string; text: string }[] };
  about: { title: string; p1: string; p2: string; p3: string };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    or: string;
    emailMe: string;
    success: string;
  };
  footer: { rights: string; built: string };
};

export const t: Record<Locale, Dict> = {
  en: {
    nav: { services: "Services", stack: "Stack", portfolio: "Portfolio", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Senior Laravel / PHP Engineer · Lviv, Ukraine",
      title1: "I build scalable web platforms",
      title2: "with Laravel, PHP, Vue, React & Next.js",
      subtitle:
        "8+ years shipping production backends, REST APIs, CRMs, e-commerce and WordPress / PrestaShop solutions for clients worldwide. Also React, Next.js & Nuxt.js.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See portfolio",
      rating: "5.0 / 5 average client rating",
      yearsLabel: "Years experience",
      projectsLabel: "Projects shipped",
      clientsLabel: "Happy clients",
    },
    services: {
      title: "Services",
      subtitle: "Backend-first engineering with a fullstack mindset.",
      items: [
        { title: "Laravel Application Development", desc: "Custom Laravel apps, Livewire & FilamentPHP admin panels, DDD architecture, queues & background jobs." },
        { title: "REST API Design & Integration", desc: "Documented REST APIs with Swagger, third-party integrations, OAuth, webhooks and Postman collections." },
        { title: "E-commerce Development", desc: "PrestaShop, Thirty Bees and WooCommerce stores — custom modules, themes, payment gateways and multi-store setups." },
        { title: "WordPress Engineering", desc: "Headless WP, ACF/Carbon Fields, custom plugins, Elementor blocks and multisite networks built to scale." },
        { title: "CRM / ERP & Admin Panels", desc: "Project-management systems, internal tools and dashboards on Laravel + Filament with role-based access." },
        { title: "Legacy Modernisation & DevOps", desc: "Docker setup, CI/CD pipelines, Linux server tuning, refactoring old PHP codebases into clean OOP." },
      ],
    },
    stack: {
      title: "Technology Stack",
      subtitle: "Battle-tested tools I use every day.",
      groups: [
        { name: "Backend", items: ["Laravel", "PHP", "Livewire", "FilamentPHP", "CodeIgniter", "Yii", "CakePHP", "REST API", "Swagger", "OOP", "DDD", "DTO"] },
        { name: "Frontend", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "TailwindCSS", "JS / jQuery", "SCSS / SASS", "Bootstrap", "Vite", "Webpack", "GSAP", "PUG", "BEM"] },
        { name: "CMS & E-commerce", items: ["WordPress", "ACF", "Carbon Fields", "Elementor", "Twig", "Smarty", "Blade", "PrestaShop", "Thirty Bees", "OpenCart"] },
        { name: "Database & DevOps", items: ["MySQL", "MariaDB", "SQL", "Docker", "Linux", "Git / GitHub / GitLab", "Composer", "Gulp", "CLI", "SSH", "FTP / SFTP"] },
      ],
    },
    portfolio: { title: "Selected Work", subtitle: "Recent cases across SaaS, CRM, e-commerce and content sites.", viewCase: "View case" },
    cases: [
      { title: "Project Management CRM", tag: "Laravel · FilamentPHP", desc: "Multi-tenant CRM/ERP with kanban boards, time tracking, invoicing and role-based access for a distributed agency." },
      { title: "Multi-store E-commerce Platform", tag: "PrestaShop · MySQL", desc: "Multi-store retail platform with custom modules, advanced filters and EU payment gateways. +38% conversion after rebuild." },
      { title: "REST API for Mobile App", tag: "Laravel · Swagger", desc: "Versioned REST API with OAuth2, queued jobs and Swagger docs powering an iOS & Android client (250k+ users)." },
      { title: "OpenHealth Patient Portal", tag: "Laravel · Livewire", desc: "Healthcare service with appointment scheduling, medical records and real-time notifications via Livewire." },
      { title: "Hotel Booking Network", tag: "WordPress · ACF", desc: "Multisite WordPress network for 3 boutique hotels with custom booking flow, multilingual content and Stripe payments." },
      { title: "InvoiceMaker SaaS", tag: "PHP · Vite · jQuery", desc: "Self-serve invoice builder with PDF export, recurring billing and a public REST API used by 4k+ freelancers." },
      { title: "Agro Marketplace", tag: "Laravel · Vite", desc: "B2B marketplace for agricultural crops with verified suppliers, escrow payments and logistics integration." },
      { title: "DataPulse Analytics SaaS", tag: "React · Next.js · TypeScript", desc: "Real-time analytics dashboard with interactive charts, role-based reporting and AI-powered insights for e-commerce operators." },
      { title: "EstateFlow Property Platform", tag: "Nuxt.js · Vue · TailwindCSS", desc: "Property listing platform with map search, mortgage calculator, virtual tours and CRM integration for real estate agencies." },
    ],
    testimonials: {
      title: "What clients say",
      subtitle: "Based on 67 verified reviews on Freelancehunt & LinkedIn.",
      items: [
        { name: "Andriy K.", role: "Founder, SaaS startup", text: "Roman rebuilt our Laravel backend from scratch. Clean architecture, perfect documentation, delivered ahead of schedule." },
        { name: "Marta P.", role: "Product Manager, e-commerce", text: "Best PrestaShop developer we've worked with. Took ownership of complex migrations and kept the store live the whole time." },
        { name: "Tomasz W.", role: "CTO, agency", text: "Senior-level engineer who actually communicates. Our API project shipped two weeks early and passed security audit on first try." },
      ],
    },
    about: {
      title: "About me",
      p1: "I'm Roman Matviy, a senior fullstack engineer from Lviv, Ukraine, with 8+ years of commercial experience in Laravel, PHP, Vue and WordPress / PrestaShop ecosystems.",
      p2: "I've shipped 60+ production projects — from REST APIs powering mobile apps to multi-tenant CRMs and high-traffic e-commerce stores. I care about clean architecture, readable code and predictable delivery.",
      p3: "Available for long-term contracts, fixed-scope projects and senior-level consulting. Let's talk about your roadmap.",
    },
    contact: {
      title: "Let's build something",
      subtitle: "Tell me about your project. I usually reply within a few hours.",
      name: "Your name",
      email: "Email",
      message: "Briefly describe your project, stack and timeline",
      submit: "Send message",
      or: "or",
      emailMe: "Email me directly",
      success: "Opening your email client…",
    },
    footer: { rights: "All rights reserved.", built: "Built with Laravel mindset, shipped on the edge." },
  },

  uk: {
    nav: { services: "Послуги", stack: "Стек", portfolio: "Портфоліо", about: "Про мене", contact: "Контакт" },
    hero: {
      eyebrow: "Senior Laravel / PHP розробник · Львів, Україна",
      title1: "Створюю масштабовані вебплатформи",
      title2: "на Laravel, PHP, Vue, React та Next.js",
      subtitle:
        "Понад 8 років досвіду у розробці продакшн-бекендів, REST API, CRM, e-commerce та рішень на WordPress / PrestaShop для клієнтів з усього світу. Також React, Next.js та Nuxt.js.",
      ctaPrimary: "Розпочати проєкт",
      ctaSecondary: "Дивитись портфоліо",
      rating: "5.0 / 5 — середня оцінка клієнтів",
      yearsLabel: "Років досвіду",
      projectsLabel: "Реалізованих проєктів",
      clientsLabel: "Задоволених клієнтів",
    },
    services: {
      title: "Послуги",
      subtitle: "Бекенд у пріоритеті, але мислю фулстек.",
      items: [
        { title: "Розробка на Laravel", desc: "Кастомні Laravel-додатки, адмінки на Livewire та FilamentPHP, DDD-архітектура, черги та фонові задачі." },
        { title: "REST API та інтеграції", desc: "REST API з документацією у Swagger, інтеграції зі сторонніми сервісами, OAuth, webhooks, Postman колекції." },
        { title: "E-commerce розробка", desc: "Магазини на PrestaShop, Thirty Bees та WooCommerce — модулі, теми, платіжні шлюзи, мультимагазин." },
        { title: "WordPress інженерія", desc: "Headless WP, ACF/Carbon Fields, кастомні плагіни, блоки Elementor, multisite-мережі." },
        { title: "CRM / ERP та адмінпанелі", desc: "Системи управління проєктами, внутрішні інструменти та дашборди на Laravel + Filament з ролями." },
        { title: "Рефакторинг та DevOps", desc: "Налаштування Docker, CI/CD, тюнінг Linux-серверів, рефакторинг legacy PHP у чистий OOP." },
      ],
    },
    stack: {
      title: "Технологічний стек",
      subtitle: "Перевірені інструменти, якими користуюся щодня.",
      groups: [
        { name: "Бекенд", items: ["Laravel", "PHP", "Livewire", "FilamentPHP", "CodeIgniter", "Yii", "CakePHP", "REST API", "Swagger", "OOP", "DDD", "DTO"] },
        { name: "Фронтенд", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "TailwindCSS", "JS / jQuery", "SCSS / SASS", "Bootstrap", "Vite", "Webpack", "GSAP", "PUG", "BEM"] },
        { name: "CMS та E-commerce", items: ["WordPress", "ACF", "Carbon Fields", "Elementor", "Twig", "Smarty", "Blade", "PrestaShop", "Thirty Bees", "OpenCart"] },
        { name: "База даних та DevOps", items: ["MySQL", "MariaDB", "SQL", "Docker", "Linux", "Git / GitHub / GitLab", "Composer", "Gulp", "CLI", "SSH", "FTP / SFTP"] },
      ],
    },
    portfolio: { title: "Обрані роботи", subtitle: "Кейси з SaaS, CRM, e-commerce та контентних сайтів.", viewCase: "Деталі кейсу" },
    cases: [
      { title: "CRM для управління проєктами", tag: "Laravel · FilamentPHP", desc: "Multi-tenant CRM/ERP з kanban, обліком часу, рахунками та ролями для розподіленого агентства." },
      { title: "Мультимагазинна e-commerce платформа", tag: "PrestaShop · MySQL", desc: "Мультимагазин з кастомними модулями, фільтрами та EU-платежами. +38% конверсії після перебудови." },
      { title: "REST API для мобільного додатку", tag: "Laravel · Swagger", desc: "Версійне REST API з OAuth2, чергами та Swagger-документацією для iOS/Android клієнта (250k+ користувачів)." },
      { title: "OpenHealth — портал пацієнта", tag: "Laravel · Livewire", desc: "Медичний сервіс із записом на прийом, історією та real-time сповіщеннями на Livewire." },
      { title: "Мережа бронювання готелів", tag: "WordPress · ACF", desc: "Multisite-мережа для 3 бутік-готелів — кастомне бронювання, мультимова та оплати через Stripe." },
      { title: "InvoiceMaker SaaS", tag: "PHP · Vite · jQuery", desc: "Self-serve конструктор рахунків з PDF-експортом, підписками та публічним REST API. 4k+ фрилансерів." },
      { title: "Аграрний маркетплейс", tag: "Laravel · Vite", desc: "B2B маркетплейс для зернових з верифікацією постачальників, ескроу та логістикою." },
      { title: "DataPulse Analytics SaaS", tag: "React · Next.js · TypeScript", desc: "Дашборд аналітики в реальному часі з інтерактивними графіками, рольовою звітністю та AI-інсайтами для e-commerce." },
      { title: "EstateFlow — платформа нерухомості", tag: "Nuxt.js · Vue · TailwindCSS", desc: "Платформа оголошень про нерухомість з пошуком на карті, іпотечним калькулятором, віртуальними турами та CRM для агентств." },
    ],
    testimonials: {
      title: "Відгуки клієнтів",
      subtitle: "На основі 67 перевірених відгуків на Freelancehunt та LinkedIn.",
      items: [
        { name: "Андрій К.", role: "Засновник SaaS", text: "Роман переписав наш Laravel-бекенд з нуля. Чиста архітектура, ідеальна документація, здав раніше дедлайну." },
        { name: "Марта П.", role: "Product Manager", text: "Найкращий PrestaShop-розробник, з яким ми працювали. Магазин не падав під час складних міграцій." },
        { name: "Tomasz W.", role: "CTO агентства", text: "Senior-інженер, який вміє комунікувати. API-проєкт здав на два тижні раніше і пройшов аудит безпеки з першого разу." },
      ],
    },
    about: {
      title: "Про мене",
      p1: "Я Роман Матвій — senior fullstack-інженер зі Львова з понад 8-річним комерційним досвідом у Laravel, PHP, Vue та екосистемах WordPress / PrestaShop.",
      p2: "Реалізував 60+ продакшн-проєктів: від REST API для мобільних застосунків до multi-tenant CRM та highload e-commerce. Дбаю про чисту архітектуру та передбачувані дедлайни.",
      p3: "Відкритий до довгострокових контрактів, fixed-scope проєктів та senior-консалтингу. Поговорімо про ваш roadmap.",
    },
    contact: {
      title: "Створімо щось разом",
      subtitle: "Розкажіть про проєкт. Зазвичай відповідаю протягом кількох годин.",
      name: "Ваше ім'я",
      email: "Email",
      message: "Коротко про проєкт, стек та терміни",
      submit: "Надіслати",
      or: "або",
      emailMe: "Написати на email",
      success: "Відкриваю поштовий клієнт…",
    },
    footer: { rights: "Усі права захищені.", built: "З мисленням Laravel, доставлено на edge." },
  },

  pl: {
    nav: { services: "Usługi", stack: "Stack", portfolio: "Portfolio", about: "O mnie", contact: "Kontakt" },
    hero: {
      eyebrow: "Senior Laravel / PHP Developer · Lwów, Ukraina",
      title1: "Buduję skalowalne platformy web",
      title2: "z Laravel, PHP, Vue, React i Next.js",
      subtitle:
        "Ponad 7 lat doświadczenia w tworzeniu produkcyjnych backendów, REST API, CRM, e-commerce oraz rozwiązań WordPress / PrestaShop dla klientów z całego świata. Także React, Next.js i Nuxt.js.",
      ctaPrimary: "Rozpocznij projekt",
      ctaSecondary: "Zobacz portfolio",
      rating: "5.0 / 5 — średnia ocena klientów",
      yearsLabel: "Lat doświadczenia",
      projectsLabel: "Zrealizowanych projektów",
      clientsLabel: "Zadowolonych klientów",
    },
    services: {
      title: "Usługi",
      subtitle: "Backend w priorytecie, ale myślę fullstack.",
      items: [
        { title: "Aplikacje Laravel", desc: "Customowe aplikacje Laravel, panele Livewire i FilamentPHP, architektura DDD, kolejki i zadania w tle." },
        { title: "REST API i integracje", desc: "Udokumentowane REST API w Swagger, integracje z zewnętrznymi serwisami, OAuth, webhooki, Postman." },
        { title: "E-commerce", desc: "Sklepy na PrestaShop, Thirty Bees i WooCommerce — moduły, motywy, bramki płatności, multi-store." },
        { title: "Inżynieria WordPress", desc: "Headless WP, ACF/Carbon Fields, własne pluginy, bloki Elementor, sieci multisite." },
        { title: "CRM / ERP i panele admin", desc: "Systemy zarządzania projektami, narzędzia wewnętrzne i dashboardy na Laravel + Filament z rolami." },
        { title: "Modernizacja legacy i DevOps", desc: "Docker, CI/CD, tuning serwerów Linux, refaktoring starego PHP do czystego OOP." },
      ],
    },
    stack: {
      title: "Stack technologiczny",
      subtitle: "Sprawdzone narzędzia, których używam codziennie.",
      groups: [
        { name: "Backend", items: ["Laravel", "PHP", "Livewire", "FilamentPHP", "CodeIgniter", "Yii", "CakePHP", "REST API", "Swagger", "OOP", "DDD", "DTO"] },
        { name: "Frontend", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "TailwindCSS", "JS / jQuery", "SCSS / SASS", "Bootstrap", "Vite", "Webpack", "GSAP", "PUG", "BEM"] },
        { name: "CMS i E-commerce", items: ["WordPress", "ACF", "Carbon Fields", "Elementor", "Twig", "Smarty", "Blade", "PrestaShop", "Thirty Bees", "OpenCart"] },
        { name: "Baza danych i DevOps", items: ["MySQL", "MariaDB", "SQL", "Docker", "Linux", "Git / GitHub / GitLab", "Composer", "Gulp", "CLI", "SSH", "FTP / SFTP"] },
      ],
    },
    portfolio: { title: "Wybrane prace", subtitle: "Niedawne projekty: SaaS, CRM, e-commerce i strony contentowe.", viewCase: "Zobacz case" },
    cases: [
      { title: "CRM do zarządzania projektami", tag: "Laravel · FilamentPHP", desc: "Multi-tenant CRM/ERP z tablicami kanban, time trackingiem, fakturami i rolami dla rozproszonego agency." },
      { title: "Platforma e-commerce multi-store", tag: "PrestaShop · MySQL", desc: "Multi-store z modułami, zaawansowanymi filtrami i płatnościami EU. +38% konwersji po przebudowie." },
      { title: "REST API dla aplikacji mobilnej", tag: "Laravel · Swagger", desc: "Wersjonowane REST API z OAuth2, kolejkami i dokumentacją Swagger dla klienta iOS/Android (250k+ użytkowników)." },
      { title: "OpenHealth — portal pacjenta", tag: "Laravel · Livewire", desc: "Usługa medyczna z umawianiem wizyt, historią i powiadomieniami real-time na Livewire." },
      { title: "Sieć rezerwacji hoteli", tag: "WordPress · ACF", desc: "Sieć multisite dla 3 butikowych hoteli — własny flow rezerwacji, multilang, Stripe." },
      { title: "InvoiceMaker SaaS", tag: "PHP · Vite · jQuery", desc: "Self-serve kreator faktur z eksportem PDF, subskrypcjami i publicznym REST API. 4k+ freelancerów." },
      { title: "Marketplace agro", tag: "Laravel · Vite", desc: "B2B marketplace zbóż z weryfikacją dostawców, escrow i integracją logistyki." },
      { title: "DataPulse Analytics SaaS", tag: "React · Next.js · TypeScript", desc: "Dashboard analityczny w czasie rzeczywistym z interaktywnymi wykresami, raportowaniem rolowym i AI insights dla e-commerce." },
      { title: "EstateFlow — platforma nieruchomości", tag: "Nuxt.js · Vue · TailwindCSS", desc: "Platforma ogłoszeń nieruchomości z wyszukiwaniem na mapie, kalkulatorem kredytowym, wirtualnymi spacerami i CRM dla agencji." },
    ],
    testimonials: {
      title: "Co mówią klienci",
      subtitle: "Na podstawie 67 zweryfikowanych opinii na Freelancehunt i LinkedIn.",
      items: [
        { name: "Andriy K.", role: "Założyciel SaaS", text: "Roman przepisał nasz backend Laravel od zera. Czysta architektura, dokumentacja, oddany przed deadline." },
        { name: "Marta P.", role: "Product Manager", text: "Najlepszy developer PrestaShop, z jakim pracowaliśmy. Sklep nie padł podczas złożonych migracji." },
        { name: "Tomasz W.", role: "CTO agencji", text: "Senior, który naprawdę komunikuje. Projekt API oddany dwa tygodnie wcześniej, audyt bezpieczeństwa zdany za pierwszym razem." },
      ],
    },
    about: {
      title: "O mnie",
      p1: "Jestem Roman Matviy — senior fullstack engineer ze Lwowa, z ponad 8-letnim komercyjnym doświadczeniem w Laravel, PHP, Vue i ekosystemach WordPress / PrestaShop.",
      p2: "Wdrożyłem 60+ projektów produkcyjnych — od REST API zasilających aplikacje mobilne po multi-tenant CRM i highload e-commerce. Dbam o czystą architekturę i terminowość.",
      p3: "Otwarty na długoterminowe kontrakty, projekty fixed-scope i senior consulting. Pogadajmy o Twoim roadmapie.",
    },
    contact: {
      title: "Zbudujmy coś razem",
      subtitle: "Opowiedz o projekcie. Zwykle odpowiadam w kilka godzin.",
      name: "Imię",
      email: "Email",
      message: "Krótko o projekcie, stacku i terminach",
      submit: "Wyślij",
      or: "lub",
      emailMe: "Napisz na email",
      success: "Otwieram klienta pocztowego…",
    },
    footer: { rights: "Wszelkie prawa zastrzeżone.", built: "Zbudowane z myśleniem Laravel, hostowane na edge." },
  },

  ru: {
    nav: { services: "Услуги", stack: "Стек", portfolio: "Портфолио", about: "Обо мне", contact: "Контакт" },
    hero: {
      eyebrow: "Senior Laravel / PHP разработчик · Львов, Украина",
      title1: "Создаю масштабируемые веб-платформы",
      title2: "на Laravel, PHP, Vue, React и Next.js",
      subtitle:
        "Более 8 лет опыта в разработке production-бэкендов, REST API, CRM, e-commerce и решений на WordPress / PrestaShop для клиентов по всему миру. Также React, Next.js и Nuxt.js.",
      ctaPrimary: "Начать проект",
      ctaSecondary: "Смотреть портфолио",
      rating: "5.0 / 5 — средняя оценка клиентов",
      yearsLabel: "Лет опыта",
      projectsLabel: "Реализованных проектов",
      clientsLabel: "Довольных клиентов",
    },
    services: {
      title: "Услуги",
      subtitle: "Бэкенд в приоритете, мышление — fullstack.",
      items: [
        { title: "Разработка на Laravel", desc: "Кастомные Laravel-приложения, админки на Livewire и FilamentPHP, DDD-архитектура, очереди и фоновые задачи." },
        { title: "REST API и интеграции", desc: "REST API с документацией Swagger, интеграции, OAuth, webhooks, Postman-коллекции." },
        { title: "E-commerce разработка", desc: "Магазины на PrestaShop, Thirty Bees и WooCommerce — модули, темы, платёжные шлюзы, мультимагазин." },
        { title: "WordPress инженерия", desc: "Headless WP, ACF/Carbon Fields, кастомные плагины, блоки Elementor, multisite-сети." },
        { title: "CRM / ERP и админ-панели", desc: "Системы управления проектами, внутренние инструменты и дашборды на Laravel + Filament с ролями." },
        { title: "Рефакторинг и DevOps", desc: "Docker, CI/CD, тюнинг Linux-серверов, рефакторинг legacy PHP в чистый OOP." },
      ],
    },
    stack: {
      title: "Технологический стек",
      subtitle: "Проверенные инструменты, которыми пользуюсь ежедневно.",
      groups: [
        { name: "Бэкенд", items: ["Laravel", "PHP", "Livewire", "FilamentPHP", "CodeIgniter", "Yii", "CakePHP", "REST API", "Swagger", "OOP", "DDD", "DTO"] },
        { name: "Фронтенд", items: ["React", "Next.js", "Vue.js", "Nuxt.js", "TypeScript", "TailwindCSS", "JS / jQuery", "SCSS / SASS", "Bootstrap", "Vite", "Webpack", "GSAP", "PUG", "BEM"] },
        { name: "CMS и E-commerce", items: ["WordPress", "ACF", "Carbon Fields", "Elementor", "Twig", "Smarty", "Blade", "PrestaShop", "Thirty Bees", "OpenCart"] },
        { name: "База данных и DevOps", items: ["MySQL", "MariaDB", "SQL", "Docker", "Linux", "Git / GitHub / GitLab", "Composer", "Gulp", "CLI", "SSH", "FTP / SFTP"] },
      ],
    },
    portfolio: { title: "Избранные работы", subtitle: "Кейсы из SaaS, CRM, e-commerce и контентных сайтов.", viewCase: "Детали кейса" },
    cases: [
      { title: "CRM для управления проектами", tag: "Laravel · FilamentPHP", desc: "Multi-tenant CRM/ERP с kanban, учётом времени, счетами и ролями для распределённого агентства." },
      { title: "Мультимагазинная e-commerce платформа", tag: "PrestaShop · MySQL", desc: "Мультимагазин с модулями, фильтрами и EU-платежами. +38% конверсии после перестройки." },
      { title: "REST API для мобильного приложения", tag: "Laravel · Swagger", desc: "Версионное REST API с OAuth2, очередями и Swagger-документацией для iOS/Android клиента (250k+ юзеров)." },
      { title: "OpenHealth — портал пациента", tag: "Laravel · Livewire", desc: "Медицинский сервис с записью на приём, историей и real-time уведомлениями на Livewire." },
      { title: "Сеть бронирования отелей", tag: "WordPress · ACF", desc: "Multisite-сеть для 3 бутик-отелей: кастомное бронирование, мультиязык, Stripe." },
      { title: "InvoiceMaker SaaS", tag: "PHP · Vite · jQuery", desc: "Self-serve конструктор счетов с PDF-экспортом, подписками и публичным REST API. 4k+ фрилансеров." },
      { title: "Аграрный маркетплейс", tag: "Laravel · Vite", desc: "B2B-маркетплейс зерновых с верификацией поставщиков, эскроу и логистикой." },
      { title: "DataPulse Analytics SaaS", tag: "React · Next.js · TypeScript", desc: "Дашборд аналитики в реальном времени с интерактивными графиками, ролевой отчётностью и AI-инсайтами для e-commerce." },
      { title: "EstateFlow — платформа недвижимости", tag: "Nuxt.js · Vue · TailwindCSS", desc: "Платформа объявлений о недвижимости с поиском на карте, ипотечным калькулятором, виртуальными турами и CRM для агентств." },
    ],
    testimonials: {
      title: "Отзывы клиентов",
      subtitle: "На основе 67 проверенных отзывов на Freelancehunt и LinkedIn.",
      items: [
        { name: "Андрей К.", role: "Основатель SaaS", text: "Роман переписал наш Laravel-бэкенд с нуля. Чистая архитектура, идеальная документация, сдал раньше срока." },
        { name: "Марта П.", role: "Product Manager", text: "Лучший PrestaShop-разработчик, с которым мы работали. Магазин не падал во время сложных миграций." },
        { name: "Tomasz W.", role: "CTO агентства", text: "Senior, который умеет коммуницировать. API-проект сдан на две недели раньше, аудит безопасности — с первого раза." },
      ],
    },
    about: {
      title: "Обо мне",
      p1: "Я Роман Матвий — senior fullstack-инженер из Львова с более чем 7-летним коммерческим опытом в Laravel, PHP, Vue и экосистемах WordPress / PrestaShop.",
      p2: "Реализовал 60+ production-проектов: от REST API для мобильных приложений до multi-tenant CRM и highload e-commerce. Забочусь о чистой архитектуре и предсказуемых сроках.",
      p3: "Открыт к долгосрочным контрактам, fixed-scope проектам и senior-консалтингу. Поговорим о вашем roadmap.",
    },
    contact: {
      title: "Создадим что-то вместе",
      subtitle: "Расскажите о проекте. Обычно отвечаю в течение нескольких часов.",
      name: "Ваше имя",
      email: "Email",
      message: "Кратко о проекте, стеке и сроках",
      submit: "Отправить",
      or: "или",
      emailMe: "Написать на email",
      success: "Открываю почтовый клиент…",
    },
    footer: { rights: "Все права защищены.", built: "С мышлением Laravel, доставлено на edge." },
  },
};
