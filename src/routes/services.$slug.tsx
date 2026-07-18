import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetail, serviceHead } from "@/components/Services";
import { SERVICES, type ServiceSlug } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  beforeLoad: ({ params }) => {
    if (!(params.slug in SERVICES)) throw notFound();
  },
  head: ({ params }) => serviceHead(params.slug as ServiceSlug),
  component: () => {
    const { slug } = Route.useParams();
    return <ServiceDetail slug={slug as ServiceSlug} />;
  },
});
