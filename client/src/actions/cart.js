import axios from 'axios';
import uuid from "uuid";
import {
  CART_ERROR,
  CREATE_CART,
  ADD_TO_CART,
  LOAD_CART,
  REMOVE_FROM_CART,
  DELETE_CART
} from "./types";


export const createCart = () => async dispatch => {
  

  try {
    const res = axios.post('/api/store')
  } catch (err) {
    
  }
}


export const addToCart = (id, image, history) => async dispatch => {
  try {
    dispatch({ type: ADD_TO_CART, payload: image });
    history.push(`/shop/cart/${id}`);
  } catch (err) {
    dispatch({ type: CART_ERROR, payload: err });
  }
}

// export const removeFromCart = (id, image, history) => async dispatch => {
//   try {
    
//   } catch (err) {
//     dispatch({ type: REQUEST_ERROR, payload: err });

//   }
// }