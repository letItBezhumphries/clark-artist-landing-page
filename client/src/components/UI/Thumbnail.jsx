import React, { Fragment, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import transformNumToFormattedString from '../../utils/transformNumToFormattedString';
import setCardTypeStyle from '../../utils/setCardTypeStyle';

const Thumbnail = ({ image, type, clicked }) => {
  const imgRef = useRef(null);

  const { title, description, imageUrl, year, price, height, width } = image;

  const setImageDimension = () => {
    console.log(
      "height:",
      imgRef.current.clientHeight,
      "width:",
      imgRef.current.clientWidth
    );
  };

  useEffect(() => {
    imgRef.current.addEventListener("load", setImageDimension);
  });
  
  
  let styles = setCardTypeStyle(type);

  return (
    <div className="thumbnail" style={styles}>
        <img
          ref={imgRef}
          style={{ width: "98%", height: "auto" }}
          src={imageUrl}
          className="thumbnail__img card-img-top"
        />
        <div className="thumbnail__img-details u-margin-top-small">
          <h2 className="thumbnail__img-title">
            <strong>{title},</strong> <strong>{year}</strong>
          </h2>
          <h3 className="thumbnail__img-price">$ {transformNumToFormattedString(price)}</h3>
        </div>
    
    </div>
  )
}

export default Thumbnail;