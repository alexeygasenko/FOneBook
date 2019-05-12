import {
  GET_HISTORY_FEED_REQUEST,
  GET_HISTORY_FEED_SUCCESS,
  GET_HISTORY_FEED_FAIL,
} from '../../actions/history/historyFeedActions';

const initialState = {
  historyFeed: [],
  isFetching: false,
  error: '',
};

export function historyFeedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_FEED_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_HISTORY_FEED_SUCCESS:
      return {
        ...state,
        historyFeed: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_HISTORY_FEED_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
