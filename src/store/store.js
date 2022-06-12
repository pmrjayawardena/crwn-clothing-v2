import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loggerMiddleware } from './middleware/middleware';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
//reducers are the use to create the state of the application
//!!!!!!!!!!saga replaces thunks
const persistConfig = {
	key: 'root',
	storage,
	// blackList: ['user'],
	whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
//! root-reducer
const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composedEnhancers = compose(applyMiddleware(...middlewares));
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

//after middlewares are in the store we run the middleware saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
