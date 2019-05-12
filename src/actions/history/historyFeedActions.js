export const GET_HISTORY_FEED_REQUEST = 'GET_HISTORY_FEED_REQUEST';
export const GET_HISTORY_FEED_SUCCESS = 'GET_HISTORY_FEED_SUCCESS';
export const GET_HISTORY_FEED_FAIL = 'GET_HISTORY_FEED_FAIL';

const historyFeedRequest = () => {
  return {
    type: GET_HISTORY_FEED_REQUEST,
  };
};

const historyFeedSuccess = newsFeed => {
  return {
    type: GET_HISTORY_FEED_SUCCESS,
    payload: newsFeed,
  };
};

const historyFeedFail = error => {
  return {
    type: GET_HISTORY_FEED_FAIL,
    payload: error,
  };
};

export function getHistoryFeed(type) {
  return dispatch => {
    dispatch(historyFeedRequest());

    fetch(`http://localhost:8000/api/history/${type}`)
      .then(res => res.json())
      .then(
        res => dispatch(historyFeedSuccess(res)),
        e => dispatch(historyFeedFail(e))
      );
  };
}
