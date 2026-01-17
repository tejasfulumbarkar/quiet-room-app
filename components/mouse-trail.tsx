"use client"

import React, { useEffect, useRef } from "react"
import styles from "./mouse-trail.module.css"

export default function MouseTrail() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const MAX = 60

    const handleMove = (e: MouseEvent) => {
      const parent = document.createElement("div")
      parent.className = styles.item

      const inner = document.createElement("div")
      inner.className = styles.dot

      parent.appendChild(inner)
      container.appendChild(parent)

      // position the element centered at the cursor
      parent.style.left = `${e.clientX}px`
      parent.style.top = `${e.clientY}px`

      // remove element after animation completes (safety timer)
      const remove = () => {
        if (parent.parentNode) parent.parentNode.removeChild(parent)
      }

      // Remove when the CSS animation finishes. As fallback remove after 2s.
      parent.addEventListener("animationend", remove, { once: true })
      setTimeout(remove, 2200)

      // Trim excess
      if (container.children.length > MAX) {
        container.removeChild(container.children[0])
      }
    }

    window.addEventListener("mousemove", handleMove)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      // cleanup any leftover children
      if (container) container.innerHTML = ""
    }
  }, [])

  return <div ref={containerRef} className={styles.mouseTrailRoot} />
}
