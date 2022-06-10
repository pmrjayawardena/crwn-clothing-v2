export const CATEGORY_ACTION_TYPES = {
	SET_CATEGORIES: 'SET_CATEGORIES',
};

const INITIAL_STATE = {
	categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;
	switch (type) {
		case 'SET_CATEGORIES':
			return {
				...state,
				categories: payload,
			};
		default:
			return state;
	}
};
