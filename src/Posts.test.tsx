import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Posts } from "./Posts.tsx";

describe("Posts", () => {
  test("displays a hello message", () => {
    render(<Posts />);
    const helloMessage = screen.getByText(/hello/i);
    expect(helloMessage).toBeInTheDocument();
  });

  test("displays a button", () => {
    render(<Posts />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
