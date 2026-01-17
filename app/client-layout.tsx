"use client"

import type React from "react"
import { useEffect } from "react"
import { Analytics } from "@vercel/analytics/next"
import { DataRefreshProvider } from "@/contexts/data-refresh-context"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <html lang="en">
      <body
        className={`font-sans antialiased`}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      >
        <div className="fixed inset-0 bg-background -z-10" />
        <DataRefreshProvider>{children}</DataRefreshProvider>
        <Analytics />
      </body>
    </html>
  )
}
