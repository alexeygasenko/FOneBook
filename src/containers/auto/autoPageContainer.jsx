import { connect } from 'react-redux';
import { AutoPage } from '../../components/Auto/AutoPage/AutoPage';
import { getAutoPage } from '../../actions/auto/autoPageActions';
import { getComments } from '../../actions/getCommentsActions';

const mapStateToProps = store => {
  return {
    autoPage: store.autoPageReducer.autoPage,
    comments: store.commentsReducer.comments,
    isFetching: store.autoPageReducer.isFetching,
    error: store.autoPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAutoPage: url => dispatch(getAutoPage(url)),
    getComments: url => dispatch(getComments(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoPage);
