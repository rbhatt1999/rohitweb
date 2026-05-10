'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { SectionLabel } from './About'

const SOCIALS = [
  { label: 'github',   href: 'https://github.com/rbhatt1999' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/rohitbhatt-dev/' },
  { label: 'twitter',  href: 'https://twitter.com/Rohit_Bhatt_' },
  { label: 'medium',   href: 'https://medium.com/@rbhatt199924' },
]

const EMAIL = 'rohit.bhatt.dev@gmail.com'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" ref={ref} style={{ padding: '96px 48px 120px', position: 'relative' }}>
      <SectionLabel num="04" label="contact" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '560px' }}
      >
        {/* Echo prompt */}
        <div style={{
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '14px', color: '#71717a', marginBottom: '24px',
        }}>
          <span style={{ color: '#a3e635' }}>$</span> echo &quot;let&apos;s talk&quot;
        </div>

        {/* Email */}
        <div style={{ position: 'relative', marginBottom: '28px' }}>
          <button
            onClick={copyEmail}
            style={{
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              color: copied ? '#a3e635' : '#e4e4e7',
              background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: `1px solid ${copied ? '#a3e635' : '#1f2128'}`,
              paddingBottom: '6px', padding: '0 0 6px',
              transition: 'color 0.2s, border-color 0.2s',
              textShadow: copied ? '0 0 12px rgba(163,230,53,0.6)' : 'none',
            }}
            title="Click to copy"
          >
            {EMAIL} {copied ? '✓ copied!' : '↗'}
          </button>
        </div>

        {/* Socials */}
        <div style={{
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '13px',
          display: 'flex', flexWrap: 'wrap', gap: '20px',
        }}>
          {SOCIALS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{ color: '#71717a', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a3e635'}
              onMouseLeave={e => e.currentTarget.style.color = '#71717a'}
            >
              <span style={{ color: '#a3e635', opacity: 0.7 }}>▸ </span>{label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
