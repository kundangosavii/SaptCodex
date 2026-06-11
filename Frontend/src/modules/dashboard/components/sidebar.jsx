import { Rocket, LayoutDashboard, CircleDot, BookOpenText, Settings, X, Menu } from 'lucide-react'

export default function Sidebar({ sidebarOpen = true, onToggle = () => {}, mobileCard = false, onItemClick = () => {} }) {
    const collapsedNavItemStyle = undefined

    if (mobileCard) {
        return (
            <div className="rounded-2xl border border-slate-200/80 bg-white/75 p-3 shadow-xl backdrop-blur-sm dark:border-white/15 dark:bg-black/55">
                <nav className="flex flex-col gap-2">
                    <a href="#" onClick={onItemClick} className="sidebar-nav-item active">
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><LayoutDashboard /></span>
                        <span className="font-semibold text-slate-800 dark:text-white">Dashboard</span>
                    </a>
                    <a href="#" onClick={onItemClick} className="sidebar-nav-item">
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><CircleDot /></span>
                        <span className="font-semibold text-slate-800 dark:text-white">Progress</span>
                    </a>
                    <a href="#" onClick={onItemClick} className="sidebar-nav-item">
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><BookOpenText /></span>
                        <span className="font-semibold text-slate-800 dark:text-white">Roadmap</span>
                    </a>
                    <a href="#" onClick={onItemClick} className="sidebar-nav-item">
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><Settings /></span>
                        <span className="font-semibold text-slate-800 dark:text-white">Settings</span>
                    </a>
                </nav>

                <div className="mt-3">
                    <button className="bg-blue-500 w-full flex gap-1 items-center justify-center p-2.5 rounded-lg font-semibold text-sm border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow text-black">
                        <span className="text-sm"><Rocket /></span>
                        <span>Start Practice</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div
                className="fixed left-5 top-2 rounded-xl flex flex-col z-600 border backdrop-blur-sm bg-white/90 border-slate-200 dark:bg-black/70 dark:border-white/10 shadow-lg"
                style={{
                    height: 'calc(100vh - 16px)',
                    width: sidebarOpen ? '240px' : '76px',
                    transition: 'all 220ms ease',
                }}
            >
                {/* Sidebar Content */}
                <div className="mt-3 mb-4 px-3">
                    <div className={`flex gap-2 ${sidebarOpen ? 'items-start justify-between' : 'items-center justify-center'}`}>
                        <div className="flex min-w-0 items-center gap-3 pt-1">
                            {sidebarOpen && (
                                <div>
                                    <div className="font-black text-lg text-accent ml-2">SaptCodeX</div>
                                    <div className="text-xs mt-0.5 ml-2 text-slate-500 dark:text-gray-500">EngineeringPlacement</div>
                                </div>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={onToggle}
                            className="inline-flex h-10 w-10 mr-3 shrink-0 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                            aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                        >
                            {sidebarOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.75} />}
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2.5 mt-1.5 px-2">
                    <a href="#" onClick={onItemClick} style={collapsedNavItemStyle} className={`sidebar-nav-item active ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><LayoutDashboard /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Dashboard</span>}
                    </a>
                    <a href="#" onClick={onItemClick} style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><CircleDot /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Progress</span>}
                    </a>
                    <a href="#" onClick={onItemClick} style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><BookOpenText /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Roadmap</span>}
                    </a>
                    <a href="#" onClick={onItemClick} style={collapsedNavItemStyle} className={`sidebar-nav-item ${sidebarOpen ? '' : 'sidebar-nav-item-collapsed'}`}>
                        <span className="w-7 h-7 inline-flex items-center justify-center text-base"><Settings /></span>
                        {sidebarOpen && <span className="font-semibold text-slate-800 dark:text-white">Settings</span>}
                    </a>
                </nav>

                {/* Bottom Button */}
                <div className="mt-auto pt-4 mb-6 m-3">
                    <button className="bg-blue-500 w-full flex gap-1 items-center justify-center p-2.5 rounded-lg font-semibold text-sm border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow text-black">
                        <span className="text-sm"><Rocket /></span>
                        {sidebarOpen && <span>Start Practice</span>}
                    </button>
                </div>
            </div>

        </>
    )
}


