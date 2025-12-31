# Local Development Setup Guide

## Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** package manager
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)
- **Git** - [Download here](https://git-scm.com/)

## Step 1: Clone the Repository

```bash
# If you have the ZIP file, extract it
# Or clone from GitHub if connected
git clone <your-repo-url>
cd quietroomv08
```

## Step 2: Install Dependencies

Open the project in VS Code and run:

```bash
# Using npm
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

## Step 3: Set Up Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
SUPABASE_SECRET_KEY=your_supabase_secret_key
SUPABASE_JWT_SECRET=your_supabase_jwt_secret
SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key

# PostgreSQL (from Supabase)
POSTGRES_URL=your_postgres_connection_string
POSTGRES_PRISMA_URL=your_postgres_prisma_url
POSTGRES_URL_NON_POOLING=your_postgres_non_pooling_url
POSTGRES_USER=your_postgres_user
POSTGRES_HOST=your_postgres_host
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DATABASE=your_postgres_database

# Groq API (for AI features)
GROQ_API_KEY=your_groq_api_key

# Development redirect URL
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
```

**Where to get these values:**
- **Supabase**: Sign up at [supabase.com](https://supabase.com), create a project, and find these in Project Settings > API
- **Groq API**: Sign up at [console.groq.com](https://console.groq.com) to get an API key

## Step 4: Run Database Scripts (if needed)

If you need to set up the database tables, run the SQL scripts in the `scripts` folder:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the SQL scripts in order (if any exist in the `scripts` folder)

## Step 5: Run the Development Server

```bash
npm run dev
```

The app will start at [http://localhost:3000](http://localhost:3000)

## Step 6: Verify Everything Works

1. Open [http://localhost:3000](http://localhost:3000) in your browser
2. You should see the Quiet Room landing page
3. Try logging in with the test user or create a new account

## Common Issues and Solutions

### Issue: "Module not found" errors
**Solution:** Delete `node_modules` and `.next` folders, then reinstall:
```bash
rm -rf node_modules .next
npm install
```

### Issue: TypeScript errors
**Solution:** Make sure TypeScript is properly installed:
```bash
npm install --save-dev typescript @types/node @types/react @types/react-dom
```

### Issue: Supabase authentication errors
**Solution:** 
- Check that all Supabase environment variables are correct
- Verify your Supabase project is active
- Check that the redirect URL is added to Supabase Auth settings

### Issue: Port 3000 already in use
**Solution:** Kill the process or use a different port:
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or run on a different port
PORT=3001 npm run dev
```

## VS Code Recommended Extensions

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - dsznajder.es7-react-js-snippets
2. **Tailwind CSS IntelliSense** - bradlc.vscode-tailwindcss
3. **TypeScript Vue Plugin (Volar)** - Vue.vscode-typescript-vue-plugin
4. **Prettier - Code formatter** - esbenp.prettier-vscode
5. **ESLint** - dbaeumer.vscode-eslint

## Build for Production

```bash
npm run build
npm start
```

## Need Help?

- Check the [Next.js documentation](https://nextjs.org/docs)
- Check the [Supabase documentation](https://supabase.com/docs)
- Open an issue on GitHub
