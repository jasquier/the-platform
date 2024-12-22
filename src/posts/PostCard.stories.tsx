import type { Meta, StoryObj } from "@storybook/react";

import { PostCard } from "@/posts/PostCard";

const meta = {
  title: "Posts/PostCard",
  component: PostCard,
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a elit fermentum, volutpat urna in, pharetra eros. ";

export const Default: Story = {
  args: {
    title: "Post Card Title",
    introduction: lorem,
    id: "123",
  },
};
