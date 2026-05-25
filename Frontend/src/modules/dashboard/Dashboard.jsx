import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import Topbar from './Topbar.jsx'
import Onboarding from './Onboarding.jsx'
import Sidebar from './components/Sidebar.jsx'

import { LayoutDashboard, CircleDot, BookOpenText, Settings, Rocket, CircleAlert, CircleCheckBig, Flame } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

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
	const [isOnboarded, setIsOnboarded] = useState(() => {
		if (typeof window === 'undefined') {
			return false
		}
		return JSON.parse(window.localStorage.getItem('isOnboarded') || 'false')
	})

	const { theme, toggleTheme } = useTheme()
	const isDark = theme === 'dark'

	useEffect(() => {
		window.localStorage.setItem('isOnboarded', JSON.stringify(isOnboarded))
	}, [isOnboarded])

	const handleOnboardingComplete = () => {
		setIsOnboarded(true)
	}

	// toggleTheme provided by ThemeContext

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
			{!isOnboarded ? (
				<Onboarding onComplete={handleOnboardingComplete} theme={theme} />
			) : (
				<>
					<Topbar sidebarOpen={sidebarOpen} theme={theme} onThemeToggle={toggleTheme} />

					<div
						className={`flex gap-6 items-stretch flex-1 min-w-0 overflow-x-hidden transition-[padding-left] duration-220 ${sidebarOpen ? 'pl-65 pr-5 py-5' : 'pl-26 pr-5 py-5'}`}
					>
						{/* Sidebar */}
						<aside className="sidebar-wrapper flex-none transition-all duration-220">
							<Sidebar/>
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
								<h1 className={`${isDark ? 'text-white' : 'text-slate-900'} text-4xl font-bold m-0 mb-6 -tracking-tight`}>
									Today's Roadmap
								</h1>
								<div className="space-y-3">
									{tasks.map((task) => (
										<article 
											key={task.id} 
										className={`task-card ${task.status} flex gap-4 p-4 rounded-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'} transition-all ${isDark ? 'text-white' : 'text-slate-900'}`}
										>
											<div className="flex items-start pt-1">
													<input type="checkbox" className={`cursor-pointer appearance-none w-5 h-5 rounded border-2 ${isDark ? 'bg-gray-800 border-gray-600 checked:bg-blue-600 checked:border-blue-600' : 'bg-white border-slate-300 checked:bg-blue-600 checked:border-blue-600'} transition-colors`} />
											</div>
											<div className="flex-1">
												<div className="flex gap-2 mb-2">
													{task.difficulty && (
														<span className={`px-2 py-1 text-xs font-medium rounded ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
															{task.difficulty}
														</span>
													)}
													{task.topic && (
														<span className={`px-2 py-1 text-xs font-medium rounded ${isDark ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-100 text-purple-700'}`}>
															{task.topic}
														</span>
													)}
												</div>
												<h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{task.title}</h4>
												<p className={`text-sm ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>{task.description}</p>
											</div>
											<button 
												className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
													task.status === 'completed' 
														? (isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-100 text-green-700') 
														: (isDark ? 'bg-accent/20 text-accent hover:bg-accent/30' : 'bg-blue-100 text-blue-700 hover:bg-blue-200')
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
						<aside className={`space-y-6 ${isDark ? '' : ''}`}>
							{/* Alert Section */}
									<section className={`rounded-lg p-4 mb-6 border-2 ${isDark ? 'bg-red-600/40 border-red-500/30' : 'bg-red-50 border-red-200'}`}>
								<div className="flex items-center gap-3 mb-3">
									<div className={`text-xl ${isDark ? 'text-red-500' : 'text-red-600'}`}><CircleAlert /></div>
									<h4 className={`font-semibold text-sm uppercase tracking-wide ${isDark ? 'text-red-500' : 'text-red-600'}`}>URGENT ALERT</h4>
								</div>
								<p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>You are falling behind your goal.</p>
								<p className={`text-xs mb-4 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>Complete 2 more problems this week to stay on track for the FAANG interviews.</p>
								<a href="#" className="text-accent text-sm font-medium hover:underline">Adjust My Plan →</a>
							</section>

							{/* Insights Section */}
									<section className={`mb-6 rounded-lg p-4 border-2 ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
										<h4 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>INSIGHTS</h4>
										<div className="grid grid-cols-2 gap-3">
											<div className={`rounded-lg p-3 text-center ${isDark ? 'bg-white/5 border-2 border-white/10' : 'bg-white border-2 border-slate-200 shadow-sm'}`}>
										<div className="text-2xl mb-1"><CircleCheckBig /></div>
										<div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>24</div>
										<div className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>Tasks Done</div>
									</div>
									<div className={`rounded-lg p-3 text-center ${isDark ? 'bg-white/5 border-2 border-white/10' : 'bg-white border-2 border-slate-200 shadow-sm'}`}>
										<div className="text-2xl mb-1"><Flame /></div>
										<div className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>92%</div>
										<div className={`text-xs ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>Consistency</div>
									</div>
								</div>
							</section>

							{/* Premium Section */}
							<section className={`rounded-lg p-4 border-4 ${isDark ? 'bg-gradient from-accent/20 to-accent-deep/20 border-accent/30' : 'bg-slate-50 border-slate-300'}`}>
								<h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Master System Design with<br/>SabtCodeX Pro</h4>
								<p className={`text-xs mb-4 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Unlock 52+ case studies from Uber, Netflix, and Amazon on scaling systems.</p>
								<button className={`w-full font-bold py-2 px-4 rounded-lg transition-colors text-sm ${isDark ? 'bg-accent text-white hover:bg-accent/90' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
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