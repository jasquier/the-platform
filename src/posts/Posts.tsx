import { PostCard } from "@/posts/PostCard";
import posts from "./mdContent.json" with { type: "json" };
import { articlesSchema } from "@/types.d";

export function Posts() {
  const parsedPosts = articlesSchema.parse(posts);

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-6xl">The Platform</h1>
      <div className="flex flex-row gap-4">
        {parsedPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
