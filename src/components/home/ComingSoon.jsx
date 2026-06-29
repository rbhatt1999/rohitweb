'use client'

import { useState } from 'react'

const FEATURES = [
  { k: 'agents', label: 'Autonomous AI agents' },
  { k: 'wallets', label: 'Native on-chain wallets' },
  { k: 'settle', label: 'Trustless settlement' },
  { k: 'open', label: 'Open agent marketplace' },
]

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    const value = email.trim()
    if (!value || !value.includes('@')) return
    setJoined(true)
  }

  return (
    <section className="soon" id="home">
      <div className="soon-aura" aria-hidden />
      <div className="soon-grid-bg" aria-hidden />

      <div className="wrap soon-wrap">
        <div className="soon-status">
          <span className="live-dot" />
          <span className="hs-label">launching soon</span>
          <span className="hs-chip">AI &times; Web3</span>
        </div>

        <h1 className="soon-h1">
          The autonomous
          <br />
          <span className="em">agent economy.</span>
        </h1>

        <p className="soon-lead">
          <b>NEURA</b> is building self-directed AI agents that own on-chain
          wallets &mdash; they work, earn, and settle value 24/7 without a
          human in the loop. An open economy where intelligence transacts.
        </p>

        <ul className="soon-chips">
          {FEATURES.map((f) => (
            <li key={f.k} className="soon-chip">{f.label}</li>
          ))}
        </ul>

        {joined ? (
          <p className="soon-thanks">
            <span className="live-dot" /> You&apos;re on the list. We&apos;ll be in touch.
          </p>
        ) : (
          <form className="soon-form" onSubmit={onSubmit}>
            <input
              type="email"
              className="soon-input"
              placeholder="you@example.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary" data-magnetic>
              join the waitlist <span className="arr">&rarr;</span>
            </button>
          </form>
        )}

        <div className="soon-meta">
          <span>building in the open</span>
          <span className="sep" />
          <span>remote &middot; worldwide</span>
        </div>
      </div>
    </section>
  )
}
