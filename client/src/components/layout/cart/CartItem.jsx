import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeFromCart } from '../../../actions/cart';
import PropTypes from "prop-types";
import Spinner from '../../UI/Spinner';
import transformNumToFormattedString from "../../../utils/transformNumToFormattedString";

const CartItem = ({ loading, item, added, removeFromCart, dropdown }) => {
  useEffect(() => {

  }, []);
  
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <tr className="item">
          { !item.itemId._id ? (
            <Fragment>
              <td
                className="item-remove"
                style={{ height: "5.4rem", width: "5.4rem" }}
              >
                <button
                  className="btn-remove"
                  type="button"
                  onClick={() => removeFromCart(added._id)}
                >
                  x
                </button>
              </td>
              <td className="item-image">
                <img className="item-image__thumbnail" src={added.imageUrl} />
              </td>
              <td className="item-name">{added.title}</td>
              <td className="item-price">
                $ {transformNumToFormattedString(added.price)}
              </td>
              <td className="item-quantity">{item.quantity}</td>
              <td className="item-subtotal">
                $ {transformNumToFormattedString(added.price * item.quantity)}
              </td>
            </Fragment>
          ) : (
            <Fragment>
              <td
                className="item-remove"
                style={{ height: "5.4rem", width: "5.4rem" }}
              >
                <button
                  className="btn-remove"
                  type="button"
                  onClick={() => removeFromCart(item.itemId._id)}
                >
                  x
                </button>
              </td>
              <td className="item-image">
                <img
                  className="item-image__thumbnail"
                  src={item.itemId.imageUrl}
                />
              </td>
              <td className="item-name">{item.itemId.title}</td>
              <td className="item-price">
                $ {transformNumToFormattedString(item.itemId.price)}
              </td>
              <td className="item-quantity">{item.quantity}</td>
              <td className="item-subtotal">
                ${" "}
                {transformNumToFormattedString(
                  item.itemId.price * item.quantity
                )}
              </td>
            </Fragment>
          )}
        </tr>
      )}
    </Fragment>
  );
};

CartItem.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  // added: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  loading: state.cart.loading,
  added: state.cart.added
})


export default connect(mapStateToProps, { removeFromCart })(withRouter(CartItem));
