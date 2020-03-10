import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchByPortfolio } from '../../actions/shop';

const ImageCard = ({ searchByPortfolio, ...props }) => {
  const { cardType } = props;
  const portfolioTitle = props.title.split("_").join(" ");
  

  const dimension = cardType === "portfolioCard" ? '25rem': '16.95';

  return (
    <div className="imageCard" onClick={() => searchByPortfolio(props.title)}>
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

ImageCard.propTypes = {
  searchByPortfolio: PropTypes.func.isRequired,
}

export default connect(null, {searchByPortfolio})(ImageCard);
