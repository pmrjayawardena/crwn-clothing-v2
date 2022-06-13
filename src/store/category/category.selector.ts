//you can write the logic inside the selector
import { createSelector } from 'reselect';
import { CategoriesState, Category } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories): CategoryMap => {
	// console.log('selector fired!!');
	return categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {} as CategoryMap);
});

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading);
