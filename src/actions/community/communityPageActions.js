export const GET_COMMUNITY_PAGE_REQUEST = 'GET_COMMUNITY_PAGE_REQUEST';
export const GET_COMMUNITY_PAGE_SUCCESS = 'GET_COMMUNITY_PAGE_SUCCESS';
export const GET_COMMUNITY_PAGE_FAIL = 'GET_COMMUNITY_PAGE_FAIL';

const communityPageRequest = () => {
  return {
    type: GET_COMMUNITY_PAGE_REQUEST,
  };
};

const communityPageSuccess = communityPage => {
  return {
    type: GET_COMMUNITY_PAGE_SUCCESS,
    payload: communityPage,
  };
};

const communityPageFail = error => {
  return {
    type: GET_COMMUNITY_PAGE_FAIL,
    payload: error,
  };
};

export function getCommunityPage(url) {
  return dispatch => {
    dispatch(communityPageRequest());

    fetch(`http://localhost:8000/api/community/${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(communityPageSuccess(res)),
        e => dispatch(communityPageFail(e))
      );
  };
}
