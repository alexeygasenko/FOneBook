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

    let bookingsComponent;

    if (!isAuthenticated) {
      bookingsComponent = (
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
      return bookingsComponent;
    } else if (isFetching) {
      bookingsComponent = <Error error="Идёт загрузка..." />;
    } else if (error || !bookingsList.length) {
      bookingsComponent = <Error error="Забронированных билетов пока нет." />;
    } else {
      bookingsComponent = bookingsList
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
          <div className="row">{bookingsComponent}</div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
