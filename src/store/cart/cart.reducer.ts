import { CartItem } from './cart.types';
import { AnyAction } from 'redux';
import { setIsCartOpen, setCartItems } from './cart.action';
export type CartState = {
	isCartOpen: boolean;
	cartItems: CartItem[];
};

export const CART_INITIAL_STATE: CartState = {
	isCartOpen: false,
	cartItems: [],
};
//reducers should not contain any business logic

export const cartReducer = (state = CART_INITIAL_STATE, action = {} as AnyAction) => {
	if (setIsCartOpen.match(action)) {
		return {
			...state,
			isCartOpen: action.payload,
		};
	}

	if (setCartItems.match(action)) {
		return {
			...state,
			cartItems: action.payload,
		};
	}

	return state;
};
