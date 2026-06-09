import React from 'react'

function renderSectionItems(items, emptyLabel = 'None') {
	if (!items || items.length === 0) {
		return (
			<span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
				{emptyLabel}
			</span>
		)
	}

	return items.map((item) => (
		<span
			key={item}
			className={`rounded-full px-2.5 py-1 text-[11px] font-medium leading-none ${
				item.endsWith(':')
					? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950'
					: 'bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200'
			}`}
		>
			{item}
		</span>
	))
}

function Section({ label, items }) {
	return (
		<div className="flex items-start gap-2">
			<span className="mt-0.5 w-20 shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
				{label}
			</span>
			<div className="flex flex-1 flex-wrap gap-1.5">{renderSectionItems(items)}</div>
		</div>
	)
}

export default function TaskCard({ task }) {
	return (
		<article
			className={`task-card ${task.status} flex gap-4 rounded-lg border p-4 text-slate-900 transition-all dark:text-white ${task.className || ''}`}
		>
			<div className="flex items-start pt-1">
				<input
					type="checkbox"
					className="h-5 w-5 cursor-pointer appearance-none rounded border-2 border-slate-300 bg-white transition-colors checked:border-blue-600 checked:bg-blue-600 dark:border-gray-600 dark:bg-gray-800"
				/>
			</div>

			<div className="flex-1 min-w-0">
				<div className="mb-2 flex flex-wrap gap-2">
					{task.difficulty && (
						<span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
							{task.difficulty}
						</span>
					)}
					{task.topic && (
						<span className="rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
							{task.topic}
						</span>
					)}
				</div>

				<h4 className="mb-2 font-semibold text-slate-900 dark:text-white">{task.title}</h4>

				<div className="space-y-2.5 text-sm text-slate-600 dark:text-gray-400">
					<Section label="Tasks" items={task.tasks} />
					<Section label="Constraints" items={task.constraints} />
					<Section label="Output" items={task.output} />
				</div>
			</div>

			<button
				className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all ${
					task.status === 'completed'
						? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300'
						: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-accent/20 dark:text-accent dark:hover:bg-accent/30'
				}`}
			>
				{task.action}
			</button>
		</article>
	)
}