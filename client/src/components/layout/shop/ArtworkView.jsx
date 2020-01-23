import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { clearSelectedArtwork, getSelectedArtwork, searchByPortfolio } from "../../../actions/shop";
import { addToCart } from "../../../actions/cart";
import RelatedArtworkList from './RelatedArtworkList';
import Spinner from '../../UI/Spinner';

import transformNumToFormattedString from '../../../utils/transformNumToFormattedString';

const ArtworkView = ({ 
  clearSelectedArtwork,
  getSelectedArtwork, 
  addToCart, 
  image, 
  loading, 
  related, 
  match }) => {
  // console.log('inside ArtworkView, params:', match.params.id);
  
  let history = useHistory();
  // let price = transformNumToFormattedString(image.price);
  let quantity = 1;

  // console.log('inside ArtworkView in the function body, image :', image, "loading", loading);

  useEffect(() => {
    getSelectedArtwork(match.params.id);
    return () => {
      console.log('cleanup [ArtworkView.jsx] related:', related)};
  }, [match.params.id]);

  return (
    <Fragment>
      {loading || image === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="shop">
            <h1 className="shop__heading">
              <span>Gallery</span>
            </h1>
            <Link
              to="/shop/inventory"
              style={{ textDecoration: "none" }}
              className="button button-green margin-left-bg u-margin-bottom-medium"
              onClick={clearSelectedArtwork}
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
                  {image.title}, <span>{image.year}</span>
                </h4>
                <span className="details-box__price">
                  $ {transformNumToFormattedString(image.price)}
                </span>
                <span className="details-box__medium">
                  oil on stretched linen
                </span>
                <span className="details-box__dimensions">
                  10 x 8″ (25.4 x 20.32 cm)
                </span>
                <span className="details-box__framed-dimensions">
                  framed: 14 x 12″ (35.56 x 30.48 cm)
                </span>
                {image.inStock ? (
                  <Fragment>
                    <span className="details-box__availability">In Stock</span>
                    <Link
                      to="/shop/my-cart"
                      style={{ textDecoration: "none" }}
                      onClick={() => addToCart(image._id, quantity, history)}
                      className="details-box__button button button-white margin-left-md"
                    >
                      add to cart
                    </Link>
                  </Fragment>
                ) : (
                  <div className="details-box__out-of-stock">Out</div>
                )}

                <p className="details-box__meta-details">
                  SKU: <span>{image._id}</span>
                </p>
              </div>
            </div>
            {related && <RelatedArtworkList />}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

ArtworkView.propTypes = {
  loading: PropTypes.bool.isRequired,
  related: PropTypes.array.isRequired,
  getSelectedArtwork: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  clearSelectedArtwork: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  image: state.shop.image,
  related: state.shop.related,
  loading: state.shop.loading,
});

export default connect(mapStateToProps, { clearSelectedArtwork, getSelectedArtwork, addToCart })(ArtworkView);