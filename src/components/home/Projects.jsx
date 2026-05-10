'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel, sectionStyle, containerStyle } from './About'

const FEATURED = [
  {
    id: 'sadhak_ai',
    tag: 'latest · ai',
    title: 'sadhak_ai/',
    desc: "Privacy-focused chat with Google's Gemini. Google OAuth login, per-user persisted threads in Postgres, and assistant responses streamed via Server-Sent Events. Rolling-summary context management for long conversations.",
    stack: 'flask · langchain · gemini · postgres · oauth',
    live: null,
    github: 'https://github.com/rbhatt1999/sadhak-ai',
  },
  {
    id: 'stay_a_while',
    tag: null,
    title: 'stay_a_while/',
    desc: 'Home-stay reservation app — booking flow, host dashboards, payments UI.',
    stack: 'rails · react · redux · postgres',
    live: 'https://stay-a-while-front-end.vercel.app/',
    github: 'https://github.com/rbhatt1999/stay-a-while-front-end',
  },
]

const MORE = [
  { name: 'space_hub',          desc: '— spacex mission selector',     github: 'https://github.com/rbhatt1999/Space-Hub',     tree: '├─' },
  { name: 'langchain-learning', desc: '— llm exercises & experiments', github: 'https://github.com/rbhatt1999',               tree: '├─' },
  { name: 'budget_app',         desc: '— rails finance manager',       github: 'https://github.com/rbhatt1999/budget-app',    tree: '├─' },
  { name: 'recipe_app',         desc: '— cookbook + ingredients',      github: 'https://github.com/rbhatt1999/recipe_app',    tree: '├─' },
  { name: 'finance_app',        desc: '— stock market analysis',       github: 'https://github.com/rbhatt1999/finance-app',   tree: '├─' },
  { name: 'math_magician',      desc: '— calculator + practice',       github: 'https://github.com/rbhatt1999/math-magician', tree: '└─' },
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <>
      <div className="section-divider" />
      <section id="work" ref={ref} className="section" style={sectionStyle}>
        <div style={containerStyle}>
          <SectionLabel num="02" label="featured work" />

          {FEATURED.map((proj, i) => (
            <FeaturedCard key={proj.id} proj={proj} inView={inView} delay={i * 0.15} />
          ))}

          {/* more/ list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: '36px',
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontSize: '13.5px',
              color: '#a1a1aa',
            }}
          >
            <span style={{ color: '#fafafa', display: 'block', marginBottom: '10px', fontWeight: 500 }}>more/</span>
            {MORE.map(({ name, desc, github, tree }) => (
              <MoreRow key={name} name={name} desc={desc} github={github} tree={tree} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

function FeaturedCard({ proj, inView, delay }) {
  const { tag, title, desc, stack, live, github } = proj
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={`work-card ${tag ? 'featured' : ''}`}
      style={{ padding: '32px 34px', marginBottom: '20px' }}
    >
      {tag && (
        <span
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontSize: '10px',
            color: '#a3e635',
            border: '1px solid rgba(163,230,53,0.45)',
            padding: '3px 10px',
            borderRadius: '3px',
            marginBottom: '10px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          {tag}
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontSize: 'clamp(20px, 2.4vw, 24px)',
              color: '#fafafa',
              margin: '0 0 10px',
              fontWeight: 500,
            }}
          >
            {title}
          </h3>
          <div style={{ height: '1px', width: '80px', background: '#a3e635', opacity: 0.6, margin: '0 0 16px' }} />
          <p
            style={{
              color: '#d4d4d8',
              lineHeight: 1.7,
              margin: '0 0 18px',
              fontWeight: 400,
              fontSize: '15px',
              fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
            }}
          >
            {desc}
          </p>
          <div
            style={{
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontSize: '12.5px',
              color: '#a1a1aa',
            }}
          >
            {stack.split(' · ').map((s, i, arr) => (
              <span key={s}>
                {s}
                {i < arr.length - 1 && <span style={{ color: '#52525b', margin: '0 8px' }}>·</span>}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flexShrink: 0 }}>
          {live && <ExtLink href={live}>[ live ↗ ]</ExtLink>}
          {github && <ExtLink href={github}>[ github ↗ ]</ExtLink>}
        </div>
      </div>
    </motion.div>
  )
}

function MoreRow({ name, desc, github, tree }) {
  return (
    <a href={github} target="_blank" rel="noreferrer" className="more-row">
      <span style={{ color: '#52525b', marginRight: '12px' }}>{tree}</span>
      <span style={{ color: '#d4d4d8' }}>{name}</span>
      <span style={{ color: '#71717a', margin: '0 12px' }}>{desc}</span>
      <span className="gh-link" style={{ marginLeft: 'auto', fontSize: '12px', color: '#71717a' }}>
        [ github ↗ ]
      </span>
    </a>
  )
}

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
        fontSize: '12px',
        color: '#a3e635',
        border: '1px solid #a3e635',
        padding: '7px 14px',
        borderRadius: '4px',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        background: 'rgba(163,230,53,0.04)',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(163,230,53,0.15)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(163,230,53,0.04)')}
    >
      {children}
    </a>
  )
}
