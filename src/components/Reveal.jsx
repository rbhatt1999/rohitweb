'use client'
import { useEffect, useRef, useState } from 'react'

// Scroll-reveal wrapper: fades/slides children in as they enter the viewport.
// Renders as `as` (default div) and forwards href/style/etc. so it can wrap links.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style = {}, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setShown(true); io.disconnect() }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      data-reveal
      className={`${className}${shown ? ' in' : ''}`}
      style={{ transitionDelay: `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
