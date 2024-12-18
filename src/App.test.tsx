import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import App from "./App.tsx";

describe("App", () => {
  test("displays a header", () => {
    render(<App />);
    const header = screen.getByRole("heading");
    expect(header).toHaveTextContent("Vite + React");
  });

  test("can count up", async () => {
    render(<App />);
    let button = screen.getByText("count is 0");
    await userEvent.click(button);
    button = screen.getByText("count is 1");
    expect(button).toBeInTheDocument();
  });
});
