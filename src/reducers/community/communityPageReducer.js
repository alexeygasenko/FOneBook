import {
  GET_COMMUNITY_PAGE_REQUEST,
  GET_COMMUNITY_PAGE_SUCCESS,
  GET_COMMUNITY_PAGE_FAIL,
} from '../../actions/community/communityPageActions';

import {
  GET_COMMUNITY_RATING_REQUEST,
  GET_COMMUNITY_RATING_SUCCESS,
  GET_COMMUNITY_RATING_FAIL,
} from '../../actions/community/communityRatingActions';

const initialState = {
  communityPage: null,
  isFetching: false,
  error: '',
};

export function communityPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMUNITY_PAGE_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_COMMUNITY_PAGE_SUCCESS:
      return {
        ...state,
        communityPage: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_COMMUNITY_PAGE_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case GET_COMMUNITY_RATING_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_COMMUNITY_RATING_SUCCESS:
      return {
        ...state,
        communityPage: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_COMMUNITY_RATING_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
