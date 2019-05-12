export const DELETE_BOOKING_REQUEST = 'DELETE_BOOKING_REQUEST';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';
export const DELETE_BOOKING_FAIL = 'DELETE_BOOKING_FAIL';

const deleteBookingRequest = () => {
  return {
    type: DELETE_BOOKING_REQUEST,
  };
};

const deleteBookingSuccess = userBooking => {
  return {
    type: DELETE_BOOKING_SUCCESS,
    payload: userBooking,
  };
};

const deleteBookingFail = error => {
  return {
    type: DELETE_BOOKING_FAIL,
    payload: error,
  };
};

export function deleteBooking(
  eventId,
  bookingId,
  tribune,
  dayOne,
  dayTwo,
  dayThree
) {
  return dispatch => {
    dispatch(deleteBookingRequest());

    fetch(`http://localhost:8000/api/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({
        eventId: eventId,
        tribune: tribune,
        dayOne: dayOne,
        dayTwo: dayTwo,
        dayThree: dayThree,
      }),
    })
      .then(res => res.json())
      .then(
        res => dispatch(deleteBookingSuccess(res)),
        e => dispatch(deleteBookingFail(e))
      );
  };
}
