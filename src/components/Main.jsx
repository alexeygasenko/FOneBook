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

//================================================================================
// News
//================================================================================
let LoadableNews = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/news/newsFeedContainer')),
  loading: Loading,
});

let LoadableNewsPage = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/news/newsPageContainer')),
  loading: Loading,
});

//================================================================================
// History
//================================================================================
let LoadableHistory = Loadable({
  loader: () => delay(0).then(() => import('./History/History')),
  loading: Loading,
});

let LoadableHistoryFeed = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/history/historyFeedContainer')),
  loading: Loading,
});

let LoadableHistoryPage = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/history/historyPageContainer')),
  loading: Loading,
});

//================================================================================
// Auto
//================================================================================
let LoadableAuto = Loadable({
  loader: () => delay(0).then(() => import('./Auto/Auto')),
  loading: Loading,
});

let LoadableAutoFeed = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/auto/autoFeedContainer')),
  loading: Loading,
});

let LoadableAutoPage = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/auto/autoPageContainer')),
  loading: Loading,
});

//================================================================================
// Statistics
//================================================================================
let LoadableStats = Loadable({
  loader: () => delay(0).then(() => import('./Statistics/Statistics')),
  loading: Loading,
});

//================================================================================
// Authorization and user profile
//================================================================================
let LoadableLogin = Loadable({
  loader: () => delay(0).then(() => import('./Authorization/Login/Login')),
  loading: Loading,
});

let LoadableRegistration = Loadable({
  loader: () =>
    delay(0).then(() => import('./Authorization/Registration/Registration')),
  loading: Loading,
});

let LoadableProfile = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/userProfileContainer')),
  loading: Loading,
});

//================================================================================
// Booking
//================================================================================
let LoadableBookings = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/booking/bookingsListContainer')),
  loading: Loading,
});

let LoadableBookingInfo = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/booking/bookingInfoContainer')),
  loading: Loading,
});

let LoadableBookTicket = Loadable({
  loader: () =>
    delay(0).then(() => import('../containers/booking/bookTicketContainer')),
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

            <Route path="/news/:url" component={LoadableNewsPage} />

            <Route exact path="/history" component={LoadableHistory} />
            <Route path="/history/:type" component={LoadableHistoryFeed} />
            <Route
              path="/history-article/:url"
              component={LoadableHistoryPage}
            />

            <Route exact path="/auto" component={LoadableAuto} />
            <Route path="/auto/:type" component={LoadableAutoFeed} />
            <Route path="/auto-article/:url" component={LoadableAutoPage} />

            <Route exact path="/stats" component={LoadableStats} />

            <Route exact path="/login" component={LoadableLogin} />
            <Route
              exact
              path="/registration"
              component={LoadableRegistration}
            />
            <Route exact path="/my-profile" component={LoadableProfile} />

            <Route exact path="/bookings" component={LoadableBookings} />
            <Route
              exact
              path="/bookings/book-a-ticket"
              component={LoadableBookTicket}
            />

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
