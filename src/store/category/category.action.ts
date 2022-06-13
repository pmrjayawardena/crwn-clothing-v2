// import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { CATEGORY_ACTION_TYPES, Category } from './category.types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.util';

export type FetchCategoriesStart = Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

//creating a union for category reducer
export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START));

export const fetchCategoriesSuccess = withMatcher(
	(categoriesArray: Category[]): FetchCategoriesSuccess => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
);

export const fetchCategoriesFailure = withMatcher(
	(error: Error): FetchCategoriesFailed => createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);

// export const fetchCategoriesAsync = (payload) => async (dispatch) => {
// 	dispatch(fetchCategoriesStart());
// 	try {
// 		const categoriesArray = await getCategoriesAndDocuments('categories');
// 		dispatch(fetchCategoriesSuccess(categoriesArray));
// 	} catch (error) {
// 		dispatch(fetchCategoriesFailure(error));
// 	}
// };
