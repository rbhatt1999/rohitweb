import url from "@/utils/url";
import { getBlogs } from "./(blogs)/blogs/page";

export default async function sitemap() {
  const blogs = await getBlogs(false,false,true);
  const req = await fetch(`${url}/api/blogs/categories`)
  const categoryData = await req.json()
  const blogUrls = blogs.data.map(blog => {
    return {
      url: `${url}/blogs/${blog.slug}`,
      lastModified: new Date(blog.date),
    }
  })
  const categoryUrls = categoryData.map(category => {
    return {
      url: `${url}/categories/${category.slug}`,
      lastModified: new Date(),
    }
  })

  const date = new Date();
  return [
    {
      url: `${url}`,
      lastModified: date,
      priority: 1,
    },
    {
      url: `${url}/blogs`,
    },
    ...blogUrls,
    ...categoryUrls,
  ]
}
