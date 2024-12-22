import React from "react";
import type { Preview } from "@storybook/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const preview: Preview = {
  decorators: [
    (Story) => {
      const queryClient = new QueryClient();
      const router = createRouter({
        history: createMemoryHistory(),
        routeTree: createRootRoute({
          component: Story,
        }),
      });
      return (
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background | color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export default preview;
