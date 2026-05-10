'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const CorridorCanvas = dynamic(() => import('@/components/three/CorridorCanvas'), { ssr: false })

export default function HomeComponent() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#06070a',
      }}
    >
      {/* 3D corridor — absolutely positioned inside the hero only */}
      <CorridorCanvas />

      {/* Soft scrim so text always sits comfortably above the 3D scene */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'radial-gradient(ellipse 90% 80% at 30% 50%, rgba(6,7,10,0.85) 0%, rgba(6,7,10,0.45) 55%, rgba(6,7,10,0.15) 100%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="hero-dotgrid"
        aria-hidden
        style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 0.7 }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(96px, 14vw, 140px) clamp(24px, 6vw, 80px) 96px',
          maxWidth: '1280px',
          margin: '0 auto',
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
              color: '#a1a1aa',
              fontSize: '13px',
              letterSpacing: '0.04em',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ color: '#a3e635', textShadow: '0 0 8px #a3e635' }}>$</span>
            whoami
            <span className="cursor-blink" />
          </motion.div>

          {/* Name */}
          <h1
            className="hero-title"
            style={{
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontWeight: 600,
              fontSize: 'clamp(40px, 8vw, 84px)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              margin: '0 0 18px',
              color: '#fafafa',
              textShadow: '0 2px 24px rgba(0,0,0,0.6)',
            }}
          >
            ROHIT BHATT
          </h1>

          {/* Rule */}
          <div style={{ height: '1px', width: '120px', background: '#3f3f46', margin: '0 0 24px' }} />

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            style={{
              color: '#e4e4e7',
              fontSize: 'clamp(16px, 1.5vw, 19px)',
              lineHeight: 1.6,
              maxWidth: '560px',
              margin: '0 0 18px',
              fontWeight: 400,
              fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
              textShadow: '0 1px 8px rgba(0,0,0,0.5)',
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
              fontSize: '13px',
              color: '#a1a1aa',
              marginBottom: '36px',
            }}
          >
            ── 2+ years &nbsp;·&nbsp; remote &nbsp;·&nbsp;{' '}
            <span style={{ color: '#a3e635', fontWeight: 500 }}>open to work</span>
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
            position: 'absolute',
            bottom: '32px',
            left: 'clamp(24px, 6vw, 80px)',
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontSize: '11px',
            color: '#52525b',
            letterSpacing: '0.1em',
          }}
        >
          ↓ scroll
        </motion.div>
      </div>
    </section>
  )
}

function Btn({ href, ghost, children }) {
  const base = {
    fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
    fontSize: '13px',
    padding: '12px 22px',
    border: '1px solid',
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'transform 0.2s, background 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
  }
  const style = ghost
    ? { ...base, borderColor: '#3f3f46', color: '#e4e4e7', background: 'rgba(6,7,10,0.65)' }
    : { ...base, borderColor: '#a3e635', color: '#a3e635', background: 'rgba(163,230,53,0.08)' }

  return (
    <a
      href={href}
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        if (!ghost) e.currentTarget.style.boxShadow = '0 0 24px rgba(163,230,53,0.25)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {children}
    </a>
  )
}
