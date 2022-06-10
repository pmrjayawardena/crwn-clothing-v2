export const setIsCartOpen = (boolean) => ({ type: 'SET_IS_CART_OPEN', payload: boolean });

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, cartItemToRemove) => {
	//find the cart item to remove
	const foundCartItem = cartItems.find((item) => item.id === cartItemToRemove.id);
	if (foundCartItem.quantity === 1) {
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
const clearCartItem = (cartItems, cartItemToClear) => {
	return cartItems.filter((item) => item.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return { type: 'SET_CART_ITEMS', payload: newCartItems };
};
export const removeItemToCart = (cartItems, cartItemToRemove) => {
	const newCartItems = removeCartItem(cartItems, cartItemToRemove);
	return { type: 'SET_CART_ITEMS', payload: newCartItems };
};
export const clearItemsFromCart = (cartItems, cartItemToClear) => {
	const newCartItems = clearCartItem(cartItems, cartItemToClear);
	return { type: 'SET_CART_ITEMS', payload: newCartItems };
};
