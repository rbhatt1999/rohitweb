'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const STACK = [
  { name: 'rails',              badge: '◆ daily', tree: '├─' },
  { name: 'react',              badge: '◆ daily', tree: '├─' },
  { name: 'python · flask',     badge: '',        tree: '├─' },
  { name: 'langchain · gemini', badge: '',        tree: '├─' },
  { name: 'postgres',           badge: '',        tree: '├─' },
  { name: 'tailwind',           badge: '',        tree: '├─' },
  { name: 'node',               badge: '',        tree: '└─' },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="section" style={sectionStyle}>
      <div style={containerStyle}>
        <SectionLabel num="01" label="about" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Bio */}
          <div className="card" style={{ padding: '28px 30px' }}>
            <p style={paragraphStyle}>
              I build software that feels considered. Currently working remote, shipping landing pages → full-stack apps, with a recent focus on LLM-backed tools (LangChain, Gemini).
            </p>
            <p style={{ ...paragraphStyle, marginBottom: '20px' }}>
              Off-screen: hiking trails and Erin Morgenstern novels.
            </p>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                fontSize: '12px',
                color: '#a3e635',
                border: '1px solid rgba(163,230,53,0.45)',
                padding: '7px 16px',
                borderRadius: '4px',
                background: 'rgba(163,230,53,0.06)',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.2s',
              }}
            >
              resume ↗
            </a>
          </div>

          {/* Stack */}
          <div className="card" style={{ padding: '28px 30px' }}>
            <span
              style={{
                fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                color: '#fafafa',
                fontSize: '14px',
                display: 'block',
                marginBottom: '14px',
                fontWeight: 500,
              }}
            >
              stack/
            </span>
            {STACK.map(({ name, badge, tree }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                  fontSize: '13.5px',
                  color: '#a1a1aa',
                  lineHeight: 2,
                }}
              >
                <span style={{ color: '#52525b', marginRight: '12px' }}>{tree}</span>
                <span style={{ color: '#d4d4d8' }}>{name}</span>
                {badge && (
                  <span style={{ marginLeft: 'auto', color: '#a3e635', fontSize: '11px' }}>{badge}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function SectionLabel({ num, label, right }) {
  return (
    <>
      <div
        style={{
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '12px',
          color: '#a1a1aa',
          marginBottom: '10px',
          letterSpacing: '0.05em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
      >
        <span>
          <span style={{ color: '#a3e635' }}>// {num}</span> — {label}
        </span>
        {right && <span style={{ fontSize: '11px' }}>{right}</span>}
      </div>
      <div className="label-rule" style={{ marginBottom: '32px' }} />
    </>
  )
}

export const sectionStyle = {
  padding: 'clamp(64px, 10vw, 110px) 0',
  position: 'relative',
}

export const containerStyle = {
  maxWidth: '1180px',
  margin: '0 auto',
  padding: '0 clamp(24px, 6vw, 80px)',
}

export const paragraphStyle = {
  color: '#d4d4d8',
  lineHeight: 1.75,
  margin: '0 0 14px',
  fontSize: '15.5px',
  fontWeight: 400,
  fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
}
