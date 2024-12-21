import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { renderWithRouter } from "@/utils/testUtils";
import { PostCard } from "./PostCard";

describe("PostCard", () => {
  test("displays the post title and introduction", () => {
    const t = "Post Title";
    const intro = "Post Introduction";
    renderWithRouter(() => <PostCard title={t} introduction={intro} />);
    [t, intro]
      .map((s) => screen.getByText(s))
      .forEach((s) => expect(s).toBeInTheDocument());
  });

  test("truncates long introductions", () => {
    const intro = "a".repeat(1000);
    renderWithRouter(() => (
      <PostCard title="Not Used In This Test" introduction={intro} />
    ));
    const shortIntro = screen.getByText(`${"a".repeat(100)}...`);
    expect(shortIntro).toBeInTheDocument();
  });
});
