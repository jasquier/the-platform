import { PostCard } from "@/posts/PostCard";
import { convertMd } from "@/convertMd";
import { mdContent } from "@/posts/mdContent";

export function Posts() {
  return (
    <div className="flex flex-col p-2">
      <span>Hello posts!</span>
      {mdContent
        .map((piece) => convertMd(piece.default))
        .map(({ title, introduction }) => (
          <PostCard key={title} title={title} introduction={introduction} />
        ))}
    </div>
  );
}
