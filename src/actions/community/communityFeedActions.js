export const GET_COMMUNITY_FEED_REQUEST = 'GET_COMMUNITY_FEED_REQUEST';
export const GET_COMMUNITY_FEED_SUCCESS = 'GET_COMMUNITY_FEED_SUCCESS';
export const GET_COMMUNITY_FEED_FAIL = 'GET_COMMUNITY_FEED_FAIL';

const communityFeedRequest = () => {
  return {
    type: GET_COMMUNITY_FEED_REQUEST,
  };
};

const communityFeedSuccess = communityFeed => {
  return {
    type: GET_COMMUNITY_FEED_SUCCESS,
    payload: communityFeed,
  };
};

const communityFeedFail = error => {
  return {
    type: GET_COMMUNITY_FEED_FAIL,
    payload: error,
  };
};

export function getCommunityFeed() {
  return dispatch => {
    dispatch(communityFeedRequest());

    fetch('http://localhost:8000/api/community/')
      .then(res => res.json())
      .then(
        res => dispatch(communityFeedSuccess(res)),
        e => dispatch(communityFeedFail(e))
      );
  };
}
