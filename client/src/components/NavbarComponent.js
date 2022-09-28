export default function NavbarComponent() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container">
				<a className="navbar-brand" href="#">
					Klob
				</a>
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
				<div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" aria-current="page" href="#">
								Buat Lowongan
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
