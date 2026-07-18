import { createFileRoute, Outlet } from "@tanstack/react-router";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/pl")({
  head: () => routeHead("pl"),
  component: () => <Outlet />,
});
