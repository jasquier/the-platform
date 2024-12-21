import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouteComponent,
  RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";

export function renderWithRouter(component: RouteComponent) {
  const router = createRouter({
    history: createMemoryHistory(),
    routeTree: createRootRoute({
      component: component,
    }),
  });
  const provider = (
    <RouterProvider
      // @ts-expect-error Ignore router type declared in main.tsx
      router={router}
    />
  );
  render(provider);
}
