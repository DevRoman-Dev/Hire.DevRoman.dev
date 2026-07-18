import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseDetail } from "@/components/CaseDetail";
import { caseHead } from "@/lib/caseSeo";
import { getCanonicalSlug } from "@/lib/cases";

export const Route = createFileRoute("/pl/portfolio/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCanonicalSlug("pl", params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const canonical = getCanonicalSlug("pl", params.slug);
    if (!canonical) return {};
    return caseHead("pl", canonical);
  },
  component: () => {
    const { slug } = Route.useParams();
    const canonical = getCanonicalSlug("pl", slug)!;
    return <CaseDetail slug={canonical} locale="pl" />;
  },
});
