import {
  GET_NEWS_FEED_REQUEST,
  GET_NEWS_FEED_SUCCESS,
  GET_NEWS_FEED_FAIL,
} from '../actions/news/newsFeedActions';

const initialState = {
  newsFeed: [],
  isFetching: false,
  error: '',
};

export function newsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_FEED_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_NEWS_FEED_SUCCESS:
      return {
        ...state,
        newsFeed: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_NEWS_FEED_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
