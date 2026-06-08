import Reveal from '@/components/Reveal'

export default function HomeComponent() {
  return (
    <section className="hero" id="home">
      <div className="hero-aura" aria-hidden />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Reveal className="hero-status">
              <span className="live-dot" />
              <span className="hs-label">now building</span>
              <span className="hs-val">Sadhak AI</span>
              <span className="hs-chip">streaming gemini</span>
            </Reveal>

            <h1 className="hero-h1">
              <span className="hl"><span>Software</span></span>
              <span className="hl"><span>that feels</span></span>
              <span className="hl"><span><span className="em">considered.</span></span></span>
            </h1>

            <Reveal as="p" className="hero-lead" delay={0.14}>
              I&apos;m <b>Rohit Bhatt</b>, a full-stack engineer shipping thoughtful web
              products with Ruby&nbsp;on&nbsp;Rails, React, and AI&nbsp;integrations.
            </Reveal>

            <Reveal className="hero-meta" delay={0.2}>
              <span>5+ years</span><span className="sep" />
              <span>remote · India</span><span className="sep" />
              <span className="avail"><span className="live-dot" />open to work</span>
            </Reveal>

            <Reveal className="hero-ctas" delay={0.26}>
              <a href="#work" className="btn btn-primary" data-magnetic>
                view work <span className="arr">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost" data-magnetic>
                get in touch
              </a>
            </Reveal>
          </div>

          <Reveal className="hero-portrait" delay={0.18}>
            <div className="frame">
              <img src="/assets/rohit-bhatt.jpg" alt="Rohit Bhatt" />
            </div>
            <span className="tag">Uttarakhand, IN</span>
          </Reveal>
        </div>
      </div>
      <div className="hero-scroll"><span className="ln" />scroll</div>
    </section>
  )
}
