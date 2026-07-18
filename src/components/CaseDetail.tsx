import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { CASE_DETAILS, CASE_ORDER, getCasePath, type CaseSlug } from "@/lib/cases";
import { extras } from "@/lib/extras";
import { t, LOCALE_PATH, type Locale } from "@/lib/i18n";

export function CaseDetail({ slug, locale }: { slug: CaseSlug; locale: Locale }) {
  const c = CASE_DETAILS[slug];
  const dict = t[locale];
  const x = extras[locale].caseDetail;
  const cases = dict.cases;
  const idx = CASE_ORDER.indexOf(slug);
  const meta = cases[idx];
  const homePath = LOCALE_PATH[locale];
  const portfolioPath = `${homePath === "/" ? "" : homePath}/#portfolio`;

  const related = CASE_ORDER.filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => ({ slug: s, image: CASE_DETAILS[s].image, meta: cases[CASE_ORDER.indexOf(s)] }));

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li>
                <Link to={LOCALE_PATH[locale] as "/"} className="hover:text-foreground transition">
                  {dict.nav.services ? "Home" : "Home"}
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <a href={portfolioPath} className="hover:text-foreground transition">
                  {dict.nav.portfolio}
                </a>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground font-medium truncate max-w-[60vw]">
                {meta.title}
              </li>
            </ol>
          </nav>
          <Link
            to={LOCALE_PATH[locale] as "/"}
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {x.backToPortfolio}
          </Link>
        </div>
      </div>

      <header className="mx-auto max-w-5xl px-6 pt-12">
        <div className="text-xs font-mono text-brand uppercase tracking-wider">{meta.tag}</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
          {meta.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">{meta.desc}</p>

        <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl border border-border bg-card">
          <Meta label={x.industry} value={c.industry} />
          <Meta label={x.duration} value={c.duration} />
          <Meta label={x.role} value={c.role} />
          <Meta label="Client" value={c.client.name} />
        </dl>
      </header>


      <div className="mx-auto max-w-5xl px-6 mt-10">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-card">
          <img src={c.image} alt={meta.title} className="w-full h-full object-cover" width={1600} height={900} />
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-16 space-y-12">
        <Block title={x.challenge} body={c.challenge} />
        <Block title={x.solution} body={c.solution} />
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">{x.techStack}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.tech.map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-md border border-border bg-card text-sm font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
        <Block title={x.result} body={c.result} />
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight">{x.keyMetrics}</h2>
          <dl className="mt-6 grid grid-cols-3 gap-6">
            {c.metrics.map((m) => (
              <div key={m.label} className="p-5 rounded-xl border border-border bg-card">
                <dt className="font-display text-3xl font-bold text-brand">{m.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{m.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="mt-4 p-8 rounded-xl border border-border bg-card relative">
          <div className="text-brand text-5xl font-display leading-none absolute top-3 left-5 opacity-30">“</div>
          <blockquote className="text-lg leading-relaxed text-foreground italic relative">
            {c.review.text}
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-3 text-sm">
            <div className="flex text-brand" aria-label={`${c.rating.value} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden="true">★</span>
              ))}
            </div>
            <span className="font-semibold">{c.review.author}</span>
            <span className="text-muted-foreground">— {c.review.role}</span>
          </figcaption>
        </figure>
      </section>


      <section className="bg-hero relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{x.ctaTitle}</h2>
          <p className="mt-3 text-muted-foreground">{x.ctaSubtitle}</p>
          <a
            href={portfolioPath.replace("#portfolio", "#contact")}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition"
          >
            <CheckCircle2 className="w-4 h-4" /> {x.ctaButton}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-2xl font-bold tracking-tight">{x.similar}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={getCaseHref(locale, r.slug) as "/"}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-card transition"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img
                  src={r.image}
                  alt={r.meta.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-5">
                <div className="text-xs font-mono text-brand uppercase tracking-wider">{r.meta.tag}</div>
                <h3 className="mt-2 font-display text-base font-bold flex items-center justify-between">
                  {r.meta.title} <ArrowRight className="w-4 h-4" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-muted-foreground font-mono">{label}</dt>
      <dd className="mt-1 font-display font-semibold">{value}</dd>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold tracking-tight">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

export function getCaseHref(locale: Locale, slug: CaseSlug): string {
  return getCasePath(locale, slug);
}
