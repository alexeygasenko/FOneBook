import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import { newsFeedReducer } from './newsFeedReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  newsFeedReducer: newsFeedReducer,
});
