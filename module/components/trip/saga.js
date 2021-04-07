import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as redux from './redux';
import * as api from './api';

function* getTripList(action) {
  try {
    const response = yield call(api.getTripList);
    yield put(redux.getTripListSuccess(response));
  } catch (e) {
    yield put(redux.getTripListFail(e));
  }
}

function* watchGetTripList() {
  yield takeLatest(redux.GET_TRIP_LIST_REQUEST, getTripList);
}

export default function* tripSaga() {
  yield all([watchGetTripList()]);
}
