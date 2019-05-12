export const GET_AUTO_PAGE_REQUEST = 'GET_AUTO_PAGE_REQUEST';
export const GET_AUTO_PAGE_SUCCESS = 'GET_AUTO_PAGE_SUCCESS';
export const GET_AUTO_PAGE_FAIL = 'GET_AUTO_PAGE_FAIL';

const autoPageRequest = () => {
  return {
    type: GET_AUTO_PAGE_REQUEST,
  };
};

const autoPageSuccess = autoPage => {
  return {
    type: GET_AUTO_PAGE_SUCCESS,
    payload: autoPage,
  };
};

const autoPageFail = error => {
  return {
    type: GET_AUTO_PAGE_FAIL,
    payload: error,
  };
};

export function getAutoPage(url) {
  return dispatch => {
    dispatch(autoPageRequest());

    fetch(`http://localhost:8000/api/auto/article/${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(autoPageSuccess(res)),
        e => dispatch(autoPageFail(e))
      );
  };
}
