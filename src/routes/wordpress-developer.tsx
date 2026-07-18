import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage, verticalHead } from "@/components/Vertical";

export const Route = createFileRoute("/wordpress-developer")({
  head: () => verticalHead("wordpress-developer"),
  component: () => <VerticalPage slug="wordpress-developer" />,
});
