export default function JobVacancyCard({ job }) {
	return (
		<div className="col">
			<div className="card h-100">
				<img src={job.corporateLogo} className="card-img-top mx-auto p-3 d-block" style={{width: 200, objectFit: "contain"}}/>
				<div className="card-body">
					<h5 className="card-title">{job.corporateName}</h5>
					<p className="card-text">{job.positionName}</p>
          <button className="btn btn-success">Kirim Lamaran</button>
				</div>
			</div>
		</div>
	);
}
