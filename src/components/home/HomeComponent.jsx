'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const CorridorCanvas = dynamic(() => import('@/components/three/CorridorCanvas'), { ssr: false, loading: () => null })

export default function HomeComponent() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}
    >
      {/* 3D corridor — hidden in light mode via CSS */}
      <div className="corridor-wrapper">
        <CorridorCanvas />
      </div>

      {/* Scrim — dark mode only */}
      <div aria-hidden className="hero-scrim" />

      {/* Content */}
      <div className="hero-section" style={{ position: 'relative', zIndex: 5 }}>
        <div className="hero-wrap">

          {/* Status pill */}
          <motion.div
            className="status-pill"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="status-dot" />
            Available for freelance · full-time roles
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero-h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Full-stack engineer<br />
            shipping{' '}
            <span className="a">thoughtful</span>
            <br />
            web software.
          </motion.h1>

          {/* Hero row: lead + meta */}
          <motion.div
            className="hero-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <p className="hero-lead">
              I&apos;m <em>Rohit</em> — five years building production apps in Ruby on Rails, React,
              and Python. Recently focused on <em>LLM-backed tools</em> (LangChain, Gemini,
              streaming pipelines). I care about pace, polish, and writing software that ages well.
            </p>
            <div className="hero-meta">
              <div>
                <span>Based</span>
                <b>Remote · Uttarakhand, IN</b>
              </div>
              <div>
                <span>Open to</span>
                <b>Full-time · contract</b>
              </div>
              <div>
                <span>Reply time</span>
                <b>&lt; 24 hours</b>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary">Start a project →</a>
            <a href="#work" className="btn btn-ghost">See work</a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
