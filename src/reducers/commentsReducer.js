import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
} from '../actions/getCommentsActions';

const initialState = {
  comments: [],
  isFetching: false,
  errors: {},
};

export function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return { ...state, isFetching: true, errors: {} };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isFetching: false,
        errors: {},
      };

    case GET_COMMENTS_FAIL:
      return { ...state, isFetching: false, errors: action.payload.message };

    default:
      return state;
  }
}
