const navItems = [
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
]

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-white/1 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="font-brand text-4xl font-semibold tracking-tight text-slate-100">
          SaptCodeX
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-nav text-sm font-semibold uppercase tracking-wide text-slate-300 transition-colors hover:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#signin" className="font-nav text-sm font-semibold text-slate-300 hover:text-white">
            Sign In
          </a>
          <a
            href="#get-started"
            className="font-action rounded-lg border border-white/20 bg-transparent px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-slate-100 transition-colors hover:border-white/40 hover:bg-white/10"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          className="font-action inline-flex items-center justify-center rounded-lg border border-sky-300/40 px-3 py-2 text-slate-100 md:hidden"
          aria-label="Open navigation menu"
        >
          X
        </button>
      </nav>
    </header>
  )
}

export default Navbar
