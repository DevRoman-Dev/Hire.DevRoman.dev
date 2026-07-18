import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage, verticalHead } from "@/components/Vertical";

export const Route = createFileRoute("/filamentphp-developer")({
  head: () => verticalHead("filamentphp-developer"),
  component: () => <VerticalPage slug="filamentphp-developer" />,
});
