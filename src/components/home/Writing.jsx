import Link from 'next/link'
import blogdata from '@/app/api/blogs/blog'
import { SectionLabel, sectionStyle, containerStyle } from './About'

function getRecentPosts() {
  return [...blogdata]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toISOString().split('T')[0]
  } catch {
    return dateStr
  }
}

export default function Writing() {
  const posts = getRecentPosts()

  return (
    <>
      <div className="section-divider" />
      <section id="writing" className="section" style={sectionStyle}>
        <div style={containerStyle}>
          <SectionLabel
            num="03"
            label="writing"
            right={<Link href="/blogs" className="nav-link">read all on /blogs ↗</Link>}
          />

          <div style={{ maxWidth: '860px' }}>
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="post-row"
              >
                <span style={{ color: '#a3e635' }}>▸</span>
                <span className="post-title-hover" style={{ color: '#fafafa', flex: 1, minWidth: '200px' }}>
                  {post.title}
                </span>
                <span style={{ color: '#71717a', fontSize: '12.5px' }}>{formatDate(post.date)}</span>
                <span style={{ color: '#a1a1aa' }}>[ read → ]</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
