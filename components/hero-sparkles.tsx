"use client"

import { useEffect, useRef, useState } from "react"

type Sparkle = { id: number; x: number; y: number; size: number }

export default function HeroSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const idRef = useRef(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  function spawnSparkleAtPage(x: number, y: number) {
    const id = ++idRef.current
    const size = Math.round(Math.random() * 14 + 6)
    setSparkles((s) => [...s, { id, x, y, size }])
    window.setTimeout(() => setSparkles((s) => s.filter((p) => p.id !== id)), 900)
  }

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      // only spawn when cursor is inside the hero container
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) return

      const count = Math.random() > 0.85 ? 2 : 1
      for (let i = 0; i < count; i++) {
        const offsetX = (Math.random() - 0.5) * 18
        const offsetY = (Math.random() - 0.5) * 18
        spawnSparkleAtPage(e.clientX + offsetX, e.clientY + offsetY)
      }
    }

    const handleTouch = (ev: TouchEvent) => {
      const el = containerRef.current
      if (!el) return
      const t = ev.touches[0]
      if (!t) return
      const rect = el.getBoundingClientRect()
      if (t.clientX < rect.left || t.clientX > rect.right || t.clientY < rect.top || t.clientY > rect.bottom) return
      spawnSparkleAtPage(t.clientX, t.clientY)
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("touchmove", handleTouch)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("touchmove", handleTouch)
    }
  }, [])

  return (
    <div ref={containerRef} className="hero-sparkles-container fixed inset-0 pointer-events-none z-50">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{ left: s.x + "px", top: s.y + "px", width: s.size + "px", height: s.size + "px" }}
        />
      ))}
    </div>
  )
}
