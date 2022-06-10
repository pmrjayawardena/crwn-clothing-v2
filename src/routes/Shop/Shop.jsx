import './Shop.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../Categories/CategoriesPreview';
import Category from '../Category/Category';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase.js';
import { setCategories } from '../../store/category/category.action.js';
import { useDispatch } from 'react-redux';
const Shop = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categories = await getCategoriesAndDocuments('categories');
			console.log('categoriesAee', categories);
			dispatch(setCategories(categories));
		};
		getCategoriesMap();
	}, []);
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
