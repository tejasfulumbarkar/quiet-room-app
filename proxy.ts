import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export default async function middleware(request: NextRequest) {
  const supabaseResponse = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // 🔥 FIX: Skip auth refresh on auth routes to prevent "refresh token not found"
  let user = null

  if (!request.nextUrl.pathname.startsWith("/auth")) {
    const { data } = await supabase.auth.getUser()
    user = data.user
  }

  const publicRoutes = ["/", "/auth/login", "/auth/signup", "/auth/callback"]
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  if (!user && !isPublicRoute && !request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/login", request.url))
  }

  if (user && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (user && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}