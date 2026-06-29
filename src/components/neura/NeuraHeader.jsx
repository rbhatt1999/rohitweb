import Link from 'next/link'

const LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#about', label: 'About' },
]

export default function NeuraHeader() {
  return (
    <header className="nx-head">
      <div className="wrap nx-head-in">
        <Link href="/" className="nx-logo">NEURA</Link>
        <nav className="nx-nav">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nx-link">{l.label}</Link>
          ))}
          <Link href="/#waitlist" className="btn btn-primary nx-cta" data-magnetic>
            Join waitlist <span className="arr">&rarr;</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
