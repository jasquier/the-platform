import { queryOptions } from "@tanstack/react-query";
import { mdContent } from "./mdContent";

export const postQueryOptions = queryOptions({
  queryKey: ["posts"],
  queryFn: async () => {
    const c = await mdContent();
    return c.map((post) => post.default);
  },
});
