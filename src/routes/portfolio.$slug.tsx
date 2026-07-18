import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseDetail } from "@/components/CaseDetail";
import { caseHead } from "@/lib/caseSeo";
import { CASE_DETAILS, type CaseSlug } from "@/lib/cases";

export const Route = createFileRoute("/portfolio/$slug")({
  beforeLoad: ({ params }) => {
    if (!(params.slug in CASE_DETAILS)) throw notFound();
  },
  head: ({ params }) => caseHead("en", params.slug as CaseSlug),
  component: () => {
    const { slug } = Route.useParams();
    return <CaseDetail slug={slug as CaseSlug} locale="en" />;
  },
});
