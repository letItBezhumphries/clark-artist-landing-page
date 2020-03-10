import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import AdminDashboard from '../admin/AdminDashboard';
import BackgroundCarousel from './imageCarousel/BackgroundCarousel';
import { loadGallery } from '../../actions/admin';

const Landing = ({ 
  auth: { isAdmin, loading }, 
  gallery, loadGallery }) => {

  if (isAdmin) {
    return <Redirect to="/admin/upload" />
  }
  
  useEffect(() => {
    loadGallery();
  }, []);

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
  gallery: state.admin.gallery
});

export default connect(mapStateToProps, { loadGallery })(Landing);
