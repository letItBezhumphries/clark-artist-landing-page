import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
// import { removeFromCart } from "../../../../actions/cart";
import CartItem from "./CartItem";
import CartActions from "./CartActions";
import Spinner from '../../UI/Spinner';

const CartItemList = ({ cartItems, items, loading }) => {
  // const [showCheckout, setShowCheckout] = useState(false);

  let history = useHistory();

  let itemsList = cartItems.map((item, index) => (
    <CartItem key={item.itemId._id + index} item={item} quantity={item.itemId.quantity} />
  ));

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {items.length > 0 ? (
            <table className="cart__items-table items-table">
              <thead>
                <tr>
                  <th className="items-table__item-remove"> </th>
                  <th className="items-table__item-img"> </th>
                  <th className="items-table__item-name">product</th>
                  <th className="items-table__item-price">price</th>
                  <th className="items-table__item-quantity">quantity</th>
                  <th className="items-table__item-subtotal">subtotal</th>
                </tr>
              </thead>
              <tbody>
                { itemsList }
                <CartActions checkout={() => handleCheckout(showCheckout)} />
              </tbody>
            </table>
          ) : (
            <Fragment>
              <Heading items={items} added={added} removed={removed} />
              <p className="return-to-shop">
                <Link
                  to="/shop/inventory"
                  style={{ textDecoration: "none" }}
                  className="notices-box__button button button-white"
                  onClick={clearSelectedArtwork}
                >
                  Return to Shop
                </Link>
              </p>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

CartItemList.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  items: state.cart.items,
  loading: state.cart.loading,

});

export default connect(mapStateToProps)(CartItemList);
