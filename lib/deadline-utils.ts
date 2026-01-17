export interface DeadlineInfo {
  text: string
  emoji: string
  colorClass: string
  urgencyLevel: "chill" | "warning" | "panic"
  shouldPulse: boolean
}

export function getDeadlineInfo(targetDate: string | undefined, timeline: string): DeadlineInfo | null {
  if (!targetDate) return null

  const now = new Date()
  const target = new Date(targetDate)
  const diffMs = target.getTime() - now.getTime()
  const diffHours = diffMs / (1000 * 60 * 60)
  const diffDays = Math.ceil(diffHours / 24)

  // If past deadline
  if (diffHours <= 0) {
    return {
      text: "Overdue",
      emoji: "🔴",
      colorClass: "text-red-500",
      urgencyLevel: "panic",
      shouldPulse: true,
    }
  }

  // < 24 hours (Panic Mode)
  if (diffHours < 24) {
    const hoursLeft = Math.max(1, Math.floor(diffHours))
    return {
      text: `${hoursLeft}h Left`,
      emoji: "🔴",
      colorClass: "text-red-500",
      urgencyLevel: "panic",
      shouldPulse: true,
    }
  }

  // < 3 days (Warning)
  if (diffDays <= 3) {
    return {
      text: `${diffDays} Days Left`,
      emoji: "🟡",
      colorClass: "text-yellow-500",
      urgencyLevel: "warning",
      shouldPulse: false,
    }
  }

  // Weekly goals
  if (timeline === "weekly") {
    return {
      text: `${diffDays} Days Left`,
      emoji: "⚠️",
      colorClass: "text-gray-400",
      urgencyLevel: "chill",
      shouldPulse: false,
    }
  }

  // Monthly goals
  if (timeline === "monthly") {
    const weeks = Math.floor(diffDays / 7)
    if (weeks >= 2) {
      return {
        text: `${weeks} Weeks Left`,
        emoji: "📅",
        colorClass: "text-gray-400",
        urgencyLevel: "chill",
        shouldPulse: false,
      }
    } else {
      return {
        text: `${diffDays} Days Left`,
        emoji: "📅",
        colorClass: "text-gray-400",
        urgencyLevel: "chill",
        shouldPulse: false,
      }
    }
  }

  // Yearly goals
  if (timeline === "yearly") {
    const year = target.getFullYear()
    return {
      text: `${year} Season`,
      emoji: "🏆",
      colorClass: "text-gray-400",
      urgencyLevel: "chill",
      shouldPulse: false,
    }
  }

  // Default fallback
  return {
    text: `${diffDays} Days Left`,
    emoji: "🟢",
    colorClass: "text-gray-400",
    urgencyLevel: "chill",
    shouldPulse: false,
  }
}
