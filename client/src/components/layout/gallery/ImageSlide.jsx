import React from 'react';
// import Navbar from '../../navigation/Navbar';

const ImageSlide = ({ image, prev, next, curIdx }) => {
  const styles = { backgroundImage: `url(${image.imageUrl})`};

  const { fileName, imageUrl, title, description, portfolio } = image;
  const titleCaption = portfolio.split("_").join(" ");

  return (
    <div className="bg-carousel__img-slide" style={styles}>
      <div className="iconbox--left" onClick={() => prev(curIdx)}>
        <svg className="icon--left">
          <use xlinkHref="/css/icons/sprites.svg#icon-chevron-thin-left"></use>
        </svg>
      </div>
      <div className="iconbox--right" onClick={() => next(curIdx)}>
        <svg className="icon--right">
          <use xlinkHref="/css/icons/sprites.svg#icon-chevron-thin-right"></use>
        </svg>
      </div>

      <div className="img-details">
        <span className="img-details__header">Portfolio / </span>
        <span className="img-details__portfolio-title">{titleCaption}</span>
      </div>
    </div>
  )
}

export default ImageSlide;
