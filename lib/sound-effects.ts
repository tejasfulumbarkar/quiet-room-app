const soundMap: Record<string, string> = {
  zentimeup: "/sounds/zentimeup.mp3",
  xpgain: "/sounds/xpgain.mp3",
  levelup: "/sounds/levelup.mp3",
  entrytrim: "/sounds/entrytrim.mp3",
}

export const resolveSound = (idOrUrl: string) => {
  if (!idOrUrl) return idOrUrl

  // Already a path or URL
  if (idOrUrl.startsWith("/") || idOrUrl.startsWith("http://") || idOrUrl.startsWith("https://")) {
    return idOrUrl
  }

  // Known mapping
  if (soundMap[idOrUrl]) return soundMap[idOrUrl]

  // Fallback to /sounds/{name}.mp3
  return `/sounds/${idOrUrl}.mp3`
}

export const playSound = (soundFileOrName: string, volume = 0.5) => {
  try {
    const resolved = resolveSound(soundFileOrName)
    const audio = new Audio(resolved)
    audio.volume = volume
    audio.play().catch((error) => {
      console.log("[v0] Sound play failed (user interaction required):", error)
    })
  } catch (error) {
    console.error("[v0] Error playing sound:", error)
  }
}

export const playSoundEffect = (soundName: string, volume = 0.5) => {
  const soundFile = resolveSound(soundName)
  if (soundFile) {
    playSound(soundFile, volume)
  }
}

export const SoundEffects = {
  timerComplete: () => playSound("zentimeup", 0.6),
  xpGain: () => playSound("xpgain", 0.5),
  levelUp: () => playSound("levelup", 0.7),
  entry: () => playSound("entrytrim", 0.6),
}
