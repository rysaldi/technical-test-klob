import { useNavigate } from "react-router-dom";

export default function JobVacancyCard({ job }) {
	const navigate = useNavigate();

	const toDetailJob = () => {
		navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
	};

	return (
		<div className="col" style={{ cursor: "pointer" }} onClick={toDetailJob}>
			<div className="card h-100">
				<img
					src={job.corporateLogo}
					className="card-img-top mx-auto p-3 d-block"
					style={{ width: 200, height: 100, objectFit: "contain" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{job.corporateName}</h5>
					<p className="card-text">{job.positionName}</p>
					<p className="card-text">Status : <p className="badge bg-secondary">{job.status}</p></p>
					<p className="card-text">Gaji : <p className="badge bg-secondary">{job.salaryFrom}-{job.salaryTo}</p></p>
					<p className="card-text">{job.postedDate}</p>
					<button className="btn btn-success form-control">Kirim Lamaran</button>
				</div>
			</div>
		</div>
	);
}
