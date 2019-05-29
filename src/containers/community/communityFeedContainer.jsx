import { connect } from 'react-redux';
import { CommunityFeed } from '../../components/Community/CommunityFeed/CommunityFeed';
import { getCommunityFeed } from '../../actions/community/communityFeedActions';

const mapStateToProps = store => {
  return {
    communityFeed: store.communityFeedReducer.communityFeed,
    isFetching: store.communityFeedReducer.isFetching,
    error: store.communityFeedReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCommunityFeed: () => dispatch(getCommunityFeed()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityFeed);
