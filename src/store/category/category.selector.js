//you can write the logic inside the selector

export const selectCategoriesMap = (state) =>
	state.categories.categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {});
