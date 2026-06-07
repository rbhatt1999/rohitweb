'use client'
import { useEffect } from 'react'

// Foreground polish for the home page: magnetic buttons, hover text-scramble on
// project titles, and the hero headline line-mask entrance. Renders nothing.
export default function HomeFX() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const cleanups = []

    // Hero headline entrance
    const h1 = document.querySelector('.hero-h1')
    if (h1) {
      if (reduce) h1.classList.add('in')
      else {
        const r = requestAnimationFrame(() => requestAnimationFrame(() => h1.classList.add('in')))
        cleanups.push(() => cancelAnimationFrame(r))
      }
    }

    if (!reduce && fine) {
      // Magnetic pull on CTAs
      document.querySelectorAll('[data-magnetic]').forEach((el) => {
        const enter = () => { el.style.transition = 'transform 0.12s cubic-bezier(0.22,1,0.36,1)' }
        const move = (e) => {
          const r = el.getBoundingClientRect()
          const dx = (e.clientX - (r.left + r.width / 2)) * 0.28
          const dy = (e.clientY - (r.top + r.height / 2)) * 0.4
          el.style.transform = `translate(${dx}px, ${dy}px)`
        }
        const leave = () => { el.style.transition = 'transform 0.4s cubic-bezier(0.34,1.4,0.5,1)'; el.style.transform = '' }
        el.addEventListener('pointerenter', enter)
        el.addEventListener('pointermove', move)
        el.addEventListener('pointerleave', leave)
        cleanups.push(() => {
          el.removeEventListener('pointerenter', enter)
          el.removeEventListener('pointermove', move)
          el.removeEventListener('pointerleave', leave)
        })
      })

      // Hover scramble on case titles
      const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&_/\\'
      document.querySelectorAll('[data-scramble]').forEach((el) => {
        const node = el.firstChild
        if (!node || node.nodeType !== 3) return
        const target = node.textContent
        let timer = null
        const run = () => {
          let frame = 0
          clearInterval(timer)
          timer = setInterval(() => {
            node.textContent = target.split('').map((ch, i) => {
              if (ch === ' ') return ' '
              return i < frame / 2 ? ch : glyphs[Math.floor(Math.random() * glyphs.length)]
            }).join('')
            frame++
            if (frame / 2 >= target.length) { clearInterval(timer); node.textContent = target }
          }, 28)
        }
        el.addEventListener('pointerenter', run)
        cleanups.push(() => { el.removeEventListener('pointerenter', run); clearInterval(timer); node.textContent = target })
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return null
}
