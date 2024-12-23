import { join } from "node:path";
import { readdir, writeFile } from "node:fs/promises";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { readFileSync } from "node:fs";
import { Article, articleSchema } from "./types.d";
import { createHash } from "node:crypto";

// This file creates /src/posts/mdContent.json which includes an object
// for each markdown file in /content.

const mdDirPath = join(import.meta.dirname, "..", "content");
const outPath = join(import.meta.dirname, "posts", "mdContent.json");

try {
  const files = await readdir(mdDirPath);

  const mdFiles = files
    // Remove files that are not markdown.
    .filter((file) => file.toLowerCase().endsWith(".md"))
    // File name - > file contents.
    .map((file) => readFileSync(join(mdDirPath, file), "utf-8"))
    // File contents -> markdown as json.
    .map((md) => unified().use(remarkParse).parse(md))
    // Raw json -> parsed json.
    .map((rawJson) => extractContentsFromJson(rawJson))
    // Convert to an array.
    .reduce<Article[]>((arr, json) => {
      arr.push(json);
      return arr;
    }, []);

  await writeFile(outPath, JSON.stringify(mdFiles));
} catch (err) {
  console.error(err);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractContentsFromJson(json: any) {
  function extractValue(index: number) {
    // eslint-disable-next-line
    return (json.children[index] as any).children[0].value;
  }
  // This access is hard-coded and does not agree with ts or eslint.
  // eslint-disable-next-line
  const title: string = extractValue(1);
  // eslint-disable-next-line
  const introduction: string = extractValue(3);
  // eslint-disable-next-line
  const howItWorks: string = extractValue(5);
  // eslint-disable-next-line
  const basicExample: string = extractValue(7);
  // eslint-disable-next-line
  const keyFeatures: string = extractValue(9);
  // eslint-disable-next-line
  const advancedUsage: string = extractValue(11);
  // eslint-disable-next-line
  const commonPitfalls: string = extractValue(13);
  // eslint-disable-next-line
  const workingExample: string = extractValue(15);
  // eslint-disable-next-line
  const furtherReading: string = extractValue(17);
  // eslint-disable-next-line
  const closing: string = extractValue(19);
  return articleSchema.parse({
    title,
    introduction,
    howItWorks,
    basicExample,
    keyFeatures,
    advancedUsage,
    commonPitfalls,
    workingExample,
    furtherReading,
    closing,
    id: createHash("md5").update(title).digest("hex").substring(0, 20),
  });
}
