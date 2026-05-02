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
			    <div className={`dashboard-root ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
				    <Topbar sidebarOpen={sidebarOpen} />

			<div className="dashboard-container">
				<aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
					<div className="sidebar-top">
						<div className="brand">
							{sidebarOpen && (
								<div>
									<div className="brand-title">SaptCodeX</div>
									<div className="brand-sub">EngineeringPlacement</div>
								</div>
							)}
						</div>
                        <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            {sidebarOpen ? <XIcon /> : <MenuIcon />}
                        </button>
					</div>

					<nav className="sidebar-nav">
						<a href="#" className="nav-item active">
							<span className="nav-icon"><LayoutDashboard /></span>
							{sidebarOpen && <span className="nav-text">Dashboard</span>}
						</a>
						<a href="#" className="nav-item">
							<span className="nav-icon"><CircleDot /></span>
							{sidebarOpen && <span className="nav-text">Progress</span>}
						</a>
						<a href="#" className="nav-item">
							<span className="nav-icon"><BookOpenText /></span>
							{sidebarOpen && <span className="nav-text">Roadmap</span>}
						</a>
						<a href="#" className="nav-item">
							<span className="nav-icon"><Settings /></span>
							{sidebarOpen && <span className="nav-text">Settings</span>}
						</a>
					</nav>

					<div className="sidebar-bottom">
						<button className="start-practice">
							<span className="rocket"><Rocket /></span>
							{sidebarOpen && <span>Start Practice</span>}
						</button>
					</div>
				</aside>

				<main className="main-content">
					<div className="content-wrapper">
						<div className="left-column">
							<section className="roadmap-section">
								<h3 className='section-title-top'>FOCUS SESSION</h3>
								<h1 className="section-title">Today's Roadmap</h1>
								<div className="tasks-container">
									{tasks.map((task) => (
										<article key={task.id} className={`task-card ${task.status}`}>
											<div className="task-checkbox"><input type="checkbox" /></div>
											<div className="task-content">
												<div className="task-meta">
													{task.difficulty && <span className="difficulty-badge">{task.difficulty}</span>}
													{task.topic && <span className="topic-badge">{task.topic}</span>}
												</div>
												<h4 className="task-title">{task.title}</h4>
												<p className="task-description">{task.description}</p>
											</div>
											<button className={`task-action ${task.status}`}>{task.action}</button>
										</article>
									))}
								</div>
							</section>
						</div>

						<aside className="right-column">
							<section className="alert-section">
								<div className="alert-header"><div className="alert-icon">⚠️</div><h4>URGENT ALERT</h4></div>
								<p>You are falling behind your goal.</p>
								<p className="alert-subtext">Complete 2 more problems this week to stay on track for the FAANG interviews.</p>
								<a href="#" className="alert-link">Adjust My Plan →</a>
							</section>

							<section className="insights-section">
								<h4 className="insights-title">INSIGHTS</h4>
								<div className="insights-grid">
									<div className="insight-card"><div className="insight-icon">✔️</div><div className="insight-value">24</div><div className="insight-label">Tasks Done</div></div>
									<div className="insight-card"><div className="insight-icon">⚡</div><div className="insight-value">92%</div><div className="insight-label">Consistency</div></div>
								</div>
							</section>

							<section className="premium-section">
								<h4>Master System Design with<br/>SabtCodeX Pro</h4>
								<p>Unlock 52+ case studies from Uber, Netflix, and Amazon on scaling systems.</p>
								<button className="upgrade-btn">Upgrade Now</button>
							</section>
						</aside>
					</div>
				</main>
			</div>
		</div>
	)
}

