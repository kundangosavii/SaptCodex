import { Link } from 'react-router-dom'
import './Auth.css'

const onboardingPillars = [
	{
		title: 'Role Mapping',
		description: 'Set your target role and build a practical plan that fits your timeline.',
	},
	{
		title: 'Focused Sprints',
		description: 'Work through weekly execution blocks with measurable outcomes.',
	},
]

function Signup() {
	return (
		<main className="auth-shell bg-black">

			<section className="auth-grid" aria-label="Signup panel">
				<aside className="auth-brand-panel">
					<p className="auth-eyebrow">Execution Studio</p>
					<h1>
						Create your
						<span> SaptCodeX workspace</span>
					</h1>
					<p className="auth-subcopy">
						Build consistency with a premium workflow for placement prep, from planning to daily
						execution.
					</p>

					<div className="auth-pillar-grid">
						{onboardingPillars.map((pillar) => (
							<article key={pillar.title} className="auth-pillar-card">
								<h2>{pillar.title}</h2>
								<p>{pillar.description}</p>
							</article>
						))}
					</div>
				</aside>

				<article className="auth-form-panel">
					<div className='flex items-center justify-center rounded-lg px-5 py-3'>
                        <h1 className='text-white text-3xl underline'>Signup</h1>
                    </div>

					<form className="auth-form" onSubmit={(event) => event.preventDefault()}>
						<label htmlFor="signup-name">Full name</label>
						<input id="signup-name" type="text" placeholder="Aarav Sharma" autoComplete="name" />

						<label htmlFor="signup-email">Email address</label>
						<input
							id="signup-email"
							type="email"
							placeholder="name@gmail.com"
							autoComplete="email"
						/>

						<label htmlFor="signup-password">Password</label>
						<input
							id="signup-password"
							type="password"
							placeholder="Create a strong password"
							autoComplete="new-password"
						/>

						<label htmlFor="signup-confirm">Confirm password</label>
						<input
							id="signup-confirm"
							type="password"
							placeholder="Repeat password"
							autoComplete="new-password"
						/>

						<label className="auth-consent" htmlFor="signup-consent">
							<input id="signup-consent" type="checkbox" />
							<span>I agree to the terms and privacy policy.</span>
						</label>

						<button type="submit">Create account</button>
					</form>

					<p className="auth-helper-copy">
						Already have an account? <Link to="/signin">Sign in</Link>
					</p>
				</article>
			</section>
		</main>
	)
}

export default Signup
