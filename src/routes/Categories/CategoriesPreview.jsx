import './CategoriesPreview.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/category/category.selector.ts';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
const CategoriesPreview = () => {
	const categoriesMap = useSelector(selectCategoriesMap);
	const isLoading = useSelector(selectCategoriesIsLoading);
	// const { categoriesMap } = useContext(CategoriesContext);
	return (
		<>
			{isLoading ? (
				<Spinner />
			) : (
				<div className='category-preview-container'>
					{Object.keys(categoriesMap).map((title) => {
						const products = categoriesMap[title];
						return <CategoryPreview key={title} title={title} products={products} />;
					})}
				</div>
			)}
		</>
	);
};

export default CategoriesPreview;
