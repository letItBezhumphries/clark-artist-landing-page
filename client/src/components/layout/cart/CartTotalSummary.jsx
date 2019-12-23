import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import transformNumToFormattedString from '../../../utils/transformNumToFormattedString';

const CartTotalSummary = ({ cart }) => {
  const subTotal = "$" + transformNumToFormattedString(cart.total);
  const tax = cart.total * .12;
  const taxString = "$" + transformNumToFormattedString(tax);
  const orderTotal = "$" + transformNumToFormattedString(cart.total + tax);
  return (
    <Fragment>
      <div className="cart__cart-summary cart-summary">
        <h2 className="cart-summary__header">Cart Totals</h2>
        <table className="cart-summary__table" cellSpacing="0">
          <tbody>
            <tr>
              <th>Subtotal</th>
              <td>
                <span>{subTotal}</span>
              </td>
            </tr>
            <tr>
              <th>Shipping</th>
              <td>
                <span>
                  Enter your shipping address to view shipping options
                </span>
              </td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>
                <span>{taxString}</span>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>
                <span>{orderTotal}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

CartTotalSummary.propTypes = {
  cart: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(CartTotalSummary);