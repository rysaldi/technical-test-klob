import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobVacancy } from "../store/actions/jobActions";
import JobVacancyCard from "./JobVacancyCard";

export default function JobVacancyList() {
	const dispatch = useDispatch();
	const { jobsVacancy } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobVacancy()).catch((err) => {
			console.log(err);
		});
	}, []);

	return (
		<>
			<h1>Lowongan Pekerjaan:</h1>
			<div className="row row-cols-1 row-cols-md-3 g-4">
				{jobsVacancy.map((job, index) => (
					<JobVacancyCard job={job} key={index} />
				))}
			</div>
		</>
	);
}
