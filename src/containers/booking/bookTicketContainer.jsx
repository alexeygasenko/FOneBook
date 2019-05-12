import { connect } from 'react-redux';
import { BookTicket } from '../../components/UserProfile/Bookings/BookTicket/BookTicket';
import { bookTicket } from '../../actions/booking/bookTicketActions';
import { getEventList } from '../../actions/booking/eventActions';

const mapStateToProps = store => {
  return {
    auth: store.auth,
    userBooking: store.bookTicketReducer.userBooking,
    events: store.bookTicketReducer.events,
    isFetching: store.bookTicketReducer.isFetching,
    error: store.bookTicketReducer.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookTicket: (eventId, userId, tribune, dayOne, dayTwo, dayThree) =>
      dispatch(bookTicket(eventId, userId, tribune, dayOne, dayTwo, dayThree)),
    getEventList: () => dispatch(getEventList()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookTicket);
