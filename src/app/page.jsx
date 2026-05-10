import HomeComponent from '@/components/home/HomeComponent'
import About from '@/components/home/About'
import Projects from '@/components/home/Projects'
import Writing from '@/components/home/Writing'
import Contact from '@/components/home/Contact'

export const metadata = {
  title: 'Rohit Bhatt — Full-Stack Engineer',
  description: 'Full-stack engineer building thoughtful web software with Ruby on Rails, React & AI integrations.',
  alternates: { canonical: 'https://www.rohitweb.me' },
}

export default function Home() {
  return (
    <main style={{ background: '#06070a' }}>
      <HomeComponent />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </main>
  )
}
