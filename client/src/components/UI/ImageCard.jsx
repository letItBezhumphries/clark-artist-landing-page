import React from 'react';
import { withRouter } from 'react-router-dom';

const ImageCard = (props) => {
  const { cardType } = props;
  const portfolioTitle = props.title.split("_").join(" ");

  const dimension = cardType === "portfolioCard" ? '25rem': '16.95';

  return (
    <div className="imageCard">
      <img
        style={{ height: dimension, width: dimension, zIndex: 'inherit' }}
        src={props.image.imageUrl}
        alt={`Photo ${portfolioTitle}`}
        className={"imageCard" + "__" + cardType + "-img"}
      />
      <span className={"imageCard" + "__" + cardType + "-txt"} style={{ zIndex: 'inherit' + 1}}>{portfolioTitle}</span>
    </div>
  );
}


export default withRouter(ImageCard);
