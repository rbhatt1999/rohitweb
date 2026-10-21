import Link from 'next/link'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'
import { FEATURED, MORE } from '@/lib/projects'
import { SITE_URL, pageMetadata } from '@/lib/site'

const TITLE = 'Software & Gen AI Projects — Rohit Bhatt'
const DESCRIPTION = 'Software and generative AI projects by Rohit Bhatt: Sadhak AI on Gemini, and Stay a While, a Rails and React marketplace.'

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/work',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/work#webpage`,
      url: `${SITE_URL}/work`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ItemList',
      itemListElement: FEATURED.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.name,
        url: `${SITE_URL}/work/${project.slug}`,
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/work` },
      ],
    },
  ],
}

export default function WorkPage() {
  return (
    <main className="page-main">
      <JsonLd data={jsonLd} />
      <article className="section" style={{ paddingTop: 'clamp(12px, 2vw, 28px)' }}>
        <div className="wrap">
          <Crumbs items={[{ href: '/', label: 'Home' }, { label: 'Projects' }]} />
          <p className="page-kicker">selected work</p>
          <h1 className="page-title">Software &amp; <span className="em">Gen AI</span></h1>
          <p className="page-lede">
            Two products with enough surface to describe, and a short list of smaller
            open-source apps. I&apos;m Rohit Bhatt, a software developer. The longer background
            is on <Link href="/about">the about page</Link>.
          </p>

          <div className="work-list">
            {FEATURED.map((project) => (
              <article key={project.slug} className="work-row">
                <div className="work-row-top">
                  <span className="when">{project.year}</span>
                  {project.pill && <span className="pill">{project.pill}</span>}
                </div>
                <h2><Link href={`/work/${project.slug}`}>{project.name}</Link></h2>
                <p>{project.tag}</p>
                <p>{project.desc}</p>
                <div className="case-stack">
                  {project.stack.map((item) => <span key={item} className="chip">{item}</span>)}
                </div>
                <p className="work-row-links">
                  <Link className="ext" href={`/work/${project.slug}`}>project notes →</Link>
                  {project.live && <a className="ext" href={project.live} target="_blank" rel="noreferrer">live demo →</a>}
                  <a className="ext" href={project.github} target="_blank" rel="noreferrer">source →</a>
                </p>
              </article>
            ))}
          </div>

          <section className="page-block">
            <h2>More open source</h2>
            <p>
              Smaller open-source apps. Each one links to its repository.
            </p>
            {MORE.map((project) => (
              <a key={project.name} className="more-row" href={project.github} target="_blank" rel="noreferrer">
                <span className="mn">{project.name}</span>
                <span className="md">— {project.desc}</span>
                <span className="ma ext">github →</span>
              </a>
            ))}
          </section>
        </div>
      </article>
    </main>
  )
}
