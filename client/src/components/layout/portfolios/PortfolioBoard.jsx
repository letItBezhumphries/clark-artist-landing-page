import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from "../../UI/Spinner";
import PortfolioConcept from "./PortfolioConcept";
import PortfolioJournal from "./PortfolioJournal";

const PortfolioBoard = ({ portfolio, loading }) => {

  console.log('inside PortfolioBoard', portfolio);
  return (
    <div className="portfolio__dashboard">
      <PortfolioConcept/>
      <PortfolioBoard />
    </div>
  )
}

PortfolioBoard.propTypes = {
  portfolio: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  portfolio: state.store.portfolio,
  loading: state.store.loading
})


export default connect(mapStateToProps)(PortfolioBoard);
