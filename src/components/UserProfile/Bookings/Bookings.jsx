import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import BookingCard from './BookingCard/BookingCard';
import './Bookings.css';

export default class Bookings extends React.Component {
  render() {
    let bookingsComponent;

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
          <Button className="book-ticket" tag={Link} to="/">
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
