import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

interface PostCardProps {
  title: string;
  introduction: string;
}

function truncate(text: string, maxLen: number) {
  return text.length <= maxLen ? text : `${text.substring(0, maxLen)}...`;
}

export function PostCard({ title, introduction }: PostCardProps) {
  return (
    <Card className="max-w-[350px] text-2xl">
      <CardHeader>
        <CardTitle>{title.substring(0, 26)}</CardTitle>
        <CardDescription>{truncate(introduction, 100)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="text-lg">
          <Link href="/posts">Go to post</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
