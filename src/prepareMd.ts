import { readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

// This file creates src/posts/mdContent.ts which includes an import statement
// for each markdown file in content/.

const mdDirPath = join(import.meta.dirname, "..", "content");
const outPath = join(import.meta.dirname, "posts", "mdContent.ts");
try {
  const files = await readdir(mdDirPath);
  const mdFiles = files
    .filter((file) => file.toLowerCase().endsWith(".md"))
    .map((file) => `await import("../../content/${file}?raw")`);
  await writeBarrelFile(outPath, mdFiles);
} catch (err) {
  console.error(err);
}

async function writeBarrelFile(path: string, data: string[]) {
  const fileContent = `export const mdContent = [
  ${data.join(",\n  ")},
];\n`;
  await writeFile(path, fileContent);
}
