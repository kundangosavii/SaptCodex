import { Rocket, LayoutDashboard, CircleDot, BookOpenText, Settings } from 'lucide-react'

export default function Sidebar() {
    const sidebarOpen = true
    const collapsedNavItemStyle = undefined

    return (
        <>
            <div
                className="fixed left-5 top-2 rounded-xl flex flex-col z-600 border backdrop-blur-sm bg-white/90 border-slate-200 dark:bg-black/70 dark:border-white/10 shadow-lg"
                style={{ height: 'calc(100vh - 16px)', width: '240px', transition: 'all 220ms ease' }}
            >
                {/* Sidebar Content */}
                <div className={`flex items-center gap-2 mb-4 mr-2 justify-between`}>
                    <div className="flex items-center gap-3 mt-4">
                        {sidebarOpen && (
                            <div>
                                <div className="font-black text-lg text-accent ml-2">SaptCodeX</div>
                                <div className="text-xs mt-0.5 ml-2 text-slate-500 dark:text-gray-500">EngineeringPlacement</div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className={`flex flex-col gap-2.5 mt-1.5`}>
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
                    <button className="bg-blue-500 w-full flex gap-1 items-center justify-center p-2.5 rounded-lg font-semibold text-sm border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow text-black">
                        <span className="text-sm"><Rocket /></span>
                        {sidebarOpen && <span>Start Practice</span>}
                    </button>
                </div>
            </div>

        </>
    )
}


