import { createRouter, RouterProvider } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PathLike } from "@/types";
import { routeTree } from "@/routeTree.gen";

export async function renderWithRouter(path?: PathLike) {
  const router = createRouter({ routeTree });
  const result = render(<RouterProvider router={router} />);

  if (!path) return;

  // links is of type HTMLElement[] so the filter step is necessary.
  const links = result.getAllByRole("link");
  const link = links
    .filter((l) => l instanceof HTMLAnchorElement)
    .find((l) => l.href.endsWith(path));

  if (!link) throw new Error(`${path} link not found!`);

  await userEvent.click(link);
}
