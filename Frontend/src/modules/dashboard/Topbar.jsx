import React from 'react'
import { BellRing, Zap } from 'lucide-react'

export default function Topbar({
  user = { name: 'Arjun', avatar: null },
  streak = 5,
  progress = 40,
  sidebarOpen = true,
  theme = 'dark',
  onThemeToggle = () => {},
}) {
  const shiftClass = sidebarOpen
    ? 'ml-[276px] w-[calc(100%-300px)]'
    : 'ml-[109px] w-[calc(100%-134px)]'
  const themeLabel = theme === 'dark' ? 'Light Mode' : 'Dark Mode'

  return (
    <div
      className={`mx-6 mt-4 rounded-xl border border-(--dashboard-border) bg-(--dashboard-panel) px-6 py-4 text-(--dashboard-text) transition-[margin-left,width] duration-200 max-[900px]:mx-3 max-[900px]:w-[calc(100%-24px)] ${shiftClass}`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="space-y-1">
            <div className="text-lg font-bold text-(--dashboard-text)">Good Morning, {user.name}</div>
            <div className="text-sm text-(--dashboard-muted)">Stay focused, you're doing great today.</div>
          </div>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-(--dashboard-border) bg-(--dashboard-panel-soft) px-3 py-2 text-sm font-semibold whitespace-nowrap text-(--dashboard-text) transition-colors hover:bg-(--dashboard-hover)"
          onClick={onThemeToggle}
          type="button"
          aria-label="Toggle dashboard theme"
        >
          {themeLabel}
        </button>

        <div className="flex items-center gap-4 max-[900px]:flex-wrap">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--dashboard-border) bg-(--dashboard-panel-soft) px-3 py-1.5">
            <span className="text-sm">🔥</span>
            <span className="text-sm font-semibold text-(--dashboard-text)">{streak} Day Streak</span>
          </div>

          <div className="w-56 max-[900px]:hidden">
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-(--dashboard-muted)">
              Placement Goal
            </div>
            <div className="h-2 overflow-hidden rounded-full border border-(--dashboard-border) bg-(--dashboard-panel-soft)">
              <div
                className="h-full rounded-full bg-linear-to-r from-[#3b82f6] to-[#1e40af]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-(--dashboard-text) transition-colors hover:bg-(--dashboard-hover)"
            aria-label="notifications"
            type="button"
          >
            <BellRing className="h-4 w-4" />
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-(--dashboard-text) transition-colors hover:bg-(--dashboard-hover)"
            aria-label="quick-actions"
            type="button"
          >
            <Zap className="h-4 w-4" />
          </button>
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-(--dashboard-panel-soft) text-(--dashboard-text)">
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="text-sm font-bold">AB</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
