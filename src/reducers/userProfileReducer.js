import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
} from '../actions/getUserProfileActions';

import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
} from '../actions/editProfileActions';

const initialState = {
  user: [],
  isFetching: false,
  errors: {},
};

export function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return { ...state, isFetching: true, errors: {} };

    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        errors: {},
      };

    case GET_USER_PROFILE_FAIL:
      return { ...state, isFetching: false, errors: action.payload.message };

    case EDIT_PROFILE_REQUEST:
      return { ...state, isFetching: true, errors: {} };

    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        errors: {},
      };

    case EDIT_PROFILE_FAIL:
      return { ...state, isFetching: false, errors: action.payload };

    default:
      return state;
  }
}
