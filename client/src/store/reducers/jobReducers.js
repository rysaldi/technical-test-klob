import { FETCH_JOBSVACANCY, ADD_JOBVACANCY } from "../actions/actionType";

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
		case ADD_JOBVACANCY:
			const newState = {
				...state,
			};
      newState.jobsVacancy.push(action.payload)
      console.log(newState, "reducer")
      return newState
		default:
			return {
				...state,
			};
	}
}
