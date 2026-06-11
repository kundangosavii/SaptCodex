import React from 'react'
import { BellRing, Zap } from 'lucide-react'

export default function Topbar({
  userData,
  streak,
  progress,
  sidebarOpen = true,
  theme = 'dark',
  onThemeToggle = () => {},
}) {
  const shiftClass = sidebarOpen
    ? 'ml-3 w-[calc(100%-24px)] md:ml-[276px] md:w-[calc(100%-300px)]'
    : 'ml-3 w-[calc(100%-24px)] md:ml-[109px] md:w-[calc(100%-134px)]'
  const themeLabel = theme === 'dark' ? 'Light Mode' : 'Dark Mode'
  const displayName = userData?.fullname || userData?.name || 'User'
  const avatarInitial = displayName?.trim()?.charAt(0)?.toUpperCase() || 'U'

  return (
    <div
      className={`mx-6 mt-4 h-20 rounded-xl border border-(--dashboard-border) bg-(--dashboard-panel) px-4 text-(--dashboard-text) transition-[margin-left,width] duration-200 max-[900px]:mx-3 max-[900px]:w-[calc(100%-24px)] md:h-20 md:px-6 ${shiftClass}`}
    >
      <div className="flex h-full items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="space-y-1">
            <div className="text-sm font-bold leading-tight text-(--dashboard-text) md:text-lg">Good Morning, {displayName}</div>
            <div className="text-xs leading-tight text-(--dashboard-muted) md:text-sm">Stay focused, you're doing great today.</div>
          </div>
        </div>

        <button
          className="hidden shrink-0 items-center justify-center rounded-full border border-(--dashboard-border) bg-(--dashboard-panel-soft) px-3 py-2 text-sm font-semibold whitespace-nowrap text-(--dashboard-text) transition-colors hover:bg-(--dashboard-hover) md:inline-flex"
          onClick={onThemeToggle}
          type="button"
          aria-label="Toggle dashboard theme"
        >
          {themeLabel}
        </button>

        <div className="hidden items-center gap-3 md:flex md:gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-(--dashboard-border) bg-(--dashboard-panel-soft) px-3 py-1.5">
            <span className="text-sm">🔥</span>
            <span className="text-sm font-semibold text-(--dashboard-text)">{streak} Day Streak</span>
          </div>

          <div className="hidden w-56 lg:block">
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

        <div className="hidden items-center gap-2 sm:gap-3 md:flex">
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
            {userData?.avatar ? (
              <img src={userData.avatar} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="text-sm font-bold">{avatarInitial}</div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center md:hidden">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-(--dashboard-panel-soft) text-(--dashboard-text)">
            {userData?.avatar ? (
              <img src={userData.avatar} alt="avatar" className="h-full w-full object-cover" />
            ) : (
              <div className="text-sm font-bold">{avatarInitial}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
