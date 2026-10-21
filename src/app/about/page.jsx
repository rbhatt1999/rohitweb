import Link from 'next/link'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, pageMetadata } from '@/lib/site'

const TITLE = 'About Rohit Bhatt — Software & Gen AI Developer'
const DESCRIPTION = 'Rohit Bhatt is a software developer in India. Forward Deployed Engineer at ekincare, building full-stack products and production generative AI.'

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/about',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${SITE_URL}/about#webpage`,
      url: `${SITE_URL}/about`,
      name: TITLE,
      description: DESCRIPTION,
      mainEntity: { '@id': `${SITE_URL}/#person` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <main className="page-main">
      <JsonLd data={jsonLd} />
      <article className="section" style={{ paddingTop: 'clamp(12px, 2vw, 28px)' }}>
        <div className="wrap">
          <Crumbs items={[{ href: '/', label: 'Home' }, { label: 'About' }]} />
          <p className="page-kicker">software developer · India</p>
          <h1 className="page-title">Rohit <span className="em">Bhatt</span></h1>
          <p className="page-lede">
            I build full-stack software and production generative AI. The engineering
            should disappear into the product.
          </p>
          <div className="page-copy">
            <p>
              I&apos;m a Forward Deployed Engineer at ekincare, working remotely from India.
              The stack is Ruby on Rails, React, Python, and PostgreSQL, plus the model
              layer: Claude, Gemini, Vertex AI, and LangChain. I&apos;m open to work.
            </p>
            <p>
              The public projects are <Link href="/work/sadhak-ai">Sadhak AI</Link> and <Link href="/work/stay-a-while">Stay a While</Link>.
              The notes on Rails, PostgreSQL, and generative AI are on <Link href="/blogs">the blog</Link>.
              I wrote separately about <Link href="/blogs/from-construction-to-coding-my-journey-to-full-stack-development">moving from civil engineering into software</Link>.
            </p>
          </div>

          <section className="page-block">
            <h2>Software and generative AI</h2>
            <div className="focus-grid">
              <div className="focus-card">
                <h3>Full-stack products</h3>
                <p>
                  Rails APIs, React and Next.js interfaces, and PostgreSQL. At YOUR-SPACE
                  I built APIs for mobile, web, and CRM products — 10,000+ active users
                  and 25,000+ daily API requests — and query and schema work that improved
                  query performance by 35% and API response times by 25%. At Peepoye Network
                  I built an opinion-trading platform in Rails and React, with a custom CMS,
                  authentication, and live vote counts, and moved the company site from
                  WordPress to Next.js.
                </p>
                <p>
                  <Link href="/work/stay-a-while">Stay a While</Link> is the home-stay marketplace:
                  search, a multi-step booking flow, host dashboards, and a payments UI.
                </p>
              </div>
              <div className="focus-card">
                <h3>Generative AI in production</h3>
                <p>
                  At ekincare this includes AI-assisted insurance claim adjudication with
                  Claude and Gemini, a read-only MCP database server, Gemini diagnosis and
                  chief-complaint extraction, and React screens plus Metabase reports for
                  token usage. Later, claims and conversational AI moved to Vertex AI,
                  including eight specialized agents, with provider configuration, tool
                  execution, fallbacks, and usage accounting kept in place.
                </p>
                <p>
                  <Link href="/work/sadhak-ai">Sadhak AI</Link> is the project I can show in
                  public: a multi-user chat that streams Gemini, with Google OAuth, Postgres
                  threads, and a rolling-summary context window. I write about the same
                  territory in <Link href="/blogs/building-the-future-a-developers-guide-to-agentic-ai-workflows-in-ruby">agentic AI workflows in Ruby</Link> and <Link href="/blogs/the-agentic-shift-artificial-intelligence-landscape-2026">the 2026 agentic-AI landscape</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="page-block">
            <h2>Experience</h2>
            <div className="role">
              <h3>Forward Deployed Engineer, ekincare</h3>
              <p className="when">Hyderabad, India · July 2026 — present</p>
              <ul>
                <li>Healthcare pricing workflows: background computation, authenticated callbacks, time-segmented SKU combinations, operational review, and automated or bulk approvals.</li>
                <li>Migrated claims and conversational AI workflows to Vertex AI, including eight specialized agents.</li>
                <li>Hardened MCP streaming against stalled clients with bounded socket writes and concurrency-safe cleanup.</li>
              </ul>
            </div>
            <div className="role">
              <h3>Software Development Engineer II, Full Stack, ekincare</h3>
              <p className="when">December 2024 — June 2026</p>
              <ul>
                <li>AI-assisted insurance claim adjudication with Claude and Gemini, PostgreSQL JSONB, and Sidekiq, connected to human review.</li>
                <li>A read-only MCP database server with SQL validation, authentication, and concurrency controls.</li>
                <li>Gemini-based diagnosis and chief-complaint extraction, React adjudication interfaces, and Metabase reporting for LLM token usage and cost.</li>
              </ul>
            </div>
            <div className="role">
              <h3>Software Engineer, Ruby on Rails, YOUR-SPACE</h3>
              <p className="when">Delhi, India · October 2023 — December 2024</p>
              <ul>
                <li>Rails APIs and relational models for mobile, web, and CRM products, supporting 10,000+ active users and 25,000+ daily API requests.</li>
                <li>PostgreSQL and schema work that improved query performance by 35% and API response times by 25%. Next.js interfaces, AWS deploys, and Metabase reporting.</li>
              </ul>
            </div>
            <div className="role">
              <h3>Full Stack Engineer, Peepoye Network</h3>
              <p className="when">Remote · June 2023 — October 2023</p>
              <ul>
                <li>Opinion-trading platform in Rails and React: custom CMS, authentication, and live vote counts. Company website migrated from WordPress to Next.js.</li>
              </ul>
            </div>
            <div className="role">
              <h3>Code Reviewer, Microverse</h3>
              <p className="when">Remote · November 2022 — June 2023</p>
              <ul>
                <li>Reviewed Rails and React projects and mentored developers on architecture, maintainability, and Git.</li>
              </ul>
            </div>
            <div className="role">
              <h3>Design Engineer, Huawei Technologies</h3>
              <p className="when">Gurgaon, India · February 2021 — October 2022</p>
              <ul>
                <li>Led a 21-member project team through delivery. This role was before the move into software.</li>
              </ul>
            </div>
            <p className="page-note">
              At ekincare: Tech Obsession Award (twice) and an Extreme Ownership Award.
              The detailed résumé is a <a href="/assets/resume.pdf">PDF</a>.
            </p>
          </section>

          <section className="page-block">
            <h2>Education</h2>
            <div className="role">
              <h3>MCA, Artificial Intelligence and Machine Learning</h3>
              <p className="when">Chandigarh University · September 2024 — June 2026</p>
            </div>
            <div className="role">
              <h3>Bachelor of Computer Applications</h3>
              <p className="when">Chandigarh University · July 2021 — July 2024</p>
            </div>
            <div className="role">
              <h3>Full Stack Web Development</h3>
              <p className="when">Microverse · October 2022 — June 2023 · 1,300+ hours</p>
            </div>
          </section>

          <section className="page-block">
            <h2>Writing and contact</h2>
            <ul className="link-list">
              <li><Link href="/categories/artificial-intelligence">Artificial intelligence notes</Link></li>
              <li><Link href="/categories/ruby-on-rails">Ruby on Rails notes</Link></li>
              <li><Link href="/categories/postgres">PostgreSQL notes</Link></li>
              <li><Link href="/work">Selected projects</Link></li>
              <li><Link href="/#contact">Email and profiles</Link></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
