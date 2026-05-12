'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const EMAIL = 'rohit.bhatt.dev@gmail.com'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [copied, setCopied] = useState(false)

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" ref={ref} className="sec" style={{ zIndex: 10, background: 'var(--bg)' }}>
      <div className="sec-wrap">
        <motion.div
          className="cta-block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="cta-eyebrow">◆ Now booking · available for Q3</div>
          <h2 className="cta-h">Let&apos;s build something <span className="a">good</span>.</h2>
          <p className="cta-p">
            Drop a line about what you&apos;re working on. I&apos;ll reply within a day with honest
            thoughts, a rough scope, and whether I&apos;m the right fit.
          </p>
          <div className="cta-row">
            <button
              onClick={copyEmail}
              className="btn btn-primary"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              {copied ? '✓ Copied!' : `${EMAIL} →`}
            </button>
            <a
              href="https://calendly.com/rbhatt199924/30min"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Book a 20-min call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
