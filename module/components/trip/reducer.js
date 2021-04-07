import * as redux from './redux';
import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  tripListData: [],
};

export const trip = (state = initialState, action) => {
  switch (action.type) {
    case redux.GET_TRIP_LIST_REQUEST:
      return { ...state, isFetching: true, tripListData: [] };
    case redux.GET_TRIP_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tripListData: action.data.trip,
      };
    case redux.GET_TRIP_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    default: {
      return state;
    }
  }
};

export default combineReducers({
  trip,
});
