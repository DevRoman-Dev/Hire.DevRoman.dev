import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => routeHead("en"),
  component: () => <Landing locale="en" />,
});
