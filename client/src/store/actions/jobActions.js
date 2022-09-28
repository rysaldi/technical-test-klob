import { FETCH_JOBSVACANCY } from "./actionType";

const fetchJobsVacancySuccess = (payload) => {
	return {
		type: FETCH_JOBSVACANCY,
		payload,
	};
};

export const fetchJobVacancy = () => (dispatch) => {
	return fetch("https://test-server-klob.herokuapp.com/fakeJob")
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			dispatch(fetchJobsVacancySuccess(data));
		});
};
