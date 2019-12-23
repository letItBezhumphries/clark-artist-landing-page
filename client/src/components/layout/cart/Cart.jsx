import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom'; 
import { loadCart } from '../../../actions/cart';
import CartItemList from './CartItemList';
import CartTotalSummary from './CartTotalSummary';
import NewsHeading from '../../UI/NewsHeading';
import Spinner from '../../UI/Spinner';


const Cart = ({ auth, cart: { items, total, loading }, loadCart }) => {
  useEffect(() => {
    loadCart();
  }, [loadCart]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className="cart">
            <h2 className="cart__heading">Cart</h2>
            <div className="cart__notices-box notices-box">
              <NewsHeading items={items} />
              <Link
                to="/shop/inventory"
                style={{ textDecoration: "none" }}
                className="notices-box__button button button-white">
                Continue Shopping
              </Link>
              
            </div>

            <CartItemList items={items} total={total} />
            <CartTotalSummary total={total} />
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}


Cart.propTypes = {
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  loadCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart,
  auth: state.auth,
  // image: state.store.image
})

export default withRouter(connect(mapStateToProps, { loadCart })(Cart));
