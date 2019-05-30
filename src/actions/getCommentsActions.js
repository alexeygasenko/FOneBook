export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL = 'GET_COMMENTS_FAIL';

const commentsRequest = () => {
  return {
    type: GET_COMMENTS_REQUEST,
  };
};

const commentsSuccess = comments => {
  return {
    type: GET_COMMENTS_SUCCESS,
    payload: comments,
  };
};

const commentsFail = error => {
  return {
    type: GET_COMMENTS_FAIL,
    payload: error,
  };
};

export function getComments(url) {
  return dispatch => {
    dispatch(commentsRequest());

    fetch(`http://localhost:8000/api/comments/${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(commentsSuccess(res)),
        e => dispatch(commentsFail(e))
      );
  };
}
