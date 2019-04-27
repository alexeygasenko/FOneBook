import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from '../actions/getUserProfileActions';

const initialState = {
  user: [],
  isFetching: false,
  error: '',
};

export function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_USER_PROFILE_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
