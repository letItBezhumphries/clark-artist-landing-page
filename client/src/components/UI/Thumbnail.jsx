import React from 'react'

const Thumbnail = ({ image }) => (
  <div className="thumbnail__frame">
    <img src={image.imageUrl} className="thumbnail__img" />
    <div className="thumbnail__img-details">
      <h2 className="thumbnail__img-title">
        <strong>{image.title}</strong>
      </h2>
      {image.details}
    </div>
  </div>
);


export default Thumbnail;
