import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form';

import Scooter from '../components/scooter';
import Trip from '../components/trip';

const createReducers = combineReducers({
  //form,

  [Scooter.redux.NAME]: Scooter.reducer,
  [Trip.redux.NAME]: Trip.reducer,
});

const rootReducer = (state, action) => {
  return createReducers(state, action);
};

export default rootReducer;
