import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouteComponent,
  RouterProvider,
} from "@tanstack/react-router";
import { render } from "@testing-library/react";

export function renderWithRouter(component: RouteComponent) {
  const queryClient = new QueryClient();

  const router = createRouter({
    context: {
      queryClient,
    },
    history: createMemoryHistory(),
    routeTree: createRootRoute({
      component: component,
    }),
  });
  const provider = (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        // @ts-expect-error Ignore router type declared in main.tsx
        router={router}
      />
    </QueryClientProvider>
  );
  render(provider);
}
