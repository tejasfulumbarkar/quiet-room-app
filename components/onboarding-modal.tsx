"use client"

import { useState, useEffect } from "react"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
  onChoose: (choice: "tasks" | "goals" | "zen") => void
}

export function OnboardingModal({ isOpen, onClose, onChoose }: OnboardingModalProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isOpen) setTimeout(() => setVisible(true), 50)
    else setVisible(false)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 transition-opacity duration-250 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-md bg-[#0b0b14] border-2 border-purple-500/40 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-purple-300 font-mono tracking-widest text-sm mb-2">WELCOME</h3>
        <h2 className="text-white text-2xl font-bold mb-2">What do you want to do today?</h2>
        <p className="text-muted-foreground mb-4">Pick one and we'll take you there.</p>

        <div className="grid gap-3">
          <button
            onClick={() => {
              onChoose("tasks")
              onClose()
            }}
            className="w-full text-left px-4 py-3 rounded-lg border-2 border-purple-500/60 text-white font-semibold bg-transparent hover:bg-purple-500/5 transition-colors"
          >
            Create Task
            <div className="text-xs text-purple-300 mt-1">Add a task and start your first focus session</div>
          </button>

          <button
            onClick={() => {
              onChoose("goals")
              onClose()
            }}
            className="w-full text-left px-4 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-purple-500/5 transition-colors"
          >
            Achieve Goals
            <div className="text-xs text-muted-foreground mt-1">Open goals and create a campaign</div>
          </button>

          <button
            onClick={() => {
              onChoose("zen")
              onClose()
            }}
            className="w-full text-left px-4 py-3 rounded-lg bg-transparent border-2 border-purple-500 text-white font-semibold hover:bg-purple-500/10 transition-colors"
          >
            Focus Better
            <div className="text-xs text-muted-foreground mt-1">Start a Zen session and build XP</div>
          </button>
        </div>

        <div className="mt-4 text-center">
          <button onClick={onClose} className="text-xs text-muted-foreground hover:text-muted-foreground/80">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
