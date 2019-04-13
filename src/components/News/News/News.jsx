import React from 'react';
import CustomNavbar from '../../Navbar/Navbar';
import './News.css';

export default class News extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
      </React.Fragment>
    );
  }
}
