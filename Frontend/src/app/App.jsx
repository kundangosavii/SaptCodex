import './App.css'
import Navbar from '../shared/components/Navbar.jsx'
import Footer from '../shared/components/Footer.jsx'
import heroImage from '../assets/hero.png'

const struggleCards = [
  {
    title: 'Too many resources',
    description:
      'Paralysis by analysis. You spend more time picking a tutorial than actually writing code.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3L3 8l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5.5 12.5L12 16l6.5-3.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'No clear direction',
    description:
      'Learning random topics without understanding the hiring requirements or sequence.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M6 12h12M12 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Inconsistent practice',
    description:
      'Starting strong for three days then disappearing for a month. No system to keep you accountable.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3v4M16 3v4M8.5 14.5l7-7M15.5 14.5l-7-7" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

const remedyCards = [
  {
    title: 'Daily Task System',
    description: 'We deliver focused tasks every morning. No overthinking, just execution.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.5 12.5l2.2 2.2L15.5 10" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Structured Roadmap',
    description: 'A curriculum designed to cover what matters most for placements.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M6 5h4a2 2 0 0 1 2 2v12H8a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7h4a2 2 0 0 1 2 2v10h-6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description: 'Visual checkpoints that show your skill growth with consistency.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M5 16l4-4 3 3 6-7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 6v12h14" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

const capabilityCards = [
  {
    title: 'Curated Resources',
    description:
      'Top YouTube, LeetCode, and technical blogs filtered for quality and relevance.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M6 6h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9.5 10l4 2-4 2v-4z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Progress Tracking',
    description: 'Deep analytics into your solving speed, concept gaps, and topic mastery.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M5 17h14" stroke="currentColor" strokeWidth="1.8" />
        <path d="M7 15l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Select Goal',
    description: 'Choose your target companies or role (Product Based, Startup, or FAANG).',
  },
  {
    number: '2',
    title: 'Get Roadmap',
    description: 'Receive a custom dynamic curriculum tailored to your current skill gaps.',
  },
  {
    number: '3',
    title: 'Execute Daily',
    description: 'Follow the daily task list and watch your progress bar hit 100%.',
  },
]

const testimonials = [
  {
    quote:
      'SubCodeX removed all my anxiety about what to study. I just wake up, see my three tasks, and finish them. Landed an offer in 3 months.',
    name: 'Arjun Sharma',
    role: 'Software Engineer @ Razorpay',
    avatarClass: 'bg-cyan-500/35',
  },
  {
    quote:
      'The daily task system is a game changer. I used to hop between YouTube channels, but this roadmap kept me focused on one thing at a time.',
    name: 'Priya Patel',
    role: 'Product Analyst @ Google',
    avatarClass: 'bg-slate-500/45',
  },
  {
    quote:
      'Best investment for my career. The progress tracking actually showed me exactly where I was weak in Dynamic Programming.',
    name: 'Kevin Miller',
    role: 'Associate Dev @ Amazon',
    avatarClass: 'bg-violet-100/90',
  },
  {
    quote:
      'The roadmap gave me clarity from day one. I stopped jumping topics and started finishing what mattered.',
    name: 'Neha Verma',
    role: 'SDE Intern @ Atlassian',
    avatarClass: 'bg-emerald-300/60',
  },
  {
    quote:
      'I used the daily system for 10 weeks straight. My problem-solving confidence improved more than in the last year.',
    name: 'Rohan Gupta',
    role: 'Frontend Engineer @ Zoho',
    avatarClass: 'bg-sky-200/70',
  },
  {
    quote:
      'What worked for me was consistency. SubCodeX made consistency automatic with simple, focused tasks.',
    name: 'Sara Khan',
    role: 'Software Engineer @ Paytm',
    avatarClass: 'bg-amber-200/80',
  },
]

const scrollingTestimonials = [...testimonials, ...testimonials]

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black px-6 pb-16 pt-28 text-white md:px-10">
        <section className="mx-auto grid w-full max-w-7xl gap-10 py-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
              The Architectural Void
            </span>

            <h1 className="mt-6 max-w-xl font-nav text-5xl font-bold leading-[0.98] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl">
              Stop Planning.
              <span className="block text-cyan-400">Start Executing.</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-400">
              Get daily tasks, a structured roadmap, and become placement-ready without the noise
              of endless resources.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="rounded-xl bg-cyan-300 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:bg-cyan-200"
              >
                Get Started
              </a>
              <a
                href="#roadmap"
                className="rounded-xl border border-slate-700 bg-slate-800/60 px-8 py-4 text-lg font-semibold text-slate-300 transition hover:border-slate-500 hover:text-slate-100"
              >
                View Roadmap
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-900/40 p-2 shadow-[0_0_30px_rgba(14,116,255,0.18)]">
            <img
              src={heroImage}
              alt="Dashboard preview"
              className="aspect-16/10 w-full rounded-xl object-cover"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-12" id="struggle">
          <p className="font-nav text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            The Struggle
          </p>
          <h2 className="mt-3 font-nav text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Why most candidates fail to prepare.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {struggleCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="text-slate-300">{card.icon}</div>
                <h3 className="mt-7 font-nav text-3xl font-semibold tracking-tight text-slate-100">
                  {card.title}
                </h3>
                <p className="mt-4 max-w-sm text-xl leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mx-auto grid w-full max-w-7xl gap-8 py-14 lg:grid-cols-[1fr_1.05fr] lg:items-center"
          id="remedy"
        >
          <div className="space-y-4">
            {remedyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-black p-5 sm:p-6"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300">
                  {card.icon}
                </div>
                <h3 className="mt-4 font-nav text-2xl font-semibold tracking-tight text-slate-100">
                  {card.title}
                </h3>
                <p className="mt-2 max-w-md text-lg leading-relaxed text-slate-400">{card.description}</p>
              </article>
            ))}
          </div>

          <div>
            <p className="font-nav text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              The Remedy
            </p>
            <h2 className="mt-3 max-w-lg font-nav text-5xl font-bold leading-[1.03] tracking-tight text-slate-100 sm:text-6xl">
              Your Personal Placement Architect.
            </h2>
            <p className="mt-5 max-w-lg text-xl leading-relaxed text-slate-400">
              We do not just provide content; we provide a workflow. SaptCodeX filters out the
              noise and keeps your preparation focused on actions that move you forward.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3">
              <img
                src={heroImage}
                alt="Progress dashboard"
                className="aspect-16/10 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-14" id="capabilities">
          <p className="text-center font-nav text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Capabilities
          </p>
          <h2 className="mt-3 text-center font-nav text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Built for high-performance learning.
          </h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
              <h3 className="font-nav text-3xl font-semibold tracking-tight text-slate-100">
                Daily Tasks Engine
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-400">
                Every morning at 6 AM, your dashboard updates with 3 key problems. One easy, one
                medium, one hard. Curated specifically for your progress level.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/60 p-3">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <span>Today&apos;s Focus: Graphs</span>
                  <span>2/3 Done</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-2/3 rounded-full bg-cyan-300" />
                </div>
              </div>
            </article>

            <article className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-slate-200">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                  <path d="M12 4l3 4h5l-4 4 1.5 6L12 15l-5.5 3L8 12 4 8h5z" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </div>
              <h3 className="mt-4 font-nav text-3xl font-semibold tracking-tight text-slate-100">
                Streak System
              </h3>
              <p className="mt-3 max-w-xs text-lg leading-relaxed text-slate-400">
                Gamified consistency to ensure you never miss a day. Build habits that last.
              </p>
            </article>

            {capabilityCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300">
                  {card.icon}
                </div>
                <h3 className="mt-4 font-nav text-2xl font-semibold tracking-tight text-slate-100">
                  {card.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-slate-400">{card.description}</p>
              </article>
            ))}

            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M7 7h10v10H7z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M10 10h4v4h-4z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h3 className="mt-4 font-nav text-2xl font-semibold tracking-tight text-slate-100">
                Smart Dashboard
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-slate-400">
                One place to view tasks, streaks, and outcomes without switching context.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-14" id="process">
          <p className="text-center font-nav text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            The Process
          </p>
          <h2 className="mt-3 text-center font-nav text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Three steps to placement.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {processSteps.map((step, index) => (
              <article key={step.number} className="relative text-center">
                {index < processSteps.length - 1 ? (
                  <span className="absolute left-[68%] top-5 hidden h-px w-[64%] bg-white/10 md:block" />
                ) : null}

                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-lg font-semibold text-cyan-300">
                  {step.number}
                </div>
                <h3 className="mt-5 font-nav text-2xl font-semibold tracking-tight text-slate-100">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-lg leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-14" id="social-proof">
          <p className="font-nav text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
            Social Proof
          </p>
          <h2 className="mt-3 max-w-2xl font-nav text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Used by the next generation of software architects.
          </h2>

          <div className="testimonial-marquee mt-10">
            <div className="testimonial-track">
              {scrollingTestimonials.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                <p className="text-lg leading-relaxed text-slate-300">&ldquo;{item.quote}&rdquo;</p>

                <div className="mt-7 flex items-center gap-3">
                  <span className={`h-7 w-7 rounded-full ${item.avatarClass}`} />
                  <div>
                    <p className="font-nav text-base font-semibold text-slate-100">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.role}</p>
                  </div>
                </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl py-20" id="join-now">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-nav text-5xl font-bold leading-tight tracking-tight text-slate-100 sm:text-6xl">
              Start your placement
              <span className="block">journey today.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
              Join 10,000+ students who stopped planning and started executing their dreams.
            </p>

            <a
              href="#get-started"
              className="mt-10 inline-flex items-center rounded-2xl border border-white/20 bg-transparent px-10 py-4 font-nav text-xl font-semibold text-slate-100 transition-colors hover:border-white/40 hover:bg-white/10"
            >
              Join Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
