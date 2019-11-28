import React, { Fragment, useRef } from 'react';
import Thumbnail from '../../UI/Thumbnail';
// import ReactPaginate from 'react-paginate';

const FeaturedArtwork = ({ images }) => {
  const inventory = images.map(image => 
    <Thumbnail 
      key={image._id}
      image={image} 
      title={image.title} 
      imageUrl={image.imageUrl} 
      details={image.description}
      price={image.price} 
    />);
  
  console.log('inside FeaturedArtwork', inventory);
  return (
    <Fragment>
      {inventory}
    </Fragment>
  )
}

export default FeaturedArtwork;
