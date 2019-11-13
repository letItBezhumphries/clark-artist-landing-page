import {
  ADD_PORTFOLIO,
  ADD_IMAGE,
  REQUEST_ERROR,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  GET_IMAGE
} from "../actions/types";

const initialState = {
  loading: true,
  portfolios: [],
  images: [],
  gallery: [],
  image: null,
  portfolio: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PORTFOLIO:
      return {
        ...state,
        portfolios: [payload, ...state.portfolios],
        loading: false
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, payload],
        loading: false
      };
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
      }
    case GET_IMAGE: 
      return {
        ...state,
        loading: false,
        image: payload 
      }
    case PORTFOLIO_ERROR:
    case IMAGE_ERROR:
    case REQUEST_ERROR:
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
