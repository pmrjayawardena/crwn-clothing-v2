import { createContext, useState, useEffect, useReducer } from 'react';
import { onAuthStateChangeListner, createUserDocumentFromAuth, signOutUser } from '../utils/firebase/firebase.js';

//as the actual value you want to access
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER',
};
const userReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state, //previus state
				currentUser: payload,
			};
		case 'INCREMENT':
			return {
				value: state.value + 1,
			};

		default:
			throw new Error(`Unhandled type ${type} in the user Reducer`);
	}
};

const INITIAL_STATE = {
	currentUser: null,
};
export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null);
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;
	const setCurrentUser = (user) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, user });
	};
	const value = { currentUser, setCurrentUser };
	useEffect(() => {
		const unsubcribe = onAuthStateChangeListner((user) => {
			// signOutUser();

			if (user) {
				createUserDocumentFromAuth(user);
			}

			setCurrentUser(user);
		});
		return unsubcribe;
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
