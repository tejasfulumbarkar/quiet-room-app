'use client'

import { useEffect, useState } from 'react'

export function PWADebugger() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // Only run on client side
    if (!isClient || typeof window === 'undefined') return

    const checkPWAEligibility = async () => {
      console.log('=== PWA Mobile Debug Info ===')
      
      // Check if mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      console.log('Is Mobile:', isMobile)
      console.log('User Agent:', navigator.userAgent)
      
      // Check HTTPS
      console.log('Is HTTPS:', location.protocol === 'https:')
      
      // Check if already installed
      const isInstalled = window.matchMedia('(display-mode: standalone)').matches
      console.log('Already installed:', isInstalled)
      
      // Check service worker
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration()
          console.log('Service Worker registered:', !!registration)
          if (registration) {
            console.log('SW state:', registration.active?.state)
          }
        } catch (e) {
          console.log('SW check error:', e)
        }
      } else {
        console.log('Service Worker not supported')
      }
      
      // Check manifest
      try {
        const response = await fetch('/manifest.json')
        const manifest = await response.json()
        console.log('Manifest loaded:', !!manifest)
        console.log('Manifest icons:', manifest.icons?.length || 0)
      } catch (e) {
        console.log('Manifest error:', e)
      }
      
      console.log('=== End PWA Debug ===')
    }

    // Check immediately and after a delay
    checkPWAEligibility()
    
    // Also check after user interaction
    const handleUserInteraction = () => {
      console.log('User interaction detected - checking PWA eligibility...')
      setTimeout(checkPWAEligibility, 1000)
    }
    
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('scroll', handleUserInteraction, { once: true })
    
    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('scroll', handleUserInteraction)
    }
  }, [])

  return null // This component doesn't render anything
}