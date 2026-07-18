import { createFileRoute } from "@tanstack/react-router";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/ru/")({
  component: () => <Landing locale="ru" />,
});
