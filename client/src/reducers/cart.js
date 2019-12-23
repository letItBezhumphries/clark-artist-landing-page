import {
  LOAD_CART,
  APPLY_DISCOUNT_FAIL,
  APPLY_DISCOUNT_SUCCESS,
  CART_ERROR,
  CLEAR_CART,
  REMOVE_FROM_CART_FAIL,
  REMOVE_FROM_CART_SUCCESS,
  ADD_TO_CART_FAIL,
  ADD_TO_CART_SUCCESS
} from "../actions/types";
// import { updateObject } from "../actions/utility";

const initialState = {
  items: [],
  total: 0,
  discount: 0,
  coupon: null,
  loading: true,
  added: false,
  removed: false,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_CART:
      return {
        ...state,
        items: payload.items,
        total: payload.total,
        loading: false,
        added: false,
        removed: false
      }
    case ADD_TO_CART_SUCCESS:
      console.log('in addToCart reducer', payload); 
      return {
        ...state,
        items: [{...payload}, ...state.items],
        total: state.total + payload.price,
        loading: false,
        added: true,
        removed: false
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        items: state.items.filter(item => item.itemId !== payload._id),
        total: state.total - payload.price,
        loading: false,
        added: false,
        removed: true
      };
    case CLEAR_CART: 
      return {
        ...state,
        items: [],
        total: 0,
        loading: false,
        added: false,
        removed: false
      };
    case APPLY_DISCOUNT_SUCCESS:
      return {
        ...state,
        total: state.total - discount,
        loading: false
      };
    case ADD_TO_CART_FAIL:
    case APPLY_DISCOUNT_FAIL:
    case REMOVE_FROM_CART_FAIL:
    case CART_ERROR: 
      return {
        ...state,
        loading: false,
        error: payload
      };
    default: 
      return state;
  }
};
