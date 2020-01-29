import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Thumbnail from "../../UI/Thumbnail";
import Spinner from '../../UI/Spinner';
import {
  getSelectedArtwork,
  clearSelectedArtwork
} from "../../../actions/shop";

const FeaturedGallery = ({
  images,
  shop: { loading },
  getSelectedArtwork
}) => {
  let history = useHistory();
  let { path, url } = useRouteMatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let gallery = images.map((image) => (
    <Link to={`/shop/artwork/${image._id}`} key={image._id} onClick={() => getSelectedArtwork(image._id, history)}>
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
      {gallery}
    </Fragment>
  );
};


FeaturedGallery.propTypes = {
  images: PropTypes.array.isRequired,
  shop: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  shop: state.shop,
  images: state.admin.images
});

export default connect(mapStateToProps, { clearSelectedArtwork, getSelectedArtwork })(FeaturedGallery);