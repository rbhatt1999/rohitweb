import Reveal from '@/components/Reveal'

const ArrowUR = () => (
  <svg className="ar" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)

const STACK = [
  { name: 'Ruby on Rails',      badge: 'daily' },
  { name: 'React · Redux',      badge: 'daily' },
  { name: 'Python · Flask',     badge: '' },
  { name: 'LangChain · Gemini', badge: '' },
  { name: 'PostgreSQL',         badge: '' },
  { name: 'Tailwind · Node',    badge: '' },
]

export default function About() {
  return (
    <section className="section section-2" id="about">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="lhs">
            <span className="sec-num">02 —</span>
            <h2 className="sec-title">About</h2>
          </span>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-body">
            <p className="about-lead">
              I build software that feels <span className="em">considered</span> — where the
              engineering disappears and the experience is all that&apos;s left.
            </p>
            <p>
              Currently working remote, shipping everything from landing pages to full-stack
              applications, with a recent focus on LLM-backed tools built on LangChain and Gemini.
            </p>
            <p>
              Five years in, I still care most about the small things: a transition that feels
              right, an API that&apos;s a pleasure to use, a page that loads before you notice.
              Off-screen, you&apos;ll find me on a hiking trail or inside an Erin Morgenstern novel.
            </p>
            <a className="ext" href="/assets/resume.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '13px' }}>
              download résumé <ArrowUR />
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="stack-card">
              <div className="sc-head">stack <span className="ln" /></div>
              {STACK.map((s) => (
                <div key={s.name} className="stack-row">
                  <span className="stack-bar" />
                  <span className="sn">{s.name}</span>
                  {s.badge && <span className="sb">{s.badge}</span>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
