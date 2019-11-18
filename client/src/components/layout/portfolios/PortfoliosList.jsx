import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ImageCard from "../../UI/ImageCard";


const PortfoliosList = ({ portfolios }) => {
  let portfolioList = portfolios.map(portfolio => 
    <ImageCard key={portfolio.title} 
               title={portfolio.title}
               image={portfolio.images[0]}
               cardType="portfolioLink"
               />);
  return (
    <Fragment>
      <div className="portfolioLinks-list">
        <h4 className="portfolioLinks-list__heading heading-primary--main">
          Get a closer look at the inspiration behind any of my collections by
          clicking on any of the links below &dArr;
        </h4>
        <div className="portfolioLinks-list__container">{portfolioList}</div>
      </div>
    </Fragment>
  );
};

PortfoliosList.propTypes = {
  portfolios: PropTypes.array.isRequired,
};


const mapStateToProps = state => ({
  portfolios: state.store.portfolios,
});

export default connect(mapStateToProps)(PortfoliosList);