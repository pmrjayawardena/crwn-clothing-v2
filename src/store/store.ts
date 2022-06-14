import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

export type RootState = ReturnType<typeof rootReducer>;

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};
//reducers are the use to create the state of the application
//!!!!!!!!!!saga replaces thunks
const persistConfig: ExtendedPersistConfig = {
	key: 'root',
	storage,
	// blackList: ['user'],
	whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
//! root-reducer
const middlewares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter((middleware): middleware is Middleware =>
	Boolean(middleware)
);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const composedEnhancers = compose(applyMiddleware(...middlewares));
const composedEnhancers = composeEnhancers(applyMiddleware(...middlewares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

//after middlewares are in the store we run the middleware saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
