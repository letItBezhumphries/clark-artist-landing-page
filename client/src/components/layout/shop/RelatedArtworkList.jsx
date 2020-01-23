import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getRelatedArtwork, getSelectedArtwork } from "../../../actions/shop";
import Thumbnail from "../../UI/Thumbnail";
import Spinner from "../../UI/Spinner";

const RelatedArtworkList = ({
  getSelectedArtwork,
  loading,
  related,
  match
}) => {
  // useEffect(() => {
  //   // console.log('[RelatedArtworkList.jsx] related :', related);
  //   // return () => {
  //   //   // console.log('[RelatedArtworkList.jsx] related:', related);
  //   // };
  // }, [related]);

  let relatedArtwork = related.map(image => (
    <Link
      key={image._id}
      to={`/shop/artwork/${image._id}`}
      style={{ textDecoration: "none" }}
      className="related-artwork-list__item"
      onClick={() => getSelectedArtwork(image._id, history)}
    >
      <Thumbnail
        key={image.title}
        image={image}
        title={image.title}
        imageUrl={image.imageUrl}
        price={image.price}
        year={image.year}
      />
    </Link>
  ));

  return loading || related === undefined ? (
    <Spinner />
  ) : (
    <Fragment>
      <h2 className="shop__search-heading" style={{ marginTop: '10rem', marginBottom: '2rem' }}>Other Artwork Available</h2>
      <div className="related-artwork-list">{relatedArtwork}</div>
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
