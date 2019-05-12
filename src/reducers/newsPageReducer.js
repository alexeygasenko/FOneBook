import {
  GET_NEWS_PAGE_REQUEST,
  GET_NEWS_PAGE_SUCCESS,
  GET_NEWS_PAGE_FAIL,
} from '../actions/news/newsPageActions';

const initialState = {
  newsPage: null,
  otherNews: [],
  isFetching: false,
  error: '',
};

export function newsPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_PAGE_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_NEWS_PAGE_SUCCESS:
      return {
        ...state,
        newsPage: action.payload.newsPage,
        otherNews: action.payload.otherNews,
        isFetching: false,
        error: '',
      };

    case GET_NEWS_PAGE_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
