"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { useDataRefresh } from "@/contexts/data-refresh-context"

type WeeklyStat = {
  day: string
  xp: number
}

export function WeeklyXPChart() {
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStat[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const [animatedTotal, setAnimatedTotal] = useState(0)
  const { refreshTrigger } = useDataRefresh()

  useEffect(() => {
    fetchWeeklyXP()
    setTimeout(() => setMounted(true), 100)
  }, [refreshTrigger])

  const fetchWeeklyXP = async () => {
    const supabase = getSupabaseBrowserClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setLoading(false)
      return
    }

    const today = new Date()
    const sevenDaysAgo = new Date(today)
    sevenDaysAgo.setDate(today.getDate() - 6)

    const { data: activityLogRes } = await supabase
      .from("activity_log")
      .select("created_at, xp_earned")
      .eq("user_id", user.id)
      .gte("created_at", sevenDaysAgo.toISOString())
      .order("created_at", { ascending: true })

    const generateWeeklyChart = () => {
      const days = ["S", "M", "T", "W", "T", "F", "S"]
      const chartData = []

      for (let i = 6; i >= 0; i--) {
        const date = new Date()
        date.setDate(date.getDate() - i)
        const dateStr = date.toISOString().split("T")[0]

        const dayLogs = activityLogRes?.filter(
          (log) => new Date(log.created_at).toISOString().split("T")[0] === dateStr,
        )
        const totalXp = dayLogs?.reduce((sum, log) => sum + (log.xp_earned || 0), 0) || 0

        chartData.push({
          day: days[date.getDay()],
          xp: totalXp,
        })
      }

      return chartData
    }

    const weeklyChartData = generateWeeklyChart()
    setWeeklyStats(weeklyChartData)
    setLoading(false)
  }

  const totalWeeklyXp = weeklyStats.reduce((sum, day) => sum + day.xp, 0)

  useEffect(() => {
    let frame = 0
    const duration = 900
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setAnimatedTotal(Math.round(totalWeeklyXp * progress))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    setAnimatedTotal(0)
    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [totalWeeklyXp])

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-foreground mb-6">Weekly XP Activity</h3>
        <div className="h-[220px] flex items-center justify-center">
          <p className="text-muted-foreground text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  const chartHeight = 180
  const maxXp = Math.max(...weeklyStats.map((d) => d.xp), 100) // Minimum scale of 100

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="mb-6">
        <h3 className="font-semibold text-foreground">Weekly XP Activity</h3>
        <p className="text-xs text-muted-foreground mt-1">Keep the water rising. Consistency compounds.</p>
        <p className="text-sm text-primary mt-2 font-semibold">Total this week: {animatedTotal} XP</p>
      </div>
      <div className="relative h-[220px] w-full">
        <svg width="100%" height="100%" viewBox="0 0 700 220" className="overflow-visible">
          <defs>
            <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="waterlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="waterRiseGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
              <stop offset="65%" stopColor="#22d3ee" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.4" />
            </linearGradient>
            <pattern id="wavePattern" x="0" y="0" width="48" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,12 C6,4 18,4 24,12 C30,20 42,20 48,12 L48,20 L0,20 Z" fill="#67e8f9" opacity="0.22" />
              <animateTransform
                attributeName="transform"
                type="translate"
                from="0 0"
                to="48 0"
                dur="1.9s"
                repeatCount="indefinite"
              />
            </pattern>
          </defs>

          {weeklyStats.map((item, index) => {
            const rawHeight = maxXp > 0 ? (item.xp / maxXp) * chartHeight : 0
            const barHeight = item.xp > 0 ? Math.max(rawHeight, 6) : 0
            const x = 50 + index * 95 // Position each bar
            const y = chartHeight - barHeight + 20 // Start from bottom
            const isHovered = hoveredIndex === index
            const renderedHeight = mounted ? barHeight : 0
            const renderedY = mounted ? y : chartHeight + 20

            return (
              <g key={index}>
                <rect x={x} y={20} width="50" height={chartHeight} rx="6" ry="6" fill="#1e293b" opacity="0.25" />

                <rect
                  x={x}
                  y={renderedY}
                  width="50"
                  height={renderedHeight}
                  rx="6"
                  ry="6"
                  fill="url(#barGradient)"
                  opacity={isHovered ? 0.9 : 1}
                  style={{
                    filter: isHovered ? "brightness(1.2)" : "none",
                    transition: "all 0.3s ease, height 1s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />

                {renderedHeight > 0 && (
                  <>
                    <defs>
                      <clipPath id={`barClip-${index}`}>
                        <rect x={x} y={renderedY} width="50" height={renderedHeight} rx="6" ry="6" />
                      </clipPath>
                    </defs>
                    <g clipPath={`url(#barClip-${index})`}>
                      <rect x={x} y={renderedY} width="50" height={renderedHeight} fill="url(#wavePattern)" />
                      <rect x={x} y={renderedY} width="50" height={renderedHeight} fill="url(#waterRiseGradient)" opacity="0.6">
                        <animate
                          attributeName="y"
                          values={`${renderedY + renderedHeight};${renderedY - 8};${renderedY + renderedHeight}`}
                          dur={`${3.2 + index * 0.2}s`}
                          repeatCount="indefinite"
                        />
                      </rect>
                    </g>
                    <rect x={x + 2} y={renderedY + 3} width="46" height="4" rx="2" fill="url(#waterlineGradient)" opacity="0.9">
                      <animate
                        attributeName="y"
                        values={`${renderedY + 3};${renderedY + 1};${renderedY + 3}`}
                        dur={`${2.2 + index * 0.15}s`}
                        repeatCount="indefinite"
                      />
                    </rect>
                  </>
                )}

                {item.xp > 0 && (
                  <text x={x + 25} y={Math.max(renderedY - 8, 14)} textAnchor="middle" fill="#67e8f9" fontSize="11" fontWeight="700">
                    {item.xp} XP
                  </text>
                )}

                <text x={x + 25} y={chartHeight + 40} textAnchor="middle" fill="#94a3b8" fontSize="14">
                  {item.day}
                </text>

                {isHovered && (
                  <>
                    <rect
                      x={x - 10}
                      y={renderedY - 44}
                      width="70"
                      height="34"
                      rx="6"
                      fill="#020617"
                      stroke="#7c3aed"
                      strokeWidth="1"
                      opacity="0.95"
                    />
                    <text x={x + 25} y={renderedY - 26} textAnchor="middle" fill="white" fontSize="12" fontWeight="500">
                      XP: {item.xp}
                    </text>
                    <text x={x + 25} y={renderedY - 13} textAnchor="middle" fill="#67e8f9" fontSize="10" fontWeight="600">
                      Keep climbing
                    </text>
                  </>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
