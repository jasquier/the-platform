import { useSuspenseQuery } from "@tanstack/react-query";
import { postQueryOptions } from "./postQueryOptions";

import { convertMd } from "@/convertMd";
import { PostCard } from "@/posts/PostCard";

export function Posts() {
  const postsQuery = useSuspenseQuery(postQueryOptions);
  const posts = postsQuery.data;

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-6xl">The Platform</h1>
      <div className="flex flex-row gap-4">
        {posts
          .map((post) => convertMd(post))
          .map((postProps) => (
            <PostCard key={postProps.id} {...postProps} />
          ))}
      </div>
    </div>
  );
}
