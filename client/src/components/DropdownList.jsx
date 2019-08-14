import React from 'react';

const DropdownList = (props) => {
  return (
        <div className="dropdown">
          <a href="/portfolio" className="navbar__dropbtn">+ portfolio</a>
          <div className="dropdown-content">
            <a href="/early-works" className="dropdown-content__link"><span>early works</span></a>
            <a href="/montages" className="dropdown-content__link"><span>montages</span></a>
            <a href="/photography" className="dropdown-content__link"><span>photography</span></a>
            <a href="/people-and-places" className="dropdown-content__link"><span>people & places</span></a>
            <a href="/aerials" className="dropdown-content__link"><span>aerials</span></a>
          </div>
        </div>
  )
}

export default DropdownList;