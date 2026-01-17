# Developer Guide — QuietRoomLive

Purpose: This guide helps a new developer understand, run, and safely modify this repository. It summarizes the project structure, explains important files and patterns, and provides practical, step-by-step instructions for common tasks. If you need literal line-by-line annotations for any specific file, request it and I will generate an annotated copy.

--

## Quick Start (what to do first)

- Install dependencies (this repo uses pnpm):

  ```powershell
  pnpm install
  pnpm dev
  ```

- The app uses Next.js (app router) and TypeScript. Run `pnpm dev` and open http://localhost:3000.

--

## Project Overview

- Top-level purpose: a Next.js application providing QuietRoomLive features (goals, tasks, zen sessions, rewards, leaderboards, etc.). The app is organized around `app/` (Next app router), `components/` (UI pieces), `lib/` (utility libraries), `public/` (static assets), and `styles/` (global CSS).

Core folders:

- `app/` — Next.js app router routes and pages. Each folder under `app/` is a route. Important files include:
  - [app/page.tsx](app/page.tsx) — the main landing page for the app.
  - `[app]/layout.tsx` and `client-layout.tsx` — layout components and providers that wrap pages.
  - `app/api/` — serverless API endpoints.

- `components/` — React components (UI). Each file is a component used through the app. Examples: `app-layout.tsx`, `theme-provider.tsx`, `goals-list.tsx`, `streak-counter.tsx`.

- `lib/` — plain TypeScript utilities and client setup. Examples include `supabase-client.ts` (initializes Supabase connection), `utils.ts` (helpers), `leveling-system.ts` (domain logic), and `sound-effects.ts`.

- `contexts/` — React contexts used by the app, e.g., `data-refresh-context.tsx`.

- `hooks/` — custom hooks, e.g., `use-mobile.ts`, `use-toast.ts`.

- `public/` — images, sounds, and other static assets served at `/`.

- `scripts/` — SQL migration files used to create the database schema. These are not executed by the app but used for DB setup.

- `components/ui/zen/` — small UI primitives specific to zen features.

--

## How this Next.js app is structured (short primer)

- App Router: `app/` folders become routes. `layout.tsx` wraps child routes. Files named `page.tsx` export React server components or client components to render routes.

- Client vs Server components: Files with `'use client'` at top are client components (run in the browser). Others default to server components. Keep heavy browser-only logic and hooks in client components.

- API routes are colocated under `app/api/` — they export functions that run server-side.

--

## Key files explained (high-level, per-file pointers)

- [app/page.tsx](app/page.tsx)
  - Role: landing page. Typically composes higher-level components from `components/` and uses data-fetching where needed.
  - What to check when changing: if you alter layout or imports, make sure `layout.tsx` still wraps pages as expected and that any SSR/server-only code remains outside `'use client'` components.

- [components/app-layout.tsx](components/app-layout.tsx)
  - Role: global app chrome (nav, sidebars, top bars). Changes here affect whole app.
  - When editing: preserve accessible markup, keyboard interactions, and responsive behavior. Update unit or visual tests if present.

- [lib/supabase-client.ts](lib/supabase-client.ts)
  - Role: sets up Supabase SDK with environment variables. If you change auth flows, update this file and ensure secrets remain in environment (never hardcode).

- [lib/utils.ts](lib/utils.ts)
  - Role: small pure functions used across the app. Keep them well-tested and side-effect free.

- `components/*-modal.tsx`, `*-drawer.tsx`
  - Role: dialogs and drawers. These are client components and often rely on context or portals. Keep animation and focus-trap logic intact.

--

## Editing safely: patterns and checklist

Before editing a file, follow this checklist:

1. Locate usages: search the codebase for component or function names to understand where a change will affect UI and logic.
2. Preserve public types/signatures: if you change props or exported functions, update all callers.
3. Test locally: run `pnpm dev` and navigate to relevant pages.
4. Add or update tests where appropriate (if this repo uses tests). If no tests exist, consider adding basic smoke tests for critical components.
5. Commit with small atomic changes and descriptive commit messages.

PR checklist suggestions:

- Describe the intent and the files changed.
- Include screenshots for UI changes.
- List any DB schema changes and migration steps (point to `scripts/*.sql`).
- Note environment variable additions or changes.

--

## Common pitfalls and how to debug them

- Type errors when importing: ensure `tsconfig.json` paths are correct and that exported types are updated.
- Client/Server mismatch: If you use a React hook in a server component, move that logic into a `'use client'` component.
- Missing env vars: check `.env.local` and environment in deployment. `lib/supabase-client.ts` will fail without proper `NEXT_PUBLIC_` keys.

Debugging steps:

1. Check the browser console for runtime errors (client-side). The stack trace usually points to the component/file.
2. Check server logs (Next dev server output) for server-side errors.
3. Use `console.log` or `debugger` in client components; for server components, log to server console.

--

## How to request exhaustive, line-by-line annotations

This guide is a concise but thorough orientation. Generating an annotated version that explains every single line in a file is time-consuming and best done per-file. If you want that, ask for a specific file (for example: "Annotate `app/page.tsx` line-by-line"). I will produce a copy like `app/page.annotated.md` with comments explaining each line and why it exists.

Examples of good requests:

- "Annotate `components/app-layout.tsx` line-by-line."
- "Create an annotated explanation for `lib/supabase-client.ts` and outline env var meanings."

--

## Practical next steps I can do for you now

- Generate a line-by-line annotated file for a single target file (e.g., `app/page.tsx`).
- Create short how-to tasks (e.g., "Add new API endpoint for X", "Add new page under /tasks").

