import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Topbar from './Topbar.jsx'
import Onboarding from './Onboarding.jsx'
import Sidebar from './components/Sidebar.jsx'

import { CircleAlert, CircleCheckBig, Flame } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function Dashboard() {
	const [isOnboarded, setIsOnboarded] = useState(() => {
		if (typeof window === 'undefined') {
			return false
		}
		return JSON.parse(window.localStorage.getItem('isOnboarded') || 'false')
	})
	const sidebarOpen = true

	const { theme, toggleTheme } = useTheme()

	useEffect(() => {
		window.localStorage.setItem('isOnboarded', JSON.stringify(isOnboarded))
	}, [isOnboarded])

	const handleOnboardingComplete = () => {
		setIsOnboarded(true)
	}

	// toggleTheme provided by ThemeContext

	const tasks = [
		{ id: 1, difficulty: 'Medium', title: 'Solve 3 Array Problems', description: 'Focus on Two Pointers and Sliding Window techniques.', status: 'todo', action: 'Start' },
		{ id: 2, difficulty: 'Medium', topic: 'Topic: Architectures', title: 'Review System Design Basics', description: 'Consistency, Availability, and Partition Tolerance (CAP Theorem).', status: 'todo', action: 'Open Link' },
		{ id: 3, difficulty: 'Advanced', title: 'SQL Performance Tuning', description: 'Master indexing and query optimization.', status: 'completed', action: 'Completed' },
	]

	return (
		<div className="dashboard-shell flex min-h-screen flex-col overflow-x-hidden">
			{!isOnboarded ? (
				<Onboarding onComplete={handleOnboardingComplete} theme={theme} />
			) : (
				<>
					<Topbar sidebarOpen={sidebarOpen} theme={theme} onThemeToggle={toggleTheme} />

					<div className="flex gap-6 items-stretch flex-1 min-w-0 overflow-x-hidden transition-[padding-left] duration-220 pl-65 pr-5 py-5">
						{/* Sidebar */}
						<aside className="sidebar-wrapper flex-none transition-all duration-220">
							<Sidebar />
						</aside>

						{/* Main Content */}
						<main className="flex-1 min-w-0 min-h-[calc(100vh-40px)] overflow-y-auto overflow-x-hidden p-0">
							<div className="grid grid-cols-[1fr_320px] gap-5">
								{/* Left Column */}
								<div>
									<section>
										<h3 className="text-xs font-semibold uppercase tracking-widest text-accent m-0 mb-2 opacity-90">
											FOCUS SESSION
										</h3>
										<h1 className="text-slate-900 dark:text-white text-4xl font-bold m-0 mb-6 -tracking-tight">
											Today's Roadmap
										</h1>
										<div className="space-y-3">
											{tasks.map((task) => (
												<article
													key={task.id}
													className={`task-card ${task.status} flex gap-4 p-4 rounded-lg border bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 transition-all text-slate-900 dark:text-white`}
												>
													<div className="flex items-start pt-1">
														<input type="checkbox" className="cursor-pointer appearance-none w-5 h-5 rounded border-2 bg-white border-slate-300 dark:bg-gray-800 dark:border-gray-600 checked:bg-blue-600 checked:border-blue-600 transition-colors" />
													</div>
													<div className="flex-1">
														<div className="flex gap-2 mb-2">
															{task.difficulty && (
																<span className="px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
																	{task.difficulty}
																</span>
															)}
															{task.topic && (
																<span className="px-2 py-1 text-xs font-medium rounded bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
																	{task.topic}
																</span>
															)}
														</div>
														<h4 className="font-semibold mb-1 text-slate-900 dark:text-white">{task.title}</h4>
														<p className="text-sm text-slate-600 dark:text-gray-400">{task.description}</p>
													</div>
													<button
														className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
															task.status === 'completed'
																? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300'
																: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-accent/20 dark:text-accent dark:hover:bg-accent/30'
														}`}
													>
														{task.action}
													</button>
												</article>
											))}
										</div>
									</section>
								</div>

								{/* Right Column */}
								<aside className="space-y-6">
									{/* Alert Section */}
									<section className="rounded-lg p-4 mb-6 border-2 bg-red-50 border-red-200 dark:bg-red-600/40 dark:border-red-500/30">
										<div className="flex items-center gap-3 mb-3">
											<div className="text-xl text-red-600 dark:text-red-500"><CircleAlert /></div>
											<h4 className="font-semibold text-sm uppercase tracking-wide text-red-600 dark:text-red-500">URGENT ALERT</h4>
										</div>
										<p className="text-sm mb-2 text-slate-700 dark:text-gray-300">You are falling behind your goal.</p>
										<p className="text-xs mb-4 text-slate-500 dark:text-gray-500">Complete 2 more problems this week to stay on track for the FAANG interviews.</p>
										<a href="#" className="text-accent text-sm font-medium hover:underline">Adjust My Plan →</a>
									</section>

									{/* Insights Section */}
									<section className="mb-6 rounded-lg p-4 border-2 border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/5">
										<h4 className="text-xs font-semibold uppercase tracking-widest mb-3 text-slate-500 dark:text-gray-400">INSIGHTS</h4>
										<div className="grid grid-cols-2 gap-3">
											<div className="rounded-lg p-3 text-center bg-white border-2 border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10">
												<div className="text-2xl mb-1"><CircleCheckBig /></div>
												<div className="font-bold text-lg text-slate-900 dark:text-white">24</div>
												<div className="text-xs text-slate-500 dark:text-gray-500">Tasks Done</div>
											</div>
											<div className="rounded-lg p-3 text-center bg-white border-2 border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10">
												<div className="text-2xl mb-1"><Flame /></div>
												<div className="font-bold text-lg text-slate-900 dark:text-white">92%</div>
												<div className="text-xs text-slate-500 dark:text-gray-500">Consistency</div>
											</div>
										</div>
									</section>

									{/* Premium Section */}
									<section className="rounded-lg p-4 border-4 bg-slate-50 border-slate-300 dark:bg-linear-to-br dark:from-accent/20 dark:to-accent-deep/20 dark:border-accent/30">
										<h4 className="font-semibold mb-2 text-slate-900 dark:text-white">Master System Design with<br />SabtCodeX Pro</h4>
										<p className="text-xs mb-4 text-slate-600 dark:text-gray-400">Unlock 52+ case studies from Uber, Netflix, and Amazon on scaling systems.</p>
										<button className="w-full font-bold py-2 px-4 rounded-lg transition-colors text-sm bg-blue-600 text-white hover:bg-blue-700 dark:bg-accent dark:hover:bg-accent/90">
											Upgrade Now
										</button>
									</section>
								</aside>
							</div>
						</main>
					</div>
				</>
			)}
		</div>
	)
}