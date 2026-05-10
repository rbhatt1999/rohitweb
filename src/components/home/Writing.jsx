import Link from 'next/link'
import blogdata from '@/app/api/blogs/blog'
import { SectionLabel } from './About'

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
    <section id="writing" style={{ padding: '96px 48px', position: 'relative' }}>
      <SectionLabel num="03" label="writing" />

      <div style={{ maxWidth: '760px' }}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.slug}`}
            style={{
              display: 'flex', alignItems: 'baseline', gap: '14px',
              padding: '14px 8px',
              borderBottom: '1px dashed #1c1c20',
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontSize: '13px', color: '#71717a',
              textDecoration: 'none',
            }}
            className="post-row"
          >
            <span style={{ color: '#a3e635' }}>▸</span>
            <span className="post-title-hover" style={{ color: '#e4e4e7', flex: 1 }}>
              {post.title}
            </span>
            <span style={{ color: '#52525b', fontSize: '12px', flexShrink: 0 }}>
              {formatDate(post.date)}
            </span>
            <span style={{ color: '#71717a', flexShrink: 0 }}>[ read → ]</span>
          </Link>
        ))}

        <div style={{ marginTop: '20px' }}>
          <Link href="/blogs" className="nav-link" style={{ fontFamily: 'var(--font-jetbrains), ui-monospace, monospace', fontSize: '12px' }}>
            read all on /blogs ↗
          </Link>
        </div>
      </div>

      <style>{`
        .post-row:hover { background: rgba(163,230,53,0.05); }
        .post-row:hover .post-read { color: #a3e635; }
        @media (max-width: 640px) {
          .post-row { flex-wrap: wrap; font-size: 12px; }
        }
      `}</style>
    </section>
  )
}
