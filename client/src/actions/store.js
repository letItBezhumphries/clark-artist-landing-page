import axios from "axios";
import {
  GET_IMAGE,
  GET_SELECTED_ARTWORK,
  GET_SELECTED_ARTWORK_FAILURE,
  CLEAR_SELECTED_ARTWORK,
  GET_PORTFOLIO,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  REQUEST_ERROR,

} from "./types";

//@route  GET /gallery 
//@desc loads the carousel with background images 
export const loadGallery = () => async dispatch => {
  try {
    const res = await axios.get('/api/images/gallery');

    dispatch({ type: LOAD_GALLERY, payload: res.data });
    
  } catch (err) {
    dispatch({ type: REQUEST_ERROR });
  }
}


export const loadImages = () => async dispatch => {
  try {
    const res = await axios.get('/api/images/store');

    // console.log('loadImages in images.js', res.data);

    dispatch({ type: LOAD_IMAGES, payload: res.data });

  } catch (err) {
    dispatch({ type: REQUEST_ERROR });
  }
}


export const getImage = (filename) => async dispatch => {
  try {
    const res = await axios.get(`/api/images/${filename}`);
    // console.log('filename in GETIMAGE', filename);
 
    dispatch({ type: GET_IMAGE, payload: res.data });

  } catch (err) {
    dispatch({ type: IMAGE_ERROR });
  }
}

export const getSelectedArtwork = (id, image, history) => async dispatch => {
  try {
    // const res = await axios.get(`/api/images/store/artwork/${id}`);
    //  console.log('getSelectedArtwork action dispatched this payload', res.data[0]);
    
    // dispatch({ type: GET_SELECTED_ARTWORK, payload: res.data[0] });
    
    dispatch({ type: GET_SELECTED_ARTWORK, payload: image });
    history.replace(`/shop/artwork/${id}`)

  } catch (err) {
    dispatch({ type: GET_SELECTED_ARTWORK_FAILURE, payload: err  });
  }
}

export const clearSelectedArtwork = () => async dispatch => {
  try {
    dispatch({ type: CLEAR_SELECTED_ARTWORK });
  } catch (err) {
    dispatch({ type: REQUEST_ERROR, payload: err  });
  }
}


export const getPortfolio = (title) => async dispatch => {
  try {
    const res = await axios.get(`/api/images/portfolios/${title}`);

    console.log('IN GET PORTFOLIO', res.data[0]);

    dispatch({ type: GET_SELECTED_PORTFOLIO, payload: res.data[0] });

  } catch(err) {
    dispatch({ type: PORTFOLIO_ERROR });
  }
}

export const loadPortfolios = () => async dispatch => {
  try {
    
    const res = await axios.get('/api/images/portfolios');

    console.log('IN LOADPORTFOLIOS', res.data);

    dispatch({ type: LOAD_PORTFOLIOS, payload: res.data });
    // dispatch({ type: GET_PORTFOLIO, payload: res.data[0] });

  } catch (err) {
    dispatch({ type: PORTFOLIO_ERROR });
  }
}

export const addToCart = (id, image, history) => async dispatch => {
  try {
    dispatch({ type: ADD_TO_CART, payload: image });
    history.push(`/shop/cart/${id}`);
  } catch (err) {
    dispatch({ type: REQUEST_ERROR, payload: err });
  }
}

export const removeFromCart = (id, image, history) => async dispatch => {
  try {
    
  } catch (err) {
    dispatch({ type: REQUEST_ERROR, payload: err });

  }
}