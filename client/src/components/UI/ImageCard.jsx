import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ImageCard = (props) => {
  // console.log('hello imageUrl', props.image.imageUrl);
  const title = props.title.split("_").join(" ");
  return (
    <Link className="imageCard" to={"/portfolio/" + props.title}>
      <img
        src={props.image.imageUrl}
        alt="Photo Portfolio 1"
        className={"imageCard" + " " + props.cardType}
      />
      <h2 className="portfolio-link__title">{title}</h2>
    </Link>
  );
}


export default ImageCard;
