import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as redux from './redux';
import * as api from './api';

function* getScooterList(action) {
  try {
    const response = yield call(api.getScooterList);
    yield put(redux.getScooterListSuccess(response));
  } catch (e) {
    yield put(redux.getScooterListFail(e));
  }
}

function* watchGetScooterList() {
  yield takeLatest(redux.GET_SCOOTER_LIST_REQUEST, getScooterList);
}

export default function* ScooterSaga() {
  yield all([watchGetScooterList()]);
}
