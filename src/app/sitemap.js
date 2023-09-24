import url from "@/utils/url";
import { getBlogs } from "./(blogs)/blogs/page";

export default async function sitemap() {
  const blogs = await getBlogs(false,false,true);

  const blogUrls = blogs.data.map(blog => {
    return {
      url: `${url}/blogs/${blog.slug}`,
      lastModified: new Date(blog.date),
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
  ]
}
