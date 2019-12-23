import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import transformNumToFormattedString from "../../../utils/transformNumToFormattedString";



const CartItem = ({ item, clicked }) => {
  const price = "$" + transformNumToFormattedString(item.itemId.price);
  const subTotal = "$" + transformNumToFormattedString(item.itemId.price * item.quantity);
  return (
    <Fragment>
      <tr className="item">
        <td className="item-remove">
          <button className="btn-remove" type="button" onClick={() => clicked(item.itemId._id)}>
            x
          </button>
        </td>
        <td className="item-image">
          <img className="item-image__thumbnail" 
               src={item.itemId.imageUrl} 
            />
        </td>
        <td className="item-name">{item.itemId.title}</td>
        <td className="item-price">{price}</td>
        <td className="item-quantity">{item.quantity}</td>
        <td className="item-subtotal">{subTotal}</td>
      </tr>
    </Fragment>
  );
}

CartItem.propTypes = {

}

export default CartItem;
