import React, { Fragment } from "react";
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import transformNumToFormattedString from "../../../utils/transformNumToFormattedString";

const CartTotalSummary = ({ cartTotal, orderTotal }) => {
  let location = useLocation();
  let subTotal, tax, taxString, displayTotal;
  if (location.pathname === "/checkout") {
    subTotal = "$" + transformNumToFormattedString(orderTotal);
    tax = orderTotal * 0.12;
    taxString = "$" + transformNumToFormattedString(tax);
    displayTotal = "$" + transformNumToFormattedString(orderTotal + tax);
  } else {
    subTotal = "$" + transformNumToFormattedString(cartTotal);
    tax = cartTotal * 0.12;
    taxString = "$" + transformNumToFormattedString(tax);
    displayTotal = "$" + transformNumToFormattedString(cartTotal + tax);
  }

  return (
    <Fragment>
            <tr>
              <th>Subtotal</th>
              <td>
                <span>
                  {subTotal}
                </span>
              </td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>
                <span className="cart-summary__shipping-prompt">
                  Enter your shipping address to view shipping options
                </span>
              </td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>
                <span>
                  {taxString}
                </span>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <span className="cart-summary__cart-total">
                  {displayTotal}
                </span>
              </td>
            </tr>
    </Fragment>
  );
};

CartTotalSummary.propTypes = {
  cartTotal: PropTypes.number.isRequired,
  orderTotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartTotal: state.cart.total, 
  orderTotal: state.order.total
});

export default connect(mapStateToProps)(CartTotalSummary);
