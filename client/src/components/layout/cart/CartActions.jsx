import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import CouponInput from "./CouponInput";
import { createOrder } from '../../../actions/order';

const CartActions = ({ cart, checkout, order }) => {
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = (value) => {
    setCouponCode(value);
    /** todo -- applyCouponDiscount(cart) */
    /* todo -- updateOrderTotal action or applyCoupon */
  }

  return (
    <Fragment>
      <td
        colSpan="6"
        style={{ padding: "2.4rem 0rem", width: "100%" }}
        className="cart__actions"
      >
        <CouponInput click={handleApplyCoupon} />
        <button
          style={{ marginLeft: "20rem" }}
          className="details-box__button button button-white"
          type="button"
        >
          Update Cart
        </button>

        <Link
          to={{ pathname: "/checkout", state: { fromCart: true } }}
          style={{
            textDecoration: "none",
            height: "3.8rem",
            marginLeft: "2rem"
          }}
        >
          <button
            className="details-box__button button button-white"
            style={{
              textDecoration: "none",
              height: "3.8rem",
              marginLeft: "2rem"
            }}
            type="button"
            // onClick={() => handleCheckoutClick()}
          >
            Proceed To Checkout
          </button>
        </Link>
      </td>
    </Fragment>
  );
}

CartActions.propTypes = {
  cart: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart,
  order: state.order
})

export default connect(mapStateToProps)(withRouter(CartActions));
