import { fork, all } from 'redux-saga/effects';

import Scooter from '../components/scooter';
import Trip from '../components/trip';

export default function* root() {
  yield all([fork(Scooter.saga), fork(Trip.saga)]);
}
