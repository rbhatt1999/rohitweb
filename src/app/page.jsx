import HomeComponent from '@/components/home/HomeComponent'
import Marquee from '@/components/home/Marquee'
import Projects from '@/components/home/Projects'
import Skills from '@/components/home/Skills'
import Writing from '@/components/home/Writing'
import About from '@/components/home/About'
import Contact from '@/components/home/Contact'

export const metadata = {
  title: 'Rohit Bhatt — Full-Stack Engineer',
  description: 'Full-stack engineer building thoughtful web software with Ruby on Rails, React & AI integrations.',
  alternates: { canonical: 'https://www.rohitweb.me' },
}

export default function Home() {
  return (
    <main>
      <HomeComponent />
      <Marquee />
      <Projects />
      <Skills />
      <Writing />
      <About />
      <Contact />
    </main>
  )
}
