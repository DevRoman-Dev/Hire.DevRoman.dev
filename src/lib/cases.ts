import caseCrm from "@/assets/case-crm.jpg";
import caseEcom from "@/assets/case-ecommerce.jpg";
import caseApi from "@/assets/case-api.jpg";
import caseHealth from "@/assets/case-health.jpg";
import caseHotel from "@/assets/case-hotel.jpg";
import caseInvoice from "@/assets/case-invoice.jpg";
import caseAgro from "@/assets/case-agro.jpg";
import caseSaas from "@/assets/case-saas.jpg";
import caseRealEstate from "@/assets/case-realestate.jpg";
import type { Locale } from "./i18n";

export type CaseSlug =
  | "project-management-crm"
  | "multi-store-ecommerce"
  | "rest-api-mobile"
  | "openhealth-portal"
  | "hotel-booking-network"
  | "invoicemaker-saas"
  | "agro-marketplace"
  | "datapulse-analytics"
  | "estateflow-platform";

export type CaseDetail = {
  slug: CaseSlug;
  image: string;
  tech: string[];
  industry: string;
  duration: string;
  role: string;
  client: { name: string; type: "Organization" | "LocalBusiness"; area?: string };
  rating: { value: number; count: number };
  review: { author: string; role: string; text: string };
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  result: string;
};


