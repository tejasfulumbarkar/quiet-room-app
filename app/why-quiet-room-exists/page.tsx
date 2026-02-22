import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Instagram, Linkedin } from "lucide-react"

export default function WhyQuietRoomExistsPage() {
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

        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/40">
            <Image
              src="/images/tejas_image_blackbg.jpg"
              alt="Tejas"
              width={900}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-slate-300">Hi, I&apos;m Tejas.</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I built Quiet Room because I was tired of feeling productive without actually doing deep work.
            </p>
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-300">The Problem I Noticed</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Most productivity apps reward planning, tracking, and checking boxes. But checking boxes isn&apos;t progress.
            Real progress comes from focused effort - time invested with intention.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I realized I could complete tasks all day and still avoid deep work.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-300">So I Built a System</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quiet Room is designed around one simple belief: effort should be measurable.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Instead of rewarding how many tasks you create, it rewards how much focused time you actually invest.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            XP isn&apos;t given for writing a task. It&apos;s earned through focus.
          </p>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-300">I believe:</h2>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li>Discipline is more reliable than motivation.</li>
            <li>Small consistent effort compounds.</li>
            <li>Systems beat willpower.</li>
            <li>Dopamine should be earned, not manufactured.</li>
          </ul>
        </section>

        <section className="space-y-5 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-300">What I&apos;m Building Toward</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Quiet Room is still evolving. I&apos;m building it slowly, intentionally, and improving it based on real use.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            If you&apos;re using it, your feedback genuinely shapes what comes next.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Email us your Feedback  : support@quietroom.in
          </p>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Built by one person. Refined through effort.
          </p>

          <div className="pt-4 space-y-3">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">Follow the build journey</p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/quietroomdojo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-lg border border-border p-2 text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/quiet-room123/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-border p-2 text-muted-foreground hover:border-primary/60 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
