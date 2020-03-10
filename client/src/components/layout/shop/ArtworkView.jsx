import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import { clearSelectedArtwork, getSelectedArtwork, searchByPortfolio } from "../../../actions/shop";
import { addToCart } from "../../../actions/cart";
import RelatedArtworkList from './RelatedArtworkList';
import Spinner from '../../UI/Spinner';
import IconList from '../../UI/IconList';
import ImageLink from '../../UI/ImageLink';

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
  const [showImageModal, setShowImageModal] = useState(false);
  // console.log('inside ArtworkView in the function body, image :', image, "loading", loading);

  useEffect(() => {
    window.scrollTo(0, 0);
    getSelectedArtwork(match.params.id);
    // return () => {
    //   console.log('cleanup [ArtworkView.jsx] related:', related)
    // };
  }, [match.params.id, getSelectedArtwork]);

  const handleImageClick = (showImageModal) => {
    setShowImageModal(!showImageModal);
  }



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
            {/* { showImageModal && (<Backdrop image={image}></Backdrop>)} */}
            {/* need to import ImageLink
          Modal and clickHandler func that would 
          show the image when clicked in the */}
            <div className="artwork-view">
                <ImageLink
                  to={`/shop/artwork/${image._id}`}
                  image={image}
                  clicked={() => handleImageClick(showImageModal)}
                  type="inventory"
                  classType="artwork-view__left-side"
                />
    

              <div className="details-box margin-left-sm">
                <h1 className="details-box__title">
                  {image.title}, {image.year}
                  {/* <span className="details-box__year">{image.year}</span> */}
                  <span className="details-box__out-of-stock-flag"></span>
                </h1>
                <p className="details-box__price">
                  <span>$ {transformNumToFormattedString(image.price)}</span>
                </p>
                <div className="details-box__description">
                  <p className="details-box__medium">oil on stretched linen</p>
                  <p className="details-box__dimensions">
                    10 x 8″ (25.4 x 20.32 cm)
                  </p>
                  <p className="details-box__framed-dimensions">
                    framed: 14 x 12″ (35.56 x 30.48 cm)
                  </p>
                </div>

                {image.inStock ? (
                  <Fragment>
                    <p className="details-box__available">In Stock</p>
                    <Link
                      to="/shop/my-cart"
                      style={{ textDecoration: "none", marginLeft: "1rem" }}
                      onClick={() => addToCart(image._id, quantity, history)}
                      className="details-box__button button button-white"
                    >
                      add to cart
                    </Link>
                  </Fragment>
                ) : (
                  <div className="details-box__out-of-stock-message">
                    Out of stock
                  </div>
                )}
                <div className="details-box__artwork-details-meta">
                  <p>SKU: {image._id}</p>
                  <p>CATEGORIES: </p>
                  <p>TAGS: </p>
                </div>
                <IconList location="artwork" />
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