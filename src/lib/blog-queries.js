import blogdata from '@/app/api/blogs/blog'
import categoryData from '@/app/api/blogs/category'

const PAGE_SIZE = 8

export function sortedBlogs() {
  return [...blogdata].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function allCategories() {
  return categoryData
}

export function getCategory(slug) {
  return categoryData.find((category) => category.slug === slug) || null
}

function normalizeSearch(search) {
  if (!search) return ''
  try {
    return decodeURIComponent(search).toLowerCase()
  } catch {
    return String(search).toLowerCase()
  }
}

function applySearch(items, search) {
  const q = normalizeSearch(search)
  if (!q) return items
  return items.filter((item) => item.title.toLowerCase().includes(q))
}

function paginate(items, pageParam) {
  const totalPage = Math.ceil(items.length / PAGE_SIZE)
  const page = pageParam ? parseInt(pageParam, 10) : 1
  const outOfRange = !(page > 0) || page > totalPage
  const start = outOfRange ? 0 : (page - 1) * PAGE_SIZE
  const end = outOfRange ? PAGE_SIZE : page * PAGE_SIZE
  return { pageItems: items.slice(start, end), totalPage }
}

function card(item, includeTags) {
  const out = {
    id: item.id,
    title: item.title,
    slug: item.slug,
    date: item.date,
    summary: item.summary,
    image: {
      src: item.image.src,
      alt: item.image.alt,
      ...(item.image.fallback ? { fallback: item.image.fallback } : {}),
    },
    description: item.description,
  }
  if (includeTags) out.tags = item.tags ?? []
  return out
}

export function listPosts({ page, search, all } = {}) {
  let items = sortedBlogs()
  if (!all) {
    items = applySearch(items, search)
    const { pageItems, totalPage } = paginate(items, page)
    return { data: pageItems.map((item) => card(item, true)), totalPage }
  }
  return { data: items.map((item) => card(item, true)), totalPage: 1 }
}

export function getPost(slug) {
  const blog = blogdata.find((item) => item.slug === slug)
  if (!blog) return null
  const category = categoryData.find((cat) => cat.id === blog.category_id) || null
  return { blog, category }
}

export function listCategoryPosts(slug, page, search) {
  const category = getCategory(slug)
  if (!category) return null
  let items = sortedBlogs().filter((blog) => blog.category_id === category.id)
  items = applySearch(items, search)
  const { pageItems, totalPage } = paginate(items, page)
  return {
    blog: pageItems.map((item) => card(item, false)),
    category,
    totalPage,
  }
}

export function listArchivePosts(slug, page, search) {
  const items = applySearch(
    blogdata.filter((blog) => {
      const date = new Date(blog.date)
      return `${date.getFullYear()}-${date.getMonth() + 1}` === slug
    }).sort((a, b) => new Date(b.date) - new Date(a.date)),
    search,
  )
  const { pageItems, totalPage } = paginate(items, page)
  return { data: pageItems.map((item) => card(item, false)), totalPage }
}

export function archiveSlugs() {
  const slugs = []
  const seen = new Set()
  for (const blog of sortedBlogs()) {
    const date = new Date(blog.date)
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`
    if (seen.has(key)) continue
    seen.add(key)
    slugs.push(key)
  }
  return slugs
}

/** Same payload the sidebar API has always returned (full post objects). */
export function getSidebarPayload() {
  const data = sortedBlogs()
  return {
    recentFive: data.slice(0, 5),
    monthlyArchive: archiveSlugs(),
    category: categoryData.map((cat) => ({ name: cat.name, slug: cat.slug })),
  }
}

/** Fields the sidebar actually renders. */
export function sidebarData() {
  const payload = getSidebarPayload()
  return {
    recentFive: payload.recentFive.map((blog) => ({ title: blog.title, slug: blog.slug })),
    monthlyArchive: payload.monthlyArchive,
    category: payload.category,
  }
}
