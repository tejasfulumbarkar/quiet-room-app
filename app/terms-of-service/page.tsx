import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfServicePage() {
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
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-slate-300">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Effective Date: February 22, 2026</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            By accessing or using Quiet Room, you agree to the following terms.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">1. Description of Service</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quiet Room is a productivity platform that tracks focused work sessions and provides gamified progress
            metrics.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The platform is provided “as is” without guarantees of performance outcomes.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">2. Eligibility</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            You must be at least 13 years old to use Quiet Room.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            By using the platform, you represent that you meet this requirement.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">3. Account Responsibility</h2>
          <p className="text-base text-muted-foreground leading-relaxed">You are responsible for:</p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Maintaining the security of your account</li>
            <li>All activity under your login</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            We are not responsible for unauthorized access caused by your negligence.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">4. Acceptable Use</h2>
          <p className="text-base text-muted-foreground leading-relaxed">You agree not to:</p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Use the platform for illegal purposes</li>
            <li>Attempt to exploit, hack, or disrupt services</li>
            <li>Manipulate or abuse reward systems</li>
            <li>Reverse engineer the platform</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            We reserve the right to suspend accounts violating these terms.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">5. Intellectual Property</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            All branding, design, code, and content within Quiet Room are owned by Quiet Room unless otherwise stated.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            You may not copy, distribute, or reproduce proprietary material without permission.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">6. Gamification &amp; Rewards Disclaimer</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            XP, streaks, and rewards are symbolic metrics intended to support motivation.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            They do not represent financial value or real-world guarantees.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">7. Limitation of Liability</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quiet Room is provided on an “as available” basis.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">We are not liable for:</p>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Data loss</li>
            <li>Productivity outcomes</li>
            <li>Indirect or incidental damages</li>
            <li>Service interruptions</li>
          </ul>
          <p className="text-base text-muted-foreground leading-relaxed">
            Use of the platform is at your own risk.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">8. Termination</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate these terms.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Users may request account deletion at any time.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">9. Modifications</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We may modify features, pricing (if introduced), or these terms at any time.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Continued use constitutes acceptance of changes.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">10. Governing Law</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            These Terms are governed by the laws of INDIA.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-300">11. Contact</h2>
          <p className="text-base text-muted-foreground leading-relaxed">For legal inquiries:</p>
          <p className="text-base text-primary">support@quietroom.in</p>
        </section>
      </div>
    </main>
  )
}
