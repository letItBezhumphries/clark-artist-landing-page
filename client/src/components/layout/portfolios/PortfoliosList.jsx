import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ImageCard from "../../UI/ImageCard";
import { getPortfolioImages } from '../../../actions/store';


const PortfoliosList = ({ portfolios }) => {
  let portfolioList = portfolios.map(portfolio => 
    <ImageCard key={portfolio.title} 
               title={portfolio.title}
               image={portfolio.images[0]}  
               cardType="portfolio-link"
               />);
  return (
    <div className="portfolios__container">
      { portfolioList }
    </div>
  );
};

PortfoliosList.propTypes = {
  portfolios: PropTypes.array.isRequired,
  getPortfolioImages: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
  portfolios: state.store.portfolios,
  currentPortfolio: state.store.currentPortfolio
});

export default connect(mapStateToProps, {getPortfolioImages})(PortfoliosList);