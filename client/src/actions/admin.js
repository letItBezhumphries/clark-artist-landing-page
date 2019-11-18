import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_IMAGE, 
  ADD_PORTFOLIO, 
  ADD_IMAGE, 
  PORTFOLIO_ERROR, 
  IMAGE_ERROR,
  LOAD_IMAGES,
  LOAD_GALLERY,
  LOAD_PORTFOLIOS,
  REQUEST_ERROR
} from './types';


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

    console.log('IN GET IMAGE', res.data);
 
    dispatch({ type: GET_IMAGE, payload: res.data });

  } catch (err) {
    dispatch({ type: IMAGE_ERROR });
  }
}

//(formData, history, edit = false)
export const addImage = ({ title, fileName, description, imageUrl, portfolio, isGallery }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  // const body = JSON.stringify({ title, fileId, fileName, description, imageUrl, portfolio, isGallery });
  const body = JSON.stringify({ title, fileName, description, imageUrl, portfolio, isGallery });

  console.log('body', body);

  try {
    const res = await axios.post('http://localhost:3003/admin/upload/image', body, config);
    
    console.log('new addImage', res.data);
    
    dispatch({ 
      type: ADD_IMAGE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Image Updated': 'Image Created', 'success'));

    //if (!edit) { history.push('admindashboard')}

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: IMAGE_ERROR
    });
  }
}


// {
//     "file": {
//         "fieldname": "file",
//         "originalname": "bambooforest960x637.jpg",
//         "encoding": "7bit",
//         "mimetype": "image/jpeg",
//         "id": "5d904eb5eece1b0c67bc4eba",
//         "filename": "3d58bc1063603cc037c2d4a36d70eb7b.jpg",
//         "metadata": null,
//         "bucketName": "uploads",
//         "chunkSize": 261120,
//         "size": 249109,
//         "md5": "153dd2ccc2a19cb45092d28cd258d7c1",
//         "uploadDate": "2019-09-29T06:27:02.136Z",
//         "contentType": "image/jpeg"
//     }
// }

export const addPortfolio = ({ title, description }) => async dispatch => {
  const config = { 
    headers: {
      'Content-Type': 'application/json'
    } 
  }

  const body = JSON.stringify({ title, description }); 
  
  try {
    const res = await axios.post('http://localhost:3003/admin/upload/portfolio', body, config);

    console.log("new Portfolio", res.data);

    dispatch({
      type: ADD_PORTFOLIO,
      payload: res.data
    });

  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PORTFOLIO_ERROR
    });
  }
}


//export const editImage, editStore, editPortfolio, editGallery, editArtistDetails?


//export const deleteImage, deleteStore, deletePortfolio, deleteImages, deleteGallery, 
