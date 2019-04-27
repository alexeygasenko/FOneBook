export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_FAIL = 'GET_USER_PROFILE_FAIL';

const getUserProfileRequest = () => {
  return {
    type: GET_USER_PROFILE_REQUEST,
  };
};

const getUserProfileSuccess = user => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: user,
  };
};

const getUserProfileFail = error => {
  return {
    type: GET_USER_PROFILE_FAIL,
    payload: error,
  };
};

export function getUserProfile(userId) {
  return dispatch => {
    dispatch(getUserProfileRequest());

    fetch(`http://localhost:8000/api/users/my-profile/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        // eslint-disable-next-line prettier/prettier
        Authorization: localStorage.getItem('jwtToken'),
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(getUserProfileSuccess(res)),
        e => dispatch(getUserProfileFail(e))
      );
  };
}
