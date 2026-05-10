import React from 'react'
import Link from 'next/link'
import NavigationBarMobile from './NavigationBarMobile'

export default function NavigationBar() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 30,
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      background: 'rgba(6,7,10,0.82)',
      borderBottom: '1px solid #1f2128',
    }}>
      <nav className="nav-row">
        {/* Brand */}
        <Link href="/" className="nav-link" style={{ color: '#e4e4e7', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#a3e635', textShadow: '0 0 12px #a3e635' }}>▸</span>
          <span>rohit.bhatt</span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop">
          <Link href="/#work"    className="nav-link">work</Link>
          <Link href="/#writing" className="nav-link">writing</Link>
          <Link href="/#about"   className="nav-link">about</Link>
          <Link href="/#contact" className="nav-link">contact</Link>
          <Link href="/blogs"    className="nav-link nav-blogs">
            /blogs ↗
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="nav-mobile">
          <NavigationBarMobile />
        </div>
      </nav>
    </header>
  )
}
