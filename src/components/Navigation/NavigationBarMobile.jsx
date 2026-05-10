'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationBarMobile() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '2px',
            background: open ? '#a3e635' : '#e4e4e7',
            borderRadius: '2px', transition: 'background 0.2s',
          }} />
        ))}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              zIndex: 40,
              background: 'rgba(6,7,10,0.97)',
              backdropFilter: 'blur(16px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '32px',
              fontFamily: 'var(--font-jetbrains), ui-monospace, monospace',
              fontSize: '22px',
            }}
          >
            <button
              onClick={close}
              style={{
                position: 'absolute', top: '20px', right: '24px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#71717a', fontSize: '20px', fontFamily: 'inherit',
              }}
            >
              [ esc ]
            </button>

            {[
              { label: '// work', href: '/#work' },
              { label: '// writing', href: '/#writing' },
              { label: '// about', href: '/#about' },
              { label: '// contact', href: '/#contact' },
              { label: '/blogs ↗', href: '/blogs' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={close}
                style={{ color: '#e4e4e7', textDecoration: 'none' }}
              >
                <span style={{ color: '#a3e635' }}>▸ </span>{label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
