"use client"

import React, { useEffect, useRef } from "react"

export default function LandingHeroBg() {
  // generate a handful of particle styles on each render for organic feel
  const particles = Array.from({ length: 18 }).map(() => ({
    size: Math.round(Math.random() * 6) + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 6,
    opacity: 0.3 + Math.random() * 0.5,
  }))

  const blobA = useRef<HTMLDivElement | null>(null)
  const blobB = useRef<HTMLDivElement | null>(null)
  const blobC = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null
          const x = mouseRef.current.x
          const y = mouseRef.current.y
          const cx = window.innerWidth / 2
          const cy = window.innerHeight / 2
          const nx = (x - cx) / cx // -1 .. 1
          const ny = (y - cy) / cy // -1 .. 1

          if (blobA.current) blobA.current.style.transform = `translate(${nx * 24}px, ${ny * 18}px) scale(1.02)`
          if (blobB.current) blobB.current.style.transform = `translate(${nx * -18}px, ${ny * 14}px) scale(1.01)`
          if (blobC.current) blobC.current.style.transform = `translate(${nx * 10}px, ${ny * -12}px) scale(1.01)`
        })
      }
    }

    const onLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = null
      if (blobA.current) blobA.current.style.transform = "translate(0px,0px) scale(1)"
      if (blobB.current) blobB.current.style.transform = "translate(0px,0px) scale(1)"
      if (blobC.current) blobC.current.style.transform = "translate(0px,0px) scale(1)"
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseleave", onLeave)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* large soft blobs */}
      <div
        ref={blobA}
        className="absolute -top-20 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-purple-600 to-pink-400 opacity-30 filter blur-3xl animate-blob"
        style={{ animationDuration: "10s", willChange: "transform" }}
      />

      <div
        ref={blobB}
        className="absolute -bottom-28 -right-40 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-400 opacity-25 filter blur-2xl animate-blob"
        style={{ animationDuration: "12s", animationDelay: "2s", willChange: "transform" }}
      />

      <div
        ref={blobC}
        className="absolute top-1/4 left-1/2 w-[260px] h-[260px] rounded-full bg-gradient-to-br from-pink-600 to-yellow-400 opacity-20 filter blur-2xl animate-blob"
        style={{ animationDuration: "14s", animationDelay: "4s", willChange: "transform" }}
      />

      {/* subtle moving shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20 animate-shimmer mix-blend-overlay" />

      {/* small floating particles */}
      <div className="absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="block absolute rounded-full bg-white/70"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              filter: "blur(0.5px)",
              animation: `float ${p.duration}s ${p.delay}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
