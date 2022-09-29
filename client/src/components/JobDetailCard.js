import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchJobVacancy } from "../store/actions/jobActions";
import LoadingComponent from "./LoadingComponent";

export default function JobDetailCard() {
	const dispatch = useDispatch();
	const params = useParams();
	const { jobsVacancy } = useSelector((state) => state.jobs);
	const [loadingDetail, setLoadingDetail] = useState(true);
	const [detailJob, setDetailJob] = useState({
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
			setLoadingDetail(false);
		}
	}, [jobsVacancy]);

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
						<p className="card-text">{detailJob.postedDate}</p>
						<button className="btn btn-success form-control">KIRIM LAMARAN</button>
					</div>
				</div>
			)}
		</>
	);
}
