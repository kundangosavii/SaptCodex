import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext' 

const navItems = [
  { label: 'Solution', href: '#remedy' },
  { label: 'Features', href: '#capabilities' },
  { label: 'How It Works', href: '#process' },
  { label: 'Testimonials', href: '#social-proof' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/15 dark:bg-white/1 dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <a
          href="#"
          className="font-brand text-3xl font-semibold tracking-tight text-slate-950 transition-colors dark:text-slate-100 sm:text-4xl"
        >
          SaptCodeX
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-nav text-sm font-semibold uppercase tracking-wide text-slate-600 transition-colors hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="inline-flex items-center rounded-full border h-10 border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="/signin"
            className="font-nav text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
          >
            Sign In
          </a>
          <Link
            to="/signup"
            className="font-action rounded-lg border border-slate-300 bg-slate-950 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:border-slate-950 hover:bg-slate-800 dark:border-white/20 dark:bg-transparent dark:text-slate-100 dark:hover:border-white/40 dark:hover:bg-white/10"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          className="font-action inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-sky-300/40 dark:bg-transparent dark:text-slate-100 md:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-full mt-3 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/15 dark:bg-black md:hidden">
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center rounded-xl px-3 py-3 font-nav text-sm font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-cyan-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between rounded-xl border px-4 py-3">
                <span className="font-nav text-sm font-semibold text-slate-700 dark:text-slate-200">Theme</span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/signin"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-3 font-action text-xs font-extrabold uppercase tracking-wide text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10"
                >
                  Sign In
                </a>
                <Link
                  to="/signup"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center rounded-xl border border-slate-950 bg-slate-950 px-4 py-3 font-action text-xs font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-slate-800 dark:border-cyan-300/30 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
