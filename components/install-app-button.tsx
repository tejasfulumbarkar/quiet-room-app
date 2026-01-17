'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, Smartphone, Chrome, Share } from "lucide-react"

interface InstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<InstallPromptEvent | null>(null)
  const [showInstructions, setShowInstructions] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [canInstall, setCanInstall] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Ensure we're on client side
    if (typeof window === 'undefined') return

    // Check if app is already installed
    const isAppInstalled = window.matchMedia('(display-mode: standalone)').matches || 
                          (window.navigator as any).standalone === true

    setIsInstalled(isAppInstalled)

    // Check if iOS/Safari (these need manual instructions)
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)
    setIsIOS(iOS || isSafari)

    // Always show button for mobile if not installed (let user trigger engagement)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if ((iOS || isSafari || isMobile) && !isAppInstalled) {
      setCanInstall(true)
      console.log('Mobile browser detected, showing install button for user engagement')
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('PWA install prompt available - beforeinstallprompt fired')
      setDeferredPrompt(e as InstallPromptEvent)
      setCanInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Force check for install prompt after user engagement
    const triggerEngagement = () => {
      console.log('User engagement detected')
      // Check again after engagement
      setTimeout(() => {
        if (!deferredPrompt && !isAppInstalled) {
          console.log('No install prompt after engagement - checking manually')
        }
      }, 2000)
    }

    // Add engagement listeners
    document.addEventListener('click', triggerEngagement, { once: true })
    document.addEventListener('scroll', triggerEngagement, { once: true })

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log('PWA installed successfully')
      setIsInstalled(true)
      setDeferredPrompt(null)
      setCanInstall(false)
    }

    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Use the deferred prompt to show native install dialog
      console.log('Showing native install prompt')
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      console.log('User choice:', outcome)
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
        setIsInstalled(true)
      }
      setDeferredPrompt(null) // Clear it regardless of outcome
    } else {
      // No native prompt available, show manual instructions
      console.log('No native prompt available, showing manual instructions')
      setShowInstructions(true)
    }
  }

  // Don't show button if app is already installed
  if (isInstalled) return null

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) return null

  // For debugging: always show on mobile to test engagement  
  if (typeof window !== 'undefined') {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (!canInstall && !isMobile) return null
  } else if (!canInstall) {
    return null
  }

  return (
    <>
      <Button 
        onClick={handleInstallClick}
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
        size="lg"
      >
        <Download className="mr-2 h-5 w-5" />
        Install App
      </Button>

      <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Install QuietRoom App
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {isIOS ? (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  To install QuietRoom on your iPhone or iPad:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Share className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Tap the <strong>Share</strong> button in Safari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Select <strong>"Add to Home Screen"</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Tap <strong>"Add"</strong> to install</span>
                  </li>
                </ol>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  To install QuietRoom on your device:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Chrome className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Open the browser menu (⋮)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Download className="h-8 w-4 mt-0.5 flex-shrink-0" />
                    <span>Select <strong>"Install app"</strong> or <strong>"Add to Home Screen"</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>Confirm the installation</span>
                  </li>
                </ol>
              </div>
            )}
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-xs text-muted-foreground">
                💡 <strong>Tip:</strong> Installing the app gives you faster access, offline support, and a native app experience!
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}