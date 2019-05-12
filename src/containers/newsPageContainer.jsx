import { connect } from 'react-redux';
import { NewsPage } from '../components/News/NewsPage/NewsPage';
import { getNewsPage } from '../actions/news/newsPageActions';

const mapStateToProps = store => {
  return {
    newsPage: store.newsPageReducer.newsPage,
    otherNews: store.newsPageReducer.otherNews,
    isFetching: store.newsPageReducer.isFetching,
    error: store.newsPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsPage: url => dispatch(getNewsPage(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
