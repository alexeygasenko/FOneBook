import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import store from '../store/store';
import CustomNavbar from './Navbar/Navbar';
import Loading from './Loading/Loading';
import delay from './Loading/Delay';

let LoadableNews = Loadable({
  loader: () => delay(1500).then(() => import('./News/NewsFeed/NewsFeed')),
  loading: Loading,
});

let LoadableHistory = Loadable({
  loader: () => delay(1500).then(() => import('./History/History')),
  loading: Loading,
});

let LoadableAuto = Loadable({
  loader: () => delay(1500).then(() => import('./Auto/Auto')),
  loading: Loading,
});

let LoadableStats = Loadable({
  loader: () => delay(1500).then(() => import('./Statistics/Statistics')),
  loading: Loading,
});

let LoadableLogin = Loadable({
  loader: () => delay(1500).then(() => import('./Authorization/Login/Login')),
  loading: Loading,
});

let LoadableRegistration = Loadable({
  loader: () =>
    delay(1500).then(() => import('./Authorization/Registration/Registration')),
  loading: Loading,
});

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <React.Fragment>
                <CustomNavbar active="Новости" />
                <LoadableNews />
              </React.Fragment>
            </Route>

            <Route exact path="/history">
              <React.Fragment>
                <CustomNavbar active="История" />
                <LoadableHistory />
              </React.Fragment>
            </Route>

            <Route exact path="/auto">
              <React.Fragment>
                <CustomNavbar active="Техника" />
                <LoadableAuto />
              </React.Fragment>
            </Route>

            <Route exact path="/stats">
              <React.Fragment>
                <CustomNavbar active="Статистика" />
                <LoadableStats />
              </React.Fragment>
            </Route>

            <Route exact path="/login">
              <React.Fragment>
                <CustomNavbar active="Авторизация" />
                <LoadableLogin />
              </React.Fragment>
            </Route>

            <Route exact path="/registration">
              <React.Fragment>
                <CustomNavbar active="Авторизация" />
                <LoadableRegistration />
              </React.Fragment>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
