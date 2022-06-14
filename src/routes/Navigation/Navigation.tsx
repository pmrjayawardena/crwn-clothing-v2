import { Outlet } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropDown from '../../components/CartDropDown/CartDropDown';
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './NavigationStyles';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { signOutStart } from '../../store/user/user.action';
const Navigation = () => {
	// const { currentUser, setCurrentUser } = useContext(UserContext);

	const dispatch = useDispatch();

	const currentUser = useSelector(selectCurrentUser);

	// const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const isCartOpen = useSelector(selectIsCartOpen);

	const signOutHandler = async () => {
		dispatch(signOutStart());
		// await signOutUser();
		// dispatch(setCurrentUser(null));
	};

	return (
		<>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrownLogo className='logo' />
				</LogoContainer>

				<NavLinks>
					<NavLink to='/shop'>Shop</NavLink>

					{currentUser ? (
						<NavLink as='span' onClick={signOutHandler}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to='/auth'>Sign In</NavLink>
					)}

					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropDown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
