"use client"

import { useEffect, useState } from "react"

interface HighlightProps {
  label: string
  onDismiss?: () => void
}

export function OnboardingHighlight({ label, onDismiss }: HighlightProps) {
  const [rect, setRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    const find = () => {
      const buttons = Array.from(document.querySelectorAll("button"))
      const el = buttons.find((b) => (b.textContent || "").trim().toLowerCase().includes(label.toLowerCase())) as HTMLElement | undefined
      if (el) setRect(el.getBoundingClientRect())
    }

    // try immediately and again after small delay (content may mount)
    find()
    const t = setTimeout(find, 300)
    const t2 = setTimeout(find, 900)

    const onResize = () => find()
    window.addEventListener("resize", onResize)

    return () => {
      clearTimeout(t)
      clearTimeout(t2)
      window.removeEventListener("resize", onResize)
      onDismiss?.()
    }
  }, [label, onDismiss])

  if (!rect) return null

  const left = rect.left + rect.width / 2
  const top = rect.top - 12

  return (
    <div className="pointer-events-none fixed z-[99998]" style={{ left: 0, top: 0, width: "100%", height: "100%" }}>
      <div
        style={{ position: "absolute", left: left - 16, top: top - 28 }}
        className="flex flex-col items-center gap-1 animate-bounce"
      >
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-purple-500/90" />
        <div className="text-xs text-purple-300 font-semibold bg-black/60 px-2 py-1 rounded">{label}</div>
      </div>
      <div
        style={{ position: "absolute", left: rect.left - 8, top: rect.top - 8, width: rect.width + 16, height: rect.height + 16 }}
      >
        <div className="absolute inset-0 rounded-lg ring-4 ring-purple-500/30" />
      </div>
    </div>
  )
}
