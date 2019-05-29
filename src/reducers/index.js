import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

import { newsFeedReducer } from './news/newsFeedReducer';
import { newsPageReducer } from './news/newsPageReducer';

import { communityFeedReducer } from './community/communityFeedReducer';
import { communityPageReducer } from './community/communityPageReducer';

import { historyFeedReducer } from './history/historyFeedReducer';
import { historyPageReducer } from './history/historyPageReducer';

import { autoFeedReducer } from './auto/autoFeedReducer';
import { autoPageReducer } from './auto/autoPageReducer';

import { statsReducer } from './stats/statsReducer';

import { bookingsListReducer } from './booking/bookingsListReducer';
import { bookingInfoReducer } from './booking/bookingInfoReducer';
import { bookTicketReducer } from './booking/bookTicketReducer';

import { userProfileReducer } from './userProfileReducer';

export const rootReducer = combineReducers({
  errors: errorReducer,
  auth: authReducer,

  newsFeedReducer: newsFeedReducer,
  newsPageReducer: newsPageReducer,

  communityFeedReducer: communityFeedReducer,
  communityPageReducer: communityPageReducer,

  historyFeedReducer: historyFeedReducer,
  historyPageReducer: historyPageReducer,

  autoFeedReducer: autoFeedReducer,
  autoPageReducer: autoPageReducer,

  statsReducer: statsReducer,

  bookingsListReducer: bookingsListReducer,
  bookingInfoReducer: bookingInfoReducer,
  bookTicketReducer: bookTicketReducer,

  userProfileReducer: userProfileReducer,
});
