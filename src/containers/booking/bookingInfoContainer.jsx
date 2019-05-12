import { connect } from 'react-redux';
import { BookingInfo } from '../../components/UserProfile/Bookings/BookingInfo/BookingInfo';
import { getBookingInfo } from '../../actions/booking/bookingInfoActions';
import { deleteBooking } from '../../actions/booking/deleteBookingActions';

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
    deleteBooking: (eventId, bookingId, tribune, dayOne, dayTwo, dayThree) =>
      dispatch(
        deleteBooking(eventId, bookingId, tribune, dayOne, dayTwo, dayThree)
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingInfo);
