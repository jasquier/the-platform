import type { Meta, StoryObj } from "@storybook/react";

import { Posts } from "@/posts/Posts";

const meta = {
  title: "Posts/Posts",
  component: Posts,
} satisfies Meta<typeof Posts>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
