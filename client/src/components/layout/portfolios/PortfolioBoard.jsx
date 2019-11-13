import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Spinner from "../../UI/Spinner";


const PortfolioBoard = ({ portfolio }) => {

  console.log('inside PortfolioBoard', portfolio);
  return (
    <div className="portfolio-board" style={{ backgroundColor: 'grey', width: '100%', height: '100%'}}>
      Hi its the portfolio inspiration board
    </div>
  )
}

// PortfolioBoard.propTypes = {
//   portfolio: PropTypes.object.isRequired,
// }

const mapStateToProps = state => ({
  portfolio: state.store.portfolio
})


export default connect(mapStateToProps)(PortfolioBoard);
