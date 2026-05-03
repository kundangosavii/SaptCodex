import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Topbar from './Topbar.jsx'

import { LayoutDashboard, CircleDot, BookOpenText, Settings, Rocket, CircleAlert, CircleCheckBig, Flame } from 'lucide-react'

const MenuIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<line x1="3" y1="6" x2="21" y2="6"></line>
		<line x1="3" y1="12" x2="21" y2="12"></line>
		<line x1="3" y1="18" x2="21" y2="18"></line>
	</svg>
)

const XIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<line x1="18" y1="6" x2="6" y2="18"></line>
		<line x1="6" y1="6" x2="18" y2="18"></line>
	</svg>
)

export default function Dashboard() {
	const [sidebarOpen, setSidebarOpen] = useState(true)
	const [theme, setTheme] = useState(() => {
		if (typeof window === 'undefined') {
			return 'dark'
		}

		return window.localStorage.getItem('dashboard-theme') || 'dark'
	})

	const isDark = theme === 'dark'

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark)
		window.localStorage.setItem('dashboard-theme', theme)
	}, [isDark, theme])

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
	}

	const collapsedNavItemStyle = sidebarOpen
		? undefined
		: { width: '48px', height: '48px', justifyContent: 'center', padding: 0, marginInline: 'auto' }

	const tasks = [
		{ id: 1, difficulty: 'Medium', title: 'Solve 3 Array Problems', description: 'Focus on Two Pointers and Sliding Window techniques.', status: 'todo', action: 'Start' },
		{ id: 2, difficulty: 'Medium', topic: 'Topic: Architectures', title: 'Review System Design Basics', description: 'Consistency, Availability, and Partition Tolerance (CAP Theorem).', status: 'todo', action: 'Open Link' },
		{ id: 3, difficulty: 'Advanced', title: 'SQL Performance Tuning', description: 'Master indexing and query optimization.', status: 'completed', action: 'Completed' },
	]

	return (
		<div
			className="dashboard-shell flex min-h-screen flex-col overflow-x-hidden"
		>
			<Topbar sidebarOpen={sidebarOpen} theme={theme} onThemeToggle={toggleTheme} />

			<div
				className={`flex gap-6 items-stretch flex-1 min-w-0 overflow-x-hidden transition-[padding-left] duration-220 ${sidebarOpen ? 'pl-65 pr-5 py-5' : 'pl-26 pr-5 py-5'}`}
			>
				{/* Sidebar */}
				<aside className="sidebar-wrapper flex-none transition-all duration-220">
					<div
					className="fixed left-5 top-2 z-600 flex flex-col rounded-xl border border-slate-300 bg-white text-slate-900 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-slate-950 dark:text-white dark:shadow-none"
						style={{ height: 'calc(100vh - 16px)', width: sidebarOpen ? '240px' : '84px', transition: 'all 220ms ease' }}
					>
						{/* Sidebar Content */}
						<div className={`flex items-center gap-2 mb-4 mr-2 ${sidebarOpen ? 'justify-between' : 'justify-center ml-4'}`}>
							<div className="flex items-center gap-3 mt-4">
								{sidebarOpen && (
									<div>
										<div className="ml-2 text-lg font-black text-slate-900 dark:text-accent">SaptCodeX</div>
										<div className="mt-0.5 ml-2 text-xs font-medium tracking-wide text-slate-500 dark:text-gray-500">EngineeringPlacement</div>
									</div>
								)}
							</div>
							<button 
								className="mt-4 -ml-3 cursor-pointer rounded-lg border border-slate-200 bg-transparent p-1.5 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:text-gray-400 dark:hover:border-white/20 dark:hover:bg-white/5"
								onClick={() => setSidebarOpen(!sidebarOpen)}
							>
								{sidebarOpen ? <XIcon /> : <MenuIcon />}
							</button>
						</div>

						{/* Navigation */}
						<nav className={`flex flex-col gap-2.5 mt-1.5 ${sidebarOpen ? '' : 'items-center'}`}>
							<a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item active ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><LayoutDashboard /></span>
								{sidebarOpen && <span className="font-semibold text-blue-700 dark:text-white">Dashboard</span>}
							</a>
							<a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><CircleDot /></span>
								{sidebarOpen && <span className="font-semibold text-slate-700 dark:text-white">Progress</span>}
							</a>
							<a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><BookOpenText /></span>
								{sidebarOpen && <span className="font-semibold text-slate-700 dark:text-white">Roadmap</span>}
							</a>
							<a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><Settings /></span>
								{sidebarOpen && <span className="font-semibold text-slate-700 dark:text-white">Settings</span>}
							</a>
						</nav>

						{/* Bottom Button */}
						<div className="mt-auto pt-4 mb-6 m-4">
							<button className="w-full flex gap-1 items-center justify-center p-2.5 rounded-lg bg-blue-600 font-semibold text-sm border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
								<span className="text-sm"><Rocket /></span>
								{sidebarOpen && <span>Start Practice</span>}
							</button>
						</div>
					</div>
				</aside>

				{/* Main Content */}
				<main className="flex-1 min-w-0 min-h-[calc(100vh-40px)] overflow-y-auto overflow-x-hidden p-0">
					<div className="grid grid-cols-[1fr_320px] gap-5">
						{/* Left Column */}
						<div>
							<section>
								<h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 m-0 mb-2 opacity-100 dark:text-slate-400">
									FOCUS SESSION
								</h3>
								<h1 className="text-4xl font-extrabold m-0 mb-6 -tracking-tight text-slate-900 dark:text-white">
									Today's Roadmap
								</h1>
								<div className="space-y-3">
									{tasks.map((task) => (
										<article 
											key={task.id} 
											className="task-card flex gap-4 rounded-lg border p-4 transition-all text-slate-900 dark:text-white"
										>
											<div className="flex items-start pt-1">
												<input type="checkbox" className="cursor-pointer" />
											</div>
											<div className="flex-1">
												<div className="flex gap-2 mb-2">
													{task.difficulty && (
														<span className="rounded px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-900 dark:bg-blue-500/20 dark:text-blue-300">
															{task.difficulty}
														</span>
													)}
													{task.topic && (
														<span className="rounded px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-900 dark:bg-purple-500/20 dark:text-purple-300">
															{task.topic}
														</span>
													)}
												</div>
												<h4 className="mb-1 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{task.title}</h4>
												<p className="text-sm font-medium leading-6 text-slate-700 dark:text-gray-400">{task.description}</p>
											</div>
											<button 
												className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
													task.status === 'completed'
														? 'bg-green-100 text-green-900 dark:bg-green-500/20 dark:text-green-300'
														: 'bg-blue-100 text-blue-900 hover:bg-blue-200 dark:bg-accent/20 dark:text-accent dark:hover:bg-accent/30'
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
						<aside>
							{/* Alert Section */}
							<section className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-white/10 dark:bg-red-600/40">
								<div className="flex items-center gap-3 mb-3">
									<div className="text-xl text-red-600 dark:text-red-500"><CircleAlert /></div>
									<h4 className="text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-500">URGENT ALERT</h4>
								</div>
									<p className="mb-2 text-sm font-medium text-slate-700 dark:text-gray-300">You are falling behind your goal.</p>
									<p className="mb-4 text-xs font-medium leading-5 text-slate-600 dark:text-gray-500">Complete 2 more problems this week to stay on track for the FAANG interviews.</p>
									<a href="#" className="text-sm font-semibold text-blue-700 hover:underline dark:text-accent">Adjust My Plan →</a>
							</section>

							{/* Insights Section */}
							<section className="mb-6">
								<h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-gray-400">INSIGHTS</h4>
								<div className="grid grid-cols-2 gap-3">
									<div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
										<div className="text-2xl mb-1"><CircleCheckBig /></div>
										<div className="text-lg font-extrabold text-slate-900 dark:text-white">24</div>
										<div className="text-xs font-medium text-slate-600 dark:text-gray-500">Tasks Done</div>
									</div>
									<div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm dark:border-white/10 dark:bg-white/5 dark:shadow-none">
										<div className="text-2xl mb-1"><Flame /></div>
										<div className="text-lg font-extrabold text-slate-900 dark:text-white">92%</div>
										<div className="text-xs font-medium text-slate-600 dark:text-gray-500">Consistency</div>
									</div>
								</div>
							</section>

							{/* Premium Section */}
							<section className="rounded-lg border-4 border-slate-200 bg-white p-4 shadow-sm dark:border-accent/30 dark:bg-linear-to-br dark:from-accent/20 dark:to-accent-deep/20 dark:shadow-none">
								<h4 className="mb-2 text-[15px] font-bold leading-6 tracking-tight text-slate-900 dark:text-white">Master System Design with<br/>SabtCodeX Pro</h4>
								<p className="mb-4 text-xs font-medium leading-5 text-slate-600 dark:text-gray-400">Unlock 52+ case studies from Uber, Netflix, and Amazon on scaling systems.</p>
								<button className="w-full rounded-lg bg-accent py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-accent/90">
									Upgrade Now
								</button>
							</section>
						</aside>
					</div>
				</main>
			</div>
		</div>
	)
}

