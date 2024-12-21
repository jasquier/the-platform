import { useEffect, useState } from "react";
import { PostCard } from "@/posts/PostCard";
import { convertMd } from "@/convertMd";
import { mdContent } from "@/posts/mdContent";

export function Posts() {
  const [content, setContent] = useState<string[]>();

  useEffect(() => {
    async function resolveContent() {
      const c = await mdContent();
      setContent(c.map((post) => post.default));
    }
    resolveContent().catch(console.error);
  }, []);

  if (!content) return <div>Loading Content...</div>;

  return (
    <div className="flex flex-col p-2">
      <span>Hello posts!</span>
      {content
        .map((post) => convertMd(post))
        .map((postProps) => (
          <PostCard key={postProps.id} {...postProps} />
        ))}
    </div>
  );
}
