import { CATEGORY_ACTION_TYPES, Category } from './category.types';
import { CategoryAction, fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } from './category.action';
import { AnyAction } from 'redux';

export type CategoriesState = {
	readonly categories: Category[];
	readonly isLoading: boolean;
	readonly error: Error | null;
};
const INITIAL_STATE: CategoriesState = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action = {} as AnyAction): CategoriesState => {
	// const { type, payload } = action;
	if (fetchCategoriesStart.match(action)) {
		return {
			...state,
			isLoading: true,
		};
	}
	if (fetchCategoriesSuccess.match(action)) {
		return {
			...state,
			categories: action.payload,
			isLoading: false,
		};
	}
	if (fetchCategoriesFailure.match(action)) {
		return {
			...state,
			error: action.payload,
			isLoading: false,
		};
	}
	return state;
	// switch (action.type) {
	// 	case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
	// 		return {
	// 			...state,
	// 			isLoading: true,
	// 		};
	// 	case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
	// 		return {
	// 			...state,
	// 			categories: action.payload,
	// 			isLoading: false,
	// 		};
	// 	case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
	// 		return {
	// 			...state,
	// 			error: action.payload,
	// 			isLoading: false,
	// 		};
	// 	default:
	// 		return state;
	// }
};
