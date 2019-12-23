import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';


const CouponInput = (props) => {

  const [couponCode, setCouponCode] = useState("");
  
  return (
    <Fragment>
      <input className="coupon-input" placeholder="coupon code" name="coupon"></input>
      <button className="details-box__button button button-white" type="button">
        Apply Coupon
      </button>

    </Fragment>
  );
}

export default CouponInput;
