import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Link, useHistory, withRouter } from 'react-router-dom';
import Icon from "../UI/Icon";
import DropdownItem from './DropdownItem';
import { getSelectedArtwork } from "../../actions/shop";

const Dropdown = ({cart}) => {
  let history = useHistory();
  const [showCartItemsCount, setShowCartItemsCount] = useState(false);

  useEffect(() => {
    if (cart.itemsCount > 0) {
      setShowCartItemsCount(true);
    } else {
      setShowCartItemsCount(false);
    }
  }, [cart.total]);

  let cartItems = cart.items.map((item) => <DropdownItem key={item.itemId._id} item={item.itemId} />)

  const emptyCartList = (
    <p className="navbar__dropdown-cart-item dropdown-cart-item--empty"
       style={{ borderBottom: '1px solid black'}}>
      NO PRODUCTS IN THE CART.
    </p>
  );

  return (
    <div className="navbar__dropdown">
      <Link to="/shop/my-cart" className="navbar__link navbar__dropbtn">
        <Icon iconType="icon-add_shopping_cart" class="navbar__icon">
          <span className="navbar__cart-badge" show={showCartItemsCount}>
            {cart.total}
          </span>
        </Icon>
      </Link>

      <div className="navbar__dropdown-container">
        <ul className="navbar__dropdown-cart-list">
          {cart.items.length > 0 ? cartItems : emptyCartList}
          <li className="navbar__dropdown-cart-item dropdown-cart-item--header">
            <Link
              to="/shop/my-cart"
              className="button button-white navbar__dropdown-cart-btn"

            >CART
              <Icon
                iconType="icon-shopping-cart1"
                class="navbar__dropdown-cart-icon"
              />
            </Link>
            <span className="navbar__dropdown-cart-total">
              TOTAL: $ {cart.total}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  cart: PropTypes.object.isRequired,
  getSelectedArtwork: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, {getSelectedArtwork})(withRouter(Dropdown));