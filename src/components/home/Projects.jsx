'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionLabel } from './About'

const FEATURED = [
  {
    id: 'sadhak_ai',
    tag: 'latest · ai',
    title: 'sadhak_ai/',
    desc: 'Privacy-focused chat with Google\'s Gemini. Google OAuth login, per-user persisted threads in Postgres, and assistant responses streamed via Server-Sent Events. Rolling-summary context management for long conversations.',
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
  { name: 'space_hub',        desc: '— spacex mission selector',    github: 'https://github.com/rbhatt1999/Space-Hub',     tree: '├─' },
  { name: 'langchain-learning', desc: '— llm exercises & experiments', github: 'https://github.com/rbhatt1999',            tree: '├─' },
  { name: 'budget_app',       desc: '— rails finance manager',      github: 'https://github.com/rbhatt1999/budget-app',   tree: '├─' },
  { name: 'recipe_app',       desc: '— cookbook + ingredients',     github: 'https://github.com/rbhatt1999/recipe_app',   tree: '├─' },
  { name: 'finance_app',      desc: '— stock market analysis',      github: 'https://github.com/rbhatt1999/finance-app',  tree: '├─' },
  { name: 'math_magician',    desc: '— calculator + practice',      github: 'https://github.com/rbhatt1999/math-magician', tree: '└─' },
]

const cardStyle = {
  background: 'rgba(6,7,10,0.92)',
  border: '1px solid #1f2128',
  borderRadius: '6px',
  padding: '30px 32px',
  marginBottom: '18px',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  transition: 'border-color 0.25s, box-shadow 0.3s, transform 0.3s',
  position: 'relative',
  overflow: 'hidden',
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="work" ref={ref} style={{ padding: '96px 48px', position: 'relative' }}>
      <SectionLabel num="02" label="featured work" />

      {FEATURED.map((proj, i) => (
        <FeaturedCard key={proj.id} proj={proj} inView={inView} delay={i * 0.15} />
      ))}

      {/* more/ list */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: '32px',
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '13px', color: '#71717a',
        }}
      >
        <span style={{ color: '#e4e4e7', display: 'block', marginBottom: '6px' }}>more/</span>
        {MORE.map(({ name, desc, github, tree }) => (
          <MoreRow key={name} name={name} desc={desc} github={github} tree={tree} />
        ))}
      </motion.div>
    </section>
  )
}

function FeaturedCard({ proj, inView, delay }) {
  const { tag, title, desc, stack, live, github } = proj
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={cardStyle}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#a3e635'
        e.currentTarget.style.boxShadow = '0 0 1px rgba(163,230,53,0.22), 0 18px 48px -12px rgba(163,230,53,0.22)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = tag ? 'rgba(163,230,53,0.35)' : '#1f2128'
        e.currentTarget.style.boxShadow = tag ? '0 0 36px -10px rgba(163,230,53,0.12)' : 'none'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {tag && (
        <span style={{
          display: 'inline-block',
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '10px', color: '#a3e635',
          border: '1px solid rgba(163,230,53,0.4)',
          padding: '2px 8px', borderRadius: '3px',
          marginBottom: '8px', letterSpacing: '0.05em',
          textShadow: '0 0 8px rgba(163,230,53,0.5)',
        }}>
          {tag}
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 style={{
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontSize: '22px', color: '#e4e4e7',
            margin: '0 0 8px', fontWeight: 500,
          }}>
            {title}
          </h3>
          <div style={{ height: '1px', width: '80px', background: '#a3e635', opacity: 0.5, margin: '0 0 14px' }} />
          <p style={{
            color: '#d4d4d8', lineHeight: 1.65, margin: '0 0 16px',
            fontWeight: 300, fontSize: '14px',
            fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
          }}>
            {desc}
          </p>
          <div style={{
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontSize: '12px', color: '#71717a',
          }}>
            {stack.split(' · ').map((s, i, arr) => (
              <span key={s}>
                {s}
                {i < arr.length - 1 && <span style={{ color: '#52525b', margin: '0 6px' }}>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
          {live && <ExtLink href={live}>[ live ↗ ]</ExtLink>}
          {github && <ExtLink href={github}>[ github ↗ ]</ExtLink>}
        </div>
      </div>
    </motion.div>
  )
}

function MoreRow({ name, desc, github, tree }) {
  return (
    <a
      href={github}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'flex', alignItems: 'center',
        padding: '3px 8px', marginLeft: '-8px',
        borderRadius: '4px', textDecoration: 'none',
        color: '#71717a', lineHeight: 2.1,
        transition: 'background 0.25s, color 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(163,230,53,0.12), transparent)'
        e.currentTarget.style.color = '#e4e4e7'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent'
        e.currentTarget.style.color = '#71717a'
      }}
    >
      <span style={{ color: '#3f3f46', marginRight: '10px' }}>{tree}</span>
      <span>{name}</span>
      <span style={{ color: '#52525b', margin: '0 12px' }}>{desc}</span>
      <span style={{ marginLeft: 'auto', fontSize: '12px' }}>[ github ↗ ]</span>
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
        fontSize: '12px', color: '#a3e635',
        border: '1px solid #a3e635', padding: '6px 12px',
        borderRadius: '4px', textDecoration: 'none',
        whiteSpace: 'nowrap', transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'rgba(163,230,53,0.12)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
    >
      {children}
    </a>
  )
}
