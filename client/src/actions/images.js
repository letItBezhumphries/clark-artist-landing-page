import axios from "axios";
import {
  GET_IMAGE,
  ADD_PORTFOLIO,
  ADD_IMAGE,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  // LOAD_PORTFOLIO_IMAGES,
  LOAD_GALLERY,
  REQUEST_ERROR
} from "./types";

//@route  GET /gallery 
//@desc loads the gallery of background images 
export const loadGallery = () => async dispatch => {
  try {
    const res = await axios.get('/api/images/gallery');
    // const portfolios = await axios.get('/portfolios');
    // const images = await axios.get('/images');
   

    dispatch({ type: LOAD_GALLERY, payload: res.data });
    

  } catch (err) {
    dispatch({ type: REQUEST_ERROR });
  }
}

export const loadImages = () => async dispatch => {
  try {
    const res = await axios.get('/api/images/store');

    console.log('loadImages in admin.js', res.data);

    dispatch({ type: LOAD_IMAGES, payload: res.data });

  } catch (err) {
    dispatch({ type: REQUEST_ERROR });
  }
}



export const getImage = (filename) => async dispatch => {
  try {
    const res = await axios.get(`/api/images/${filename}`);
    console.log('filename in GETIMAGE', filename);
 
    dispatch({ type: GET_IMAGE, payload: res.data });

  } catch (err) {
    dispatch({ type: IMAGE_ERROR });
  }
}


export const loadPortfolioImages = (title) => async dispatch => {
  try {
    const res = await axios.get(`/api/images/portfolio/${title}`);

    console.log('IN GET PORTFOLIO', res.data);

    dispatch({ type: GET_PORTFOLIO, payload: res.data });

  } catch(err) {
    dispatch({ type: PORTFOLIO_ERROR });
  }
}