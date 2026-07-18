import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex, blogIndexHead } from "@/components/Blog";

export const Route = createFileRoute("/blog/")({
  head: () => blogIndexHead(),
  component: BlogIndex,
});
