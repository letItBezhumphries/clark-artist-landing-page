import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/cart';

const CartForm = ({ addToCart, img, shop: { image, loading }, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    fileName: "",
    imageUrl: "",
    description: "",
    isGallery: false,
    portfolio: "",
    price: 0,
    height: 0,
    width: 0,
    inStock: false,
    selected: false
  });

  if (img.title !== image.title) {
    console.log('something in wrong here', img);
  }
  // const newFormData = updateObject(formData, img);
  
  setFormData({ 
    title: img.title,
    fileName: img.fileName,
    imageUrl: img.imageUrl,
    description: img.description,
    isGallery: img.isGallery,
    portfolio: img.portfolio,
    price: img.price,
    height: img.height,
    width: img.width,
    inStock: img.inStock,
    selected: img.selected
  })

  const onSubmit = async e => {
    e.preventDefault();
    addToCart(formData, 1, history);
  }

  return (
    <Fragment>
      {loading && image === null ? (
        <Spinner />
      ) : (
        <form className="cart-form" onSubmit={e => onSubmit(e)}>
          <input
            type="submit"
            className="details-box__button button button-white margin-left-md"
          >
            <Link
              to="/shop/my-cart"
              style={{ textDecoration: "none" }}
              className="details-box__button button button-white margin-left-md"
            >
              add to cart
            </Link>
          </input>
        </form>
      )}
    </Fragment>
  );
}

CartForm.propTypes = {
  addToCart: PropTypes.func.isRequired,
  img: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  shop: state.shop
});

export default connect(mapStateToProps, { addToCart })(CartForm);