export const GET_STATS_REQUEST = 'GET_STATS_REQUEST';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_FAIL = 'GET_STATS_FAIL';

const statsRequest = () => {
  return {
    type: GET_STATS_REQUEST,
  };
};

const statsSuccess = stats => {
  return {
    type: GET_STATS_SUCCESS,
    payload: stats,
  };
};

const statsFail = error => {
  return {
    type: GET_STATS_FAIL,
    payload: error,
  };
};

export function getStats(year) {
  return dispatch => {
    dispatch(statsRequest());

    fetch(`http://localhost:8000/api/stats/${year}`)
      .then(res => res.json())
      .then(res => dispatch(statsSuccess(res)), e => dispatch(statsFail(e)));
  };
}
