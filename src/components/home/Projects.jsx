import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { FEATURED, MORE } from '@/lib/projects'

const ArrowUR = () => (
  <svg className="ar" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)

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
        <h3 className="case-title">
          <Link href={`/work/${proj.slug}`} data-scramble>{proj.name}</Link>
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
          <Link className="ext" href={`/work/${proj.slug}`}>notes <ArrowUR /></Link>
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
            <h2 className="sec-title">Software &amp; AI work</h2>
          </span>
          <Link className="sec-link" href="/work">project notes <ArrowUR /></Link>
          <p className="sec-lede">
            Full-stack software and generative AI. The writeups sit next to the repositories,
            and the rest of the story is on <Link href="/about">the about page</Link>.
          </p>
        </Reveal>

        <div className="cases">
          {FEATURED.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
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
