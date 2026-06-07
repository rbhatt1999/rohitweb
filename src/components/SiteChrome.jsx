'use client'
import { useEffect } from 'react'

// Pointer-follow ember glow + top scroll-progress bar. Mounted once in the layout.
export default function SiteChrome() {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow')
    const bar = document.querySelector('.progress')
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    let raf = 0
    const onProgress = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        if (bar) bar.style.setProperty('--p', max > 0 ? (h.scrollTop / max).toFixed(4) : 0)
      })
    }
    window.addEventListener('scroll', onProgress, { passive: true })
    window.addEventListener('resize', onProgress)
    onProgress()

    let onMove
    if (fine && glow) {
      onMove = (e) => {
        glow.style.setProperty('--cx', e.clientX + 'px')
        glow.style.setProperty('--cy', e.clientY + 'px')
        glow.classList.add('on')
      }
      window.addEventListener('pointermove', onMove, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', onProgress)
      window.removeEventListener('resize', onProgress)
      if (onMove) window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <>
      <div className="cursor-glow" aria-hidden />
      <div className="progress" aria-hidden />
    </>
  )
}
