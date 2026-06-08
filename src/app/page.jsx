import HomeComponent from '@/components/home/HomeComponent'
import Marquee from '@/components/home/Marquee'
import Projects from '@/components/home/Projects'
import About from '@/components/home/About'
import Writing from '@/components/home/Writing'
import Contact from '@/components/home/Contact'
import HomeFX from '@/components/home/HomeFX'

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
      <About />
      <Writing />
      <Contact />
      <HomeFX />
    </main>
  )
}
