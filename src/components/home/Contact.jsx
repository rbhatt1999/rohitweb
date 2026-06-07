'use client'
import { useState } from 'react'
import Reveal from '@/components/Reveal'

const SOCIALS = [
  { label: 'github',   href: 'https://github.com/rbhatt1999' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/rohitbhatt-dev/' },
  { label: 'twitter',  href: 'https://twitter.com/Rohit_Bhatt_' },
  { label: 'medium',   href: 'https://medium.com/@rbhatt199924' },
]
const EMAIL = 'rohit.bhatt.dev@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 1900)
  }

  return (
    <section className="section section-2" id="contact" style={{ paddingBottom: 'clamp(80px,12vw,150px)' }}>
      <div className="wrap contact">
        <Reveal className="contact-pre"><span className="mk">$</span> echo &quot;let&apos;s build something&quot;</Reveal>
        <Reveal as="h2" className="contact-h" delay={0.06}>
          Let&apos;s make it <span className="em">real.</span>
        </Reveal>
        <Reveal delay={0.12}>
          <button onClick={copy} className={`email-btn${copied ? ' copied' : ''}`}>
            {copied ? 'copied to clipboard' : EMAIL}
            <span className="ic">{copied ? '✓' : '⧉'}</span>
          </button>
        </Reveal>
        <Reveal className="socials" delay={0.18}>
          {SOCIALS.map((s) => (
            <a key={s.label} className="social" href={s.href} target="_blank" rel="noreferrer">{s.label} ↗</a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
