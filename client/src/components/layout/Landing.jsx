import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
// import Story from './Story.jsx';
import AdminDashboard from '../admin/AdminDashboard';
// import BackgroundCarousel from './BackgroundCarousel.jsx';
import BackgroundCarousel from './gallery/BackgroundCarousel';
import { getImage, loadGallery } from '../../actions/admin';


const Landing = ({ 
  auth: { isAdmin, loading }, 
  gallery, getImage, loadGallery }) => {

  if (isAdmin) {
    return <Redirect to="/admin/upload" />
  }
  





  // useEffect(() => {
  //   console.log('[Landing.jsx], useEffect');
  //   loadGallery();
 
  // }, [loadGallery]);


  return (
    <Fragment>
      { !loading && isAdmin ? <AdminDashboard /> : <BackgroundCarousel backgroundImgs={gallery}/> }
    </Fragment>
  )
};


Landing.propTypes = {
  isAdmin: PropTypes.bool,
  getImage: PropTypes.func.isRequired,
  loadGallery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  gallery: state.admin.gallery,
  currentImage: state.admin.currentImage
  
});

export default connect(mapStateToProps, { getImage, loadGallery })(Landing);
