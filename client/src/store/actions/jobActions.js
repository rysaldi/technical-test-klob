import { FETCH_JOBSVACANCY, ADD_JOBVACANCY, APPLY_JOBVACANCY } from "./actionType";

const fetchJobsVacancySuccess = (payload) => {
	return {
		type: FETCH_JOBSVACANCY,
		payload,
	};
};

const addNewJobSuccess = (payload) => {
	return {
		type: ADD_JOBVACANCY,
		payload,
	};
};

const applyJobSuccess = (payload) => {
	return {
		type: APPLY_JOBVACANCY,
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

export const addNewJob = (payload) => (dispatch) => {
	dispatch(addNewJobSuccess(payload));
};

export const addAppliedJobVacancy = (payload) => (dispatch) => {
	dispatch(applyJobSuccess(payload));
};
