import {
  REQUEST_ERROR,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  GET_SELECTED_PORTFOLIO,
  CLEAR_SELECTED_ARTWORK,
  GET_SELECTED_ARTWORK,
  GET_SELECTED_ARTWORK_FAILURE
} from "../actions/types";
import { updateObject } from '../actions/utility';


const initialState = {
  loading: true,
  portfolios: [],
  portfolio: null,
  images: [],
  image: null,
  gallery: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_GALLERY:
      return {
        ...state,
        gallery: payload,
        loading: false
      };
    case LOAD_IMAGES:
      return {
        ...state,
        images: payload,
        loading: false
      };
    case LOAD_PORTFOLIOS:
      return {
        ...state,
        portfolios: payload,
        loading: false
      };
    case GET_SELECTED_PORTFOLIO:
      return {
        ...state,
        portfolio: payload,
        loading: false
      };
    case GET_SELECTED_ARTWORK:
      // console.log('in reducer', type, payload); 
      const updatedImage = updateObject(state.image, payload);
      return {
        ...state,
        image: updatedImage,
        loading: false
      };
    case CLEAR_SELECTED_ARTWORK:
      return { 
        ...state,
        image: null,
        loading: false
      };
    case PORTFOLIO_ERROR:
    case GET_SELECTED_ARTWORK_FAILURE:
    case IMAGE_ERROR:
    case REQUEST_ERROR:
      // console.log('in reducer error', payload);
      return {
        ...state,
        loading: false,
        error: payload
      };
    default: {
      return state;
    }
  }
}