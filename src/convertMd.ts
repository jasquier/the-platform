import { unified } from "unified";
import remarkParse from "remark-parse";
import { v4 as uuid } from "uuid";

export function convertMd(markdown: string) {
  const json = unified().use(remarkParse).parse(markdown);
  // This access is hard-coded and does not agree with ts or eslint.
  // eslint-disable-next-line
  const title: string = (json.children[1] as any).children[0].value;
  // eslint-disable-next-line
  const introduction: string = (json.children[3] as any).children[0].value;
  return {
    title,
    introduction,
    id: uuid(),
  };
}
