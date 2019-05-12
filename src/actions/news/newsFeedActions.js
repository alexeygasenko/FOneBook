export const GET_NEWS_FEED_REQUEST = 'GET_NEWS_FEED_REQUEST';
export const GET_NEWS_FEED_SUCCESS = 'GET_NEWS_FEED_SUCCESS';
export const GET_NEWS_FEED_FAIL = 'GET_NEWS_FEED_FAIL';

const newsFeedRequest = () => {
  return {
    type: GET_NEWS_FEED_REQUEST,
  };
};

const newsFeedSuccess = newsFeed => {
  return {
    type: GET_NEWS_FEED_SUCCESS,
    payload: newsFeed,
  };
};

const newsFeedFail = error => {
  return {
    type: GET_NEWS_FEED_FAIL,
    payload: error,
  };
};

export function getNewsFeed() {
  return dispatch => {
    dispatch(newsFeedRequest());

    fetch('http://localhost:8000/api/news')
      .then(res => res.json())
      .then(
        res => dispatch(newsFeedSuccess(res)),
        e => dispatch(newsFeedFail(e))
      );
  };
}
