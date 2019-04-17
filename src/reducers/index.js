import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import { newsFeedReducer } from './newsFeedReducer';
import { newsPageReducer } from './newsPageReducer';
import { bookingsListReducer } from './bookingsListReducer';

export const rootReducer = combineReducers({
  errors: errorReducer,
  auth: authReducer,
  newsFeedReducer: newsFeedReducer,
  newsPageReducer: newsPageReducer,
  bookingsListReducer: bookingsListReducer,
});
