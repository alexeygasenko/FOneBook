import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import BookingCard from './BookingCard/BookingCard';
import './BookingsList.css';

export class BookingsList extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getBookingsList(this.props.auth.user.id);
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { bookingsList, isFetching, error } = this.props;

    let currentBookings;
    let expiredBookings;

    if (!isAuthenticated) {
      currentBookings = (
        <React.Fragment>
          <Helmet>
            <title>Бронирование билетов на Гран-при - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <CustomNavbar />
          <ScrollUpButton />
          <Error error="Авторизируйтесь, чтобы забронировать билет!" />
          <Footer />
        </React.Fragment>
      );
      return currentBookings;
    } else if (isFetching) {
      currentBookings = <Error error="Идёт загрузка..." />;
    } else if (error || !bookingsList.length) {
      currentBookings = (
        <React.Fragment>
          <Helmet>
            <title>Бронирование билетов на Гран-при - FOneBook</title>
            <meta name="description" content="Helmet application" />
          </Helmet>
          <CustomNavbar />
          <ScrollUpButton />
          <div className="bookings">
            <Button
              className="book-ticket-redirect"
              tag={Link}
              to="/bookings/book-a-ticket"
            >
              Забронировать билет
            </Button>
            <div className="current-bookings">Текущие брони</div>
            <Error error="Забронированных билетов пока нет." />
          </div>
          <Footer />
        </React.Fragment>
      );
      return currentBookings;
    } else {
      currentBookings = bookingsList
        .filter(booking => !booking.event.expired)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(booking => {
          return (
            <BookingCard
              key={booking._id}
              id={booking._id}
              title={booking.event.title}
              date={booking.event.date}
              country={booking.event.country}
              tribune={booking.tribune}
              friday={booking.dayOne}
              saturday={booking.dayTwo}
              sunday={booking.dayThree}
            />
          );
        });

      expiredBookings = bookingsList
        .filter(booking => booking.event.expired)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map(booking => {
          return (
            <BookingCard
              key={booking._id}
              id={booking._id}
              title={booking.event.title}
              date={booking.event.date}
              country={booking.event.country}
              tribune={booking.tribune}
              friday={booking.dayOne}
              saturday={booking.dayTwo}
              sunday={booking.dayThree}
            />
          );
        });
    }

    return (
      <React.Fragment>
        <Helmet>
          <title>Бронирование билетов на Гран-при - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <ScrollUpButton />
        <div className="bookings">
          <Button
            className="book-ticket-redirect"
            tag={Link}
            to="/bookings/book-a-ticket"
          >
            Забронировать билет
          </Button>
          <div className="current-bookings">Текущие брони</div>
          <div className="row">{currentBookings}</div>
          <div className="current-bookings">Завершенные брони</div>
          <div className="row">{expiredBookings}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
