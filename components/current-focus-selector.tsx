"use client"

import { Check, ChevronDown, Plus, Target } from "lucide-react"
import { useState } from "react"
import { useCurrentFocus } from "@/contexts/current-focus-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"

interface CurrentFocusSelectorProps {
  onCreateGoal?: () => void
}

export function CurrentFocusDesktopSelector({ onCreateGoal }: CurrentFocusSelectorProps) {
  const { activeGoals, currentGoalId, currentGoal, setCurrentGoal, isLoading } = useCurrentFocus()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="hidden md:flex items-center gap-2 rounded-lg border border-border/50 bg-black/60 px-3 py-1.5 text-sm text-slate-200 hover:border-primary/40 hover:bg-primary/10 hover:text-white transition-colors"
          aria-label="Current focus goal"
        >
          <Target className="h-4 w-4 text-primary" />
          <span className="max-w-[220px] truncate">
            {currentGoal ? `Current Focus: ${currentGoal.title}` : "Set Focus Goal"}
          </span>
          <ChevronDown className="h-4 w-4 opacity-70" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[280px] border-border bg-[#09090d] text-slate-100" align="start">
        <DropdownMenuItem
          onClick={() => setCurrentGoal(null)}
          className="flex items-center justify-between focus:bg-white/5 focus:text-white"
        >
          <span>No Active Goal</span>
          {!currentGoalId && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {isLoading && <DropdownMenuItem disabled>Loading goals...</DropdownMenuItem>}
        {!isLoading &&
          activeGoals.map((goal) => (
            <DropdownMenuItem
              key={goal.id}
              onClick={() => setCurrentGoal(goal.id)}
              className="flex items-center justify-between gap-2 focus:bg-white/5 focus:text-white"
            >
              <span className="truncate">{goal.title}</span>
              {currentGoalId === goal.id && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          ))}
        {!isLoading && activeGoals.length === 0 && <DropdownMenuItem disabled>No active goals yet</DropdownMenuItem>}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onCreateGoal?.()}
          className="flex items-center gap-2 text-primary focus:bg-white/5 focus:text-primary"
        >
          <Plus className="h-4 w-4" />
          <span>Create New Goal</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function CurrentFocusMobileStrip({ onCreateGoal }: CurrentFocusSelectorProps) {
  const { activeGoals, currentGoalId, currentGoal, setCurrentGoal, isLoading } = useCurrentFocus()
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden border-b border-border/60 bg-[#09090d] px-4 py-2">
      <button
        onClick={() => setOpen(true)}
        className="w-full flex items-center justify-between gap-2 rounded-lg border border-border/50 bg-black/60 px-3 py-2 text-sm text-slate-200 hover:border-primary/40 hover:bg-primary/10 transition-colors"
        aria-label="Open focus goal selector"
      >
        <span className="truncate text-left">
          {currentGoal ? `Focus: ${currentGoal.title}` : "Focus: Set Focus Goal"}
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="rounded-t-2xl pb-6 bg-[#09090d] border-border text-slate-100">
          <SheetHeader className="pb-2">
            <SheetTitle className="text-left">Current Focus</SheetTitle>
          </SheetHeader>
          <div className="px-4 space-y-2">
            <button
              onClick={async () => {
                await setCurrentGoal(null)
                setOpen(false)
              }}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-3 text-left border transition-colors ${
                !currentGoalId
                  ? "border-primary/50 bg-primary/15 text-primary"
                  : "border-border/50 bg-black/50 hover:border-primary/30"
              }`}
            >
              <span>No Active Goal</span>
              {!currentGoalId && <Check className="h-4 w-4" />}
            </button>

            {isLoading && <p className="text-sm text-muted-foreground px-1">Loading goals...</p>}

            {!isLoading &&
              activeGoals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={async () => {
                    await setCurrentGoal(goal.id)
                    setOpen(false)
                  }}
                  className={`w-full flex items-center justify-between rounded-lg px-3 py-3 text-left border transition-colors ${
                    currentGoalId === goal.id
                      ? "border-primary/50 bg-primary/15 text-primary"
                      : "border-border/50 bg-black/50 hover:border-primary/30"
                  }`}
                >
                  <span className="truncate">{goal.title}</span>
                  {currentGoalId === goal.id && <Check className="h-4 w-4" />}
                </button>
              ))}

            {!isLoading && activeGoals.length === 0 && (
              <p className="text-sm text-muted-foreground px-1">No active goals yet</p>
            )}

            <button
              onClick={() => {
                setOpen(false)
                onCreateGoal?.()
              }}
              className="w-full flex items-center gap-2 rounded-lg px-3 py-3 text-left border border-border/50 bg-black/50 text-primary hover:bg-primary/10 hover:border-primary/40 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Create New Goal</span>
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
