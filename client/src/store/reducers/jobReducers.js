import {
	FETCH_JOBSVACANCY,
	ADD_JOBVACANCY,
	APPLY_JOBVACANCY,
	CANCEL_APPLIEDJOBVACANCY,
} from "../actions/actionType";

const initialState = {
	jobsVacancy: [],
	newJobVacancy: [],
	appliedJobVacancy: [],
};

export default function jobReducers(state = initialState, action) {
	switch (action.type) {
		case FETCH_JOBSVACANCY:
			return {
				...state,
				jobsVacancy: action.payload,
			};
		case ADD_JOBVACANCY:
			return {
				...state,
				newJobVacancy: [...state.newJobVacancy, action.payload],
			};
		case APPLY_JOBVACANCY:
			return {
				...state,
				appliedJobVacancy: [...state.appliedJobVacancy, action.payload],
			};
		case CANCEL_APPLIEDJOBVACANCY:
			const newAppliedJob = state.appliedJobVacancy.filter(
				(job) => job.jobVacancyCode !== action.payload.jobVacancyCode
			);
			return {
				...state,
				appliedJobVacancy: newAppliedJob,
			};
		default:
			return {
				...state,
			};
	}
}
