import { connect } from 'react-redux';
import { CommunityPage } from '../../components/Community/CommunityPage/CommunityPage';
import { getCommunityPage } from '../../actions/community/communityPageActions';
import { changeRating } from '../../actions/community/communityRatingActions';
import { getComments } from '../../actions/getCommentsActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    communityPage: store.communityPageReducer.communityPage,
    comments: store.commentsReducer.comments,
    isFetching: store.communityPageReducer.isFetching,
    error: store.communityPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCommunityPage: url => dispatch(getCommunityPage(url)),
    changeRating: (url, rating) => dispatch(changeRating(url, rating)),
    getComments: url => dispatch(getComments(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);
