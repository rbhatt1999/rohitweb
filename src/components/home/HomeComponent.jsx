'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeComponent() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 48px 96px',
        position: 'relative',
        background: 'radial-gradient(ellipse 110% 90% at 25% 50%, rgba(6,7,10,0.82) 30%, rgba(6,7,10,0.5) 65%, transparent 100%)',
      }}
    >
      <div style={{ maxWidth: '680px' }}>
        {/* Terminal prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            color: '#71717a', fontSize: '13px', letterSpacing: '0.04em',
            marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px',
          }}
        >
          <span style={{ color: '#a3e635', textShadow: '0 0 8px #a3e635' }}>$</span>
          whoami
          <span className="cursor-blink" />
        </motion.div>

        {/* Name — types in */}
        <h1
          className="hero-title"
          style={{
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontWeight: 600,
            fontSize: 'clamp(42px, 8vw, 82px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            margin: '0 0 16px',
            color: '#e4e4e7',
          }}
        >
          ROHIT BHATT
        </h1>

        {/* Rule */}
        <div style={{ height: '1px', width: '120px', background: '#1f2128', margin: '0 0 24px' }} />

        {/* Lead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.6 }}
          style={{
            color: '#d4d4d8', fontSize: '18px', lineHeight: 1.6,
            maxWidth: '540px', margin: '0 0 18px', fontWeight: 300,
            fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
          }}
        >
          Full-stack engineer building thoughtful web software with Ruby on Rails, React &amp; AI integrations.
        </motion.p>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          style={{
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontSize: '13px', color: '#71717a', marginBottom: '36px',
          }}
        >
          ── 2+ years &nbsp;·&nbsp; remote &nbsp;·&nbsp;{' '}
          <span style={{ color: '#a3e635', fontWeight: 400 }}>open to work</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
        >
          <Btn href="#work">[ view work → ]</Btn>
          <Btn href="#contact" ghost>[ get in touch ]</Btn>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        style={{
          position: 'absolute', bottom: '32px', left: '48px',
          fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
          fontSize: '11px', color: '#3f3f46', letterSpacing: '0.1em',
        }}
      >
        ↓ scroll
      </motion.div>
    </section>
  )
}

function Btn({ href, ghost, children }) {
  const base = {
    fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
    fontSize: '13px', padding: '12px 22px',
    border: '1px solid',
    textDecoration: 'none', display: 'inline-block',
    transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  }
  const style = ghost
    ? { ...base, borderColor: '#1f2128', color: '#e4e4e7', background: 'transparent' }
    : { ...base, borderColor: '#a3e635', color: '#a3e635', background: 'rgba(163,230,53,0.05)' }

  return (
    <a
      href={href}
      style={style}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        if (!ghost) e.currentTarget.style.boxShadow = '0 0 24px rgba(163,230,53,0.25)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {children}
    </a>
  )
}
