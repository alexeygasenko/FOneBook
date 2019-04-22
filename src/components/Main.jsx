import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import jwt_decode from 'jwt-decode';

import store from '../store/store';
import Loading from './Loading/Loading';
import delay from './Loading/Delay';
import setAuthToken from '../setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authentication';

let LoadableNews = Loadable({
  loader: () =>
    delay(1500).then(() => import('../containers/newsFeedContainer')),
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

let LoadableBookings = Loadable({
  loader: () =>
    delay(500).then(() => import('../containers/bookingsListContainer')),
  loading: Loading,
});

let LoadableBookingInfo = Loadable({
  loader: () =>
    delay(500).then(() => import('../containers/bookingInfoContainer')),
  loading: Loading,
});

let LoadableBookTicket = Loadable({
  loader: () =>
    delay(500).then(() => import('../containers/bookTicketContainer')),
  loading: Loading,
});

let LoadableNewsPage = Loadable({
  loader: () =>
    delay(500).then(() => import('../containers/newsPageContainer')),
  loading: Loading,
});

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  }
}

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LoadableNews} />
            <Route exact path="/history" component={LoadableHistory} />
            <Route exact path="/auto" component={LoadableAuto} />
            <Route exact path="/stats" component={LoadableStats} />

            <Route exact path="/login" component={LoadableLogin} />
            <Route
              exact
              path="/registration"
              component={LoadableRegistration}
            />

            <Route exact path="/bookings" component={LoadableBookings} />
            <Route
              exact
              path="/bookings/book-a-ticket"
              component={LoadableBookTicket}
            />

            <Route path="/news/:url" component={LoadableNewsPage} />
            <Route
              path="/bookings/booking-info/:id"
              component={LoadableBookingInfo}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
