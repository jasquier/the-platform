import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { About } from "./About.tsx";

describe("About", () => {
  test("displays a hello message", () => {
    render(<About />);
    const helloMessage = screen.getByText(/hello/i);
    expect(helloMessage).toBeInTheDocument();
  });
});
