import type { Locale } from "./i18n";
import romanPhoto from "@/assets/roman-photo.png.asset.json";

const OG_IMAGE = `https://hire.devroman.dev${romanPhoto.url}`;

export const SITE = {
  name: "Roman Matviy — Senior Laravel / PHP Developer",
  url: "https://hire.devroman.dev",
  email: "roman@matviy.pp.ua",
};

const SERVICE_CATALOG: { id: string; name: string; description: string; price: number; priceMax?: number; unit: "project" | "hour" }[] = [
  { id: "laravel-app", name: "Laravel Application Development", description: "Custom Laravel apps with Livewire / FilamentPHP, DDD architecture, queues and background jobs.", price: 8000, priceMax: 25000, unit: "project" },
  { id: "rest-api", name: "REST API Design & Integration", description: "Versioned REST APIs documented with Swagger / OpenAPI, OAuth2, webhooks and third-party integrations.", price: 5000, priceMax: 15000, unit: "project" },
  { id: "ecommerce", name: "E-commerce Development (PrestaShop / WooCommerce)", description: "Custom modules, themes, payment gateways and multi-store setups on PrestaShop, Thirty Bees and WooCommerce.", price: 8000, priceMax: 25000, unit: "project" },
  { id: "wordpress", name: "WordPress Engineering", description: "Headless WP, custom plugins, ACF/Carbon Fields and multisite networks built to scale.", price: 3000, priceMax: 12000, unit: "project" },
  { id: "crm-erp", name: "CRM / ERP & Admin Panels", description: "Multi-tenant CRM/ERP systems and admin panels on Laravel + FilamentPHP with RBAC.", price: 10000, priceMax: 40000, unit: "project" },
  { id: "consulting", name: "Senior Laravel / PHP Consulting", description: "Hourly senior-level consulting, architecture review, legacy audit and code refactoring.", price: 60, priceMax: 85, unit: "hour" },
];

function buildServices() {
  return SERVICE_CATALOG.map((s) => ({
    "@type": "Service",
    "@id": `${SITE.url}/#service-${s.id}`,
    name: s.name,
    description: s.description,
    serviceType: s.name,
    provider: { "@id": `${SITE.url}/#person` },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: s.price,
      ...(s.priceMax ? { priceSpecification: { "@type": "PriceSpecification", minPrice: s.price, maxPrice: s.priceMax, priceCurrency: "USD", unitText: s.unit === "hour" ? "HUR" : "Project" } } : {}),
      availability: "https://schema.org/InStock",
      url: SITE.url,
    },
  }));
}

const META: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Roman Matviy — Senior Laravel, PHP, Vue & React Developer | Lviv, Ukraine",
    description:
      "Hire a senior Laravel / PHP / Vue / React / Next.js developer with 8+ years building scalable REST APIs, CRMs, e-commerce stores (PrestaShop, WordPress) and SaaS platforms. 60+ shipped projects.",
  },
  uk: {
    title: "Роман Матвій — Senior Laravel, PHP, Vue, React розробник | Львів",
    description:
      "Senior Laravel / PHP / Vue / React / Next.js розробник з 8+ роками досвіду: REST API, CRM, e-commerce (PrestaShop, WordPress), SaaS. 60+ продакшн-проєктів.",
  },
  pl: {
    title: "Roman Matviy — Senior Laravel, PHP, Vue, React Developer | Lwów",
    description:
      "Senior Laravel / PHP / Vue / React / Next.js developer z 8+ latami doświadczenia: REST API, CRM, e-commerce (PrestaShop, WordPress), SaaS. 60+ wdrożonych projektów.",
  },
  ru: {
    title: "Роман Матвий — Senior Laravel, PHP, Vue, React разработчик | Львов",
    description:
      "Senior Laravel / PHP / Vue / React / Next.js разработчик с 8+ годами опыта: REST API, CRM, e-commerce (PrestaShop, WordPress), SaaS. 60+ production-проектов.",
  },
};

const PATH: Record<Locale, string> = { en: "/", uk: "/uk", pl: "/pl", ru: "/ru" };

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  uk: "uk_UA",
  pl: "pl_PL",
  ru: "ru_RU",
};

