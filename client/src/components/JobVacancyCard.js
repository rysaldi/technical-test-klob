import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppliedJobVacancy } from "../store/actions/jobActions";

export default function JobVacancyCard({ job }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { appliedJobVacancy } = useSelector((state) => state.jobs);
	const [applied, setApplied] = useState(false);

	const toDetailJob = () => {
		navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
	};

	const applyJob = () => {
		setApplied(true);
		dispatch(addAppliedJobVacancy(job));
	};

	const appliedCheck = () => {
		const check = appliedJobVacancy.filter(
			(jobApplied) => jobApplied.jobVacancyCode === job.jobVacancyCode
		);
		if (check[0]) {
			setApplied(true);
		}
	};

	useEffect(() => {
		appliedCheck();
	}, [appliedJobVacancy]);

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={job.corporateLogo}
					className="card-img-top mx-auto p-3 d-block"
					style={{ width: 200, height: 100, objectFit: "contain", cursor: "pointer" }}
					alt="company logo"
					onClick={toDetailJob}
				/>
				<div className="card-body">
					<div style={{ cursor: "pointer" }} onClick={toDetailJob}>
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
					</div>
					<button
						onClick={applyJob}
						className={`btn ${applied ? "btn-secondary disabled" : "btn-success"} form-control`}>
						KIRIM LAMARAN
					</button>
				</div>
			</div>
		</div>
	);
}
