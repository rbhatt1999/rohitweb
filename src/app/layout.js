import './globals.css'
import { jetbrainsMono, inter } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import NavigationBar from '@/components/Navigation/NavigationBar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

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
      {/* Prevent theme flash: read localStorage before React hydrates */}
      <head suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var t = localStorage.getItem('rb-theme');
            if (t) document.documentElement.setAttribute('data-theme', t);
          } catch(e) {}
        ` }} />
      </head>
      <body suppressHydrationWarning style={{
        background: 'var(--bg)',
        color: 'var(--fg2)',
        fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
        margin: 0,
      }}>
        <Analytics />
        <div className="grid-bg" aria-hidden />
        <CursorGlow />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
