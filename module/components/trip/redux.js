export const NAME = 'TRIP';

export const GET_TRIP_LIST_REQUEST = 'trip/GET_TRIP_LIST_REQUEST';
export const GET_TRIP_LIST_SUCCESS = 'trip/GET_TRIP_LIST_SUCCESS';
export const GET_TRIP_LIST_FAIL = 'trip/GET_TRIP_LIST_FAIL';

export const getTripListRequest = () => ({
  type: GET_TRIP_LIST_REQUEST,
});

export const getTripListSuccess = data => ({
  type: GET_TRIP_LIST_SUCCESS,
  data,
});

export const getTripListFail = message => ({
  type: GET_TRIP_LIST_FAIL,
  message,
});
