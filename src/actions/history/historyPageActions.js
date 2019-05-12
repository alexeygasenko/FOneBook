export const GET_HISTORY_PAGE_REQUEST = 'GET_HISTORY_PAGE_REQUEST';
export const GET_HISTORY_PAGE_SUCCESS = 'GET_HISTORY_PAGE_SUCCESS';
export const GET_HISTORY_PAGE_FAIL = 'GET_HISTORY_PAGE_FAIL';

const historyPageRequest = () => {
  return {
    type: GET_HISTORY_PAGE_REQUEST,
  };
};

const historyPageSuccess = historyPage => {
  return {
    type: GET_HISTORY_PAGE_SUCCESS,
    payload: historyPage,
  };
};

const historyPageFail = error => {
  return {
    type: GET_HISTORY_PAGE_FAIL,
    payload: error,
  };
};

export function getHistoryPage(url) {
  return dispatch => {
    dispatch(historyPageRequest());

    fetch(`http://localhost:8000/api/history/article/${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(historyPageSuccess(res)),
        e => dispatch(historyPageFail(e))
      );
  };
}
