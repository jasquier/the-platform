import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Route } from "@/routes/posts";
import { PathLike } from "@/types";
import { renderWithRouter } from "@/utils/testUtils";

const { path } = Route.options as { path: PathLike };

describe("Posts", () => {
  test("displays a hello message", async () => {
    await renderWithRouter(path);
    const helloMessage = screen.getByText(/hello/i);
    expect(helloMessage).toBeInTheDocument();
  });

  // TODO?: change this test to look up the number of .md files in content.
  // TODO?: then check for that many links? What about pagination?
  test("links to posts", async () => {
    await renderWithRouter(path);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
