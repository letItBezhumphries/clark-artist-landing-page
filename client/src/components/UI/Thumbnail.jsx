import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';


const Thumbnail = ({ image, clicked }) => {
  const { imageUrl, description, title, price } = image;
  // const details = description.split('/');
  // const year = details[details.length -1];

  return (
    <Fragment>
      <div className="thumbnail" onClick={clicked}>
        <img
          style={{ width: "45%", height: "auto" }}
          src={imageUrl}
          className="thumbnail__img"
        />
        <div className="thumbnail__img-details">
          <h2 className="thumbnail__img-title">
            <strong>{title},</strong> <strong>2012</strong>
          </h2>
          <h3 className="thumbnail__img-price">${price}</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Thumbnail);
