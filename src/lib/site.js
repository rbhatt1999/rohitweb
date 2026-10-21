/**
 * Canonical origin for metadata, sitemap, and robots.
 *
 * https://rohitcodes.com 308-redirects to https://www.rohitcodes.com (Vercel).
 * Canonical URLs use the host that returns 200 so they match the live site
 * and the existing production sitemap. Override with NEXT_PUBLIC_SITE_URL
 * only when that host should change (for example after the www redirect is removed).
 */
const configured = process.env.NEXT_PUBLIC_SITE_URL
export const SITE_URL = (configured || 'https://www.rohitcodes.com').replace(/\/$/, '')

export const SITE_NAME = 'Rohit Bhatt'
export const SITE_TITLE = 'Rohit Bhatt — Software & Gen AI Developer'
export const SITE_DESCRIPTION =
  'Rohit Bhatt is a software developer in India building full-stack products and production generative AI with Ruby on Rails, React, LangChain, and Gemini.'

export const JOB_TITLES = ['Forward Deployed Engineer', 'Software Developer']

export const KNOWS_ABOUT = [
  'Software development',
  'Full-stack development',
  'Generative AI',
  'Ruby on Rails',
  'React',
  'Next.js',
  'Python',
  'PostgreSQL',
  'LangChain',
  'Gemini',
  'Claude',
  'Vertex AI',
  'Model Context Protocol',
]

export const ALUMNI_OF = [
  { '@type': 'CollegeOrUniversity', name: 'Chandigarh University' },
  { '@type': 'EducationalOrganization', name: 'Microverse' },
]

export const OG_IMAGE = {
  url: '/og',
  width: 1200,
  height: 630,
  alt: 'Rohit Bhatt, software developer — full-stack products and generative AI',
}

export const TWITTER_HANDLE = '@Rohit_Bhatt_'

export const SAME_AS = [
  'https://github.com/rbhatt1999',
  'https://www.linkedin.com/in/rohitbhatt-dev/',
  'https://twitter.com/Rohit_Bhatt_',
  'https://medium.com/@rbhatt199924',
]

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return SITE_URL
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function metaDescription(text, max = 160) {
  if (!text) return undefined
  const clean = String(text).replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim()
  if (!clean) return undefined
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  const trimmed = (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trim()
  return `${trimmed}…`
}

export function withBrand(title) {
  if (!title) return SITE_NAME
  if (/rohit bhatt/i.test(title)) return title
  return `${title} — ${SITE_NAME}`
}

export function pageMetadata({ title, description, path }) {
  const url = absoluteUrl(path)
  const desc = metaDescription(description)
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: 'website',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [OG_IMAGE.url],
      creator: TWITTER_HANDLE,
    },
  }
}

export function listingMetadata({ path, page, search, title, description, image }) {
  const pageNum = Number(page) || 1
  const canonical = pageNum > 1 ? `${SITE_URL}${path}?page=${pageNum}` : `${SITE_URL}${path}`
  const desc = metaDescription(description)
  const branded = withBrand(title)
  return {
    title: branded,
    description: desc,
    alternates: { canonical },
    robots: search ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: branded,
      description: desc,
      url: canonical,
      type: 'website',
      images: image?.src ? [{ url: image.src, alt: image.alt || title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: branded,
      description: desc,
      images: image?.src ? [image.src] : undefined,
      creator: TWITTER_HANDLE,
    },
  }
}
