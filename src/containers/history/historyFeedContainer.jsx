import { connect } from 'react-redux';
import { HistoryFeed } from '../../components/History/HistoryFeed/HistoryFeed';
import { getHistoryFeed } from '../../actions/history/historyFeedActions';

const mapStateToProps = store => {
  return {
    historyFeed: store.historyFeedReducer.historyFeed,
    isFetching: store.historyFeedReducer.isFetching,
    error: store.historyFeedReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHistoryFeed: type => dispatch(getHistoryFeed(type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryFeed);
