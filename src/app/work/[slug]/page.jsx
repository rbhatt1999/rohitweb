import Link from 'next/link'
import { notFound } from 'next/navigation'
import Crumbs from '@/components/Crumbs'
import JsonLd from '@/components/JsonLd'
import { FEATURED, getProject } from '@/lib/projects'
import { SITE_URL, pageMetadata } from '@/lib/site'

export function generateStaticParams() {
  return FEATURED.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }) {
  const project = getProject(params.slug)
  if (!project) return { title: 'Not found', robots: { index: false, follow: false } }
  return pageMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/work/${project.slug}`,
  })
}

export default function ProjectPage({ params }) {
  const project = getProject(params.slug)
  if (!project) notFound()
  const url = `${SITE_URL}/work/${project.slug}`
  const description = project.seoDescription
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareSourceCode',
        name: project.name,
        description,
        url,
        codeRepository: project.github,
        programmingLanguage: project.languages,
        author: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE_URL}/work` },
          { '@type': 'ListItem', position: 3, name: project.name, item: url },
        ],
      },
    ],
  }

  return (
    <main className="page-main">
      <JsonLd data={jsonLd} />
      <article className="section" style={{ paddingTop: 'clamp(12px, 2vw, 28px)' }}>
        <div className="wrap page-narrow">
          <Crumbs items={[
            { href: '/', label: 'Home' },
            { href: '/work', label: 'Projects' },
            { label: project.name },
          ]} />
          <p className="page-kicker">{project.year}{project.pill ? ` · ${project.pill}` : ''}</p>
          <h1 className="page-title">{project.name}</h1>
          <p className="page-lede">{project.tag}</p>
          <div className="page-copy">
            {project.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="case-stack" style={{ marginTop: 8 }}>
            {project.stack.map((item) => <span key={item} className="chip">{item}</span>)}
          </div>
          <p className="work-row-links">
            {project.live && <a className="ext" href={project.live} target="_blank" rel="noreferrer">live demo →</a>}
            <a className="ext" href={project.github} target="_blank" rel="noreferrer">source →</a>
          </p>

          <section className="page-block">
            <h2>Related</h2>
            <ul className="link-list">
              {project.related.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
              <li><Link href="/about">About Rohit Bhatt, software developer</Link></li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  )
}
