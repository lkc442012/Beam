import * as redux from './redux';
import { combineReducers } from 'redux';

const initialState = {
  isFetching: false,
  scooterListData: [],
};

export const scooter = (state = initialState, action) => {
  switch (action.type) {
    case redux.GET_SCOOTER_LIST_REQUEST:
      return { ...state, isFetching: true, scooterListData: [] };
    case redux.GET_SCOOTER_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        scooterListData: action.data.scooter,
      };
    case redux.GET_SCOOTER_FAIL:
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
  scooter,
});
