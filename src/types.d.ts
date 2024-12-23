import z from "zod";

export type PathLike = `/${string}`;

export const articleSchema = z.object({
  title: z.string().readonly(),
  introduction: z.string().readonly(),
  howItWorks: z.string().readonly(),
  basicExample: z.string().readonly(),
  keyFeatures: z.string().readonly(),
  advancedUsage: z.string().readonly(),
  commonPitfalls: z.string().readonly(),
  workingExample: z.string().readonly(),
  furtherReading: z.string().readonly(),
  closing: z.string().readonly(),
  id: z.string().readonly(),
});
export type Article = z.infer<typeof articleSchema>;

export const articlesSchema = z.array(articleSchema);
export type Articles = z.infer<typeof articlesSchema>;
