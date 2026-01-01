import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ClientLayout from "./client-layout"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Quiet Room - Turn Focus into XP",
  description: "Turn your daily tasks into an epic RPG adventure. Join the Quiet Room to focus, earn XP, and level up your life",
  keywords: ["Quiet Room", "Productivity", "Gamification", "Focus App", "RPG To-Do List"],
  generator: "v0.app",
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
