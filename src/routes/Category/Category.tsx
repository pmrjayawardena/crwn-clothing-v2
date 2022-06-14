import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/category/category.selector';
import './Category.scss';
import Spinner from '../../components/Spinner/Spinner';

type CategoryRouteParams = {
	category: string;
};
export const Category = () => {
	const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
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
