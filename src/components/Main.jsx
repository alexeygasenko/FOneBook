import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import store from '../store/store';
import Loading from './Loading/Loading';
import delay from './Loading/Delay';

let LoadableNews = Loadable({
  loader: () => delay(1500).then(() => import('./News/NewsFeed/NewsFeed')),
  loading: Loading,
});

let LoadableHistory = Loadable({
  loader: () => delay(500).then(() => import('./History/History')),
  loading: Loading,
});

let LoadableAuto = Loadable({
  loader: () => delay(500).then(() => import('./Auto/Auto')),
  loading: Loading,
});

let LoadableStats = Loadable({
  loader: () => delay(500).then(() => import('./Statistics/Statistics')),
  loading: Loading,
});

let LoadableLogin = Loadable({
  loader: () => delay(500).then(() => import('./Authorization/Login/Login')),
  loading: Loading,
});

let LoadableRegistration = Loadable({
  loader: () =>
    delay(500).then(() => import('./Authorization/Registration/Registration')),
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
                <LoadableNews />
              </React.Fragment>
            </Route>

            <Route exact path="/history">
              <React.Fragment>
                <LoadableHistory />
              </React.Fragment>
            </Route>

            <Route exact path="/auto">
              <React.Fragment>
                <LoadableAuto />
              </React.Fragment>
            </Route>

            <Route exact path="/stats">
              <React.Fragment>
                <LoadableStats />
              </React.Fragment>
            </Route>

            <Route exact path="/login">
              <React.Fragment>
                <LoadableLogin />
              </React.Fragment>
            </Route>

            <Route exact path="/registration">
              <React.Fragment>
                <LoadableRegistration />
              </React.Fragment>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
