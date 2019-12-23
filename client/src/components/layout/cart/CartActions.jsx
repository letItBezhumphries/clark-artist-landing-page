import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import CouponInput from './CouponInput';
import { Link } from 'react-router-dom';

const CartActions = props => {
  return (
    <Fragment>
      <CouponInput />
      <button
        style={{ marginLeft: "20rem"}}
        className="details-box__button button button-white"
        type="button"
      >
        Update Cart
      </button>
      <Link
        to="/shop/checkout"
        style={{ textDecoration: "none", height: "3.8rem", marginLeft: "2rem" }}
      >
        <button
          className="details-box__button button button-white"
          type="button">
          Proceed To Checkout
        </button>
      </Link>
    </Fragment>
  );
}

CartActions.propTypes = {

}

export default CartActions;
