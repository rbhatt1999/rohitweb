'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MORE = [
  { name: 'space_hub',          desc: '— spacex mission selector',     github: 'https://github.com/rbhatt1999/Space-Hub',     tree: '├─' },
  { name: 'langchain-learning', desc: '— llm exercises & experiments', github: 'https://github.com/rbhatt1999',               tree: '├─' },
  { name: 'recipe_app',         desc: '— cookbook + ingredients',      github: 'https://github.com/rbhatt1999/recipe_app',    tree: '├─' },
  { name: 'math_magician',      desc: '— calculator + practice',       github: 'https://github.com/rbhatt1999/math-magician', tree: '└─' },
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section id="work" ref={ref} className="sec" style={{ zIndex: 10, background: 'var(--bg)' }}>
      <div className="sec-wrap">
        <div className="sec-head">
          <div>
            <div className="sec-eyebrow">Selected Work / 2022—2025</div>
            <h2 className="sec-title">Things I&apos;ve built <span className="a">recently</span></h2>
          </div>
          <p className="sec-desc">
            A focused look at the projects I&apos;m most proud of — production apps, AI tooling, and experiments that taught me something.
          </p>
        </div>

        <div className="bento">
          {/* sadhak_ai — wide card */}
          <motion.div
            className="b b-wide"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="b-tag">Featured · AI</span>
            <h3 className="b-title" style={{ marginTop: '8px' }}>sadhak_ai — private chat with Gemini</h3>
            <p className="b-desc">
              Privacy-focused chat: Google OAuth, per-user threads in Postgres, SSE-streamed responses, rolling-summary context windows so long conversations don&apos;t blow the token budget.
            </p>
            <div className="b-stack">
              <span>Flask</span><span>LangChain</span><span>Gemini</span><span>Postgres</span><span>SSE</span>
            </div>
            <a href="https://github.com/rbhatt1999/sadhak-ai" target="_blank" rel="noreferrer" className="b-arrow" aria-label="GitHub">↗</a>
          </motion.div>

          {/* Stat — years */}
          <motion.div
            className="b b-quarter"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}
          >
            <p className="stat-num">5<span className="a">+</span></p>
            <p className="stat-label">Years shipping</p>
          </motion.div>

          {/* stay_a_while */}
          <motion.div
            className="b b-third"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="b-tag">SaaS</span>
            <h3 className="b-title" style={{ marginTop: '8px' }}>stay_a_while</h3>
            <p className="b-desc">Home-stay booking flow with host dashboards and a payments UI.</p>
            <div className="b-stack"><span>Rails</span><span>React</span><span>Redux</span></div>
            <a href="https://github.com/rbhatt1999/stay-a-while-front-end" target="_blank" rel="noreferrer" className="b-arrow" aria-label="GitHub">↗</a>
          </motion.div>

          {/* budget_app */}
          <motion.div
            className="b b-third"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="b-tag">Tools</span>
            <h3 className="b-title" style={{ marginTop: '8px' }}>budget_app</h3>
            <p className="b-desc">Rails finance manager — categorised spend, recurring bills, monthly summaries.</p>
            <div className="b-stack"><span>Rails</span><span>Postgres</span></div>
            <a href="https://github.com/rbhatt1999/budget-app" target="_blank" rel="noreferrer" className="b-arrow" aria-label="GitHub">↗</a>
          </motion.div>

          {/* finance_app */}
          <motion.div
            className="b b-third"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="b-tag">Data</span>
            <h3 className="b-title" style={{ marginTop: '8px' }}>finance_app</h3>
            <p className="b-desc">Stock market analysis dashboard, charts and trend signals.</p>
            <div className="b-stack"><span>React</span><span>Node</span><span>Chart.js</span></div>
            <a href="https://github.com/rbhatt1999/finance-app" target="_blank" rel="noreferrer" className="b-arrow" aria-label="GitHub">↗</a>
          </motion.div>
        </div>

        {/* more/ list */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            marginTop: '40px',
            fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
            fontSize: '13.5px',
            color: 'var(--fg3)',
          }}
        >
          <span style={{ color: 'var(--fg1)', display: 'block', marginBottom: '10px', fontWeight: 500 }}>more/</span>
          {MORE.map(({ name, desc, github, tree }) => (
            <a key={name} href={github} target="_blank" rel="noreferrer" className="more-row">
              <span style={{ color: 'var(--fg5)', marginRight: '12px' }}>{tree}</span>
              <span style={{ color: 'var(--fg2)' }}>{name}</span>
              <span style={{ color: 'var(--fg4)', margin: '0 12px' }}>{desc}</span>
              <span className="gh-link" style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--fg4)' }}>
                [ github ↗ ]
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
