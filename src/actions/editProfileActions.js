export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAIL = 'EDIT_PROFILE_FAIL';

const editProfileRequest = () => {
  return {
    type: EDIT_PROFILE_REQUEST,
  };
};

const editProfileSuccess = user => {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: user,
  };
};

const editProfileFail = errors => {
  return {
    type: EDIT_PROFILE_FAIL,
    payload: errors,
  };
};

export function updateName(userId, name) {
  return dispatch => {
    dispatch(editProfileRequest());

    fetch(`http://localhost:8000/api/users/my-profile/${userId}/name`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        // eslint-disable-next-line prettier/prettier
        Authorization: localStorage.getItem('jwtToken'),
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then(res => res.json())
      .then(res => dispatch(editProfileSuccess(res)))
      .catch(err => dispatch(editProfileFail(err)));
  };
}

export function updatePassword(userId, oldPassword, newPassword) {
  return dispatch => {
    dispatch(editProfileRequest());

    fetch(`http://localhost:8000/api/users/my-profile/${userId}/password`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        // eslint-disable-next-line prettier/prettier
        Authorization: localStorage.getItem('jwtToken'),
      },
      body: JSON.stringify({
        oldPassword: oldPassword,
        newPassword: newPassword,
      }),
    })
      .then(res => res.json())
      .then(res => dispatch(editProfileSuccess(res)))
      .catch(err => dispatch(editProfileFail(err)));
  };
}
