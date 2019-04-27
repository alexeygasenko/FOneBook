import React from 'react';
/* import { Link } from 'react-router-dom'; */
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Error from '../../Loading/Error/Error';
import './EditProfile.css';

export class EditProfile extends React.Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.auth.user.id);
  }

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
