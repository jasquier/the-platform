import { createFileRoute } from "@tanstack/react-router";
import { Posts } from "@/posts/Posts";

export const Route = createFileRoute("/posts")({
  component: Posts,
});
