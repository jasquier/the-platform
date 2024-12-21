import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { renderWithRouter } from "@/utils/testUtils";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("links to home, about, posts", () => {
    renderWithRouter(Navbar);
    const links = screen.getAllByRole("link");
    const linkTexts = links.map((link) => link.textContent);
    expect(linkTexts).toHaveLength(3);
    ["Home", "About", "Posts"].forEach((expectedLinkText) => {
      expect(linkTexts).toContain(expectedLinkText);
    });
  });
});
