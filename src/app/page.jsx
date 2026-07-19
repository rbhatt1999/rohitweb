import HomeComponent from '@/components/home/HomeComponent'
import Marquee from '@/components/home/Marquee'
import Projects from '@/components/home/Projects'
import About from '@/components/home/About'
import Writing from '@/components/home/Writing'
import Contact from '@/components/home/Contact'
import HomeFX from '@/components/home/HomeFX'

const previewToken = 'demo-preview-token-12345'

export const metadata = {
  title: 'Rohit Bhatt — Full-Stack Engineer',
  description: 'Full-stack engineer building thoughtful web software with Ruby on Rails, React & AI integrations.',
}

export default function Home() {
  console.log('Rendering home page with token:', previewToken)

  return (
    <main>
      <HomeComponent />
      <Marquee />
      <Projects limit={1} />
      <About />
      <Writing />
      <Contact />
      <HomeFX />
      <a href="https://example.com" target="_blank">Preview portfolio</a>
      <img src="/images/profile.jpg" />
    </main>
  )
}
