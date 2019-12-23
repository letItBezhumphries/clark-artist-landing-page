import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Thumbnail from '../../UI/Thumbnail';
import Icon from '../../UI/Icon';
import PortfoliosList from '../portfolios/PortfoliosList';
import { getSelectedArtwork, clearSelectedArtwork } from "../../../actions/store";
import tranformNumToFormattedString from '../../../utils/transformNumToFormattedString';

// import ReactPaginate from 'react-paginate';

const FeaturedGallery = ({ images, image, loading, history, getSelectedArtwork, clearSelectedArtwork }) => { 

  // useEffect(() => {
  //   console.log('useEffect', image)
  //   clearSelectedArtwork();
  // }, []);

  const artworkSelectedHandler = (id, image) => {
    getSelectedArtwork(id, image, history);    
  }
  
  const inventory = images.map(image => (
    <Link to={'/shop/artwork' + `/${image._id}`} key={image._id}>
      <Thumbnail
        image={image}
        title={image.title}
        imageUrl={image.imageUrl}
        details={image.description}
        price={image.price}
        clicked={() => artworkSelectedHandler(image._id, image)}
      />
    </Link>
  ));
  
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="shop__heading">
            <span>Inventory</span>
          </h1>

          <div className="shop__search-box">
            <h2 className="shop__search-heading">Search the Inventory:</h2>
            <form action="#" className="shop__search">
              <input
                type="text"
                className="shop__search search__input"
                placeholder="Search inventory"
              />
              <button className="shop__search search__button">
                <Icon
                  iconType="icon-search"
                  class="shop__search search__icon"
                />
              </button>
            </form>
          </div>

          <div className="shop__featured-collections">
            <h2 className="heading">Search by Collections:</h2>
            <PortfoliosList />
          </div>

          <div className="shop__featured-artwork">
            <h2 className="shop__featured-artwork--heading">
              Featured Artwork:
            </h2>
            {inventory}
          </div>

          <div className="shop__prints">
            <h3 className="heading">Prints & Editions</h3>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

FeaturedGallery.propTypes = {
  images: PropTypes.array.isRequired,
  getSelectedArtwork: PropTypes.func.isRequired,
  clearSelectedArtwork: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  images: state.store.images,
  image: state.store.image,
  loading: state.store.loading
})

export default withRouter(connect(mapStateToProps, { getSelectedArtwork, clearSelectedArtwork })(FeaturedGallery));
