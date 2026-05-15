import { Link } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext' 

const navItems = [
  { label: 'Solution', href: '#solution' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
]

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150 dark:border-white/15 dark:bg-white/1 dark:text-slate-100 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#"
          className="font-brand text-4xl font-semibold tracking-tight text-slate-950 transition-colors dark:text-slate-100"
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
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            <button onClick={toggleTheme} className="mt-1" type="button" aria-label="Toggle theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </span>
          <a
            href="#signin"
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
          aria-label="Open navigation menu"
        >
          X
        </button>
      </nav>
    </header>
  )
}

export default Navbar
