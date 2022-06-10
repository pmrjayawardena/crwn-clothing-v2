import './CategoriesPreview.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategoriesMap } from '../../store/category/category.selector.js';
import { useSelector } from 'react-redux';
const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	// const { categoriesMap } = useContext(CategoriesContext);
	return (
		<div className='category-preview-container'>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return <CategoryPreview key={title} title={title} products={products} />;
			})}
		</div>
	);
};

export default CategoriesPreview;
