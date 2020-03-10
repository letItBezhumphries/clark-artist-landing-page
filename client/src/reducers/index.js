
import alert from './alert';
import auth from './auth';
import admin from './admin';
import shop from './shop';
import cart from './cart';
import account from './account';
import order from './order';
import { combineReducers } from 'redux';

export default combineReducers({
  alert,
  auth,
  admin,
  shop,
  cart,
  account,
  order
});