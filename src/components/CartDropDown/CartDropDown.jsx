import React, { useContext } from 'react';
import { CartDropDownContainer, EmptyMessage, CartItemsContainer } from './CartDropDownStyle';
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
// import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
export const CartDropDown = (props) => {
	// const { cartItems, setCartItems } = useContext(CartContext);

	const navigate = useNavigate();
	const cartItems = useSelector(selectCartItems);

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropDownContainer>
			{!cartItems.length && <EmptyMessage>No cart items</EmptyMessage>}
			<CartItemsContainer>
				{cartItems.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</CartItemsContainer>
			<Button onClick={goToCheckoutHandler}>Go to checkout</Button>
		</CartDropDownContainer>
	);
};

export default CartDropDown;
