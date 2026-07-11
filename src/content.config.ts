import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { blogCategories } from './data/site';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    image: z.string().default('/images/blog/cover-default.svg'),
    author: z.string().default('Felipe Traina'),
    authorRole: z.string().default('CEO Salestime'),
    authorImage: z.string().default('/images/blog/author-felipe.webp'),
    category: z.enum(blogCategories),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
