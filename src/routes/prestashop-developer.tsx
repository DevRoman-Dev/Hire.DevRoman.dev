import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage, verticalHead } from "@/components/Vertical";

export const Route = createFileRoute("/prestashop-developer")({
  head: () => verticalHead("prestashop-developer"),
  component: () => <VerticalPage slug="prestashop-developer" />,
});
