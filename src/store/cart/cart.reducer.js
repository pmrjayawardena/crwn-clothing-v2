export const CART_ACTION_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
	SET_CART_COUNT: 'SET_CART_COUNT',
	SET_CART_TOTAL: 'SET_CART_TOTAL',
};
const INITIAL_STATE = {
	cartItems: [],
	isCartOpen: false,
};
//reducers should not contain any business logic
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				cartItems: payload,
			};
		case CART_ACTION_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		default:
			return state;
	}
};
