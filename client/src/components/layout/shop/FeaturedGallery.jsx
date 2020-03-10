import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, withRouter, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Thumbnail from "../../UI/Thumbnail";
import Spinner from '../../UI/Spinner';
import Pagination from '../../UI/Pagination';
import { getSelectedArtwork, clearSelectedArtwork } from "../../../actions/shop";
import IconList from "../../UI/IconList";

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

  let inventoryArtwork = images.map(image => (
    <Link
      to={`/shop/artwork/${image._id}`}
      key={image._id}
      onClick={() => getSelectedArtwork(image._id, history)}
      style={{ textDecoration: "none" }}
      className="col mb-4"
    >
      <Thumbnail
        image={image}
        title={image.title}
        imageUrl={image.imageUrl}
        details={image.description}
        price={image.price}
        type="inventory"
      />
    </Link>
  ));

  const [currentPage, setCurrentPage] = useState(1);
  const [artworkPerPage] = useState(8);
  const indexOfLastArtwork = currentPage * artworkPerPage; // 
  const indexOfFirstArtwork = indexOfLastArtwork - artworkPerPage;
  const currentArtwork = inventoryArtwork.slice(indexOfFirstArtwork, indexOfLastArtwork);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container-fluid">
          <div className="row row-cols-md-1 row-cols-md-3 u-margin-top-big">
            {currentArtwork}
          </div>
          <Pagination
            artworkPerPage={artworkPerPage}
            totalArtwork={inventoryArtwork.length}
            paginate={paginate}
          />
        </div>
      )}
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