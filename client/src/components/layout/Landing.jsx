import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import AdminDashboard from '../admin/AdminDashboard';
import BackgroundCarousel from './gallery/BackgroundCarousel';
import { loadGallery } from '../../actions/store';



const Landing = ({ 
  auth: { isAdmin, loading }, 
  gallery, loadGallery }) => {

  if (isAdmin) {
    return <Redirect to="/admin/upload" />
  }
  
  useEffect(() => {
    console.log('[Landing.jsx], useEffect');
    loadGallery();
 
  }, [loadGallery]);

  return (
    <Fragment>
      {!loading && isAdmin ? (
        <AdminDashboard />
      ) : (
        <BackgroundCarousel backgroundImgs={gallery} />
      )}
    </Fragment>
  );
};

Landing.propTypes = {
  isAdmin: PropTypes.bool,
  loadGallery: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  gallery: state.store.gallery
});

export default connect(mapStateToProps, { loadGallery })(Landing);
