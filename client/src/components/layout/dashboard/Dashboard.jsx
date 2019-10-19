import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import {loadGallery, loadImages}  from '../../../actions/admin';

const Dashboard = (props) => {
  console.log('in DASHBOARD', props);
  return (
    <Fragment>
      BackgroundCarousel
    </Fragment>
  )
}

Dashboard.propTypes = {

}

const mapStateToProps = state => ({

})

export default Dashboard;
