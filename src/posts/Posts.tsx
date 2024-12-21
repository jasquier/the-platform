import { useSuspenseQuery } from "@tanstack/react-query";
import { postQueryOptions } from "./postQueryOptions";

import { convertMd } from "@/convertMd";
import { PostCard } from "@/posts/PostCard";

export function Posts() {
  const postsQuery = useSuspenseQuery(postQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="flex flex-col p-2">
      <span>Hello posts!</span>
      {posts
        .map((post) => convertMd(post))
        .map((postProps) => (
          <PostCard key={postProps.id} {...postProps} />
        ))}
    </div>
  );
}
