import React from 'react';
/* import { Link } from 'react-router-dom'; */
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './EditProfile.css';

export default class EditProfile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Профиль - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <CustomNavbar />
        <Error error="азаза иди нахуй" />
        <Footer />
      </React.Fragment>
    );
  }
}
