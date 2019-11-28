import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Icon from '../../UI/Icon';
import PortfoliosList from '../portfolios/PortfoliosList';
import FeaturedArtwork from './FeaturedArtwork';



const Shop = ({ 
  auth,
  store, ...props
}) => {
  const { images, image, portfolios, loading } = store;
  return (
    <Fragment>
      <section className="shop">
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
              <Icon iconType="icon-search" class="shop__search search__icon" />
            </button>
          </form>
        </div>

        <div className="shop__featured-collections">
          <h2 className="heading">Search by Collections:</h2>
            <PortfoliosList />
        </div>

        <div className="shop__featured-artwork">
          <h2 className="shop__featured-artwork--heading">Featured Artwork:</h2>
            
            <FeaturedArtwork images={images} />
        </div>

        <div className="shop__prints">
          <h3 className="heading">Prints & Editions</h3>
        </div>
      </section>

      <Route path="/store/image-name/:image" />
    </Fragment>
  );
}

Shop.propTypes = {
  store: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,  
}

const mapStateToProps = state => ({
  store: state.store,
  auth: state.auth
});

export default connect(mapStateToProps)(Shop);
