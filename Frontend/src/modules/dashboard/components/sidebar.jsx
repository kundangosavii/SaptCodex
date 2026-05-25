import { useState } from 'react'
import { Rocket, LayoutDashboard, CircleDot, BookOpenText, Settings, XIcon, MenuIcon } from 'lucide-react'

export default function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(true)

    const collapsedNavItemStyle = sidebarOpen
        ? undefined
        : { width: '48px', height: '48px', justifyContent: 'center', padding: 0, marginInline: 'auto' }

    return (
        <>
            <div
                className="fixed left-5 top-2 rounded-xl flex flex-col z-600 border backdrop-blur-sm bg-white/90 border-slate-200 dark:bg-black/70 dark:border-white/10 shadow-lg"
                style={{ height: 'calc(100vh - 16px)', width: sidebarOpen ? '240px' : '84px', transition: 'all 220ms ease' }}
            >
                {/* Sidebar Content */}
                <div className={`flex items-center gap-2 mb-4 mr-2 ${sidebarOpen ? 'justify-between' : 'justify-center ml-4'}`}>
                    <div className="flex items-center gap-3 mt-4">
                        {sidebarOpen && (
                            <div>
                                <div className="font-black text-lg text-accent ml-2">SaptCodeX</div>
                                <div className="text-xs mt-0.5 ml-2 text-slate-500 dark:text-gray-500">EngineeringPlacement</div>
                            </div>
                        )}
                    </div>
                    <button
                        className="bg-transparent cursor-pointer p-1.5 rounded-lg transition-colors mt-4 -ml-3 border border-slate-200 text-slate-500 hover:border-slate-300 dark:border-white/10 dark:text-gray-400 dark:hover:border-white/20"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <XIcon /> : <MenuIcon />}
                    </button>
                </div>

                {/* Navigation */}
                <nav className={`flex flex-col gap-2.5 mt-1.5 ${sidebarOpen ? '' : 'items-center'}`}>
                    <a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item active ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><LayoutDashboard /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Dashboard</span>}
                    </a>
                    <a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><CircleDot /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Progress</span>}
                    </a>
                    <a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><BookOpenText /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Roadmap</span>}
                    </a>
                    <a href="#" style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><Settings /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Settings</span>}
                    </a>
                </nav>

                {/* Bottom Button */}
                <div className="mt-auto pt-4 mb-6 m-4">
                    <button className="bg-gradient from-blue-600 to-blue-700 w-full flex gap-1 items-center justify-center p-2.5 rounded-lg font-semibold text-sm border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow text-white">
                        <span className="text-sm"><Rocket /></span>
                        {sidebarOpen && <span>Start Practice</span>}
                    </button>
                </div>
            </div>

        </>
    )
}


