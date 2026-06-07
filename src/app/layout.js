import './globals.css'
import { jetbrainsMono, inter } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import NavigationBar from '@/components/Navigation/NavigationBar'
import Footer from '@/components/Footer'
import SiteChrome from '@/components/SiteChrome'

export const metadata = {
  title: 'Rohit Bhatt — Full-Stack Engineer',
  description: 'Full-stack engineer building thoughtful web software with Ruby on Rails, React & AI integrations.',
  keywords: ['Rohit Bhatt', 'Full Stack Web Developer', 'Ruby on Rails', 'React', 'JavaScript', 'AI', 'LangChain', 'Gemini'],
  openGraph: {
    title: 'Rohit Bhatt — Full-Stack Engineer',
    description: 'Full-stack engineer building thoughtful web software with Ruby on Rails, React & AI integrations.',
    images: [{ url: '/assets/rohit-bhatt.jpg', width: 800, height: 500, alt: 'Rohit Bhatt' }],
    url: 'https://www.rohitweb.me',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohit Bhatt — Full-Stack Engineer',
    description: 'Full-stack engineer building thoughtful web software with Ruby on Rails, React & AI integrations.',
    images: ['/assets/rohit-bhatt.jpg'],
    creator: '@Rohit__Bhatt_',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`} suppressHydrationWarning>
      {/* Prevent theme flash + enable scroll-reveal motion before React hydrates */}
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
