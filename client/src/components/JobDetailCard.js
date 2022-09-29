import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAppliedJobVacancy, fetchJobVacancy } from "../store/actions/jobActions";
import LoadingComponent from "./LoadingComponent";
import Swal from "sweetalert2";

export default function JobDetailCard() {
	const dispatch = useDispatch();
	const params = useParams();
	const { jobsVacancy, appliedJobVacancy } = useSelector((state) => state.jobs);
	const [applied, setApplied] = useState(false);
	const [imageError, setImageError] = useState(false);
	const [loadingDetail, setLoadingDetail] = useState(true);
	const [detailJob, setDetailJob] = useState({
		jobVacancyCode: "",
		corporateLogo: "",
		corporateName: "",
		positionName: "",
		status: "",
		salaryFrom: "",
		salaryTo: "",
		postedDate: "",
	});

	useEffect(() => {
		if (!jobsVacancy.length) {
			dispatch(fetchJobVacancy()).catch((err) => {
				console.log(err);
			});
		} else {
			const foundJob = jobsVacancy.filter((job) => job.jobVacancyCode === params.jobVacancyCode);
			setDetailJob(foundJob[0]);
			appliedCheck();
			setLoadingDetail(false);
		}
	}, [jobsVacancy, detailJob]);

	const applyJob = () => {
		setApplied(true);
		dispatch(addAppliedJobVacancy(detailJob));
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
			(jobApplied) => jobApplied.jobVacancyCode === detailJob.jobVacancyCode
		);
		if (check[0]) {
			setApplied(true);
		}
	};

	const imageErrorCheck = () => {
		setImageError(true);
		detailJob.corporateLogo =
			"https://www.industrial-cloud.com/ic/img/company/no-logo-MANUFACTURER.png";
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
		<>
			{loadingDetail && <LoadingComponent />}
			{!loadingDetail && (
				<div className="card">
					<img
						src={detailJob.corporateLogo}
						className="card-img-top mx-auto p-3 d-block"
						style={{ width: 200, height: 100, objectFit: "contain" }}
						alt="company logo"
						onError={imageErrorCheck}
					/>
					<div className="card-body">
						<h5 className="card-title">{detailJob.corporateName}</h5>
						<div dangerouslySetInnerHTML={{ __html: detailJob.descriptions }} />
						<p className="card-text">{detailJob.positionName}</p>
						<p className="card-text mb-0 ">
							Status : <p className="badge bg-secondary">{detailJob.status}</p>
						</p>
						<p className="card-text mb-0">
							Gaji :{" "}
							<p className="badge bg-secondary">
								{detailJob.salaryFrom
									.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
									.slice(0, -3)}{" "}
								-{" "}
								{detailJob.salaryTo
									.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
									.slice(0, -3)}
							</p>
						</p>
						<div className="d-flex flex-row-reverse p-2">
							<p className="card-text">{timeSince(detailJob.postedDate)}</p>
						</div>
						<button
							onClick={applyJob}
							className={`btn ${applied ? "btn-secondary disabled" : "btn-success"} form-control`}>
							KIRIM LAMARAN
						</button>
					</div>
				</div>
			)}
		</>
	);
}
