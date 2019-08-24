import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import DropdownList from './DropdownList.jsx';

function Navbar(props) {
  console.log('from navbar;', props);
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
        <NavLink to="/story" className="navbar__link">story</NavLink>
        <DropdownList/>
        <NavLink to="/events" className="navbar__link">events</NavLink>
        <NavLink to="/store" className="navbar__link">store</NavLink>
        <NavLink to="/login" className="navbar__link">join/login</NavLink>
      </div>
    </header>
  )
}

export default withRouter(Navbar);
