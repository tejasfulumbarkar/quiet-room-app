🧘 Quiet Room

Quiet Room is a focus-first productivity web app designed to help users build discipline, consistency, and mental clarity through Zen sessions, goals, and gamified progress.

Unlike typical productivity tools, Quiet Room is built around commitment over comfort.

✨ Features

🧘 Zen Mode — Focus sessions (15 / 25 / 45 minutes) with no pause. Only commit or end.

📊 Stats Dashboard — XP, levels, streaks, focus time, goals, rewards.

🎯 Goal Tracking — Turn intentions into measurable progress.

🏆 Gamification — XP, levels, rewards, and system-based motivation.

🤖 Q Assistant — Your productivity companion inside Quiet Room.

🔐 Google Sign In (Supabase Auth)

📱 PWA Support — Installable as an app on mobile and desktop.

🧠 Philosophy

Quiet Room is not a Pomodoro clone.

It is built on one simple idea:

Focus is a decision, not a setting.

Zen Mode has no pause because discipline should not.

🚀 Live App

👉 https://quietroom.in

Open in Chrome → Install App for the PWA experience.

🛠 Tech Stack

Frontend: Next.js / React

Backend: Supabase

Auth: Supabase OAuth (Google)

Database: PostgreSQL (Supabase)

Storage: Supabase Storage

PWA: Web App Manifest + Service Worker

Deployment: Vercel

📱 PWA Experience

Quiet Room works as a Progressive Web App:

Fullscreen app experience

Home screen installation

Fast loading

App-like behavior without Play Store dependency

🔐 Authentication

Quiet Room uses Supabase Auth with Google OAuth for secure, fast login.

Sessions are persisted across browser and PWA app mode.

📂 Project Structure
/app        → Next.js App Router pages
/components → UI components
/lib        → Supabase client & helpers
/public     → Icons, manifest, assets

⚙️ Environment Variables
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=


(Other secrets are kept server-side only.)

🧪 Local Setup
git clone https://github.com/yourusername/quiet-room.git
cd quiet-room
npm install
npm run dev


Open: http://localhost:3000

🧩 Roadmap

Weekly focus reports

Streak recovery system

Custom Zen themes

Community challenges

AI-powered focus insights

🤍 Built With Purpose

Quiet Room is built as a learning project, a product experiment, and a personal discipline system.

It represents:

Real debugging

Real product decisions

Real user experience thinking

🙌 Feedback

If you have suggestions, ideas, or issues — feel free to open an issue or reach out.

This project is actively evolving.
