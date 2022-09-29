import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobVacancy } from "../store/actions/jobActions";
import JobAppliedCard from "../components/JobAppliedCard";
import { useNavigate } from "react-router-dom";

export default function AppliedJobPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { appliedJobVacancy } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobVacancy()).catch((err) => {
			console.log(err);
		});
	}, []);

	const toHome = () => {
		navigate("/");
	};

	return (
		<>
			<h1 className="mb-4">Lamaran Terkirim:</h1>
			{!appliedJobVacancy.length ? (
				<div className="text-center">
					<h2>Belum ada lamaran yang terkirim</h2>
					<button className="btn btn-primary" onClick={toHome}>
						Kembali ke Home
					</button>
				</div>
			) : (
				<>
					<h1 className="mb-4">Lowongan Pekerjaan:</h1>
					<div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
						{appliedJobVacancy.map((job, index) => (
							<JobAppliedCard job={job} key={index} />
						))}
					</div>
				</>
			)}
		</>
	);
}
