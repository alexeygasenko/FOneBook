import {
  GET_AUTO_FEED_REQUEST,
  GET_AUTO_FEED_SUCCESS,
  GET_AUTO_FEED_FAIL,
} from '../../actions/auto/autoFeedActions';

const initialState = {
  autoFeed: [],
  isFetching: false,
  error: '',
};

export function autoFeedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUTO_FEED_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_AUTO_FEED_SUCCESS:
      return {
        ...state,
        autoFeed: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_AUTO_FEED_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
