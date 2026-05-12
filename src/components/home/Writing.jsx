import Link from 'next/link'
import blogdata from '@/app/api/blogs/blog'

function getRecentPosts() {
  return [...blogdata]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4)
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toISOString().slice(0, 10).replace(/-/g, '.')
  } catch {
    return dateStr
  }
}

export default function Writing() {
  const posts = getRecentPosts()

  return (
    <section id="writing" className="sec" style={{ zIndex: 10, background: 'var(--bg)' }}>
      <div className="sec-wrap">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">Notes / writing</div>
            <h2 className="sec-title">Recent <span className="a">thinking</span></h2>
          </div>
          <p className="sec-desc">
            Short essays on the tech I&apos;m using, lessons from shipping, and the occasional opinion.{' '}
            <Link href="/blogs">See all →</Link>
          </p>
        </div>

        <div>
          {posts.map((post, i) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="post">
              <span className="post-num">0{i + 1}</span>
              <span className="post-title-new">{post.title}</span>
              <span className="post-date-new">{formatDate(post.date)}</span>
              <span className="post-arr">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