const LOCALE_LANG_TAG: Record<Locale, string> = {
  en: "en",
  uk: "uk-UA",
  pl: "pl-PL",
  ru: "ru-RU",
};

export function routeHead(locale: Locale) {
  const m = META[locale];
  const path = PATH[locale];
  const absUrl = (p: string) => `${SITE.url}${p === "/" ? "" : p}`;
  const ogImage = OG_IMAGE;

  const alternateLocaleMeta = (Object.keys(META) as Locale[])
    .filter((l) => l !== locale)
    .map((l) => ({ property: "og:locale:alternate", content: OG_LOCALE[l] }));

  return {
    meta: [
      { title: m.title },
      { name: "description", content: m.description },
      { name: "author", content: "Roman Matviy" },
      { name: "keywords", content: "Laravel developer, PHP developer, React developer, Next.js developer, Vue developer, Nuxt.js developer, WordPress developer, PrestaShop developer, REST API, Lviv, Ukraine, freelance, senior backend, FilamentPHP, Livewire" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Roman Matviy" },
      { property: "og:title", content: m.title },
      { property: "og:description", content: m.description },
      { property: "og:url", content: absUrl(path) },
      { property: "og:image", content: ogImage },
      { property: "og:locale", content: OG_LOCALE[locale] },
      ...alternateLocaleMeta,
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: m.title },
      { name: "twitter:description", content: m.description },
    ],
    links: [
      { rel: "canonical", href: absUrl(path) },
      { rel: "alternate", hrefLang: "en", href: absUrl("/") },
      { rel: "alternate", hrefLang: "uk-UA", href: absUrl("/uk") },
      { rel: "alternate", hrefLang: "pl-PL", href: absUrl("/pl") },
      { rel: "alternate", hrefLang: "ru-RU", href: absUrl("/ru") },
      { rel: "alternate", hrefLang: "x-default", href: absUrl("/") },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${SITE.url}/#person`,
              name: "Roman Matviy",
              jobTitle: "Senior Laravel / PHP / React / Next.js Developer",
              url: SITE.url,
              image: OG_IMAGE,
              email: `mailto:${SITE.email}`,
              address: { "@type": "PostalAddress", addressLocality: "Lviv", addressCountry: "UA" },
              sameAs: [
                "https://github.com/MatviyRoman",
                "https://linkedin.com/in/MatviyRoman",
                "https://fb.com/romas6ka",
                "https://freelancehunt.com/freelancer/romas6ka.html",
              ],
              knowsAbout: ["Laravel", "PHP", "React", "Next.js", "Vue.js", "Nuxt.js", "WordPress", "PrestaShop", "REST API", "MySQL", "Docker", "TypeScript", "FilamentPHP", "Livewire"],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE.url}/#service`,
              name: "Roman Matviy — Laravel & PHP Development",
              provider: { "@id": `${SITE.url}/#person` },
              areaServed: "Worldwide",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "67",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Andriy K." },
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Roman rebuilt our Laravel backend from scratch. Clean architecture, perfect documentation, delivered ahead of schedule.",
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Marta P." },
                  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
                  reviewBody: "Best PrestaShop developer we've worked with. Took ownership of complex migrations.",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              url: SITE.url,
              name: SITE.name,
              inLanguage: ["en", "uk-UA", "pl-PL", "ru-RU"],
              publisher: { "@id": `${SITE.url}/#person` },
              potentialAction: (Object.keys(PATH) as Locale[]).map((l) => ({
                "@type": "ReadAction",
                target: { "@type": "EntryPoint", urlTemplate: absUrl(PATH[l]), inLanguage: LOCALE_LANG_TAG[l] },
              })),
            },
            ...(Object.keys(PATH) as Locale[]).map((l) => ({
              "@type": "WebPage",
              "@id": `${absUrl(PATH[l])}#webpage`,
              url: absUrl(PATH[l]),
              name: META[l].title,
              description: META[l].description,
              inLanguage: LOCALE_LANG_TAG[l],
              isPartOf: { "@id": `${SITE.url}/#website` },
              about: { "@id": `${SITE.url}/#person` },
            })),
            ...buildServices(),



          ],
        }),
      },
    ],
  };
}
