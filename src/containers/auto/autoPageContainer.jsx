import { connect } from 'react-redux';
import { AutoPage } from '../../components/Auto/AutoPage/AutoPage';
import { getAutoPage } from '../../actions/auto/autoPageActions';

const mapStateToProps = store => {
  return {
    autoPage: store.autoPageReducer.autoPage,
    isFetching: store.autoPageReducer.isFetching,
    error: store.autoPageReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAutoPage: url => dispatch(getAutoPage(url)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoPage);
