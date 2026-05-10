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
    const handlers = { mouse: null, resize: null }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    async function init() {
      const THREE = await import('three')
      if (!alive || !canvas) return

      const lowFi = window.innerWidth < 768

      renderer = new THREE.WebGLRenderer({ canvas, antialias: !lowFi, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowFi ? 1.25 : 2))
      renderer.setClearColor(0x000000, 0)
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)

      const scene = new THREE.Scene()
      scene.fog = new THREE.Fog(0x06070a, 4, lowFi ? 30 : 50)

      const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 0.05, 200)
      camera.rotation.order = 'YXZ'
      camera.position.set(0, 0.4, 4)

      // Corridor walls — much lighter than before
      const wallCount = lowFi ? 40 : 70
      const CORRIDOR = 60
      const wallGroup = new THREE.Group()
      const matBright = new THREE.LineBasicMaterial({ color: 0xa3e635, transparent: true, opacity: 0.35 })
      const matDim = new THREE.LineBasicMaterial({ color: 0x65a30d, transparent: true, opacity: 0.18 })
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
      const planeGeo = new THREE.PlaneGeometry(14, CORRIDOR, 14, lowFi ? 30 : 50)
      const wireMat = new THREE.LineBasicMaterial({ color: 0x65a30d, transparent: true, opacity: 0.12 })
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
      heroGlyph.position.set(1.8, 0.4, -1.5)
      scene.add(heroGlyph)

      // Drifting particles
      const N = lowFi ? 80 : 200
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
        color: 0xa3e635, size: 0.045, transparent: true, opacity: 0.55,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
      const particles = new THREE.Points(ptGeo, ptMat)
      scene.add(particles)

      const mouse = { x: 0, y: 0 }
      const mouseTarget = { x: 0, y: 0 }
      let lastTs = performance.now()

      if (!lowFi) {
        handlers.mouse = (e) => {
          const r = canvas.getBoundingClientRect()
          mouseTarget.x = ((e.clientX - r.left) / r.width - 0.5) * 2
          mouseTarget.y = ((e.clientY - r.top) / r.height - 0.5) * 2
        }
        canvas.parentElement.addEventListener('mousemove', handlers.mouse)
      }

      handlers.resize = () => {
        if (!renderer || !canvas) return
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', handlers.resize)

      function tick(ts) {
        if (!alive) return
        animId = requestAnimationFrame(tick)
        const dt = Math.min((ts - lastTs) / 1000, 0.05)
        lastTs = ts

        mouse.x += (mouseTarget.x - mouse.x) * 0.05
        mouse.y += (mouseTarget.y - mouse.y) * 0.05

        // Slow camera drift forward (no scroll dependence — corridor is hero-only)
        camera.position.x = mouse.x * 0.3
        camera.position.y = 0.4 + mouse.y * -0.2

        wallGroup.children.forEach((block) => {
          block.position.y += Math.sin(ts * 0.001 + block.userData.bobPhase) * block.userData.bobAmp * 0.008
        })

        heroGlyph.rotation.y += dt * 0.5
        heroGlyph.rotation.x = Math.sin(ts * 0.0008) * 0.15

        const pos = ptGeo.attributes.position.array
        for (let i = 0; i < N; i++) {
          pos[i * 3 + 1] += speeds[i] * dt * 0.3
          if (pos[i * 3 + 1] > 3) {
            pos[i * 3 + 1] = -3
            pos[i * 3 + 2] = -2 - Math.random() * CORRIDOR
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
      if (handlers.mouse && canvas?.parentElement) canvas.parentElement.removeEventListener('mousemove', handlers.mouse)
      if (handlers.resize) window.removeEventListener('resize', handlers.resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}
