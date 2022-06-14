import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
// import { CartContext } from '../../contexts/cart.context';
import { useDispatch, useSelector } from 'react-redux';
import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIconStyle';
export const CartIcon = () => {
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
