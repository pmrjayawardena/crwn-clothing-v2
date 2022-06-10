import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector.js';
import './Category.scss';
export const Category = (props) => {
	const { category } = useParams();
	// const { categoriesMap } = useContext(CategoriesContext);
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);
	return (
		<>
			<h2 className='category_title'>{category}</h2>
			<div className='category_container'>
				{products &&
					products.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
			</div>
		</>
	);
};

export default Category;
