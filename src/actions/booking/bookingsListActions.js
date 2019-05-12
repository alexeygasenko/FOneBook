export const GET_BOOKINGS_LIST_REQUEST = 'GET_BOOKINGS_LIST_REQUEST';
export const GET_BOOKINGS_LIST_SUCCESS = 'GET_BOOKINGS_LIST_SUCCESS';
export const GET_BOOKINGS_LIST_FAIL = 'GET_BOOKINGS_LIST_FAIL';

const bookingsListRequest = () => {
  return {
    type: GET_BOOKINGS_LIST_REQUEST,
  };
};

const bookingsListSuccess = bookingsList => {
  return {
    type: GET_BOOKINGS_LIST_SUCCESS,
    payload: bookingsList,
  };
};

const bookingsListFail = error => {
  return {
    type: GET_BOOKINGS_LIST_FAIL,
    payload: error,
  };
};

export function getBookingsList(userId) {
  return dispatch => {
    dispatch(bookingsListRequest());

    fetch(`http://localhost:8000/api/bookings/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(bookingsListSuccess(res)),
        e => dispatch(bookingsListFail(e))
      );
  };
}
