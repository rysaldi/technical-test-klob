import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobVacancy } from "../store/actions/jobActions";

export default function HomePage() {
	const dispatch = useDispatch();
	const { jobsVacancy } = useSelector((state) => state.jobs);

	useEffect(() => {
		dispatch(fetchJobVacancy()).catch((err) => {
			console.log(err);
		});
	});
	return <p>{JSON.stringify(jobsVacancy, null, 2)}</p>;
}
