import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Topbar from './Topbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import TaskCard from './components/TaskCard.jsx'

import { CircleAlert, CircleCheckBig, Flame } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { getUser } from '../../api/user'
import { getTask } from '../../api/task'

function normalizeTaskBlock(task, index) {
	const title = task?.tasks?.[0]?.replace(/:$/, '') || `Task ${index + 1}`

	return {
		id: `${index}-${title}`,
		title,
		tasks: task?.tasks || [],
		constraints: task?.constraints || [],
		output: task?.output || [],
		status: 'active',
		action: task?.output?.[0] || 'Review task',
	}
}

export default function Dashboard() {
	const [isOnboarded, setIsOnboarded] = useState(false)
	const [user, setUser] = useState(null)
	const [tasks, setTasks] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const sidebarOpen = true

	const { theme, toggleTheme } = useTheme()

	const fetchUser = async () => {
			try {
				const response = await getUser()
				const userData = response.data?.result?.data || null

				setUser(userData)
				if (typeof userData?.isOnborded === 'boolean') {
					setIsOnboarded(userData.isOnborded)
				}
			} catch (error) {
				console.error('Failed to load user:', error.response ? error.response.data : error.message)
			} finally {
				setIsLoading(false)
			}
	}

	useEffect(() => {
		fetchUser()
		fetchTasks()
	}, [])

	useEffect(() => {
		window.localStorage.setItem('isOnboarded', JSON.stringify(isOnboarded))
	}, [isOnboarded])

	const handleOnboardingComplete = async () => {
		await fetchUser()
		setIsOnboarded(true)
	}

	const fetchTasks = async () => {
		try{
			const response = await getTask()
			const tasksData = response.data?.data || []
			setTasks(tasksData.map(normalizeTaskBlock))
		} catch (error) {
			console.error('Failed to load tasks:', error.response ? error.response.data : error.message)
			setTasks([])
		}
	}

	return (
		<div className="dashboard-shell flex min-h-screen flex-col overflow-x-hidden">
				<>
					<Topbar userData={user} sidebarOpen={sidebarOpen} theme={theme} onThemeToggle={toggleTheme} />

					<div className="flex gap-6 items-stretch flex-1 min-w-0 overflow-x-hidden transition-[padding-left] duration-220 pl-65 pr-5 py-5">
						<aside className="sidebar-wrapper flex-none transition-all duration-220">
							<Sidebar />
						</aside>

						<main className="flex-1 min-w-0 min-h-[calc(100vh-40px)] overflow-y-auto overflow-x-hidden p-0">
							<div className="grid grid-cols-[1fr_320px] gap-5">
								<div>
									<section>
										<h3 className="text-xs font-semibold uppercase tracking-widest text-accent m-0 mb-2 opacity-90">
											FOCUS SESSION
										</h3>
										<h1 className="text-slate-900 dark:text-white text-4xl font-bold m-0 mb-6 -tracking-tight">
											Today's Roadmap
										</h1>
										<div className="space-y-3">
											{tasks.length > 0 ? (
												tasks.map((task) => <TaskCard key={task.id} task={task} />)
											) : (
												<p className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
													No tasks available for today.
												</p>
											)}
										</div>
									</section>
								</div>

								<aside className="space-y-6">
									<section className="rounded-lg p-4 mb-6 border-2 bg-red-50 border-red-200 dark:bg-red-600/40 dark:border-red-500/30">
										<div className="flex items-center gap-3 mb-3">
											<div className="text-xl text-red-600 dark:text-red-500"><CircleAlert /></div>
											<h4 className="font-semibold text-sm uppercase tracking-wide text-red-600 dark:text-red-500">URGENT ALERT</h4>
										</div>
										<p className="text-sm mb-2 text-slate-700 dark:text-gray-300">You are falling behind your goal.</p>
										<p className="text-xs mb-4 text-slate-500 dark:text-gray-500">Complete 2 more problems this week to stay on track for the FAANG interviews.</p>
										<a href="#" className="text-accent text-sm font-medium hover:underline">Adjust My Plan →</a>
									</section>

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

									<section className="rounded-lg p-4 border-4 bg-slate-50 border-slate-300 dark:bg-slate-950/80 dark:border-cyan-400/20 dark:shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_18px_40px_rgba(0,0,0,0.35)]">
										<h4 className="font-semibold mb-2 text-slate-900 dark:text-cyan-50">Master System Design with<br />SabtCodeX Pro</h4>
										<p className="text-xs mb-4 text-slate-600 dark:text-slate-300">Unlock 52+ case studies from Uber, Netflix, and Amazon on scaling systems.</p>
										<button className="w-full font-bold py-2 px-4 rounded-lg transition-colors text-sm bg-blue-600 text-white hover:bg-blue-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
											Upgrade Now
										</button>
									</section>
								</aside>
							</div>
						</main>
					</div>
				</>
		</div>
	)
}
