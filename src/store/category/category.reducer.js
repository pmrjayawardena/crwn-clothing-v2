export const CATEGORY_ACTION_TYPES = {
	// SET_CATEGORIES: 'SET_CATEGORIES',
	FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

const INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;
	console.log({ payload });
	switch (type) {
		case 'FETCH_CATEGORIES_START':
			return {
				...state,
				isLoading: true,
			};
		case 'FETCH_CATEGORIES_SUCCESS':
			return {
				...state,
				categories: payload,
				isLoading: false,
			};
		case 'FETCH_CATEGORIES_FAILED':
			return {
				...state,
				error: payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
