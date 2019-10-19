import React from "react";
import { Link } from "react-router-dom";

const DropdownList = props => {
  return (
    <div className="dropdown">
      <Link to="/portfolios" className="navbar__dropbtn">
        + portfolio
      </Link>
      <div className="dropdown-content">
        <Link to="/portfolios/early-works" className="dropdown-content__link">
          <span>early works</span>
        </Link>
        <Link to="/portfolios/montages" className="dropdown-content__link">
          <span>montages</span>
        </Link>
        <Link to="/portfolios/photography" className="dropdown-content__link">
          <span>photography</span>
        </Link>
        <Link to="/portfolios/people-and-places" className="dropdown-content__link">
          <span>people & places</span>
        </Link>
        <Link to="/portfolios/aerials" className="dropdown-content__link">
          <span>aerials</span>
        </Link>
      </div>
    </div>
  );
};

export default DropdownList;
