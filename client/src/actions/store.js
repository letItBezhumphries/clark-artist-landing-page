import axios from "axios";
import {
  GET_IMAGE,
  GET_PORTFOLIO,
  PORTFOLIO_ERROR,
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  REQUEST_ERROR
} from "./types";

//@route  GET /gallery 
//@desc loads the gallery of background images 
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

    console.log('loadImages in images.js', res.data);

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


export const getPortfolio = (title) => async dispatch => {
  try {
    const res = await axios.get(`/api/images/portfolios/${title}`);

    console.log('IN GET PORTFOLIO', res.data[0]);

    dispatch({ type: GET_PORTFOLIO, payload: res.data[0] });

  } catch(err) {
    dispatch({ type: PORTFOLIO_ERROR });
  }
}

export const loadPortfolios = () => async dispatch => {
  try {
    
    const res = await axios.get('/api/images/portfolios');

    console.log('IN LOADPORTFOLIOS', res.data[0]);

    dispatch({ type: LOAD_PORTFOLIOS, payload: res.data });
    dispatch({ type: GET_PORTFOLIO, payload: res.data[0] });

  } catch (err) {
    dispatch({ type: PORTFOLIO_ERROR });
  }
}

// export const loadStore = () => async dispatch => {
//   try {
//     loadGallery();
//     loadImages();
//     loadStore();
//   } catch (err) {
//     dispatch({ type: REQUEST_ERROR });
//   }
// }