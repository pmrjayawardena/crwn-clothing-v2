import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/category/category.selector.ts';
import './Category.scss';

import Spinner from '../../components/Spinner/Spinner';
export const Category = (props) => {
	const { category } = useParams();
	console.log('render/re-rendering category');
	// const { categoriesMap } = useContext(CategoriesContext);
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);

	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);
	return (
		<>
			<h2 className='category_title'>{category}</h2>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='category_container'>
					{products &&
						products.map((product) => {
							return <ProductCard key={product.id} product={product} />;
						})}
				</div>
			)}
		</>
	);
};

export default Category;
