import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { renderWithRouter } from "@/utils/testUtils";
import { Posts } from "./Posts";

describe("Posts", () => {
  test("displays a header", () => {
    renderWithRouter(Posts);
    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent(/the platform/i);
  });

  // TODO?: change this test to look up the number of .md files in content.
  // TODO?: then check for that many links? What about pagination?
  test("links to posts", () => {
    renderWithRouter(Posts);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toBeInTheDocument();
    });
  });
});
