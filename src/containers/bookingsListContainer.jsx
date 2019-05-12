import { connect } from 'react-redux';
import { BookingsList } from '../components/UserProfile/Bookings/BookingsList';
import { getBookingsList } from '../actions/booking/bookingsListActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    bookingsList: store.bookingsListReducer.bookingsList,
    isFetching: store.bookingsListReducer.isFetching,
    error: store.bookingsListReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookingsList: userId => dispatch(getBookingsList(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsList);
