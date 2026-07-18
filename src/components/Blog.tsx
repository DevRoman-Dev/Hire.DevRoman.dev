import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { POSTS, POST_ORDER, postUrl, type Post, type PostSlug } from "@/lib/posts";
import { CONTACTS } from "@/lib/contacts";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

// Tiny markdown renderer: headings, paragraphs, bullet lists.
function renderMarkdown(md: string) {
  const lines = md.trim().split("\n");
  const blocks: { type: "h2" | "h3" | "p" | "ul"; content: string | string[] }[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "p", content: paragraph.join(" ") });
      paragraph = [];
    }
  };
  const flushBullets = () => {
    if (bullets.length) {
      blocks.push({ type: "ul", content: bullets });
      bullets = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.startsWith("## ")) {
      flushParagraph();
      flushBullets();
      blocks.push({ type: "h2", content: line.slice(3) });
    } else if (line.startsWith("### ")) {
      flushParagraph();
      flushBullets();
      blocks.push({ type: "h3", content: line.slice(4) });
    } else if (line.startsWith("- ")) {
      flushParagraph();
      bullets.push(line.slice(2));
    } else if (line.trim() === "") {
      flushParagraph();
      flushBullets();
    } else {
      flushBullets();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushBullets();

  // Inline **bold** and `code`
  const inline = (text: string) => {
    const parts: ReactNode[] = [];
    const regex = /(\*\*[^*]+\*\*|`[^`]+`)/g;
    let last = 0;
    let m: RegExpExecArray | null;
    let key = 0;
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) parts.push(text.slice(last, m.index));
      const tok = m[0];
      if (tok.startsWith("**")) parts.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
      else parts.push(<code key={key++} className="px-1.5 py-0.5 rounded bg-muted text-brand text-[0.9em] font-mono">{tok.slice(1, -1)}</code>);
      last = m.index + tok.length;
    }
    if (last < text.length) parts.push(text.slice(last));
    return parts;
  };

  return blocks.map((b, i) => {
    if (b.type === "h2") return <h2 key={i} className="font-display text-3xl font-bold tracking-tight mt-12 mb-4">{b.content as string}</h2>;
    if (b.type === "h3") return <h3 key={i} className="font-display text-xl font-bold tracking-tight mt-8 mb-3">{b.content as string}</h3>;
    if (b.type === "ul") return (
      <ul key={i} className="list-disc pl-6 my-4 space-y-2 text-muted-foreground leading-relaxed">
        {(b.content as string[]).map((li, j) => <li key={j}>{inline(li)}</li>)}
      </ul>
    );
    return <p key={i} className="my-4 text-muted-foreground leading-relaxed">{inline(b.content as string)}</p>;
  });
}

export function BlogIndex() {
  return (
    <article className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5">
              <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground font-medium">Blog</li>
            </ol>
          </nav>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Field notes on Laravel, PHP & e-commerce
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Practical write-ups from real client projects — architecture patterns, migration playbooks and the trade-offs I make when shipping production Laravel apps.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-6">
        {POST_ORDER.map((slug) => {
          const p = POSTS[slug];
          return (
            <Link
              key={slug}
              to="/blog/$slug"
              params={{ slug }}
              className="block rounded-xl border border-border bg-card p-8 hover:shadow-card hover:border-brand/40 transition"
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {formatDate(p.publishedAt)}</span>
                <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readingTime} min</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">{p.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md border border-border text-xs font-mono">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-brand">
                  Read <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </section>
    </article>
  );
}

export function BlogPost({ slug }: { slug: PostSlug }) {
  const p: Post = POSTS[slug];

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card/40">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link to="/blog" className="hover:text-foreground transition">Blog</Link></li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-foreground font-medium truncate max-w-[50vw]">{p.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-12">
        <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
          <time dateTime={p.publishedAt} className="inline-flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {formatDate(p.publishedAt)}
          </time>
          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readingTime} min read</span>
        </div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
          {p.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{p.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-md border border-border text-xs font-mono">{t}</span>
          ))}
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-8">
        {renderMarkdown(p.content)}
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="p-8 rounded-xl border border-border bg-card">
          <div className="text-sm text-muted-foreground">Written by</div>
          <div className="mt-2 font-display font-bold text-lg">Roman Matviy</div>
          <div className="text-sm text-muted-foreground">Senior Laravel / PHP engineer · 8+ years · 67 shipped projects</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={CONTACTS.calendly} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-gradient text-brand-foreground font-semibold shadow-glow hover:opacity-90 transition text-sm">
              Book a 30-min call
            </a>
            <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-card font-semibold hover:bg-accent transition text-sm">
              More posts
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

export function blogIndexHead() {
  const url = "https://hire.devroman.dev/blog";
  const title = "Blog — Laravel, PHP & E-commerce Field Notes | Roman Matviy";
  const description =
    "Practical write-ups on Laravel, FilamentPHP, PrestaShop and REST API architecture from real production projects.";
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
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", type: "application/rss+xml", title: "Roman Matviy — Blog RSS", href: "https://hire.devroman.dev/rss.xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${url}#blog`,
          url,
          name: "Roman Matviy — Blog",
          description,
          publisher: { "@type": "Person", "@id": "https://hire.devroman.dev/#person", name: "Roman Matviy" },
          blogPost: POST_ORDER.map((slug) => {
            const p = POSTS[slug];
            return {
              "@type": "BlogPosting",
              headline: p.title,
              url: `https://hire.devroman.dev${postUrl(slug)}`,
              datePublished: p.publishedAt,
            };
          }),
        }),
      },
    ],
  };
}

export function blogPostHead(slug: PostSlug) {
  const p = POSTS[slug];
  const url = `https://hire.devroman.dev${postUrl(slug)}`;
  const wordCount = p.content.split(/\s+/).filter(Boolean).length;

  return {
    meta: [
      { title: `${p.title} — Roman Matviy` },
      { name: "description", content: p.description },
      { name: "keywords", content: p.tags.join(", ") },
      { name: "author", content: "Roman Matviy" },
      { property: "article:published_time", content: p.publishedAt },
      ...(p.updatedAt ? [{ property: "article:modified_time", content: p.updatedAt }] : []),
      { property: "article:author", content: "Roman Matviy" },
      ...p.tags.map((t) => ({ property: "article:tag", content: t })),
      { property: "og:type", content: "article" },
      { property: "og:title", content: p.title },
      { property: "og:description", content: p.description },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.title },
      { name: "twitter:description", content: p.description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          headline: p.title,
          description: p.description,
          url,
          datePublished: p.publishedAt,
          dateModified: p.updatedAt ?? p.publishedAt,
          author: { "@type": "Person", "@id": "https://hire.devroman.dev/#person", name: "Roman Matviy", url: "https://hire.devroman.dev" },
          publisher: { "@type": "Person", "@id": "https://hire.devroman.dev/#person", name: "Roman Matviy" },
          keywords: p.tags.join(", "),
          wordCount,
          inLanguage: "en",
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://hire.devroman.dev/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://hire.devroman.dev/blog" },
            { "@type": "ListItem", position: 3, name: p.title, item: url },
          ],
        }),
      },
    ],
  };
}
