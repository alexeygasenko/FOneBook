import { connect } from 'react-redux';
import { EditProfile } from '../components/UserProfile/EditProfile/EditProfile';
import { getUserProfile } from '../actions/getUserProfileActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    user: store.userProfileReducer.user,
    isFetching: store.userProfileReducer.isFetching,
    error: store.userProfileReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: userId => dispatch(getUserProfile(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
