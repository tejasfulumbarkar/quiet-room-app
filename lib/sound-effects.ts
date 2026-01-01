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
    // Return the play() promise so callers can await it if needed.
    return audio.play().catch((error) => {
      console.log("[v0] Sound play failed (user interaction required):", error)
      throw error
    })
  } catch (error) {
    console.error("[v0] Error playing sound:", error)
  }
}

export const playSoundEffect = (soundName: string, volume = 0.5) => {
  const soundFile = resolveSound(soundName)
  if (soundFile) {
    return playSound(soundFile, volume)
  }
}

export const SoundEffects = {
  timerComplete: () => playSound("zentimeup", 0.6),
  xpGain: () => playSound("xpgain", 0.5),
  levelUp: () => playSound("levelup", 0.7),
  entry: () => playSound("entrytrim", 0.6),
}

let _audioPrimed = false

export const primeAudio = (soundFileOrName = "entrytrim") => {
  if (_audioPrimed) return

  try {
    const resolved = resolveSound(soundFileOrName)
    const audio = new Audio(resolved)
    // play muted briefly to get browser gesture permission
    audio.volume = 0
    const p = audio.play()
    if (p && typeof (p as Promise<any>).then === "function") {
      ;(p as Promise<any>)
        .then(() => {
          try {
            audio.pause()
            audio.currentTime = 0
          } catch (e) {
            // ignore
          }
          _audioPrimed = true
        })
        .catch(() => {
          // ignore playback errors
        })
    } else {
      try {
        audio.pause()
        audio.currentTime = 0
      } catch (e) {
        // ignore
      }
      _audioPrimed = true
    }
  } catch (e) {
    // ignore
  }
}
