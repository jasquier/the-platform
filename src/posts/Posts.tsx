import { PostCard } from "@/posts/PostCard";

export function Posts() {
  return (
    <div className="flex flex-col p-2">
      <span>Hello posts!</span>
      <PostCard />
    </div>
  );
}
