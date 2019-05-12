import {
  GET_BOOKINGS_LIST_REQUEST,
  GET_BOOKINGS_LIST_SUCCESS,
  GET_BOOKINGS_LIST_FAIL,
} from '../../actions/booking/bookingsListActions';

const initialState = {
  bookingsList: [],
  isFetching: false,
  error: '',
};

export function bookingsListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKINGS_LIST_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_BOOKINGS_LIST_SUCCESS:
      return {
        ...state,
        bookingsList: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_BOOKINGS_LIST_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