export const CASE_DETAILS: Record<CaseSlug, CaseDetail> = {
  "project-management-crm": {
    slug: "project-management-crm",
    image: caseCrm,
    tech: ["Laravel 11", "FilamentPHP", "Livewire", "MySQL", "Redis", "Docker", "Pusher"],
    industry: "Digital Agency",
    duration: "5 months",
    role: "Lead backend engineer",
    client: { name: "Distributed digital agency (UA/EU)", type: "Organization", area: "EU" },
    rating: { value: 5, count: 8 },
    review: {
      author: "Andriy K.",
      role: "Founder, digital agency",
      text: "Roman replaced our 4 SaaS subscriptions with one self-hosted CRM. Clean architecture, perfect docs, delivered ahead of schedule.",
    },

    metrics: [
      { value: "12k+", label: "tasks/month" },
      { value: "45%", label: "PM overhead saved" },
      { value: "99.9%", label: "uptime" },
    ],
    challenge:
      "A distributed agency outgrew off-the-shelf project management tools. Time tracking, invoicing and client reporting lived in 4 different SaaS subscriptions with no shared identity layer. Account managers were re-entering data daily and revenue leaked through forgotten billable hours.",
    solution:
      "Built a multi-tenant CRM/ERP on Laravel + FilamentPHP with kanban boards, time tracking, recurring invoicing, Stripe payouts and granular role-based access (RBAC). Background queues handle PDF generation and email digests; Pusher powers real-time board updates across distributed teams. Strict DDD layering keeps the billing core separate from UI concerns.",
    result:
      "Replaced 4 SaaS subscriptions with one self-hosted system. Account managers now close invoices 45% faster, the agency captured ~$28k of previously unbilled hours in the first quarter and the platform now runs across 6 tenant brands on a single codebase.",
  },
  "multi-store-ecommerce": {
    slug: "multi-store-ecommerce",
    image: caseEcom,
    tech: ["PrestaShop 8", "PHP 8.2", "MySQL", "Smarty", "Stripe", "Nginx", "Redis cache"],
    industry: "Fashion retail",
    duration: "8 months",
    role: "Lead developer & DevOps",
    client: { name: "Boutique fashion retailer (PL/DE/FR)", type: "Organization", area: "EU" },
    rating: { value: 5, count: 6 },
    review: {
      author: "Marta P.",
      role: "Product Manager, e-commerce",
      text: "Best PrestaShop developer we've worked with. Took ownership of complex migrations and kept the store live the whole time.",
    },

    metrics: [
      { value: "+38%", label: "conversion" },
      { value: "−62%", label: "TTFB" },
      { value: "3", label: "country stores" },
    ],
    challenge:
      "A fashion retailer ran 3 country-specific stores on outdated PrestaShop 1.6 with custom hacks layered on the core. Page loads averaged 4.2s, EU payment gateways failed checkouts intermittently, and any module update broke production.",
    solution:
      "Rebuilt the storefront on PrestaShop 8 with a clean module architecture, migrated 80k products + history without downtime via blue-green deployment, integrated Stripe + Klarna + local EU payment providers, and tuned MySQL + Redis cache for sub-second TTFB.",
    result:
      "Conversion jumped +38% within 60 days, average checkout time fell from 92s to 31s, and the new modular setup lets the in-house team ship promo campaigns without engineering involvement.",
  },
  "rest-api-mobile": {
    slug: "rest-api-mobile",
    image: caseApi,
    tech: ["Laravel 10", "Laravel Passport", "Swagger / OpenAPI 3", "Redis", "Horizon", "MySQL"],
    industry: "Consumer mobile (iOS + Android)",
    duration: "4 months + ongoing",
    role: "API architect",
    client: { name: "Consumer mobile startup (250k+ MAU)", type: "Organization" },
    rating: { value: 5, count: 5 },
    review: {
      author: "Tomasz W.",
      role: "CTO, mobile startup",
      text: "Senior-level engineer who actually communicates. Our API project shipped two weeks early and passed security audit on first try.",
    },

    metrics: [
      { value: "250k+", label: "active users" },
      { value: "P95 < 180ms", label: "response time" },
      { value: "100%", label: "OpenAPI coverage" },
    ],
    challenge:
      "A consumer mobile app with 250k users was outgrowing a Firebase backend — query costs were exploding and the team couldn't enforce complex business rules. They needed a versioned, well-documented REST API that mobile clients could consume safely across multiple app versions.",
    solution:
      "Designed a versioned REST API (`/v1`, `/v2`) on Laravel with OAuth2 (Passport) for auth, queued jobs via Horizon for heavy lifts, idempotency keys for mobile retries, and an OpenAPI 3 contract that doubles as the SDK source. Postman + Newman in CI catches contract drift before deploy.",
    result:
      "P95 latency under 180ms, zero auth incidents in 18 months, mobile teams ship faster because the OpenAPI contract removes ambiguity, and the Firebase bill dropped to a tenth.",
  },
  "openhealth-portal": {
    slug: "openhealth-portal",
    image: caseHealth,
    tech: ["Laravel", "Livewire 3", "Alpine.js", "PostgreSQL", "AWS S3", "Twilio"],
    industry: "Private healthcare",
    duration: "6 months",
    role: "Fullstack engineer",
    client: { name: "Private clinic network (4 locations)", type: "LocalBusiness", area: "EU" },
    rating: { value: 5, count: 4 },
    review: {
      author: "Dr. Olena S.",
      role: "Medical Director",
      text: "Passed an external GDPR audit on the first pass. SMS reminders cut no-shows by 71% — directly measurable ROI.",
    },

    metrics: [
      { value: "GDPR", label: "audit passed" },
      { value: "−71%", label: "no-show rate" },
      { value: "8k+", label: "patient records" },
    ],
    challenge:
      "A private clinic network needed a patient portal with appointment scheduling, medical record history and SMS reminders — but no third-party hosting could meet their data residency requirements.",
    solution:
      "Built a Livewire-driven portal with real-time notifications, role-separated views for patients / doctors / admins, encrypted PostgreSQL columns for sensitive fields, signed AWS S3 URLs for medical scans and Twilio for SMS confirmations. Passed an external GDPR audit on the first pass.",
    result:
      "No-show rate dropped by 71% after SMS reminders shipped, doctors stopped duplicating record entry across systems, and the platform now serves 8k+ patient records across 4 clinic locations.",
  },
  "hotel-booking-network": {
    slug: "hotel-booking-network",
    image: caseHotel,
    tech: ["WordPress Multisite", "ACF Pro", "Stripe Connect", "WP REST API", "Cloudflare"],
    industry: "Boutique hospitality",
    duration: "3 months",
    role: "Lead WordPress engineer",
    client: { name: "Boutique hotel group (3 properties)", type: "LocalBusiness", area: "EU" },
    rating: { value: 5, count: 3 },
    review: {
      author: "Markus H.",
      role: "Owner, boutique hotel group",
      text: "Direct bookings up 22% in the first season — that's ~$45k/year saved on Booking.com commission. Pays for the project many times over.",
    },

    metrics: [
      { value: "3", label: "hotel brands" },
      { value: "4", label: "languages" },
      { value: "+22%", label: "direct bookings" },
    ],
    challenge:
      "Three boutique hotels under one owner relied on Booking.com taking 18% commission per stay. They wanted unified direct-booking sites with shared inventory and brand-specific themes.",
    solution:
      "Built a WordPress Multisite network with a shared booking core (custom plugin using WP REST API), ACF-driven content blocks for the marketing team, Stripe Connect so each property gets paid directly, multilingual content with WPML, and Cloudflare edge caching.",
    result:
      "Direct bookings up 22% in the first season, ~$45k/year saved on commission, and the marketing team now ships landing pages without touching code.",
  },
  "invoicemaker-saas": {
    slug: "invoicemaker-saas",
    image: caseInvoice,
    tech: ["PHP 8.2", "Vite", "Alpine.js", "MySQL", "DomPDF", "Cashier (Stripe)"],
    industry: "B2B SaaS for freelancers",
    duration: "Ongoing product",
    role: "Founding engineer",
    client: { name: "InvoiceMaker (own SaaS product)", type: "Organization", area: "Worldwide" },
    rating: { value: 5, count: 12 },
    review: {
      author: "Lukas B.",
      role: "Freelance developer, customer",
      text: "Finally an invoice tool that gets EU VAT and reverse-charge right. The public API let me automate everything from Notion.",
    },

    metrics: [
      { value: "4k+", label: "active users" },
      { value: "$0", label: "support tickets/week" },
      { value: "12 ", label: "EU VAT regimes" },
    ],
    challenge:
      "Freelancers in the EU need invoices that respect 12 different VAT regimes, reverse-charge rules, multi-currency, and a public REST API for integration with their own tools — without learning accounting software.",
    solution:
      "Self-serve invoice builder with PDF export (DomPDF + custom templates), recurring billing via Stripe Cashier, country-specific VAT logic abstracted into a rules engine, and a public REST API documented with Swagger so power users can automate.",
    result:
      "4k+ active users across 12 EU countries, near-zero support load thanks to inline validation, and a public API now powers integrations into Notion, Make and Zapier.",
  },
  "agro-marketplace": {
    slug: "agro-marketplace",
    image: caseAgro,
    tech: ["Laravel 11", "Vite", "Inertia.js", "Vue 3", "PostgreSQL", "Mapbox", "Escrow.com API"],
    industry: "B2B agriculture",
    duration: "7 months",
    role: "Tech lead",
    client: { name: "AgroTrust marketplace (Eastern Europe)", type: "Organization", area: "EU" },
    rating: { value: 5, count: 5 },
    review: {
      author: "Ihor M.",
      role: "Co-founder, AgroTrust",
      text: "$2.4M GMV in year one and zero disputed deals thanks to escrow + KYB. Roman owned the architecture end-to-end.",
    },

    metrics: [
      { value: "$2.4M", label: "GMV first year" },
      { value: "240+", label: "verified suppliers" },
      { value: "11", label: "crop categories" },
    ],
    challenge:
      "Agricultural suppliers in Eastern Europe lacked a trusted way to sell crops B2B online — most deals happened over phone with chargeback risk on both sides.",
    solution:
      "B2B marketplace with KYB supplier verification, Mapbox-backed logistics planning, integrated escrow for high-value lots, and a Laravel + Inertia + Vue stack for fast SPA-like UX with server-rendered SEO pages.",
    result:
      "$2.4M GMV in the first year, 240 verified suppliers onboarded, and zero disputed transactions thanks to escrow + KYB.",
  },
  "datapulse-analytics": {
    slug: "datapulse-analytics",
    image: caseSaas,
    tech: ["Next.js 14 (App Router)", "React Server Components", "TypeScript", "tRPC", "ClickHouse", "Tailwind"],
    industry: "E-commerce analytics SaaS",
    duration: "9 months",
    role: "Fullstack architect",
    client: { name: "DataPulse Analytics", type: "Organization", area: "Worldwide" },
    rating: { value: 5, count: 7 },
    review: {
      author: "Sarah L.",
      role: "Head of Product, DataPulse",
      text: "Dashboard TTI from 30s to under 400ms. AI summaries became the #1 retention feature in customer interviews.",
    },

    metrics: [
      { value: "1.2B", label: "events/month" },
      { value: "< 400ms", label: "dashboard TTI" },
      { value: "AI", label: "anomaly detection" },
    ],
    challenge:
      "An analytics SaaS for e-commerce operators was choking on Postgres aggregations — dashboards took 30+ seconds to render at 1B+ events/month. The product team also wanted AI-powered insights (anomaly detection, forecasts) without rebuilding the stack.",
    solution:
      "Migrated the analytics warehouse to ClickHouse for sub-second OLAP queries, rewrote the dashboard on Next.js 14 App Router with React Server Components for instant first paint, added tRPC for end-to-end type safety, and wired an OpenAI-backed insights pipeline that flags anomalies and writes plain-language summaries.",
    result:
      "Dashboard TTI dropped from 30s to under 400ms, the platform now ingests 1.2B events/month on the same infra, and AI summaries became the #1 retention feature in customer interviews.",
  },
  "estateflow-platform": {
    slug: "estateflow-platform",
    image: caseRealEstate,
    tech: ["Nuxt.js 3", "Vue 3 Composition API", "TailwindCSS", "Pinia", "Mapbox GL", "Strapi (headless CMS)"],
    industry: "Real estate",
    duration: "6 months",
    role: "Lead frontend engineer",
    client: { name: "EstateFlow Realty Group", type: "LocalBusiness", area: "EU" },
    rating: { value: 5, count: 6 },
    review: {
      author: "Piotr Z.",
      role: "CMO, EstateFlow",
      text: "Lighthouse SEO of 100 and +54% qualified leads in 90 days. The MLS-to-CRM bridge alone saved our agents 10 hours a week.",
    },

    metrics: [
      { value: "+54%", label: "qualified leads" },
      { value: "8k+", label: "listings indexed" },
      { value: "100", label: "Lighthouse SEO" },
    ],
    challenge:
      "A real estate brand needed a listings platform that ranks in Google for hyper-local queries, integrates a CRM for agent follow-up, and offers map-based search + virtual tours — all on a single SSR codebase.",
    solution:
      "Built on Nuxt.js 3 with full SSR for SEO, Mapbox GL for cluster-based map search, a mortgage calculator, Matterport-embedded virtual tours, and a webhook bridge that pushes qualified leads into the agency's existing CRM. Per-listing JSON-LD schema and dynamic OG images drive social and search visibility.",
    result:
      "Qualified leads up 54% within 90 days, Lighthouse SEO score of 100 across category pages, and 8k+ listings now indexed and updated nightly from MLS feeds.",
  },
};

