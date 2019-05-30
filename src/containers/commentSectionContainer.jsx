import { connect } from 'react-redux';
import CommentSection from '../components/CommentSection/CommentSection';
import { getComments } from '../actions/getCommentsActions';
import { submitComment } from '../actions/submitCommentActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    comments: store.commentsReducer.comments,
    isFetching: store.commentsReducer.isFetching,
    error: store.commentsReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getComments: url => dispatch(getComments(url)),
    submitComment: (userId, url, text) =>
      dispatch(submitComment(userId, url, text)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentSection);
