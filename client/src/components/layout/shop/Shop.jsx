import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import Spinner from '../../UI/Spinner';
import FeaturedGallery from './FeaturedGallery';
import { loadImages } from '../../../actions/admin';
import { getSelectedArtwork } from '../../../actions/shop';
import ArtworkView from './ArtworkView';


const Shop = ({
  admin, 
  shop: { loading, images, image, searchBy, portfolio }, 
  match,
  getSelectedArtwork 
}) => {

  useEffect(() => {
    loadImages();
  }, []);

  const [selectedArt, setSelectedArt] = useState({
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

  const artworkSelectedHandler = (id) => {
    getSelectedArtwork(id, history);
  };

  const handleFormData = e => {
    e.preventDefault();
    console.log('e target', e.target.name)
    setSelectedArt({
      title: image.title,
      imageUrl: image.imageUrl,
      description: image.description,
      portfolio: image.portfolio,
      price: image.price,
      height: image.height,
      width: image.width,
      inStock: image.inStock,
      selected: image.selected
    });
  }
  
  let visibleComponent;

  if (!loading && image) {
    handleFormData(image._id)
    visibleComponent = (<ArtworkView clicked={() => artworkSelectedHandler(image._id)} image={selectedArt} portfolio={portfolio}/>)
  } else {
    visibleComponent = (<FeaturedGallery image={selectedArt} images={images} />)
  }




  return (
    <Fragment>
      <section className="shop outer-container">
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>{visibleComponent}</Fragment>
        )}
      </section>
    </Fragment>
  );
}

Shop.propTypes = {
  // auth: PropTypes.object.isRequired,
  // account: PropTypes.object.isRequired,
  // cart: PropTypes.object.isRequired,
  loadImages: PropTypes.func.isRequired,
  getSelectedArtwork: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  admin: state.admin,
  shop: state.shop,
  auth: state.auth,
  account: state.account,
  cart: state.cart
});

export default connect(mapStateToProps, { loadImages, getSelectedArtwork })(Shop);
