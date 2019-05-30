export const GET_COMMUNITY_RATING_REQUEST = 'GET_COMMUNITY_RATING_REQUEST';
export const GET_COMMUNITY_RATING_SUCCESS = 'GET_COMMUNITY_RATING_SUCCESS';
export const GET_COMMUNITY_RATING_FAIL = 'GET_COMMUNITY_RATING_FAIL';

const communityRatingRequest = () => {
  return {
    type: GET_COMMUNITY_RATING_REQUEST,
  };
};

const communityRatingSuccess = communityPage => {
  return {
    type: GET_COMMUNITY_RATING_SUCCESS,
    payload: communityPage,
  };
};

const communityRatingFail = error => {
  return {
    type: GET_COMMUNITY_RATING_FAIL,
    payload: error,
  };
};

export function changeRating(url, rating) {
  return dispatch => {
    dispatch(communityRatingRequest());

    fetch(`http://localhost:8000/api/community/rating/${url}/${rating}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(communityRatingSuccess(res)),
        e => dispatch(communityRatingFail(e))
      );
  };
}
