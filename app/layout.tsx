import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#6366f1" }
  ],
}

export const metadata: Metadata = {
  title: "Quiet Room - Turn Focus into XP",
  description: "Turn your daily tasks into an epic RPG adventure. Join the Quiet Room to focus, earn XP, and level up your life",
  keywords: ["Quiet Room", "Productivity", "Gamification", "Focus App", "RPG To-Do List"],
  generator: "Quiet Room",
  manifest: "/manifest.json",
  metadataBase: new URL('https://quietroom.in'),
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "QuietRoom",
    startupImage: "/Qlogo.png"
  },
  openGraph: {
    type: 'website',
    siteName: 'QuietRoom Live',
    title: 'Quiet Room - Turn Focus into XP',
    description: 'Turn your daily tasks into an epic RPG adventure',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#6366f1',
    'msapplication-config': '/browserconfig.xml'
  },
  icons: {
    icon: [
      {
        url: "/Qlogo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Qlogo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/Qlogo.png",
        type: "image/png",
      },
    ],
    apple: "/Qlogo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
