import React from 'react'
import { notFound } from 'next/navigation'
import url from '@/utils/url'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Search from '@/components/blogs/Search'
import blogdata from '@/app/api/blogs/blog'
import stripHtml from '@/utils/stripHtml'

export const metadata = {
  title: `Notes on building software & AI — Rohit Bhatt`,
  description: `Field notes on shipping web products — Ruby on Rails, React, and the practical realities of putting large language models into production.`,
  alternates: { canonical: `${url}/blogs` },
  openGraph: {
    title: `Notes on building software & AI — Rohit Bhatt`,
    description: `Field notes on shipping web products — Ruby on Rails, React, and the practical realities of putting large language models into production.`,
    url: `${url}/blogs`,
    type: 'website',
    images: [{ url: 'https://i.ibb.co/BL54PXc/blogs.webp', width: 800, height: 500, alt: 'Rohit Bhatt' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Notes on building software & AI — Rohit Bhatt`,
    description: `Field notes on shipping web products — Ruby on Rails, React, and putting LLMs into production.`,
    images: ['https://i.ibb.co/BL54PXc/blogs.webp'],
    creator: '@Rohit__Bhatt_',
  },
}

const ArrowUR = () => (
  <svg className="ar" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
  } catch { return dateStr }
}

function tagLabel(blog) {
  const t = blog.tags?.[0]
  if (!t) return 'Blog'
  return t.replace(/\b\w/g, (c) => c.toUpperCase())
}

function excerpt(blog) {
  return stripHtml(blog.summary || blog.description || '')
}

export async function getBlogs(page = false, search = false, all = false) {
  let res
  try {
    res = await fetch(`${url}/api/blogs${page ? `?page=${page}` : ''}${search ? `&search=${search}` : ''}${all ? `?all=${true}` : ''}`, { cache: 'no-cache' })
    if (!res.ok) throw new Error('Failed to fetch data')
  } catch (err) {
    notFound()
  }
  return res.json()
}

function FeaturedPost({ post }) {
  return (
    <Reveal>
      <Link className="blog-featured" href={`/blogs/${post.slug}`}>
        <div className="bf-body">
          <span className="bf-flag"><span className="live-dot" />latest</span>
          <h2 className="bf-title">{post.title}</h2>
          <p className="bf-excerpt">{excerpt(post)}</p>
          <div className="bf-meta">
            <span>{tagLabel(post)}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span className="bf-read">read article <ArrowUR /></span>
          </div>
        </div>
        <div className="bf-aside" aria-hidden>
          <span className="mark">&ldquo;</span>
          <span className="lbl">blog</span>
        </div>
      </Link>
    </Reveal>
  )
}

function PostCard({ post, delay }) {
  return (
    <Reveal delay={delay}>
      <Link className="post-card" href={`/blogs/${post.slug}`}>
        <div className="pc-eyebrow">
          <span className="post-tag">{tagLabel(post)}</span>
          <span className="post-date">{formatDate(post.date)}</span>
        </div>
        <h3 className="pc-title">{post.title}</h3>
        <p className="pc-excerpt">{excerpt(post)}</p>
        <div className="pc-foot">
          <span className="pc-read">read <ArrowUR /></span>
        </div>
      </Link>
    </Reveal>
  )
}

function Pager({ page, totalPage, search }) {
  if (totalPage <= 1) return null
  const q = (n) => `${url}/blogs?page=${n}${search ? `&search=${search}` : ''}`
  const nums = []
  for (let i = 1; i <= totalPage; i++) {
    if (i <= 2 || i > totalPage - 2 || i === page) nums.push(i)
    else if (nums[nums.length - 1] !== 'gap') nums.push('gap')
  }
  return (
    <div className="pager">
      {page > 1 && <Link href={q(page - 1)}>prev</Link>}
      {nums.map((n, i) =>
        n === 'gap'
          ? <span key={`g${i}`} className="gap">…</span>
          : <Link key={n} href={q(n)} className={n === page ? 'current' : undefined}>{n}</Link>
      )}
      {page < totalPage && <Link href={q(page + 1)}>next</Link>}
    </div>
  )
}

export default async function page({ searchParams }) {
  let page = 1
  let search = false
  if (searchParams.page) page = parseInt(searchParams.page)
  if (searchParams.search) search = decodeURIComponent(searchParams.search)

  const { data, totalPage } = await getBlogs(page, search)
  const showFeatured = !search && page === 1 && data.length > 0
  const featured = showFeatured ? data[0] : null
  const grid = showFeatured ? data.slice(1) : data

  return (
    <main>
      <header className="blog-hero">
        <div className="hero-aura" aria-hidden />
        <div className="wrap">
          <Reveal className="kicker blog-hero-kicker"><span className="dot" />writing · field notes</Reveal>
          <Reveal as="h1" className="blog-h1" delay={0.05}>
            Notes on building software &amp; <span className="em">AI.</span>
          </Reveal>
          <Reveal as="p" className="blog-sub" delay={0.1}>
            Field notes on shipping web products — Rails, React, and the practical realities
            of putting large language models into production.
          </Reveal>
          <Reveal className="blog-count" delay={0.15}>
            <span>{String(blogdata.length).padStart(2, '0')} blogs</span>
            <span className="ln" />
          </Reveal>
          <Reveal className="blog-search" delay={0.2}>
            <Search search={search} afterurl="blogs" />
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 'clamp(20px,3vw,40px)' }}>
        <div className="wrap">
          {search && (
            <Reveal as="p" className="blog-sub" style={{ marginBottom: 'clamp(28px,4vw,44px)' }}>
              Search results for &ldquo;{search}&rdquo; — {data.length} {data.length === 1 ? 'blog' : 'blogs'}
            </Reveal>
          )}

          {data.length === 0 ? (
            <h2 className="sec-title" style={{ textAlign: 'center', padding: '40px 0' }}>No blogs found</h2>
          ) : (
            <>
              {featured && <FeaturedPost post={featured} />}
              {grid.length > 0 && (
                <div className="post-grid">
                  {grid.map((p, i) => <PostCard key={p.slug} post={p} delay={i * 0.06} />)}
                </div>
              )}
            </>
          )}

          <Pager page={page} totalPage={totalPage} search={search} />
        </div>
      </section>
    </main>
  )
}
