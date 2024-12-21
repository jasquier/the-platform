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

export function PostCard({ title, introduction }: PostCardProps) {
  return (
    <Card className="w-[350px] text-2xl">
      <CardHeader>
        <CardTitle>{title.substring(0, 26)}</CardTitle>
        <CardDescription>{introduction.substring(0, 100)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="text-lg">
          <Link href="/posts">Go to post</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
