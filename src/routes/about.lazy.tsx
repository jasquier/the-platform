import { createLazyFileRoute } from "@tanstack/react-router";
import { About } from "@/About.tsx";

export const Route = createLazyFileRoute("/about")({
  component: About,
});
