import React from "react";
import { Link } from "react-router-dom";

const DropdownList = props => (
  <div className="navbar__dropdown">
    <button className="navbar__link navbar__dropbtn">+ portfolios</button>

    <div className="navbar__dropdown-list">
      <Link to="/portfolios/early-works" className="navbar__portfolio-link">
        early works
      </Link>
      <Link to="/portfolios/montages" className="navbar__portfolio-link">
        montages
      </Link>
      <Link to="/portfolios/photography" className="navbar__portfolio-link">
        photography
      </Link>
      <Link to="/portfolios/people-and-places" className="navbar__portfolio-link">
        people & places
      </Link>
      <Link to="/portfolios/aerials" className="navbar__portfolio-link">
        aerials
      </Link>
    </div>
  </div>
);

export default DropdownList;
