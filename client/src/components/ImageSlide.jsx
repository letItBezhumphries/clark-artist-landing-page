import React from 'react';
import Slider from './Slider.jsx';


const ImageSlide = ({ imgUrl, currentIndex, prev, next }) => {
  const styles = { backgroundImage: `url(${imgUrl})` };
  return (
    <div className="bg-carousel__img-slide" style={styles}>
      <div className="iconbox--left" onClick={() => prev()}>
        <svg className="icon--left">
          <use xlinkHref="/css/icons/sprites.svg#icon-chevron-thin-left"></use>
        </svg>
      </div>
      <div className="iconbox--right" onClick={() => next()}>
        <svg className="icon--right">
          <use xlinkHref="/css/icons/sprites.svg#icon-chevron-thin-right"></use>
        </svg>
      </div>
      {/* <Slider direction="left" prev={prev} currentIndex={currentIndex} /> */}
      {/* <Slider direction="right" next={next} currentIndex={currentIndex} /> */}
      <div className="img-details">
        <span className="img-details__header">Portfolio / </span>
        <span className="img-details__portfolio-title">people & places</span>
      </div>
    </div>
  )
}

export default ImageSlide;
