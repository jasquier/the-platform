import React from "react";
import type { Preview } from "@storybook/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

import "@/index.css";

const preview: Preview = {
  decorators: [
    (Story) => {
      const router = createRouter({
        history: createMemoryHistory(),
        routeTree: createRootRoute({
          component: Story,
        }),
      });
      return <RouterProvider router={router} />;
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
