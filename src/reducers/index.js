import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import { newsFeedReducer } from './newsFeedReducer';
import { newsPageReducer } from './newsPageReducer';

export const rootReducer = combineReducers({
  errors: errorReducer,
  auth: authReducer,
  newsFeedReducer: newsFeedReducer,
  newsPageReducer: newsPageReducer,
});
