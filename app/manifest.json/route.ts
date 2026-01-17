import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    name: "QuietRoom Live",
    short_name: "QuietRoom",
    description: "A productivity app for goals, zen sessions, and personal growth",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#6366f1",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    categories: ["productivity"],
    lang: "en-US",
    dir: "ltr",
    prefer_related_applications: false
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, max-age=31536000'
    }
  });
}