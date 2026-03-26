"use client"

import type React from "react"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

interface FocusGoal {
  id: string
  title: string
}

interface CurrentFocusContextType {
  currentGoalId: string | null
  currentGoal: FocusGoal | null
  activeGoals: FocusGoal[]
  isLoading: boolean
  setCurrentGoal: (goalId: string | null) => Promise<void>
  refreshCurrentFocus: () => Promise<void>
}

const CurrentFocusContext = createContext<CurrentFocusContextType>({
  currentGoalId: null,
  currentGoal: null,
  activeGoals: [],
  isLoading: true,
  setCurrentGoal: async () => {},
  refreshCurrentFocus: async () => {},
})

export function CurrentFocusProvider({ children }: { children: React.ReactNode }) {
  const [currentGoalId, setCurrentGoalId] = useState<string | null>(null)
  const [currentGoal, setCurrentGoalData] = useState<FocusGoal | null>(null)
  const [activeGoals, setActiveGoals] = useState<FocusGoal[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const refreshCurrentFocus = useCallback(async () => {
    const supabase = getSupabaseBrowserClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setActiveGoals([])
      setCurrentGoalId(null)
      setCurrentGoalData(null)
      setIsLoading(false)
      return
    }

    const [{ data: goals }, { data: preferences }] = await Promise.all([
      supabase
        .from("goals")
        .select("id, title")
        .eq("user_id", user.id)
        .eq("status", "active")
        .order("created_at", { ascending: false }),
      supabase.from("user_preferences").select("current_goal_id").eq("user_id", user.id).maybeSingle(),
    ])

    const normalizedGoals = goals || []
    setActiveGoals(normalizedGoals)

    const preferredGoalId = preferences?.current_goal_id || null
    let resolvedCurrentGoal: FocusGoal | null = null

    if (preferredGoalId) {
      const activeMatch = normalizedGoals.find((goal) => goal.id === preferredGoalId)
      if (activeMatch) {
        resolvedCurrentGoal = activeMatch
      } else {
        const { data: selectedGoal } = await supabase
          .from("goals")
          .select("id, title")
          .eq("id", preferredGoalId)
          .maybeSingle()
        resolvedCurrentGoal = selectedGoal || null

        // Goal was deleted. Keep preference row but clear pointer.
        if (!selectedGoal) {
          await supabase
            .from("user_preferences")
            .upsert({ user_id: user.id, current_goal_id: null }, { onConflict: "user_id" })
        }
      }
    }

    setCurrentGoalId(resolvedCurrentGoal ? preferredGoalId : null)
    setCurrentGoalData(resolvedCurrentGoal)
    setIsLoading(false)
  }, [])

  const setCurrentGoal = useCallback(async (goalId: string | null) => {
    const supabase = getSupabaseBrowserClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    setCurrentGoalId(goalId)
    setCurrentGoalData(goalId ? activeGoals.find((goal) => goal.id === goalId) || null : null)
    await supabase
      .from("user_preferences")
      .upsert({ user_id: user.id, current_goal_id: goalId }, { onConflict: "user_id" })
  }, [activeGoals])

  useEffect(() => {
    refreshCurrentFocus()
  }, [refreshCurrentFocus])

  return (
    <CurrentFocusContext.Provider
      value={{
        currentGoalId,
        currentGoal,
        activeGoals,
        isLoading,
        setCurrentGoal,
        refreshCurrentFocus,
      }}
    >
      {children}
    </CurrentFocusContext.Provider>
  )
}

export function useCurrentFocus() {
  const context = useContext(CurrentFocusContext)
  if (!context) {
    throw new Error("useCurrentFocus must be used within CurrentFocusProvider")
  }
  return context
}
