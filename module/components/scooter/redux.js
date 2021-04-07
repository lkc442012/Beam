export const NAME = 'SCOOTER';

export const GET_SCOOTER_LIST_REQUEST = 'SCOOTER/GET_SCOOTER_LIST_REQUEST';
export const GET_SCOOTER_LIST_SUCCESS = 'SCOOTER/GET_SCOOTER_LIST_SUCCESS';
export const GET_SCOOTER_LIST_FAIL = 'SCOOTER/GET_SCOOTER_LIST_FAIL';

export const getScooterListRequest = () => ({
  type: GET_SCOOTER_LIST_REQUEST,
});

export const getScooterListSuccess = data => ({
  type: GET_SCOOTER_LIST_SUCCESS,
  data,
});

export const getScooterListFail = message => ({
  type: GET_SCOOTER_LIST_FAIL,
  message,
});
