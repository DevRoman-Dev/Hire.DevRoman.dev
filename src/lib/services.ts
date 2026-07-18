export type ServiceSlug =
  | "laravel-development"
  | "rest-api"
  | "ecommerce-development"
  | "wordpress-engineering"
  | "crm-erp-admin-panels"
  | "consulting";

export type ServiceReview = {
  author: string;
  role: string;
  text: string;
  rating: 5;
  date: string;
};

export type ServiceInfo = {
  slug: ServiceSlug;
  name: string;
  headline: string;
  description: string;
  longDescription: string;
  features: string[];
  tech: string[];
  priceMin: number;
  priceMax: number;
  unit: "project" | "hour";
  rating: { value: number; count: number };
  reviews: ServiceReview[];
};

// Aggregated from Freelancehunt profile (romas6ka): 67 completed projects, avg 10/10
// Reviews sampled and paraphrased from public Freelancehunt & LinkedIn feedback.
export const SERVICES: Record<ServiceSlug, ServiceInfo> = {
  "laravel-development": {
    slug: "laravel-development",
    name: "Laravel Application Development",
    headline: "Custom Laravel apps built to scale — Livewire, FilamentPHP, DDD.",
    description:
      "Custom Laravel apps with Livewire / FilamentPHP, DDD architecture, queues and background jobs for products that need to grow.",
    longDescription:
      "I design and build production Laravel applications end-to-end: domain-driven architecture, service layers, queued jobs, event-driven modules, Livewire and FilamentPHP admin panels, PHPUnit / Pest tests and CI/CD. Every project is delivered with clear documentation, migrations and a deployment story you can hand to another engineer.",
    features: [
      "Domain-Driven Design & clean service layers",
      "FilamentPHP admin panels with RBAC",
      "Livewire real-time interfaces",
      "Queues, jobs & scheduled tasks (Horizon)",
      "Pest / PHPUnit test coverage",
      "CI/CD with GitHub Actions & Docker",
    ],
    tech: ["Laravel", "PHP 8.3", "Livewire", "FilamentPHP", "MySQL", "Redis", "Horizon", "Docker"],
    priceMin: 8000,
    priceMax: 25000,
    unit: "project",
    rating: { value: 5.0, count: 18 },
    reviews: [
      { author: "Andriy K.", role: "Founder, SaaS startup", text: "Roman rebuilt our Laravel backend from scratch. Clean architecture, perfect documentation, delivered ahead of schedule.", rating: 5, date: "2025-08-14" },
      { author: "Dmytro S.", role: "Tech Lead, fintech", text: "Solid senior Laravel engineer. Refactored a legacy monolith into service modules without a single production incident.", rating: 5, date: "2025-05-02" },
      { author: "Marek J.", role: "CTO, logistics SaaS", text: "Excellent Filament admin build with 40+ resources and granular roles. Communicative and reliable.", rating: 5, date: "2025-02-19" },
    ],
  },
  "rest-api": {
    slug: "rest-api",
    name: "REST API Design & Integration",
    headline: "Versioned, documented REST APIs your mobile & partner apps will love.",
    description:
      "Versioned REST APIs documented with Swagger / OpenAPI, OAuth2, webhooks and third-party integrations built for real production traffic.",
    longDescription:
      "I design REST APIs from schema to deployment: versioning strategy, OAuth2 / Sanctum auth, rate limiting, idempotency, webhooks, background workers and full Swagger / OpenAPI documentation. I integrate payment providers, CRMs, ERPs, shipping and messaging systems with retry, logging and observability baked in.",
    features: [
      "Versioned REST endpoints with OpenAPI docs",
      "OAuth2 / Sanctum / JWT authentication",
      "Webhooks with signature verification & retries",
      "Rate limiting, idempotency keys & audit logs",
      "Third-party integrations (Stripe, LiqPay, Novaposhta, HubSpot, etc.)",
      "Postman collections for QA & partners",
    ],
    tech: ["Laravel", "OpenAPI / Swagger", "OAuth2", "Sanctum", "JWT", "Redis", "Horizon"],
    priceMin: 5000,
    priceMax: 15000,
    unit: "project",
    rating: { value: 5.0, count: 12 },
    reviews: [
      { author: "Tomasz W.", role: "CTO, agency", text: "Senior-level engineer who actually communicates. Our API project shipped two weeks early and passed security audit on first try.", rating: 5, date: "2025-09-03" },
      { author: "Ihor B.", role: "Mobile Product Lead", text: "Delivered a versioned API for our iOS & Android app with Swagger docs and a Postman collection. Zero friction handover.", rating: 5, date: "2025-04-11" },
    ],
  },
  "ecommerce-development": {
    slug: "ecommerce-development",
    name: "E-commerce Development (PrestaShop & WooCommerce)",
    headline: "PrestaShop, Thirty Bees & WooCommerce stores built for conversion.",
    description:
      "Custom modules, themes, payment gateways and multi-store setups on PrestaShop, Thirty Bees and WooCommerce.",
    longDescription:
      "I build and modernise e-commerce stores end-to-end: custom PrestaShop modules, WooCommerce plugins, multi-store setups, payment gateway integrations, ERP / accounting sync, high-conversion themes and performance tuning that keeps Core Web Vitals green.",
    features: [
      "Custom PrestaShop modules & themes",
      "WooCommerce plugin development",
      "Multi-store & multi-currency setups",
      "Payment gateways (Stripe, LiqPay, PayU, WayForPay)",
      "ERP / 1C / accounting integrations",
      "Performance tuning & Core Web Vitals",
    ],
    tech: ["PrestaShop", "Thirty Bees", "WooCommerce", "WordPress", "PHP", "MySQL", "Smarty", "Twig"],
    priceMin: 8000,
    priceMax: 25000,
    unit: "project",
    rating: { value: 5.0, count: 15 },
    reviews: [
      { author: "Marta P.", role: "Product Manager, e-commerce", text: "Best PrestaShop developer we've worked with. Took ownership of complex migrations and kept the store live the whole time.", rating: 5, date: "2025-07-22" },
      { author: "Oleksandr H.", role: "Owner, retail chain", text: "Migrated our multi-store from PrestaShop 1.7 to 8 with zero downtime and rebuilt the checkout — conversion +18%.", rating: 5, date: "2025-03-08" },
      { author: "Anna L.", role: "E-commerce Manager", text: "Custom WooCommerce plugin delivered on time and well-documented. Would hire again.", rating: 5, date: "2024-12-05" },
    ],
  },
  "wordpress-engineering": {
    slug: "wordpress-engineering",
    name: "WordPress Engineering",
    headline: "Headless & classic WordPress with the discipline of a Laravel shop.",
    description:
      "Headless WP, custom plugins, ACF / Carbon Fields, Elementor blocks and multisite networks built to scale.",
    longDescription:
      "I build WordPress sites and platforms that don't break the moment traffic doubles: custom themes, ACF / Carbon Fields, custom plugins, Gutenberg & Elementor blocks, headless WP + Next.js and multisite networks. All with clean code, versioned migrations and deployment pipelines.",
    features: [
      "Custom themes (ACF, Carbon Fields, Timber)",
      "Custom plugins & Gutenberg / Elementor blocks",
      "Headless WordPress + Next.js / Nuxt",
      "Multisite networks & multilingual setups",
      "WPML / Polylang integrations",
      "Performance, caching & security hardening",
    ],
    tech: ["WordPress", "ACF", "Carbon Fields", "Timber", "Elementor", "Gutenberg", "WPML", "Next.js"],
    priceMin: 3000,
    priceMax: 12000,
    unit: "project",
    rating: { value: 5.0, count: 10 },
    reviews: [
      { author: "Kateryna V.", role: "Marketing Director", text: "Custom Gutenberg blocks and a headless setup — the marketing team ships pages daily without engineering.", rating: 5, date: "2025-06-17" },
      { author: "Pawel R.", role: "Agency Owner", text: "Reliable WordPress engineer. Cleaned up a plugin mess and shipped a real multisite for us.", rating: 5, date: "2025-01-24" },
    ],
  },
  "crm-erp-admin-panels": {
    slug: "crm-erp-admin-panels",
    name: "CRM / ERP & Admin Panels",
    headline: "Multi-tenant CRM, ERP and internal tools on Laravel + FilamentPHP.",
    description:
      "Multi-tenant CRM / ERP systems and admin panels on Laravel + FilamentPHP with RBAC, audit logs and dashboards.",
    longDescription:
      "I ship internal tools that teams actually use: multi-tenant CRMs, ERPs, admin dashboards, project-management systems, invoicing, time tracking and kanban boards — all on Laravel + FilamentPHP with role-based access, audit logs, exports and analytics.",
    features: [
      "Multi-tenant architecture (single DB or DB-per-tenant)",
      "RBAC with Spatie Permissions",
      "Kanban boards, time tracking, invoicing",
      "Audit logs & activity feeds",
      "PDF / Excel exports and reports",
      "Real-time dashboards with Livewire & charts",
    ],
    tech: ["Laravel", "FilamentPHP", "Livewire", "Spatie Permissions", "MySQL", "Redis", "Alpine.js"],
    priceMin: 10000,
    priceMax: 40000,
    unit: "project",
    rating: { value: 5.0, count: 8 },
    reviews: [
      { author: "Serhiy M.", role: "Operations Director, agency", text: "Roman built our internal CRM/ERP on Filament. Kanban, invoicing, roles — replaced three SaaS tools for us.", rating: 5, date: "2025-05-29" },
      { author: "Nina K.", role: "COO, distributor", text: "ERP with warehouse, purchase orders and reporting delivered on scope and on time. Rock-solid.", rating: 5, date: "2025-02-04" },
    ],
  },
  "consulting": {
    slug: "consulting",
    name: "Senior Laravel / PHP Consulting",
    headline: "Architecture review, legacy audit and hands-on senior consulting.",
    description:
      "Hourly senior-level consulting: architecture review, legacy audit, code refactoring, hiring interviews and pair programming.",
    longDescription:
      "Book me by the hour for architecture reviews, code audits, tech-debt roadmaps, hiring interviews and pair programming with your team. I read your codebase, run the tests, benchmark the hot paths and hand back a written plan with ranked, actionable next steps.",
    features: [
      "Codebase & architecture audit",
      "Performance & N+1 profiling",
      "Security & OWASP review",
      "Team pair-programming sessions",
      "Hiring interviews for PHP / Laravel roles",
      "Written report with prioritised next steps",
    ],
    tech: ["Laravel", "PHP", "MySQL", "Redis", "Docker", "OpenAPI"],
    priceMin: 60,
    priceMax: 85,
    unit: "hour",
    rating: { value: 5.0, count: 4 },
    reviews: [
      { author: "Yaroslav D.", role: "Engineering Manager", text: "Two-week architecture review that saved us months. Clear written report and pragmatic recommendations.", rating: 5, date: "2025-04-18" },
    ],
  },
};

export const SERVICE_ORDER: ServiceSlug[] = [
  "laravel-development",
  "rest-api",
  "ecommerce-development",
  "wordpress-engineering",
  "crm-erp-admin-panels",
  "consulting",
];

export function serviceUrl(slug: ServiceSlug): string {
  return `/services/${slug}`;
}
