import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSelectedArtwork, searchByPortfolio } from '../../../actions/shop';
import Thumbnail from "../../UI/Thumbnail";


const CollectionGallery = ({ search, loading, getSelectedArtwork, searchByPortfolio, match }) => {
  let title = match.params.title.split("_").join(" ")
  useEffect(() => {
    searchByPortfolio(match.params.title);
    // console.log('inside [CollectionGallery.jsx] match, :', match.params.title);
    return () => {
      console.log('in [CollectionGallery.jsx] search:', search)};
  }, [match.params.title, search]);
  
  let gallery = search.map((image) => (
    <Link
      to={`/shop/artwork/${image._id}`}
      key={image._id}
      onClick={() => getSelectedArtwork(image._id, history)}
    >
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
      { loading && search === undefined ? (
        <Spinner />
      ) : (
        <div className="shop">
          <h1 className="shop__heading">
            <span>{title}</span>
          </h1>
          { gallery }
        </div>
      )}
    </Fragment>
  )
}

CollectionGallery.propTypes = {
  getSelectedArtwork: PropTypes.func.isRequired,
  searchByPortfolio: PropTypes.func.isRequired,
  search: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.shop.loading,
  search: state.shop.search
});

export default connect(mapStateToProps, { getSelectedArtwork, searchByPortfolio })(CollectionGallery);
