import React from 'react';
import NewsFeed from './NewsFeed/NewsFeed';

export default class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NewsFeed />
      </React.Fragment>
    );
  }
}
