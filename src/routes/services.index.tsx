import { createFileRoute } from "@tanstack/react-router";
import { ServicesIndex, servicesIndexHead } from "@/components/Services";

export const Route = createFileRoute("/services/")({
  head: () => servicesIndexHead(),
  component: ServicesIndex,
});
