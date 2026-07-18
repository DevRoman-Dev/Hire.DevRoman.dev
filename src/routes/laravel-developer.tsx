import { createFileRoute } from "@tanstack/react-router";
import { VerticalPage, verticalHead } from "@/components/Vertical";

export const Route = createFileRoute("/laravel-developer")({
  head: () => verticalHead("laravel-developer"),
  component: () => <VerticalPage slug="laravel-developer" />,
});
