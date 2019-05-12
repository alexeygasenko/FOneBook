export const GET_AUTO_FEED_REQUEST = 'GET_AUTO_FEED_REQUEST';
export const GET_AUTO_FEED_SUCCESS = 'GET_AUTO_FEED_SUCCESS';
export const GET_AUTO_FEED_FAIL = 'GET_AUTO_FEED_FAIL';

const autoFeedRequest = () => {
  return {
    type: GET_AUTO_FEED_REQUEST,
  };
};

const autoFeedSuccess = autoFeed => {
  return {
    type: GET_AUTO_FEED_SUCCESS,
    payload: autoFeed,
  };
};

const autoFeedFail = error => {
  return {
    type: GET_AUTO_FEED_FAIL,
    payload: error,
  };
};

export function getAutoFeed(type) {
  return dispatch => {
    dispatch(autoFeedRequest());

    fetch(`http://localhost:8000/api/auto/${type}`)
      .then(res => res.json())
      .then(
        res => dispatch(autoFeedSuccess(res)),
        e => dispatch(autoFeedFail(e))
      );
  };
}
