import HomeComponent from '@/components/home/HomeComponent'
import Marquee from '@/components/home/Marquee'
import Projects from '@/components/home/Projects'
import About from '@/components/home/About'
import Writing from '@/components/home/Writing'
import Contact from '@/components/home/Contact'
import HomeFX from '@/components/home/HomeFX'
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION } from '@/lib/site'

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
}

const PORTRAIT_SIZES = '(max-width: 720px) 78vw, 340px'

export default function Home() {
  return (
    <main>
      <link
        rel="preload"
        as="image"
        type="image/webp"
        href="/assets/rohit-bhatt-800.webp"
        imageSrcSet="/assets/rohit-bhatt-640.webp 640w, /assets/rohit-bhatt-800.webp 800w"
        imageSizes={PORTRAIT_SIZES}
        fetchPriority="high"
      />
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
