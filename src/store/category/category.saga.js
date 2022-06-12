import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';
import { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailure } from './category.action';

export const CATEGORY_ACTION_TYPES = {
	// SET_CATEGORIES: 'SET_CATEGORIES',
	FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

// export const fetchCategoriesAsync = (payload) => async (dispatch) => {
// 	dispatch(fetchCategoriesStart());
// 	try {
// 		const categoriesArray = await getCategoriesAndDocuments('categories');
// 		dispatch(fetchCategoriesSuccess(categoriesArray));
// 	} catch (error) {
// 		dispatch(fetchCategoriesFailure(error));
// 	}
// };

export function* fetchCategoriesAsync() {
	try {
		//yeild replaces await keyword in redux saga
		const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
		yield put(fetchCategoriesSuccess(categoriesArray));
		// dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		yield put(fetchCategoriesFailure(error));
		// dispatch(fetchCategoriesFailure(error));
	}
}
export function* onFetchCategories() {
	yield takeLatest('FETCH_CATEGORIES_START', fetchCategoriesAsync);
}
export function* categoriresSaga() {
	yield all([call(onFetchCategories)]);
}
