// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

// 4. Define a `loader` and `schema` for each collection
const blog = defineCollection({
  loader: glob({ base: "./src/data/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publish_date: z.string(),
    image: z.string(),
    seo_keywords: z.string().optional(),
    nextArticle: z
      .object({
        title: z.string(),
        slug: z.string(),
      })
      .optional(),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { blog };
