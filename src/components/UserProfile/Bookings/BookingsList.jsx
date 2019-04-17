import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BookingCard from './BookingCard/BookingCard';
import './BookingsList.css';
import emptyPlaceholder from '../../../data/img/empty-placeholder.png';

export class BookingsList extends React.Component {
  componentDidMount() {
    this.props.getBookingsList(this.props.auth.user.id);
  }

  render() {
    const { isAuthenticated } = this.props.auth;

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
          <div className="empty-bookings">
            <img
              className="empty-bookings-img"
              src={emptyPlaceholder}
              alt="News desc"
            />
            <p>Авторизируйтесь, чтобы забронировать билет!</p>
          </div>
          <Footer />
        </React.Fragment>
      );
      return bookingsComponent;
    }

    bookingsComponent = (
      <React.Fragment>
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </React.Fragment>
    );

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