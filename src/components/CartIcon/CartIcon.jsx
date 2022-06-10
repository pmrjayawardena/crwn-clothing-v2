import { useContext } from 'react';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';
// import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIconStyle';
export const CartIcon = (props) => {
	const dispatch = useDispatch();
	// const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const cartOpenHandler = () => {
		dispatch(setIsCartOpen(!isCartOpen));
	};
	return (
		<CartIconContainer onClick={cartOpenHandler}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
