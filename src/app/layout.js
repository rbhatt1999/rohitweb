import './globals.css'
import { jetbrainsMono, hanken, instrumentSerif } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import NavigationBar from '@/components/Navigation/NavigationBar'
import Footer from '@/components/Footer'
import SiteChrome from '@/components/SiteChrome'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, TWITTER_HANDLE, SAME_AS } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  keywords: ['Rohit Bhatt', 'Forward Deployed Engineer', 'Full Stack Web Developer', 'Ruby on Rails', 'React', 'JavaScript', 'AI', 'LangChain', 'Gemini'],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/assets/rohit-bhatt.jpg', width: 1086, height: 1448, alt: 'Rohit Bhatt' }],
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/assets/rohit-bhatt.jpg'],
    creator: TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Rohit Bhatt',
      url: SITE_URL,
      jobTitle: 'Forward Deployed Engineer',
      image: `${SITE_URL}/assets/rohit-bhatt.jpg`,
      worksFor: { '@type': 'Organization', name: 'ekincare' },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
      sameAs: SAME_AS,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#person` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/blogs?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${hanken.variable} ${instrumentSerif.variable}`} suppressHydrationWarning>
      {/* Prevent theme flash + enable scroll-reveal motion before React hydrates */}
      <head suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('rb-theme');
            document.documentElement.setAttribute('data-theme', (t === 'light' || t === 'dark') ? t : 'dark');
          } catch(e) { document.documentElement.setAttribute('data-theme', 'dark'); }
          document.documentElement.classList.add('js');
        ` }} />
      </head>
      <body suppressHydrationWarning style={{
        background: 'var(--paper)',
        color: 'var(--ink-2)',
        fontFamily: 'var(--sans)',
        margin: 0,
      }}>
        <JsonLd data={jsonLd} />
        <Analytics />
        <div className="grain" aria-hidden />
        <SiteChrome />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
