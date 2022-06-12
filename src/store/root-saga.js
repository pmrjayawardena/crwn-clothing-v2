import { all, call } from 'redux-saga/effects';
import { categoriresSaga } from './category/category.saga';
import { userSagas } from './user/user.saga';
export function* rootSaga() {
	yield all([call(categoriresSaga), call(userSagas)]);
}
