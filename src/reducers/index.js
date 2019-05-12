import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

import { newsFeedReducer } from './news/newsFeedReducer';
import { newsPageReducer } from './news/newsPageReducer';

import { historyFeedReducer } from './history/historyFeedReducer';
import { historyPageReducer } from './history/historyPageReducer';

import { bookingsListReducer } from './booking/bookingsListReducer';
import { bookingInfoReducer } from './booking/bookingInfoReducer';
import { bookTicketReducer } from './booking/bookTicketReducer';

import { userProfileReducer } from './userProfileReducer';

export const rootReducer = combineReducers({
  errors: errorReducer,
  auth: authReducer,

  newsFeedReducer: newsFeedReducer,
  newsPageReducer: newsPageReducer,

  historyFeedReducer: historyFeedReducer,
  historyPageReducer: historyPageReducer,

  bookingsListReducer: bookingsListReducer,
  bookingInfoReducer: bookingInfoReducer,
  bookTicketReducer: bookTicketReducer,

  userProfileReducer: userProfileReducer,
});
