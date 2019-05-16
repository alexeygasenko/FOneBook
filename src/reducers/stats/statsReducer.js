import {
  GET_STATS_REQUEST,
  GET_STATS_SUCCESS,
  GET_STATS_FAIL,
} from '../../actions/stats/statisticsActions';

const initialState = {
  stats: null,
  isFetching: false,
  error: '',
};

export function statsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STATS_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case GET_STATS_SUCCESS:
      return {
        ...state,
        stats: action.payload,
        isFetching: false,
        error: '',
      };

    case GET_STATS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
}
