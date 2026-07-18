import type { CaseSlug } from "./cases";

export type VerticalSlug =
  | "laravel-developer"
  | "filamentphp-developer"
  | "prestashop-developer"
  | "wordpress-developer";

export type VerticalInfo = {
  slug: VerticalSlug;
  h1: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  keyword: string;
  intro: string;
  usp: { title: string; desc: string }[];
  tech: string[];
  relatedCases: CaseSlug[];
  faq: { q: string; a: string }[];
  aggregateRating: { value: number; count: number };
};

export const VERTICALS: Record<VerticalSlug, VerticalInfo> = {
  "laravel-developer": {
    slug: "laravel-developer",
    keyword: "Laravel developer",
    h1: "Senior Laravel Developer for Hire",
    headline: "8+ years shipping production Laravel apps — Livewire, FilamentPHP, DDD, queues and REST APIs.",
    metaTitle: "Senior Laravel Developer for Hire — Roman Matviy (8+ yrs, 67 projects)",
    metaDescription:
      "Hire a senior Laravel developer with 8+ years and 67 shipped projects. Livewire, FilamentPHP, DDD, REST APIs, queues, Docker. 5.0/5 average rating. Available now.",
    intro:
      "I'm Roman Matviy, a senior Laravel developer from Lviv, Ukraine. Since 2017 I've shipped 67 production Laravel projects — SaaS backends, multi-tenant CRMs, REST APIs powering mobile apps, e-commerce and admin panels. I write clean, tested code with a domain-driven mindset and hand off documentation another engineer can pick up on day one.",
    usp: [
      { title: "Senior-only workload", desc: "No juniors, no agency middlemen. You get direct access to a senior engineer who's shipped 60+ Laravel apps." },
      { title: "Domain-Driven Design by default", desc: "Service layers, DTOs, events, jobs. The business logic stays out of controllers and Blade files." },
      { title: "FilamentPHP admin panels", desc: "40+ resources per project, RBAC via Spatie, real-time widgets with Livewire — production-tested." },
      { title: "REST APIs with OpenAPI", desc: "Versioned endpoints, OAuth2 / Sanctum, idempotency, Swagger docs and Postman collections your mobile team can consume on day one." },
      { title: "Delivered on schedule", desc: "5.0 / 5 average rating across 67 projects on Freelancehunt. Reviewed by CTOs, founders and engineering managers." },
    ],
    tech: ["Laravel 10/11", "PHP 8.3", "Livewire", "FilamentPHP", "Sanctum / Passport", "MySQL / PostgreSQL", "Redis", "Horizon", "Pest / PHPUnit", "Docker", "GitHub Actions"],
    relatedCases: ["project-management-crm", "rest-api-mobile", "openhealth-portal", "invoicemaker-saas"],
    faq: [
      { q: "How much does a senior Laravel developer cost?", a: "My rate for fixed-scope Laravel projects starts at $8,000; hourly senior consulting is $60–$85/hr. Full-time retainer arrangements are quoted per engagement." },
      { q: "Do you write tests?", a: "Yes — Pest / PHPUnit feature and unit tests are the default. New code ships with tests; legacy audits include a coverage baseline and a plan to raise it." },
      { q: "Can you take over a legacy Laravel codebase?", a: "That's most of what I do. I run a 1–2 week audit, hand back a written report with prioritised refactors, then execute — no rewrites-from-scratch unless there is no other option." },
      { q: "Do you work with FilamentPHP?", a: "Extensively. I've shipped Filament admin panels with 40+ resources, custom widgets, multi-tenancy and granular RBAC via Spatie Permissions." },
      { q: "What time zone do you work in?", a: "GMT+2 (Ukraine). I overlap 6+ hours daily with EU teams and 3–4 hours with US East Coast." },
    ],
    aggregateRating: { value: 5.0, count: 30 },
  },
  "filamentphp-developer": {
    slug: "filamentphp-developer",
    keyword: "FilamentPHP developer",
    h1: "Senior FilamentPHP Developer for Custom Admin Panels",
    headline: "Multi-tenant admin panels, RBAC, custom widgets and Livewire real-time UI on FilamentPHP v3.",
    metaTitle: "Senior FilamentPHP Developer — Custom Admin Panels & CRMs | Roman Matviy",
    metaDescription:
      "Hire a senior FilamentPHP developer for custom admin panels, multi-tenant CRMs and internal tools. 40+ resources per project, Spatie RBAC, Livewire widgets. 5.0/5 rating.",
    intro:
      "FilamentPHP is my day-to-day tool for building admin panels, CRMs and internal tools on top of Laravel. I ship production Filament apps with dozens of resources, custom form fields, kanban and calendar widgets, multi-tenancy, granular roles, PDF/Excel exports and real-time dashboards powered by Livewire.",
    usp: [
      { title: "40+ resources per project", desc: "Complex forms, relation managers, custom actions, bulk operations — all tested against real user load." },
      { title: "Spatie Permissions + multi-tenant", desc: "Row-level authorization and per-tenant data isolation, single DB or DB-per-tenant." },
      { title: "Custom widgets & pages", desc: "Kanban boards, calendars, analytics dashboards, embedded reports — beyond what the stock Filament UI offers." },
      { title: "Livewire real-time layer", desc: "Presence, live updates, Pusher / Reverb integration for teams that need to see changes instantly." },
      { title: "Production-hardened", desc: "Queues, background exports, activity logs, audit trails and observability baked in." },
    ],
    tech: ["FilamentPHP v3", "Laravel 11", "Livewire 3", "Spatie Permissions", "Spatie MediaLibrary", "Spatie Activity Log", "Alpine.js", "Tailwind", "MySQL", "Redis"],
    relatedCases: ["project-management-crm", "openhealth-portal"],
    faq: [
      { q: "Can you extend Filament with custom pages?", a: "Yes — custom pages, custom widgets, custom form components and even fully custom themes. I've shipped Filament apps that barely resemble the default look." },
      { q: "Does FilamentPHP scale for internal tools with 50+ users?", a: "Yes. Every Filament project I ship runs on Redis-backed queues, Horizon for background work, and RBAC via Spatie Permissions — comfortable well into hundreds of users." },
      { q: "Can you migrate an existing Laravel Nova app to Filament?", a: "Yes — the mapping is straightforward and Filament is faster for the developer and the end user. I've done multiple Nova → Filament migrations." },
    ],
    aggregateRating: { value: 5.0, count: 12 },
  },
  "prestashop-developer": {
    slug: "prestashop-developer",
    keyword: "PrestaShop developer",
    h1: "Senior PrestaShop Developer & Consultant",
    headline: "PrestaShop 1.7 → 8 migrations, custom modules, multi-store setups and Core Web Vitals tuning.",
    metaTitle: "Senior PrestaShop Developer — Modules, Themes, Migrations | Roman Matviy",
    metaDescription:
      "Hire a senior PrestaShop developer for custom modules, theme development, 1.7 → 8 migrations, multi-store setups and performance tuning. 15+ PrestaShop projects, 5.0/5 rating.",
    intro:
      "PrestaShop has been part of my stack since 2018. I've shipped 15+ PrestaShop projects — custom modules, storefront themes, multi-store multi-currency setups, EU payment integrations, 1.7 → 8 zero-downtime migrations and Core Web Vitals tuning that keeps checkout under 400ms.",
    usp: [
      { title: "Zero-downtime 1.7 → 8 migrations", desc: "Blue-green deployment, delta migrations of 80k+ products with history preserved." },
      { title: "Custom modules & overrides", desc: "Complex modules with their own DB schema, admin controllers, front controllers and hooks — built the PrestaShop way, not hacked in." },
      { title: "Multi-store, multi-currency, multi-lang", desc: "3+ country storefronts on shared inventory with per-market pricing and payment providers." },
      { title: "EU payment gateways", desc: "Stripe, Klarna, PayU, WayForPay, LiqPay — battle-tested for EU checkout compliance and 3DS2." },
      { title: "Core Web Vitals green", desc: "TTFB under 400ms, LCP under 2.5s on real product pages — critical modules refactored, cache layer added." },
    ],
    tech: ["PrestaShop 8", "PrestaShop 1.7", "Thirty Bees", "PHP 8.2", "Smarty", "Twig", "MySQL", "Nginx", "Redis cache", "Stripe", "PayU"],
    relatedCases: ["multi-store-ecommerce"],
    faq: [
      { q: "Can you migrate PrestaShop 1.7 to 8 without downtime?", a: "Yes — blue-green deployment with a delta sync at cutover. I've migrated stores with 80k+ SKUs and zero customer-visible downtime." },
      { q: "Do you build custom PrestaShop modules from scratch?", a: "Yes. Custom modules with their own DB schema, admin controllers, hooks and translations — built to survive PrestaShop core upgrades." },
      { q: "Can you fix a slow PrestaShop store?", a: "Yes. Most stores run 3× faster after a Redis cache layer, MySQL tuning, module audit and asset optimisation." },
      { q: "Do you work with Thirty Bees or only PrestaShop?", a: "Both. Thirty Bees is a PrestaShop fork, so the module architecture carries over." },
    ],
    aggregateRating: { value: 5.0, count: 15 },
  },
  "wordpress-developer": {
    slug: "wordpress-developer",
    keyword: "WordPress developer",
    h1: "Senior WordPress Developer for Custom & Headless Builds",
    headline: "Custom themes, plugins, ACF & Carbon Fields, Gutenberg blocks, headless WP + Next.js and multisite networks.",
    metaTitle: "Senior WordPress Developer — Custom Themes, Plugins, Headless | Roman Matviy",
    metaDescription:
      "Hire a senior WordPress developer for custom themes, plugins, ACF, Gutenberg blocks, headless WP + Next.js and multisite networks. 10+ WP projects with 5.0/5 rating.",
    intro:
      "I build WordPress sites and platforms with the discipline of a Laravel shop: version-controlled, migration-driven, deployment-pipelined. Custom themes, custom plugins, ACF and Carbon Fields, Gutenberg / Elementor blocks, headless WordPress on Next.js, multisite networks and WPML — all with clean code and repeatable deploys.",
    usp: [
      { title: "Custom themes, not page builders", desc: "ACF, Carbon Fields, Timber — themes marketing teams can extend without breaking layout." },
      { title: "Custom plugins with tests", desc: "Real plugin architecture with tests, activation / deactivation hooks and clean upgrade paths." },
      { title: "Headless WordPress", desc: "WordPress as CMS + Next.js / Nuxt frontend for storefront-grade performance and SEO." },
      { title: "Multisite & multilingual", desc: "Multisite networks (like the boutique-hotel case), WPML / Polylang integrations." },
      { title: "Performance & security", desc: "Object caching, page caching, WAF, hardening — no more surprise 500s during promo campaigns." },
    ],
    tech: ["WordPress", "ACF Pro", "Carbon Fields", "Timber", "Gutenberg blocks", "Elementor", "WPML", "WooCommerce", "Next.js", "Nginx", "Cloudflare"],
    relatedCases: ["hotel-booking-network"],
    faq: [
      { q: "Do you build custom Gutenberg blocks?", a: "Yes — React-based blocks with server-side render support, block variations and pattern libraries the marketing team can compose from." },
      { q: "Can you set up headless WordPress with Next.js?", a: "Yes. WordPress as the CMS, Next.js as the storefront, ISR for content, previews wired end-to-end." },
      { q: "Do you fix hacked WordPress sites?", a: "Occasionally — but I always follow it with a hardening pass: 2FA, WAF, cleanup, integrity monitoring. Otherwise it will happen again." },
    ],
    aggregateRating: { value: 5.0, count: 10 },
  },
};

export const VERTICAL_ORDER: VerticalSlug[] = [
  "laravel-developer",
  "filamentphp-developer",
  "prestashop-developer",
  "wordpress-developer",
];

export function verticalUrl(slug: VerticalSlug): string {
  return `/${slug}`;
}
