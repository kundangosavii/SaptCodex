import { Moon, Sun } from 'lucide-react'

const footerLinks = [
	{ label: 'Privacy Policy', href: '#privacy-policy' },
	{ label: 'Terms of Service', href: '#terms-of-service' },
	{ label: 'Github', href: '#github' },
	{ label: 'Discord', href: '#discord' },
]

function Footer() {

	return (
		<footer className="border-t border-slate-200 bg-slate-50 px-6 py-7 text-slate-900 dark:border-white/10 dark:bg-black dark:text-slate-100 md:px-10">
			<div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-start">
				<div>
					<p className="font-nav text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-100">SaptCodeX</p>
					<p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-500">
						&copy; 2026 SaptCodeX. The Architectural Void.
						<br />
						Elevating the standard of tech education.
					</p>
				</div>

				<div className="flex flex-col gap-4 pt-1 md:items-end">

					<nav aria-label="Footer links" className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
					{footerLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="font-nav text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-500 dark:hover:text-slate-300"
						>
							{link.label}
						</a>
					))}
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer
