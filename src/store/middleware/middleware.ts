import { Middleware } from 'redux';
import { RootState } from '../store';

//curring - function that returns a function
//const curryFunc=(a)=>(b,c)=>{a+b-c}
// const withA=curryFunc(3)
//withA(2,4)
//withA will be equal to some function

export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
	// if (!action.type) {
	// 	return next();
	// }
	// console.log('type', action.type);
	// console.log('payload', action.payload);
	// console.log('currnet State', store.getState());
	next(action);
	// console.log('next state', store.getState());
};
