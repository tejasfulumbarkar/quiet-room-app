import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground dark">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20 space-y-16">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-slate-300">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">Effective date: February 22, 2026</p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">1. Information We Collect</h2>
          <div className="space-y-5 text-base text-muted-foreground">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-300">1.1 Account Information</h3>
              <p>When you sign in using Google OAuth, we may collect:</p>
              <ul className="space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Profile picture</li>
              </ul>
              <p>We do not access your Google password.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-300">1.2 Usage Data</h3>
              <p>When you use Quiet Room, we may collect:</p>
              <ul className="space-y-1">
                <li>Focus session duration</li>
                <li>Goals and task metadata</li>
                <li>XP, streak, and performance metrics</li>
                <li>App interaction data</li>
              </ul>
              <p>This data is necessary for core functionality.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-300">1.3 Device &amp; Technical Data</h3>
              <p>We may automatically collect:</p>
              <ul className="space-y-1">
                <li>Browser type</li>
                <li>Device type</li>
                <li>IP address</li>
                <li>Basic analytics data</li>
              </ul>
              <p>This helps improve performance and security.</p>
            </div>
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">2. How We Use Your Information</h2>
          <p className="text-base text-muted-foreground leading-relaxed">We use your information to:</p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Provide and maintain the platform</li>
            <li>Track focus sessions and progress</li>
            <li>Improve product features</li>
            <li>Respond to user feedback</li>
            <li>Ensure security and prevent abuse</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">We do not sell your personal data.</p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">3. AI Features</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quiet Room may use third-party AI services to generate insights or suggestions.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">When using AI features:</p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Only necessary user data is processed.</li>
            <li>Data is not used to train external AI models (unless explicitly stated by the provider).</li>
            <li>We do not store AI prompts beyond what is necessary for functionality.</li>
          </ul>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">4. Data Storage</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            User data is stored securely using Supabase (PostgreSQL-based infrastructure).
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We implement reasonable safeguards to protect your data, but no system is 100% secure.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">5. Data Retention</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We retain your data as long as your account remains active.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            You may request deletion of your account and associated data at any time by contacting:
          </p>
          <p className="text-base text-primary"> support@quietroom.in</p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">6. Third-Party Services</h2>
          <p className="text-base text-muted-foreground leading-relaxed">We rely on:</p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Google OAuth (Authentication)</li>
            <li>Supabase (Database &amp; Infrastructure)</li>
            <li>AI Service Providers </li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            These services operate under their own privacy policies.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">7. Children&apos;s Privacy</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quiet Room is not intended for children under 13 years of age.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            We do not knowingly collect data from children.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">8. Your Rights</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Access your data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="text-base text-primary">Contact: support@quietroom.in</p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">9. Changes to This Policy</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We may update this Privacy Policy from time to time. Continued use of Quiet Room constitutes acceptance of
            changes.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">10. Contact</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            For questions regarding this Privacy Policy:
          </p>
          <p className="text-base text-primary">support@quietroom.in</p>
          <p className="text-base text-muted-foreground">Quiet Room</p>
          <p className="text-base text-muted-foreground">INDIA</p>
        </section>
      </div>
    </main>
  )
}
