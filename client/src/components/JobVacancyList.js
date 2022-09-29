import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobVacancy } from "../store/actions/jobActions";
import JobVacancyCard from "./JobVacancyCard";
import LoadingComponent from "./LoadingComponent";

export default function JobVacancyList() {
	const dispatch = useDispatch();
	const { jobsVacancy, newJobVacancy } = useSelector((state) => state.jobs);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(fetchJobVacancy())
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			{loading ? (
				<LoadingComponent />
			) : (
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
			)}
		</>
	);
}
