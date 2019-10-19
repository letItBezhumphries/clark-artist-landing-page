import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { loadGallery } from '../../../actions/admin';
import ImageSlide from './ImageSlide';


const BackgroundCarousel = (props) => {
  const { backgroundImgs } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (currentIndex) => {
    console.log('1', currentIndex)
    if (currentIndex === 0) {
      return setCurrentIndex(backgroundImgs.length - 1);
    }
    return setCurrentIndex(currentIndex - 1);
  }

  const nextSlide = (currentIndex) => {
    if (currentIndex === backgroundImgs.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  }

  useEffect(() => {
    console.log('inside useEffect', currentIndex);
    const backgroundTimer = setInterval(() => {
      nextSlide(currentIndex);
    }, 5000);
    return () => {
      clearInterval(backgroundTimer);
    }
  }, [currentIndex])

  console.log('after useEffect', currentIndex);
    
  const gallery = backgroundImgs.map((image, index) => {
    return <ImageSlide key={index} 
                       image={image} 
                       prev={prevSlide} 
                       next={nextSlide} 
                       curIdx={currentIndex}  
                       />
  });
  
  return (
    <div className="bg-carousel">
      {gallery[currentIndex]}
    </div>
  )
}

BackgroundCarousel.propTypes = {}


export default BackgroundCarousel;
