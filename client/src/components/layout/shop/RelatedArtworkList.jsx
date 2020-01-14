// import React, { Fragment, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { withRouter, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { getSelectedArtwork, getRelatedArtwork } from '../../../../actions/shop';
// import Thumbnail from '../../../UI/Thumbnail';
// import Spinner from '../../../UI/Spinner';

// const RelatedArtworkList = ({ shop: { related, loading, portfolio, image }, getRelatedArtwork, getSelectedArtwork, history }) => {
//   useEffect(() => {
//     console.log('useEffect is RelatedArtworkList.jsx :', image, related);
//     getRelatedArtwork(image.portfolio);
//   }, []);

//   const artworkSelectedHandler = (id, history) => {
//     console.log('been clicked in RelatedArtworkList :', image._id);
//     getSelectedArtwork(id, history);
//   };
//   let relatedList;
  
//   if (portfolio) {
//     let portfolioImages = portfolio.images.filter(img => (img._id !== image._id)).slice(4);
//     relatedList = portfolioImages.map(image => (
//       <Link
//         key={image.title}
//         image={image}
//         to={"/shop/artwork" + `/${image._id}`}
//         style={{ textDecoration: "none" }}
//         className="related-artwork-list__item"
//       >
//         <Thumbnail
//           key={image.title}
//           image={image}
//           title={image.title}
//           imageUrl={image.imageUrl}
//           details={image.description}
//           price={image.price}
//           clicked={() => artworkSelectedHandler(image._id, history)}
//         />
//       </Link>
//     ));
//   } 

//   return (
//     <Fragment>
//       { loading ? <Spinner/> : (
//         <div className="related-artwork-list">
//           { relatedList }
//         </div>
//       )}
//     </Fragment>
//   )
// }

// RelatedArtworkList.propTypes = {
//   shop: PropTypes.object.isRequired,
//   getSelectedArtwork: PropTypes.func.isRequired,
//   getRelatedArtwork: PropTypes.func.isRequired,
// }

// const mapStateToProps = state => ({
//   shop: state.shop
// })

// export default withRouter(connect(mapStateToProps, { getRelatedArtwork, getSelectedArtwork })(RelatedArtworkList));
