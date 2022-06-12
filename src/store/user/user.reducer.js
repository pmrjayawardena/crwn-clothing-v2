import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCESS:
			return {
				...state, //previus state
				currentUser: payload,
			};
		case USER_ACTION_TYPES.SIGN_IN_FAILED:
			return {
				...state, //previus state
				error: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state, //previus state
				currentUser: null,
			};
		case USER_ACTION_TYPES.SIGN_UP_FAILED:
			return {
				...state, //previus state
				error: payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_FAILED:
			return {
				...state, //previus state
				error: payload,
			};

		default:
			return state;
	}
};
