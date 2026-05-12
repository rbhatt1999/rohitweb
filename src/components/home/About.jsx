'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TestimonialsCarousel from './TestimonialsCarousel'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="sec" style={{ zIndex: 10, background: 'var(--bg)' }}>
      <div className="sec-wrap">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">About</div>
            <h2 className="sec-title">Who&apos;s <span className="a">behind the code</span></h2>
          </div>
        </div>

        <div className="bento">
          {/* Bio card */}
          <motion.div
            className="b b-half"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Image
                src="/assets/rohit-bhatt.jpg"
                alt="Rohit Bhatt"
                width={88}
                height={88}
                style={{
                  borderRadius: '50%',
                  border: '2px solid var(--accent)',
                  boxShadow: '0 0 0 4px color-mix(in srgb, var(--accent) 18%, transparent)',
                  objectFit: 'cover',
                  flexShrink: 0,
                  width: '88px',
                  height: '88px',
                }}
              />
              <div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--fg1)', letterSpacing: '-0.02em' }}>Rohit Bhatt</div>
                <div style={{
                  fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
                  fontSize: '12px',
                  color: 'var(--fg4)',
                  marginTop: '4px',
                }}>Full-stack · Remote · Uttarakhand, IN</div>
              </div>
            </div>
            <p className="b-desc" style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.75 }}>
              I build software that feels considered. Currently working remote, shipping landing pages
              to full-stack apps, with a recent focus on LLM-backed tools.
            </p>
            <p className="b-desc" style={{ fontSize: '15px', color: 'var(--fg2)', lineHeight: 1.75 }}>
              Off-screen: hiking trails and Erin Morgenstern novels. I write infrequently but with conviction.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a href="/assets/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: '13px', padding: '9px 16px' }}>
                Download CV ↓
              </a>
              <a href="https://github.com/rbhatt1999" target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ fontSize: '13px', padding: '9px 16px' }}>
                GitHub ↗
              </a>
            </div>
          </motion.div>

          {/* Testimonials carousel */}
          <motion.div
            className="b b-half"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: 'linear-gradient(135deg, var(--surface), var(--bg2))' }}
          >
            <div className="sec-eyebrow" style={{ marginBottom: '16px' }}>What colleagues say</div>
            <TestimonialsCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Keep legacy exports so existing imports don't break
export function SectionLabel({ num, label, right }) {
  return (
    <>
      <div style={{
        fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
        fontSize: '12px', color: 'var(--fg3)', marginBottom: '10px',
        letterSpacing: '0.05em', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      }}>
        <span><span style={{ color: 'var(--accent)' }}>// {num}</span> — {label}</span>
        {right && <span style={{ fontSize: '11px' }}>{right}</span>}
      </div>
      <div className="label-rule" style={{ marginBottom: '32px' }} />
    </>
  )
}

export const sectionStyle = { padding: 'clamp(64px, 10vw, 110px) 0', position: 'relative' }
export const containerStyle = { maxWidth: '1180px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 80px)' }
export const paragraphStyle = {
  color: 'var(--fg2)', lineHeight: 1.75, margin: '0 0 14px',
  fontSize: '15.5px', fontWeight: 400,
  fontFamily: 'var(--font-inter), ui-sans-serif, sans-serif',
}
