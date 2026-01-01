"use client"

import { Zap, Target, Timer, Trophy, Gift, Play, CheckCircle2, TrendingUp, Shield, Swords } from "lucide-react"
import Link from "next/link"
import { primeAudio } from "@/lib/sound-effects"
import Image from "next/image"
import TerminalDemo from "@/components/terminal-demo"
import { ZenModeDemo } from "@/components/zen-mode-demo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background dark">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center">
              <img src="/ui/new-logo.png" alt="Quiet Room" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-foreground">Quiet Room</span>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              How It Works
            </a>
            <a href="#rewards" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Rewards
            </a>
            <Link
              href="/auth/login"
              onClick={() => {
                try {
                  primeAudio("entrytrim")
                } catch (e) {
                  /* ignore */
                }
              }}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-bold hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Enter the Game
            </Link>
          </div>
          {/* Mobile CTA button */}
          <Link
            href="/auth/login"
            className="md:hidden px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Join
          </Link>
        </nav>
      </header>

      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 md:mb-8">
            <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm font-semibold text-primary">
              Turn Productivity Into An Epic Adventure
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-gray-400">
            Level Up Your Life,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary">
              One Quest at a Time
            </span>
          </h1>

          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto text-balance px-4">
            Transform your daily tasks into an immersive game. Earn XP, unlock rewards, compete on leaderboards, and
            achieve your goals while having fun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
            <Link
              href="/auth/login"
              onClick={() => {
                try {
                  primeAudio("entrytrim")
                } catch (e) {
                  /* ignore */
                }
              }}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-bold text-base md:text-lg hover:shadow-xl hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Start Your Journey
            </Link>
            <a
              href="#features"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-card border-2 border-border text-foreground rounded-xl font-bold text-base md:text-lg hover:border-primary/50 transition-all flex items-center justify-center gap-2"
            >
              Explore Features
              <Zap className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          <section className="py-12 md:py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1  rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative p-[8px] rounded-xl bg-gradient-to-br from-slate-600 via-slate-200 to-slate-700 shadow-2xl ring-1 ring-white/10">
                    <div className="rounded-lg bg-gray-900 border border-slate-700/50 overflow-hidden relative" style={{borderColor: 'oklch(92.9% 0.013 255.508)'}}>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10"></div>

                      <video
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/landingpagedashboard-kPh30tYybsBF1ifGMYccU5prt93Qsf.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Q Terminal Demo Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <Image src="/ui/mascot.png" alt="Q Mascot" width={24} height={24} className="w-6 h-6" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">System Operator: Q</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-muted-foreground">
                MEET YOUR NEW{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary">
                  COMMANDING OFFICER
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Most productivity apps act like a secretary. Quiet Room acts like a Commanding Officer. Q is a
                high-stakes AI strategist that refuses distractions and demands excellence.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 pl-2 bg-gradient-to-r from-primary via-purple-400 to-primary">Deep Strategy</h4>
                    <p className="text-muted-foreground">Turns vague goals into tactical 1.1, 1.2 steps.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 pl-2  bg-gradient-to-r from-primary via-purple-400 to-primary">Anti-Hallucination Protocol</h4>
                    <p className="text-muted-foreground">Focused on execution, not talk.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 pl-2 bg-gradient-to-r from-primary via-purple-400 to-primary"> No Fluff</h4>
                    <p className="text-muted-foreground">Q refuses off-topic requests to keep you on mission.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Terminal Demo */}
            <div className="flex justify-center lg:justify-end">
              <TerminalDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Zen Mode Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <ZenModeDemo />
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="py-24 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content - Left */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">GLOBAL COMPETITION</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-400">
                CLIMB THE{" "}
                <span className="bg-gradient-to-r from-violet-400 via-slate-300 to-purple-500 text-transparent bg-clip-text">
                  LEADERBOARD
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Compete with players worldwide and prove your productivity prowess. Rise through the ranks to earn
                exclusive daily Aura rewards and unlock prestigious titles.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-400">Daily Aura Rewards</h4>
                    <p className="text-muted-foreground">
                      Top 10 earn 100 Aura, ranks 11-50 get 50 Aura, and 51-100 receive 20 Aura daily.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-400">XP-Based Rankings</h4>
                    <p className="text-muted-foreground">
                      Every task completed and zen session adds to your total XP score.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-slate-400">Exclusive Titles & Badges</h4>
                    <p className="text-muted-foreground">Show off your achievements with special player titles.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Content - Right */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 p-1">
                <video
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leaderboard-5aT1ov6tv3PHtlp3aE4PR8l8RqEaEo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Simple Yet Powerful</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-300 to-purple-500 bg-clip-text text-transparent">Your Path to Victory</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to start your productivity journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Play className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-slate-300 ">Enter the Game</h3>
              <p className="text-muted-foreground text-center text-sm">
                Create your account and customize your player profile. Choose your path and set up your first goals.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-slate-300">Create Quests</h3>
              <p className="text-muted-foreground text-center text-sm">
                Break down your goals into daily tasks. Each completed quest earns you XP and brings you closer to
                leveling up.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Timer className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-slate-300">Focus & Grind</h3>
              <p className="text-muted-foreground text-center text-sm">
                Use Zen Mode for deep work sessions. Earn 5 XP per minute and accumulate Aura to spend in the rewards
                store.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-3xl font-bold text-white">4</span>
              </div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Trophy className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-slate-300">Level Up & Win</h3>
              <p className="text-muted-foreground text-center text-sm">
                Climb the leaderboard, unlock achievements, and spend Aura on rewards. Level up to get 50 Aura bonus!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section id="rewards" className="py-10 px-6 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20">
                <video autoPlay loop muted playsInline className="w-full h-auto">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rewardvideo-5qW4QowLFEyvunDD3hMoV7JyZ2Rbrd.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
                <Gift className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">REWARDS THAT MATTER</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-400">
                Spend Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                  Aura Wisely
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your hard-earned Aura into rewards that actually enhance your life. From immersive zen
                environments to guilt-free real-world permissions—you've earned it.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-slate-300">Premium Zen Environments</div>
                    <div className="text-sm text-muted-foreground">
                      Unlock breathtaking backgrounds—from serene forests to cyberpunk cityscapes. Elevate your focus
                      sessions with visuals that inspire peak performance.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-slate-400">Real-Life Permissions</div>
                    <div className="text-sm text-muted-foreground">
                      Trade Aura for guilt-free rewards. Take that coffee break, binge that show, or treat
                      yourself—because you've crushed your goals and earned every moment.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STOP BEING NPC CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className=" text-slate-300 bg-gradient-to-r from-primary via-purple-400 to-primary md-px-30 px-4">STOP BEING</span>
            <br />
            <span className="text-muted-foreground/50 line-through">NPC.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Become the Main Character of your focus story today.
          </p>
          <Link
            href="/auth/login"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-purple-600 to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-white text-lg font-bold rounded-full transition-all duration-500 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/70 hover:scale-105"
          >
            <span>ENTER QUIET ROOM</span>
            <Swords className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                  <img src="/ui/new-logo.png" alt="Quiet Room" className="w-10 h-10 object-contain" />
                </div>
                <span className="text-xl font-bold text-foreground tracking-wider">QUIET ROOM</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The world's first Gamified Productivity OS. Managed by Q. Powered by your ambition. Turn your work into
                a tactical advantage.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://x.com/quietroomos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/quiet-room123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4zM8.5 8h3.6v1.6h.05c.5-.95 1.7-1.95 3.5-1.95 3.7 0 4.4 2.4 4.4 5.5V20h-4v-5.2c0-1.3 0-3-1.9-3-1.9 0-2.2 1.5-2.2 2.9V20h-4z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/quietroomdojo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.5-1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-primary font-semibold text-sm tracking-wider">CONTACT</h3>
              <div className="space-y-2">
                <a
                  href="mailto:quietroom2025@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  quietroom2025@gmail.com
                </a>
              </div>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h3 className="text-primary font-semibold text-sm tracking-wider">LEGAL</h3>
              <div className="space-y-2">
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm block"
                >
                  PRIVACY POLICY
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-xs">© 2025 QUIET ROOM HQ. ALL RIGHTS RESERVED.</p>
            <p className="text-muted-foreground text-xs">DESIGNED FOR PEAK PERFORMANCE.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
