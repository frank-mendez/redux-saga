import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getUsersSucces({
        items: result.data.data,
      })
    );
  } catch (error) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSaga = [fork(watchGetUsersRequest)];

export default usersSaga;
