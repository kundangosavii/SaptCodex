import React, { useState } from 'react'
import './Dashboard.css'
import Topbar from './Topbar.jsx'

import { LayoutDashboard, CircleDot, BookOpenText, Settings, Rocket } from 'lucide-react'

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

	const tasks = [
		{ id: 1, difficulty: 'Medium', title: 'Solve 3 Array Problems', description: 'Focus on Two Pointers and Sliding Window techniques.', status: 'todo', action: 'Start' },
		{ id: 2, difficulty: 'Medium', topic: 'Topic: Architectures', title: 'Review System Design Basics', description: 'Consistency, Availability, and Partition Tolerance (CAP Theorem).', status: 'todo', action: 'Open Link' },
		{ id: 3, difficulty: 'Advanced', title: 'SQL Performance Tuning', description: 'Master indexing and query optimization.', status: 'completed', action: 'Completed' },
	]

	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
			<Topbar sidebarOpen={sidebarOpen} />

			<div className="flex gap-6 items-stretch flex-1 p-5 transition-[padding-left] duration-220">
				{/* Sidebar */}
				<aside className={`sidebar-wrapper ${sidebarOpen ? 'w-60' : 'w-20'} transition-all duration-220`}>
					<div className="fixed left-5 top-2 rounded-xl flex flex-col z-600" style={{ height: 'calc(100vh - 16px)', width: sidebarOpen ? '240px' : '84px', transition: 'all 220ms ease' }}>
						{/* Sidebar Content */}
						<div className={`flex items-center gap-2 mb-4 mr-2 ${sidebarOpen ? 'justify-between' : 'justify-center ml-4'}`}>
							<div className="flex items-center gap-3 mt-4">
								{sidebarOpen && (
									<div>
										<div className="font-black text-lg text-accent ml-2">SaptCodeX</div>
										<div className="text-xs text-gray-500 mt-0.5 ml-2">EngineeringPlacement</div>
									</div>
								)}
							</div>
							<button 
								className="bg-transparent border border-white/10 text-gray-400 cursor-pointer p-1.5 rounded-lg hover:border-white/20 transition-colors mt-4 -ml-3"
								onClick={() => setSidebarOpen(!sidebarOpen)}
							>
								{sidebarOpen ? <XIcon /> : <MenuIcon />}
							</button>
						</div>

						{/* Navigation */}
						<nav className={`flex flex-col gap-2.5 mt-1.5 ${sidebarOpen ? '' : 'items-center'}`}>
							<a href="#" className={`sidebar-nav-item active ${sidebarOpen ? '' : 'w-12 h-12 justify-center p-0!'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><LayoutDashboard /></span>
								{sidebarOpen && <span className="font-semibold">Dashboard</span>}
							</a>
							<a href="#" className={`sidebar-nav-item ${sidebarOpen ? '' : 'w-12 h-12 justify-center p-0'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><CircleDot /></span>
								{sidebarOpen && <span className="font-semibold">Progress</span>}
							</a>
							<a href="#" className={`sidebar-nav-item ${sidebarOpen ? '' : 'w-12 h-12 justify-center p-0'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><BookOpenText /></span>
								{sidebarOpen && <span className="font-semibold">Roadmap</span>}
							</a>
							<a href="#" className={`sidebar-nav-item ${sidebarOpen ? '' : 'w-12 h-12 justify-center p-0'}`}>
								<span className="w-7 h-7 inline-flex items-center justify-center text-base"><Settings /></span>
								{sidebarOpen && <span className="font-semibold">Settings</span>}
							</a>
						</nav>

						{/* Bottom Button */}
						<div className="mt-auto pt-4">
							<button className="w-full flex gap-2.5 items-center justify-center p-3.5 rounded-xl from-accent to-accent-deep text-teal-900 font-black border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
								<span className="text-base"><Rocket /></span>
								{sidebarOpen && <span>Start Practice</span>}
							</button>
						</div>
					</div>
				</aside>

				{/* Main Content */}
				<main className="flex-1 min-h-[calc(100vh-40px)] overflow-auto p-6">
					<div className="grid grid-cols-[1fr_320px] gap-5">
						{/* Left Column */}
						<div>
							<section>
								<h3 className="text-xs font-semibold uppercase tracking-widest text-accent m-0 mb-2 opacity-90">
									FOCUS SESSION
								</h3>
								<h1 className="text-4xl font-bold text-white m-0 mb-6 -tracking-tight">
									Today's Roadmap
								</h1>
								<div className="space-y-3">
									{tasks.map((task) => (
										<article 
											key={task.id} 
											className={`task-card ${task.status} flex gap-4 p-4 rounded-lg border transition-all`}
										>
											<div className="flex items-start pt-1">
												<input type="checkbox" className="cursor-pointer" />
											</div>
											<div className="flex-1">
												<div className="flex gap-2 mb-2">
													{task.difficulty && (
														<span className="px-2 py-1 text-xs font-medium rounded bg-blue-500/20 text-blue-300">
															{task.difficulty}
														</span>
													)}
													{task.topic && (
														<span className="px-2 py-1 text-xs font-medium rounded bg-purple-500/20 text-purple-300">
															{task.topic}
														</span>
													)}
												</div>
												<h4 className="font-semibold text-white mb-1">{task.title}</h4>
												<p className="text-sm text-gray-400">{task.description}</p>
											</div>
											<button 
												className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
													task.status === 'completed' 
														? 'bg-green-500/20 text-green-300' 
														: 'bg-accent/20 text-accent hover:bg-accent/30'
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
							<section className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
								<div className="flex items-center gap-3 mb-3">
									<div className="text-xl">⚠️</div>
									<h4 className="font-semibold text-sm uppercase tracking-wide">URGENT ALERT</h4>
								</div>
								<p className="text-sm text-gray-300 mb-2">You are falling behind your goal.</p>
								<p className="text-xs text-gray-500 mb-4">Complete 2 more problems this week to stay on track for the FAANG interviews.</p>
								<a href="#" className="text-accent text-sm font-medium hover:underline">Adjust My Plan →</a>
							</section>

							{/* Insights Section */}
							<section className="mb-6">
								<h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">INSIGHTS</h4>
								<div className="grid grid-cols-2 gap-3">
									<div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
										<div className="text-2xl mb-1">✔️</div>
										<div className="font-bold text-lg text-white">24</div>
										<div className="text-xs text-gray-500">Tasks Done</div>
									</div>
									<div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
										<div className="text-2xl mb-1">⚡</div>
										<div className="font-bold text-lg text-white">92%</div>
										<div className="text-xs text-gray-500">Consistency</div>
									</div>
								</div>
							</section>

							{/* Premium Section */}
							<section className= "from-accent/20 to-accent-deep/20 border border-accent/30 rounded-lg p-4">
								<h4 className="font-semibold mb-2">Master System Design with<br/>SabtCodeX Pro</h4>
								<p className="text-xs text-gray-400 mb-4">Unlock 52+ case studies from Uber, Netflix, and Amazon on scaling systems.</p>
								<button className="w-full bg-accent text-black font-bold py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm">
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

