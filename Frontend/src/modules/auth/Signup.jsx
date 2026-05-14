import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../api/auth'
import { useTheme } from '../../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'


const onboardingPillars = [
	{
		title: 'Role Mapping',
		description: 'Set your target role and build a practical plan that fits your timeline.',
	},
	{
		title: 'Focused Sprints',
		description: 'Work through weekly execution blocks with measurable outcomes.',
	},
]

function Signup() {

	const navigate = useNavigate()

	const { theme, toggleTheme } = useTheme()

	const [form, setform] = useState({
		fullname: '',
		email: '',
		password: '',
		confirmPassword: '',
		consent: false,
	})

	const handleChange = (e) => {
		const { name, type, value, checked } = e.target
		setform({
			...form,
			[name]: type === 'checkbox' ? checked : value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await signup(form)
			console.log('Signup successful:', response.data)
			// Redirect to signin or dashboard
			navigate('/dashboard')
		} catch (error) {
			console.error('Signup failed:', error)
			// Show error message to user
		}
	}

	return (
		<main className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white flex items-center justify-center">

			<section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6" aria-label="Signup panel">
				{/* Left brand panel */}
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

				{/* Right form panel */}
				<article className="bg-neutral-50 dark:bg-neutral-800/60 p-6 rounded-lg shadow-lg">
					<div className='flex items-center justify-between gap-4'>
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Secure access</p>
							<h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">Signup</h2>
						</div>
						<span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
								<button onClick={toggleTheme} className='mt-1'>
      								{theme === "light" ? <Moon size={18} /> : <Sun  size={18}/>}
    							</button>
						</span>
					</div>

					<form className="mt-6 space-y-4" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="signup-name" className="block text-sm font-medium text-neutral-700 dark:text-gray-200">Full name</label>
							<input id="signup-name" name="fullname" type="text" placeholder="Aarav Sharma" autoComplete="name" onChange={handleChange} className="mt-1 block w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md px-3 py-2 placeholder-neutral-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
						</div>

						<div>
							<label htmlFor="signup-email" className="block text-sm font-medium text-neutral-700 dark:text-gray-200">Email address</label>
							<input id="signup-email" name="email" type="email" placeholder="name@gmail.com" autoComplete="email" onChange={handleChange} className="mt-1 block w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md px-3 py-2 placeholder-neutral-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
						</div>

						<div>
							<label htmlFor="signup-password" className="block text-sm font-medium text-neutral-700 dark:text-gray-200">Password</label>
							<input id="signup-password" name="password" type="password" placeholder="Create a strong password" autoComplete="new-password" onChange={handleChange} className="mt-1 block w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md px-3 py-2 placeholder-neutral-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
						</div>

						<div>
							<label htmlFor="signup-confirm" className="block text-sm font-medium text-neutral-700 dark:text-gray-200">Confirm password</label>
							<input id="signup-confirm" name="confirmPassword" type="password" placeholder="Repeat password" autoComplete="new-password" onChange={handleChange} className="mt-1 block w-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-md px-3 py-2 placeholder-neutral-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
						</div>

						<label className="flex items-center gap-3 text-sm text-neutral-700 dark:text-gray-200 mt-2">
							<input id="signup-consent" name="consent" type="checkbox" onChange={handleChange} className="h-4 w-4 rounded text-indigo-500 bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 focus:ring-indigo-400" />
							<span>I agree to the terms and privacy policy.</span>
						</label>

						<button type="submit" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md">Create account</button>
					</form>

					<p className="mt-4 text-sm text-neutral-600 dark:text-gray-300">Already have an account? <Link to="/signin" className="text-indigo-600 dark:text-indigo-300 hover:underline">Sign in</Link></p>
				</article>
			</section>
		</main>
	)
}

export default Signup