import { connect } from 'react-redux';
import { NewsFeed } from '../components/News/NewsFeed/NewsFeed';
import { getNewsFeed } from '../actions/newsFeedActions';

const mapStateToProps = store => {
  return {
    newsFeed: store.newsFeedReducer.newsFeed,
    isFetching: store.newsFeedReducer.isFetching,
    error: store.newsFeedReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewsFeed: () => dispatch(getNewsFeed()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
