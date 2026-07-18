import type { Locale } from "./i18n";

export type Extras = {
  mobileOpen: string;
  contactsTitle: string;
  scheduleCall: string;
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; desc: string; duration: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  leadForm: {
    name: string;
    email: string;
    message: string;
    budget: string;
    timeline: string;
    submit: string;
    sending: string;
    or: string;
    emailMe: string;
    success: string;
    error: string;
    budgetOptions: string[];
    timelineOptions: string[];
  };
  caseDetail: {
    backToPortfolio: string;
    industry: string;
    duration: string;
    role: string;
    techStack: string;
    challenge: string;
    solution: string;
    result: string;
    keyMetrics: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    similar: string;
  };
  floatingLabel: string;
};

export const extras: Record<Locale, Extras> = {
  en: {
    mobileOpen: "Open menu",
    contactsTitle: "Reach me on",
    scheduleCall: "Book a 15-min call",
    floatingLabel: "Quick contact",
    process: {
      title: "How I work",
      subtitle: "Clear weekly milestones, async-first communication, no surprises.",
      steps: [
        { title: "Discovery", desc: "30-min intro call, requirements scoping, tech-stack audit, success criteria.", duration: "Week 1" },
        { title: "Proposal", desc: "Fixed-price or hourly proposal with milestones, architecture diagram and risk register.", duration: "Week 1" },
        { title: "Development", desc: "1-week sprints, demo every Friday, GitHub PRs, staging deploy, CI/CD pipeline.", duration: "Weeks 2-N" },
        { title: "Launch & support", desc: "Production deploy, monitoring, docs handover, optional retainer for support.", duration: "Final week +" },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Things clients usually ask before we start.",
      items: [
        { q: "How much does a typical project cost?", a: "Small: $3–5k. Mid Laravel/PrestaShop: $8–25k. Hourly: $60–85. Fixed quote after discovery." },
        { q: "How fast can you start and ship?", a: "Discovery in 48h, kickoff in 1–2 weeks. MVPs 4–8 weeks, platforms 3–6 months." },
        { q: "Do you sign NDAs?", a: "Yes, mutual NDA before any work. No public references without permission." },
        { q: "Fixed-price or hourly?", a: "Fixed for scoped work; hourly for ongoing dev. Agreed before kickoff." },
        { q: "What's your guarantee?", a: "30-day bug-fix warranty. Critical bugs fixed same business day." },
        { q: "Do you offer post-launch support?", a: "Optional monthly retainer, usually 5–20 h/month." },
        { q: "Can you take over a legacy codebase?", a: "Yes. Start with a paid 1–2 day audit and written plan." },
        { q: "How do payments work?", a: "Wire, USDC, Wise, PayPal. Fixed: 30/40/30. Hourly: Stripe every 2 weeks." },
      ],
    },
    leadForm: {
      name: "Your name",
      email: "Work email",
      message: "Briefly describe your project, stack and timeline",
      budget: "Budget (optional)",
      timeline: "Timeline (optional)",
      submit: "Send message",
      sending: "Sending…",
      or: "or",
      emailMe: "Email me directly",
      success: "Thanks! I'll get back to you within a few hours.",
      error: "Could not send. Please email me directly.",
      budgetOptions: ["< $5k", "$5–15k", "$15–30k", "$30–60k", "$60k+"],
      timelineOptions: ["ASAP", "1–2 weeks", "1 month", "2–3 months", "Flexible"],
    },
    caseDetail: {
      backToPortfolio: "Back to portfolio",
      industry: "Industry",
      duration: "Duration",
      role: "My role",
      techStack: "Technology stack",
      challenge: "Challenge",
      solution: "Solution",
      result: "Result",
      keyMetrics: "Key metrics",
      ctaTitle: "Have a similar project in mind?",
      ctaSubtitle: "I usually reply within a few hours.",
      ctaButton: "Start a project",
      similar: "Other recent work",
    },
  },
  uk: {
    mobileOpen: "Відкрити меню",
    contactsTitle: "Зв'яжіться зі мною",
    scheduleCall: "Забронювати 15-хв дзвінок",
    floatingLabel: "Швидкий контакт",
    process: {
      title: "Як я працюю",
      subtitle: "Чіткі тижневі мілстоуни, async-комунікація, без сюрпризів.",
      steps: [
        { title: "Discovery", desc: "30-хв вступний дзвінок, збір вимог, аудит стеку, критерії успіху.", duration: "Тиждень 1" },
        { title: "Пропозиція", desc: "Fixed-price або hourly пропозиція з мілстоунами, діаграмою архітектури та ризиками.", duration: "Тиждень 1" },
        { title: "Розробка", desc: "Спринти по тижню, демо щоп'ятниці, GitHub PR, staging-деплой, CI/CD.", duration: "Тижні 2–N" },
        { title: "Запуск та підтримка", desc: "Production-деплой, моніторинг, передача документації, опціональний ретейнер.", duration: "Фінальний тиждень+" },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "Те, що клієнти зазвичай питають перед стартом.",
      items: [
        { q: "Скільки коштує типовий проєкт?", a: "Малі: $3–5k. Середні Laravel/PrestaShop: $8–25k. Hourly: $60–85/год. Fixed-price після discovery." },
        { q: "Як швидко можеш стартувати?", a: "Discovery за 48 год, кікоф 1–2 тижні. MVP — 4–8 тижнів, платформи 3–6 місяців." },
        { q: "Підписуєш NDA?", a: "Так, взаємне NDA до старту. Публічно не згадую клієнтів без дозволу." },
        { q: "Fixed-price чи hourly?", a: "Fixed для чіткого скоупу, hourly для ongoing-розробки. Домовляємось до старту." },
        { q: "Які гарантії?", a: "30 днів bug-fix warranty. Критичні баги — в той самий день." },
        { q: "Підтримка після релізу?", a: "Опціональний ретейнер, зазвичай 5–20 год/місяць." },
        { q: "Можеш взяти legacy-код?", a: "Так. Починаємо з платного аудиту на 1–2 дні з планом." },
        { q: "Як працюють платежі?", a: "Wire, USDC, Wise, PayPal. Fixed: 30/40/30. Hourly: Stripe раз на 2 тижні." },
      ],
    },
    leadForm: {
      name: "Ваше ім'я",
      email: "Робочий email",
      message: "Коротко про проєкт, стек і терміни",
      budget: "Бюджет (опційно)",
      timeline: "Терміни (опційно)",
      submit: "Надіслати",
      sending: "Надсилаю…",
      or: "або",
      emailMe: "Написати на email",
      success: "Дякую! Відповім протягом кількох годин.",
      error: "Не вдалось відправити. Напиши на email.",
      budgetOptions: ["< $5k", "$5–15k", "$15–30k", "$30–60k", "$60k+"],
      timelineOptions: ["Якнайшвидше", "1–2 тижні", "1 місяць", "2–3 місяці", "Гнучкі"],
    },
    caseDetail: {
      backToPortfolio: "Назад до портфоліо",
      industry: "Галузь",
      duration: "Тривалість",
      role: "Моя роль",
      techStack: "Технологічний стек",
      challenge: "Виклик",
      solution: "Рішення",
      result: "Результат",
      keyMetrics: "Ключові метрики",
      ctaTitle: "Маєш схожий проєкт?",
      ctaSubtitle: "Зазвичай відповідаю за кілька годин.",
      ctaButton: "Розпочати проєкт",
      similar: "Інші роботи",
    },
  },
  pl: {
    mobileOpen: "Otwórz menu",
    contactsTitle: "Skontaktuj się",
    scheduleCall: "Zarezerwuj 15-min rozmowę",
    floatingLabel: "Szybki kontakt",
    process: {
      title: "Jak pracuję",
      subtitle: "Tygodniowe milestone'y, komunikacja async, bez niespodzianek.",
      steps: [
        { title: "Discovery", desc: "30-min rozmowa, zbieranie wymagań, audyt stacku, kryteria sukcesu.", duration: "Tydzień 1" },
        { title: "Propozycja", desc: "Fixed-price lub hourly z milestone'ami, diagramem architektury i rejestrem ryzyk.", duration: "Tydzień 1" },
        { title: "Rozwój", desc: "Sprinty tygodniowe, demo w piątki, PR-y GitHub, staging deploy, CI/CD.", duration: "Tygodnie 2–N" },
        { title: "Wdrożenie i wsparcie", desc: "Production deploy, monitoring, przekazanie dokumentacji, opcjonalny retainer.", duration: "Ostatni tydzień+" },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "To, o co klienci pytają przed startem.",
      items: [
        { q: "Ile kosztuje typowy projekt?", a: "Małe: $3–5k. Średnie Laravel/PrestaShop: $8–25k. Hourly: $60–85/godz. Fixed-price po discovery." },
        { q: "Jak szybko mogę zacząć?", a: "Discovery w 48h, kickoff 1–2 tygodnie. MVP 4–8 tygodni, platformy 3–6 miesięcy." },
        { q: "Czy podpisujesz NDA?", a: "Tak, wzajemne NDA przed startem. Bez publicznych referencji bez zgody." },
        { q: "Fixed-price czy hourly?", a: "Fixed dla dobrze opisanej pracy, hourly dla ongoing rozwoju." },
        { q: "Gwarancja?", a: "30 dni bug-fix warranty. Krytyczne bugi tego samego dnia." },
        { q: "Wsparcie po wdrożeniu?", a: "Opcjonalny retainer, zwykle 5–20 godz./miesiąc." },
        { q: "Czy weźmiesz stary codebase?", a: "Tak. Start od płatnego audytu 1–2 dni z planem." },
        { q: "Jak płatności?", a: "Wire, USDC, Wise, PayPal. Fixed: 30/40/30. Hourly: Stripe co 2 tygodnie." },
      ],
    },
    leadForm: {
      name: "Imię",
      email: "Email służbowy",
      message: "Krótko o projekcie, stacku i terminach",
      budget: "Budżet (opcjonalnie)",
      timeline: "Termin (opcjonalnie)",
      submit: "Wyślij",
      sending: "Wysyłam…",
      or: "lub",
      emailMe: "Napisz mailem",
      success: "Dzięki! Odpowiem w ciągu kilku godzin.",
      error: "Nie wysłano. Napisz mailem.",
      budgetOptions: ["< $5k", "$5–15k", "$15–30k", "$30–60k", "$60k+"],
      timelineOptions: ["Pilne", "1–2 tygodnie", "1 miesiąc", "2–3 miesiące", "Elastyczne"],
    },
    caseDetail: {
      backToPortfolio: "Powrót do portfolio",
      industry: "Branża",
      duration: "Czas trwania",
      role: "Moja rola",
      techStack: "Stack technologiczny",
      challenge: "Wyzwanie",
      solution: "Rozwiązanie",
      result: "Rezultat",
      keyMetrics: "Kluczowe metryki",
      ctaTitle: "Masz podobny projekt?",
      ctaSubtitle: "Zwykle odpowiadam w kilka godzin.",
      ctaButton: "Rozpocznij projekt",
      similar: "Inne prace",
    },
  },
  ru: {
    mobileOpen: "Открыть меню",
    contactsTitle: "Свяжитесь со мной",
    scheduleCall: "Забронировать 15-мин звонок",
    floatingLabel: "Быстрый контакт",
    process: {
      title: "Как я работаю",
      subtitle: "Чёткие недельные майлстоуны, async-коммуникация, без сюрпризов.",
      steps: [
        { title: "Discovery", desc: "30-мин звонок, сбор требований, аудит стека, критерии успеха.", duration: "Неделя 1" },
        { title: "Предложение", desc: "Fixed-price или hourly с майлстоунами, диаграммой архитектуры и рисками.", duration: "Неделя 1" },
        { title: "Разработка", desc: "Недельные спринты, демо по пятницам, PR-ы GitHub, staging, CI/CD.", duration: "Недели 2–N" },
        { title: "Запуск и поддержка", desc: "Production-деплой, мониторинг, передача документации, опциональный ретейнер.", duration: "Финальная неделя+" },
      ],
    },
    faq: {
      title: "FAQ",
      subtitle: "То, что клиенты обычно спрашивают до старта.",
      items: [
        { q: "Сколько стоит типичный проект?", a: "Малые: $3–5k. Средние Laravel/PrestaShop: $8–25k. Hourly: $60–85/час. Fixed-price после discovery." },
        { q: "Как быстро могу начать?", a: "Discovery за 48ч, кикофф 1–2 недели. MVP 4–8 недель, платформы 3–6 месяцев." },
        { q: "Подписываешь NDA?", a: "Да, взаимное NDA до старта. Публично не упоминаю клиентов без разрешения." },
        { q: "Fixed-price или hourly?", a: "Fixed для чёткого скоупа, hourly для ongoing-разработки." },
        { q: "Гарантии?", a: "30 дней bug-fix warranty. Критичные баги — в тот же день." },
        { q: "Поддержка после релиза?", a: "Опциональный ретейнер, обычно 5–20 ч/месяц." },
        { q: "Возьмёшь legacy-код?", a: "Да. Начинаем с платного аудита 1–2 дня с планом." },
        { q: "Как оплата?", a: "Wire, USDC, Wise, PayPal. Fixed: 30/40/30. Hourly: Stripe раз в 2 недели." },
      ],
    },
    leadForm: {
      name: "Ваше имя",
      email: "Рабочий email",
      message: "Кратко о проекте, стеке и сроках",
      budget: "Бюджет (опц.)",
      timeline: "Сроки (опц.)",
      submit: "Отправить",
      sending: "Отправляю…",
      or: "или",
      emailMe: "Написать на email",
      success: "Спасибо! Отвечу в течение нескольких часов.",
      error: "Не удалось отправить. Напишите на email.",
      budgetOptions: ["< $5k", "$5–15k", "$15–30k", "$30–60k", "$60k+"],
      timelineOptions: ["Срочно", "1–2 недели", "1 месяц", "2–3 месяца", "Гибкие"],
    },
    caseDetail: {
      backToPortfolio: "Назад в портфолио",
      industry: "Отрасль",
      duration: "Длительность",
      role: "Моя роль",
      techStack: "Технологический стек",
      challenge: "Вызов",
      solution: "Решение",
      result: "Результат",
      keyMetrics: "Ключевые метрики",
      ctaTitle: "Похожий проект?",
      ctaSubtitle: "Обычно отвечаю в течение нескольких часов.",
      ctaButton: "Начать проект",
      similar: "Другие работы",
    },
  },
};
