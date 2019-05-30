import { connect } from 'react-redux';
import { HistoryPage } from '../../components/History/HistoryPage/HistoryPage';
import { getHistoryPage } from '../../actions/history/historyPageActions';
import { getComments } from '../../actions/getCommentsActions';

const mapStateToProps = store => {
  return {
    historyPage: store.historyPageReducer.historyPage,
    comments: store.commentsReducer.comments,
    isFetching: store.historyPageReducer.isFetching,
    error: store.historyPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHistoryPage: url => dispatch(getHistoryPage(url)),
    getComments: url => dispatch(getComments(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPage);
