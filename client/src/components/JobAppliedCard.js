import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAppliedJobVacancy } from "../store/actions/jobActions";
import Swal from "sweetalert2";

export default function JobAppliedCard({ job }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const toDetailJob = () => {
		navigate(`/detail-lowongan-perkerjaan/${job.jobVacancyCode}`);
	};

	const cancelApply = () => {
		dispatch(removeAppliedJobVacancy(job));
    Swal.fire({
			position: "top-end",
			icon: "success",
			title: "successfully cancel job applied",
			showConfirmButton: false,
			timer: 1000,
		});
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
						onClick={cancelApply}
						className={`btn btn-warning form-control`}>
						BATALKAN LAMARAN
					</button>
				</div>
			</div>
		</div>
	);
}
