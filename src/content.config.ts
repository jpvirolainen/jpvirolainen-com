import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      'Agents, APIs & Discovery',
      'Systems & Organizations',
      'AI in Engineering',
    ]),
    featured: z.boolean().default(false),
    flagship: z.boolean().default(false),
    diagram: z
      .enum([
        'waves',
        'apis',
        'disposable',
        'architecture',
        'residue',
        'neurosymbolic',
      ])
      .optional(),
  }),
});

export const collections = { writing };
