'use client'
import { useEffect, useRef } from 'react'

export default function CorridorCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animId = null
    let renderer = null
    let alive = true
    const handlers = { scroll: null, mouse: null, resize: null }

    // Skip on reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function init() {
      const THREE = await import('three')
      if (!alive || !canvas) return

      const lowFi = window.innerWidth < 768
      const CORRIDOR = 200

      renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowFi, alpha: false })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowFi ? 1.25 : 2))
      renderer.setClearColor(0x06070a, 1)
      renderer.setSize(window.innerWidth, window.innerHeight, false)

      const scene = new THREE.Scene()
      scene.fog = new THREE.Fog(0x06070a, 4, lowFi ? 40 : 65)

      const camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 0.05, 300)
      camera.rotation.order = 'YXZ'
      camera.position.set(0, 0.4, 4)

      // Corridor walls — wireframe boxes on left/right
      const wallCount = lowFi ? 60 : 120
      const wallGroup = new THREE.Group()
      const matBright = new THREE.LineBasicMaterial({ color: 0xa3e635, transparent: true, opacity: 0.28 })
      const matDim = new THREE.LineBasicMaterial({ color: 0x65a30d, transparent: true, opacity: 0.14 })
      for (let i = 0; i < wallCount; i++) {
        const left = i % 2 === 0
        const z = -2 - (i / wallCount) * CORRIDOR
        const geo = new THREE.BoxGeometry(
          0.15 + Math.random() * 0.4,
          0.25 + Math.random() * 1.3,
          0.3 + Math.random() * 1.6
        )
        const block = new THREE.LineSegments(
          new THREE.EdgesGeometry(geo),
          i % 7 === 0 ? matBright : matDim
        )
        block.position.set(
          (left ? -2.6 : 2.6) + (Math.random() - 0.5) * 1.4,
          (Math.random() - 0.5) * 2.6,
          z + (Math.random() - 0.5) * 1.2
        )
        block.rotation.y = (Math.random() - 0.5) * 0.4
        block.userData = { bobAmp: 0.08 + Math.random() * 0.18, bobPhase: Math.random() * Math.PI * 2 }
        wallGroup.add(block)
      }
      scene.add(wallGroup)

      // Floor + ceiling grid
      const planeGeo = new THREE.PlaneGeometry(14, CORRIDOR, 14, lowFi ? 40 : 80)
      const wireMat = new THREE.LineBasicMaterial({ color: 0x65a30d, transparent: true, opacity: 0.09 })
      const floor = new THREE.LineSegments(new THREE.WireframeGeometry(planeGeo), wireMat)
      floor.rotation.x = -Math.PI / 2
      floor.position.set(0, -2.2, -CORRIDOR / 2 + 2)
      scene.add(floor)
      const ceil = floor.clone()
      ceil.position.y = 2.4
      ceil.rotation.x = Math.PI / 2
      scene.add(ceil)

      // Hero ▸ glyph (extruded)
      const sh = new THREE.Shape()
      sh.moveTo(-0.6, -0.7); sh.lineTo(0.7, 0); sh.lineTo(-0.6, 0.7); sh.lineTo(-0.6, -0.7)
      const extGeo = new THREE.ExtrudeGeometry(sh, { depth: 0.32, bevelEnabled: false })
      extGeo.translate(-0.05, 0, -0.16)
      const heroGlyph = new THREE.LineSegments(
        new THREE.EdgesGeometry(extGeo),
        new THREE.LineBasicMaterial({ color: 0xa3e635 })
      )
      heroGlyph.position.set(1.6, 0.4, -1.5)
      scene.add(heroGlyph)

      // Drifting particles
      const N = lowFi ? 150 : 380
      const positions = new Float32Array(N * 3)
      const speeds = new Float32Array(N)
      for (let i = 0; i < N; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 9
        positions[i * 3 + 1] = (Math.random() - 0.5) * 4.5
        positions[i * 3 + 2] = -Math.random() * CORRIDOR
        speeds[i] = 0.6 + Math.random() * 1.6
      }
      const ptGeo = new THREE.BufferGeometry()
      ptGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      const ptMat = new THREE.PointsMaterial({
        color: 0xa3e635, size: 0.045, transparent: true, opacity: 0.48,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
      const particles = new THREE.Points(ptGeo, ptMat)
      scene.add(particles)

      // State
      let scrollT = 0
      let smoothScrollT = 0
      const mouse = { x: 0, y: 0 }
      const mouseTarget = { x: 0, y: 0 }
      let lastTs = performance.now()

      handlers.scroll = () => {
        const max = document.body.scrollHeight - window.innerHeight
        scrollT = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      }
      window.addEventListener('scroll', handlers.scroll, { passive: true })

      if (!lowFi) {
        handlers.mouse = (e) => {
          mouseTarget.x = (e.clientX / window.innerWidth - 0.5) * 2
          mouseTarget.y = (e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener('mousemove', handlers.mouse)
      }

      handlers.resize = () => {
        if (!renderer) return
        renderer.setSize(window.innerWidth, window.innerHeight, false)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', handlers.resize)

      function tick(ts) {
        if (!alive) return
        animId = requestAnimationFrame(tick)
        const dt = Math.min((ts - lastTs) / 1000, 0.05)
        lastTs = ts

        smoothScrollT += (scrollT - smoothScrollT) * 0.07
        mouse.x += (mouseTarget.x - mouse.x) * 0.05
        mouse.y += (mouseTarget.y - mouse.y) * 0.05

        const camZ = 4 - smoothScrollT * CORRIDOR
        camera.position.set(mouse.x * 0.3, 0.4 + mouse.y * -0.2, camZ)

        // Bob walls
        wallGroup.children.forEach((block) => {
          block.position.y += Math.sin(ts * 0.001 + block.userData.bobPhase) * block.userData.bobAmp * 0.008
        })

        // Rotate hero glyph
        heroGlyph.rotation.y += dt * 0.5
        heroGlyph.rotation.x = Math.sin(ts * 0.0008) * 0.15

        // Drift particles upward, reset when too high
        const pos = ptGeo.attributes.position.array
        for (let i = 0; i < N; i++) {
          pos[i * 3 + 1] += speeds[i] * dt * 0.3
          if (pos[i * 3 + 1] > 3) {
            pos[i * 3 + 1] = -3
            pos[i * 3 + 2] = camZ - Math.random() * 20
          }
        }
        ptGeo.attributes.position.needsUpdate = true

        renderer.render(scene, camera)
      }

      animId = requestAnimationFrame(tick)
    }

    init().catch(console.error)

    return () => {
      alive = false
      if (animId) cancelAnimationFrame(animId)
      if (renderer) renderer.dispose()
      if (handlers.scroll) window.removeEventListener('scroll', handlers.scroll)
      if (handlers.mouse) window.removeEventListener('mousemove', handlers.mouse)
      if (handlers.resize) window.removeEventListener('resize', handlers.resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
