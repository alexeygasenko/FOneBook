export const GET_NEWS_PAGE_REQUEST = 'GET_NEWS_PAGE_REQUEST';
export const GET_NEWS_PAGE_SUCCESS = 'GET_NEWS_PAGE_SUCCESS';
export const GET_NEWS_PAGE_FAIL = 'GET_NEWS_PAGE_FAIL';

const newsPageRequest = () => {
  return {
    type: GET_NEWS_PAGE_REQUEST,
  };
};

const newsPageSuccess = (newsPage, otherNews) => {
  return {
    type: GET_NEWS_PAGE_SUCCESS,
    payload: {
      newsPage: newsPage,
      otherNews: otherNews,
    },
  };
};

const newsPageFail = error => {
  return {
    type: GET_NEWS_PAGE_FAIL,
    payload: error,
  };
};

export function getNewsPage(url) {
  return dispatch => {
    dispatch(newsPageRequest());

    fetch(`http://localhost:8000/api/news/${url}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(
        res => dispatch(newsPageSuccess(res.newsPage, res.otherNews)),
        e => dispatch(newsPageFail(e))
      );
  };
}
