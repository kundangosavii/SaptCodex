import React from 'react'
import './Topbar.css'
import { BellRing, Zap } from 'lucide-react'

export default function Topbar({ user = { name: 'Arjun', avatar: null }, streak = 5, progress = 40, sidebarOpen = true }) {
  const shiftClass = sidebarOpen ? 'shift-open' : 'shift-closed'
  return (
    <div className={`topbar ${shiftClass}`}>
      <div className="topbar-inner">
        <div className="topbar-left">
          <div className="greeting">
            <div className="greeting-title">Good Morning, {user.name}</div>
            <div className="greeting-sub">Stay focused, you're doing great today.</div>
          </div>
        </div>

        <div className="topbar-center">
          <div className="streak">
            <span className="streak-emoji">🔥</span>
            <span className="streak-text">{streak} Day Streak</span>
          </div>

          <div className="placement">
            <div className="placement-label">PLACEMENT GOAL</div>
            <div className="placement-bar">
              <div className="placement-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="topbar-right">
          <button className="icon-btn" aria-label="notifications"><BellRing /></button>
          <button className="icon-btn" aria-label="quick-actions"><Zap /></button>
          <div className="avatar">
            {user.avatar ? <img src={user.avatar} alt="avatar" /> : <div className="avatar-fallback">AB</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
