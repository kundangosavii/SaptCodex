import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../api/auth'
import { useTheme } from '../../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

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
			localStorage.setItem('token', res.data.token || res.data.accessToken || res.data.user?.accessToken)
			navigate('/dashboard')
		} catch (error) {
			console.error('Signin failed:', error.response ? error.response.data : error.message)
		}
	}

	const { theme, toggleTheme } = useTheme()
	const isDark = theme === 'dark'

	const onboardingPillars = [
		{
			title : "Daily Momentum",
			description : "Continue where you left off with prioritized tasks and checkpoints."
		},
		{
			title : "Progress Clarity",
			description : "Track strengths, close gaps, and keep interview readiness measurable."
		}
	]

	return (
		<main className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white flex items-center justify-center">
			<section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6" aria-label="SignIn panel">

				<aside className="rounded-lg p-8 bg-neutral-100 dark:bg-neutral-800">
					<p className="text-sm text-indigo-600 dark:text-indigo-200 uppercase tracking-wider">Execution Studio</p>
					<h1 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight text-neutral-900 dark:text-white">
						Create your <span className="text-indigo-600 dark:text-indigo-300">SaptCodeX workspace</span>
					</h1>
					<p className="mt-4 text-neutral-600 dark:text-indigo-100/90">Build consistency with a premium workflow for placement prep, from planning to daily execution.</p>

					<div className="mt-8 grid gap-4">
						{onboardingPillars.map((pillar) => (
							<article key={pillar.title} className="bg-indigo-50 dark:bg-white/5 p-4 rounded-lg">
								<h2 className="text-lg font-semibold text-neutral-900 dark:text-white">{pillar.title}</h2>
								<p className="text-sm text-neutral-600 dark:text-indigo-100/75 mt-1">{pillar.description}</p>
							</article>
						))}
					</div>
				</aside>

					<article className="bg-neutral-50 dark:bg-neutral-800/60 p-6 rounded-lg shadow-lg">
						<div className="flex items-center justify-between gap-4">
							<div>
								<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Secure access</p>
								<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Signin</h2>
							</div>
							<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
								<button onClick={toggleTheme} className='mt-1'>
      								{theme === "light" ? <Moon size={18} /> : <Sun  size={18}/>}
    							</button>
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
								className="mt-1 block w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md px-3 py-2 placeholder-neutral-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
								className="mt-1 block w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md px-3 py-2 placeholder-neutral-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
							/>

							<button
								type="submit"
								className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md"
							>
								Login to dashboard
							</button>
						</form>

						<div className='flex justify-center items-center mt-5'>
							<p className="mt-4 text-sm text-neutral-600 dark:text-gray-300">
							New here? <Link to="/signup" className="text-indigo-600 dark:text-indigo-300 hover:underline">Create account</Link>
							</p>
						</div>
					</article>
				</section>
		</main>
	)
}

export default Signin
