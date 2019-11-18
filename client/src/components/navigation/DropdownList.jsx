import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const DropdownList = ({ portfolios }) => {

  const portfolioLinks = portfolios.map(portfolio => 
    <Link key={portfolio._id} 
          to={`/portfolios/:${portfolio.title}`} 
          className="navbar__portfolio-link">
      {portfolio.title.split("_").join(" ")}
    </Link>
    )

  return (
    <div className="navbar__dropdown">
      <Link to="/portfolios" className="navbar__link navbar__dropbtn">+ portfolios</Link>

      <div className="navbar__dropdown-list">
        {portfolioLinks}
      </div>
    </div>
    
  )
}

DropdownList.propTypes = {
  portfolios: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  portfolios: state.store.portfolios
});


export default connect(mapStateToProps)(DropdownList);
