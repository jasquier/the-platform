import { createFileRoute } from "@tanstack/react-router";
import { Posts } from "@/Posts";

export const Route = createFileRoute("/posts")({
  component: Posts,
});
