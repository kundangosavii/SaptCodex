import React from 'react'

function groupItems(items) {
	const groups = []
	let currentGroup = null

	for (const item of items || []) {
		if (item.endsWith(':')) {
			currentGroup = { heading: item.slice(0, -1), items: [] }
			groups.push(currentGroup)
			continue
		}

		if (!currentGroup) {
			currentGroup = { heading: null, items: [] }
			groups.push(currentGroup)
		}

		currentGroup.items.push(item)
	}

	return groups
}

function renderSectionItems(items, emptyLabel = 'None') {
	if (!items || items.length === 0) {
		return (
			<span className="task-card-empty">
				{emptyLabel}
			</span>
		)
	}

	return groupItems(items).map((group, groupIndex) => (
		<div key={`${group.heading || 'group'}-${groupIndex}`} className="task-card-group">
			{group.heading && <div className="task-card-group-heading">{group.heading}</div>}
			<div className="task-card-group-items">
				{group.items.length === 0 ? (
					<span className="task-card-empty">None</span>
				) : (
					group.items.map((item) => (
						<div key={item} className="task-card-item">
							<span className="task-card-bullet" />
							<span className="task-card-item-text">{item}</span>
						</div>
					))
				)}
			</div>
		</div>
	))
}

function Section({ label, items }) {
	return (
		<div className="task-card-section">
			<span className="task-card-section-label">
				{label}
			</span>
			<div className="task-card-section-body">{renderSectionItems(items)}</div>
		</div>
	)
}

export default function TaskCard({ task }) {
	return (
		<article
			className={`task-card ${task.status} ${task.className || ''}`}
		>
			<div className="task-card-checkbox-wrap">
				<input
					type="checkbox"
					className="task-card-checkbox"
				/>
			</div>

			<div className="task-card-main">
				<div className="task-card-badges">
					{task.difficulty && (
						<span className="task-card-badge task-card-badge-primary">
							{task.difficulty}
						</span>
					)}
					{task.topic && (
						<span className="task-card-badge task-card-badge-secondary">
							{task.topic}
						</span>
					)}
				</div>

				<h4 className="task-card-title">{task.title}</h4>

				<div className="task-card-sections">
					<Section label="Tasks" items={task.tasks} />
					<Section label="Constraints" items={task.constraints} />
					<Section label="Output" items={task.output} />
				</div>
			</div>

			<button
				className={`task-card-action ${
					task.status === 'completed'
						? 'task-card-action-completed'
						: 'task-card-action-active'
				}`}
			>
				{task.action}
			</button>
		</article>
	)
}