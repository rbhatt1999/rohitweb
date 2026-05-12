'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DAILY = [
  { name: 'Ruby on Rails',   lvl: '92%', yrs: '5y' },
  { name: 'React + Next.js', lvl: '90%', yrs: '5y' },
  { name: 'Postgres',        lvl: '82%', yrs: '5y' },
  { name: 'TypeScript',      lvl: '78%', yrs: '3y' },
  { name: 'Tailwind CSS',    lvl: '88%', yrs: '4y' },
]

const AI_BACKEND = [
  { name: 'LangChain',          lvl: '80%', yrs: '2y' },
  { name: 'Gemini / OpenAI',    lvl: '75%', yrs: '2y' },
  { name: 'Python + Flask',     lvl: '72%', yrs: '3y' },
  { name: 'Node.js',            lvl: '70%', yrs: '3y' },
  { name: 'Redis / queues',     lvl: '65%', yrs: '2y' },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="sec" style={{ zIndex: 10, background: 'var(--bg)' }}>
      <div className="sec-wrap">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">Capabilities</div>
            <h2 className="sec-title">The stack I <span className="a">reach for</span></h2>
          </div>
          <p className="sec-desc">
            Tools I use daily, weekly, and occasionally — with rough years-of-use. I optimise for boring tech that pays compounding dividends.
          </p>
        </div>

        <div className="bento">
          {/* Daily drivers */}
          <motion.div
            className="b b-half"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="b-title">Daily drivers</h3>
            <div style={{ marginTop: '16px' }}>
              {DAILY.map(({ name, lvl, yrs }) => (
                <div key={name} className="skill">
                  <span className="skill-name">{name}</span>
                  <span className="skill-bar" style={{ '--lvl': lvl }} />
                  <span className="skill-yrs">{yrs}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AI & backend */}
          <motion.div
            className="b b-half"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="b-title">AI &amp; backend</h3>
            <div style={{ marginTop: '16px' }}>
              {AI_BACKEND.map(({ name, lvl, yrs }) => (
                <div key={name} className="skill">
                  <span className="skill-name">{name}</span>
                  <span className="skill-bar" style={{ '--lvl': lvl }} />
                  <span className="skill-yrs">{yrs}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* /now card */}
          <motion.div
            className="b b-third"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="b-tag">/now</span>
            <h3 className="b-title" style={{ marginTop: '8px' }}>What I&apos;m doing</h3>
            <div style={{ marginTop: '18px' }}>
              <div className="now-row">
                <div className="now-ico">◆</div>
                <div>
                  <div className="now-text">Building <b style={{ color: 'var(--fg1)' }}>sadhak_ai</b> — context-aware Gemini chat.</div>
                  <div className="now-sub">This week</div>
                </div>
              </div>
              <div className="now-row">
                <div className="now-ico">✎</div>
                <div>
                  <div className="now-text">Writing about LLM streaming in Ruby.</div>
                  <div className="now-sub">Drafting</div>
                </div>
              </div>
              <div className="now-row">
                <div className="now-ico">↗</div>
                <div>
                  <div className="now-text">Booking 1 freelance slot for Q3.</div>
                  <div className="now-sub">Open</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="b b-third"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h3 className="b-title">Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', fontSize: '14px', color: 'var(--fg2)', lineHeight: 2.1 }}>
              <li>→ Full-stack web apps</li>
              <li>→ LLM integrations &amp; chat UX</li>
              <li>→ MVP sprints (2—6 weeks)</li>
              <li>→ Code reviews &amp; audits</li>
              <li>→ Rails &amp; React performance work</li>
            </ul>
          </motion.div>

          {/* By the numbers */}
          <motion.div
            className="b b-third"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="b-title">By the numbers</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginTop: '20px' }}>
              <div>
                <p className="stat-num" style={{ fontSize: '36px' }}>42<span className="a">+</span></p>
                <p className="stat-label">Repos shipped</p>
              </div>
              <div>
                <p className="stat-num" style={{ fontSize: '36px' }}>1.4k</p>
                <p className="stat-label">GH stars</p>
              </div>
              <div>
                <p className="stat-num" style={{ fontSize: '36px' }}>12</p>
                <p className="stat-label">Happy clients</p>
              </div>
              <div>
                <p className="stat-num" style={{ fontSize: '36px' }}>∞</p>
                <p className="stat-label">Cups of chai</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
