import { SITE_URL } from '@/lib/site'
import { sortedBlogs, allCategories, archiveSlugs } from '@/lib/blog-queries'
import { FEATURED } from '@/lib/projects'

export default function sitemap() {
  const blogs = sortedBlogs()
  const latest = blogs[0]?.date

  return [
    {
      url: SITE_URL,
      lastModified: latest,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: latest,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/work`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...FEATURED.map((project) => ({
      url: `${SITE_URL}/work/${project.slug}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
    ...blogs.map((blog) => ({
      url: `${SITE_URL}/blogs/${blog.slug}`,
      lastModified: blog.date,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...allCategories().map((category) => ({
      url: `${SITE_URL}/categories/${category.slug}`,
      lastModified: latest,
      changeFrequency: 'weekly',
      priority: 0.6,
    })),
    ...archiveSlugs().map((slug) => ({
      url: `${SITE_URL}/archive/${slug}`,
      changeFrequency: 'yearly',
      priority: 0.3,
    })),
  ]
}
