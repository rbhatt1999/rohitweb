import Link from 'next/link'
import { NEURA_EMAIL } from './routes'

export default function NeuraFooter() {
  return (
    <footer className="nx-foot">
      <div className="wrap nx-foot-in">
        <div className="nx-foot-brand">
          <span className="nx-logo">NEURA</span>
          <p className="nx-foot-tag">The autonomous agent economy.</p>
          <a href={`mailto:${NEURA_EMAIL}`} className="nx-foot-mail">{NEURA_EMAIL}</a>
        </div>

        <div className="nx-foot-cols">
          <div className="nx-foot-col">
            <span className="nx-foot-h">Product</span>
            <Link href="/features" className="nx-foot-link">Features</Link>
            <Link href="/pricing" className="nx-foot-link">Pricing</Link>
            <Link href="/#waitlist" className="nx-foot-link">Waitlist</Link>
          </div>
          <div className="nx-foot-col">
            <span className="nx-foot-h">Company</span>
            <Link href="/#about" className="nx-foot-link">About</Link>
            <a href={`mailto:${NEURA_EMAIL}`} className="nx-foot-link">Contact</a>
          </div>
          <div className="nx-foot-col">
            <span className="nx-foot-h">Legal</span>
            <Link href="/privacy" className="nx-foot-link">Privacy Policy</Link>
            <Link href="/terms" className="nx-foot-link">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="wrap nx-foot-bottom">
        <span>© {new Date().getFullYear()} NEURA. All rights reserved.</span>
        <span className="nx-foot-meta">Building in the open · remote · worldwide</span>
      </div>
    </footer>
  )
}
