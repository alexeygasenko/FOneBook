import {
  GET_HISTORY_PAGE_REQUEST,
  GET_HISTORY_PAGE_SUCCESS,
  GET_HISTORY_PAGE_FAIL,
} from '../actions/history/historyPageActions';

const initialState = {
  historyPage: null,
  isFetching: false,
  error: '',
};

export function historyPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_PAGE_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_HISTORY_PAGE_SUCCESS:
      return {
        ...state,
        historyPage: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_HISTORY_PAGE_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
