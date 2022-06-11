import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase';

export const CATEGORY_ACTION_TYPES = {
	// SET_CATEGORIES: 'SET_CATEGORIES',
	FETCH_CATEGORIES_START: 'FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS: 'FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILED: 'FETCH_CATEGORIES_FAILED',
};

// export const setCategories = (categoriesArray) => {
// 	return { type: 'SET_CATEGORIES', payload: categoriesArray };
// };

export const fetchCategoriesStart = () => ({ type: 'FETCH_CATEGORIES_START' });

export const fetchCategoriesSuccess = (categoriesArray) => ({ type: 'FETCH_CATEGORIES_SUCCESS', payload: categoriesArray });

export const fetchCategoriesFailure = (error) => ({ type: 'FETCH_CATEGORIES_FAILED', payload: error });

export const fetchCategoriesAsync = (payload) => async (dispatch) => {
	dispatch(fetchCategoriesStart());
	try {
		const categoriesArray = await getCategoriesAndDocuments('categories');
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesFailure(error));
	}
};
