import { connect } from 'react-redux';
import { Statistics } from '../../components/Statistics/Statistics';
import { getStats } from '../../actions/stats/statisticsActions';

const mapStateToProps = store => {
  return {
    stats: store.statsReducer.stats,
    isFetching: store.newsFeedReducer.isFetching,
    error: store.newsFeedReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStats: year => dispatch(getStats(year)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);
