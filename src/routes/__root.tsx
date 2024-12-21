import { createRootRouteWithContext } from "@tanstack/react-router";
import { Root } from "@/Root.tsx";
import { QueryClient } from "@tanstack/react-query";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Root,
});
