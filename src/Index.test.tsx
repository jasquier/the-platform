import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Index } from "@/Index.tsx";

describe("Index", () => {
  test("displays a header", () => {
    render(<Index />);
    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent("Welcome Home!");
  });
});
