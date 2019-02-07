import React from 'react';
import CustomNavbar from './Navbar/Navbar';
import NewsFeed from './News/NewsFeed/NewsFeed';

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CustomNavbar active="Новости" />
        <NewsFeed />
      </React.Fragment>
    );
  }
}
