export const CATEGORY_ACTION_TYPES = {
	SET_CATEGORIES: 'SET_CATEGORIES',
};
export const setCategories = (categoriesArray) => {
	return { type: 'SET_CATEGORIES', payload: categoriesArray };
};
