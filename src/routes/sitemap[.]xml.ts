import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { CASE_ORDER, getCasePath } from "@/lib/cases";
import { LOCALES } from "@/lib/i18n";
import { SERVICE_ORDER, serviceUrl } from "@/lib/services";
import { VERTICAL_ORDER, verticalUrl } from "@/lib/verticals";
import { POSTS, POST_ORDER, postUrl } from "@/lib/posts";

const BASE_URL = "https://hire.devroman.dev";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const localeRoots = ["/", "/uk", "/pl", "/ru"];
        const caseUrls = LOCALES.flatMap((loc) =>
          CASE_ORDER.map((slug) => getCasePath(loc, slug)),
        );
        const serviceUrls = ["/services", ...SERVICE_ORDER.map((s) => serviceUrl(s))];
        const verticalUrls = VERTICAL_ORDER.map((v) => verticalUrl(v));
        const blogUrls: { path: string; lastmod: string }[] = [
          { path: "/blog", lastmod: POSTS[POST_ORDER[0]].publishedAt },
          ...POST_ORDER.map((s) => ({ path: postUrl(s), lastmod: POSTS[s].updatedAt ?? POSTS[s].publishedAt })),
        ];

        const all: { path: string; priority: string; lastmod?: string }[] = [
          ...localeRoots.map((p) => ({ path: p, priority: p === "/" ? "1.0" : "0.8" })),
          ...verticalUrls.map((p) => ({ path: p, priority: "0.9" })),
          ...serviceUrls.map((p) => ({ path: p, priority: "0.7" })),
          ...caseUrls.map((p) => ({ path: p, priority: "0.6" })),
          ...blogUrls.map((b) => ({ path: b.path, priority: "0.7", lastmod: b.lastmod })),
        ];
        const urls = all
          .map(
            ({ path, priority, lastmod }) =>
              `  <url><loc>${BASE_URL}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}<changefreq>weekly</changefreq><priority>${priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
