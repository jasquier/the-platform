import {
  createRouter,
  RouteComponent,
  RouterProvider,
} from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";

export function withRouter(component: RouteComponent) {
  const router = createRouter({ routeTree });
  return <RouterProvider router={router} defaultComponent={component} />;
}
