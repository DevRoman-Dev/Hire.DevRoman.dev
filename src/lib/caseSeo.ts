import type { Locale } from "./i18n";
import { LOCALES } from "./i18n";
import { CASE_DETAILS, CASE_ORDER, getCasePath, type CaseSlug } from "./cases";
import { t } from "./i18n";

const SITE = "https://hire.devroman.dev";
const abs = (p: string) => `${SITE}${p === "/" ? "" : p}`;

export function caseHead(locale: Locale, slug: CaseSlug) {
  const c = CASE_DETAILS[slug];
  const idx = CASE_ORDER.indexOf(slug);
  const meta = t[locale].cases[idx];
  const path = abs(getCasePath(locale, slug));
  const title = `${meta.title} — Roman Matviy`;
  const description = meta.desc;

  const LANG_TAG: Record<Locale, string> = { en: "en", uk: "uk-UA", pl: "pl-PL", ru: "ru-RU" };
  const alternates = LOCALES.map((loc) => ({
    rel: "alternate" as const,
    hrefLang: LANG_TAG[loc],
    href: abs(getCasePath(loc, slug)),
  }));

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
      { property: "og:image", content: c.image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: c.image },
    ],
    links: [
      { rel: "canonical", href: path },
      ...alternates,
      { rel: "alternate", hrefLang: "x-default", href: abs(getCasePath("en", slug)) },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "@id": `${path}#case`,
          name: meta.title,
          headline: meta.title,
          description,
          image: c.image,
          url: path,
          author: { "@type": "Person", name: "Roman Matviy", url: SITE },
          creator: { "@type": "Person", name: "Roman Matviy", url: SITE },
          keywords: c.tech.join(", "),
          about: c.industry,
          inLanguage: locale,
          datePublished: "2024-01-01",
          client: {
            "@type": c.client.type,
            name: c.client.name,
            ...(c.client.area ? { areaServed: c.client.area } : {}),
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: c.rating.value.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: c.rating.count,
          },
          review: {
            "@type": "Review",
            author: { "@type": "Person", name: c.review.author },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: c.review.text,
          },
        }),
      },

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: abs(locale === "en" ? "/" : `/${locale}`) },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: abs(locale === "en" ? "/#portfolio" : `/${locale}#portfolio`) },
            { "@type": "ListItem", position: 3, name: meta.title, item: path },
          ],
        }),
      },
    ],
  };
}
