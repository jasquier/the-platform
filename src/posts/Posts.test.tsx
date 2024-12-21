import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { renderWithRouter } from "@/utils/testUtils";
import { Route } from "@/routes/posts";

const { path } = Route.options as { path: `/${string}` };

describe("Posts", () => {
  test("displays a hello message", async () => {
    await renderWithRouter(path);
    const helloMessage = screen.getByText(/hello/i);
    expect(helloMessage).toBeInTheDocument();
  });

  test("links to posts", async () => {
    await renderWithRouter(path);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
