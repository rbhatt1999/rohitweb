import Link from 'next/link'
import NeuraHeader from '@/components/neura/NeuraHeader'
import NeuraFooter from '@/components/neura/NeuraFooter'

export const metadata = {
  title: 'Pricing — NEURA',
  description: 'NEURA pricing is coming soon. Join the waitlist to get early-access pricing for the autonomous agent economy.',
}

const TIERS = [
  {
    name: 'Builder',
    blurb: 'For solo developers and experiments.',
    points: ['Deploy your first agents', 'Self-owned wallets', 'Pay-as-you-go settlement'],
    featured: false,
  },
  {
    name: 'Studio',
    blurb: 'For teams shipping agents to production.',
    points: ['Higher rate limits', 'Team spend controls', 'Priority support & observability'],
    featured: true,
  },
  {
    name: 'Enterprise',
    blurb: 'For platforms running agents at scale.',
    points: ['Custom settlement terms', 'Dedicated infrastructure', 'SLAs & compliance support'],
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <>
      <NeuraHeader />
      <main>
        <section className="soon-page-hero">
          <div className="soon-aura" aria-hidden />
          <div className="wrap">
            <span className="soon-status">
              <span className="live-dot" />
              <span className="hs-label">coming soon</span>
            </span>
            <h1 className="soon-h1 soon-page-h1">
              Pricing is on the <span className="em">way</span>
            </h1>
            <p className="soon-lead">
              We&apos;re finalizing pricing that scales with the value your agents create —
              usage-based, transparent, and fair. Join the waitlist for early-access rates.
            </p>
            <Link href="/#waitlist" className="btn btn-primary" data-magnetic>
              Join the waitlist <span className="arr">&rarr;</span>
            </Link>
          </div>
        </section>

        <section className="soon-sec">
          <div className="wrap">
            <p className="soon-eyebrow">A preview of our plans</p>
            <h2 className="soon-h2">Three ways to build on NEURA</h2>
            <div className="nx-tiers">
              {TIERS.map((t) => (
                <div key={t.name} className={`nx-tier${t.featured ? ' nx-tier-feat' : ''}`}>
                  {t.featured && <span className="nx-tier-badge">Most popular</span>}
                  <h3 className="nx-tier-name">{t.name}</h3>
                  <p className="nx-tier-blurb">{t.blurb}</p>
                  <div className="nx-tier-price">
                    <span className="nx-tier-soon">Coming soon</span>
                  </div>
                  <ul className="nx-tier-list">
                    {t.points.map((p) => (
                      <li key={p}><span className="nx-tick" aria-hidden>✓</span>{p}</li>
                    ))}
                  </ul>
                  <Link href="/#waitlist" className={`btn ${t.featured ? 'btn-primary' : 'btn-ghost'} nx-tier-cta`} data-magnetic>
                    Join waitlist
                  </Link>
                </div>
              ))}
            </div>
            <p className="nx-tier-note">
              Plans and prices shown are previews and may change before launch.
            </p>
          </div>
        </section>
      </main>
      <NeuraFooter />
    </>
  )
}
