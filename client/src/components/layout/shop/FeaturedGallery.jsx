import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter, Switch } from "react-router-dom";
import Thumbnail from "../../UI/Thumbnail";
import Icon from "../../UI/Icon";
import PortfoliosList from "../portfolios/PortfoliosList";
import {
  getSelectedArtwork,
  clearSelectedArtwork
} from "../../../actions/shop";

// import ReactPaginate from 'react-paginate';

const FeaturedGallery = ({
  images,
  image,
  loading,
  history,
  match,
  // getSelectedArtwork,
}) => {
  // const [selectedArtwork, setSelectedArtwork] = useState(null);


  const inventory = images.map(image => (
    <Link to={match.url + `/${image._id}`} key={image._id}>
      <Thumbnail
        image={image}
        title={image.title}
        imageUrl={image.imageUrl}
        details={image.description}
        price={image.price}
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
};

FeaturedGallery.propTypes = {
  images: PropTypes.array.isRequired,
  // getSelectedArtwork: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  images: state.shop.images,
  image: state.shop.image,
  loading: state.shop.loading
});

export default withRouter(
  connect(mapStateToProps, { clearSelectedArtwork })(
    FeaturedGallery
  )
);