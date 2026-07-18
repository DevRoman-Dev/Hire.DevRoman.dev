import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPost, blogPostHead } from "@/components/Blog";
import { POSTS, type PostSlug } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!(params.slug in POSTS)) throw notFound();
  },
  head: ({ params }) => blogPostHead(params.slug as PostSlug),
  component: () => {
    const { slug } = Route.useParams();
    return <BlogPost slug={slug as PostSlug} />;
  },
});
