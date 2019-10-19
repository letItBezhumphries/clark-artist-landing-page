
import alert from './alert';
import auth from './auth';
import admin from './admin';
import { combineReducers } from 'redux';

export default combineReducers({
  alert,
  auth,
  admin
});