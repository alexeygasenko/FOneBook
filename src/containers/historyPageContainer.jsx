import { connect } from 'react-redux';
import { HistoryPage } from '../components/History/HistoryPage/HistoryPage';
import { getHistoryPage } from '../actions/historyPageActions';

const mapStateToProps = store => {
  return {
    historyPage: store.historyPageReducer.historyPage,
    isFetching: store.historyPageReducer.isFetching,
    error: store.historyPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHistoryPage: url => dispatch(getHistoryPage(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPage);
