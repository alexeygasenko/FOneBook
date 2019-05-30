export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL = 'ADD_COMMENT_FAIL';

const addCommentRequest = () => {
  return {
    type: ADD_COMMENT_REQUEST,
  };
};

const addCommentSuccess = comments => {
  return {
    type: ADD_COMMENT_SUCCESS,
    payload: comments,
  };
};

const addCommentFail = error => {
  return {
    type: ADD_COMMENT_FAIL,
    payload: error,
  };
};

export function submitComment(userId, url, text) {
  return dispatch => {
    dispatch(addCommentRequest());

    fetch('http://localhost:8000/api/comments/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: userId,
        url: url,
        text: text,
      }),
    })
      .then(res => res.json())
      .then(
        res => dispatch(addCommentSuccess(res)),
        e => dispatch(addCommentFail(e))
      );
  };
}
