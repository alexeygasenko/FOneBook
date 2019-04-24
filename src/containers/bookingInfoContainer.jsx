import { connect } from 'react-redux';
import { BookingInfo } from '../components/UserProfile/Bookings/BookingInfo/BookingInfo';
import { getBookingInfo } from '../actions/bookingInfoActions';
import { deleteBooking } from '../actions/deleteBookingActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    bookingInfo: store.bookingInfoReducer.bookingInfo,
    isFetching: store.bookingInfoReducer.isFetching,
    error: store.bookingsListReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBookingInfo: bookingId => dispatch(getBookingInfo(bookingId)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingInfo);
