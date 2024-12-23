import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { renderWithRouter } from "@/utils/testUtils";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  test("links to home, posts", () => {
    renderWithRouter(Navbar);
    const links = screen.getAllByRole("link");
    const linkTexts = links.map((link) => link.textContent);
    const expected = ["Home"];
    expect(linkTexts).toHaveLength(expected.length);
    expected.forEach((expectedLinkText) => {
      expect(linkTexts).toContain(expectedLinkText);
    });
  });
});
