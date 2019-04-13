import React from 'react';
/* import { Link } from 'react-router-dom'; */
import ScrollUpButton from 'react-scroll-up-button';
import { Helmet } from 'react-helmet';
import CustomNavbar from '../../Navbar/Navbar';
import './News.css';

import newsPageJSON from '../../../data/newsPage.json';

export default class News extends React.Component {
  render() {
    const { url, date, title, description } = newsPageJSON;
    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <Helmet>
          <title>{title} - FOneBook</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <ScrollUpButton />
        <div className="news">
          {url}
          {date}
          {description}
        </div>
      </React.Fragment>
    );
  }
}
