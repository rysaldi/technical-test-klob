import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobVacancy } from "../store/actions/jobActions";
import JobVacancyCard from "../components/JobVacancyCard";

export default function AppliedJobPage() {
	const dispatch = useDispatch();
	const { jobsVacancy, newJobVacancy, appliedJobVacancy } = useSelector((state) => state.jobs);
	const [jobShown, setJobShown] = useState([])

	useEffect(() => {
		dispatch(fetchJobVacancy())
		.then(() => {
			console.log(jobsVacancy)
		})
		.catch((err) => {
			console.log(err);
		});
	}, []);

	return (
		<>
			<h1 className="mb-4">Lowongan Pekerjaan:</h1>
			<div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 g-4">
				{jobsVacancy.map((job, index) => (
					<JobVacancyCard job={job} key={index} />
				))}
				{newJobVacancy &&
					newJobVacancy.map((job, index) => <JobVacancyCard job={job} key={index} />)}
			</div>
		</>
	);
}
