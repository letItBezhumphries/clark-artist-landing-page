import {
  REQUEST_ERROR,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  GET_PORTFOLIO
} from "../actions/types";

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
    case GET_PORTFOLIO:
      return {
        ...state,
        portfolio: {
          ...state.portfolio, 
          title: payload.title,
          description: payload.description,
          _id: payload._id,
          images: payload.images
        },
        loading: false
      };
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