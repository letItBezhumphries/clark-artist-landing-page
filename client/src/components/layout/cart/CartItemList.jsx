import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { removeFromCart } from "../../../actions/cart";
import CartItem from "./CartItem";
import CartActions from "./CartActions";

const CartItemList = ({ items, removeFromCart }) => {
  const cartItems = items.map(item => (
    <CartItem key={item.itemId._id} item={item} clicked={removeFromCart} />
  ));

  return (
    <Fragment>
      <table className="cart__table">
        <thead>
          <tr>
            <th className="item-remove"> </th>
            <th className="item-img"> </th>
            <th className="item-name">product</th>
            <th className="item-price">price</th>
            <th className="item-quantity">quantity</th>
            <th className="item-subtotal">subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
          <tr>
            <td
              colSpan="6"
              style={{ padding: "2.4rem 0rem", width: "100%" }}
              className="cart__actions"
            >
              <CartActions />
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

CartItemList.propTypes = {
  items: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  items: state.cart.items,
  total: state.cart.total
});

export default withRouter(
  connect(mapStateToProps, { removeFromCart })(CartItemList)
);
