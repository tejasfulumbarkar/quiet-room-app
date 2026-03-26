import { createServerClient } from "@supabase/ssr"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  const error = requestUrl.searchParams.get("error")
  const nextPath = requestUrl.searchParams.get("next") || "/dashboard"
  const state = requestUrl.searchParams.get("state")
  const origin = requestUrl.origin

  if (error) {
    return NextResponse.redirect(`${origin}/auth/login?error=${encodeURIComponent(error)}`)
  }

  const safeNextPath = nextPath.startsWith("/") ? nextPath : "/dashboard"
  const response = NextResponse.redirect(`${origin}${safeNextPath}`)

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
            response.cookies.set(name, value, options)
          })
        },
      },
    },
  )

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/login?error=missing_code`)
  }

  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code)
  if (exchangeError) {
    // Fallback: let browser Supabase client exchange code (detectSessionInUrl=true)
    const fallback = new URL(`${origin}/auth/login`)
    fallback.searchParams.set("code", code)
    if (state) fallback.searchParams.set("state", state)
    fallback.searchParams.set("next", safeNextPath)
    fallback.searchParams.set("oauth_fallback", "1")
    return NextResponse.redirect(fallback.toString())
  }

  return response
}
