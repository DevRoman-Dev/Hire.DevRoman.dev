import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseDetail } from "@/components/CaseDetail";
import { caseHead } from "@/lib/caseSeo";
import { getCanonicalSlug } from "@/lib/cases";

export const Route = createFileRoute("/ru/portfolio/$slug")({
  beforeLoad: ({ params }) => {
    if (!getCanonicalSlug("ru", params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const canonical = getCanonicalSlug("ru", params.slug);
    if (!canonical) return {};
    return caseHead("ru", canonical);
  },
  component: () => {
    const { slug } = Route.useParams();
    const canonical = getCanonicalSlug("ru", slug)!;
    return <CaseDetail slug={canonical} locale="ru" />;
  },
});
