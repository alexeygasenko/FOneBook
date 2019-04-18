import {
  GET_BOOKING_INFO_REQUEST,
  GET_BOOKING_INFO_SUCCESS,
  GET_BOOKING_INFO_FAIL,
} from '../actions/bookingInfoActions';

const initialState = {
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

    default:
      return state;
  }
}
