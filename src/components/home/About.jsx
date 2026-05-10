'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const STACK = [
  { name: 'rails',          badge: '◆ daily', tree: '├─' },
  { name: 'react',          badge: '◆ daily', tree: '├─' },
  { name: 'python · flask', badge: '',        tree: '├─' },
  { name: 'langchain · gemini', badge: '',   tree: '├─' },
  { name: 'postgres',       badge: '',        tree: '├─' },
  { name: 'tailwind',       badge: '',        tree: '├─' },
  { name: 'node',           badge: '',        tree: '└─' },
]

const sectionStyle = {
  padding: '96px 48px',
  position: 'relative',
}

const cardStyle = {
  background: 'rgba(6,7,10,0.92)',
  border: '1px solid #1f2128',
  borderRadius: '6px',
  padding: '26px 28px',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" ref={ref} style={sectionStyle}>
      <SectionLabel num="01" label="about" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          maxWidth: '960px',
        }}
      >
        {/* Bio */}
        <div style={cardStyle}>
          <p style={{ color: '#d4d4d8', lineHeight: 1.75, margin: '0 0 14px', fontSize: '15px', fontWeight: 300, fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif' }}>
            I build software that feels considered. Currently working remote, shipping landing pages → full-stack apps, with a recent focus on LLM-backed tools (LangChain, Gemini).
          </p>
          <p style={{ color: '#d4d4d8', lineHeight: 1.75, margin: 0, fontSize: '15px', fontWeight: 300, fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif' }}>
            Off-screen: hiking trails and Erin Morgenstern novels.
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                fontSize: '12px', color: '#a3e635',
                border: '1px solid rgba(163,230,53,0.4)',
                padding: '6px 14px', borderRadius: '4px',
                background: 'rgba(163,230,53,0.06)',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
            >
              resume ↗
            </a>
          </div>
        </div>

        {/* Stack */}
        <div style={cardStyle}>
          <span style={{
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            color: '#e4e4e7', fontSize: '13px',
            display: 'block', marginBottom: '10px',
          }}>
            stack/
          </span>
          {STACK.map(({ name, badge, tree }) => (
            <div
              key={name}
              style={{
                display: 'flex', alignItems: 'center',
                fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                fontSize: '13px', color: '#71717a',
                lineHeight: 1.9, cursor: 'default',
              }}
            >
              <span style={{ color: '#3f3f46', marginRight: '10px' }}>{tree}</span>
              <span>{name}</span>
              {badge && (
                <span style={{ marginLeft: 'auto', color: '#a3e635', fontSize: '11px' }}>{badge}</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export function SectionLabel({ num, label }) {
  return (
    <>
      <div style={{
        fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
        fontSize: '12px', color: '#71717a',
        marginBottom: '10px', letterSpacing: '0.05em',
      }}>
        <span style={{ color: '#a3e635' }}>// {num}</span> — {label}
      </div>
      <div className="label-rule" style={{ marginBottom: '32px' }} />
    </>
  )
}
