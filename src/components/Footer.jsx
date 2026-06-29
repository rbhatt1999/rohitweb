'use client'
import { usePathname } from 'next/navigation'
import { NEURA_ROUTES } from '@/components/neura/routes'

export default function Footer() {
  const pathname = usePathname()

  // NEURA product routes render their own footer (NeuraFooter); hide this one.
  if (NEURA_ROUTES.includes(pathname)) return null

  return (
    <div className="wrap">
      <footer className="footer">
        <span>© {new Date().getFullYear()} Rohit Bhatt — built with care<span className="pdot" /></span>
        <span className="footer-links">
          <a href="https://github.com/rbhatt1999"               target="_blank" rel="noreferrer" className="footer-link">github</a>
          <a href="https://www.linkedin.com/in/rohitbhatt-dev/"  target="_blank" rel="noreferrer" className="footer-link">linkedin</a>
          <a href="https://twitter.com/Rohit_Bhatt_"             target="_blank" rel="noreferrer" className="footer-link">twitter</a>
          <a href="https://medium.com/@rbhatt199924"             target="_blank" rel="noreferrer" className="footer-link">medium</a>
        </span>
      </footer>
    </div>
  )
}
