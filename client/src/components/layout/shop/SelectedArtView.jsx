import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { clearSelectedArtwork } from "../../../actions/store";
import Spinner from '../../UI/Spinner';


const SelectedArtView = ({ clearSelectedArtwork, loading, image }) => {
  console.log(image)

  const year = 2008;
  const inStock = true;
  return (
    <Fragment>
      {loading && image !== null ? (
        <Spinner />
      ) : ( 
        <Fragment>
          <div className="shop">
            <h1 className="shop__heading">
              <span>Gallery</span>
            </h1>
            <Link
              to="/shop/inventory"
              className="button button-green margin-left-bg u-margin-bottom-medium"
              onClick={() => clearSelectedArtwork()}
            >
              Back to Inventory
            </Link>

            <div className="selected-view">
              <img
                src={image.imageUrl}
                alt={image.title}
                className="selected-artwork"
              />
              <div className="details-box margin-left-sm">
                <h4 className="details-box__title">
                  {image.title}, <span>{year}</span>
                </h4>
                <span className="details-box__price">${image.price}</span>
                <span className="details-box__medium">
                  oil on stretched linen
                </span>
                <span className="details-box__dimensions">
                  10 x 8″ (25.4 x 20.32 cm)
                </span>
                <span className="details-box__framed-dimensions">
                  framed: 14 x 12″ (35.56 x 30.48 cm)
                </span>
                {inStock ? (
                  <span className="details-box__availability">In Stock</span>
                ) : (
                  <div className="details-box__out-of-stock"></div>
                )}
                <Link to="/shop/cart" onClick={() => addToCart(image._id)}
                  className="details-box__button button button-white margin-left-md">
                  add to cart
                </Link>
                <div className="details-box__meta-details">
                  SKU: <span>{image._id}</span>
                </div>
                <div className="details-box__icons-list">
                  Facebook, Print, Email
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

SelectedArtView.propTypes = {
  clearSelectedArtwork: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  image: state.store.image,
  loading: state.store.loading
});

export default withRouter(connect(mapStateToProps, { clearSelectedArtwork })(SelectedArtView));