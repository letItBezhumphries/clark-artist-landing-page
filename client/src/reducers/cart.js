import {
  CART_ERROR,
  ADD_TO_CART,
  CREATE_CART,
  LOAD_CART,
  REMOVE_FROM_CART,
  DELETE_CART
} from "../actions/types";
import { updateObject } from "../actions/utility";

const initialState = {
  account: null,
  items: [],
  totalPrice: 0,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CART: 
      return {
        ...state,
        
      }
    case ADD_TO_CART: 
      return {
        ...state,
        items: state.items.concat(payload),
        loading: false
      };
    case CART_ERROR: 
      return {
        ...state,
        loading: false,
        error: payload
      }
    default: {
      return state;
    }
  }
}
