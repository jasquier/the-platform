import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import "@testing-library/jest-dom/vitest";

import { routeTree } from "@/routeTree.gen";
import { Navbar } from "@/Navbar.tsx";

const router = createRouter({ routeTree });

describe("Navbar", () => {
  test("links to home, about, posts", () => {
    render(<RouterProvider router={router} defaultComponent={Navbar} />);
    const links = screen.getAllByRole("link");
    const linkTexts = links.map((link) => link.textContent);
    expect(linkTexts).toHaveLength(3);
    ["Home", "About", "Posts"].forEach((expectedLinkText) => {
      expect(linkTexts).toContain(expectedLinkText);
    });
  });
});
