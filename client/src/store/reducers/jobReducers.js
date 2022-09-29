import { FETCH_JOBSVACANCY, ADD_JOBVACANCY, APPLY_JOBVACANCY } from "../actions/actionType";

const initialState = {
	jobsVacancy: [],
	newJobVacancy: [],
	appliedJobVacancy: []
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
				appliedJobVacancy: [...state.appliedJobVacancy, action.payload]
			};
		default:
			return {
				...state,
			};
	}
}
