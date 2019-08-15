import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownList from './DropdownList.jsx';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__artist">
        {/* <img className="navbar__background" src="/css/images/trees.jpg" alt="trees montage"/> */}
        {/* <Link to="/" className="name-link"> */}
          <span className="name-first">Todd</span>
          <span className="name-last">Clark</span>
        {/* </Link> */}
      </div>
      <div className="navbar__links">
        <Link to="/story" className="navbar__link">story</Link>
        <DropdownList/>
        <Link to="/events" className="navbar__link">events</Link>
        <Link to="/store" className="navbar__link">store</Link>
        <Link to="/login" className="navbar__link">join/login</Link>
      </div>
    </header>
  )
}

export default Navbar;
