import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  let response = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
  get(name: string) {
    return request.cookies.get(name)?.value
  },
  set(name: string, value: string, options) {
    response.cookies.set(name, value, options)
  },
  remove(name: string, options) {
    response.cookies.set(name, "", options)
  },
},
    }
  )

  let user = null

  // ✅ FIX HERE
  if (!request.nextUrl.pathname.startsWith("/auth")) {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    user = session?.user ?? null
  }

  const publicRoutes = [
    "/",
    "/why-quiet-room-exists",
    "/privacy",
    "/terms-of-service",
    "/auth/login",
    "/auth/signup",
    "/auth/callback",
  ]

  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  if (user && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (user && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return response
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/tasks/:path*",
    "/goals/:path*",
    "/leaderboard/:path*",
    "/zen-mode/:path*",
  ],
}