import { connect } from 'react-redux';
import { EditProfile } from '../components/UserProfile/EditProfile/EditProfile';
import { getUserProfile } from '../actions/getUserProfileActions';
import { updateName, updatePassword } from '../actions/editProfileActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    user: store.userProfileReducer.user,
    isFetching: store.userProfileReducer.isFetching,
    errors: store.userProfileReducer.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: userId => dispatch(getUserProfile(userId)),
    updateName: (userId, name) => dispatch(updateName(userId, name)),
    updatePassword: (userId, oldPassword, newPassword) =>
      dispatch(updatePassword(userId, oldPassword, newPassword)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
