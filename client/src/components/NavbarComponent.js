import { Link } from "react-router-dom";

export default function NavbarComponent() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container d-flex justify-content-between">
				<div>
					<Link to="/" className="navbar-brand">
						<img src="https://static.klob.id/img/landing-klobmeter-doors/klobicon.svg" alt="klob"/>
					</Link>
				</div>
				<div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/buat-lowongan-pekerjaan" className="nav-link" aria-current="page">
									Buat Lowongan
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
