import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../api/auth'
import { useTheme } from '../../context/ThemeContext'

function Signin() {
	const navigate = useNavigate()
	const [form, setform] = useState({
		email: '',
		password: '',
	})

	const handlechange = (e) => {
		setform({
			...form,
			[e.target.name]: e.target.value,
		})
	}

	const handlesubmit = async (e) => {
		e.preventDefault()

		try {
			const res = await signin(form)
			localStorage.setItem('token', res.data.token)
			navigate('/dashboard')
		} catch (error) {
			console.error('Signin failed:', error.response ? error.response.data : error.message)
		}
	}

	const { theme, toggleTheme } = useTheme()
	const isDark = theme === 'dark'

	return (
		<main className={`min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50`}>
			<section className="relative isolate overflow-hidden px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_25%)]" />

				<div className="relative mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-hidden rounded-4xl border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-900/80 dark:shadow-[0_24px_80px_rgba(2,6,23,0.5)] lg:grid-cols-[1.08fr_0.92fr]">
					<aside className="flex flex-col justify-between gap-10 bg-slate-900 px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12 dark:bg-slate-950">
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cyan-200">
									Execution Studio
								</p>
								<h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
									Welcome back to
									<span className="block bg-linear-to-r from-cyan-300 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
										SaptCodeX
									</span>
								</h1>
								<p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
									Resume your preparation flow and pick up today&apos;s execution plan in seconds.
								</p>
							</div>

							<button
								type="button"
								onClick={toggleTheme}
								className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
								aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
							>
								{isDark ? (
									<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
										<path d="M12 3v2.5M12 18.5V21M4.22 4.22l1.77 1.77M18.01 18.01l1.77 1.77M3 12h2.5M18.5 12H21M4.22 19.78l1.77-1.77M18.01 5.99l1.77-1.77" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
										<circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.8" />
									</svg>
								) : (
									<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
										<path d="M20 15.5A8.5 8.5 0 1 1 8.5 4a6.5 6.5 0 0 0 11.5 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
									</svg>
								)}
							</button>
						</div>

						<div className="grid gap-4 sm:grid-cols-2">
							<article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
								<h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Daily Momentum</h2>
								<p className="mt-3 text-sm leading-6 text-slate-300">
									Continue where you left off with prioritized tasks and checkpoints.
								</p>
							</article>
							<article className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
								<h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-200">Progress Clarity</h2>
								<p className="mt-3 text-sm leading-6 text-slate-300">
									Track strengths, close gaps, and keep interview readiness measurable.
								</p>
							</article>
						</div>
					</aside>

					<article className="flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
						<div className="flex items-center justify-between gap-4">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Secure access</p>
								<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Signin</h2>
							</div>
							<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
								{isDark ? 'Dark mode' : 'Light mode'}
							</span>
						</div>

						<form className="mt-8 grid gap-4" onSubmit={handlesubmit}>
							<label htmlFor="signin-email" className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
								Email address
							</label>
							<input
								id="signin-email"
								type="email"
								name="email"
								placeholder="example@gmail.com"
								autoComplete="email"
								onChange={handlechange}
								className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500"
							/>

							<div className="flex items-center justify-between gap-4">
								<label htmlFor="signin-password" className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
									Password
								</label>
								<a href="#forgot" className="text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
									Forgot password?
								</a>
							</div>
							<input
								id="signin-password"
								type="password"
								name="password"
								placeholder="Enter your password"
								autoComplete="current-password"
								onChange={handlechange}
								className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-500"
							/>

							<button
								type="submit"
								className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/30 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
							>
								Login to dashboard
							</button>
						</form>

						<p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
							New here? <Link to="/signup" className="font-semibold text-slate-900 transition hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200">Create account</Link>
						</p>
					</article>
				</div>
			</section>
		</main>
	)
}

export default Signin
