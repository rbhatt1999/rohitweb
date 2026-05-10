'use client'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const MENU_ITEMS = [
  { label: '// work',    href: '/#work' },
  { label: '// writing', href: '/#writing' },
  { label: '// about',   href: '/#about' },
  { label: '// contact', href: '/#contact' },
  { label: '/blogs ↗',   href: '/blogs' },
]

export default function NavigationBarMobile() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Lock body scroll while overlay is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="hamburger-btn"
      >
        {[0, 1, 2].map(i => (
          <span key={i} className="hamburger-bar" style={{ background: open ? '#a3e635' : '#e4e4e7' }} />
        ))}
      </button>

      {/* Overlay rendered in a portal so it can't be affected by header's stacking context */}
      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mobile-menu-overlay"
            >
              <button onClick={close} className="mobile-menu-close" aria-label="Close menu">
                [ esc ]
              </button>

              <nav className="mobile-menu-list">
                {MENU_ITEMS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={close}
                    className="mobile-menu-link"
                  >
                    <span style={{ color: '#a3e635' }}>▸ </span>{label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
