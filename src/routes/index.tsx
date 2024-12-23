import { createFileRoute } from "@tanstack/react-router";
import { Posts } from "@/posts/Posts";
import { postQueryOptions } from "@/posts/postQueryOptions";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postQueryOptions),
  component: Posts,
});
