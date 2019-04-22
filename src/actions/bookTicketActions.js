export const ADD_BOOKING_REQUEST = 'ADD_BOOKING_REQUEST';
export const ADD_BOOKING_SUCCESS = 'ADD_BOOKING_SUCCESS';
export const ADD_BOOKING_FAIL = 'ADD_BOOKING_FAIL';

const addBookingRequest = () => {
  return {
    type: ADD_BOOKING_REQUEST,
  };
};

const addBookingSuccess = userBooking => {
  return {
    type: ADD_BOOKING_SUCCESS,
    payload: userBooking,
  };
};

const addBookingFail = error => {
  return {
    type: ADD_BOOKING_FAIL,
    payload: error,
  };
};

export function bookTicket(eventId, userId, tribune, dayOne, dayTwo, dayThree) {
  return dispatch => {
    dispatch(addBookingRequest());

    fetch(`http://localhost:8000/api/bookings/make-a-book/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventId: eventId,
        userId: userId,
        tribune: tribune,
        dayOne: dayOne,
        dayTwo: dayTwo,
        dayThree: dayThree,
      }),
    })
      .then(res => res.json())
      .then(
        res => dispatch(addBookingSuccess(res)),
        e => dispatch(addBookingFail(e))
      );
  };
}
