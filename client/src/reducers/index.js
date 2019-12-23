
import alert from './alert';
import auth from './auth';
import admin from './admin';
import store from './store';
import cart from './cart';
import account from './account';
import { combineReducers } from 'redux';

export default combineReducers({
  alert,
  auth,
  admin,
  store,
  cart,
  account
});