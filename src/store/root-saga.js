import { all, call } from 'redux-saga/effects';
import { categoriresSaga } from './category/category.saga';

export function* rootSaga() {
	yield all([call(categoriresSaga)]);
}
