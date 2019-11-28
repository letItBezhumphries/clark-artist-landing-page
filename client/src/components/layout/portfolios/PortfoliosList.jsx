import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import ImageCard from "../../UI/ImageCard";


const PortfoliosList = ({ portfolios }) => {
  let portfolioList = portfolios.map(portfolio => 
    <ImageCard key={portfolio.title} 
               title={portfolio.title}
               image={portfolio.images[0]}
               cardType="portfolioCard"
               />);
  return (
    <Fragment>
      <div className="portfolioLinks-row">{portfolioList}</div>
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