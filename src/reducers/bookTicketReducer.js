import {
  ADD_BOOKING_REQUEST,
  ADD_BOOKING_SUCCESS,
  ADD_BOOKING_FAIL,
} from '../actions/booking/bookTicketActions';

import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
} from '../actions/booking/eventActions';

const initialState = {
  userBooking: null,
  events: [],
  isFetching: false,
  error: '',
};

export function bookTicketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOKING_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case ADD_BOOKING_SUCCESS:
      return {
        ...state,
        userBooking: action.payload,
        isFetching: false,
        error: '',
      };

    case ADD_BOOKING_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case GET_EVENTS_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_EVENTS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
