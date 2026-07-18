import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseDetail } from "@/components/CaseDetail";
import { caseHead } from "@/lib/caseSeo";
import { getCanonicalSlug } from "@/lib/cases";

export const Route = createFileRoute("/uk/portfolio/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCanonicalSlug("uk", params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const canonical = getCanonicalSlug("uk", params.slug);
    if (!canonical) return {};
    return caseHead("uk", canonical);
  },
  component: () => {
    const { slug } = Route.useParams();
    const canonical = getCanonicalSlug("uk", slug)!;
    return <CaseDetail slug={canonical} locale="uk" />;
  },
});
