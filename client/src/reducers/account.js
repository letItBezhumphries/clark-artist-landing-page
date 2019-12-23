import {
  LOAD_ACCOUNT,
  UPDATE_ACCOUNT,
  CLEAR_ACCOUNT,
  DELETE_ACCOUNT,
  ACCOUNT_ERROR,
  ADD_PAYMENT_METHOD_SUCCESS,
  ADD_PAYMENT_METHOD_FAIL,
  ADD_SHIPPING_SUCCESS,
  ADD_SHIPPING_FAIL
} from "../actions/types";

const initialState = {
  creditCards: [],
  addresses: [],
  user: null,
  orders: [],
  loading: true,
  error: {}
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_ACCOUNT:
      return {
        ...state,
        creditCards: payload.creditCards,
        addresses: payload.addresses,
        user: payload.user,
        orders: payload.orders,
        loading: false
      };
    case CLEAR_ACCOUNT:
    case DELETE_ACCOUNT:
      return {
        ...state,
        creditCards: [],
        addresses: [],
        user: null,
        orders: [],
        loading: false
      };
    case ACCOUNT_ERROR: 
      return {
        ...state,
        error: payload,
        loading: false
      }
    default: 
      return state;
  }
};