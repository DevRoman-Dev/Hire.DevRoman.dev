import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { VERTICALS, verticalUrl, type VerticalSlug } from "@/lib/verticals";
import { CASE_DETAILS, getCasePath } from "@/lib/cases";
import { CONTACTS } from "@/lib/contacts";

export function VerticalPage({ slug }: { slug: VerticalSlug }) {
  const v = VERTICALS[slug];

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground font-medium">{v.keyword}</li>
            </ol>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden bg-hero border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs font-mono text-brand uppercase tracking-wider">Specialization</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            {v.h1}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">{v.headline}</p>

          <div className="mt-8 flex items-center gap-6 flex-wrap p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-2">
              <div className="flex text-brand" aria-label={`${v.aggregateRating.value} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-display font-bold text-lg">{v.aggregateRating.value.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">/ 5 · {v.aggregateRating.count} projects reviewed</span>
            </div>
            <a
              href={CONTACTS.calendly}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition text-sm"
            >
              Book a 30-min call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <p className="text-lg text-muted-foreground leading-relaxed">{v.intro}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="font-display text-3xl font-bold tracking-tight">Why work with me</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {v.usp.map((u) => (
            <div key={u.title} className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-display font-bold">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="font-display text-3xl font-bold tracking-tight">Stack</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {v.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 rounded-md border border-border bg-card text-sm font-mono">{t}</span>
          ))}
        </div>
      </section>

      {v.relatedCases.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight">Selected projects</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {v.relatedCases.map((cs) => {
              const c = CASE_DETAILS[cs];
              return (
                <a key={cs} href={getCasePath("en", cs)} className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-card transition">
                  <img src={c.image} alt="" className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground font-mono">{c.industry}</div>
                    <h3 className="mt-2 font-display font-bold text-lg">{c.client.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.challenge}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-sm text-brand group-hover:gap-2 transition-all">
                      View case <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      )}

      <section className="bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight">FAQ</h2>
          <dl className="mt-8 space-y-6">
            {v.faq.map((f) => (
              <div key={f.q} className="border-b border-border pb-6 last:border-0">
                <dt className="font-display font-bold text-lg">{f.q}</dt>
                <dd className="mt-2 text-muted-foreground leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight">Discuss your {v.keyword} project</h2>
          <p className="mt-3 text-muted-foreground">Free 30-minute intro call. Honest scoping, no pressure.</p>
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

export function verticalHead(slug: VerticalSlug) {
  const v = VERTICALS[slug];
  const path = verticalUrl(slug);
  const url = `https://hire.devroman.dev${path}`;

  return {
    meta: [
      { title: v.metaTitle },
      { name: "description", content: v.metaDescription },
      { name: "keywords", content: `${v.keyword}, hire ${v.keyword}, senior ${v.keyword}, freelance ${v.keyword}` },
      { property: "og:type", content: "profile" },
      { property: "og:title", content: v.metaTitle },
      { property: "og:description", content: v.metaDescription },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: v.metaTitle },
      { name: "twitter:description", content: v.metaDescription },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "@id": `${url}#service`,
              name: v.h1,
              description: v.metaDescription,
              url,
              provider: { "@type": "Person", "@id": "https://hire.devroman.dev/#person", name: "Roman Matviy" },
              areaServed: "Worldwide",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: v.aggregateRating.value.toFixed(1),
                bestRating: "5",
                worstRating: "1",
                ratingCount: v.aggregateRating.count,
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: v.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://hire.devroman.dev/" },
                { "@type": "ListItem", position: 2, name: v.keyword, item: url },
              ],
            },
          ],
        }),
      },
    ],
  };
}
