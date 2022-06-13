import './Checkout.scss';
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.ts';
import Payment from '../../components/Payment/Payment';
const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
	// const { cartItems, total } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>remove</div>
			</div>

			{cartItems.map((item) => {
				return <CheckOutItem key={item.name} cartItem={item} />;
			})}
			<span className='total'>Total: {total}</span>
			<Payment />
		</div>
	);
};

export default Checkout;
