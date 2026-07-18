import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { SERVICES, SERVICE_ORDER, type ServiceInfo, type ServiceSlug, serviceUrl } from "@/lib/services";
import { CONTACTS } from "@/lib/contacts";

export function ServicesIndex() {
  return (
    <article className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground font-medium">Services</li>
            </ol>
          </nav>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Laravel, PHP & Fullstack Services
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Six focused engagements — from Laravel product builds to REST APIs, e-commerce, CRM / ERP and senior consulting. 67 completed projects, 5.0 / 5 average client rating.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6">
        {SERVICE_ORDER.map((slug) => {
          const s = SERVICES[slug];
          return (
            <Link
              key={slug}
              to="/services/$slug"
              params={{ slug }}
              className="group rounded-xl border border-border bg-card p-6 hover:shadow-card hover:border-brand/40 transition"
            >
              <h2 className="font-display text-xl font-bold tracking-tight">{s.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <div className="flex text-brand" aria-label={`${s.rating.value} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {s.rating.value.toFixed(1)} · {s.rating.count} reviews
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm font-mono">
                <span className="text-brand">
                  {s.unit === "hour" ? `$${s.priceMin}–$${s.priceMax}/hr` : `from $${s.priceMin.toLocaleString()}`}
                </span>
                <span className="inline-flex items-center gap-1 group-hover:text-brand transition">
                  Details <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </section>

      <section className="bg-hero border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight">Ready to start?</h2>
          <p className="mt-3 text-muted-foreground">Book a free 30-min call or drop me a message.</p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a href={CONTACTS.calendly} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition">
              <CheckCircle2 className="w-4 h-4" /> Book a call
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card font-semibold hover:bg-accent transition">
              Send a message
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}

export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const s: ServiceInfo = SERVICES[slug];
  const related = SERVICE_ORDER.filter((x) => x !== slug).slice(0, 3);

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link to="/services" className="hover:text-foreground transition">Services</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground font-medium truncate max-w-[60vw]">{s.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <header className="mx-auto max-w-5xl px-6 pt-12">
        <div className="text-xs font-mono text-brand uppercase tracking-wider">Service</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
          {s.name}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">{s.headline}</p>

        <div className="mt-8 flex items-center gap-6 flex-wrap p-6 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2">
            <div className="flex text-brand" aria-label={`${s.rating.value} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-display font-bold text-lg">{s.rating.value.toFixed(1)}</span>
            <span className="text-sm text-muted-foreground">/ 5 · {s.rating.count} verified reviews</span>
          </div>
          <div className="text-sm font-mono text-brand">
            {s.unit === "hour" ? `$${s.priceMin}–$${s.priceMax} / hour` : `from $${s.priceMin.toLocaleString()} per project`}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12 space-y-10">
        <p className="text-lg text-muted-foreground leading-relaxed">{s.longDescription}</p>

        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">What's included</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {s.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">Technology</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {s.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-md border border-border bg-card text-sm font-mono">{t}</span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">Client reviews</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Aggregated from 67 verified projects on Freelancehunt and LinkedIn recommendations.
          </p>
          <div className="mt-6 space-y-4">
            {s.reviews.map((r, i) => (
              <figure key={i} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex text-brand mb-3" aria-label={`${r.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed italic">{r.text}</blockquote>
                <figcaption className="mt-4 text-sm flex items-center gap-2 flex-wrap">
                  <span className="font-semibold">{r.author}</span>
                  <span className="text-muted-foreground">— {r.role}</span>
                  <time className="ml-auto text-xs text-muted-foreground font-mono" dateTime={r.date}>{r.date}</time>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hero border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight">Discuss your {s.name.split(" ")[0]} project</h2>
          <p className="mt-3 text-muted-foreground">Free 30-minute intro call. No pressure, honest scoping.</p>
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <a href={CONTACTS.calendly} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition">
              <CheckCircle2 className="w-4 h-4" /> Book a call
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card font-semibold hover:bg-accent transition">
              Send a message
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-2xl font-bold tracking-tight">Other services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {related.map((rs) => {
            const r = SERVICES[rs];
            return (
              <Link key={rs} to="/services/$slug" params={{ slug: rs }} className="group rounded-xl border border-border bg-card p-5 hover:shadow-card transition">
                <h3 className="font-display font-bold flex items-center justify-between">
                  {r.name} <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </article>
  );
}

export function serviceHead(slug: ServiceSlug) {
  const s = SERVICES[slug];
  const path = serviceUrl(slug);
  const url = `https://hire.devroman.dev${path}`;
  const title = `${s.name} — Roman Matviy`;
  const description = s.description;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: s.name,
          description: s.longDescription,
          serviceType: s.name,
          url,
          provider: {
            "@type": "Person",
            "@id": "https://hire.devroman.dev/#person",
            name: "Roman Matviy",
            url: "https://hire.devroman.dev",
          },
          areaServed: "Worldwide",
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: s.priceMin,
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: s.priceMin,
              maxPrice: s.priceMax,
              priceCurrency: "USD",
              unitText: s.unit === "hour" ? "HUR" : "Project",
            },
            availability: "https://schema.org/InStock",
            url,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: s.rating.value.toFixed(1),
            bestRating: "5",
            worstRating: "1",
            ratingCount: s.rating.count,
            reviewCount: s.reviews.length,
          },
          review: s.reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            datePublished: r.date,
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5", worstRating: "1" },
            reviewBody: r.text,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hire.devroman.dev/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://hire.devroman.dev/services" },
            { "@type": "ListItem", position: 3, name: s.name, item: url },
          ],
        }),
      },
    ],
  };
}

export function servicesIndexHead() {
  const url = "https://hire.devroman.dev/services";
  const title = "Services — Laravel, PHP, REST API, E-commerce, CRM | Roman Matviy";
  const description =
    "Senior Laravel / PHP engineering services: custom apps, REST APIs, PrestaShop & WooCommerce, WordPress, CRM / ERP and consulting. 67 completed projects, 5.0 / 5 average rating.";
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Services by Roman Matviy",
          itemListElement: SERVICE_ORDER.map((slug, i) => {
            const s = SERVICES[slug];
            return {
              "@type": "ListItem",
              position: i + 1,
              url: `https://hire.devroman.dev${serviceUrl(slug)}`,
              name: s.name,
            };
          }),
        }),
      },
    ],
  };
}
