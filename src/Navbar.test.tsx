import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "@testing-library/jest-dom/vitest";

import { Navbar } from "./Navbar.tsx";

const router = createRouter({ routeTree });

describe("Navbar", () => {
  test("links to home and about", () => {
    render(<RouterProvider router={router} defaultComponent={Navbar} />);
    const links = screen.getAllByRole("link");
    const linkTexts = links.map((link) => link.textContent);
    expect(linkTexts).toHaveLength(2);
    ["Home", "About"].forEach((expectedLinkText) => {
      expect(linkTexts).toContain(expectedLinkText);
    });
  });
});
