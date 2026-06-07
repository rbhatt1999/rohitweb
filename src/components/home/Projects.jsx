import Reveal from '@/components/Reveal'

const ArrowUR = () => (
  <svg className="ar" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)

const FEATURED = [
  {
    id: 'sadhak',
    pill: 'ai · latest',
    name: 'Sadhak AI',
    year: '2025',
    tag: "A privacy-first AI chat that streams Gemini's answers token by token.",
    desc: 'Google OAuth, per-user threads persisted in Postgres, and a rolling-summary context window so long conversations stay coherent without blowing the token budget.',
    stack: ['flask', 'langchain', 'gemini', 'postgres', 'sse'],
    metrics: [
      { v: 'Gemini', l: 'model' },
      { v: 'SSE', l: 'transport' },
      { v: 'Postgres', l: 'threads' },
    ],
    github: 'https://github.com/rbhatt1999/sadhak-ai',
    panel: {
      title: 'sadhak ~ chat',
      stat: '● live',
      lines: [
        { h: '<span class="sym">▸</span> auth   <span class="ok">google · ok</span>' },
        { h: '<span class="sym">▸</span> thread <span class="dim">#1f8a · postgres</span>' },
        { h: '<span class="sym">▸</span> stream <span class="dim">gemini · sse</span> <span class="dots"><span>●</span><span>●</span><span>●</span></span>' },
      ],
      tail: [
        { cls: 'q', h: '<span class="dim">user ›</span> "explain rolling-summary memory"' },
        { cls: 'resp', h: '<span class="sym">└</span> Keeps the most recent turns verbatim, then folds older context into a compact recap — so the thread never overruns the model window.' },
        { h: '<span class="dim">streaming</span><span class="cursor-blink"></span>' },
      ],
      foot: '<span class="ok">200 OK</span> · gemini-1.5 · 38ms',
    },
  },
  {
    id: 'stay',
    pill: null,
    name: 'Stay a While',
    year: '2024',
    tag: 'A home-stay marketplace — discovery, booking, and host dashboards end to end.',
    desc: 'A Rails API feeding a React + Redux client: search and filtering, a multi-step booking flow, host management dashboards, and a clean payments UI.',
    stack: ['rails', 'react', 'redux', 'postgres'],
    metrics: [
      { v: 'Rails', l: 'api' },
      { v: 'React', l: 'client' },
      { v: 'Stripe', l: 'payments' },
    ],
    live: 'https://stay-a-while-front-end.vercel.app/',
    github: 'https://github.com/rbhatt1999/stay-a-while-front-end',
    panel: {
      title: 'stay_a_while ~ api',
      stat: '● 200',
      lines: [
        { h: '<span class="sym">$</span> GET /api/v1/stays' },
        { h: '<span class="sym">▸</span> <span class="key">142</span> listings · <span class="dim">12 hosts</span>' },
        { h: '<span class="sym">▸</span> booking → <span class="ok">stripe ✓</span>' },
        { h: '<span class="sym">▸</span> client <span class="dim">react · redux store</span>' },
      ],
      tail: [
        { cls: 'resp', h: '<span class="sym">└</span> { "city": "manali", "nights": 3, "guests": 2, "total": "$420" }' },
        { h: '<span class="dim">payment</span> → <span class="ok">confirmed ✓</span><span class="cursor-blink"></span>' },
      ],
      foot: '<span class="ok">build ✓</span> · deployed on vercel',
    },
  },
]

const MORE = [
  { name: 'space_hub',     desc: 'spacex mission selector',   github: 'https://github.com/rbhatt1999/Space-Hub' },
  { name: 'budget_app',    desc: 'rails finance manager',     github: 'https://github.com/rbhatt1999/budget-app' },
  { name: 'recipe_app',    desc: 'cookbook + ingredients',    github: 'https://github.com/rbhatt1999/recipe_app' },
  { name: 'finance_app',   desc: 'stock market analysis',     github: 'https://github.com/rbhatt1999/finance-app' },
  { name: 'math_magician', desc: 'calculator + practice',     github: 'https://github.com/rbhatt1999/math-magician' },
]

function Panel({ data }) {
  return (
    <div className="case-panel" aria-hidden>
      <div className="panel-head">
        <span className="pdot" />
        <span className="ptitle">{data.title}</span>
        <span className="pstat">{data.stat}</span>
      </div>
      {data.lines.map((l, i) => (
        <div className={`pl${l.cls ? ' ' + l.cls : ''}`} key={i} dangerouslySetInnerHTML={{ __html: l.h }} />
      ))}
      <div className="panel-spacer" />
      {data.tail.map((l, i) => (
        <div className={`pl${l.cls ? ' ' + l.cls : ''}`} key={`t${i}`} dangerouslySetInnerHTML={{ __html: l.h }} />
      ))}
      <div className="panel-foot" dangerouslySetInnerHTML={{ __html: data.foot }} />
    </div>
  )
}

function CaseCard({ proj, idx, flip }) {
  return (
    <article className={`case${flip ? ' flip' : ''}`}>
      <div className="case-body">
        <div className="case-eyebrow">
          <span className="case-num">{String(idx + 1).padStart(2, '0')}</span>
          <span className="ln" />
          <span className="case-year">{proj.year}</span>
        </div>
        <h3 className="case-title" data-scramble>
          {proj.name}
          {proj.pill && <span className="pill">{proj.pill}</span>}
        </h3>
        <p className="case-tag">{proj.tag}</p>
        <p className="case-desc">{proj.desc}</p>
        <div className="case-metrics">
          {proj.metrics.map((m, i) => (
            <div className="metric" key={i}>
              <div className="mv">{m.v}{m.u && <span className="u">{m.u}</span>}</div>
              <div className="ml">{m.l}</div>
            </div>
          ))}
        </div>
        <div className="case-stack">
          {proj.stack.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
        <div className="case-foot">
          {proj.live && <a className="ext" href={proj.live} target="_blank" rel="noreferrer">live demo <ArrowUR /></a>}
          {proj.github && <a className="ext" href={proj.github} target="_blank" rel="noreferrer">source <ArrowUR /></a>}
        </div>
      </div>
      <Panel data={proj.panel} />
    </article>
  )
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="lhs">
            <span className="sec-num">01 —</span>
            <h2 className="sec-title">Selected work</h2>
          </span>
          <a className="sec-link" href="https://github.com/rbhatt1999" target="_blank" rel="noreferrer">all projects on github <ArrowUR /></a>
        </Reveal>

        <div className="cases">
          {FEATURED.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <CaseCard proj={p} idx={i} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="more-head">more / open source</div>
          {MORE.map((m) => (
            <a key={m.name} className="more-row" href={m.github} target="_blank" rel="noreferrer">
              <span className="mn">{m.name}</span>
              <span className="md">— {m.desc}</span>
              <span className="ma ext">github <ArrowUR /></span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
