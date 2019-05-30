import { connect } from 'react-redux';
import { NewsPage } from '../../components/News/NewsPage/NewsPage';
import { getNewsPage } from '../../actions/news/newsPageActions';
import { getComments } from '../../actions/getCommentsActions';

const mapStateToProps = store => {
  return {
    newsPage: store.newsPageReducer.newsPage,
    otherNews: store.newsPageReducer.otherNews,
    comments: store.commentsReducer.comments,
    isFetching: store.newsPageReducer.isFetching,
    error: store.newsPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsPage: url => dispatch(getNewsPage(url)),
    getComments: url => dispatch(getComments(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsPage);
