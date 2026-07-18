import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { POSTS, POST_ORDER, postUrl } from "@/lib/posts";

const SITE = "https://hire.devroman.dev";

function escapeXml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = POST_ORDER.map((slug) => {
          const p = POSTS[slug];
          const url = `${SITE}${postUrl(slug)}`;
          return `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
    <description>${escapeXml(p.description)}</description>
  </item>`;
        }).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Roman Matviy — Blog</title>
  <link>${SITE}/blog</link>
  <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
  <description>Field notes on Laravel, PHP and e-commerce from real client projects.</description>
  <language>en</language>
${items}
</channel>
</rss>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
