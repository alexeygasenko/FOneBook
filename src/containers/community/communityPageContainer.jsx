import { connect } from 'react-redux';
import { CommunityPage } from '../../components/Community/CommunityPage/CommunityPage';
import { getCommunityPage } from '../../actions/community/communityPageActions';

const mapStateToProps = store => {
  return {
    communityPage: store.communityPageReducer.communityPage,
    isFetching: store.communityPageReducer.isFetching,
    error: store.communityPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCommunityPage: url => dispatch(getCommunityPage(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);
