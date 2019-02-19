import React from 'react';
import { Helmet } from 'react-helmet';
import './Statistics.css';
import Footer from '../Footer/Footer';

export default class History extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Статистика - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <Footer />
      </React.Fragment>
    );
  }
}
