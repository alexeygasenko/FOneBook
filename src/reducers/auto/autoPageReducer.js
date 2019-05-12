import {
  GET_AUTO_PAGE_REQUEST,
  GET_AUTO_PAGE_SUCCESS,
  GET_AUTO_PAGE_FAIL,
} from '../../actions/auto/autoPageActions';

const initialState = {
  autoPage: null,
  isFetching: false,
  error: '',
};

export function autoPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUTO_PAGE_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_AUTO_PAGE_SUCCESS:
      return {
        ...state,
        autoPage: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_AUTO_PAGE_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
