import React from 'react';
import { Helmet } from 'react-helmet';
import ScrollUpButton from 'react-scroll-up-button';

import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

export default class Bookings extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Бронирование билетов на Гран-при - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <ScrollUpButton />
        <Footer />
      </React.Fragment>
    );
  }
}
