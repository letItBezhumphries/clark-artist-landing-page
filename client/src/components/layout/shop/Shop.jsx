import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import FeaturedGallery from './FeaturedGallery';
import CollectionGallery from './CollectionGallery';
import ArtworkView from './ArtworkView';
import Search from './Search';
import PortfolioSearchLinks from './PortfolioSearchLinks';
import Cart from "../cart/Cart";
import Checkout from '../checkout/Checkout';
import { getSelectedArtwork, clearSelectedArtwork } from '../../../actions/shop';
import Spinner from "../../UI/Spinner";

const Shop = ({
  shop: { loading, image, search, related }
}) => {
  let location = useLocation();
  let { path, url } = useRouteMatch();
  useEffect(() => {
    clearSelectedArtwork();
    // console.log("[Shop.jsx] useEffect:", search);
    return () => {
      console.log("[Shop.jsx] cleaning up");
    };
  }, []);

  // let gallery;
  // if (Array.isArray(search) && search.length > 0) {
  //   gallery = <CollectionGallery />;
  // } 

  return (
    <Fragment>
      { loading ? (
        <Spinner />
      ) : (
        <section className="shop">
          <h1 className="shop__heading">
            <span>Inventory</span>
          </h1>

          {image === null && search.length === 0 && (
            <Fragment>
              <Search />
              <PortfolioSearchLinks />
            </Fragment>
          )}

          <Switch>
            <Route path={"/shop/artwork/:id"} component={ArtworkView} />
            <Route path={"/shop/collection/:title"} component={CollectionGallery} />
            <Route path="/shop/my-cart" component={Cart} />
            <Route exact path="/shop/checkout" component={Checkout} />
            <Route exact path="/shop/inventory" component={FeaturedGallery} />
          </Switch>
        </section>
      )}
    </Fragment>
  );
}

Shop.propTypes = {
  shop: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  clearSelectedArtwork: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  shop: state.shop,
  images: state.admin.images
});

export default connect(mapStateToProps, { getSelectedArtwork, clearSelectedArtwork })(Shop);



