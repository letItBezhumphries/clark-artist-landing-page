import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from "../../UI/Pagination";
import { getSelectedArtwork, searchByPortfolio } from '../../../actions/shop';
import Thumbnail from "../../UI/Thumbnail";


const CollectionGallery = ({ search, loading, getSelectedArtwork, searchByPortfolio, match }) => {
  let title = match.params.title.split("_").join(" ");

  let gallery = search.map(image => (
    <Thumbnail
      key={image._id}
      image={image}
      to={`/shop/artwork/${image._id}`}
      clicked={() => getSelectedArtwork(image._id, history)}
      type="artworkCard"
    />
  ));

  const [currentPage, setCurrentPage] = useState(1);
  const [artworkPerPage] = useState(8);
  const indexOfLastArtwork = currentPage * artworkPerPage; //
  const indexOfFirstArtwork = indexOfLastArtwork - artworkPerPage;
  const currentArtwork = gallery.slice(
    indexOfFirstArtwork,
    indexOfLastArtwork
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
    searchByPortfolio(match.params.title);
  }, [match.params.title, searchByPortfolio]);
  
  return (
    <Fragment>
      {loading && search === undefined ? (
        <Spinner />
      ) : (
        <div className="shop">
          <h1 className="shop__heading">
            <span>{title}</span>
          </h1>
          <div className="container-fluid">
            <div className="row row-cols-md-1 row-cols-md-3 u-margin-top-big">
              {currentArtwork}
            </div>
          </div>
          <Pagination
            artworkPerPage={artworkPerPage}
            totalArtwork={gallery.length}
            paginate={paginate}
          />
        </div>
      )}
    </Fragment>
  );
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
