import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getRelatedArtwork, getSelectedArtwork } from "../../../actions/shop";
// import Thumbnail from "../../UI/Thumbnail";
import ImageLink from '../../UI/ImageLink';
import Spinner from "../../UI/Spinner";
import Pagination from "../../UI/Pagination";


const RelatedArtworkList = ({
  getSelectedArtwork,
  loading,
  related,
  match
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [artworkPerPage, setArtworkPerPage] = useState(4);

  useEffect(() => {
    console.log('in [RelatedArtworkList.jsx] artworkPerPage:', artworkPerPage);
  }, []);

  let relatedArtwork = related.map(image => (
    <li
      key={image._id}
      image={image}
      style={{ listStyle: "none", padding: "0 0", margin: "0 0" }}
      className="related-artwork__listitem list-group-item border-white"
    >
      <ImageLink
        image={image}
        to={`/shop/artwork/${image._id}`}
        clicked={() => getSelectedArtwork(image._id)}
        type="related"
        classType="related-artwork__item"
      />
    </li>
  ));


  const indexOfLastArtwork = currentPage * artworkPerPage;
  const indexOfFirstArtwork = indexOfLastArtwork - artworkPerPage;
  const currentArtwork = relatedArtwork.slice(indexOfFirstArtwork, indexOfLastArtwork);
  currentArtwork.map((img) => {
    if(img.width > 700) { 
      setArtworkPerPage(artworkPerPage - 1) 
    }
  });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return loading || related === undefined ? (
    <Spinner />
  ) : (
    <Fragment>
      <h4
        className="shop__search-heading"
        style={{ marginTop: "1.5rem", marginBottom: "3.4rem" }}
      >
        Other Artwork Available
      </h4>
      <ul className="related-artwork-list row card-deck border-white">{currentArtwork}</ul>
      <Pagination
        artworkPerPage={artworkPerPage}
        totalArtwork={relatedArtwork.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

RelatedArtworkList.propTypes = {
  loading: PropTypes.bool.isRequired,
  related: PropTypes.array.isRequired,
  getSelectedArtwork: PropTypes.func.isRequired,
  getRelatedArtwork: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.shop.loading,
  related: state.shop.related
});

export default connect(mapStateToProps, { getRelatedArtwork, getSelectedArtwork })(RelatedArtworkList);