export const CASE_ORDER: CaseSlug[] = [
  "project-management-crm",
  "multi-store-ecommerce",
  "rest-api-mobile",
  "openhealth-portal",
  "hotel-booking-network",
  "invoicemaker-saas",
  "agro-marketplace",
  "datapulse-analytics",
  "estateflow-platform",
];

// Localized slugs per locale. English keeps canonical slugs.
// Used to render language-native URLs (e.g. /uk/portfolio/crm-keruvannya-proektamy)
// for stronger ranking in local search results.
export const LOCALIZED_SLUGS: Record<Locale, Record<CaseSlug, string>> = {
  en: {
    "project-management-crm": "project-management-crm",
    "multi-store-ecommerce": "multi-store-ecommerce",
    "rest-api-mobile": "rest-api-mobile",
    "openhealth-portal": "openhealth-portal",
    "hotel-booking-network": "hotel-booking-network",
    "invoicemaker-saas": "invoicemaker-saas",
    "agro-marketplace": "agro-marketplace",
    "datapulse-analytics": "datapulse-analytics",
    "estateflow-platform": "estateflow-platform",
  },
  uk: {
    "project-management-crm": "crm-keruvannya-proektamy",
    "multi-store-ecommerce": "bahatomahazynnyi-ecommerce",
    "rest-api-mobile": "rest-api-dlya-mobilnykh",
    "openhealth-portal": "medychnyi-portal-openhealth",
    "hotel-booking-network": "bronyuvannya-hoteliv",
    "invoicemaker-saas": "invoicemaker-saas-dlya-frilanseriv",
    "agro-marketplace": "ahro-marketpleis",
    "datapulse-analytics": "datapulse-analityka",
    "estateflow-platform": "estateflow-neruhomist",
  },
  pl: {
    "project-management-crm": "crm-zarzadzanie-projektami",
    "multi-store-ecommerce": "wielosklepowy-ecommerce",
    "rest-api-mobile": "rest-api-dla-aplikacji-mobilnych",
    "openhealth-portal": "portal-medyczny-openhealth",
    "hotel-booking-network": "system-rezerwacji-hoteli",
    "invoicemaker-saas": "invoicemaker-saas-dla-freelancerow",
    "agro-marketplace": "marketplace-rolniczy",
    "datapulse-analytics": "datapulse-analityka",
    "estateflow-platform": "estateflow-nieruchomosci",
  },
  ru: {
    "project-management-crm": "crm-upravlenie-proektami",
    "multi-store-ecommerce": "multimagazinnyy-ecommerce",
    "rest-api-mobile": "rest-api-dlya-mobilnyh-prilozheniy",
    "openhealth-portal": "medicinskiy-portal-openhealth",
    "hotel-booking-network": "bronirovanie-oteley",
    "invoicemaker-saas": "invoicemaker-saas-dlya-frilanserov",
    "agro-marketplace": "agro-marketpleys",
    "datapulse-analytics": "datapulse-analitika",
    "estateflow-platform": "estateflow-nedvizhimost",
  },
};

// Reverse lookup: localized slug → canonical CaseSlug for a given locale.
const REVERSE_SLUGS: Record<Locale, Record<string, CaseSlug>> = Object.fromEntries(
  (Object.keys(LOCALIZED_SLUGS) as Locale[]).map((loc) => [
    loc,
    Object.fromEntries(
      (Object.entries(LOCALIZED_SLUGS[loc]) as [CaseSlug, string][]).map(
        ([canonical, local]) => [local, canonical],
      ),
    ),
  ]),
) as Record<Locale, Record<string, CaseSlug>>;

export function getCanonicalSlug(locale: Locale, localized: string): CaseSlug | undefined {
  return REVERSE_SLUGS[locale]?.[localized];
}

export function getLocalizedSlug(locale: Locale, slug: CaseSlug): string {
  return LOCALIZED_SLUGS[locale][slug];
}

export function getCasePath(locale: Locale, slug: CaseSlug): string {
  const local = getLocalizedSlug(locale, slug);
  return locale === "en" ? `/portfolio/${local}` : `/${locale}/portfolio/${local}`;
}
