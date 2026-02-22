"use client"

import { useEffect, useState } from "react"
import { useDataRefresh } from "@/contexts/data-refresh-context"
import Lottie from "lottie-react"
import flameAnimation from "@/public/images/flame_animation.json"

interface StreakCounterProps {
  userId: string
}

export function StreakCounter({ userId }: StreakCounterProps) {
  const [streak, setStreak] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const { refreshTrigger } = useDataRefresh()

  console.log(" StreakCounter rendering with userId:", userId, "streak:", streak, "loading:", loading)

  useEffect(() => {
    if (!userId || userId === "") {
      console.log(" No valid userId provided to StreakCounter")
      setLoading(false)
      return
    }

    async function fetchStreak() {
      try {
        const { createBrowserClient } = await import("@supabase/ssr")
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        )

        const { data, error } = await supabase
          .from("streaks")
          .select("current_streak, last_activity_date")
          .eq("user_id", userId)
          .single()

        if (error) {
          console.error(" Error fetching streak:", error.message)
          setStreak(0)
        } else {
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          if (data?.last_activity_date) {
            const lastDate = new Date(data.last_activity_date)
            lastDate.setHours(0, 0, 0, 0)

            const diffDays = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24))

            if (diffDays > 1) {
              console.log(" Streak reset due to inactivity")
              setStreak(0)
            } else {
              console.log(" Setting streak to:", data?.current_streak)
              setStreak(data?.current_streak || 0)
            }
          } else {
            console.log(" No last_activity_date, using current_streak:", data?.current_streak)
            setStreak(data?.current_streak || 0)
          }
        }
      } catch (error) {
        console.error(" Error loading streak data:", error)
        setStreak(0)
      } finally {
        setLoading(false)
      }
    }

    fetchStreak()
  }, [userId, refreshTrigger])

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-950/30 rounded-full border border-purple-500/30 hover:bg-purple-900/50 hover:border-purple-400 transition-all cursor-pointer group">
      <div className="w-7 h-7 shrink-0 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
        <Lottie animationData={flameAnimation} loop autoplay />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm md:text-base font-bold text-white">{loading ? "—" : streak}</span>
        <span className="text-xs text-white/70">day{streak !== 1 ? "s" : ""}</span>
      </div>
    </div>
  )
}
