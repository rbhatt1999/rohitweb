'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import NavigationBarMobile from './NavigationBarMobile'
import ThemeToggle from '@/components/ThemeToggle'

const SECTIONS = ['work', 'about', 'writing', 'contact']

export default function NavigationBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className="nav" data-scrolled={scrolled}>
      <nav className="wrap nav-in">
        <Link href="/" className="brand">
          <span className="mk">▸</span>rohit<span className="dim">.bhatt</span>
        </Link>

        {/* Desktop */}
        <div className="nav-r nav-desktop">
          {SECTIONS.map((k) => (
            <a key={k} href={`/#${k}`} className="nlink">{k}</a>
          ))}
          <Link href="/blogs" className="nav-blogs">/blogs ↗</Link>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="nav-mobile">
          <ThemeToggle />
          <NavigationBarMobile />
        </div>
      </nav>
    </header>
  )
}
