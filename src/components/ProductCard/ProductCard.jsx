import React, { useContext } from 'react';
import Button from '../Button/Button';
import './ProductCard.scss';
// import { CartContext } from '../../contexts/cart.context';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action.js';

export const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const { name, price, imageUrl } = product;
	// const { addItemToCart } = useContext(CartContext);
	const cartItems = useSelector(selectCartItems);
	const addProductToCart = () => {
		return dispatch(addItemToCart(cartItems, product));
	};
	return (
		<div className='product-card-container'>
			<img src={imageUrl} alt={`${name}`} />
			<div className='footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<button onClick={addProductToCart}>Click me</button>
			{/* <Button buttonType='inverted' onClick={() => console.log('came')}>
				Add to cart
			</Button> */}
		</div>
	);
};

export default ProductCard;
