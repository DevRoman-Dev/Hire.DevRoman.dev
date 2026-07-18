import { createFileRoute, Outlet } from "@tanstack/react-router";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/ru")({
  head: () => routeHead("ru"),
  component: () => <Outlet />,
});
