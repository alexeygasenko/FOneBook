export const GET_BOOKING_INFO_REQUEST = 'GET_BOOKING_INFO_REQUEST';
export const GET_BOOKING_INFO_SUCCESS = 'GET_BOOKING_INFO_SUCCESS';
export const GET_BOOKING_INFO_FAIL = 'GET_BOOKING_INFO_FAIL';

const bookingsInfoRequest = () => {
  return {
    type: GET_BOOKING_INFO_REQUEST,
  };
};

const bookingInfoSuccess = bookingInfo => {
  return {
    type: GET_BOOKING_INFO_SUCCESS,
    payload: bookingInfo,
  };
};

const bookingInfoFail = error => {
  return {
    type: GET_BOOKING_INFO_FAIL,
    payload: error,
  };
};

export function getBookingInfo(bookingId) {
  return dispatch => {
    dispatch(bookingsInfoRequest());

    fetch(`http://localhost:8000/api/bookings/bookinginfo/${bookingId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(bookingInfoSuccess(res)),
        e => dispatch(bookingInfoFail(e))
      );
  };
}
