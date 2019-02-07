import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomNavbar from './Navbar/Navbar';
import NewsFeed from './News/NewsFeed/NewsFeed';
import History from './History/History';

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <React.Fragment>
              <CustomNavbar active="Новости" />
              <NewsFeed />
            </React.Fragment>
          </Route>

          <Route path="/history">
            <React.Fragment>
              <CustomNavbar active="История" />
              <History />
            </React.Fragment>
          </Route>
        </Switch>
      </Router>
    );
  }
}
