import { CART_ACTION_TYPES, CartItem } from './cart.types';
import { CategoryItem } from '../category/category.types';
import { createAction, withMatcher, Action, ActionWithPayload } from '../../utils/reducer/reducer.util';

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
	const foundItem = cartItems.find((item) => item.id === productToAdd.id);

	if (!foundItem) {
		return [...cartItems, { ...productToAdd, quantity: 1 }];
	} else {
		return cartItems.map((item) => {
			if (item.id === productToAdd.id) {
				item.quantity = item.quantity + 1;
				return item;
			} else {
				return item;
			}
		});
	}
};

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
	//find the cart item to remove
	const foundCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
	if (foundCartItem && foundCartItem.quantity === 1) {
		return cartItems.filter((item) => item.id !== cartItemToRemove.id);
	} else {
		return cartItems.map((item) => {
			if (item.id === cartItemToRemove.id) {
				item.quantity = item.quantity - 1;
				return item;
			} else {
				return item;
			}
		});
	}
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));

export const setCartItems = withMatcher((cartItems: CartItem[]): setCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => {
	return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return setCartItems(newCartItems);
};
export const removeItemToCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return setCartItems(newCartItems);
};
export const clearItemsFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return setCartItems(newCartItems);
};
