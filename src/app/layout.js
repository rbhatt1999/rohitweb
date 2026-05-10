import './globals.css'
import { jetbrainsMono, inter } from '@/lib/fonts'
import { Analytics } from '@vercel/analytics/react'
import dynamic from 'next/dynamic'
import NavigationBar from '@/components/Navigation/NavigationBar'
import Footer from '@/components/Footer'

const CorridorCanvas = dynamic(() => import('@/components/three/CorridorCanvas'), { ssr: false })

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
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body style={{ background: '#06070a', color: '#e4e4e7', fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif", margin: 0 }}>
        <Analytics />
        {/* 3D WebGL corridor — fixed behind all content */}
        <CorridorCanvas />
        {/* Dark scrim between canvas and content for readability */}
        <div className="content-veil" />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
