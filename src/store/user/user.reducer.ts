import { AnyAction } from 'redux';
import { signInFailed, signUpFailed, signOutFailed, signOutSuccess, signInSuccess } from './user.action';

import { UserData } from '../../utils/firebase/firebase';
export type UserState = {
	currentUser: UserData | null;
	isLoading: boolean;
	error: Error | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	// const { type, payload } = action;
	if (signInSuccess.match(action)) {
		return {
			...state, //previus state
			currentUser: action.payload,
		};
	}
	if (signInFailed.match(action)) {
		return {
			...state, //previus state
			error: action.payload,
		};
	}
	if (signOutSuccess.match(action)) {
		return {
			...state, //previus state
			currentUser: null,
		};
	}
	if (signUpFailed.match(action)) {
		return {
			...state, //previus state
			error: action.payload,
		};
	}
	if (signOutFailed.match(action)) {
		return {
			...state, //previus state
			error: action.payload,
		};
	}
	return state;
	// switch (type) {
	// 	case USER_ACTION_TYPES.SIGN_IN_SUCESS:
	// 		return {
	// 			...state, //previus state
	// 			currentUser: payload,
	// 		};
	// 	case USER_ACTION_TYPES.SIGN_IN_FAILED:
	// 		return {
	// 			...state, //previus state
	// 			error: payload,
	// 		};
	// 	case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
	// 		return {
	// 			...state, //previus state
	// 			currentUser: null,
	// 		};
	// 	case USER_ACTION_TYPES.SIGN_UP_FAILED:
	// 		return {
	// 			...state, //previus state
	// 			error: payload,
	// 		};
	// 	case USER_ACTION_TYPES.SIGN_OUT_FAILED:
	// 		return {
	// 			...state, //previus state
	// 			error: payload,
	// 		};

	// 	default:
	// 		return state;
	// }
};
