import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavigationBarMobile from './NavigationBarMobile'
import ThemeToggle from '@/components/ThemeToggle'

export default function NavigationBar() {
  return (
    <header className="nav-bar">
      <nav className="nav-inner">
        {/* Brand */}
        <Link href="/" className="brand">
          <Image
            src="/assets/logo.png"
            alt="Rohit Bhatt"
            width={36}
            height={36}
            style={{ borderRadius: '50%', display: 'block', flexShrink: 0 }}
          />
          <span>rohit.bhatt</span>
        </Link>

        {/* Desktop pill nav */}
        <div className="nav-desktop-group">
          <div className="nav-pill-links">
            <Link href="/#work"    className="nav-pill-link">Work</Link>
            <Link href="/#skills"  className="nav-pill-link">Skills</Link>
            <Link href="/#writing" className="nav-pill-link">Writing</Link>
            <Link href="/#about"   className="nav-pill-link">About</Link>
            <Link href="/blogs"    className="nav-pill-link blogs-pill">/blogs ↗</Link>
          </div>
          <ThemeToggle />
          <a
            href="https://calendly.com/rbhatt199924/30min"
            target="_blank"
            rel="noreferrer"
            className="nav-cta-btn"
          >
            Book a call →
          </a>
        </div>

        {/* Mobile */}
        <div className="nav-mobile-group">
          <ThemeToggle />
          <NavigationBarMobile />
        </div>
      </nav>
    </header>
  )
}
