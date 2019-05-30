import {
  GET_COMMUNITY_FEED_REQUEST,
  GET_COMMUNITY_FEED_SUCCESS,
  GET_COMMUNITY_FEED_FAIL,
} from '../../actions/community/communityFeedActions';

const initialState = {
  communityFeed: [],
  isFetching: false,
  error: '',
};

export function communityFeedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMUNITY_FEED_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_COMMUNITY_FEED_SUCCESS:
      return {
        ...state,
        communityFeed: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_COMMUNITY_FEED_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
