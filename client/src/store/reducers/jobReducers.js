import { FETCH_JOBSVACANCY } from "../actions/actionType";

const initialState = {
	jobsVacancy: [],
};

export default function jobReducers(state = initialState, action) {
	switch (action.type) {
		case FETCH_JOBSVACANCY:
			return {
				...state,
				jobsVacancy: action.payload,
			};
		default:
			return {
				...state,
			};
	}
}
