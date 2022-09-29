import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppliedJobVacancy } from "../store/actions/jobActions";
import Swal from "sweetalert2";

export default function JobVacancyCard({ job }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { appliedJobVacancy } = useSelector((state) => state.jobs);
	const [applied, setApplied] = useState(false);
	const [imageError, setImageError] = useState(false);

	const toDetailJob = () => {
		navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
	};

	const applyJob = () => {
		setApplied(true);
		dispatch(addAppliedJobVacancy(job));
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "successfully applied to the job",
			showConfirmButton: false,
			timer: 1000,
		});
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

	const imageErrorCheck = () => {
		setImageError(true);
		job.corporateLogo = "https://www.industrial-cloud.com/ic/img/company/no-logo-MANUFACTURER.png";
	};

	const timeSince = (inputDate) => {
		let date = new Date(inputDate);
		let seconds = Math.floor((new Date() - date) / 1000);

		let interval = seconds / 31536000;

		if (interval > 1) {
			return Math.floor(interval) + " tahun yang lalu";
		}
		interval = seconds / 2592000;
		if (interval > 1) {
			return Math.floor(interval) + " bulan yang lalu";
		}
		interval = seconds / 86400;
		if (interval > 1) {
			return Math.floor(interval) + " hari yang lalu";
		}
		interval = seconds / 3600;
		if (interval > 1) {
			return Math.floor(interval) + " jam yang lalu";
		}
		interval = seconds / 60;
		if (interval > 1) {
			return Math.floor(interval) + " menit yang lalu";
		}
		return Math.floor(seconds) + " detik yang lalu";
	};

	return (
		<div className="col">
			<div className="card h-100">
				<img
					src={job.corporateLogo}
					className="card-img-top mx-auto p-3 d-block"
					style={{ width: 200, height: 100, objectFit: "contain", cursor: "pointer" }}
					alt="company logo"
					onClick={toDetailJob}
					onError={imageErrorCheck}
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
						<div className="d-flex flex-row-reverse p-2">
						<p className="card-text">{timeSince(job.postedDate)}</p>
						</div>
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
