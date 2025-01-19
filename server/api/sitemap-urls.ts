import { defineEventHandler } from 'h3'
import { serverQueryContent } from '#content/server'

interface BlogPost {
  slug: string
  _updatedAt: string
}

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event)
    .where({ published: true })
    .find();

  return posts.map((post: BlogPost) => ({
    loc: `/blogs/${post.slug}`,
    lastmod: post._updatedAt || new Date(),
    changefreq: 'weekly',
    priority: 0.7
  }));
});
