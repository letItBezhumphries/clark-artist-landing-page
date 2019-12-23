import axios from "axios";
import {
  GET_IMAGE,
  GET_SELECTED_ARTWORK_SUCCESS,
  GET_SELECTED_ARTWORK_FAIL,
  CLEAR_SELECTED_ARTWORK,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  GET_SELECTED_PORTFOLIO_SUCCESS,
  GET_SELECTED_PORTFOLIO_FAIL,
  REQUEST_ERROR
} from "./types";

//@route  GET /gallery 
//@desc loads the landing page carousel of background images 
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
    
    dispatch({ type: GET_SELECTED_ARTWORK_SUCCESS, payload: image });
    history.replace(`/shop/artwork/${id}`)

  } catch (err) {
    dispatch({ type: GET_SELECTED_ARTWORK_FAIL, payload: err  });
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

    dispatch({ type: GET_SELECTED_PORTFOLIO_SUCCESS, payload: res.data[0] });

  } catch(err) {
    dispatch({ type: GET_SELECTED_PORTFOLIO_FAIL, payload: err });
  }
}

export const loadPortfolios = () => async dispatch => {
  try {
    
    const res = await axios.get('/api/images/portfolios');

    dispatch({ type: LOAD_PORTFOLIOS, payload: res.data });
    // dispatch({ type: GET_PORTFOLIO, payload: res.data[0] });

  } catch (err) {
    dispatch({ type: PORTFOLIO_ERROR, payload: err });
  }
}

