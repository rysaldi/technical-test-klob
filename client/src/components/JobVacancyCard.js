import { useNavigate } from "react-router-dom";

export default function JobVacancyCard({ job }) {
	const navigate = useNavigate();

	const toDetailJob = () => {
		navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
	};

	return (
		<div className="col">
			<div className="card h-100" style={{ cursor: "pointer" }} onClick={toDetailJob}>
				<img
					src={job.corporateLogo}
					className="card-img-top mx-auto p-3 d-block"
					style={{ width: 200, height: 100, objectFit: "contain" }}
          alt="company logo"
				/>
				<div className="card-body">
					<h5 className="card-title">{job.corporateName}</h5>
					<p className="card-text">{job.positionName}</p>
					<p className="card-text mb-0 ">
						Status : <p className="badge bg-secondary">{job.status}</p>
					</p>
					<p className="card-text mb-0">
						Gaji :{" "}
						<p className="badge bg-secondary">
							{job.salaryFrom
								.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
								.slice(0, -3)}{" "}
							-{" "}
							{job.salaryTo
								.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
								.slice(0, -3)}
						</p>
					</p>
					<p className="card-text">{job.postedDate}</p>
					<button className="btn btn-success form-control">Kirim Lamaran</button>
				</div>
			</div>
		</div>
	);
}
