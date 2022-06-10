import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//reducers are the use to create the state of the application

//! root-reducer
const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
