# Architecture

Next.js 13 App Router, JavaScript only (no TypeScript). Portfolio + blog site for Rohit Bhatt. The custom domain is `rohitcodes.com`; Vercel serves it at `https://www.rohitcodes.com` (`https://rohitcodes.com` 308-redirects there).

## Directory Layout

```
src/
├── app/
│   ├── layout.js                   # Root layout: fonts, nav, footer, theme flash-prevention script
│   ├── page.jsx                    # Home — composes all home section components
│   ├── globals.css                 # ALL styles live here (CSS vars, component classes, utility classes)
│   ├── sitemap.js                  # Dynamic sitemap: fetches blog + category slugs
│   ├── (blogs)/                    # Route group (no URL segment)
│   │   ├── blogs/[slug]/page.jsx   # Blog post detail page
│   │   ├── blogs/page.jsx          # Blog list with pagination
│   │   ├── categories/[slug]/      # Category-filtered blog list
│   │   └── archive/[slug]/         # Monthly archive listing
│   └── api/blogs/
│       ├── blog.js                 # Static data source — array of all blog posts
│       ├── category.js             # Static data source — array of categories
│       ├── route.js                # GET /api/blogs — paginated, searchable list
│       ├── [slug]/route.js         # GET /api/blogs/:slug — single post + category
│       ├── categories/route.js     # GET /api/blogs/categories
│       ├── categories/[slug]/      # GET /api/blogs/categories/:slug
│       ├── archive/[slug]/         # GET /api/blogs/archive/:YYYY-MM
│       └── recentfive_mothlyarchive_category/route.js  # Combined sidebar data
├── components/
│   ├── home/                       # One component per home page section
│   │   ├── HomeComponent.jsx       # Hero: 3D corridor, headline, CTAs
│   │   ├── Marquee.jsx             # Scrolling tech-stack ticker
│   │   ├── Projects.jsx            # Bento-grid project cards
│   │   ├── Skills.jsx              # Skill bars
│   │   ├── Writing.jsx             # Recent blog post links
│   │   ├── About.jsx               # Bio + testimonials
│   │   ├── Contact.jsx             # Contact form / CTA
│   │   └── TestimonialsCarousel.jsx
│   ├── blogs/
│   │   ├── BlogsList.jsx           # Client-side paginated blog list
│   │   ├── SideBar.jsx             # Server component shell
│   │   ├── SidebarClient.jsx       # Interactive sidebar (recent posts, archive, categories)
│   │   ├── Search.jsx              # Blog search input
│   │   └── CodeBlockViewer.jsx     # Syntax-highlighted code blocks (react-syntax-highlighter)
│   ├── Navigation/
│   │   ├── NavigationBar.jsx       # Desktop nav (server component)
│   │   ├── NavigationBarMobile.jsx # Mobile hamburger menu
│   │   ├── NavItems.jsx
│   │   └── DropDown.jsx
│   ├── three/
│   │   └── CorridorCanvas.jsx      # Three.js 3D hero background (dynamically imported, SSR disabled)
│   ├── CursorGlow.jsx              # Mouse-tracking radial gradient overlay
│   ├── ThemeToggle.jsx             # Dark/light toggle (client component)
│   └── LocatorLoader.jsx           # Dev-only @locator/runtime loader
├── lib/
│   ├── fonts.js                    # next/font/local definitions (all fonts self-hosted in public/fonts/)
│   └── locator-runtime-stub.js     # No-op stub used in production build
└── utils/
    ├── url.js                      # Re-exports NEXT_PUBLIC_URL env var
    └── blogs/convertblogtomonths.js
```

## Data Flow

All blog/category data lives in two static JS arrays — no database, no CMS:

```
blog.js / category.js
       ↓
src/lib/blog-queries.js  (pages, sitemap, and the API routes)
       ↓
api/blogs/** still expose the same JSON for any external caller
```

Pages read the static arrays in-process. They do not HTTP-fetch the site's own API during render. Canonical URLs, the sitemap, and robots.txt use `https://www.rohitcodes.com` (`src/lib/site.js`). `https://rohitcodes.com` 308-redirects to that host.

## Server vs. Client Components

- Page files (`page.jsx`) are **server components** — they `fetch` data and pass it down.
- Components with interactivity use `'use client'` (ThemeToggle, BlogsList, SidebarClient, CursorGlow, home section animations).
- `CorridorCanvas` is dynamically imported with `{ ssr: false }` because Three.js requires the browser DOM.

## Key Patterns

- **Section IDs for scroll nav**: `id="home"`, `id="work"`, `id="skills"`, `id="writing"`, `id="about"` — nav links use `href="/#work"` etc.
- **Framer Motion**: all home sections animate in on scroll via `useInView` + `motion` components.
- **Blog images**: hosted on S3 (`https://website-images-rohitcodes.s3.ap-south-1.amazonaws.com/`) — not in the repo.
- **No test suite** — validate by running dev server.
