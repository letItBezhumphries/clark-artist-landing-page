import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ImageCard = (props) => {
  const titleText = props.title.split("_").join(" ");
  // console.log('Props inside imageCard', props);
  return (
    <Link className="imageCard" to={"/portfolios/" + props.title}>
      <img
        src={props.image.imageUrl}
        alt="Photo Portfolio 1"
        className={"imageCard" + " " + props.cardType}
      />
      <h2 className="portfolio-link__title">{titleText}</h2>
    </Link>
  );
}


export default withRouter(ImageCard);
