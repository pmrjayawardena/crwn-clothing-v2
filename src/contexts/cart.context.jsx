// import { createContext, useState, useEffect, useReducer } from 'react';
// import { createAction } from '../utils/reducer/reducer.util.js';
// const addCartItem = (cartItems, productToAdd) => {
// 	//find if cart items contains productToAdd
// 	const foundItem = cartItems.find((item) => item.id === productToAdd.id);

// 	if (!foundItem) {
// 		return [...cartItems, { ...productToAdd, quantity: 1 }];
// 	} else {
// 		return cartItems.map((item) => {
// 			if (item.id === productToAdd.id) {
// 				item.quantity = item.quantity + 1;
// 				return item;
// 			} else {
// 				return item;
// 			}
// 		});
// 	}

// 	//if found increment quantity
// 	//return new array with modified cart items / new cart items
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
// 	//find the cart item to remove
// 	const foundCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
// 	if (foundCartItem.quantity === 1) {
// 		return cartItems.filter((item) => item.id !== cartItemToRemove.id);
// 	} else {
// 		return cartItems.map((item) => {
// 			if (item.id === cartItemToRemove.id) {
// 				item.quantity = item.quantity - 1;
// 				return item;
// 			} else {
// 				return item;
// 			}
// 		});
// 	}
// };
// const clearCartItem = (cartItems, cartItemToClear) => {
// 	return cartItems.filter((item) => item.id !== cartItemToClear.id);
// };

// //as the actual value you want to access
// export const CartContext = createContext({
// 	isCartOpen: false,
// 	setIsCartOpen: () => {},
// 	cartItems: [],
// 	addItemToCart: () => {},
// 	clearItemsFromCart: () => {},
// 	cartCount: 0,
// 	total: 0,
// });
// export const CART_ACTION_TYPES = {
// 	SET_CART_ITEMS: 'SET_CART_ITEMS',
// 	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
// };

// //reducers should not contain any business logic
// const cartReducer = (state, action) => {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case CART_ACTION_TYPES.SET_CART_ITEMS:
// 			return {
// 				...state,
// 				...payload,
// 			};
// 		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
// 			return {
// 				...state,
// 				isCartOpen: payload,
// 			};
// 		default:
// 			throw new Error(`Unhandled type ${type} in the Cart Reducer`);
// 	}
// };
// const INITIAL_STATE = {
// 	cartCount: 0,
// 	total: 0,
// 	cartItems: [],
// 	isCartOpen: false,
// };
// export const CartProvider = ({ children }) => {
// 	// const [isCartOpen, setIsCartOpen] = useState(false);
// 	// const [cartItems, setCartItems] = useState([]);
// 	// const [cartCount, setCartCount] = useState(0);
// 	// const [total, setTotal] = useState(0);

// 	const [{ cartItems, cartCount, total, isCartOpen }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

// 	const updateCartItemsReducer = (newCartItems) => {
// 		const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
// 		const totalPrice = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);

// 		dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, { cartCount: newCartCount, total: totalPrice, cartItems: newCartItems }));
// 		/*
// 		generate new cartTotal and newCartcount
// 		dispatch new action with payload ={
// 				newCartItems
// 				newCartTotal
// 				newCartCount
// 		}

// 		*/
// 	};
// 	// useEffect(() => {
// 	// 	const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
// 	// 	setCartCount(newCartCount);
// 	// }, [cartItems]);

// 	// useEffect(() => {
// 	// 	const totalPrice = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
// 	// 	setTotal(totalPrice);
// 	// }, [cartItems]);

// 	const addItemToCart = (productToAdd) => {
// 		const newCartItems = addCartItem(cartItems, productToAdd);
// 		updateCartItemsReducer(newCartItems);
// 	};
// 	const removeItemToCart = (cartItemToRemove) => {
// 		const newCartItems = removeCartItem(cartItems, cartItemToRemove);
// 		updateCartItemsReducer(newCartItems);
// 	};
// 	const clearItemsFromCart = (cartItemToClear) => {
// 		const newCartItems = clearCartItem(cartItems, cartItemToClear);
// 		updateCartItemsReducer(newCartItems);
// 	};
// 	const setIsCartOpen = (bool) => {
// 		dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
// 	};
// 	const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemToCart, clearItemsFromCart, cartItems, cartCount, total };
// 	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
