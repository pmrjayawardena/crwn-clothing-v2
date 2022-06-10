import { compose, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//reducers are the use to create the state of the application
//curring - function that returns a function
//const curryFunc=(a)=>(b,c)=>{a+b-c}
// const withA=curryFunc(3)
//withA(2,4)
//withA will be equal to some function
const loggerMiddleware = (store) => (next) => (action) => {
	if (!action.type) {
		return next();
	}
	// console.log('type', action.type);
	// console.log('payload', action.payload);
	// console.log('currnet State', store.getState());
	next(action);
	// console.log('next state', store.getState());
};
//! root-reducer
const middlewares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
