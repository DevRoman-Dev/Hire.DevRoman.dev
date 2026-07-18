import { LOCALIZED_SLUGS, type CaseSlug } from "./cases";
import { LOCALES, type Locale } from "./i18n";

// Map: legacy path → canonical path. Used for 301 redirects to preserve
// link equity on old English case slugs shared under localized routes.
const REDIRECTS = new Map<string, string>();

for (const loc of LOCALES) {
  if (loc === "en") continue;
  const prefix = `/${loc}/portfolio/`;
  const slugs = LOCALIZED_SLUGS[loc];
  for (const canonical of Object.keys(slugs) as CaseSlug[]) {
    const localized = slugs[canonical];
    if (localized === canonical) continue;
    // legacy /{loc}/portfolio/{en-slug} → /{loc}/portfolio/{localized-slug}
    REDIRECTS.set(prefix + canonical, prefix + localized);
  }
}

export function lookupLegacyRedirect(pathname: string): string | undefined {
  return REDIRECTS.get(pathname);
}

export function _redirectsForTest(): Record<string, string> {
  return Object.fromEntries(REDIRECTS);
}

export type { Locale };
