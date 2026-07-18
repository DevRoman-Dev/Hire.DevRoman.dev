import { createFileRoute, Outlet } from "@tanstack/react-router";
import { routeHead } from "@/lib/seo";

export const Route = createFileRoute("/uk")({
  head: () => routeHead("uk"),
  component: () => <Outlet />,
});
