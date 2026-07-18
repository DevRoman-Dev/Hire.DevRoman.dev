import { Link } from "@tanstack/react-router";
import { Moon, Sun, Star, ArrowRight, Mail, Github, Linkedin, MapPin, Code2, Database, ShoppingCart, Layers, Server, Wrench, Send, MessageCircle, Calendar } from "lucide-react";
import { t, LOCALES, LOCALE_LABEL, LOCALE_PATH, type Locale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { extras } from "@/lib/extras";
import { CONTACTS } from "@/lib/contacts";
import { CASE_DETAILS, CASE_ORDER } from "@/lib/cases";
import { SERVICE_ORDER } from "@/lib/services";
import { FAQ } from "@/components/FAQ";
import { Process } from "@/components/Process";
import { FloatingContact } from "@/components/FloatingContact";
import { MobileNav } from "@/components/MobileNav";
import { LeadForm } from "@/components/LeadForm";
import { getCaseHref } from "@/components/CaseDetail";
import romanPhoto from "@/assets/roman-photo.png.asset.json";

const serviceIcons = [Code2, Server, ShoppingCart, Layers, Database, Wrench];

export function Landing({ locale }: { locale: Locale }) {
  const d = t[locale];
  const x = extras[locale];
  const { theme, toggle } = useTheme();

  const navItems = [
    { href: "#services", label: d.nav.services },
    { href: "#stack", label: d.nav.stack },
    { href: "#portfolio", label: d.nav.portfolio },
    { href: "#process", label: x.process.title },
    { href: "#faq", label: x.faq.title },
    { href: "#contact", label: d.nav.contact },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingContact label={x.floatingLabel} />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to={LOCALE_PATH[locale] as "/"} className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="inline-block w-8 h-8 rounded-md bg-brand-gradient shadow-glow" />
            hire.devroman<span className="text-brand">.dev</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
            {navItems.map((it) => (
              <a key={it.href} href={it.href} className="hover:text-foreground transition">
                {it.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-md border border-border bg-card text-xs overflow-hidden">
              {LOCALES.map((l) => (
                <Link
                  key={l}
                  to={LOCALE_PATH[l] as "/"}
                  className={`px-2.5 py-1.5 font-medium transition ${
                    l === locale ? "bg-brand text-brand-foreground" : "hover:bg-accent"
                  }`}
                >
                  {LOCALE_LABEL[l]}
                </Link>
              ))}
            </div>
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-md border border-border bg-card hover:bg-accent transition"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-brand-gradient text-brand-foreground text-sm font-semibold hover:opacity-90 transition shadow-glow"
            >
              {d.hero.ctaPrimary}
            </a>
            <div className="lg:hidden">
              <MobileNav items={navItems} cta={d.hero.ctaPrimary} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/70 backdrop-blur text-xs font-medium text-muted-foreground mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-brand-glow opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-brand" />
              </span>
              {d.hero.eyebrow}
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              {d.hero.title1}{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">{d.hero.title2}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{d.hero.subtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition"
              >
                {d.hero.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={CONTACTS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card font-semibold hover:bg-accent transition"
              >
                <Calendar className="w-4 h-4" /> {x.scheduleCall}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{x.contactsTitle}:</span>
              <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:bg-accent transition">
                <Send className="w-3.5 h-3.5" /> Telegram
              </a>
              <a href={CONTACTS.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:bg-accent transition">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a>
              <a href={`mailto:${CONTACTS.email}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs hover:bg-accent transition">
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{d.hero.rating}</span>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "8+", l: d.hero.yearsLabel },
                { v: "60+", l: d.hero.projectsLabel },
                { v: "40+", l: d.hero.clientsLabel },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold text-brand">{s.v}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-brand-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border shadow-glow">
              <img
                src={romanPhoto.url}
                alt="Roman Matviy — Senior Laravel Developer"
                className="w-full h-full object-cover"
                width={896}
                height={1152}
                fetchPriority="high"
              />
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/80 border border-border rounded-xl p-4">
                <div className="text-sm font-display font-bold">Roman Matviy</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3 h-3" /> Lviv, Ukraine · Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title={d.services.title} subtitle={d.services.subtitle} />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.services.items.map((s, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              const slug = SERVICE_ORDER[i];
              return (
                <Link
                  key={s.title}
                  to="/services/$slug"
                  params={{ slug }}
                  className="group relative p-6 rounded-xl border border-border bg-card hover:border-brand/60 hover:shadow-card transition block"
                >
                  <div className="w-11 h-11 rounded-lg bg-brand-gradient text-brand-foreground flex items-center justify-center shadow-glow mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold flex items-center justify-between gap-2">
                    {s.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="py-24 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title={d.stack.title} subtitle={d.stack.subtitle} />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {d.stack.groups.map((g) => (
              <div key={g.name} className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-brand">{g.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="px-3 py-1.5 rounded-md border border-border bg-background text-sm font-mono"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title={d.portfolio.title} subtitle={d.portfolio.subtitle} />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.cases.map((c, i) => {
              const slug = CASE_ORDER[i];
              const image = CASE_DETAILS[slug].image;
              return (
                <Link
                  key={c.title}
                  to={getCaseHref(locale, slug) as "/"}
                  className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-card transition flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={c.title}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs font-mono text-brand uppercase tracking-wider">{c.tag}</div>
                    <h3 className="mt-2 font-display text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-brand font-semibold">
                      {d.portfolio.viewCase} <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <Process title={x.process.title} subtitle={x.process.subtitle} steps={x.process.steps} />

      {/* Testimonials */}
      <section className="py-24 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title={d.testimonials.title} subtitle={d.testimonials.subtitle} />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {d.testimonials.items.map((tst) => (
              <figure key={tst.name} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex gap-0.5 mb-3">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed">"{tst.text}"</blockquote>
                <figcaption className="mt-4 pt-4 border-t border-border">
                  <div className="font-display font-bold text-sm">{tst.name}</div>
                  <div className="text-xs text-muted-foreground">{tst.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeader title={d.about.title} subtitle="" />
          <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>{d.about.p1}</p>
            <p>{d.about.p2}</p>
            <p>{d.about.p3}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ title={x.faq.title} subtitle={x.faq.subtitle} items={x.faq.items} />

      {/* Contact / CTA */}
      <section id="contact" className="py-24 bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-3xl px-6">
          <SectionHeader title={d.contact.title} subtitle={d.contact.subtitle} />
          <LeadForm locale={locale} labels={x.leadForm} />

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm hover:bg-accent transition"
            >
              <Send className="w-4 h-4" /> Telegram {CONTACTS.telegramHandle}
            </a>
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm hover:bg-accent transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp {CONTACTS.whatsappHandle}
            </a>
            <a
              href={CONTACTS.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm hover:bg-accent transition"
            >
              <Calendar className="w-4 h-4" /> {x.scheduleCall}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <div className="font-display font-bold uppercase text-xs tracking-wider text-brand mb-3">Specialisations</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/laravel-developer" className="hover:text-foreground transition">Laravel Developer</Link></li>
                <li><Link to="/filamentphp-developer" className="hover:text-foreground transition">FilamentPHP Developer</Link></li>
                <li><Link to="/prestashop-developer" className="hover:text-foreground transition">PrestaShop Developer</Link></li>
                <li><Link to="/wordpress-developer" className="hover:text-foreground transition">WordPress Developer</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-display font-bold uppercase text-xs tracking-wider text-brand mb-3">Resources</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/blog" className="hover:text-foreground transition">Blog</Link></li>
                <li><Link to="/services" className="hover:text-foreground transition">All services</Link></li>
                <li><a href="/rss.xml" className="hover:text-foreground transition">RSS feed</a></li>
                <li><a href="/sitemap.xml" className="hover:text-foreground transition">Sitemap</a></li>
              </ul>
            </div>
            <div>
              <div className="font-display font-bold uppercase text-xs tracking-wider text-brand mb-3">Contact</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href={`mailto:${CONTACTS.email}`} className="hover:text-foreground transition">{CONTACTS.email}</a></li>
                <li><a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Telegram {CONTACTS.telegramHandle}</a></li>
                <li><a href={CONTACTS.calendly} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">{x.scheduleCall}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} Roman Matviy. {d.footer.rights}</div>
            <div className="flex items-center gap-4">
              <a href={CONTACTS.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition"><Github className="w-4 h-4" /></a>
              <a href={CONTACTS.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition"><Linkedin className="w-4 h-4" /></a>
              <a href={CONTACTS.telegram} aria-label="Telegram" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition"><Send className="w-4 h-4" /></a>
              <a href={`mailto:${CONTACTS.email}`} aria-label="Email" className="hover:text-foreground transition"><Mail className="w-4 h-4" /></a>
            </div>
            <div className="text-xs">{d.footer.built}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
