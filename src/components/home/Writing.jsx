import Link from 'next/link'
import Reveal from '@/components/Reveal'
import blogdata from '@/app/api/blogs/blog'

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
  if (!t) return 'Post'
  return t.replace(/\b\w/g, (c) => c.toUpperCase())
}

function getRecentPosts() {
  return [...blogdata]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
}

export default function Writing() {
  const posts = getRecentPosts()

  return (
    <section className="section" id="writing">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="lhs">
            <span className="sec-num">03 —</span>
            <h2 className="sec-title">Writing</h2>
          </span>
          <Link className="sec-link" href="/blogs">read all on /blogs <ArrowUR /></Link>
        </Reveal>

        <div className="post-list">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.07}>
              <Link className="post-row" href={`/blogs/${post.slug}`}>
                <div className="post-main">
                  <div className="post-eyebrow">
                    <span className="post-tag">{tagLabel(post)}</span>
                    <span className="post-date">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.summary || post.description}</p>
                </div>
                <span className="post-arr">read <ArrowUR /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
