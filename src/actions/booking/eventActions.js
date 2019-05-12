export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';

const getEventsRequest = () => {
  return {
    type: GET_EVENTS_REQUEST,
  };
};

const getEventsSuccess = events => {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: events,
  };
};

const getEventsFail = error => {
  return {
    type: GET_EVENTS_FAIL,
    payload: error,
  };
};

export function getEventList() {
  return dispatch => {
    dispatch(getEventsRequest());

    fetch('http://localhost:8000/api/bookings/events', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(getEventsSuccess(res)),
        e => dispatch(getEventsFail(e))
      );
  };
}
