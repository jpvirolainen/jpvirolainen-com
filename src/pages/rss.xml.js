import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('writing')).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Juho-Pekka Virolainen',
    description:
      'Essays on systems architecture, transforming legacy engineering organizations, and agent-era software.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
  });
}
