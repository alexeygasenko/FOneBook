import { connect } from 'react-redux';
import { AutoFeed } from '../../components/Auto/AutoFeed/AutoFeed';
import { getAutoFeed } from '../../actions/auto/autoFeedActions';

const mapStateToProps = store => {
  return {
    autoFeed: store.autoFeedReducer.autoFeed,
    isFetching: store.autoFeedReducer.isFetching,
    error: store.autoFeedReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAutoFeed: type => dispatch(getAutoFeed(type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoFeed);
