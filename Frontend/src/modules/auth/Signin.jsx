import { Link } from 'react-router-dom'
import './Auth.css'

function Signin() {
	return (
		<main className="auth-shell">

			<section className="auth-grid" aria-label="Signin panel">
				<aside className="auth-brand-panel">
					<p className="auth-eyebrow">Execution Studio</p>
					<h1>
						Welcome back to
						<span> SaptCodeX</span>
					</h1>
					<p className="auth-subcopy">
						Resume your preparation flow and pick up today&apos;s execution plan in seconds.
					</p>

					<div className="auth-pillar-grid">
						<article className="auth-pillar-card">
							<h2>Daily Momentum</h2>
							<p>Continue where you left off with prioritized tasks and checkpoints.</p>
						</article>
						<article className="auth-pillar-card">
							<h2>Progress Clarity</h2>
							<p>Track strengths, close gaps, and keep interview readiness measurable.</p>
						</article>
					</div>
				</aside>

				<article className="auth-form-panel">
					<div className='flex items-center justify-center rounded-lg px-5 py-3'>
                        <h1 className='text-white text-3xl underline'>Signin</h1>
                    </div>

					<form className="auth-form" onSubmit={(event) => event.preventDefault()}>
						<label htmlFor="signin-email">Email address</label>
						<input
							id="signin-email"
							type="email"
							placeholder="example@gmail.com"
							autoComplete="email"
						/>

						<div className="auth-password-row">
							<label htmlFor="signin-password">Password</label>
							<a href="#forgot">Forgot password?</a>
						</div>
						<input
							id="signin-password"
							type="password"
							placeholder="Enter your password"
							autoComplete="current-password"
						/>

						<button type="submit">Login to dashboard</button>
					</form>

					<p className="auth-helper-copy">
						New here? <Link to="/signup">Create account</Link>
					</p>
				</article>
			</section>
		</main>
	)
}

export default Signin
