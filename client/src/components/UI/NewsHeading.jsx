import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NewsHeading = ({ cart }) => {
  console.log('inside NewsHeading', cart.items);
  let message;
  cart.added ? message = `${cart.items[0].itemId.title}, ${cart.items[0].itemId.year} 
    HAS BEEN ADDED TO YOUR CART` : null; 
  return (
    <Fragment>
      <h1 className="notices-box__notice">
        {message}
      </h1>
    </Fragment>    
  );
}

NewsHeading.propTypes = {
  cart: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(NewsHeading);