Tell me which specific file you want annotated first, and I will produce a commented, copy-safe version that a new developer can follow.

--

Files referenced in this guide (jump targets):

- [app/page.tsx](app/page.tsx)
- [app/layout.tsx](app/layout.tsx)
- [components/app-layout.tsx](components/app-layout.tsx)
- [lib/supabase-client.ts](lib/supabase-client.ts)
- [lib/utils.ts](lib/utils.ts)

--

If you want, I can now start by producing an annotated, line-by-line explanation of `app/page.tsx` (the file you currently have open). Reply with "Annotate app/page.tsx" or: name another file. 

Thank you — ready when you are.

--

## For beginners: what you should learn (quick roadmap)

If you only know the basics of HTML/CSS/JS, the list below gives a focused, practical path so you can safely make changes in this repository. Spend a little time on each item — you don't need to be an expert, just comfortable.

- **HTML & CSS (refresher)**: semantic tags, forms, flexbox, grid, responsive design. Resources: MDN Web Docs, freeCodeCamp.
- **Modern JavaScript (ES6+)**: `let/const`, arrow functions, modules (`import`/`export`), async/await, Promises, array methods. Resource: JavaScript.info.
- **TypeScript basics**: types, interfaces, `tsconfig`, basic generics. You can work with JS first, but read `types` when you see `.ts`/`.tsx` files. Resource: TypeScript Handbook.
- **React fundamentals**: components, props, state, hooks (`useState`, `useEffect`), component composition. Resource: React docs — Main Concepts.
- **Next.js (App Router)**: routing with `app/`, `layout.tsx`, `page.tsx`, server vs client components, data fetching and API routes. Resource: Next.js docs (App Router section).
- **Node.js & package managers**: basic `node` usage and `pnpm` commands (`pnpm install`, `pnpm dev`, `pnpm build`). Resource: pnpm docs and Node.js getting started.
- **Git basics**: cloning, branching, commits, push, opening PRs. Resource: Git tutorial on Git SCM or GitHub Learning Lab.
- **Supabase / Postgres basics (if working with backend)**: how environment variables connect to the DB, basics of auth and queries. Resource: Supabase docs.
- **Browser devtools**: console, network panel, inspecting elements — essential for debugging.

Spend 1–2 weeks on the above at a steady pace and you'll be comfortable making safe edits in this codebase.

--

## Quick learning resources (links you can bookmark)

- MDN Web Docs — HTML/CSS/JS: https://developer.mozilla.org/
- JavaScript.info — Modern JS tutorial: https://javascript.info/
- TypeScript Handbook: https://www.typescriptlang.org/docs/
- React docs: https://reactjs.org/docs/getting-started.html
- Next.js docs (App Router): https://nextjs.org/docs/app
- pnpm docs: https://pnpm.io/
- Supabase docs: https://supabase.com/docs

--

## Small, safe change example: add a new route `/hello` and explain each line

This example shows a minimal change you can make without touching backend or shared state. It creates a new page at `/hello` that says "Hello, developer!".

1) Create file `app/hello/page.tsx` with the following content:

```tsx
// app/hello/page.tsx
'use client'

import React from 'react'

export default function HelloPage() {
  // A simple React component that renders the page content
  return (
    <main style={{padding: 20}}>
      <h1>Hello, developer!</h1>
      <p>If you see this, your new route works.</p>
    </main>
  )
}
```

Line-by-line explanation:

- `// app/hello/page.tsx` — comment to remind where the file lives.
- `'use client'` — optional for this simple component; marks the file as a React client component. Use this if you plan to use hooks like `useState`. If omitted, the file is a server component (rendered on server).
- `import React from 'react'` — imports React. With modern toolchains this may be optional, but it's explicit and friendly for beginners.
- `export default function HelloPage() {` — defines and exports the component as the default export. Next.js treats the default export from `page.tsx` as the page content.
- `return (` — starts the JSX return for what should render.
- `<main style={{padding: 20}}>` — semantic wrapper element with inline padding for quick spacing (you can use CSS classes instead).
- `<h1>Hello, developer!</h1>` — visible title on the page.
- `<p>If you see this, your new route works.</p>` — small paragraph to confirm success.
- `)` and `}` — close the return and function.

2) How to test the change locally:

```powershell
pnpm dev
# open http://localhost:3000/hello in the browser
```

3) If it doesn't show or you get an error:

- Check terminal where `pnpm dev` runs for build or TypeScript errors.
- Open browser devtools console for runtime errors.
- Verify file path and filename: it must be `app/hello/page.tsx` (not `pages/`).

--

## Common beginner mistakes and how to fix them

- Mixing client-only code (hooks, `window`, event listeners) inside server components — error: move that code into a file with `'use client'`.
- Importing a component by the wrong path — search repo for correct relative path and update imports.
- Forgetting to run `pnpm install` after pulling repo — run install before `pnpm dev`.
- Missing environment variables for Supabase or API keys — create a `.env.local` with the required keys (ask me which keys this project needs and I will list them).

--

## Commands cheat sheet

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Build for production: `pnpm build`
- Run type-check: `pnpm -w -C . tsc --noEmit` (if present in scripts)

--

## Next action I can take for you

- Generate a line-by-line annotated version for a specific file (for example: `app/page.tsx`), producing `app/page.annotated.md` with comments for each line. This is the best way to make the repository approachable for someone totally new.
- Or, I can create several such annotated files for core app files (`app/layout.tsx`, `components/app-layout.tsx`, `lib/supabase-client.ts`).

Tell me which file to annotate first and I'll produce the annotated copy.
