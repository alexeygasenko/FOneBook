import {
  GET_BOOKING_INFO_REQUEST,
  GET_BOOKING_INFO_SUCCESS,
  GET_BOOKING_INFO_FAIL,
} from '../../actions/booking/bookingInfoActions';

import {
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAIL,
} from '../../actions/booking/deleteBookingActions';

const initialState = {
  userBooking: null,
  bookingInfo: null,
  isFetching: false,
  error: '',
};

export function bookingInfoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKING_INFO_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_BOOKING_INFO_SUCCESS:
      return {
        ...state,
        bookingInfo: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_BOOKING_INFO_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case DELETE_BOOKING_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        userBooking: action.payload,
        isFetching: false,
        error: '',
      };

    case DELETE_BOOKING_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
