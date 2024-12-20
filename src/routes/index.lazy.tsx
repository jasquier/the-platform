import { createLazyFileRoute } from "@tanstack/react-router";
import { Index } from "@/Index.tsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});
