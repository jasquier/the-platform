import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

export function PostCard() {
  return (
    <Card className="w-[350px] text-2xl">
      <CardHeader>
        <CardTitle>Post Title</CardTitle>
        <CardDescription>One sentence about the post.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="text-lg">
          <Link href="/posts">Go to post</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
