import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import CustomNavbar from './Navbar/Navbar';
import History from './History/History';
import Loading from './Loading/Loading';
import delay from './Loading/Delay';

let LoadableNews = Loadable({
  loader: () => delay(1500).then(() => import('./News/NewsFeed/NewsFeed')),
  loading: Loading,
});

export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <React.Fragment>
              <CustomNavbar active="Новости" />
              <LoadableNews />
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
