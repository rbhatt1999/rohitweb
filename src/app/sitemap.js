import url from "@/utils/url";

export default async function sitemap() {

  const date = new Date();
  return [
    {
      url: `${url}`,
      lastModified: date,
      priority: 1,
    },
  ]
}
