'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { SectionLabel, sectionStyle, containerStyle } from './About'

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
    <>
      <div className="section-divider" />
      <section id="contact" ref={ref} className="section" style={{ ...sectionStyle, paddingBottom: 'clamp(80px, 12vw, 140px)' }}>
        <div style={containerStyle}>
          <SectionLabel num="04" label="contact" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '620px' }}
          >
            <div
              style={{
                fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                fontSize: '14px',
                color: '#a1a1aa',
                marginBottom: '24px',
              }}
            >
              <span style={{ color: '#a3e635' }}>$</span> echo &quot;let&apos;s talk&quot;
            </div>

            <div style={{ marginBottom: '32px' }}>
              <button
                onClick={copyEmail}
                style={{
                  fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                  fontSize: 'clamp(15px, 2.4vw, 22px)',
                  color: copied ? '#a3e635' : '#fafafa',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: `1px solid ${copied ? '#a3e635' : '#3f3f46'}`,
                  padding: '0 0 8px',
                  transition: 'color 0.2s, border-color 0.2s',
                  textShadow: copied ? '0 0 12px rgba(163,230,53,0.6)' : 'none',
                  wordBreak: 'break-word',
                  textAlign: 'left',
                }}
                title="Click to copy"
              >
                {EMAIL} {copied ? '✓ copied!' : '↗'}
              </button>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                fontSize: '13.5px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '22px',
              }}
            >
              {SOCIALS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <span style={{ color: '#a3e635', opacity: 0.85 }}>▸ </span>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
