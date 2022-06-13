import './Shop.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../Categories/CategoriesPreview';
import Category from '../Category/Category';
import { fetchCategoriesStart } from '../../store/category/category.action.ts';
import { useDispatch } from 'react-redux';
const Shop = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesStart());
		// const getCategoriesMap = async () => {
		// 	// const categories = await getCategoriesAndDocuments('categories');
		// 	// dispatch(fetchCategoriesAsync());
		// };
		// getCategoriesMap();
	}, [dispatch]);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
